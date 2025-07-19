import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p>Email: support@travhelp.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>
        <p>Address: Your office address</p>
      </main>
      <Footer />
    </>
  );
}
