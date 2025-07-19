import Razorpay from "razorpay";
import dbConnect from "../../lib/mongodb";
import Booking from "../../models/Booking";
import { getSession } from "next-auth/react";
import nodemailer from "nodemailer";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  await dbConnect();
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === "POST") {
    const { guideId, amount } = req.body;

    const payment = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      payment_capture: 1,
    });

    const newBooking = await Booking.create({
      userId: session.user.id,
      guideId,
      paymentId: payment.id,
      amount,
      paymentStatus: "Paid",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: session.user.email,
      subject: "Booking Confirmation",
      html: `<p>Your booking for guide ${guideId} is confirmed. Payment ID: ${payment.id}</p>`,
    });

    res.status(200).json({ payment, booking: newBooking });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
