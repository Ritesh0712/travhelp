import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/signup", form);
    setForm({ name: "", email: "", password: "" });
    alert("Signup successful. Please login.");
  };

  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <input type="password" placeholder="Password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full border px-3 py-2 rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded">Signup</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
