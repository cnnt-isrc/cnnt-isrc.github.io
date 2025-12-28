"use client";
import { useRef, useState } from "react";
import TickerHeader from "./TickerHeader";
import TickerFooter from "./TickerFooter";
import TickerItem from "./TickerItem";
import useTicker from "@/hooks/useTicker";
import styles from "./styles.module.scss";
interface NewsTickerProps {
  items: {
    title: string;
    url: string;
  }[];
}
export default function NewsTicker({ items = [] }: NewsTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemHeight, setItemHeight] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items enough times for seamless scroll
  const duplicatedItems = [...items, ...items, ...items, ...items];

  // Hook encapsulates measurement and animation
  useTicker({ containerRef, items, isPaused, itemHeight, setItemHeight });

  return (
    <div className="relative w-full bg-slate-900/50 shadow-lg backdrop-blur-sm border border-slate-800/50 rounded-lg overflow-hidden container">
      <TickerHeader />

      <div
        className={`overflow-hidden relative ${styles.tickerContainer}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-slate-900/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900/50 to-transparent z-10 pointer-events-none"></div>

        <div
          ref={containerRef}
          className="flex flex-col py-4 px-4 sm:px-6 md:px-8 lg:px-20"
          style={{ willChange: "transform" }}
        >
          {duplicatedItems.map((item, i) => (
            <TickerItem key={`ticker-${i}`} item={item} />
          ))}
        </div>
      </div>

      <TickerFooter />
    </div>
  );
}
