import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    features: [{ type: String }],
  },
  {
    timestamps: true,
    collection: "services", // 🔥 FORCE correct collection
  }
);

const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);

export default Service;