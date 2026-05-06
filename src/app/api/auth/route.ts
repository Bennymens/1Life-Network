import { cookies } from "next/headers";

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "1life2026";
const SESSION_TOKEN = "1life-admin-session";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      // Create a simple token (timestamp + hash-like value)
      const token = Buffer.from(`${ADMIN_USER}:${Date.now()}`).toString("base64");

      const cookieStore = await cookies();
      cookieStore.set(SESSION_TOKEN, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });

      return Response.json({ success: true });
    }

    return Response.json({ success: false, error: "Invalid credentials" }, { status: 401 });
  } catch {
    return Response.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}

// Check auth status
export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_TOKEN);

  if (token?.value) {
    return Response.json({ authenticated: true });
  }

  return Response.json({ authenticated: false }, { status: 401 });
}

// Logout
export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_TOKEN);
  return Response.json({ success: true });
}
