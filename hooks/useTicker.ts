"use client";
import { useEffect } from "react";
import type { RefObject } from "react";

type Params = {
  containerRef: RefObject<HTMLDivElement | null>;
  items: {
    title: string;
    url: string;
  }[];
  isPaused: boolean;
  itemHeight: number;
  setItemHeight: (n: number) => void;
};

export default function useTicker({
  containerRef,
  items,
  isPaused,
  itemHeight,
  setItemHeight,
}: Params) {
  useEffect(() => {
    if (containerRef.current && containerRef.current.children[0]) {
      const height = (containerRef.current.children[0] as HTMLElement)
        .clientHeight;
      setItemHeight(height);
    }
  }, [items, containerRef, setItemHeight]);

  useEffect(() => {
    if (!containerRef.current || itemHeight === 0) return;

    const container = containerRef.current;
    const totalItems = items.length;
    const scrollHeight = itemHeight * totalItems;
    let scrollPosition = 0;
    let animationId = 0;
    const scrollSpeed = 0.3;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;

        if (scrollPosition >= scrollHeight) {
          scrollPosition = 0;
        }

        container.style.transform = `translateY(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [items, itemHeight, isPaused, containerRef]);
}
