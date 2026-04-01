import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI!;

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (!MONGO_URI) {
    throw new Error("❌ MONGODB_URI is missing in .env.local");
  }

  // ✅ If already connected, reuse it
  if (cached.conn) return cached.conn;

  // ✅ Create connection if not exists
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      dbName: "servicesDB", // 🔥 FORCE correct DB
    }).then((mongoose) => {
      console.log("✅ MongoDB Connected to servicesDB");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}