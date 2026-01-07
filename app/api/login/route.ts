import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@demo.com" && password === "admin123") {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}

