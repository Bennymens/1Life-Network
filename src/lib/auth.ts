import { cookies } from "next/headers";
import crypto from "crypto";

export const ADMIN_USER = process.env.ADMIN_USER || "admin";
export const ADMIN_PASS = process.env.ADMIN_PASS || "1life2026";
export const SESSION_TOKEN = "1life-admin-session";

// Fallback session secret if not provided in environment variables
const SESSION_SECRET = process.env.SESSION_SECRET || "1life-fallback-secure-signature-secret-key-2026";

/**
 * Generates a base64 encoded token: username:timestamp:hmacSignature
 */
export function generateToken(username: string): string {
  const timestamp = Date.now().toString();
  const signature = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(`${username}:${timestamp}`)
    .digest("hex");
  
  return Buffer.from(`${username}:${timestamp}:${signature}`).toString("base64");
}

/**
 * Verifies if the token is valid, has a correct signature, and has not expired (24-hour limit)
 */
export function verifyToken(tokenBase64: string): boolean {
  try {
    const decoded = Buffer.from(tokenBase64, "base64").toString("utf-8");
    const [username, timestamp, signature] = decoded.split(":");
    
    if (!username || !timestamp || !signature) {
      return false;
    }

    // Verify it matches the admin user
    if (username !== ADMIN_USER) {
      return false;
    }

    // Recalculate and verify signature
    const expectedSignature = crypto
      .createHmac("sha256", SESSION_SECRET)
      .update(`${username}:${timestamp}`)
      .digest("hex");
    
    if (signature !== expectedSignature) {
      return false;
    }

    // Verify token age (must be within 24 hours)
    const tokenTime = parseInt(timestamp, 10);
    if (isNaN(tokenTime)) {
      return false;
    }
    
    const age = Date.now() - tokenTime;
    if (age < 0 || age > 1000 * 60 * 60 * 24) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

/**
 * Helper to check if current request is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_TOKEN);
    if (!token?.value) {
      return false;
    }
    return verifyToken(token.value);
  } catch {
    return false;
  }
}
