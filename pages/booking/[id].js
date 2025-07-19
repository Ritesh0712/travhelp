import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BookingConfirmation() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Booking Confirmed</h2>
        <p>Your booking ID is <strong>{id}</strong>.</p>
        <p>We have sent you a confirmation email.</p>
        <button onClick={() => router.push("/guides")} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">Book Another Guide</button>
      </main>
      <Footer />
    </>
  );
}
