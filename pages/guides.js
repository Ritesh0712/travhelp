import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Guides() {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchGuides = async () => {
      const res = await axios.get("/api/guides");
      setGuides(res.data);
    };
    fetchGuides();
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Available Guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div key={guide._id} className="border rounded-lg p-4 shadow">
              <img src={guide.image} alt={guide.name} className="w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-bold mt-2">{guide.name}</h3>
              <p className="text-gray-600">{guide.location}</p>
              <p className="text-gray-700 mt-1">₹{guide.price}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
