import { LAB_NAME } from "@/content";

const UnderConstruction = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Under Construction
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          This page is currently being built. Check back soon for updates from{" "}
          {LAB_NAME}.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
