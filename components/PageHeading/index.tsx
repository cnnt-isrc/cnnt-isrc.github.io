const PageHeading = ({ title }: { title: string }) => {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 pb-4 leading-tight">
        {title}
      </h1>
    </div>
  );
};

export default PageHeading;
