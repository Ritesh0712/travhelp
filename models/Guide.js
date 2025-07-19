import mongoose from "mongoose";

const GuideSchema = new mongoose.Schema({
  name: String,
  location: String,
  languages: [String],
  price: Number,
  rating: Number,
  image: String,
  description: String,
}, { timestamps: true });

export default mongoose.models.Guide || mongoose.model("Guide", GuideSchema);
