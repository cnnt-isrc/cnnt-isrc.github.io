import { LANDING_PAGE_CONTENT } from "@/content";
import { Brain, ChevronDown } from "lucide-react";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section
      className={`${styles.heroContainer} container flex items-center justify-center relative overflow-hidden pt-20 min-h-[80vh] md:min-h-[90vh]`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center z-10">
        <div className="mb-6 md:mb-8 inline-block">
          <Brain className="w-16 h-16 sm:w-20 sm:h-20 text-purple-400 animate-pulse" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
          {LANDING_PAGE_CONTENT.title}
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {LANDING_PAGE_CONTENT.titleHighlight}
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl md:max-w-3xl mx-auto italic px-2">
          {LANDING_PAGE_CONTENT.description}
        </p>
      </div>
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;
