"use client";
import Image from "next/image";
import { User } from "lucide-react";
import { useState } from "react";

interface PeopleCardProps {
  imageUrl: string;
  name: string;
  designation: string;
  researchInterest: string;
  email: string;
  biography: string;
  contactDetails: string;
  publicationLink?: string;
  projectSoftwareLink?: string;
}

const PeopleCard = ({
  imageUrl,
  name,
  designation,
  researchInterest,
  email,
  biography,
  contactDetails,
  publicationLink,
  projectSoftwareLink,
}: PeopleCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 relative">
            {imageUrl && !imageError ? (
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <User className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} />
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">
            {name}
          </h3>
          <p className="text-cyan-400 text-sm font-medium mb-2">
            {designation}
          </p>
          <p className="text-gray-300 text-sm mb-3">
            <span className="font-semibold text-gray-200">
              Research Interest:
            </span>{" "}
            {researchInterest}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {biography}
          </p>

          {/* Contact Info */}
          <div className="space-y-2 mb-4">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-gray-200">Email:</span>{" "}
              <a
                href={`mailto:${email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {email}
              </a>
            </p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-gray-200">Contact:</span>{" "}
              {contactDetails}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {publicationLink && (
              <a
                href={publicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-md text-sm hover:bg-cyan-500/20 transition-all duration-200"
              >
                Publications
              </a>
            )}
            {projectSoftwareLink && (
              <a
                href={projectSoftwareLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-md text-sm hover:bg-purple-500/20 transition-all duration-200"
              >
                Projects & Software
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
