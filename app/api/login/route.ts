import { NextResponse } from "next/server";
import { adminUser } from "../../../lib/auth";


export async function POST(req: Request) {
  const body = await req.json();

  if (body.email === adminUser.email && body.password === adminUser.password) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
