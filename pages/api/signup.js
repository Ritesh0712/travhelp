import dbConnect from "../../lib/mongodb";
import User from "../../models/User";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
