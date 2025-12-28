import { FOOTER_CONTENT, FOOTER_LINK_CONTENT, LAB_NAME } from "@/content";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-900 py-12 px-6 border-t border-purple-900/30"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          {LAB_NAME}
        </div>
        <p className="text-gray-400 mb-8 text-sm md:text-base px-4">
          {FOOTER_CONTENT.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-400">
          {FOOTER_LINK_CONTENT.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className="hover:text-purple-400 transition text-sm md:text-base"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <p className="text-gray-500 mt-8 text-xs md:text-sm">
          {FOOTER_CONTENT.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
