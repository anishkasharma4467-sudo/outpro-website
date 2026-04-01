import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI!;

// ✅ Connect DB (safe version)
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("✅ Already connected");
      return;
    }

    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.log("❌ DB ERROR:", err);
    throw err;
  }
};

// ✅ Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ✅ Model
const Contact =
  mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);

// ✅ POST API
export async function POST(req: Request) {
  try {
    console.log("👉 API HIT");

    await connectDB();

    const body = await req.json();
    console.log("📩 DATA:", body);

    await Contact.create(body);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.log("❌ ERROR:", error.message);

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}