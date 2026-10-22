(()=>{"use strict";module.exports = [
"[project]/free claude code/node_modules/@insforge/sdk/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
// src/modules/auth/auth.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/free claude code/node_modules/@insforge/shared-schemas/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$error$2d$codes$2e$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/@insforge/shared-schemas/dist/error-codes.schema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/@insforge/shared-schemas/dist/auth.schema.js [app-rsc] (ecmascript)");
// src/modules/database-postgrest.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-rsc] (ecmascript)");
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
    const secure = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
    document.cookie = `${CSRF_TOKEN_COOKIE}=${encodeURIComponent(token)}; path=/; max-age=${maxAge}; SameSite=Lax${secure}`;
}
function clearCsrfToken() {
    if (typeof document === "undefined") {
        return;
    }
    const secure = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
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
    if (typeof process !== "undefined" && process.versions?.node) {
        const { webcrypto } = await __turbopack_context__.A("[externals]/crypto [external] (crypto, cjs, async loader)");
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
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    const url = undefined;
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
        if (this.isServerMode() || ("TURBOPACK compile-time value", "undefined") === "undefined") {
            return;
        }
        //TURBOPACK unreachable
        ;
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
                    error: new InsForgeError("OAuth sign-in options are required", 400, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$error$2d$codes$2e$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERROR_CODES"].INVALID_INPUT)
                };
            }
            if (!signInOptions || !signInOptions.redirectTo) {
                return {
                    data: {},
                    error: new InsForgeError("Redirect URI is required", 400, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$error$2d$codes$2e$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERROR_CODES"].INVALID_INPUT)
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
            const isBuiltInProvider = __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oAuthProvidersSchema"].options.includes(providerKey);
            const oauthPath = isBuiltInProvider ? `/api/auth/oauth/${providerKey}` : `/api/auth/oauth/custom/${providerKey}`;
            const response = await this.http.get(oauthPath, {
                params,
                skipAuthRefresh: true
            });
            if (!this.isServerMode() && ("TURBOPACK compile-time value", "undefined") !== "undefined" && !signInOptions.skipBrowserRedirect) //TURBOPACK unreachable
            ;
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
                    error: new InsForgeError("refreshToken is required when refreshing session in server mode", 400, __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$error$2d$codes$2e$schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ERROR_CODES"].AUTH_UNAUTHORIZED)
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
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
        this.postgrest = new __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PostgrestClient"]("http://dummy", {
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
            const { io } = await __turbopack_context__.A("[project]/free claude code/node_modules/socket.io-client/build/esm-debug/index.js [app-rsc] (ecmascript, async loader)");
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
"[project]/free claude code/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var Stream = _interopDefault(__turbopack_context__.r("[externals]/stream [external] (stream, cjs)"));
var http = _interopDefault(__turbopack_context__.r("[externals]/http [external] (http, cjs)"));
var Url = _interopDefault(__turbopack_context__.r("[externals]/url [external] (url, cjs)"));
var whatwgUrl = _interopDefault(__turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/public-api.js [app-rsc] (ecmascript)"));
var https = _interopDefault(__turbopack_context__.r("[externals]/https [external] (https, cjs)"));
var zlib = _interopDefault(__turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)"));
// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js
// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;
const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');
class Blob {
    constructor(){
        this[TYPE] = '';
        const blobParts = arguments[0];
        const options = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
            const a = blobParts;
            const length = Number(a.length);
            for(let i = 0; i < length; i++){
                const element = a[i];
                let buffer;
                if (element instanceof Buffer) {
                    buffer = element;
                } else if (ArrayBuffer.isView(element)) {
                    buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
                } else if (element instanceof ArrayBuffer) {
                    buffer = Buffer.from(element);
                } else if (element instanceof Blob) {
                    buffer = element[BUFFER];
                } else {
                    buffer = Buffer.from(typeof element === 'string' ? element : String(element));
                }
                size += buffer.length;
                buffers.push(buffer);
            }
        }
        this[BUFFER] = Buffer.concat(buffers);
        let type = options && options.type !== undefined && String(options.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) {
            this[TYPE] = type;
        }
    }
    get size() {
        return this[BUFFER].length;
    }
    get type() {
        return this[TYPE];
    }
    text() {
        return Promise.resolve(this[BUFFER].toString());
    }
    arrayBuffer() {
        const buf = this[BUFFER];
        const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        return Promise.resolve(ab);
    }
    stream() {
        const readable = new Readable();
        readable._read = function() {};
        readable.push(this[BUFFER]);
        readable.push(null);
        return readable;
    }
    toString() {
        return '[object Blob]';
    }
    slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === undefined) {
            relativeStart = 0;
        } else if (start < 0) {
            relativeStart = Math.max(size + start, 0);
        } else {
            relativeStart = Math.min(start, size);
        }
        if (end === undefined) {
            relativeEnd = size;
        } else if (end < 0) {
            relativeEnd = Math.max(size + end, 0);
        } else {
            relativeEnd = Math.min(end, size);
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob([], {
            type: arguments[2]
        });
        blob[BUFFER] = slicedBuffer;
        return blob;
    }
}
Object.defineProperties(Blob.prototype, {
    size: {
        enumerable: true
    },
    type: {
        enumerable: true
    },
    slice: {
        enumerable: true
    }
});
Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
    value: 'Blob',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */ /**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */ function FetchError(message, type, systemError) {
    Error.call(this, message);
    this.message = message;
    this.type = type;
    // when err.type is `system`, err.code contains system error code
    if (systemError) {
        this.code = this.errno = systemError.code;
    }
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';
let convert;
const INTERNALS = Symbol('Body internals');
// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;
/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ function Body(body) {
    var _this = this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$size = _ref.size;
    let size = _ref$size === undefined ? 0 : _ref$size;
    var _ref$timeout = _ref.timeout;
    let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;
    if (body == null) {
        // body is undefined or null
        body = null;
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        body = Buffer.from(body.toString());
    } else if (isBlob(body)) ;
    else if (Buffer.isBuffer(body)) ;
    else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof Stream) ;
    else {
        // none of the above
        // coerce to string then buffer
        body = Buffer.from(String(body));
    }
    this[INTERNALS] = {
        body,
        disturbed: false,
        error: null
    };
    this.size = size;
    this.timeout = timeout;
    if (body instanceof Stream) {
        body.on('error', function(err) {
            const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
            _this[INTERNALS].error = error;
        });
    }
}
Body.prototype = {
    get body () {
        return this[INTERNALS].body;
    },
    get bodyUsed () {
        return this[INTERNALS].disturbed;
    },
    /**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */ arrayBuffer () {
        return consumeBody.call(this).then(function(buf) {
            return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        });
    },
    /**
  * Return raw response as Blob
  *
  * @return Promise
  */ blob () {
        let ct = this.headers && this.headers.get('content-type') || '';
        return consumeBody.call(this).then(function(buf) {
            return Object.assign(// Prevent copying
            new Blob([], {
                type: ct.toLowerCase()
            }), {
                [BUFFER]: buf
            });
        });
    },
    /**
  * Decode response as json
  *
  * @return  Promise
  */ json () {
        var _this2 = this;
        return consumeBody.call(this).then(function(buffer) {
            try {
                return JSON.parse(buffer.toString());
            } catch (err) {
                return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
            }
        });
    },
    /**
  * Decode response as text
  *
  * @return  Promise
  */ text () {
        return consumeBody.call(this).then(function(buffer) {
            return buffer.toString();
        });
    },
    /**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */ buffer () {
        return consumeBody.call(this);
    },
    /**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */ textConverted () {
        var _this3 = this;
        return consumeBody.call(this).then(function(buffer) {
            return convertBody(buffer, _this3.headers);
        });
    }
};
// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
    body: {
        enumerable: true
    },
    bodyUsed: {
        enumerable: true
    },
    arrayBuffer: {
        enumerable: true
    },
    blob: {
        enumerable: true
    },
    json: {
        enumerable: true
    },
    text: {
        enumerable: true
    }
});
Body.mixIn = function(proto) {
    for (const name of Object.getOwnPropertyNames(Body.prototype)){
        // istanbul ignore else: future proof
        if (!(name in proto)) {
            const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
            Object.defineProperty(proto, name, desc);
        }
    }
};
/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */ function consumeBody() {
    var _this4 = this;
    if (this[INTERNALS].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    }
    this[INTERNALS].disturbed = true;
    if (this[INTERNALS].error) {
        return Body.Promise.reject(this[INTERNALS].error);
    }
    let body = this.body;
    // body is null
    if (body === null) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is blob
    if (isBlob(body)) {
        body = body.stream();
    }
    // body is buffer
    if (Buffer.isBuffer(body)) {
        return Body.Promise.resolve(body);
    }
    // istanbul ignore if: should never happen
    if (!(body instanceof Stream)) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is stream
    // get ready to actually consume the body
    let accum = [];
    let accumBytes = 0;
    let abort = false;
    return new Body.Promise(function(resolve, reject) {
        let resTimeout;
        // allow timeout on slow response body
        if (_this4.timeout) {
            resTimeout = setTimeout(function() {
                abort = true;
                reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
            }, _this4.timeout);
        }
        // handle stream errors
        body.on('error', function(err) {
            if (err.name === 'AbortError') {
                // if the request was aborted, reject with this Error
                abort = true;
                reject(err);
            } else {
                // other errors, such as incorrect content-encoding
                reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
        body.on('data', function(chunk) {
            if (abort || chunk === null) {
                return;
            }
            if (_this4.size && accumBytes + chunk.length > _this4.size) {
                abort = true;
                reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
                return;
            }
            accumBytes += chunk.length;
            accum.push(chunk);
        });
        body.on('end', function() {
            if (abort) {
                return;
            }
            clearTimeout(resTimeout);
            try {
                resolve(Buffer.concat(accum, accumBytes));
            } catch (err) {
                // handle streams that have accumulated too much data (issue #414)
                reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
    });
}
/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */ function convertBody(buffer, headers) {
    {
        throw new Error('The package `encoding` must be installed to use the textConverted() function');
    }
    const ct = headers.get('content-type');
    let charset = 'utf-8';
    let res, str;
    // header
    if (ct) {
        res = /charset=([^;]*)/i.exec(ct);
    }
    // no charset in content type, peek at response body for at most 1024 bytes
    str = buffer.slice(0, 1024).toString();
    // html5
    if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
    }
    // html4
    if (!res && str) {
        res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
        if (!res) {
            res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
            if (res) {
                res.pop(); // drop last quote
            }
        }
        if (res) {
            res = /charset=(.*)/i.exec(res.pop());
        }
    }
    // xml
    if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
    }
    // found charset
    if (res) {
        charset = res.pop();
        // prevent decode issues when sites use incorrect encoding
        // ref: https://hsivonen.fi/encoding-menu/
        if (charset === 'gb2312' || charset === 'gbk') {
            charset = 'gb18030';
        }
    }
    // turn raw buffers into a single utf-8 buffer
    return convert(buffer, 'UTF-8', charset).toString();
}
/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */ function isURLSearchParams(obj) {
    // Duck-typing as a necessary condition.
    if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
        return false;
    }
    // Brand-checking and more duck-typing as optional condition.
    return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}
/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */ function isBlob(obj) {
    return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}
/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */ function clone(instance) {
    let p1, p2;
    let body = instance.body;
    // don't allow cloning a used body
    if (instance.bodyUsed) {
        throw new Error('cannot clone body after it is used');
    }
    // check that body is a stream and not form-data object
    // note: we can't clone the form-data object without having it as a dependency
    if (body instanceof Stream && typeof body.getBoundary !== 'function') {
        // tee instance body
        p1 = new PassThrough();
        p2 = new PassThrough();
        body.pipe(p1);
        body.pipe(p2);
        // set instance body to teed body and return the other teed body
        instance[INTERNALS].body = p1;
        body = p2;
    }
    return body;
}
/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */ function extractContentType(body) {
    if (body === null) {
        // body is null
        return null;
    } else if (typeof body === 'string') {
        // body is string
        return 'text/plain;charset=UTF-8';
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        return 'application/x-www-form-urlencoded;charset=UTF-8';
    } else if (isBlob(body)) {
        // body is blob
        return body.type || null;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return null;
    } else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        return null;
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        return null;
    } else if (typeof body.getBoundary === 'function') {
        // detect form data input from form-data module
        return `multipart/form-data;boundary=${body.getBoundary()}`;
    } else if (body instanceof Stream) {
        // body is stream
        // can't really do much about this
        return null;
    } else {
        // Body constructor defaults other things to string
        return 'text/plain;charset=UTF-8';
    }
}
/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */ function getTotalBytes(instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        return 0;
    } else if (isBlob(body)) {
        return body.size;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return body.length;
    } else if (body && typeof body.getLengthSync === 'function') {
        // detect form data input from form-data module
        if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
        body.hasKnownLength && body.hasKnownLength()) {
            // 2.x
            return body.getLengthSync();
        }
        return null;
    } else {
        // body is stream
        return null;
    }
}
/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */ function writeToStream(dest, instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        dest.end();
    } else if (isBlob(body)) {
        body.stream().pipe(dest);
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        dest.write(body);
        dest.end();
    } else {
        // body is stream
        body.pipe(dest);
    }
}
// expose Promise
Body.Promise = /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */ const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function validateName(name) {
    name = `${name}`;
    if (invalidTokenRegex.test(name) || name === '') {
        throw new TypeError(`${name} is not a legal HTTP header name`);
    }
}
function validateValue(value) {
    value = `${value}`;
    if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`);
    }
}
/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */ function find(map, name) {
    name = name.toLowerCase();
    for(const key in map){
        if (key.toLowerCase() === name) {
            return key;
        }
    }
    return undefined;
}
const MAP = Symbol('map');
class Headers {
    /**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */ constructor(){
        let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        this[MAP] = Object.create(null);
        if (init instanceof Headers) {
            const rawHeaders = init.raw();
            const headerNames = Object.keys(rawHeaders);
            for (const headerName of headerNames){
                for (const value of rawHeaders[headerName]){
                    this.append(headerName, value);
                }
            }
            return;
        }
        // We don't worry about converting prop to ByteString here as append()
        // will handle it.
        if (init == null) ;
        else if (typeof init === 'object') {
            const method = init[Symbol.iterator];
            if (method != null) {
                if (typeof method !== 'function') {
                    throw new TypeError('Header pairs must be iterable');
                }
                // sequence<sequence<ByteString>>
                // Note: per spec we have to first exhaust the lists then process them
                const pairs = [];
                for (const pair of init){
                    if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
                        throw new TypeError('Each header pair must be iterable');
                    }
                    pairs.push(Array.from(pair));
                }
                for (const pair of pairs){
                    if (pair.length !== 2) {
                        throw new TypeError('Each header pair must be a name/value tuple');
                    }
                    this.append(pair[0], pair[1]);
                }
            } else {
                // record<ByteString, ByteString>
                for (const key of Object.keys(init)){
                    const value = init[key];
                    this.append(key, value);
                }
            }
        } else {
            throw new TypeError('Provided initializer must be an object');
        }
    }
    /**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */ get(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key === undefined) {
            return null;
        }
        return this[MAP][key].join(', ');
    }
    /**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */ forEach(callback) {
        let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        let pairs = getHeaders(this);
        let i = 0;
        while(i < pairs.length){
            var _pairs$i = pairs[i];
            const name = _pairs$i[0], value = _pairs$i[1];
            callback.call(thisArg, value, name, this);
            pairs = getHeaders(this);
            i++;
        }
    }
    /**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ set(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        this[MAP][key !== undefined ? key : name] = [
            value
        ];
    }
    /**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ append(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            this[MAP][key].push(value);
        } else {
            this[MAP][name] = [
                value
            ];
        }
    }
    /**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */ has(name) {
        name = `${name}`;
        validateName(name);
        return find(this[MAP], name) !== undefined;
    }
    /**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */ delete(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            delete this[MAP][key];
        }
    }
    /**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */ raw() {
        return this[MAP];
    }
    /**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */ keys() {
        return createHeadersIterator(this, 'key');
    }
    /**
  * Get an iterator on values.
  *
  * @return  Iterator
  */ values() {
        return createHeadersIterator(this, 'value');
    }
    /**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */ [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value');
    }
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];
Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
    value: 'Headers',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Headers.prototype, {
    get: {
        enumerable: true
    },
    forEach: {
        enumerable: true
    },
    set: {
        enumerable: true
    },
    append: {
        enumerable: true
    },
    has: {
        enumerable: true
    },
    delete: {
        enumerable: true
    },
    keys: {
        enumerable: true
    },
    values: {
        enumerable: true
    },
    entries: {
        enumerable: true
    }
});
function getHeaders(headers) {
    let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
    const keys = Object.keys(headers[MAP]).sort();
    return keys.map(kind === 'key' ? function(k) {
        return k.toLowerCase();
    } : kind === 'value' ? function(k) {
        return headers[MAP][k].join(', ');
    } : function(k) {
        return [
            k.toLowerCase(),
            headers[MAP][k].join(', ')
        ];
    });
}
const INTERNAL = Symbol('internal');
function createHeadersIterator(target, kind) {
    const iterator = Object.create(HeadersIteratorPrototype);
    iterator[INTERNAL] = {
        target,
        kind,
        index: 0
    };
    return iterator;
}
const HeadersIteratorPrototype = Object.setPrototypeOf({
    next () {
        // istanbul ignore if
        if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
            throw new TypeError('Value of `this` is not a HeadersIterator');
        }
        var _INTERNAL = this[INTERNAL];
        const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
        const values = getHeaders(target, kind);
        const len = values.length;
        if (index >= len) {
            return {
                value: undefined,
                done: true
            };
        }
        this[INTERNAL].index = index + 1;
        return {
            value: values[index],
            done: false
        };
    }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
    value: 'HeadersIterator',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */ function exportNodeCompatibleHeaders(headers) {
    const obj = Object.assign({
        __proto__: null
    }, headers[MAP]);
    // http.request() only supports string as Host header. This hack makes
    // specifying custom Host header possible.
    const hostHeaderKey = find(headers[MAP], 'Host');
    if (hostHeaderKey !== undefined) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0];
    }
    return obj;
}
/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */ function createHeadersLenient(obj) {
    const headers = new Headers();
    for (const name of Object.keys(obj)){
        if (invalidTokenRegex.test(name)) {
            continue;
        }
        if (Array.isArray(obj[name])) {
            for (const val of obj[name]){
                if (invalidHeaderCharRegex.test(val)) {
                    continue;
                }
                if (headers[MAP][name] === undefined) {
                    headers[MAP][name] = [
                        val
                    ];
                } else {
                    headers[MAP][name].push(val);
                }
            }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
            headers[MAP][name] = [
                obj[name]
            ];
        }
    }
    return headers;
}
const INTERNALS$1 = Symbol('Response internals');
// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;
/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ class Response {
    constructor(){
        let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Body.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new Headers(opts.headers);
        if (body != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(body);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        this[INTERNALS$1] = {
            url: opts.url,
            status,
            statusText: opts.statusText || STATUS_CODES[status],
            headers,
            counter: opts.counter
        };
    }
    get url() {
        return this[INTERNALS$1].url || '';
    }
    get status() {
        return this[INTERNALS$1].status;
    }
    /**
  * Convenience property representing if the request ended normally
  */ get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
    }
    get redirected() {
        return this[INTERNALS$1].counter > 0;
    }
    get statusText() {
        return this[INTERNALS$1].statusText;
    }
    get headers() {
        return this[INTERNALS$1].headers;
    }
    /**
  * Clone this response
  *
  * @return  Response
  */ clone() {
        return new Response(clone(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected
        });
    }
}
Body.mixIn(Response.prototype);
Object.defineProperties(Response.prototype, {
    url: {
        enumerable: true
    },
    status: {
        enumerable: true
    },
    ok: {
        enumerable: true
    },
    redirected: {
        enumerable: true
    },
    statusText: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    clone: {
        enumerable: true
    }
});
Object.defineProperty(Response.prototype, Symbol.toStringTag, {
    value: 'Response',
    writable: false,
    enumerable: false,
    configurable: true
});
const INTERNALS$2 = Symbol('Request internals');
const URL = Url.URL || whatwgUrl.URL;
// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;
/**
 * Wrapper around `new URL` to handle arbitrary URLs
 *
 * @param  {string} urlStr
 * @return {void}
 */ function parseURL(urlStr) {
    /*
 	Check whether the URL is absolute or not
 		Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 	Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 */ if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
        urlStr = new URL(urlStr).toString();
    }
    // Fallback to old implementation for arbitrary URLs
    return parse_url(urlStr);
}
const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;
/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */ function isRequest(input) {
    return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}
function isAbortSignal(signal) {
    const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
    return !!(proto && proto.constructor.name === 'AbortSignal');
}
/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */ class Request {
    constructor(input){
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let parsedURL;
        // normalize input
        if (!isRequest(input)) {
            if (input && input.href) {
                // in order to support Node.js' Url objects; though WHATWG's URL objects
                // will fall into this branch also (since their `toString()` will return
                // `href` property anyway)
                parsedURL = parseURL(input.href);
            } else {
                // coerce input to a string before attempting to parse
                parsedURL = parseURL(`${input}`);
            }
            input = {};
        } else {
            parsedURL = parseURL(input.url);
        }
        let method = init.method || input.method || 'GET';
        method = method.toUpperCase();
        if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
            throw new TypeError('Request with GET/HEAD method cannot have body');
        }
        let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        Body.call(this, inputBody, {
            timeout: init.timeout || input.timeout || 0,
            size: init.size || input.size || 0
        });
        const headers = new Headers(init.headers || input.headers || {});
        if (inputBody != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(inputBody);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ('signal' in init) signal = init.signal;
        if (signal != null && !isAbortSignal(signal)) {
            throw new TypeError('Expected signal to be an instanceof AbortSignal');
        }
        this[INTERNALS$2] = {
            method,
            redirect: init.redirect || input.redirect || 'follow',
            headers,
            parsedURL,
            signal
        };
        // node-fetch-only options
        this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
        this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
    }
    get method() {
        return this[INTERNALS$2].method;
    }
    get url() {
        return format_url(this[INTERNALS$2].parsedURL);
    }
    get headers() {
        return this[INTERNALS$2].headers;
    }
    get redirect() {
        return this[INTERNALS$2].redirect;
    }
    get signal() {
        return this[INTERNALS$2].signal;
    }
    /**
  * Clone this request
  *
  * @return  Request
  */ clone() {
        return new Request(this);
    }
}
Body.mixIn(Request.prototype);
Object.defineProperty(Request.prototype, Symbol.toStringTag, {
    value: 'Request',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Request.prototype, {
    method: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    redirect: {
        enumerable: true
    },
    clone: {
        enumerable: true
    },
    signal: {
        enumerable: true
    }
});
/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */ function getNodeRequestOptions(request) {
    const parsedURL = request[INTERNALS$2].parsedURL;
    const headers = new Headers(request[INTERNALS$2].headers);
    // fetch step 1.3
    if (!headers.has('Accept')) {
        headers.set('Accept', '*/*');
    }
    // Basic fetch
    if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError('Only absolute URLs are supported');
    }
    if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported');
    }
    if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
        throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
    }
    // HTTP-network-or-cache fetch steps 2.4-2.7
    let contentLengthValue = null;
    if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = '0';
    }
    if (request.body != null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === 'number') {
            contentLengthValue = String(totalBytes);
        }
    }
    if (contentLengthValue) {
        headers.set('Content-Length', contentLengthValue);
    }
    // HTTP-network-or-cache fetch step 2.11
    if (!headers.has('User-Agent')) {
        headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
    }
    // HTTP-network-or-cache fetch step 2.15
    if (request.compress && !headers.has('Accept-Encoding')) {
        headers.set('Accept-Encoding', 'gzip,deflate');
    }
    let agent = request.agent;
    if (typeof agent === 'function') {
        agent = agent(parsedURL);
    }
    if (!headers.has('Connection') && !agent) {
        headers.set('Connection', 'close');
    }
    // HTTP-network fetch step 4.2
    // chunked encoding is handled by Node.js
    return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
    });
}
/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */ /**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */ function AbortError(message) {
    Error.call(this, message);
    this.type = 'aborted';
    this.message = message;
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';
const URL$1 = Url.URL || whatwgUrl.URL;
// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const isDomainOrSubdomain = function isDomainOrSubdomain(destination, original) {
    const orig = new URL$1(original).hostname;
    const dest = new URL$1(destination).hostname;
    return orig === dest || orig[orig.length - dest.length - 1] === '.' && orig.endsWith(dest);
};
/**
 * isSameProtocol reports whether the two provided URLs use the same protocol.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */ const isSameProtocol = function isSameProtocol(destination, original) {
    const orig = new URL$1(original).protocol;
    const dest = new URL$1(destination).protocol;
    return orig === dest;
};
/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */ function fetch(url, opts) {
    // allow custom promise
    if (!fetch.Promise) {
        throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
    }
    Body.Promise = fetch.Promise;
    // wrap http.request into fetch
    return new fetch.Promise(function(resolve, reject) {
        // build request object
        const request = new Request(url, opts);
        const options = getNodeRequestOptions(request);
        const send = (options.protocol === 'https:' ? https : http).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort() {
            let error = new AbortError('The user aborted a request.');
            reject(error);
            if (request.body && request.body instanceof Stream.Readable) {
                destroyStream(request.body, error);
            }
            if (!response || !response.body) return;
            response.body.emit('error', error);
        };
        if (signal && signal.aborted) {
            abort();
            return;
        }
        const abortAndFinalize = function abortAndFinalize() {
            abort();
            finalize();
        };
        // send request
        const req = send(options);
        let reqTimeout;
        if (signal) {
            signal.addEventListener('abort', abortAndFinalize);
        }
        function finalize() {
            req.abort();
            if (signal) signal.removeEventListener('abort', abortAndFinalize);
            clearTimeout(reqTimeout);
        }
        if (request.timeout) {
            req.once('socket', function(socket) {
                reqTimeout = setTimeout(function() {
                    reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
                    finalize();
                }, request.timeout);
            });
        }
        req.on('error', function(err) {
            reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
            if (response && response.body) {
                destroyStream(response.body, err);
            }
            finalize();
        });
        fixResponseChunkedTransferBadEnding(req, function(err) {
            if (signal && signal.aborted) {
                return;
            }
            if (response && response.body) {
                destroyStream(response.body, err);
            }
        });
        /* c8 ignore next 18 */ if (parseInt(process.version.substring(1)) < 14) {
            // Before Node.js 14, pipeline() does not fully support async iterators and does not always
            // properly handle when the socket close/end events are out of order.
            req.on('socket', function(s) {
                s.addListener('close', function(hadError) {
                    // if a data listener is still present we didn't end cleanly
                    const hasDataListener = s.listenerCount('data') > 0;
                    // if end happened before close but the socket didn't emit an error, do it now
                    if (response && hasDataListener && !hadError && !(signal && signal.aborted)) {
                        const err = new Error('Premature close');
                        err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                        response.body.emit('error', err);
                    }
                });
            });
        }
        req.on('response', function(res) {
            clearTimeout(reqTimeout);
            const headers = createHeadersLenient(res.headers);
            // HTTP fetch step 5
            if (fetch.isRedirect(res.statusCode)) {
                // HTTP fetch step 5.2
                const location = headers.get('Location');
                // HTTP fetch step 5.3
                let locationURL = null;
                try {
                    locationURL = location === null ? null : new URL$1(location, request.url).toString();
                } catch (err) {
                    // error here can only be invalid URL in Location: header
                    // do not throw when options.redirect == manual
                    // let the user extract the errorneous redirect URL
                    if (request.redirect !== 'manual') {
                        reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
                        finalize();
                        return;
                    }
                }
                // HTTP fetch step 5.5
                switch(request.redirect){
                    case 'error':
                        reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
                        finalize();
                        return;
                    case 'manual':
                        // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                        if (locationURL !== null) {
                            // handle corrupted header
                            try {
                                headers.set('Location', locationURL);
                            } catch (err) {
                                // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                                reject(err);
                            }
                        }
                        break;
                    case 'follow':
                        // HTTP-redirect fetch step 2
                        if (locationURL === null) {
                            break;
                        }
                        // HTTP-redirect fetch step 5
                        if (request.counter >= request.follow) {
                            reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 6 (counter increment)
                        // Create a new Request object.
                        const requestOpts = {
                            headers: new Headers(request.headers),
                            follow: request.follow,
                            counter: request.counter + 1,
                            agent: request.agent,
                            compress: request.compress,
                            method: request.method,
                            body: request.body,
                            signal: request.signal,
                            timeout: request.timeout,
                            size: request.size
                        };
                        if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
                            for (const name of [
                                'authorization',
                                'www-authenticate',
                                'cookie',
                                'cookie2'
                            ]){
                                requestOpts.headers.delete(name);
                            }
                        }
                        // HTTP-redirect fetch step 9
                        if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                            reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 11
                        if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
                            requestOpts.method = 'GET';
                            requestOpts.body = undefined;
                            requestOpts.headers.delete('content-length');
                        }
                        // HTTP-redirect fetch step 15
                        resolve(fetch(new Request(locationURL, requestOpts)));
                        finalize();
                        return;
                }
            }
            // prepare response
            res.once('end', function() {
                if (signal) signal.removeEventListener('abort', abortAndFinalize);
            });
            let body = res.pipe(new PassThrough$1());
            const response_options = {
                url: request.url,
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: headers,
                size: request.size,
                timeout: request.timeout,
                counter: request.counter
            };
            // HTTP-network fetch step 12.1.1.3
            const codings = headers.get('Content-Encoding');
            // HTTP-network fetch step 12.1.1.4: handle content codings
            // in following scenarios we ignore compression support
            // 1. compression support is disabled
            // 2. HEAD request
            // 3. no Content-Encoding header
            // 4. no content response (204)
            // 5. content not modified response (304)
            if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // For Node v6+
            // Be less strict when decoding compressed responses, since sometimes
            // servers send slightly invalid responses that are still accepted
            // by common browsers.
            // Always using Z_SYNC_FLUSH is what cURL does.
            const zlibOptions = {
                flush: zlib.Z_SYNC_FLUSH,
                finishFlush: zlib.Z_SYNC_FLUSH
            };
            // for gzip
            if (codings == 'gzip' || codings == 'x-gzip') {
                body = body.pipe(zlib.createGunzip(zlibOptions));
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // for deflate
            if (codings == 'deflate' || codings == 'x-deflate') {
                // handle the infamous raw deflate response from old servers
                // a hack for old IIS and Apache servers
                const raw = res.pipe(new PassThrough$1());
                raw.once('data', function(chunk) {
                    // see http://stackoverflow.com/questions/37519828
                    if ((chunk[0] & 0x0F) === 0x08) {
                        body = body.pipe(zlib.createInflate());
                    } else {
                        body = body.pipe(zlib.createInflateRaw());
                    }
                    response = new Response(body, response_options);
                    resolve(response);
                });
                raw.on('end', function() {
                    // some old IIS servers return zero-length OK deflate responses, so 'data' is never emitted.
                    if (!response) {
                        response = new Response(body, response_options);
                        resolve(response);
                    }
                });
                return;
            }
            // for br
            if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
                body = body.pipe(zlib.createBrotliDecompress());
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // otherwise, use response as-is
            response = new Response(body, response_options);
            resolve(response);
        });
        writeToStream(req, request);
    });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
    let socket;
    request.on('socket', function(s) {
        socket = s;
    });
    request.on('response', function(response) {
        const headers = response.headers;
        if (headers['transfer-encoding'] === 'chunked' && !headers['content-length']) {
            response.once('close', function(hadError) {
                // tests for socket presence, as in some situations the
                // the 'socket' event is not triggered for the request
                // (happens in deno), avoids `TypeError`
                // if a data listener is still present we didn't end cleanly
                const hasDataListener = socket && socket.listenerCount('data') > 0;
                if (hasDataListener && !hadError) {
                    const err = new Error('Premature close');
                    err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                    errorCallback(err);
                }
            });
        }
    });
}
function destroyStream(stream, err) {
    if (stream.destroy) {
        stream.destroy(err);
    } else {
        // node < 8
        stream.emit('error', err);
        stream.end();
    }
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */ fetch.isRedirect = function(code) {
    return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};
// expose Promise
fetch.Promise = /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
module.exports = exports = fetch;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.FetchError = FetchError;
}),
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const node_fetch_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript)"));
const PostgrestError_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-rsc] (ecmascript)"));
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
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestQueryBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-rsc] (ecmascript)"));
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)"));
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
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestTransformBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-rsc] (ecmascript)"));
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
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)"));
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
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-rsc] (ecmascript)"));
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
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const PostgrestClient_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-rsc] (ecmascript)"));
exports.PostgrestClient = PostgrestClient_1.default;
const PostgrestQueryBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-rsc] (ecmascript)"));
exports.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)"));
exports.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
const PostgrestTransformBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-rsc] (ecmascript)"));
exports.PostgrestTransformBuilder = PostgrestTransformBuilder_1.default;
const PostgrestBuilder_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-rsc] (ecmascript)"));
exports.PostgrestBuilder = PostgrestBuilder_1.default;
const PostgrestError_1 = __importDefault(__turbopack_context__.r("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-rsc] (ecmascript)"));
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
"[project]/free claude code/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/free claude code/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-rsc] (ecmascript)");
;
const { PostgrestClient, PostgrestQueryBuilder, PostgrestFilterBuilder, PostgrestTransformBuilder, PostgrestBuilder, PostgrestError } = __TURBOPACK__imported__module__$5b$project$5d2f$free__claude__code$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
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
"[project]/free claude code/node_modules/webidl-conversions/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var conversions = {};
module.exports = conversions;
function sign(x) {
    return x < 0 ? -1 : 1;
}
function evenRound(x) {
    // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
    if (x % 1 === 0.5 && (x & 1) === 0) {
        return Math.floor(x);
    } else {
        return Math.round(x);
    }
}
function createNumberConversion(bitLength, typeOpts) {
    if (!typeOpts.unsigned) {
        --bitLength;
    }
    const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
    const upperBound = Math.pow(2, bitLength) - 1;
    const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
    const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
    return function(V, opts) {
        if (!opts) opts = {};
        let x = +V;
        if (opts.enforceRange) {
            if (!Number.isFinite(x)) {
                throw new TypeError("Argument is not a finite number");
            }
            x = sign(x) * Math.floor(Math.abs(x));
            if (x < lowerBound || x > upperBound) {
                throw new TypeError("Argument is not in byte range");
            }
            return x;
        }
        if (!isNaN(x) && opts.clamp) {
            x = evenRound(x);
            if (x < lowerBound) x = lowerBound;
            if (x > upperBound) x = upperBound;
            return x;
        }
        if (!Number.isFinite(x) || x === 0) {
            return 0;
        }
        x = sign(x) * Math.floor(Math.abs(x));
        x = x % moduloVal;
        if (!typeOpts.unsigned && x >= moduloBound) {
            return x - moduloVal;
        } else if (typeOpts.unsigned) {
            if (x < 0) {
                x += moduloVal;
            } else if (x === -0) {
                return 0;
            }
        }
        return x;
    };
}
conversions["void"] = function() {
    return undefined;
};
conversions["boolean"] = function(val) {
    return !!val;
};
conversions["byte"] = createNumberConversion(8, {
    unsigned: false
});
conversions["octet"] = createNumberConversion(8, {
    unsigned: true
});
conversions["short"] = createNumberConversion(16, {
    unsigned: false
});
conversions["unsigned short"] = createNumberConversion(16, {
    unsigned: true
});
conversions["long"] = createNumberConversion(32, {
    unsigned: false
});
conversions["unsigned long"] = createNumberConversion(32, {
    unsigned: true
});
conversions["long long"] = createNumberConversion(32, {
    unsigned: false,
    moduloBitLength: 64
});
conversions["unsigned long long"] = createNumberConversion(32, {
    unsigned: true,
    moduloBitLength: 64
});
conversions["double"] = function(V) {
    const x = +V;
    if (!Number.isFinite(x)) {
        throw new TypeError("Argument is not a finite floating-point value");
    }
    return x;
};
conversions["unrestricted double"] = function(V) {
    const x = +V;
    if (isNaN(x)) {
        throw new TypeError("Argument is NaN");
    }
    return x;
};
// not quite valid, but good enough for JS
conversions["float"] = conversions["double"];
conversions["unrestricted float"] = conversions["unrestricted double"];
conversions["DOMString"] = function(V, opts) {
    if (!opts) opts = {};
    if (opts.treatNullAsEmptyString && V === null) {
        return "";
    }
    return String(V);
};
conversions["ByteString"] = function(V, opts) {
    const x = String(V);
    let c = undefined;
    for(let i = 0; (c = x.codePointAt(i)) !== undefined; ++i){
        if (c > 255) {
            throw new TypeError("Argument is not a valid bytestring");
        }
    }
    return x;
};
conversions["USVString"] = function(V) {
    const S = String(V);
    const n = S.length;
    const U = [];
    for(let i = 0; i < n; ++i){
        const c = S.charCodeAt(i);
        if (c < 0xD800 || c > 0xDFFF) {
            U.push(String.fromCodePoint(c));
        } else if (0xDC00 <= c && c <= 0xDFFF) {
            U.push(String.fromCodePoint(0xFFFD));
        } else {
            if (i === n - 1) {
                U.push(String.fromCodePoint(0xFFFD));
            } else {
                const d = S.charCodeAt(i + 1);
                if (0xDC00 <= d && d <= 0xDFFF) {
                    const a = c & 0x3FF;
                    const b = d & 0x3FF;
                    U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                    ++i;
                } else {
                    U.push(String.fromCodePoint(0xFFFD));
                }
            }
        }
    }
    return U.join('');
};
conversions["Date"] = function(V, opts) {
    if (!(V instanceof Date)) {
        throw new TypeError("Argument is not a Date object");
    }
    if (isNaN(V)) {
        return undefined;
    }
    return V;
};
conversions["RegExp"] = function(V, opts) {
    if (!(V instanceof RegExp)) {
        V = new RegExp(V);
    }
    return V;
};
}),
"[project]/free claude code/node_modules/whatwg-url/lib/URL-impl.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const usm = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)");
exports.implementation = class URLImpl {
    constructor(constructorArgs){
        const url = constructorArgs[0];
        const base = constructorArgs[1];
        let parsedBase = null;
        if (base !== undefined) {
            parsedBase = usm.basicURLParse(base);
            if (parsedBase === "failure") {
                throw new TypeError("Invalid base URL");
            }
        }
        const parsedURL = usm.basicURLParse(url, {
            baseURL: parsedBase
        });
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    // TODO: query stuff
    }
    get href() {
        return usm.serializeURL(this._url);
    }
    set href(v) {
        const parsedURL = usm.basicURLParse(v);
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    }
    get origin() {
        return usm.serializeURLOrigin(this._url);
    }
    get protocol() {
        return this._url.scheme + ":";
    }
    set protocol(v) {
        usm.basicURLParse(v + ":", {
            url: this._url,
            stateOverride: "scheme start"
        });
    }
    get username() {
        return this._url.username;
    }
    set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setTheUsername(this._url, v);
    }
    get password() {
        return this._url.password;
    }
    set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setThePassword(this._url, v);
    }
    get host() {
        const url = this._url;
        if (url.host === null) {
            return "";
        }
        if (url.port === null) {
            return usm.serializeHost(url.host);
        }
        return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
    }
    set host(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "host"
        });
    }
    get hostname() {
        if (this._url.host === null) {
            return "";
        }
        return usm.serializeHost(this._url.host);
    }
    set hostname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "hostname"
        });
    }
    get port() {
        if (this._url.port === null) {
            return "";
        }
        return usm.serializeInteger(this._url.port);
    }
    set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        if (v === "") {
            this._url.port = null;
        } else {
            usm.basicURLParse(v, {
                url: this._url,
                stateOverride: "port"
            });
        }
    }
    get pathname() {
        if (this._url.cannotBeABaseURL) {
            return this._url.path[0];
        }
        if (this._url.path.length === 0) {
            return "";
        }
        return "/" + this._url.path.join("/");
    }
    set pathname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        this._url.path = [];
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "path start"
        });
    }
    get search() {
        if (this._url.query === null || this._url.query === "") {
            return "";
        }
        return "?" + this._url.query;
    }
    set search(v) {
        // TODO: query stuff
        const url = this._url;
        if (v === "") {
            url.query = null;
            return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        usm.basicURLParse(input, {
            url,
            stateOverride: "query"
        });
    }
    get hash() {
        if (this._url.fragment === null || this._url.fragment === "") {
            return "";
        }
        return "#" + this._url.fragment;
    }
    set hash(v) {
        if (v === "") {
            this._url.fragment = null;
            return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        usm.basicURLParse(input, {
            url: this._url,
            stateOverride: "fragment"
        });
    }
    toJSON() {
        return this.href;
    }
};
}),
"[project]/free claude code/node_modules/whatwg-url/lib/URL.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const conversions = __turbopack_context__.r("[project]/free claude code/node_modules/webidl-conversions/lib/index.js [app-rsc] (ecmascript)");
const utils = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/utils.js [app-rsc] (ecmascript)");
const Impl = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/URL-impl.js [app-rsc] (ecmascript)");
const impl = utils.implSymbol;
function URL(url) {
    if (!this || this[impl] || !(this instanceof URL)) {
        throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
    }
    if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 2; ++i){
        args[i] = arguments[i];
    }
    args[0] = conversions["USVString"](args[0]);
    if (args[1] !== undefined) {
        args[1] = conversions["USVString"](args[1]);
    }
    module.exports.setup(this, args);
}
URL.prototype.toJSON = function toJSON() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 0; ++i){
        args[i] = arguments[i];
    }
    return this[impl].toJSON.apply(this[impl], args);
};
Object.defineProperty(URL.prototype, "href", {
    get () {
        return this[impl].href;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].href = V;
    },
    enumerable: true,
    configurable: true
});
URL.prototype.toString = function() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    return this.href;
};
Object.defineProperty(URL.prototype, "origin", {
    get () {
        return this[impl].origin;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "protocol", {
    get () {
        return this[impl].protocol;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].protocol = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "username", {
    get () {
        return this[impl].username;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].username = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "password", {
    get () {
        return this[impl].password;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].password = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "host", {
    get () {
        return this[impl].host;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].host = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hostname", {
    get () {
        return this[impl].hostname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hostname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "port", {
    get () {
        return this[impl].port;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].port = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "pathname", {
    get () {
        return this[impl].pathname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].pathname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "search", {
    get () {
        return this[impl].search;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].search = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hash", {
    get () {
        return this[impl].hash;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hash = V;
    },
    enumerable: true,
    configurable: true
});
module.exports = {
    is (obj) {
        return !!obj && obj[impl] instanceof Impl.implementation;
    },
    create (constructorArgs, privateData) {
        let obj = Object.create(URL.prototype);
        this.setup(obj, constructorArgs, privateData);
        return obj;
    },
    setup (obj, constructorArgs, privateData) {
        if (!privateData) privateData = {};
        privateData.wrapper = obj;
        obj[impl] = new Impl.implementation(constructorArgs, privateData);
        obj[impl][utils.wrapperSymbol] = obj;
    },
    interface: URL,
    expose: {
        Window: {
            URL: URL
        },
        Worker: {
            URL: URL
        }
    }
};
}),
"[project]/free claude code/node_modules/whatwg-url/lib/public-api.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.URL = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/URL.js [app-rsc] (ecmascript)").interface;
exports.serializeURL = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeURL;
exports.serializeURLOrigin = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeURLOrigin;
exports.basicURLParse = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").basicURLParse;
exports.setTheUsername = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").setTheUsername;
exports.setThePassword = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").setThePassword;
exports.serializeHost = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeHost;
exports.serializeInteger = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeInteger;
exports.parseURL = __turbopack_context__.r("[project]/free claude code/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").parseURL;
}),
"[project]/free claude code/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const punycode = __turbopack_context__.r("[externals]/punycode [external] (punycode, cjs)");
const tr46 = __turbopack_context__.r("[project]/free claude code/node_modules/tr46/index.js [app-rsc] (ecmascript)");
const specialSchemes = {
    ftp: 21,
    file: null,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
const failure = Symbol("failure");
function countSymbols(str) {
    return punycode.ucs2.decode(str).length;
}
function at(input, idx) {
    const c = input[idx];
    return isNaN(c) ? undefined : String.fromCodePoint(c);
}
function isASCIIDigit(c) {
    return c >= 0x30 && c <= 0x39;
}
function isASCIIAlpha(c) {
    return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A;
}
function isASCIIAlphanumeric(c) {
    return isASCIIAlpha(c) || isASCIIDigit(c);
}
function isASCIIHex(c) {
    return isASCIIDigit(c) || c >= 0x41 && c <= 0x46 || c >= 0x61 && c <= 0x66;
}
function isSingleDot(buffer) {
    return buffer === "." || buffer.toLowerCase() === "%2e";
}
function isDoubleDot(buffer) {
    buffer = buffer.toLowerCase();
    return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}
function isWindowsDriveLetterCodePoints(cp1, cp2) {
    return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
}
function isWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}
function isNormalizedWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}
function containsForbiddenHostCodePoint(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function containsForbiddenHostCodePointExcludingPercent(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function isSpecialScheme(scheme) {
    return specialSchemes[scheme] !== undefined;
}
function isSpecial(url) {
    return isSpecialScheme(url.scheme);
}
function defaultPort(scheme) {
    return specialSchemes[scheme];
}
function percentEncode(c) {
    let hex = c.toString(16).toUpperCase();
    if (hex.length === 1) {
        hex = "0" + hex;
    }
    return "%" + hex;
}
function utf8PercentEncode(c) {
    const buf = new Buffer(c);
    let str = "";
    for(let i = 0; i < buf.length; ++i){
        str += percentEncode(buf[i]);
    }
    return str;
}
function utf8PercentDecode(str) {
    const input = new Buffer(str);
    const output = [];
    for(let i = 0; i < input.length; ++i){
        if (input[i] !== 37) {
            output.push(input[i]);
        } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
            output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
            i += 2;
        } else {
            output.push(input[i]);
        }
    }
    return new Buffer(output).toString();
}
function isC0ControlPercentEncode(c) {
    return c <= 0x1F || c > 0x7E;
}
const extraPathPercentEncodeSet = new Set([
    32,
    34,
    35,
    60,
    62,
    63,
    96,
    123,
    125
]);
function isPathPercentEncode(c) {
    return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
}
const extraUserinfoPercentEncodeSet = new Set([
    47,
    58,
    59,
    61,
    64,
    91,
    92,
    93,
    94,
    124
]);
function isUserinfoPercentEncode(c) {
    return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
}
function percentEncodeChar(c, encodeSetPredicate) {
    const cStr = String.fromCodePoint(c);
    if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr);
    }
    return cStr;
}
function parseIPv4Number(input) {
    let R = 10;
    if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
        input = input.substring(2);
        R = 16;
    } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
    }
    if (input === "") {
        return 0;
    }
    const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
    if (regex.test(input)) {
        return failure;
    }
    return parseInt(input, R);
}
function parseIPv4(input) {
    const parts = input.split(".");
    if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
            parts.pop();
        }
    }
    if (parts.length > 4) {
        return input;
    }
    const numbers = [];
    for (const part of parts){
        if (part === "") {
            return input;
        }
        const n = parseIPv4Number(part);
        if (n === failure) {
            return input;
        }
        numbers.push(n);
    }
    for(let i = 0; i < numbers.length - 1; ++i){
        if (numbers[i] > 255) {
            return failure;
        }
    }
    if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure;
    }
    let ipv4 = numbers.pop();
    let counter = 0;
    for (const n of numbers){
        ipv4 += n * Math.pow(256, 3 - counter);
        ++counter;
    }
    return ipv4;
}
function serializeIPv4(address) {
    let output = "";
    let n = address;
    for(let i = 1; i <= 4; ++i){
        output = String(n % 256) + output;
        if (i !== 4) {
            output = "." + output;
        }
        n = Math.floor(n / 256);
    }
    return output;
}
function parseIPv6(input) {
    const address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    let pieceIndex = 0;
    let compress = null;
    let pointer = 0;
    input = punycode.ucs2.decode(input);
    if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
            return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
    }
    while(pointer < input.length){
        if (pieceIndex === 8) {
            return failure;
        }
        if (input[pointer] === 58) {
            if (compress !== null) {
                return failure;
            }
            ++pointer;
            ++pieceIndex;
            compress = pieceIndex;
            continue;
        }
        let value = 0;
        let length = 0;
        while(length < 4 && isASCIIHex(input[pointer])){
            value = value * 0x10 + parseInt(at(input, pointer), 16);
            ++pointer;
            ++length;
        }
        if (input[pointer] === 46) {
            if (length === 0) {
                return failure;
            }
            pointer -= length;
            if (pieceIndex > 6) {
                return failure;
            }
            let numbersSeen = 0;
            while(input[pointer] !== undefined){
                let ipv4Piece = null;
                if (numbersSeen > 0) {
                    if (input[pointer] === 46 && numbersSeen < 4) {
                        ++pointer;
                    } else {
                        return failure;
                    }
                }
                if (!isASCIIDigit(input[pointer])) {
                    return failure;
                }
                while(isASCIIDigit(input[pointer])){
                    const number = parseInt(at(input, pointer));
                    if (ipv4Piece === null) {
                        ipv4Piece = number;
                    } else if (ipv4Piece === 0) {
                        return failure;
                    } else {
                        ipv4Piece = ipv4Piece * 10 + number;
                    }
                    if (ipv4Piece > 255) {
                        return failure;
                    }
                    ++pointer;
                }
                address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;
                ++numbersSeen;
                if (numbersSeen === 2 || numbersSeen === 4) {
                    ++pieceIndex;
                }
            }
            if (numbersSeen !== 4) {
                return failure;
            }
            break;
        } else if (input[pointer] === 58) {
            ++pointer;
            if (input[pointer] === undefined) {
                return failure;
            }
        } else if (input[pointer] !== undefined) {
            return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
    }
    if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while(pieceIndex !== 0 && swaps > 0){
            const temp = address[compress + swaps - 1];
            address[compress + swaps - 1] = address[pieceIndex];
            address[pieceIndex] = temp;
            --pieceIndex;
            --swaps;
        }
    } else if (compress === null && pieceIndex !== 8) {
        return failure;
    }
    return address;
}
function serializeIPv6(address) {
    let output = "";
    const seqResult = findLongestZeroSequence(address);
    const compress = seqResult.idx;
    let ignore0 = false;
    for(let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex){
        if (ignore0 && address[pieceIndex] === 0) {
            continue;
        } else if (ignore0) {
            ignore0 = false;
        }
        if (compress === pieceIndex) {
            const separator = pieceIndex === 0 ? "::" : ":";
            output += separator;
            ignore0 = true;
            continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
            output += ":";
        }
    }
    return output;
}
function parseHost(input, isSpecialArg) {
    if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
            return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
    }
    if (!isSpecialArg) {
        return parseOpaqueHost(input);
    }
    const domain = utf8PercentDecode(input);
    const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
    if (asciiDomain === null) {
        return failure;
    }
    if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure;
    }
    const ipv4Host = parseIPv4(asciiDomain);
    if (typeof ipv4Host === "number" || ipv4Host === failure) {
        return ipv4Host;
    }
    return asciiDomain;
}
function parseOpaqueHost(input) {
    if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure;
    }
    let output = "";
    const decoded = punycode.ucs2.decode(input);
    for(let i = 0; i < decoded.length; ++i){
        output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
    }
    return output;
}
function findLongestZeroSequence(arr) {
    let maxIdx = null;
    let maxLen = 1; // only find elements > 1
    let currStart = null;
    let currLen = 0;
    for(let i = 0; i < arr.length; ++i){
        if (arr[i] !== 0) {
            if (currLen > maxLen) {
                maxIdx = currStart;
                maxLen = currLen;
            }
            currStart = null;
            currLen = 0;
        } else {
            if (currStart === null) {
                currStart = i;
            }
            ++currLen;
        }
    }
    // if trailing zeros
    if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
    }
    return {
        idx: maxIdx,
        len: maxLen
    };
}
function serializeHost(host) {
    if (typeof host === "number") {
        return serializeIPv4(host);
    }
    // IPv6 serializer
    if (host instanceof Array) {
        return "[" + serializeIPv6(host) + "]";
    }
    return host;
}
function trimControlChars(url) {
    return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
}
function trimTabAndNewline(url) {
    return url.replace(/\u0009|\u000A|\u000D/g, "");
}
function shortenPath(url) {
    const path = url.path;
    if (path.length === 0) {
        return;
    }
    if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
        return;
    }
    path.pop();
}
function includesCredentials(url) {
    return url.username !== "" || url.password !== "";
}
function cannotHaveAUsernamePasswordPort(url) {
    return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
}
function isNormalizedWindowsDriveLetter(string) {
    return /^[A-Za-z]:$/.test(string);
}
function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
    this.pointer = 0;
    this.input = input;
    this.base = base || null;
    this.encodingOverride = encodingOverride || "utf-8";
    this.stateOverride = stateOverride;
    this.url = url;
    this.failure = false;
    this.parseError = false;
    if (!this.url) {
        this.url = {
            scheme: "",
            username: "",
            password: "",
            host: null,
            port: null,
            path: [],
            query: null,
            fragment: null,
            cannotBeABaseURL: false
        };
        const res = trimControlChars(this.input);
        if (res !== this.input) {
            this.parseError = true;
        }
        this.input = res;
    }
    const res = trimTabAndNewline(this.input);
    if (res !== this.input) {
        this.parseError = true;
    }
    this.input = res;
    this.state = stateOverride || "scheme start";
    this.buffer = "";
    this.atFlag = false;
    this.arrFlag = false;
    this.passwordTokenSeenFlag = false;
    this.input = punycode.ucs2.decode(this.input);
    for(; this.pointer <= this.input.length; ++this.pointer){
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);
        // exec state machine
        const ret = this["parse " + this.state](c, cStr);
        if (!ret) {
            break; // terminate algorithm
        } else if (ret === failure) {
            this.failure = true;
            break;
        }
    }
}
URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
    if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
    } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
    if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase();
    } else if (c === 58) {
        if (this.stateOverride) {
            if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
                return false;
            }
            if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
                return false;
            }
            if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
                return false;
            }
            if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) {
                return false;
            }
        }
        this.url.scheme = this.buffer;
        this.buffer = "";
        if (this.stateOverride) {
            return false;
        }
        if (this.url.scheme === "file") {
            if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
                this.parseError = true;
            }
            this.state = "file";
        } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
            this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
            this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === 47) {
            this.state = "path or authority";
            ++this.pointer;
        } else {
            this.url.cannotBeABaseURL = true;
            this.url.path.push("");
            this.state = "cannot-be-a-base-URL path";
        }
    } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
    if (this.base === null || this.base.cannotBeABaseURL && c !== 35) {
        return failure;
    } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.url.cannotBeABaseURL = true;
        this.state = "fragment";
    } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
    } else {
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
    if (c === 47) {
        this.state = "authority";
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
    this.url.scheme = this.base.scheme;
    if (isNaN(c)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
    } else if (c === 47) {
        this.state = "relative slash";
    } else if (c === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
    } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true;
        this.state = "relative slash";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
    if (isSpecial(this.url) && (c === 47 || c === 92)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "special authority ignore slashes";
    } else if (c === 47) {
        this.state = "authority";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "special authority ignore slashes";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
    if (c !== 47 && c !== 92) {
        this.state = "authority";
        --this.pointer;
    } else {
        this.parseError = true;
    }
    return true;
};
URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
    if (c === 64) {
        this.parseError = true;
        if (this.atFlag) {
            this.buffer = "%40" + this.buffer;
        }
        this.atFlag = true;
        // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
        const len = countSymbols(this.buffer);
        for(let pointer = 0; pointer < len; ++pointer){
            const codePoint = this.buffer.codePointAt(pointer);
            if (codePoint === 58 && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = true;
                continue;
            }
            const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
            if (this.passwordTokenSeenFlag) {
                this.url.password += encodedCodePoints;
            } else {
                this.url.username += encodedCodePoints;
            }
        }
        this.buffer = "";
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        if (this.atFlag && this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
    if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
    } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
        if (this.stateOverride === "hostname") {
            return false;
        }
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
            this.parseError = true;
            return failure;
        } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
            this.parseError = true;
            return false;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
            return false;
        }
    } else {
        if (c === 91) {
            this.arrFlag = true;
        } else if (c === 93) {
            this.arrFlag = false;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
    if (isASCIIDigit(c)) {
        this.buffer += cStr;
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92 || this.stateOverride) {
        if (this.buffer !== "") {
            const port = parseInt(this.buffer);
            if (port > Math.pow(2, 16) - 1) {
                this.parseError = true;
                return failure;
            }
            this.url.port = port === defaultPort(this.url.scheme) ? null : port;
            this.buffer = "";
        }
        if (this.stateOverride) {
            return false;
        }
        this.state = "path start";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
const fileOtherwiseCodePoints = new Set([
    47,
    92,
    63,
    35
]);
URLStateMachine.prototype["parse file"] = function parseFile(c) {
    this.url.scheme = "file";
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file slash";
    } else if (this.base !== null && this.base.scheme === "file") {
        if (isNaN(c)) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
        } else if (c === 63) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = "";
            this.state = "query";
        } else if (c === 35) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
            this.url.fragment = "";
            this.state = "fragment";
        } else {
            if (this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
            !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) || this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
            !fileOtherwiseCodePoints.has(this.input[this.pointer + 2])) {
                this.url.host = this.base.host;
                this.url.path = this.base.path.slice();
                shortenPath(this.url);
            } else {
                this.parseError = true;
            }
            this.state = "path";
            --this.pointer;
        }
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file host";
    } else {
        if (this.base !== null && this.base.scheme === "file") {
            if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
                this.url.path.push(this.base.path[0]);
            } else {
                this.url.host = this.base.host;
            }
        }
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
    if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
            this.parseError = true;
            this.state = "path";
        } else if (this.buffer === "") {
            this.url.host = "";
            if (this.stateOverride) {
                return false;
            }
            this.state = "path start";
        } else {
            let host = parseHost(this.buffer, isSpecial(this.url));
            if (host === failure) {
                return failure;
            }
            if (host === "localhost") {
                host = "";
            }
            this.url.host = host;
            if (this.stateOverride) {
                return false;
            }
            this.buffer = "";
            this.state = "path start";
        }
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
    if (isSpecial(this.url)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "path";
        if (c !== 47 && c !== 92) {
            --this.pointer;
        }
    } else if (!this.stateOverride && c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (!this.stateOverride && c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else if (c !== undefined) {
        this.state = "path";
        if (c !== 47) {
            --this.pointer;
        }
    }
    return true;
};
URLStateMachine.prototype["parse path"] = function parsePath(c) {
    if (isNaN(c) || c === 47 || isSpecial(this.url) && c === 92 || !this.stateOverride && (c === 63 || c === 35)) {
        if (isSpecial(this.url) && c === 92) {
            this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
            shortenPath(this.url);
            if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
                this.url.path.push("");
            }
        } else if (isSingleDot(this.buffer) && c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
            if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
                if (this.url.host !== "" && this.url.host !== null) {
                    this.parseError = true;
                    this.url.host = "";
                }
                this.buffer = this.buffer[0] + ":";
            }
            this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (this.url.scheme === "file" && (c === undefined || c === 63 || c === 35)) {
            while(this.url.path.length > 1 && this.url.path[0] === ""){
                this.parseError = true;
                this.url.path.shift();
            }
        }
        if (c === 63) {
            this.url.query = "";
            this.state = "query";
        }
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += percentEncodeChar(c, isPathPercentEncode);
    }
    return true;
};
URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
    if (c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else {
        // TODO: Add: not a URL code point
        if (!isNaN(c) && c !== 37) {
            this.parseError = true;
        }
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        if (!isNaN(c)) {
            this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
        }
    }
    return true;
};
URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
    if (isNaN(c) || !this.stateOverride && c === 35) {
        if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
            this.encodingOverride = "utf-8";
        }
        const buffer = new Buffer(this.buffer); // TODO: Use encoding override instead
        for(let i = 0; i < buffer.length; ++i){
            if (buffer[i] < 0x21 || buffer[i] > 0x7E || buffer[i] === 0x22 || buffer[i] === 0x23 || buffer[i] === 0x3C || buffer[i] === 0x3E) {
                this.url.query += percentEncode(buffer[i]);
            } else {
                this.url.query += String.fromCodePoint(buffer[i]);
            }
        }
        this.buffer = "";
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
    if (isNaN(c)) {} else if (c === 0x0) {
        this.parseError = true;
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
    }
    return true;
};
function serializeURL(url, excludeFragment) {
    let output = url.scheme + ":";
    if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
            output += url.username;
            if (url.password !== "") {
                output += ":" + url.password;
            }
            output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
            output += ":" + url.port;
        }
    } else if (url.host === null && url.scheme === "file") {
        output += "//";
    }
    if (url.cannotBeABaseURL) {
        output += url.path[0];
    } else {
        for (const string of url.path){
            output += "/" + string;
        }
    }
    if (url.query !== null) {
        output += "?" + url.query;
    }
    if (!excludeFragment && url.fragment !== null) {
        output += "#" + url.fragment;
    }
    return output;
}
function serializeOrigin(tuple) {
    let result = tuple.scheme + "://";
    result += serializeHost(tuple.host);
    if (tuple.port !== null) {
        result += ":" + tuple.port;
    }
    return result;
}
module.exports.serializeURL = serializeURL;
module.exports.serializeURLOrigin = function(url) {
    // https://url.spec.whatwg.org/#concept-url-origin
    switch(url.scheme){
        case "blob":
            try {
                return module.exports.serializeURLOrigin(module.exports.parseURL(url.path[0]));
            } catch (e) {
                // serializing an opaque origin returns "null"
                return "null";
            }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
            return serializeOrigin({
                scheme: url.scheme,
                host: url.host,
                port: url.port
            });
        case "file":
            // spec says "exercise to the reader", chrome says "file://"
            return "file://";
        default:
            // serializing an opaque origin returns "null"
            return "null";
    }
};
module.exports.basicURLParse = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
    if (usm.failure) {
        return "failure";
    }
    return usm.url;
};
module.exports.setTheUsername = function(url, username) {
    url.username = "";
    const decoded = punycode.ucs2.decode(username);
    for(let i = 0; i < decoded.length; ++i){
        url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.setThePassword = function(url, password) {
    url.password = "";
    const decoded = punycode.ucs2.decode(password);
    for(let i = 0; i < decoded.length; ++i){
        url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.serializeHost = serializeHost;
module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
module.exports.serializeInteger = function(integer) {
    return String(integer);
};
module.exports.parseURL = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    // We don't handle blobs, so this just delegates:
    return module.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride
    });
};
}),
"[project]/free claude code/node_modules/whatwg-url/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports.mixin = function mixin(target, source) {
    const keys = Object.getOwnPropertyNames(source);
    for(let i = 0; i < keys.length; ++i){
        Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
    }
};
module.exports.wrapperSymbol = Symbol("wrapper");
module.exports.implSymbol = Symbol("impl");
module.exports.wrapperForImpl = function(impl) {
    return impl[module.exports.wrapperSymbol];
};
module.exports.implForWrapper = function(wrapper) {
    return wrapper[module.exports.implSymbol];
};
}),
];})()

//# sourceMappingURL=1uep_2198qwedl19o3._.js.map