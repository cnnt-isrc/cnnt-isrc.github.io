import { ExternalLink } from "lucide-react";

type DetailCardProps = {
  eventName?: string;
  name?: string;
  description: string;
  link: string;
  date?: string;
  year?: string;
};

const DetailCard = ({
  eventName,
  name,
  description,
  link,
  date,
  year,
}: DetailCardProps) => {
  const title = eventName || name || "Untitled";

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : year || "";

  return (
    <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex justify-between items-start gap-4 mb-3">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-purple-400 hover:text-purple-300 transition-colors"
          aria-label="Link"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      {formattedDate && (
        <p className="text-sm text-gray-400 mb-3">{formattedDate}</p>
      )}
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default DetailCard;
