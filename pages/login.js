import { signIn } from "next-auth/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn("credentials", { email, password, callbackUrl: "/" });
  };

  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" name="email" placeholder="Email" required className="w-full border px-3 py-2 rounded" />
          <input type="password" name="password" placeholder="Password" required className="w-full border px-3 py-2 rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
