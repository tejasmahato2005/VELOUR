"use client";

import React from "react";
import { useCart } from "@/lib/store";
import { IconCheck, IconClose } from "./Icons";

export function ToastContainer() {
  const { toasts, removeToast } = useCart();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite" aria-atomic="true">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast-item">
          <IconCheck size={16} />
          <span>{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            style={{ marginLeft: "8px", opacity: 0.7 }}
            aria-label="Dismiss notification"
          >
            <IconClose size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
