import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  guideId: { type: mongoose.Schema.Types.ObjectId, ref: "Guide" },
  paymentId: String,
  amount: Number,
  paymentStatus: String,
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
