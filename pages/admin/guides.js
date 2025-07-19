import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AdminGuides() {
  const [guides, setGuides] = useState([]);
  const [form, setForm] = useState({ name: "", location: "", languages: "", price: "", rating: "", image: "", description: "" });

  useEffect(() => { fetchGuides(); }, []);

  const fetchGuides = async () => {
    const res = await axios.get("/api/guides");
    setGuides(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/guides", { ...form, languages: form.languages.split(",").map(l => l.trim()), price: parseInt(form.price), rating: parseFloat(form.rating) });
    setForm({ name: "", location: "", languages: "", price: "", rating: "", image: "", description: "" });
    fetchGuides();
  };

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Manage Guides</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mb-10">
          <input type="text" placeholder="Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <input type="text" placeholder="Location" required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <input type="text" placeholder="Languages (comma separated)" required value={form.languages} onChange={(e) => setForm({ ...form, languages: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <input type="number" placeholder="Price" required value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <input type="number" step="0.1" placeholder="Rating" required value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <input type="text" placeholder="Image URL" required value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <textarea placeholder="Description" required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded">Add Guide</button>
        </form>

        <h3 className="text-2xl font-bold mb-4">All Guides</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div key={guide._id} className="border rounded-lg p-4 shadow">
              <img src={guide.image} alt={guide.name} className="w-full h-48 object-cover rounded" />
              <h4 className="text-xl font-bold mt-2">{guide.name}</h4>
              <p className="text-gray-600">{guide.location}</p>
              <p className="text-gray-700 mt-1">₹{guide.price} / service</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
