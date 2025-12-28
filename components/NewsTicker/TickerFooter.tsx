"use client";

export default function TickerFooter() {
  return (
    <div className="bg-slate-900/80 border-t border-slate-800/50 px-4 sm:px-6 py-2 flex items-center justify-between">
      <div className="text-xs text-gray-500 hidden sm:block">Hover to pause</div>
      <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-purple-500/50"
            style={{
              animation: `pulse 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
