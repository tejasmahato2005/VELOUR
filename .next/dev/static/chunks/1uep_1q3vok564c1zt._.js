(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/free claude code/node_modules/@insforge/sdk/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AI",
    ()=>AI,
    "Auth",
    ()=>Auth,
    "AuthChangeEvent",
    ()=>AuthChangeEvent,
    "Database",
    ()=>Database,
    "Emails",
    ()=>Emails,
    "Functions",
    ()=>Functions,
    "HttpClient",
    ()=>HttpClient,
    "InsForgeClient",
    ()=>InsForgeClient,
    "InsForgeError",
    ()=>InsForgeError,
    "Logger",
    ()=>Logger,
    "Payments",
    ()=>Payments,
    "Realtime",
    ()=>Realtime,
    "Storage",
    ()=>Storage,
    "StorageBucket",
    ()=>StorageBucket,
    "createAdminClient",
    ()=>createAdminClient,
    "createClient",
    ()=>createClient,
    "default",
    ()=>src_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/free claude code/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/modules/auth/auth.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/free claude code/node_modules/@insforge/shared-schemas/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$error$2d$codes$2e$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/@insforge/shared-schemas/dist/error-codes.schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/@insforge/shared-schemas/dist/auth.schema.js [app-client] (ecmascript)");
// src/modules/database-postgrest.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-client] (ecmascript)");
// src/types.ts
var InsForgeError = class _InsForgeError extends Error {
    constructor(message, statusCode, error, nextActions){
        super(message);
        this.name = "InsForgeError";
        this.statusCode = statusCode;
        this.error = error;
        this.nextActions = nextActions;
    }
    static fromApiError(apiError) {
        return new _InsForgeError(apiError.message, apiError.statusCode, apiError.error, apiError.nextActions);
    }
};
// src/lib/logger.ts
var SENSITIVE_HEADERS = [
    "authorization",
    "x-api-key",
    "cookie",
    "set-cookie"
];
var SENSITIVE_BODY_KEYS = [
    "password",
    "token",
    "accesstoken",
    "refreshtoken",
    "authorization",
    "secret",
    "apikey",
    "api_key",
    "email",
    "ssn",
    "creditcard",
    "credit_card"
];
function redactHeaders(headers) {
    const redacted = {};
    for (const [key, value] of Object.entries(headers)){
        if (SENSITIVE_HEADERS.includes(key.toLowerCase())) {
            redacted[key] = "***REDACTED***";
        } else {
            redacted[key] = value;
        }
    }
    return redacted;
}
function sanitizeBody(body) {
    if (body === null || body === void 0) {
        return body;
    }
    if (typeof body === "string") {
        try {
            const parsed = JSON.parse(body);
            return sanitizeBody(parsed);
        } catch  {
            return body;
        }
    }
    if (Array.isArray(body)) {
        return body.map(sanitizeBody);
    }
    if (typeof body === "object") {
        const sanitized = {};
        for (const [key, value] of Object.entries(body)){
            if (SENSITIVE_BODY_KEYS.includes(key.toLowerCase().replace(/[-_]/g, ""))) {
                sanitized[key] = "***REDACTED***";
            } else {
                sanitized[key] = sanitizeBody(value);
            }
        }
        return sanitized;
    }
    return body;
}
function formatBody(body) {
    if (body === void 0 || body === null) {
        return "";
    }
    if (typeof body === "string") {
        try {
            return JSON.stringify(JSON.parse(body), null, 2);
        } catch  {
            return body;
        }
    }
    if (typeof FormData !== "undefined" && body instanceof FormData) {
        return "[FormData]";
    }
    try {
        return JSON.stringify(body, null, 2);
    } catch  {
        return "[Unserializable body]";
    }
}
var Logger = class {
    /**
   * Creates a new Logger instance.
   * @param debug - Set to true to enable console logging, or pass a custom log function
   */ constructor(debug){
        if (typeof debug === "function") {
            this.enabled = true;
            this.customLog = debug;
        } else {
            this.enabled = !!debug;
            this.customLog = null;
        }
    }
    /**
   * Logs a debug message at the info level.
   * @param message - The message to log
   * @param args - Additional arguments to pass to the log function
   */ log(message, ...args) {
        if (!this.enabled) {
            return;
        }
        const formatted = `[InsForge Debug] ${message}`;
        if (this.customLog) {
            this.customLog(formatted, ...args);
        } else {
            console.log(formatted, ...args);
        }
    }
    /**
   * Logs a debug message at the warning level.
   * @param message - The message to log
   * @param args - Additional arguments to pass to the log function
   */ warn(message, ...args) {
        if (!this.enabled) {
            return;
        }
        const formatted = `[InsForge Debug] ${message}`;
        if (this.customLog) {
            this.customLog(formatted, ...args);
        } else {
            console.warn(formatted, ...args);
        }
    }
    /**
   * Logs a debug message at the error level.
   * @param message - The message to log
   * @param args - Additional arguments to pass to the log function
   */ error(message, ...args) {
        if (!this.enabled) {
            return;
        }
        const formatted = `[InsForge Debug] ${message}`;
        if (this.customLog) {
            this.customLog(formatted, ...args);
        } else {
            console.error(formatted, ...args);
        }
    }
    /**
   * Logs an outgoing HTTP request with method, URL, headers, and body.
   * Sensitive headers and body fields are automatically redacted.
   * @param method - HTTP method (GET, POST, etc.)
   * @param url - The full request URL
   * @param headers - Request headers (sensitive values will be redacted)
   * @param body - Request body (sensitive fields will be masked)
   */ logRequest(method, url, headers, body) {
        if (!this.enabled) {
            return;
        }
        const parts = [
            `\u2192 ${method} ${url}`
        ];
        if (headers && Object.keys(headers).length > 0) {
            parts.push(`  Headers: ${JSON.stringify(redactHeaders(headers))}`);
        }
        const formattedBody = formatBody(sanitizeBody(body));
        if (formattedBody) {
            const truncated = formattedBody.length > 1e3 ? formattedBody.slice(0, 1e3) + "... [truncated]" : formattedBody;
            parts.push(`  Body: ${truncated}`);
        }
        this.log(parts.join("\n"));
    }
    /**
   * Logs an incoming HTTP response with method, URL, status, duration, and body.
   * Error responses (4xx/5xx) are logged at the error level.
   * @param method - HTTP method (GET, POST, etc.)
   * @param url - The full request URL
   * @param status - HTTP response status code
   * @param durationMs - Request duration in milliseconds
   * @param body - Response body (sensitive fields will be masked, large bodies truncated)
   */ logResponse(method, url, status, durationMs, body) {
        if (!this.enabled) {
            return;
        }
        const parts = [
            `\u2190 ${method} ${url} ${status} (${durationMs}ms)`
        ];
        const formattedBody = formatBody(sanitizeBody(body));
        if (formattedBody) {
            const truncated = formattedBody.length > 1e3 ? formattedBody.slice(0, 1e3) + "... [truncated]" : formattedBody;
            parts.push(`  Body: ${truncated}`);
        }
        if (status >= 400) {
            this.error(parts.join("\n"));
        } else {
            this.log(parts.join("\n"));
        }
    }
};
// src/lib/token-manager.ts
var AuthChangeEvent = {
    SIGNED_IN: "signedIn",
    SIGNED_OUT: "signedOut",
    TOKEN_REFRESHED: "tokenRefreshed"
};
var CSRF_TOKEN_COOKIE = "insforge_csrf_token";
function getCsrfToken() {
    if (typeof document === "undefined") {
        return null;
    }
    const match = document.cookie.split(";").find((c)=>c.trim().startsWith(`${CSRF_TOKEN_COOKIE}=`));
    if (!match) {
        return null;
    }
    return match.split("=")[1] || null;
}
function setCsrfToken(token) {
    if (typeof document === "undefined") {
        return;
    }
    const maxAge = 7 * 24 * 60 * 60;
    const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${CSRF_TOKEN_COOKIE}=${encodeURIComponent(token)}; path=/; max-age=${maxAge}; SameSite=Lax${secure}`;
}
function clearCsrfToken() {
    if (typeof document === "undefined") {
        return;
    }
    const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${CSRF_TOKEN_COOKIE}=; path=/; max-age=0; SameSite=Lax${secure}`;
}
var TokenManager = class {
    constructor(){
        // In-memory storage
        this.accessToken = null;
        this.user = null;
        this.authStateChangeCallbacks = /* @__PURE__ */ new Map();
    }
    /**
   * Save session in memory
   */ saveSession(session, event = AuthChangeEvent.SIGNED_IN) {
        const tokenChanged = session.accessToken !== this.accessToken;
        this.accessToken = session.accessToken;
        this.user = session.user;
        if (tokenChanged) {
            this.notifyAuthStateChange(event);
        }
    }
    /**
   * Get current session
   */ getSession() {
        if (!this.accessToken || !this.user) {
            return null;
        }
        return {
            accessToken: this.accessToken,
            user: this.user
        };
    }
    /**
   * Get access token
   */ getAccessToken() {
        return this.accessToken;
    }
    /**
   * Set access token
   */ setAccessToken(token, event = AuthChangeEvent.SIGNED_IN) {
        const tokenChanged = token !== this.accessToken;
        this.accessToken = token;
        if (tokenChanged) {
            this.notifyAuthStateChange(event);
        }
    }
    /**
   * Get user
   */ getUser() {
        return this.user;
    }
    /**
   * Set user
   */ setUser(user) {
        this.user = user;
    }
    /**
   * Clear in-memory session
   */ clearSession() {
        const hadToken = this.accessToken !== null;
        this.accessToken = null;
        this.user = null;
        if (hadToken) {
            this.notifyAuthStateChange(AuthChangeEvent.SIGNED_OUT);
        }
    }
    onAuthStateChange(callback) {
        const id = Symbol("auth-state-change");
        this.authStateChangeCallbacks.set(id, callback);
        return ()=>this.authStateChangeCallbacks.delete(id);
    }
    notifyAuthStateChange(event) {
        for (const callback of this.authStateChangeCallbacks.values()){
            try {
                callback(event);
            } catch (error) {
                console.error("Error in auth state change callback:", error);
            }
        }
    }
};
// src/lib/jwt.ts
function decodeBase64Url(input) {
    const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(normalized.length + (4 - normalized.length % 4) % 4, "=");
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (char)=>char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
}
function getJwtExpiration(token) {
    if (!token) {
        return null;
    }
    const [, payload] = token.split(".");
    if (!payload) {
        return null;
    }
    try {
        const parsed = JSON.parse(decodeBase64Url(payload));
        if (typeof parsed.exp !== "number" || !Number.isFinite(parsed.exp)) {
            return null;
        }
        return new Date(parsed.exp * 1e3);
    } catch  {
        return null;
    }
}
function isJwtExpiredOrExpiring(token, leewaySeconds = 60) {
    if (!token) {
        return false;
    }
    const expires = getJwtExpiration(token);
    if (!expires) {
        return true;
    }
    return expires.getTime() <= Date.now() + leewaySeconds * 1e3;
}
// src/lib/http-client.ts
var RETRYABLE_STATUS_CODES = /* @__PURE__ */ new Set([
    500,
    502,
    503,
    504
]);
var IDEMPOTENT_METHODS = /* @__PURE__ */ new Set([
    "GET",
    "HEAD",
    "PUT",
    "DELETE",
    "OPTIONS"
]);
var REFRESHABLE_AUTH_ERROR_CODES = /* @__PURE__ */ new Set([
    "AUTH_UNAUTHORIZED",
    "PGRST301"
]);
function serializeBody(method, body, headers) {
    if (body === void 0) {
        return void 0;
    }
    if (method === "GET" || method === "HEAD") {
        return void 0;
    }
    if (typeof FormData !== "undefined" && body instanceof FormData) {
        return body;
    }
    headers["Content-Type"] = "application/json;charset=UTF-8";
    return JSON.stringify(body);
}
async function parseResponse(response) {
    if (response.status === 204) {
        return void 0;
    }
    let data;
    const contentType = response.headers.get("content-type");
    try {
        if (contentType?.includes("json")) {
            data = await response.json();
        } else {
            data = await response.text();
        }
    } catch (parseErr) {
        throw new InsForgeError(`Failed to parse response body: ${parseErr?.message || "Unknown error"}`, response.status, response.ok ? "PARSE_ERROR" : "REQUEST_FAILED");
    }
    if (!response.ok) {
        if (data && typeof data === "object" && "error" in data) {
            data.statusCode ?? (data.statusCode = data.status ?? response.status);
            const error = InsForgeError.fromApiError(data);
            Object.keys(data).forEach((key)=>{
                if (key !== "error" && key !== "message" && key !== "statusCode") {
                    error[key] = data[key];
                }
            });
            throw error;
        }
        throw new InsForgeError(`Request failed: ${response.statusText}`, response.status, "REQUEST_FAILED");
    }
    return data;
}
var HttpClient = class {
    /**
   * Creates a new HttpClient instance.
   * @param config - SDK configuration including baseUrl, timeout, retry settings, and fetch implementation.
   * @param tokenManager - Token manager for session persistence.
   * @param logger - Optional logger instance for request/response debugging.
   */ constructor(config, tokenManager, logger){
        this.userToken = null;
        this.isRefreshing = false;
        this.refreshPromise = null;
        this.refreshToken = null;
        this.config = config;
        this.baseUrl = config.baseUrl || "http://localhost:7130";
        this.fetch = config.fetch || (globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0);
        this.anonKey = config.anonKey;
        this.defaultHeaders = {
            ...config.headers
        };
        this.tokenManager = tokenManager ?? new TokenManager();
        this.logger = logger || new Logger(false);
        this.timeout = config.timeout ?? 3e4;
        this.retryCount = config.retryCount ?? 3;
        this.retryDelay = config.retryDelay ?? 500;
        if (!this.fetch) {
            throw new Error("Fetch is not available. Please provide a fetch implementation in the config.");
        }
    }
    /**
   * Builds a full URL from a path and optional query parameters.
   * Normalizes PostgREST select parameters for proper syntax.
   */ buildUrl(path, params) {
        const url = new URL(path, this.baseUrl);
        if (params) {
            Object.entries(params).forEach(([key, value])=>{
                if (key === "select") {
                    let normalizedValue = value.replace(/\s+/g, " ").trim();
                    normalizedValue = normalizedValue.replace(/\s*\(\s*/g, "(").replace(/\s*\)\s*/g, ")").replace(/\(\s+/g, "(").replace(/\s+\)/g, ")").replace(/,\s+(?=[^()]*\))/g, ",");
                    url.searchParams.append(key, normalizedValue);
                } else {
                    url.searchParams.append(key, value);
                }
            });
        }
        return url.toString();
    }
    /** Checks if an HTTP status code is eligible for retry (5xx server errors). */ isRetryableStatus(status) {
        return RETRYABLE_STATUS_CODES.has(status);
    }
    /**
   * Computes the delay before the next retry using exponential backoff with jitter.
   * @param attempt - The current retry attempt number (1-based).
   * @returns Delay in milliseconds.
   */ computeRetryDelay(attempt) {
        const base = this.retryDelay * Math.pow(2, attempt - 1);
        const jitter = base * (0.85 + Math.random() * 0.3);
        return Math.round(jitter);
    }
    shouldRefreshAccessToken(statusCode, errorCode, authToken, options = {}) {
        return statusCode === 401 && REFRESHABLE_AUTH_ERROR_CODES.has(errorCode ?? "") && !this.config.isServerMode && !this.config.accessToken && !this.config.edgeFunctionToken && !options.skipAuthRefresh && authToken !== null;
    }
    async fetchWithRetry(args) {
        const { method, url, headers, body, fetchOptions, callerSignal, maxAttempts } = args;
        let lastError;
        for(let attempt = 0; attempt <= maxAttempts; attempt++){
            if (attempt > 0) {
                const delay = this.computeRetryDelay(attempt);
                this.logger.warn(`Retry ${attempt}/${maxAttempts} for ${method} ${url} in ${delay}ms`);
                if (callerSignal?.aborted) {
                    throw callerSignal.reason;
                }
                await new Promise((resolve, reject)=>{
                    const onAbort = ()=>{
                        clearTimeout(timer2);
                        reject(callerSignal.reason);
                    };
                    const timer2 = setTimeout(()=>{
                        if (callerSignal) {
                            callerSignal.removeEventListener("abort", onAbort);
                        }
                        resolve();
                    }, delay);
                    if (callerSignal) {
                        callerSignal.addEventListener("abort", onAbort, {
                            once: true
                        });
                    }
                });
            }
            let controller;
            let timer;
            if (this.timeout > 0 || callerSignal) {
                controller = new AbortController();
                if (this.timeout > 0) {
                    timer = setTimeout(()=>controller.abort(), this.timeout);
                }
                if (callerSignal) {
                    if (callerSignal.aborted) {
                        controller.abort(callerSignal.reason);
                    } else {
                        const onCallerAbort = ()=>controller.abort(callerSignal.reason);
                        callerSignal.addEventListener("abort", onCallerAbort, {
                            once: true
                        });
                        controller.signal.addEventListener("abort", ()=>{
                            callerSignal.removeEventListener("abort", onCallerAbort);
                        }, {
                            once: true
                        });
                    }
                }
            }
            try {
                const response = await this.fetch(url, {
                    method,
                    headers,
                    body,
                    ...fetchOptions,
                    ...controller ? {
                        signal: controller.signal
                    } : {}
                });
                if (this.isRetryableStatus(response.status) && attempt < maxAttempts) {
                    if (timer !== void 0) {
                        clearTimeout(timer);
                    }
                    await response.body?.cancel();
                    lastError = new InsForgeError(`Server error: ${response.status} ${response.statusText}`, response.status, "SERVER_ERROR");
                    continue;
                }
                if (timer !== void 0) {
                    clearTimeout(timer);
                }
                return response;
            } catch (err) {
                if (timer !== void 0) {
                    clearTimeout(timer);
                }
                if (err?.name === "AbortError") {
                    if (controller && controller.signal.aborted && this.timeout > 0 && !callerSignal?.aborted) {
                        throw new InsForgeError(`Request timed out after ${this.timeout}ms`, 408, "REQUEST_TIMEOUT");
                    }
                    throw err;
                }
                if (attempt < maxAttempts) {
                    lastError = err;
                    continue;
                }
                throw new InsForgeError(`Network request failed: ${err?.message || "Unknown error"}`, 0, "NETWORK_ERROR");
            }
        }
        throw lastError || new InsForgeError("Request failed after all retry attempts", 0, "NETWORK_ERROR");
    }
    /**
   * Performs an HTTP request with automatic retry and timeout handling.
   * Retries on network errors and 5xx server errors with exponential backoff.
   * Client errors (4xx) and timeouts are thrown immediately without retry.
   * @param method - HTTP method (GET, POST, PUT, PATCH, DELETE).
   * @param path - API path relative to the base URL.
   * @param options - Optional request configuration including headers, body, and query params.
   * @returns Parsed response data.
   * @throws {InsForgeError} On timeout, network failure, or HTTP error responses.
   */ async handleRequest(method, path, options = {}, tokenOverride) {
        const { params, headers = {}, body, skipAuthRefresh: _skipAuthRefresh, signal: callerSignal, ...fetchOptions } = options;
        const url = this.buildUrl(path, params);
        const startTime = Date.now();
        const canRetry = IDEMPOTENT_METHODS.has(method.toUpperCase()) || options.idempotent === true;
        const maxAttempts = canRetry ? this.retryCount : 0;
        const requestHeaders = {
            ...this.defaultHeaders
        };
        const authToken = tokenOverride ?? this.userToken ?? this.anonKey;
        if (authToken) {
            requestHeaders["Authorization"] = `Bearer ${authToken}`;
        }
        const processedBody = serializeBody(method, body, requestHeaders);
        const setRequestHeader = (key, value)=>{
            if (key.toLowerCase() === "authorization") {
                delete requestHeaders["Authorization"];
                delete requestHeaders["authorization"];
                requestHeaders["Authorization"] = value;
                return;
            }
            requestHeaders[key] = value;
        };
        if (headers instanceof Headers) {
            headers.forEach((value, key)=>{
                setRequestHeader(key, value);
            });
        } else if (Array.isArray(headers)) {
            headers.forEach(([key, value])=>{
                setRequestHeader(key, value);
            });
        } else {
            Object.entries(headers).forEach(([key, value])=>{
                setRequestHeader(key, value);
            });
        }
        this.logger.logRequest(method, url, requestHeaders, processedBody);
        const response = await this.fetchWithRetry({
            method,
            url,
            headers: requestHeaders,
            body: processedBody,
            fetchOptions,
            callerSignal,
            maxAttempts
        });
        let data;
        try {
            data = await parseResponse(response);
        } catch (err) {
            if (err instanceof InsForgeError) {
                this.logger.logResponse(method, url, err.statusCode || response.status, Date.now() - startTime, err);
            }
            throw err;
        }
        this.logger.logResponse(method, url, response.status, Date.now() - startTime, data);
        return data;
    }
    async request(method, path, options = {}) {
        const tokenUsed = this.userToken;
        try {
            return await this.handleRequest(method, path, {
                ...options
            }, tokenUsed);
        } catch (error) {
            if (!(error instanceof InsForgeError) || !this.shouldRefreshAccessToken(error.statusCode, error.error, tokenUsed, options)) {
                throw error;
            }
            if (tokenUsed !== this.userToken) {
                if (this.userToken === null) {
                    throw error;
                }
                return await this.handleRequest(method, path, {
                    ...options,
                    skipAuthRefresh: true
                }, this.userToken);
            }
            try {
                await this.refreshAndSaveSession();
            } catch (error2) {
                if (error2 instanceof InsForgeError && (error2.statusCode === 401 || error2.statusCode === 403)) {
                    this.clearAuthSession();
                }
                throw error2;
            }
            return await this.handleRequest(method, path, {
                ...options,
                skipAuthRefresh: true
            });
        }
    }
    /**
   * Performs an SDK-configured fetch and returns the raw Response.
   * This is used by clients such as postgrest-js that need to own response
   * parsing while still sharing SDK auth and refresh behavior.
   */ async rawFetch(input, init, options = {}) {
        const request = typeof Request !== "undefined" && input instanceof Request ? input : void 0;
        const { method: initMethod, headers: initHeaders, body: initBody, signal: initSignal, ...fetchOptions } = init ?? {};
        const method = initMethod ?? request?.method ?? "GET";
        const url = request?.url ?? input.toString();
        const startTime = Date.now();
        const tokenUsed = this.userToken;
        const headers = new Headers({
            ...this.defaultHeaders
        });
        const authToken = tokenUsed ?? this.anonKey;
        if (authToken) {
            headers.set("Authorization", `Bearer ${authToken}`);
        }
        request?.headers.forEach((value, key)=>{
            headers.set(key, value);
        });
        new Headers(initHeaders).forEach((value, key)=>{
            headers.set(key, value);
        });
        const requestHeaders = {};
        headers.forEach((value, key)=>{
            requestHeaders[key] = value;
        });
        const sourceBody = initBody ?? request?.body ?? void 0;
        let body = sourceBody;
        let retryInit = init;
        if (typeof ReadableStream !== "undefined" && sourceBody instanceof ReadableStream) {
            body = await new Response(sourceBody).arrayBuffer();
            retryInit = {
                ...init ?? {},
                body
            };
        }
        const callerSignal = initSignal ?? request?.signal;
        const maxAttempts = IDEMPOTENT_METHODS.has(method.toUpperCase()) ? this.retryCount : 0;
        this.logger.logRequest(method, url, requestHeaders, body);
        const response = await this.fetchWithRetry({
            method,
            url,
            headers: requestHeaders,
            body,
            fetchOptions,
            callerSignal,
            maxAttempts
        });
        this.logger.logResponse(method, url, response.status, Date.now() - startTime);
        let errorCode = null;
        if (response.status === 401) {
            try {
                const data = await response.clone().json();
                if (data && typeof data === "object") {
                    const candidate = data.error ?? data.code;
                    if (typeof candidate === "string") {
                        errorCode = candidate;
                    }
                }
            } catch  {}
        }
        if (!this.shouldRefreshAccessToken(response.status, errorCode, tokenUsed, options)) {
            return response;
        }
        if (tokenUsed !== this.userToken) {
            if (this.userToken === null) {
                return response;
            }
            const retryHeaders2 = new Headers(initHeaders);
            retryHeaders2.set("Authorization", `Bearer ${this.userToken}`);
            return await this.rawFetch(input, {
                ...retryInit,
                headers: retryHeaders2
            }, {
                skipAuthRefresh: true
            });
        }
        let newTokenData;
        try {
            newTokenData = await this.refreshAndSaveSession();
        } catch (error) {
            if (error instanceof InsForgeError && (error.statusCode === 401 || error.statusCode === 403)) {
                this.clearAuthSession();
            }
            throw error;
        }
        const retryHeaders = new Headers(initHeaders);
        retryHeaders.set("Authorization", `Bearer ${newTokenData.accessToken}`);
        return await this.rawFetch(input, {
            ...retryInit,
            headers: retryHeaders
        }, {
            skipAuthRefresh: true
        });
    }
    /** Performs a GET request. */ get(path, options) {
        return this.request("GET", path, options);
    }
    /** Performs a POST request with an optional JSON body. */ post(path, body, options) {
        return this.request("POST", path, {
            ...options,
            body
        });
    }
    /** Performs a PUT request with an optional JSON body. */ put(path, body, options) {
        return this.request("PUT", path, {
            ...options,
            body
        });
    }
    /** Performs a PATCH request with an optional JSON body. */ patch(path, body, options) {
        return this.request("PATCH", path, {
            ...options,
            body
        });
    }
    /** Performs a DELETE request. */ delete(path, options) {
        return this.request("DELETE", path, options);
    }
    /** Sets or clears the user authentication token for subsequent requests. */ setAuthToken(token) {
        this.userToken = token;
    }
    setRefreshToken(token) {
        this.refreshToken = token;
    }
    /** Returns the current default headers including the authorization header if set. */ getHeaders() {
        const headers = {
            ...this.defaultHeaders
        };
        const authToken = this.userToken || this.anonKey;
        if (authToken) {
            headers["Authorization"] = `Bearer ${authToken}`;
        }
        return headers;
    }
    async refreshAccessToken() {
        if (this.isRefreshing) {
            return this.refreshPromise;
        }
        this.isRefreshing = true;
        this.refreshPromise = (async ()=>{
            try {
                const csrfToken = getCsrfToken();
                const body = this.refreshToken ? {
                    refreshToken: this.refreshToken
                } : void 0;
                const response = await this.handleRequest("POST", this.refreshToken ? "/api/auth/refresh?client_type=mobile" : "/api/auth/refresh", {
                    body,
                    headers: csrfToken ? {
                        "X-CSRF-Token": csrfToken
                    } : {},
                    credentials: "include"
                });
                return response;
            } finally{
                this.isRefreshing = false;
                this.refreshPromise = null;
            }
        })();
        return this.refreshPromise;
    }
    /** Returns a token safe to use for a new connection handshake. */ async getValidAccessToken(leewaySeconds = 60) {
        const accessToken = this.tokenManager.getAccessToken() ?? this.userToken;
        if (!accessToken || !isJwtExpiredOrExpiring(accessToken, leewaySeconds)) {
            return accessToken;
        }
        const canRefresh = !this.config.isServerMode && !this.config.accessToken && !this.config.edgeFunctionToken && this.userToken !== null;
        if (!canRefresh) {
            return accessToken;
        }
        try {
            const refreshed = await this.refreshAndSaveSession();
            return refreshed.accessToken;
        } catch (error) {
            if (error instanceof InsForgeError && (error.statusCode === 401 || error.statusCode === 403) && this.userToken === accessToken) {
                this.clearAuthSession();
            }
            throw error;
        }
    }
    async refreshAndSaveSession() {
        const newTokenData = await this.refreshAccessToken();
        this.setAuthToken(newTokenData.accessToken);
        this.tokenManager.saveSession(newTokenData, AuthChangeEvent.TOKEN_REFRESHED);
        if (newTokenData.csrfToken) {
            setCsrfToken(newTokenData.csrfToken);
        }
        if (newTokenData.refreshToken) {
            this.setRefreshToken(newTokenData.refreshToken);
        }
        return newTokenData;
    }
    clearAuthSession() {
        this.tokenManager.clearSession();
        this.userToken = null;
        this.refreshToken = null;
        clearCsrfToken();
    }
};
// src/modules/auth/helpers.ts
var PKCE_VERIFIER_KEY = "insforge_pkce_verifier";
async function getWebCrypto() {
    const webCrypto = globalThis.crypto;
    if (typeof webCrypto?.getRandomValues === "function" && webCrypto.subtle) {
        return webCrypto;
    }
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions?.node) {
        const { webcrypto } = await __turbopack_context__.A("[project]/free claude code/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript, async loader)");
        return webcrypto;
    }
    throw new Error("Web Crypto API is not available in this environment");
}
function base64UrlEncode(buffer) {
    const base64 = btoa(String.fromCharCode(...buffer));
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function generateCodeVerifier() {
    const webCrypto = await getWebCrypto();
    const array = new Uint8Array(32);
    webCrypto.getRandomValues(array);
    return base64UrlEncode(array);
}
async function generateCodeChallenge(verifier) {
    const webCrypto = await getWebCrypto();
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const hash = await webCrypto.subtle.digest("SHA-256", data);
    return base64UrlEncode(new Uint8Array(hash));
}
function storePkceVerifier(verifier) {
    if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem(PKCE_VERIFIER_KEY, verifier);
    }
}
function retrievePkceVerifier() {
    if (typeof sessionStorage === "undefined") {
        return null;
    }
    const verifier = sessionStorage.getItem(PKCE_VERIFIER_KEY);
    if (verifier) {
        sessionStorage.removeItem(PKCE_VERIFIER_KEY);
    }
    return verifier;
}
function wrapError(error, fallbackMessage) {
    if (error instanceof InsForgeError) {
        return {
            data: null,
            error
        };
    }
    return {
        data: null,
        error: new InsForgeError(error instanceof Error ? error.message : fallbackMessage, 500, "UNEXPECTED_ERROR")
    };
}
function cleanUrlParams(...params) {
    if (typeof window === "undefined") {
        return;
    }
    const url = new URL(window.location.href);
    params.forEach((p)=>url.searchParams.delete(p));
    window.history.replaceState({}, document.title, url.toString());
}
;
var Auth = class {
    constructor(http, tokenManager, options = {}){
        this.http = http;
        this.tokenManager = tokenManager;
        this.options = options;
        this.authCallbackHandled = options.detectOAuthCallback === false ? Promise.resolve() : this.detectAuthCallback();
    }
    isServerMode() {
        return !!this.options.isServerMode;
    }
    /** Subscribe to SDK authentication state changes. */ onAuthStateChange(callback) {
        return this.tokenManager.onAuthStateChange(callback);
    }
    /**
   * Save session from API response
   * Handles token storage, CSRF token, and HTTP auth header
   */ saveSessionFromResponse(response, event = AuthChangeEvent.SIGNED_IN) {
        if (!response.accessToken || !response.user) {
            return false;
        }
        const session = {
            accessToken: response.accessToken,
            user: response.user
        };
        if (!this.isServerMode() && response.csrfToken) {
            setCsrfToken(response.csrfToken);
        }
        if (!this.isServerMode()) {
            this.tokenManager.saveSession(session, event);
        }
        this.http.setAuthToken(response.accessToken);
        this.http.setRefreshToken(response.refreshToken ?? null);
        return true;
    }
    // ============================================================================
    // OAuth Callback Detection (runs on initialization)
    // ============================================================================
    /**
   * Detect and handle OAuth callback parameters in URL
   * Supports PKCE flow (insforge_code)
   */ async detectAuthCallback() {
        if (this.isServerMode() || typeof window === "undefined") {
            return;
        }
        try {
            const params = new URLSearchParams(window.location.search);
            const error = params.get("error");
            if (error) {
                cleanUrlParams("error");
                console.debug("OAuth callback error:", error);
                return;
            }
            const code = params.get("insforge_code");
            if (code) {
                cleanUrlParams("insforge_code");
                const { error: exchangeError } = await this.exchangeOAuthCode(code);
                if (exchangeError) {
                    console.debug("OAuth code exchange failed:", exchangeError.message);
                }
                return;
            }
        } catch (error) {
            console.debug("OAuth callback detection skipped:", error);
        }
    }
    // ============================================================================
    // Sign Up / Sign In / Sign Out
    // ============================================================================
    async signUp(request) {
        try {
            const response = await this.http.post(this.isServerMode() ? "/api/auth/users?client_type=mobile" : "/api/auth/users", request, {
                credentials: "include",
                skipAuthRefresh: true
            });
            if (response.accessToken && response.user) {
                this.saveSessionFromResponse(response);
            }
            if (response.refreshToken) {
                this.http.setRefreshToken(response.refreshToken);
            }
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred during sign up");
        }
    }
    async signInWithPassword(request) {
        try {
            const response = await this.http.post(this.isServerMode() ? "/api/auth/sessions?client_type=mobile" : "/api/auth/sessions", request, {
                credentials: "include",
                skipAuthRefresh: true
            });
            this.saveSessionFromResponse(response);
            if (response.refreshToken) {
                this.http.setRefreshToken(response.refreshToken);
            }
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred during sign in");
        }
    }
    /**
   * Send a one-time sign-in code to an email address.
   *
   * The response is intentionally generic whether or not an account exists, to
   * avoid account enumeration. Complete the flow with {@link Auth.verifyOtp}.
   */ async signInWithOtp(request) {
        try {
            const response = await this.http.post("/api/auth/email/send-otp", request, {
                skipAuthRefresh: true
            });
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred while sending the sign-in code");
        }
    }
    /**
   * Verify an email sign-in code and create a session.
   *
   * If the email is new, a verified passwordless user is created; `name` sets
   * the display name only on that first-time creation.
   */ async verifyOtp(request) {
        try {
            const response = await this.http.post(this.isServerMode() ? "/api/auth/sessions?client_type=mobile" : "/api/auth/sessions", // method is set last so it can never be clobbered by an untyped caller's payload.
            {
                ...request,
                method: "otp"
            }, {
                credentials: "include",
                skipAuthRefresh: true
            });
            this.saveSessionFromResponse(response);
            if (response.refreshToken) {
                this.http.setRefreshToken(response.refreshToken);
            }
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred during sign in");
        }
    }
    async signOut() {
        try {
            try {
                const serverMode = this.isServerMode();
                const csrfToken = !serverMode ? getCsrfToken() : null;
                await this.http.post(serverMode ? "/api/auth/logout?client_type=mobile" : "/api/auth/logout", void 0, {
                    credentials: "include",
                    skipAuthRefresh: true,
                    ...csrfToken ? {
                        headers: {
                            "X-CSRF-Token": csrfToken
                        }
                    } : {}
                });
            } catch  {}
            this.tokenManager.clearSession();
            this.http.setAuthToken(null);
            this.http.setRefreshToken(null);
            if (!this.isServerMode()) {
                clearCsrfToken();
            }
            return {
                error: null
            };
        } catch  {
            return {
                error: new InsForgeError("Failed to sign out", 500, "SIGNOUT_ERROR")
            };
        }
    }
    async signInWithOAuth(providerOrOptions, options) {
        try {
            let signInOptions;
            if (typeof providerOrOptions === "object") {
                signInOptions = providerOrOptions;
            } else if (options) {
                signInOptions = {
                    provider: providerOrOptions,
                    ...options
                };
            } else {
                return {
                    data: {},
                    error: new InsForgeError("OAuth sign-in options are required", 400, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$error$2d$codes$2e$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_CODES"].INVALID_INPUT)
                };
            }
            if (!signInOptions || !signInOptions.redirectTo) {
                return {
                    data: {},
                    error: new InsForgeError("Redirect URI is required", 400, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$error$2d$codes$2e$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_CODES"].INVALID_INPUT)
                };
            }
            const { provider } = signInOptions;
            const providerKey = encodeURIComponent(provider.toLowerCase());
            const codeVerifier = await generateCodeVerifier();
            const codeChallenge = await generateCodeChallenge(codeVerifier);
            storePkceVerifier(codeVerifier);
            const params = {
                ...signInOptions.additionalParams ?? {},
                redirect_uri: signInOptions.redirectTo,
                code_challenge: codeChallenge
            };
            const isBuiltInProvider = __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["oAuthProvidersSchema"].options.includes(providerKey);
            const oauthPath = isBuiltInProvider ? `/api/auth/oauth/${providerKey}` : `/api/auth/oauth/custom/${providerKey}`;
            const response = await this.http.get(oauthPath, {
                params,
                skipAuthRefresh: true
            });
            if (!this.isServerMode() && typeof window !== "undefined" && !signInOptions.skipBrowserRedirect) {
                window.location.href = response.authUrl;
                return {
                    data: {},
                    error: null
                };
            }
            return {
                data: {
                    url: response.authUrl,
                    provider: providerKey,
                    codeVerifier
                },
                error: null
            };
        } catch (error) {
            if (error instanceof InsForgeError) {
                return {
                    data: {},
                    error
                };
            }
            return {
                data: {},
                error: new InsForgeError("An unexpected error occurred during OAuth initialization", 500, "UNEXPECTED_ERROR")
            };
        }
    }
    /**
   * Exchange OAuth authorization code for tokens (PKCE flow)
   * Called automatically on initialization when insforge_code is in URL
   */ async exchangeOAuthCode(code, codeVerifier) {
        try {
            const verifier = codeVerifier ?? retrievePkceVerifier();
            if (!verifier) {
                return {
                    data: null,
                    error: new InsForgeError("PKCE code verifier not found. Ensure signInWithOAuth was called in the same browser session.", 400, "PKCE_VERIFIER_MISSING")
                };
            }
            const request = {
                code,
                code_verifier: verifier
            };
            const response = await this.http.post(this.isServerMode() ? "/api/auth/oauth/exchange?client_type=mobile" : "/api/auth/oauth/exchange", request, {
                credentials: "include",
                skipAuthRefresh: true
            });
            this.saveSessionFromResponse(response);
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred during OAuth code exchange");
        }
    }
    /**
   * Sign in with an ID token from a native SDK (Google One Tap, etc.)
   * Use this for native mobile apps or Google One Tap on web.
   *
   * @param credentials.provider - The identity provider (currently only 'google' is supported)
   * @param credentials.token - The ID token from the native SDK
   */ async signInWithIdToken(credentials) {
        try {
            const { provider, token } = credentials;
            const response = await this.http.post("/api/auth/id-token?client_type=mobile", {
                provider,
                token
            }, {
                credentials: "include",
                skipAuthRefresh: true
            });
            this.saveSessionFromResponse(response);
            if (response.refreshToken) {
                this.http.setRefreshToken(response.refreshToken);
            }
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred during ID token sign in");
        }
    }
    // ============================================================================
    // Session Management
    // ============================================================================
    /**
   * Refresh the current auth session.
   *
   * Browser mode:
   * - Uses httpOnly refresh cookie and optional CSRF header.
   *
   * Legacy server mode (`isServerMode: true`):
   * - Uses mobile auth flow and requires `refreshToken` in request body.
   *
   * SSR apps should prefer `createRefreshAuthRouter()` / `refreshAuth()` from
   * `@insforge/sdk/ssr`.
   */ async refreshSession(options) {
        try {
            if (this.isServerMode() && !options?.refreshToken) {
                return {
                    data: null,
                    error: new InsForgeError("refreshToken is required when refreshing session in server mode", 400, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$error$2d$codes$2e$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_CODES"].AUTH_UNAUTHORIZED)
                };
            }
            const csrfToken = !this.isServerMode() ? getCsrfToken() : null;
            const response = await this.http.post(this.isServerMode() ? "/api/auth/refresh?client_type=mobile" : "/api/auth/refresh", this.isServerMode() ? {
                refresh_token: options?.refreshToken
            } : void 0, {
                headers: csrfToken ? {
                    "X-CSRF-Token": csrfToken
                } : {},
                credentials: "include",
                skipAuthRefresh: true
            });
            if (response.accessToken) {
                this.saveSessionFromResponse(response, AuthChangeEvent.TOKEN_REFRESHED);
            }
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred during session refresh");
        }
    }
    /**
   * Get current user, automatically waits for pending OAuth callback
   */ async getCurrentUser() {
        await this.authCallbackHandled;
        try {
            if (this.isServerMode()) {
                const accessToken = this.tokenManager.getAccessToken();
                if (!accessToken) {
                    return {
                        data: {
                            user: null
                        },
                        error: null
                    };
                }
                this.http.setAuthToken(accessToken);
                const response = await this.http.get("/api/auth/sessions/current");
                const user = response.user ?? null;
                return {
                    data: {
                        user
                    },
                    error: null
                };
            }
            const session = this.tokenManager.getSession();
            if (session) {
                this.http.setAuthToken(session.accessToken);
                return {
                    data: {
                        user: session.user
                    },
                    error: null
                };
            }
            if (typeof window !== "undefined") {
                const { data: refreshed, error: refreshError } = await this.refreshSession();
                if (refreshError) {
                    return {
                        data: {
                            user: null
                        },
                        error: refreshError
                    };
                }
                if (refreshed?.accessToken) {
                    return {
                        data: {
                            user: refreshed.user ?? null
                        },
                        error: null
                    };
                }
            }
            return {
                data: {
                    user: null
                },
                error: null
            };
        } catch (error) {
            if (error instanceof InsForgeError) {
                return {
                    data: {
                        user: null
                    },
                    error
                };
            }
            return {
                data: {
                    user: null
                },
                error: new InsForgeError("An unexpected error occurred while getting user", 500, "UNEXPECTED_ERROR")
            };
        }
    }
    // ============================================================================
    // Profile Management
    // ============================================================================
    async getProfile(userId) {
        try {
            const response = await this.http.get(`/api/auth/profiles/${userId}`);
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred while fetching user profile");
        }
    }
    async setProfile(profile) {
        try {
            const response = await this.http.patch("/api/auth/profiles/current", {
                profile
            });
            const currentUser = this.tokenManager.getUser();
            if (!this.isServerMode() && currentUser && response.profile !== void 0) {
                this.tokenManager.setUser({
                    ...currentUser,
                    profile: response.profile
                });
            }
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred while updating user profile");
        }
    }
    // ============================================================================
    // Email Verification
    // ============================================================================
    async resendVerificationEmail(request) {
        try {
            const response = await this.http.post("/api/auth/email/send-verification", request, {
                skipAuthRefresh: true
            });
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred while sending verification email");
        }
    }
    async verifyEmail(request) {
        try {
            const response = await this.http.post(this.isServerMode() ? "/api/auth/email/verify?client_type=mobile" : "/api/auth/email/verify", request, {
                credentials: "include",
                skipAuthRefresh: true
            });
            this.saveSessionFromResponse(response);
            if (response.refreshToken) {
                this.http.setRefreshToken(response.refreshToken);
            }
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred while verifying email");
        }
    }
    // ============================================================================
    // Password Reset
    // ============================================================================
    async sendResetPasswordEmail(request) {
        try {
            const response = await this.http.post("/api/auth/email/send-reset-password", request, {
                skipAuthRefresh: true
            });
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred while sending password reset email");
        }
    }
    async exchangeResetPasswordToken(request) {
        try {
            const response = await this.http.post("/api/auth/email/exchange-reset-password-token", request, {
                skipAuthRefresh: true
            });
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred while verifying reset code");
        }
    }
    async resetPassword(request) {
        try {
            const response = await this.http.post("/api/auth/email/reset-password", request, {
                skipAuthRefresh: true
            });
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred while resetting password");
        }
    }
    // ============================================================================
    // Configuration
    // ============================================================================
    async getPublicAuthConfig() {
        try {
            const response = await this.http.get("/api/auth/public-config", {
                skipAuthRefresh: true
            });
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return wrapError(error, "An unexpected error occurred while fetching auth configuration");
        }
    }
};
;
function createInsForgePostgrestFetch(httpClient) {
    return async (input, init)=>{
        const url = typeof input === "string" ? input : input.toString();
        const urlObj = new URL(url);
        const pathname = urlObj.pathname.slice(1);
        const rpcMatch = pathname.match(/^rpc\/(.+)$/);
        const endpoint = rpcMatch ? `/api/database/rpc/${rpcMatch[1]}` : `/api/database/records/${pathname}`;
        const insforgeUrl = `${httpClient.baseUrl}${endpoint}${urlObj.search}`;
        const headers = new Headers(httpClient.getHeaders());
        new Headers(init?.headers).forEach((value, key)=>{
            headers.set(key, value);
        });
        const response = await httpClient.rawFetch(insforgeUrl, {
            ...init,
            headers
        });
        return response;
    };
}
var Database = class {
    constructor(httpClient, defaultSchema){
        this.postgrest = new __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostgrestClient"]("http://dummy", {
            fetch: createInsForgePostgrestFetch(httpClient),
            headers: {},
            ...defaultSchema ? {
                schema: defaultSchema
            } : {}
        });
    }
    /**
   * Select a non-default Postgres schema for the chained query. Maps to
   * PostgREST's `Accept-Profile` (reads) / `Content-Profile` (writes) header.
   * The schema must be exposed by the backend.
   *
   * @example
   * const { data } = await client.database
   *   .schema('analytics')
   *   .from('events')
   *   .select('*');
   *
   * @example
   * await client.database.schema('analytics').rpc('rollup', { day: '2026-01-01' });
   */ schema(schemaName) {
        return this.postgrest.schema(schemaName);
    }
    /**
   * Create a query builder for a table
   *
   * @example
   * // Basic query
   * const { data, error } = await client.database
   *   .from('posts')
   *   .select('*')
   *   .eq('user_id', userId);
   *
   * // With count (Supabase style!)
   * const { data, error, count } = await client.database
   *   .from('posts')
   *   .select('*', { count: 'exact' })
   *   .range(0, 9);
   *
   * // Just get count, no data
   * const { count } = await client.database
   *   .from('posts')
   *   .select('*', { count: 'exact', head: true });
   *
   * // Complex queries with OR
   * const { data } = await client.database
   *   .from('posts')
   *   .select('*, users!inner(*)')
   *   .or('status.eq.active,status.eq.pending');
   *
   * // All features work:
   * - Nested selects
   * - Foreign key expansion
   * - OR/AND/NOT conditions
   * - Count with head
   * - Range pagination
   * - Upserts
   */ from(table) {
        return this.postgrest.from(table);
    }
    /**
   * Call a PostgreSQL function (RPC)
   *
   * @example
   * // Call a function with parameters
   * const { data, error } = await client.database
   *   .rpc('get_user_stats', { user_id: 123 });
   *
   * // Call a function with no parameters
   * const { data, error } = await client.database
   *   .rpc('get_all_active_users');
   *
   * // With options (head, count, get)
   * const { data, count } = await client.database
   *   .rpc('search_posts', { query: 'hello' }, { count: 'exact' });
   */ rpc(fn, args, options) {
        return this.postgrest.rpc(fn, args, options);
    }
};
// src/modules/storage.ts
function generateObjectKey(filename) {
    const dotIndex = filename.lastIndexOf(".");
    const hasExt = dotIndex > 0;
    const ext = hasExt ? filename.slice(dotIndex) : "";
    const base = hasExt ? filename.slice(0, dotIndex) : filename;
    const sanitizedBase = base.replace(/[^a-zA-Z0-9-_]/g, "-").slice(0, 32) || "file";
    const timestamp = Date.now();
    const random = Math.random().toString(36).slice(2, 8);
    return `${sanitizedBase}-${timestamp}-${random}${ext}`;
}
var StorageBucket = class {
    constructor(bucketName, http){
        this.bucketName = bucketName;
        this.http = http;
    }
    /**
   * Upload a file to a specific key.
   * Uses the upload strategy from the backend (direct or presigned).
   * Standard PUT semantics: uploading to an existing key replaces the
   * current object in place.
   * @param path - The object key/path
   * @param file - File or Blob to upload
   */ async upload(path, file) {
        try {
            const strategyResponse = await this.http.post(`/api/storage/buckets/${this.bucketName}/upload-strategy`, {
                filename: path,
                contentType: file.type || "application/octet-stream",
                size: file.size
            });
            if (strategyResponse.method === "presigned") {
                return await this.uploadWithPresignedUrl(strategyResponse, file);
            }
            if (strategyResponse.method === "direct") {
                const formData = new FormData();
                formData.append("file", file);
                const response = await this.http.request("PUT", `/api/storage/buckets/${this.bucketName}/objects/${encodeURIComponent(path)}`, {
                    body: formData,
                    headers: {
                    }
                });
                return {
                    data: response,
                    error: null
                };
            }
            throw new InsForgeError(`Unsupported upload method: ${strategyResponse.method}`, 500, "STORAGE_ERROR");
        } catch (error) {
            return {
                data: null,
                error: error instanceof InsForgeError ? error : new InsForgeError("Upload failed", 500, "STORAGE_ERROR")
            };
        }
    }
    /**
   * Upload a file under an automatically generated, collision-free key.
   * The key is derived client-side from the filename (sanitized base +
   * timestamp + random suffix) and uploaded through the standard
   * {@link upload} path, so repeated uploads of the same file never
   * overwrite each other. Reads the filename structurally to avoid assuming
   * a global `File` (which Node 18 does not expose).
   * @param file - File or Blob to upload
   */ async uploadAuto(file) {
        const filename = "name" in file && typeof file.name === "string" ? file.name : "file";
        return this.upload(generateObjectKey(filename), file);
    }
    /**
   * Internal method to handle presigned URL uploads
   */ async uploadWithPresignedUrl(strategy, file) {
        try {
            const formData = new FormData();
            if (strategy.fields) {
                Object.entries(strategy.fields).forEach(([key, value])=>{
                    formData.append(key, value);
                });
            }
            formData.append("file", file);
            const uploadResponse = await fetch(strategy.uploadUrl, {
                method: "POST",
                body: formData
            });
            if (!uploadResponse.ok) {
                throw new InsForgeError(`Upload to storage failed: ${uploadResponse.statusText}`, uploadResponse.status, "STORAGE_ERROR");
            }
            if (strategy.confirmRequired && strategy.confirmUrl) {
                const confirmResponse = await this.http.post(strategy.confirmUrl, {
                    size: file.size,
                    contentType: file.type || "application/octet-stream"
                });
                return {
                    data: confirmResponse,
                    error: null
                };
            }
            return {
                data: {
                    key: strategy.key,
                    bucket: this.bucketName,
                    size: file.size,
                    mimeType: file.type || "application/octet-stream",
                    uploadedAt: /* @__PURE__ */ new Date().toISOString(),
                    url: this.getPublicUrl(strategy.key).data.publicUrl
                },
                error: null
            };
        } catch (error) {
            throw error instanceof InsForgeError ? error : new InsForgeError("Presigned upload failed", 500, "STORAGE_ERROR");
        }
    }
    /**
   * Download a file
   * Uses the download strategy from backend (direct or presigned)
   * @param path - The object key/path
   * Returns the file as a Blob
   */ async download(path) {
        try {
            const encodedKey = encodeURIComponent(path);
            let strategyResponse;
            try {
                strategyResponse = await this.http.get(`/api/storage/buckets/${this.bucketName}/download-strategy/objects/${encodedKey}`);
            } catch (err) {
                const status = err instanceof InsForgeError ? err.statusCode : void 0;
                if (status === 404 || status === 405) {
                    strategyResponse = await this.http.post(`/api/storage/buckets/${this.bucketName}/objects/${encodedKey}/download-strategy`, {});
                } else {
                    throw err;
                }
            }
            const downloadUrl = strategyResponse.url;
            const headers = {};
            if (strategyResponse.method === "direct") {
                Object.assign(headers, this.http.getHeaders());
            }
            const response = await fetch(downloadUrl, {
                method: "GET",
                headers
            });
            if (!response.ok) {
                try {
                    const error = await response.json();
                    throw InsForgeError.fromApiError(error);
                } catch  {
                    throw new InsForgeError(`Download failed: ${response.statusText}`, response.status, "STORAGE_ERROR");
                }
            }
            const blob = await response.blob();
            return {
                data: blob,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error: error instanceof InsForgeError ? error : new InsForgeError("Download failed", 500, "STORAGE_ERROR")
            };
        }
    }
    /**
   * Get the public URL for an object in a public bucket.
   *
   * Pure string construction — no network call, no auth. The URL only resolves
   * if the bucket is public; for private objects use {@link createSignedUrl}.
   *
   * @param path - The object key/path
   * @returns `{ data: { publicUrl }, error }` — matches the external SDK pattern,
   *   so `const { data } = getPublicUrl(path)` then `data.publicUrl`.
   */ getPublicUrl(path) {
        const publicUrl = `${this.http.baseUrl}/api/storage/buckets/${this.bucketName}/objects/${encodeURIComponent(path)}`;
        return {
            data: {
                publicUrl
            },
            error: null
        };
    }
    /**
   * Resolve a download strategy (signed or direct URL) for an object with a
   * caller-supplied TTL. Prefers the canonical GET route and falls back to the
   * legacy POST alias so signed-URL creation still works against older backends
   * that predate the GET route (they return 404/405 for it). A genuine
   * "object not found" (STORAGE_NOT_FOUND) is not retried.
   */ async requestDownloadStrategy(path, expiresIn) {
        const encoded = encodeURIComponent(path);
        try {
            return await this.http.get(`/api/storage/buckets/${this.bucketName}/download-strategy/objects/${encoded}`, {
                params: {
                    expiresIn: expiresIn.toString()
                }
            });
        } catch (error) {
            const status = error instanceof InsForgeError ? error.statusCode : void 0;
            const isMissingRoute = (status === 404 || status === 405) && !(error instanceof InsForgeError && error.error === "STORAGE_NOT_FOUND");
            if (!isMissingRoute) {
                throw error;
            }
            return await this.http.post(`/api/storage/buckets/${this.bucketName}/objects/${encoded}/download-strategy`, {
                expiresIn
            });
        }
    }
    /**
   * Create a signed URL for an object.
   *
   * Returns a time-limited, credential-free URL that can be handed directly to
   * a browser (`<img src>`), an email, or a third party — no SDK or session is
   * needed to fetch it. Authorization is enforced when the URL is minted (the
   * caller must be allowed to read the object), so the resulting link is a
   * pre-authorized capability scoped to this one object until it expires.
   *
   * @param path - The object key/path
   * @param expiresIn - Lifetime in seconds (default 3600 = 1h, max 604800 = 7d).
   *   Honored for private buckets; public buckets return their long-lived URL.
   */ async createSignedUrl(path, expiresIn = 3600) {
        try {
            const strategy = await this.requestDownloadStrategy(path, expiresIn);
            return {
                data: {
                    signedUrl: strategy.url,
                    expiresAt: strategy.expiresAt ? new Date(strategy.expiresAt).toISOString() : null
                },
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error: error instanceof InsForgeError ? error : new InsForgeError("Failed to create signed URL", 500, "STORAGE_ERROR")
            };
        }
    }
    /**
   * Create signed URLs for multiple objects in a single call.
   *
   * Each entry resolves independently: a failure on one key (not found / not
   * permitted) is reported on that entry's `error` without failing the rest.
   *
   * @param paths - The object keys/paths
   * @param expiresIn - Lifetime in seconds (default 3600 = 1h, max 604800 = 7d)
   */ async createSignedUrls(paths, expiresIn = 3600) {
        try {
            const data = await Promise.all(paths.map(async (path)=>{
                const { data: signed, error } = await this.createSignedUrl(path, expiresIn);
                return {
                    path,
                    signedUrl: signed?.signedUrl ?? null,
                    error: error ? error.message : null
                };
            }));
            return {
                data,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error: error instanceof InsForgeError ? error : new InsForgeError("Failed to create signed URLs", 500, "STORAGE_ERROR")
            };
        }
    }
    /**
   * List objects in the bucket
   * @param prefix - Filter by key prefix
   * @param search - Search in file names
   * @param limit - Maximum number of results (default: 100, max: 1000)
   * @param offset - Number of results to skip
   */ async list(options) {
        try {
            const params = {};
            if (options?.prefix) {
                params.prefix = options.prefix;
            }
            if (options?.search) {
                params.search = options.search;
            }
            if (options?.limit) {
                params.limit = options.limit.toString();
            }
            if (options?.offset) {
                params.offset = options.offset.toString();
            }
            const response = await this.http.get(`/api/storage/buckets/${this.bucketName}/objects`, {
                params
            });
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error: error instanceof InsForgeError ? error : new InsForgeError("List failed", 500, "STORAGE_ERROR")
            };
        }
    }
    /**
   * Delete one or more files.
   *
   * A string uses the single-object endpoint. An array uses the batch endpoint,
   * which accepts at most 1000 keys and returns one result per key.
   *
   * @param pathOrPaths - One object key/path or an array of object keys/paths
   */ async remove(pathOrPaths) {
        try {
            const response = Array.isArray(pathOrPaths) ? await this.http.delete(`/api/storage/buckets/${this.bucketName}/objects`, {
                body: {
                    keys: pathOrPaths
                }
            }) : await this.http.delete(`/api/storage/buckets/${this.bucketName}/objects/${encodeURIComponent(pathOrPaths)}`);
            return {
                data: response,
                error: null
            };
        } catch (error) {
            return {
                data: null,
                error: error instanceof InsForgeError ? error : new InsForgeError("Delete failed", 500, "STORAGE_ERROR")
            };
        }
    }
};
var Storage = class {
    constructor(http){
        this.http = http;
    }
    /**
   * Get a bucket instance for operations
   * @param bucketName - Name of the bucket
   */ from(bucketName) {
        return new StorageBucket(bucketName, this.http);
    }
};
// src/modules/ai.ts
var AI = class {
    constructor(http){
        this.http = http;
        this.chat = new Chat(http);
        this.images = new Images(http);
        this.embeddings = new Embeddings(http);
    }
};
var Chat = class {
    constructor(http){
        this.completions = new ChatCompletions(http);
    }
};
var ChatCompletions = class {
    constructor(http){
        this.http = http;
    }
    /**
   * Create a chat completion - OpenAI-like response format
   *
   * @example
   * ```typescript
   * // Non-streaming
   * const completion = await client.ai.chat.completions.create({
   *   model: 'gpt-4',
   *   messages: [{ role: 'user', content: 'Hello!' }]
   * });
   * console.log(completion.choices[0].message.content);
   *
   * // With images (OpenAI-compatible format)
   * const response = await client.ai.chat.completions.create({
   *   model: 'gpt-4-vision',
   *   messages: [{
   *     role: 'user',
   *     content: [
   *       { type: 'text', text: 'What is in this image?' },
   *       { type: 'image_url', image_url: { url: 'https://example.com/image.jpg' } }
   *     ]
   *   }]
   * });
   *
   * // With PDF files
   * const pdfResponse = await client.ai.chat.completions.create({
   *   model: 'anthropic/claude-3.5-sonnet',
   *   messages: [{
   *     role: 'user',
   *     content: [
   *       { type: 'text', text: 'Summarize this document' },
   *       { type: 'file', file: { filename: 'doc.pdf', file_data: 'https://example.com/doc.pdf' } }
   *     ]
   *   }],
   *   fileParser: { enabled: true, pdf: { engine: 'mistral-ocr' } }
   * });
   *
   * // With web search
   * const searchResponse = await client.ai.chat.completions.create({
   *   model: 'openai/gpt-4',
   *   messages: [{ role: 'user', content: 'What are the latest news about AI?' }],
   *   webSearch: { enabled: true, maxResults: 5 }
   * });
   * // Access citations from response.choices[0].message.annotations
   *
   * // With thinking/reasoning mode (Anthropic models)
   * const thinkingResponse = await client.ai.chat.completions.create({
   *   model: 'anthropic/claude-3.5-sonnet',
   *   messages: [{ role: 'user', content: 'Solve this complex math problem...' }],
   *   thinking: true
   * });
   *
   * // Streaming - returns async iterable
   * const stream = await client.ai.chat.completions.create({
   *   model: 'gpt-4',
   *   messages: [{ role: 'user', content: 'Tell me a story' }],
   *   stream: true
   * });
   *
   * for await (const chunk of stream) {
   *   if (chunk.choices[0]?.delta?.content) {
   *     process.stdout.write(chunk.choices[0].delta.content);
   *   }
   * }
   * ```
   */ async create(params) {
        const backendParams = {
            model: params.model,
            messages: params.messages,
            temperature: params.temperature,
            maxTokens: params.maxTokens,
            topP: params.topP,
            stream: params.stream,
            // New plugin options
            webSearch: params.webSearch,
            fileParser: params.fileParser,
            thinking: params.thinking,
            // Tool calling options
            tools: params.tools,
            toolChoice: params.toolChoice,
            parallelToolCalls: params.parallelToolCalls
        };
        if (params.stream) {
            const headers = this.http.getHeaders();
            headers["Content-Type"] = "application/json";
            const response2 = await this.http.fetch(`${this.http.baseUrl}/api/ai/chat/completion`, {
                method: "POST",
                headers,
                body: JSON.stringify(backendParams)
            });
            if (!response2.ok) {
                const error = await response2.json();
                throw new Error(error.error || "Stream request failed");
            }
            return this.parseSSEStream(response2, params.model);
        }
        const response = await this.http.post("/api/ai/chat/completion", backendParams);
        const content = response.text || "";
        return {
            id: `chatcmpl-${Date.now()}`,
            object: "chat.completion",
            created: Math.floor(Date.now() / 1e3),
            model: response.metadata?.model,
            choices: [
                {
                    index: 0,
                    message: {
                        role: "assistant",
                        content,
                        // Include tool_calls if present (from tool calling)
                        ...response.tool_calls?.length && {
                            tool_calls: response.tool_calls
                        },
                        // Include annotations if present (from web search or file parsing)
                        ...response.annotations?.length && {
                            annotations: response.annotations
                        }
                    },
                    finish_reason: response.tool_calls?.length ? "tool_calls" : "stop"
                }
            ],
            usage: response.metadata?.usage || {
                prompt_tokens: 0,
                completion_tokens: 0,
                total_tokens: 0
            }
        };
    }
    /**
   * Parse SSE stream into async iterable of OpenAI-like chunks
   */ async *parseSSEStream(response, model) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) {
                    break;
                }
                buffer += decoder.decode(value, {
                    stream: true
                });
                const lines = buffer.split("\n");
                buffer = lines.pop() || "";
                for (const line of lines){
                    if (line.startsWith("data: ")) {
                        const dataStr = line.slice(6).trim();
                        if (dataStr) {
                            try {
                                const data = JSON.parse(dataStr);
                                if (data.chunk || data.content) {
                                    yield {
                                        id: `chatcmpl-${Date.now()}`,
                                        object: "chat.completion.chunk",
                                        created: Math.floor(Date.now() / 1e3),
                                        model,
                                        choices: [
                                            {
                                                index: 0,
                                                delta: {
                                                    content: data.chunk || data.content
                                                },
                                                finish_reason: null
                                            }
                                        ]
                                    };
                                }
                                if (data.tool_calls?.length) {
                                    yield {
                                        id: `chatcmpl-${Date.now()}`,
                                        object: "chat.completion.chunk",
                                        created: Math.floor(Date.now() / 1e3),
                                        model,
                                        choices: [
                                            {
                                                index: 0,
                                                delta: {
                                                    tool_calls: data.tool_calls
                                                },
                                                finish_reason: "tool_calls"
                                            }
                                        ]
                                    };
                                }
                                if (data.done) {
                                    reader.releaseLock();
                                    return;
                                }
                            } catch  {
                                console.warn("Failed to parse SSE data:", dataStr);
                            }
                        }
                    }
                }
            }
        } finally{
            reader.releaseLock();
        }
    }
};
var Embeddings = class {
    constructor(http){
        this.http = http;
    }
    /**
   * Create embeddings for text input - OpenAI-like response format
   *
   * @example
   * ```typescript
   * // Single text input
   * const response = await client.ai.embeddings.create({
   *   model: 'openai/text-embedding-3-small',
   *   input: 'Hello world'
   * });
   * console.log(response.data[0].embedding); // number[]
   *
   * // Multiple text inputs
   * const response = await client.ai.embeddings.create({
   *   model: 'openai/text-embedding-3-small',
   *   input: ['Hello world', 'Goodbye world']
   * });
   * response.data.forEach((item, i) => {
   *   console.log(`Embedding ${i}:`, item.embedding.slice(0, 5)); // First 5 dimensions
   * });
   *
   * // With custom dimensions (if supported by model)
   * const response = await client.ai.embeddings.create({
   *   model: 'openai/text-embedding-3-small',
   *   input: 'Hello world',
   *   dimensions: 256
   * });
   *
   * // With base64 encoding format
   * const response = await client.ai.embeddings.create({
   *   model: 'openai/text-embedding-3-small',
   *   input: 'Hello world',
   *   encoding_format: 'base64'
   * });
   * ```
   */ async create(params) {
        const response = await this.http.post("/api/ai/embeddings", params);
        return {
            object: response.object,
            data: response.data,
            model: response.metadata?.model,
            usage: response.metadata?.usage ? {
                prompt_tokens: response.metadata.usage.promptTokens || 0,
                total_tokens: response.metadata.usage.totalTokens || 0
            } : {
                prompt_tokens: 0,
                total_tokens: 0
            }
        };
    }
};
var Images = class {
    constructor(http){
        this.http = http;
    }
    /**
   * Generate images - OpenAI-like response format
   *
   * @example
   * ```typescript
   * // Text-to-image
   * const response = await client.ai.images.generate({
   *   model: 'dall-e-3',
   *   prompt: 'A sunset over mountains',
   * });
   * console.log(response.data[0].b64_json);
   *
   * // Image-to-image (with input images)
   * const response = await client.ai.images.generate({
   *   model: 'stable-diffusion-xl',
   *   prompt: 'Transform this into a watercolor painting',
   *   images: [
   *     { url: 'https://example.com/input.jpg' },
   *     // or base64-encoded Data URI:
   *     { url: 'data:image/jpeg;base64,/9j/4AAQ...' }
   *   ]
   * });
   * ```
   */ async generate(params) {
        const response = await this.http.post("/api/ai/image/generation", params);
        let data = [];
        if (response.images && response.images.length > 0) {
            data = response.images.map((img)=>({
                    b64_json: img.imageUrl.replace(/^data:image\/\w+;base64,/, ""),
                    content: response.text
                }));
        } else if (response.text) {
            data = [
                {
                    content: response.text
                }
            ];
        }
        return {
            created: Math.floor(Date.now() / 1e3),
            data,
            ...response.metadata?.usage && {
                usage: {
                    total_tokens: response.metadata.usage.totalTokens || 0,
                    input_tokens: response.metadata.usage.promptTokens || 0,
                    output_tokens: response.metadata.usage.completionTokens || 0
                }
            }
        };
    }
};
// src/modules/functions.ts
var Functions = class _Functions {
    constructor(http, functionsUrl){
        this.http = http;
        this.functionsUrl = functionsUrl || _Functions.deriveSubhostingUrl(http.baseUrl);
    }
    /**
   * Derive the subhosting URL from the base URL.
   * Base URL pattern: https://{appKey}.{region}.insforge.app
   * Functions URL:    https://{appKey}.function2.insforge.app
   * Only applies to .insforge.app domains.
   */ static deriveSubhostingUrl(baseUrl) {
        try {
            const { hostname } = new URL(baseUrl);
            if (!hostname.endsWith(".insforge.app")) {
                return void 0;
            }
            const appKey = hostname.split(".")[0];
            return `https://${appKey}.function2.insforge.app`;
        } catch  {
            return void 0;
        }
    }
    /**
   * Build a Request for in-process dispatch. The host is a non-routable
   * placeholder; the router only reads pathname.
   */ buildInProcessRequest(slug, method, body, callerHeaders) {
        const url = new URL("/" + slug, "http://insforge.local").toString();
        const headers = {
            ...this.http.getHeaders()
        };
        const reqBody = serializeBody(method, body, headers);
        Object.assign(headers, callerHeaders);
        return new Request(url, {
            method,
            headers,
            body: reqBody
        });
    }
    /**
   * Invoke an Edge Function.
   *
   * Dispatch order:
   * 1. If `globalThis.__insforge_dispatch__` is present, call it in-process.
   *    This avoids Deno Subhosting's 508 Loop Detected when one bundled
   *    function invokes another inside the same deployment.
   * 2. Otherwise, try the configured subhosting URL.
   * 3. On 404 from subhosting, fall back to the proxy path.
   *
   * @param slug The function slug to invoke
   * @param options Request options
   */ async invoke(slug, options = {}) {
        const { method = "POST", body, headers = {} } = options;
        const dispatch = globalThis.__insforge_dispatch__;
        const localFunctionsUrl = _Functions.deriveSubhostingUrl(this.http.baseUrl);
        if (typeof dispatch === "function" && !!localFunctionsUrl && this.functionsUrl === localFunctionsUrl) {
            try {
                const req = this.buildInProcessRequest(slug, method, body, headers);
                const res = await dispatch(req);
                const data = await parseResponse(res);
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (error instanceof Error && error.name === "AbortError") {
                    throw error;
                }
                return {
                    data: null,
                    error: error instanceof InsForgeError ? error : new InsForgeError(error instanceof Error ? error.message : "Function invocation failed", 500, "FUNCTION_ERROR")
                };
            }
        }
        if (this.functionsUrl) {
            try {
                const data = await this.http.request(method, `${this.functionsUrl}/${slug}`, {
                    body,
                    headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (error instanceof Error && error.name === "AbortError") {
                    throw error;
                }
                if (error instanceof InsForgeError && error.statusCode === 404) {} else {
                    return {
                        data: null,
                        error: error instanceof InsForgeError ? error : new InsForgeError(error instanceof Error ? error.message : "Function invocation failed", 500, "FUNCTION_ERROR")
                    };
                }
            }
        }
        try {
            const path = `/functions/${slug}`;
            const data = await this.http.request(method, path, {
                body,
                headers
            });
            return {
                data,
                error: null
            };
        } catch (error) {
            if (error instanceof Error && error.name === "AbortError") {
                throw error;
            }
            return {
                data: null,
                error: error instanceof InsForgeError ? error : new InsForgeError(error instanceof Error ? error.message : "Function invocation failed", 500, "FUNCTION_ERROR")
            };
        }
    }
};
// src/modules/realtime.ts
var CONNECT_TIMEOUT = 1e4;
var SUBSCRIBE_TIMEOUT = 1e4;
var Realtime = class {
    constructor(baseUrl, tokenManager, anonKey, getValidAccessToken = async ()=>tokenManager.getAccessToken()){
        this.baseUrl = baseUrl;
        this.tokenManager = tokenManager;
        this.anonKey = anonKey;
        this.getValidAccessToken = getValidAccessToken;
        this.socket = null;
        this.connectPromise = null;
        this.connectionAttempt = null;
        this.nextConnectionAttemptId = 0;
        this.subscriptions = /* @__PURE__ */ new Map();
        this.eventListeners = /* @__PURE__ */ new Map();
        this.tokenManager.onAuthStateChange((event)=>{
            if (event !== AuthChangeEvent.TOKEN_REFRESHED) {
                this.reconnectForAuthChange();
            }
        });
    }
    notifyListeners(event, payload) {
        for (const callback of this.eventListeners.get(event) ?? []){
            try {
                callback(payload);
            } catch (error) {
                console.error(`Error in ${event} callback:`, error);
            }
        }
    }
    async getHandshakeToken() {
        return await this.getValidAccessToken() ?? this.anonKey ?? null;
    }
    connect() {
        if (this.socket?.connected) {
            return Promise.resolve();
        }
        if (this.connectPromise) {
            return this.connectPromise;
        }
        const attemptId = ++this.nextConnectionAttemptId;
        const connection = (async ()=>{
            const { io } = await __turbopack_context__.A("[project]/free claude code/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript, async loader)");
            if (attemptId !== this.nextConnectionAttemptId) {
                throw new Error("Connection cancelled");
            }
            await new Promise((resolve, reject)=>{
                const socket = io(this.baseUrl, {
                    transports: [
                        "websocket"
                    ],
                    auth: (callback)=>{
                        void this.getHandshakeToken().then((token)=>callback(token ? {
                                token
                            } : {}), ()=>callback({}));
                    }
                });
                this.socket = socket;
                let initialConnection = true;
                let timeoutId = null;
                const clearConnectTimeout = ()=>{
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                        timeoutId = null;
                    }
                };
                const dispose = ()=>{
                    clearConnectTimeout();
                    socket.off("connect", onConnect);
                    socket.off("connect_error", onConnectError);
                    socket.off("disconnect", onDisconnect);
                    socket.off("realtime:error", onRealtimeError);
                    socket.offAny(onAny);
                    socket.disconnect();
                    if (this.socket === socket) {
                        this.socket = null;
                    }
                    if (this.connectionAttempt?.id === attemptId) {
                        this.connectionAttempt = null;
                    }
                };
                const fail = (error)=>{
                    if (!initialConnection) {
                        return;
                    }
                    initialConnection = false;
                    dispose();
                    reject(error);
                };
                const onConnect = ()=>{
                    if (this.socket !== socket) {
                        return;
                    }
                    clearConnectTimeout();
                    this.resubscribeChannels();
                    this.notifyListeners("connect");
                    if (initialConnection) {
                        initialConnection = false;
                        if (this.connectionAttempt?.id === attemptId) {
                            this.connectionAttempt = null;
                        }
                        resolve();
                    }
                };
                const onConnectError = (error)=>{
                    clearConnectTimeout();
                    this.notifyListeners("connect_error", error);
                    if (initialConnection) {
                        fail(error);
                    }
                };
                const onDisconnect = (reason)=>{
                    this.handleDisconnect(reason);
                };
                const onRealtimeError = (error)=>{
                    this.notifyListeners("error", error);
                };
                const onAny = (event, message)=>{
                    if (event === "realtime:error") {
                        return;
                    }
                    this.applyPresenceEvent(event, message);
                    this.notifyListeners(event, message);
                };
                this.connectionAttempt = {
                    id: attemptId,
                    socket,
                    cancel: fail
                };
                socket.on("connect", onConnect);
                socket.on("connect_error", onConnectError);
                socket.on("disconnect", onDisconnect);
                socket.on("realtime:error", onRealtimeError);
                socket.onAny(onAny);
                timeoutId = setTimeout(()=>fail(new Error(`Connection timeout after ${CONNECT_TIMEOUT}ms`)), CONNECT_TIMEOUT);
            });
        })();
        const trackedConnection = connection.finally(()=>{
            if (this.connectPromise === trackedConnection) {
                this.connectPromise = null;
            }
        });
        this.connectPromise = trackedConnection;
        return trackedConnection;
    }
    disconnect() {
        this.nextConnectionAttemptId++;
        this.connectionAttempt?.cancel(new Error("Disconnected"));
        this.socket?.disconnect();
        this.socket = null;
        this.connectPromise = null;
        for (const subscription of this.subscriptions.values()){
            this.settleSubscription(subscription, {
                ok: false,
                channel: subscription.channel,
                error: {
                    code: "DISCONNECTED",
                    message: "Disconnected"
                }
            }, false);
        }
        this.subscriptions.clear();
    }
    reconnectForAuthChange() {
        for (const subscription of this.subscriptions.values()){
            if (subscription.status === "rejected") {
                subscription.status = "pending";
            }
        }
        if (!this.socket) {
            return;
        }
        this.socket.disconnect();
        this.socket.connect();
    }
    handleDisconnect(reason) {
        for (const subscription of this.subscriptions.values()){
            if (subscription.status === "rejected") {
                continue;
            }
            subscription.status = "pending";
            this.settleSubscription(subscription, {
                ok: false,
                channel: subscription.channel,
                error: {
                    code: "DISCONNECTED",
                    message: "Connection lost before subscription completed"
                }
            }, true);
        }
        this.notifyListeners("disconnect", reason);
    }
    resubscribeChannels() {
        for (const [channel, subscription] of this.subscriptions){
            if (subscription.status === "pending") {
                this.requestSubscription(channel, subscription);
            }
        }
    }
    requestSubscription(channel, subscription) {
        if (subscription.pending) {
            return subscription.pending;
        }
        const socket = this.socket;
        if (!socket?.connected) {
            return Promise.resolve({
                ok: false,
                channel,
                error: {
                    code: "CONNECTION_FAILED",
                    message: "Not connected to realtime server"
                }
            });
        }
        subscription.status = "pending";
        const epoch = ++subscription.epoch;
        let timeoutId;
        subscription.pending = new Promise((resolve)=>{
            subscription.settlePending = (response)=>{
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                subscription.pending = void 0;
                subscription.settlePending = void 0;
                resolve(response);
            };
            timeoutId = setTimeout(()=>{
                if (this.subscriptions.get(channel) === subscription && subscription.epoch === epoch) {
                    this.settleSubscription(subscription, {
                        ok: false,
                        channel,
                        error: {
                            code: "SUBSCRIBE_TIMEOUT",
                            message: "Subscription acknowledgement timed out"
                        }
                    }, true);
                }
            }, SUBSCRIBE_TIMEOUT);
            socket.emit("realtime:subscribe", {
                channel
            }, (response)=>{
                if (this.subscriptions.get(channel) !== subscription || subscription.epoch !== epoch) {
                    return;
                }
                if (response.ok) {
                    subscription.status = "subscribed";
                    subscription.members = new Map(response.presence.members.map((member)=>[
                            member.presenceId,
                            member
                        ]));
                } else {
                    subscription.status = "rejected";
                    subscription.members.clear();
                }
                this.settleSubscription(subscription, response, false);
            });
        });
        return subscription.pending;
    }
    settleSubscription(subscription, response, incrementEpoch) {
        if (incrementEpoch) {
            subscription.epoch++;
        }
        subscription.settlePending?.(response);
    }
    applyPresenceEvent(event, message) {
        if (event !== "presence:join" && event !== "presence:leave") {
            return;
        }
        const presenceEvent = message;
        const channel = presenceEvent.meta?.channel;
        const member = presenceEvent.member;
        if (!channel || !member) {
            return;
        }
        const subscription = this.subscriptions.get(channel);
        if (!subscription) {
            return;
        }
        if (event === "presence:join") {
            subscription.members.set(member.presenceId, member);
        } else {
            subscription.members.delete(member.presenceId);
        }
    }
    get isConnected() {
        return this.socket?.connected ?? false;
    }
    get connectionState() {
        if (!this.socket) {
            return "disconnected";
        }
        return this.socket.connected ? "connected" : "connecting";
    }
    get socketId() {
        return this.socket?.id;
    }
    async subscribe(channel) {
        let subscription = this.subscriptions.get(channel);
        if (subscription) {
            if (subscription.pending) {
                return subscription.pending;
            }
            if (subscription.status === "subscribed") {
                return {
                    ok: true,
                    channel,
                    presence: {
                        members: [
                            ...subscription.members.values()
                        ]
                    }
                };
            }
        } else {
            subscription = {
                channel,
                epoch: 0,
                status: "pending",
                members: /* @__PURE__ */ new Map()
            };
            this.subscriptions.set(channel, subscription);
        }
        if (!this.socket?.connected) {
            try {
                await this.connect();
            } catch (error) {
                if (this.subscriptions.get(channel) === subscription) {
                    this.subscriptions.delete(channel);
                }
                const message = error instanceof Error ? error.message : "Connection failed";
                return {
                    ok: false,
                    channel,
                    error: {
                        code: "CONNECTION_FAILED",
                        message
                    }
                };
            }
        }
        return subscription.pending ?? this.requestSubscription(channel, subscription);
    }
    unsubscribe(channel) {
        const subscription = this.subscriptions.get(channel);
        if (!subscription) {
            return;
        }
        this.subscriptions.delete(channel);
        this.settleSubscription(subscription, {
            ok: false,
            channel,
            error: {
                code: "SUBSCRIPTION_CANCELLED",
                message: "Subscription cancelled"
            }
        }, true);
        if (this.socket?.connected) {
            this.socket.emit("realtime:unsubscribe", {
                channel
            });
        }
    }
    async publish(channel, event, payload) {
        if (!this.socket?.connected) {
            throw new Error("Not connected to realtime server. Call connect() first.");
        }
        this.socket.emit("realtime:publish", {
            channel,
            event,
            payload
        });
    }
    on(event, callback) {
        const listeners = this.eventListeners.get(event) ?? /* @__PURE__ */ new Set();
        listeners.add(callback);
        this.eventListeners.set(event, listeners);
    }
    off(event, callback) {
        const listeners = this.eventListeners.get(event);
        listeners?.delete(callback);
        if (listeners?.size === 0) {
            this.eventListeners.delete(event);
        }
    }
    once(event, callback) {
        const wrapper = (payload)=>{
            this.off(event, wrapper);
            callback(payload);
        };
        this.on(event, wrapper);
    }
    getSubscribedChannels() {
        return [
            ...this.subscriptions.values()
        ].filter((subscription)=>subscription.status === "subscribed").map((subscription)=>subscription.channel);
    }
    getPresenceState(channel) {
        return [
            ...this.subscriptions.get(channel)?.members.values() ?? []
        ];
    }
};
// src/modules/email.ts
var Emails = class {
    constructor(http){
        this.http = http;
    }
    /**
   * Send a custom HTML email
   * @param options Email options including recipients, subject, and HTML content
   */ async send(options) {
        try {
            const data = await this.http.post("/api/email/send-raw", options);
            return {
                data,
                error: null
            };
        } catch (error) {
            if (error instanceof Error && error.name === "AbortError") {
                throw error;
            }
            return {
                data: null,
                error: error instanceof InsForgeError ? error : new InsForgeError(error instanceof Error ? error.message : "Email send failed", 500, "EMAIL_ERROR")
            };
        }
    }
};
// src/modules/payments.ts
function providerEnvironmentPath(provider, environment) {
    return `/api/payments/${provider}/${encodeURIComponent(environment)}`;
}
var StripePayments = class {
    constructor(http){
        this.http = http;
    }
    /**
   * Create a Stripe Checkout Session through the InsForge backend.
   *
   * @example
   * ```typescript
   * const { data, error } = await client.payments.stripe.createCheckoutSession('test', {
   *   mode: 'payment',
   *   lineItems: [{ priceId: 'price_123', quantity: 1 }],
   *   successUrl: `${window.location.origin}/success`,
   *   cancelUrl: `${window.location.origin}/pricing`
   * });
   *
   * if (!error && data.checkoutSession.url) {
   *   window.location.assign(data.checkoutSession.url);
   * }
   * ```
   */ async createCheckoutSession(environment, request) {
        try {
            const data = await this.http.post(`${providerEnvironmentPath("stripe", environment)}/checkout-sessions`, request, {
                idempotent: !!request.idempotencyKey
            });
            return {
                data,
                error: null
            };
        } catch (error) {
            return wrapError(error, "Stripe checkout session creation failed");
        }
    }
    /**
   * Create a Stripe Billing Portal Session for a mapped billing subject.
   */ async createCustomerPortalSession(environment, request) {
        try {
            const data = await this.http.post(`${providerEnvironmentPath("stripe", environment)}/customer-portal-sessions`, request);
            return {
                data,
                error: null
            };
        } catch (error) {
            return wrapError(error, "Stripe customer portal session creation failed");
        }
    }
};
var RazorpayPayments = class {
    constructor(http){
        this.http = http;
    }
    async createOrder(environment, request) {
        try {
            const data = await this.http.post(`${providerEnvironmentPath("razorpay", environment)}/orders`, request);
            return {
                data,
                error: null
            };
        } catch (error) {
            return wrapError(error, "Razorpay order creation failed");
        }
    }
    async verifyOrder(environment, request) {
        try {
            const data = await this.http.post(`${providerEnvironmentPath("razorpay", environment)}/orders/verify`, request);
            return {
                data,
                error: null
            };
        } catch (error) {
            return wrapError(error, "Razorpay order verification failed");
        }
    }
    async createSubscription(environment, request) {
        try {
            const data = await this.http.post(`${providerEnvironmentPath("razorpay", environment)}/subscriptions`, request);
            return {
                data,
                error: null
            };
        } catch (error) {
            return wrapError(error, "Razorpay subscription creation failed");
        }
    }
    async verifySubscription(environment, request) {
        try {
            const data = await this.http.post(`${providerEnvironmentPath("razorpay", environment)}/subscriptions/verify`, request);
            return {
                data,
                error: null
            };
        } catch (error) {
            return wrapError(error, "Razorpay subscription verification failed");
        }
    }
    async cancelSubscription(environment, subscriptionId, request = {}) {
        try {
            const data = await this.http.post(`${providerEnvironmentPath("razorpay", environment)}/subscriptions/${encodeURIComponent(subscriptionId)}/cancel`, request);
            return {
                data,
                error: null
            };
        } catch (error) {
            return wrapError(error, "Razorpay subscription cancellation failed");
        }
    }
    async pauseSubscription(environment, subscriptionId) {
        try {
            const data = await this.http.post(`${providerEnvironmentPath("razorpay", environment)}/subscriptions/${encodeURIComponent(subscriptionId)}/pause`, {});
            return {
                data,
                error: null
            };
        } catch (error) {
            return wrapError(error, "Razorpay subscription pause failed");
        }
    }
    async resumeSubscription(environment, subscriptionId) {
        try {
            const data = await this.http.post(`${providerEnvironmentPath("razorpay", environment)}/subscriptions/${encodeURIComponent(subscriptionId)}/resume`, {});
            return {
                data,
                error: null
            };
        } catch (error) {
            return wrapError(error, "Razorpay subscription resume failed");
        }
    }
};
var Payments = class {
    constructor(http){
        this.stripe = new StripePayments(http);
        this.razorpay = new RazorpayPayments(http);
    }
};
// src/client.ts
var InsForgeClient = class {
    constructor(config = {}){
        const logger = new Logger(config.debug);
        this.tokenManager = new TokenManager();
        this.http = new HttpClient(config, this.tokenManager, logger);
        const accessToken = config.accessToken ?? config.edgeFunctionToken;
        if (accessToken) {
            this.http.setAuthToken(accessToken);
            this.tokenManager.setAccessToken(accessToken);
        }
        this.auth = new Auth(this.http, this.tokenManager, {
            isServerMode: config.isServerMode ?? !!accessToken,
            detectOAuthCallback: config.auth?.detectOAuthCallback
        });
        this.database = new Database(this.http, config.db?.schema);
        this.storage = new Storage(this.http);
        this.ai = new AI(this.http);
        this.functions = new Functions(this.http, config.functionsUrl);
        this.realtime = new Realtime(this.http.baseUrl, this.tokenManager, config.anonKey, ()=>this.http.getValidAccessToken());
        this.emails = new Emails(this.http);
        this.payments = new Payments(this.http);
    }
    /**
   * Get the underlying HTTP client for custom requests
   *
   * @example
   * ```typescript
   * const httpClient = client.getHttpClient();
   * const customData = await httpClient.get('/api/custom-endpoint');
   * ```
   */ getHttpClient() {
        return this.http;
    }
    /**
   * Set the access token used by every SDK surface. Updates both the HTTP
   * client (database / storage / functions / AI / emails) and the realtime
   * token manager. Pass `null` to sign out. By default a token replacement is
   * treated as a sign-in boundary and reconnects realtime. Pass
   * `AuthChangeEvent.TOKEN_REFRESHED` for a same-identity refresh to preserve a live socket; the
   * refreshed token is then used at the next handshake.
   *
   * Use this when an external auth provider (Better Auth, Clerk, Auth0,
   * WorkOS, Kinde, Stytch, …) issues the JWT and you need to keep the
   * long-lived InsForge client in sync. Without this, you'd have to call
   * `client.getHttpClient().setAuthToken(token)` AND reach into the private
   * realtime token manager separately.
   *
   * @example
   * ```typescript
   * import { AuthChangeEvent } from '@insforge/sdk';
   *
   * // Refresh a third-party-issued JWT periodically
   * const { token } = await fetch('/api/insforge-token').then((r) => r.json());
   * client.setAccessToken(token, AuthChangeEvent.TOKEN_REFRESHED);
   *
   * // Sign-out
   * client.setAccessToken(null);
   * ```
   */ setAccessToken(token, event = AuthChangeEvent.SIGNED_IN) {
        this.http.setAuthToken(token);
        if (token === null) {
            this.tokenManager.clearSession();
        } else {
            this.tokenManager.setAccessToken(token, event);
        }
    }
};
// src/index.ts
function createClient(config = {}) {
    return new InsForgeClient(config);
}
function createAdminClient(config) {
    const { apiKey: rawApiKey, ...clientConfig } = config ?? {};
    const apiKey = rawApiKey?.trim();
    if (!apiKey) {
        throw new Error("Missing apiKey. Pass apiKey to createAdminClient().");
    }
    return new InsForgeClient({
        ...clientConfig,
        accessToken: apiKey,
        isServerMode: true
    });
}
var src_default = InsForgeClient;
;
}),
"[project]/free claude code/node_modules/@supabase/node-fetch/browser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Headers",
    ()=>Headers,
    "Request",
    ()=>Request,
    "Response",
    ()=>Response,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetch",
    ()=>fetch
]);
"use strict";
// ref: https://github.com/tc39/proposal-global
var getGlobal = function() {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return /*TURBOPACK member replacement*/ __turbopack_context__.g;
    }
    //TURBOPACK unreachable
    ;
};
var globalObject = getGlobal();
const fetch = globalObject.fetch;
const __TURBOPACK__default__export__ = globalObject.fetch.bind(globalObject);
const Headers = globalObject.Headers;
const Request = globalObject.Request;
const Response = globalObject.Response;
}),
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
// @ts-ignore
const node_fetch_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/node-fetch/browser.js [app-client] (ecmascript)"));
const PostgrestError_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-client] (ecmascript)"));
class PostgrestBuilder {
    constructor(builder){
        var _a, _b;
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = new Headers(builder.headers);
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = (_a = builder.shouldThrowOnError) !== null && _a !== void 0 ? _a : false;
        this.signal = builder.signal;
        this.isMaybeSingle = (_b = builder.isMaybeSingle) !== null && _b !== void 0 ? _b : false;
        if (builder.fetch) {
            this.fetch = builder.fetch;
        } else if (typeof fetch === 'undefined') {
            this.fetch = node_fetch_1.default;
        } else {
            this.fetch = fetch;
        }
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
     * Set an HTTP header for the request.
     */ setHeader(name, value) {
        this.headers = new Headers(this.headers);
        this.headers.set(name, value);
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (this.schema === undefined) {
        // skip
        } else if ([
            'GET',
            'HEAD'
        ].includes(this.method)) {
            this.headers.set('Accept-Profile', this.schema);
        } else {
            this.headers.set('Content-Profile', this.schema);
        }
        if (this.method !== 'GET' && this.method !== 'HEAD') {
            this.headers.set('Content-Type', 'application/json');
        }
        // NOTE: Invoke w/o `this` to avoid illegal invocation error.
        // https://github.com/supabase/postgrest-js/pull/247
        const _fetch = this.fetch;
        let res = _fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async (res)=>{
            var _a, _b, _c, _d;
            let error = null;
            let data = null;
            let count = null;
            let status = res.status;
            let statusText = res.statusText;
            if (res.ok) {
                if (this.method !== 'HEAD') {
                    const body = await res.text();
                    if (body === '') {
                    // Prefer: return=minimal
                    } else if (this.headers.get('Accept') === 'text/csv') {
                        data = body;
                    } else if (this.headers.get('Accept') && ((_a = this.headers.get('Accept')) === null || _a === void 0 ? void 0 : _a.includes('application/vnd.pgrst.plan+text'))) {
                        data = body;
                    } else {
                        data = JSON.parse(body);
                    }
                }
                const countHeader = (_b = this.headers.get('Prefer')) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
                const contentRange = (_c = res.headers.get('content-range')) === null || _c === void 0 ? void 0 : _c.split('/');
                if (countHeader && contentRange && contentRange.length > 1) {
                    count = parseInt(contentRange[1]);
                }
                // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
                // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
                if (this.isMaybeSingle && this.method === 'GET' && Array.isArray(data)) {
                    if (data.length > 1) {
                        error = {
                            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                            code: 'PGRST116',
                            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: 'JSON object requested, multiple (or no) rows returned'
                        };
                        data = null;
                        count = null;
                        status = 406;
                        statusText = 'Not Acceptable';
                    } else if (data.length === 1) {
                        data = data[0];
                    } else {
                        data = null;
                    }
                }
            } else {
                const body = await res.text();
                try {
                    error = JSON.parse(body);
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (Array.isArray(error) && res.status === 404) {
                        data = [];
                        error = null;
                        status = 200;
                        statusText = 'OK';
                    }
                } catch (_e) {
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (res.status === 404 && body === '') {
                        status = 204;
                        statusText = 'No Content';
                    } else {
                        error = {
                            message: body
                        };
                    }
                }
                if (error && this.isMaybeSingle && ((_d = error === null || error === void 0 ? void 0 : error.details) === null || _d === void 0 ? void 0 : _d.includes('0 rows'))) {
                    error = null;
                    status = 200;
                    statusText = 'OK';
                }
                if (error && this.shouldThrowOnError) {
                    throw new PostgrestError_1.default(error);
                }
            }
            const postgrestResponse = {
                error,
                data,
                count,
                status,
                statusText
            };
            return postgrestResponse;
        });
        if (!this.shouldThrowOnError) {
            res = res.catch((fetchError)=>{
                var _a, _b, _c;
                return {
                    error: {
                        message: `${(_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : 'FetchError'}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                        details: `${(_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ''}`,
                        hint: '',
                        code: `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : ''}`
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: ''
                };
            });
        }
        return res.then(onfulfilled, onrejected);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        /* istanbul ignore next */ return this;
    }
    /**
     * Override the type of the returned `data` field in the response.
     *
     * @typeParam NewResult - The new type to cast the response data to
     * @typeParam Options - Optional type configuration (defaults to { merge: true })
     * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
     * @example
     * ```typescript
     * // Merge with existing types (default behavior)
     * const query = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ custom_field: string }>()
     *
     * // Replace existing types completely
     * const replaceQuery = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
     * ```
     * @returns A PostgrestBuilder instance with the new type
     */ overrideTypes() {
        return this;
    }
}
exports.default = PostgrestBuilder;
}),
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestQueryBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-client] (ecmascript)"));
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)"));
/**
 * PostgREST client.
 *
 * @typeParam Database - Types for the schema from the [type
 * generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
 *
 * @typeParam SchemaName - Postgres schema to switch to. Must be a string
 * literal, the same one passed to the constructor. If the schema is not
 * `"public"`, this must be supplied manually.
 */ class PostgrestClient {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */ constructor(url, { headers = {}, schema, fetch: fetch1 } = {}){
        this.url = url;
        this.headers = new Headers(headers);
        this.schemaName = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        const url = new URL(`${this.url}/${relation}`);
        return new PostgrestQueryBuilder_1.default(url, {
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return new PostgrestClient(this.url, {
            headers: this.headers,
            schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, { head = false, get = false, count } = {}) {
        var _a;
        let method;
        const url = new URL(`${this.url}/rpc/${fn}`);
        let body;
        if (head || get) {
            method = head ? 'HEAD' : 'GET';
            Object.entries(args)// params with undefined value needs to be filtered out, otherwise it'll
            // show up as `?param=undefined`
            .filter(([_, value])=>value !== undefined)// array values need special syntax
            .map(([name, value])=>[
                    name,
                    Array.isArray(value) ? `{${value.join(',')}}` : `${value}`
                ]).forEach(([name, value])=>{
                url.searchParams.append(name, value);
            });
        } else {
            method = 'POST';
            body = args;
        }
        const headers = new Headers(this.headers);
        if (count) {
            headers.set('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url,
            headers,
            schema: this.schemaName,
            body,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestClient;
}),
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Error format
 *
 * {@link https://postgrest.org/en/stable/api.html?highlight=options#errors-and-http-status-codes}
 */ class PostgrestError extends Error {
    constructor(context){
        super(context.message);
        this.name = 'PostgrestError';
        this.details = context.details;
        this.hint = context.hint;
        this.code = context.code;
    }
}
exports.default = PostgrestError;
}),
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestTransformBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-client] (ecmascript)"));
class PostgrestFilterBuilder extends PostgrestTransformBuilder_1.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ eq(column, value) {
        this.url.searchParams.append(column, `eq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ neq(column, value) {
        this.url.searchParams.append(column, `neq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gt(column, value) {
        this.url.searchParams.append(column, `gt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gte(column, value) {
        this.url.searchParams.append(column, `gte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lt(column, value) {
        this.url.searchParams.append(column, `lt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lte(column, value) {
        this.url.searchParams.append(column, `lte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ like(column, pattern) {
        this.url.searchParams.append(column, `like.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAllOf(column, patterns) {
        this.url.searchParams.append(column, `like(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `like(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ ilike(column, pattern) {
        this.url.searchParams.append(column, `ilike.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAllOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ is(column, value) {
        this.url.searchParams.append(column, `is.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */ in(column, values) {
        const cleanedValues = Array.from(new Set(values)).map((s)=>{
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === 'string' && new RegExp('[,()]').test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(',');
        this.url.searchParams.append(column, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ contains(column, value) {
        if (typeof value === 'string') {
            // range types can be inclusive '[', ']' or exclusive '(', ')' so just
            // keep it simple and accept a string
            this.url.searchParams.append(column, `cs.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cs.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ containedBy(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `cd.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cd.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGt(column, range) {
        this.url.searchParams.append(column, `sr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGte(column, range) {
        this.url.searchParams.append(column, `nxl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLt(column, range) {
        this.url.searchParams.append(column, `sl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLte(column, range) {
        this.url.searchParams.append(column, `nxr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeAdjacent(column, range) {
        this.url.searchParams.append(column, `adj.${range}`);
        return this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */ overlaps(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `ov.${value}`);
        } else {
            // array
            this.url.searchParams.append(column, `ov.{${value.join(',')}}`);
        }
        return this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */ textSearch(column, query, { config, type } = {}) {
        let typePart = '';
        if (type === 'plain') {
            typePart = 'pl';
        } else if (type === 'phrase') {
            typePart = 'ph';
        } else if (type === 'websearch') {
            typePart = 'w';
        }
        const configPart = config === undefined ? '' : `(${config})`;
        this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */ match(query) {
        Object.entries(query).forEach(([column, value])=>{
            this.url.searchParams.append(column, `eq.${value}`);
        });
        return this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ not(column, operator, value) {
        this.url.searchParams.append(column, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */ or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.or` : 'or';
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ filter(column, operator, value) {
        this.url.searchParams.append(column, `${operator}.${value}`);
        return this;
    }
}
exports.default = PostgrestFilterBuilder;
}),
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)"));
class PostgrestQueryBuilder {
    constructor(url, { headers = {}, schema, fetch: fetch1 }){
        this.url = url;
        this.headers = new Headers(headers);
        this.schema = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ select(columns, { head = false, count } = {}) {
        const method = head ? 'HEAD' : 'GET';
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */ insert(values, { count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', `missing=default`);
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */ upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        this.headers.append('Prefer', `resolution=${ignoreDuplicates ? 'ignore' : 'merge'}-duplicates`);
        if (onConflict !== undefined) this.url.searchParams.set('on_conflict', onConflict);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', 'missing=default');
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ update(values, { count } = {}) {
        var _a;
        const method = 'PATCH';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ delete({ count } = {}) {
        var _a;
        const method = 'DELETE';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestQueryBuilder;
}),
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-client] (ecmascript)"));
class PostgrestTransformBuilder extends PostgrestBuilder_1.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */ select(columns) {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        this.headers.append('Prefer', 'return=representation');
        return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.order` : 'order';
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ''}${column}.${ascending ? 'asc' : 'desc'}${nullsFirst === undefined ? '' : nullsFirst ? '.nullsfirst' : '.nullslast'}`);
        return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
        const keyOffset = typeof referencedTable === 'undefined' ? 'offset' : `${referencedTable}.offset`;
        const keyLimit = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */ single() {
        this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */ maybeSingle() {
        // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
        // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
        if (this.method === 'GET') {
            this.headers.set('Accept', 'application/json');
        } else {
            this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        }
        this.isMaybeSingle = true;
        return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */ csv() {
        this.headers.set('Accept', 'text/csv');
        return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */ geojson() {
        this.headers.set('Accept', 'application/geo+json');
        return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */ explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = 'text' } = {}) {
        var _a;
        const options = [
            analyze ? 'analyze' : null,
            verbose ? 'verbose' : null,
            settings ? 'settings' : null,
            buffers ? 'buffers' : null,
            wal ? 'wal' : null
        ].filter(Boolean).join('|');
        // An Accept header can carry multiple media types but postgrest-js always sends one
        const forMediatype = (_a = this.headers.get('Accept')) !== null && _a !== void 0 ? _a : 'application/json';
        this.headers.set('Accept', `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
        if (format === 'json') {
            return this;
        } else {
            return this;
        }
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */ rollback() {
        this.headers.append('Prefer', 'tx=rollback');
        return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        return this;
    }
    /**
     * Set the maximum number of rows that can be affected by the query.
     * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
     *
     * @param value - The maximum number of rows that can be affected
     */ maxAffected(value) {
        this.headers.append('Prefer', 'handling=strict');
        this.headers.append('Prefer', `max-affected=${value}`);
        return this;
    }
}
exports.default = PostgrestTransformBuilder;
}),
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostgrestError = exports.PostgrestBuilder = exports.PostgrestTransformBuilder = exports.PostgrestFilterBuilder = exports.PostgrestQueryBuilder = exports.PostgrestClient = void 0;
// Always update wrapper.mjs when updating this file.
const PostgrestClient_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-client] (ecmascript)"));
exports.PostgrestClient = PostgrestClient_1.default;
const PostgrestQueryBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-client] (ecmascript)"));
exports.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-client] (ecmascript)"));
exports.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
const PostgrestTransformBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-client] (ecmascript)"));
exports.PostgrestTransformBuilder = PostgrestTransformBuilder_1.default;
const PostgrestBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-client] (ecmascript)"));
exports.PostgrestBuilder = PostgrestBuilder_1.default;
const PostgrestError_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-client] (ecmascript)"));
exports.PostgrestError = PostgrestError_1.default;
exports.default = {
    PostgrestClient: PostgrestClient_1.default,
    PostgrestQueryBuilder: PostgrestQueryBuilder_1.default,
    PostgrestFilterBuilder: PostgrestFilterBuilder_1.default,
    PostgrestTransformBuilder: PostgrestTransformBuilder_1.default,
    PostgrestBuilder: PostgrestBuilder_1.default,
    PostgrestError: PostgrestError_1.default
};
}),
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostgrestBuilder",
    ()=>PostgrestBuilder,
    "PostgrestClient",
    ()=>PostgrestClient,
    "PostgrestError",
    ()=>PostgrestError,
    "PostgrestFilterBuilder",
    ()=>PostgrestFilterBuilder,
    "PostgrestQueryBuilder",
    ()=>PostgrestQueryBuilder,
    "PostgrestTransformBuilder",
    ()=>PostgrestTransformBuilder,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-client] (ecmascript)");
;
const { PostgrestClient, PostgrestQueryBuilder, PostgrestFilterBuilder, PostgrestTransformBuilder, PostgrestBuilder, PostgrestError } = __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
;
const __TURBOPACK__default__export__ = {
    PostgrestClient,
    PostgrestQueryBuilder,
    PostgrestFilterBuilder,
    PostgrestTransformBuilder,
    PostgrestBuilder,
    PostgrestError
};
}),
]);})()

//# sourceMappingURL=1uep_1q3vok564c1zt._.js.map