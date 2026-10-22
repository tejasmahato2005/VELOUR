"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconCheck, IconMail } from "@/components/Icons";
import { insforge, getCurrentUser } from "@/lib/insforge";

export default function LoginPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [mode, setMode] = useState<"form" | "verify">("form");

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCallbackUrl = useCallback(() => {
    if (typeof window === "undefined") return "/profile";
    return new URLSearchParams(window.location.search).get("callbackUrl") || "/profile";
  }, []);

  // Already signed in? Send them to their callback (or profile).
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const callbackUrl =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("callbackUrl") || "/profile"
          : "/profile";
      const user = await getCurrentUser();
      if (!cancelled && user) {
        router.push(callbackUrl);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [router]);

  const clearError = useCallback(() => setError(null), []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!signInEmail.trim() || !signInPassword.trim()) {
      setError("Email and password are required");
      return;
    }
    setLoading(true);
    try {
      const { data, error: err } = await insforge.auth.signInWithPassword({
        email: signInEmail.trim(),
        password: signInPassword,
      });
      if (err) {
        setError(err.message || "Sign in failed. Please try again.");
        setLoading(false);
        return;
      }
      if (!data?.user) {
        setError("Sign in failed. Please try again.");
        setLoading(false);
        return;
      }
      router.push(getCallbackUrl());
    } catch {
      setError("Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!signUpName.trim()) {
      setError("Full name is required");
      return;
    }
    if (!signUpEmail.trim()) {
      setError("Email address is required");
      return;
    }
    if (!signUpPassword || signUpPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    try {
      const { data, error: err } = await insforge.auth.signUp({
        email: signUpEmail.trim(),
        password: signUpPassword,
        name: signUpName.trim(),
      });
      if (err) {
        setError(err.message || "Could not create account. Please try again.");
        setLoading(false);
        return;
      }
      if (data?.requireEmailVerification) {
        // Email verification is on: a code was sent to the inbox.
        setMode("verify");
        setVerifyEmail(signUpEmail.trim());
        setLoading(false);
        return;
      }
      if (data?.accessToken) {
        router.push(getCallbackUrl());
      }
    } catch {
      setError("Could not create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    clearError();
    setLoading(true);
    try {
      const { error: err } = await insforge.auth.resendVerificationEmail({
        email: verifyEmail,
        redirectTo: `${window.location.origin}/login`,
      });
      if (err) {
        setError(err.message || "Could not resend the code.");
      } else {
        setError(null);
      }
    } catch {
      setError("Could not resend the code.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!verifyCode.trim() || verifyCode.trim().length !== 6) {
      setError("Please enter the 6-digit code sent to your email");
      return;
    }
    setLoading(true);
    try {
      const { data, error: err } = await insforge.auth.verifyEmail({
        email: verifyEmail,
        otp: verifyCode.trim(),
      });
      if (err) {
        setError(err.message || "Invalid or expired code.");
        setLoading(false);
        return;
      }
      if (data?.accessToken) {
        router.push(getCallbackUrl());
      } else {
        setError("Verification did not complete. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderSignIn = () => (
    <form onSubmit={handleSignIn} noValidate>
      <div className="form-group">
        <label htmlFor="signin-email" className="form-label">
          Email Address
        </label>
        <input
          id="signin-email"
          type="email"
          value={signInEmail}
          onChange={(e) => {
            setSignInEmail(e.target.value);
            clearError();
          }}
          className="form-input"
          placeholder="name@domain.com"
          required
        />
      </div>

      <div className="form-group" style={{ marginTop: "14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor="signin-password" className="form-label">
            Password
          </label>
          <a
            href="#forgot"
            onClick={(e) => {
              e.preventDefault();
              setError(null);
            }}
            style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}
          >
            Forgot Password?
          </a>
        </div>
        <input
          id="signin-password"
          type="password"
          value={signInPassword}
          onChange={(e) => {
            setSignInPassword(e.target.value);
            clearError();
          }}
          className="form-input"
          placeholder="••••••••••••"
          required
        />
      </div>

      {error && (
        <div
          style={{
            marginTop: "12px",
            padding: "10px 14px",
            backgroundColor: "#fbeaea",
            border: "1px solid var(--accent-red)",
            color: "var(--accent-red)",
            fontSize: "0.8rem",
            borderRadius: 6,
          }}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary btn-full"
        style={{ marginTop: "24px" }}
      >
        {loading ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );

  const renderSignUp = () => (
    <form onSubmit={handleSignUp} noValidate>
      <div className="form-group">
        <label htmlFor="signup-name" className="form-label">
          Full Name
        </label>
        <input
          id="signup-name"
          type="text"
          value={signUpName}
          onChange={(e) => {
            setSignUpName(e.target.value);
            clearError();
          }}
          className="form-input"
          placeholder="Elena Rostova"
          required
        />
      </div>

      <div className="form-group" style={{ marginTop: "14px" }}>
        <label htmlFor="signup-email" className="form-label">
          Email Address
        </label>
        <input
          id="signup-email"
          type="email"
          value={signUpEmail}
          onChange={(e) => {
            setSignUpEmail(e.target.value);
            clearError();
          }}
          className="form-input"
          placeholder="elena@domain.com"
          required
        />
      </div>

      <div className="form-group" style={{ marginTop: "14px" }}>
        <label htmlFor="signup-password" className="form-label">
          Create Password
        </label>
        <input
          id="signup-password"
          type="password"
          value={signUpPassword}
          onChange={(e) => {
            setSignUpPassword(e.target.value);
            clearError();
          }}
          className="form-input"
          placeholder="At least 6 characters"
          required
        />
      </div>

      {error && (
        <div
          style={{
            marginTop: "12px",
            padding: "10px 14px",
            backgroundColor: "#fbeaea",
            border: "1px solid var(--accent-red)",
            color: "var(--accent-red)",
            fontSize: "0.8rem",
            borderRadius: 6,
          }}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary btn-full"
        style={{ marginTop: "24px" }}
      >
        {loading ? "Creating account…" : "Create Account"}
      </button>
    </form>
  );

  const renderVerify = () => (
    <>
      <div
        style={{
          backgroundColor: "var(--bg-subtle)",
          border: "1px solid var(--border-light)",
          padding: "20px",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        <div style={{ marginBottom: "10px", display: "block", margin: "0 auto 10px" }}>
          <IconMail size={20} />
        </div>
        <p style={{ fontSize: "0.9rem", fontWeight: 500, marginBottom: "6px" }}>
          Check your inbox
        </p>
        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
          A 6-digit verification code was sent to <strong>{verifyEmail}</strong>.
        </p>
      </div>

      <form onSubmit={handleVerifyCode} noValidate>
        <div className="form-group">
          <label htmlFor="verify-code" className="form-label">
            Verification Code
          </label>
          <input
            id="verify-code"
            type="text"
            value={verifyCode}
            onChange={(e) => {
              setVerifyCode(e.target.value);
              clearError();
            }}
            className="form-input"
            placeholder="123456"
            maxLength={6}
            required
          />
        </div>

        {error && (
          <div
            style={{
              marginTop: "12px",
              padding: "10px 14px",
              backgroundColor: "#fbeaea",
              border: "1px solid var(--accent-red)",
              color: "var(--accent-red)",
              fontSize: "0.8rem",
              borderRadius: 6,
            }}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary btn-full"
          style={{ marginTop: "24px" }}
        >
          {loading ? "Verifying…" : "Verify Code"}
        </button>

        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <button
            type="button"
            onClick={handleResendCode}
            disabled={loading}
            style={{
              background: "none",
              border: "none",
              color: "var(--accent-gold-dark)",
              fontSize: "0.78rem",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {loading ? "" : "Didn't receive it? Resend code"}
          </button>
        </div>
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <Link href="/login" onClick={() => setMode("form")} style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            Back to sign in
          </Link>
        </div>
      </form>
    </>
  );

  return (
    <div className="section" style={{ minHeight: "75vh", display: "flex", alignItems: "center" }}>
      <div className="container-narrow">
        <div className="auth-box">
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <span className="subheading">Client Portal</span>
            <h1 className="heading-1" style={{ marginTop: "6px" }}>
              VELOUR
            </h1>
          </div>

          {/* Tab Navigation */}
          <div className="auth-tabs" role="tablist">
            <button
              type="button"
              className={`auth-tab ${activeTab === "signin" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("signin");
                setMode("form");
                setError(null);
              }}
              role="tab"
              aria-selected={activeTab === "signin"}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("signup");
                setMode("form");
                setError(null);
              }}
              role="tab"
              aria-selected={activeTab === "signup"}
            >
              Create Account
            </button>
          </div>

          {mode === "verify" ? (
            renderVerify()
          ) : activeTab === "signin" ? (
            renderSignIn()
          ) : (
            renderSignUp()
          )}

          <div
            style={{
              marginTop: "24px",
              paddingTop: "18px",
              borderTop: "1px solid var(--border-light)",
              textAlign: "center",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              letterSpacing: "0.06em",
            }}
          >
            By continuing, you agree to VELOUR&apos;s Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
}
