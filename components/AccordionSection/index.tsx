import { ReactNode } from "react";

interface AccordionSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

const AccordionSection = ({
  title,
  isOpen,
  onToggle,
  children,
}: AccordionSectionProps) => {
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/50 transition-colors duration-200"
      >
        <span className="text-lg md:text-xl font-semibold text-white">
          {title}
        </span>
        <svg
          className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 border-t border-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default AccordionSection;
