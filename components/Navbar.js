import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-blue-600 cursor-pointer">Travhelp</span>
        </Link>
        <div className="space-x-4">
          <Link href="/guides" className="text-gray-700">Guides</Link>
          <Link href="/shop" className="text-gray-700">Shop</Link>
          <Link href="/about" className="text-gray-700">About</Link>
          <Link href="/contact" className="text-gray-700">Contact</Link>
          <Link href="/login" className="text-gray-700">Login</Link>
        </div>
      </div>
    </nav>
  );
}
