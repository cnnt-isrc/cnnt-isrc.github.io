const TimelineDot = ({ year }: { year: string }) => (
  <div className="flex items-center mb-8">
    <div className="hidden md:flex items-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50 relative z-10">
        <span className="text-xl font-bold text-white">{year}</span>
      </div>
      <div className="h-0.5 w-8 bg-gradient-to-r from-purple-500 to-pink-500"></div>
    </div>
    <h2 className="text-3xl font-bold text-purple-400 md:hidden">{year}</h2>
  </div>
);

export default TimelineDot;
