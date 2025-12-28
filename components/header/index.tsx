import { IMAGES, LAB_NAME, NAVBAR_CONTENT } from "@/content";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            className="rounded"
            src={IMAGES.logo}
            alt={LAB_NAME}
            width={50}
            height={50}
            aria-label="Go to home page"
          />
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {LAB_NAME}
          </div>
        </Link>

        {/* Navigation - Client Component */}
        <NavBar content={NAVBAR_CONTENT} />
      </nav>
    </header>
  );
}
