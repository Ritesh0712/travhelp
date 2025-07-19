import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Shop() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Affiliate Shop</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://amzn.to/example1" target="_blank" rel="noopener noreferrer" className="border p-4 rounded shadow">
            <img src="/og-image.jpg" alt="Product 1" className="w-full h-48 object-cover mb-2 rounded" />
            <p className="text-center">Travel Backpack</p>
          </a>
          <a href="https://amzn.to/example2" target="_blank" rel="noopener noreferrer" className="border p-4 rounded shadow">
            <img src="/og-image.jpg" alt="Product 2" className="w-full h-48 object-cover mb-2 rounded" />
            <p className="text-center">Travel Camera</p>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
