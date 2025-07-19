import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p>
          Travhelp is built to empower travellers with authentic local experiences by connecting them with verified travel guides across India. We ensure every guide on our platform is checked, reviewed, and trained to make your journey safe, informative, and memorable.
        </p>
      </main>
      <Footer />
    </>
  );
}
