// app/api/health/route.ts
import { NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/mongo";

export async function GET() {
  try {
    await connectToDB();
    return NextResponse.json({
      ok: true,
      message: "MongoDB connected",
      time: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Connection failed" },
      { status: 500 }
    );
  }
}
