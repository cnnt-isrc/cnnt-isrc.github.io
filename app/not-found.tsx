import Link from "next/link";
import { LAB_NAME } from "@/content";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition"
        >
          Return to {LAB_NAME}
        </Link>
      </div>
    </div>
  );
}
