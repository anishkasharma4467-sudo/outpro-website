import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("👉 API HIT");

    await connectDB();
    console.log("✅ DB CONNECTED");

    const services = await Service.find({}).lean(); // ✅ USE MODEL

    console.log("🔥 DATA:", services);

    return NextResponse.json(services); // ✅ RETURN ARRAY

  } catch (error: any) {
    console.error("❌ ERROR:", error.message);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}