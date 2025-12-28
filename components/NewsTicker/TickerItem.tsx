import Link from "next/link";

type Props = {
  item: {
    title: string;
    url: string;
  };
};

export default function TickerItem({ item }: Props) {
  return (
    <div className="flex-none min-h-[4rem] sm:min-h-[5rem] flex items-center gap-3 sm:gap-4 px-3 sm:px-6 py-2 sm:py-3 group hover:bg-slate-800/30 transition-all duration-300 cursor-pointer border-l-2 border-transparent hover:border-pink-500">
      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-pink-400 group-hover:scale-150 transition-all duration-300"></div>
      <div className="flex-1">
        <Link
          href={item.url}
          className="text-sm sm:text-base text-gray-100 leading-relaxed group-hover:text-white transition-colors line-clamp-2"
        >
          {item.title}
        </Link>
      </div>
      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
        <span className="text-xs text-pink-400">Read more →</span>
      </div>
    </div>
  );
}
