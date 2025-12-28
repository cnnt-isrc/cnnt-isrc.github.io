type ResultCountProps = {
  searchQuery: string;
  selectedYear: string;
  length: number;
};

const ResultCount = ({
  searchQuery,
  selectedYear,
  length,
}: ResultCountProps) => {
  return (
    <div className="mb-6 text-center text-gray-400 min-h-6">
      {(searchQuery || selectedYear !== "all") && (
        <>
          Found {length} project
          {length !== 1 ? "s" : ""}
        </>
      )}
    </div>
  );
};

export default ResultCount;
