import PageHeading from "@/components/PageHeading";
import {
  CAREERS_DATA,
  CAREERS_PAGE_TITLE,
  CAREERS_PAGE_DESCRIPTION,
  CAREERS_EMPTY_MESSAGE,
} from "@/content/careers";
import { Briefcase, MapPin, Calendar, Clock } from "lucide-react";

export default function CareersPage() {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-8 mb-8 mt-8 md:mb-12 md:mt-14">
      <PageHeading title={CAREERS_PAGE_TITLE} />

      <div className="mb-6">
        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          {CAREERS_PAGE_DESCRIPTION}
        </p>
      </div>

      <div>
        <div className="space-y-4 sm:space-y-6">
          {CAREERS_DATA.map((career, index) => {
            const postedDate = new Date(career.posted).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            );
            const deadlineDate = new Date(career.deadline).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            );
            const isExpired = new Date(career.deadline) < new Date();

            return (
              <div
                key={index}
                className={`bg-gray-800/30 border rounded-lg p-4 sm:p-6 transition-all hover:shadow-lg ${
                  isExpired
                    ? "border-gray-700/30 opacity-60"
                    : "border-gray-700/50 hover:border-purple-500/50 hover:shadow-purple-500/10"
                }`}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                      {career.position}
                    </h2>
                    {isExpired && (
                      <span className="px-2 py-1 text-xs font-semibold text-gray-400 bg-gray-700/50 rounded-full">
                        Expired
                      </span>
                    )}
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{career.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{career.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Posted: {postedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span
                        className={
                          isExpired ? "text-red-400" : "text-green-400"
                        }
                      >
                        Deadline: {deadlineDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {career.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Responsibilities
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {career.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                {/* Qualifications */}
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Qualifications
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {career.qualifications.map((qualification, idx) => (
                      <li key={idx}>{qualification}</li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                {!isExpired && (
                  <div className="mt-6">
                    <a
                      href={career.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 sm:px-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all text-sm sm:text-base"
                    >
                      Apply Now
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {CAREERS_DATA.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">{CAREERS_EMPTY_MESSAGE}</p>
          </div>
        )}
      </div>
    </section>
  );
}
