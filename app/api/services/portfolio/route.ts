
import { connectDB } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

export async function GET() {
  await connectDB();

  try {
    const items = await Portfolio.find({});
    console.log("PORTFOLIO ITEMS:", items); // check terminal for DB output
    return new Response(JSON.stringify({ success: true, data: items }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}