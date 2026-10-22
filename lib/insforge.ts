import { createClient } from "@insforge/sdk";

/**
 * Single InsForge SDK client for the VELOUR storefront.
 *
 * Initialized from environment variables (NEXT_PUBLIC_* so they are bundled
 * into the client bundle at build time). Never hardcode keys here.
 */
export const insforge = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL!,
  anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
});

export interface InsForgeUser {
  id: string;
  email: string;
  emailVerified: boolean;
  providers: string[];
  profile: { name?: string | null; avatar_url?: string | null };
  createdAt: string;
  updatedAt: string;
}

/**
 * Return the currently signed-in user, restoring the session from the
 * SDK's httpOnly refresh cookie if one is present. Resolves to null when
 * there is no active session.
 */
export async function getCurrentUser(): Promise<InsForgeUser | null> {
  const { data, error } = await insforge.auth.getCurrentUser();
  if (error || !data?.user) {
    return null;
  }
  return data.user as InsForgeUser;
}
