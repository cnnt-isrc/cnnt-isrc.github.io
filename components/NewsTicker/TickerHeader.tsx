"use client";

export default function TickerHeader() {
  return (
    <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-b border-purple-500/20 px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
        <span className="text-xs sm:text-sm font-semibold text-purple-300 uppercase tracking-wider">
          Live Updates
        </span>
      </div>
      <div className="flex-1"></div>
      <div className="text-xs text-gray-400 hidden sm:block">Latest News</div>
    </div>
  );
}
