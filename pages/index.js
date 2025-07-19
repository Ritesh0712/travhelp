import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Travhelp | Book Verified Travel Guides in India"
        description="Find and book trusted local travel guides across India with Travhelp. Pay securely and explore confidently."
      />
      <Navbar />
      <main className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Book Verified Travel Guides Across India</h1>
        <p className="text-lg mb-6">Travhelp connects you with trusted local guides to explore India confidently. Pay securely and get instant booking confirmation.</p>
        <a href="/guides" className="bg-blue-600 text-white px-6 py-3 rounded inline-block">Find Your Guide</a>
      </main>
      <Footer />
    </>
  );
}
