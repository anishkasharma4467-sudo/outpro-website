// models/Portfolio.js
import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  image: { type: String },
  video: { type: String },
  description: { type: String },
  kpis: { type: Map, of: String },
  slug: { type: String, required: true, unique: true },
}, { timestamps: true });

// Explicitly use the existing 'portfolio' collection
export default mongoose.models.Portfolio || mongoose.model("Portfolio", PortfolioSchema, "portfolio");