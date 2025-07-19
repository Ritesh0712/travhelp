import dbConnect from "../../lib/mongodb";
import Guide from "../../models/Guide";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const guides = await Guide.find({});
    res.status(200).json(guides);
  } else if (req.method === "POST") {
    const guide = await Guide.create(req.body);
    res.status(201).json(guide);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
