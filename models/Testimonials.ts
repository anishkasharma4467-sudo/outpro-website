import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String },
  company: { type: String },
  message: { type: String, required: true },
  videoUrl: { type: String },    // optional
  avatarUrl: { type: String },   // optional
  createdAt: { type: Date, default: Date.now },
});

// Third argument ensures we use the existing "testimonials" collection
export default mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema, "testimonials");