"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { insforge, getCurrentUser } from "./insforge";

export interface CartItem {
  id: string; // Composite key: `${productId}-${size}`
  productId: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

interface ToastState {
  id: number;
  message: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: {
    productId: string;
    name: string;
    price: number;
    size: string;
    image: string;
    quantity?: number;
  }) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  isHydrated: boolean;
  toasts: ToastState[];
  showToast: (message: string) => void;
  removeToast: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "velour_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [toasts, setToasts] = useState<ToastState[]>([]);

  // Auth state: resolved once on mount via the SDK's session cookie.
  const [userId, setUserId] = useState<string | null>(null);
  const [userLoaded, setUserLoaded] = useState(false);

  // Hydrate from localStorage once after mount to prevent hydration mismatch
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      // Ignore localStorage errors
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Persist the cart so a page reload keeps the bag contents.
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore localStorage errors (private mode / quota).
    }
  }, [items, isHydrated]);

  // Resolve the signed-in user (if any) from the SDK session.
  useEffect(() => {
    let cancelled = false;
    getCurrentUser().then((user) => {
      if (!cancelled) {
        setUserId(user?.id ?? null);
        setUserLoaded(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Load the cart from the `carts` table when a user signs in.
  useEffect(() => {
    if (!userId || !userLoaded) return;
    let cancelled = false;
    (async () => {
      try {
        const [cartRes, productRes] = await Promise.all([
          insforge.database
            .from("carts")
            .select("*")
            .eq("user_id", userId),
          insforge.database
            .from("products")
            .select("id, name, price, images"),
        ]);
        if (cancelled) return;
        const rows = (cartRes.data || []) as Array<{
          product_id: string;
          size: string;
          quantity: number;
        }>;
        const products = (productRes.data || []) as Array<{
          id: string;
          name: string;
          price: number;
          images: string[];
        }>;
        const byId = new Map(products.map((p) => [p.id, p]));
        const dbItems = rows
          .map((row) => {
            const p = byId.get(row.product_id);
            if (!p) return null;
            return {
              id: `${row.product_id}-${row.size}`,
              productId: row.product_id,
              name: p.name,
              price: p.price,
              size: row.size,
              image: (p.images?.[0] ?? "") as string,
              quantity: row.quantity,
            };
          })
          .filter(Boolean) as CartItem[];
        if (!cancelled && dbItems.length > 0) {
          setItems(dbItems);
        }
      } catch {
        // Fail silently: local cart remains usable.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [userId, userLoaded]);

  // Write-through: keep the `carts` table in sync with the local cart while
  // a user is signed in (guests continue to use localStorage only).
  useEffect(() => {
    if (!userLoaded || !userId || !isHydrated) return;
    let cancelled = false;
    (async () => {
      try {
        await insforge.database.from("carts").delete().eq("user_id", userId);
        if (items.length > 0) {
          const now = new Date().toISOString();
          await insforge.database.from("carts").insert(
            items.map((item) => ({
              user_id: userId,
              product_id: item.productId,
              size: item.size,
              quantity: item.quantity,
              updated_at: now,
            }))
          );
        }
      } catch {
        // Swallow sync errors; localStorage remains the UI source of truth.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [items, userId, userLoaded, isHydrated]);

  const showToast = useCallback((message: string) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addItem = useCallback(
    (item: {
      productId: string;
      name: string;
      price: number;
      size: string;
      image: string;
      quantity?: number;
    }) => {
      const qty = item.quantity && item.quantity > 0 ? item.quantity : 1;
      const compositeId = `${item.productId}-${item.size}`;

      setItems((prev) => {
        const existingIndex = prev.findIndex((i) => i.id === compositeId);
        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + qty,
          };
          return updated;
        } else {
          return [
            ...prev,
            {
              id: compositeId,
              productId: item.productId,
              name: item.name,
              price: item.price,
              size: item.size,
              image: item.image,
              quantity: qty,
            },
          ];
        }
      });

      showToast(`Added ${item.name} (${item.size}) to cart`);
    },
    [showToast]
  );

  const removeItem = useCallback((productId: string, size: string) => {
    const compositeId = `${productId}-${size}`;
    setItems((prev) => prev.filter((i) => i.id !== compositeId));
  }, []);

  const updateQuantity = useCallback(
    (productId: string, size: string, quantity: number) => {
      const compositeId = `${productId}-${size}`;
      if (quantity <= 0) {
        removeItem(productId, size);
        return;
      }
      setItems((prev) =>
        prev.map((i) => (i.id === compositeId ? { ...i, quantity } : i))
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalCount = useMemo(
    () => (isHydrated ? items.reduce((acc, item) => acc + item.quantity, 0) : 0),
    [items, isHydrated]
  );

  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalCount,
      subtotal,
      isHydrated,
      toasts,
      showToast,
      removeToast,
    }),
    [
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalCount,
      subtotal,
      isHydrated,
      toasts,
      showToast,
      removeToast,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
