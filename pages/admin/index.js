import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Admin() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session || session.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    router.push("/login");
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
        <div className="space-y-4">
          <button onClick={() => router.push("/admin/guides")} className="block w-full bg-blue-600 text-white px-4 py-3 rounded">Manage Guides</button>
          <button onClick={signOut} className="block w-full bg-red-600 text-white px-4 py-3 rounded">Logout</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
