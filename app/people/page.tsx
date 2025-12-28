"use client";
import { useState } from "react";
import {
  ACADEMICS_DATA,
  PEOPLE_ACCORDION,
  PEOPLE_PAGE_TITLE,
  RESEARCHERS_DATA,
  STUDENTS_DATA,
} from "@/content/people";
import AccordionSection from "@/components/AccordionSection";
import PeopleCard from "@/components/PeopleCard";
import PageHeading from "@/components/PageHeading";

const PeoplePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getPeopleData = (category: string) => {
    switch (category) {
      case "Academics":
        return ACADEMICS_DATA;
      case "Researchers":
        return RESEARCHERS_DATA;
      case "Students":
        return STUDENTS_DATA;
      default:
        return [];
    }
  };

  return (
    <>
      <section className="mb-12 mt-14">
        <PageHeading title={PEOPLE_PAGE_TITLE} />
        <div className="max-w-7xl mx-auto bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-20 px-6 md:px-12 lg:px-24">
          <div className="space-y-4">
            {PEOPLE_ACCORDION.map((category, index) => (
              <AccordionSection
                key={category}
                title={category}
                isOpen={openIndex === index}
                onToggle={() => toggleAccordion(index)}
              >
                <div className="space-y-6">
                  {getPeopleData(category).map((person, personIndex) => (
                    <PeopleCard
                      key={`${category}-${personIndex}`}
                      imageUrl={person.imageUrl}
                      name={person.name}
                      designation={person.designation}
                      researchInterest={person.researchInterest}
                      email={person.email}
                      biography={person.biography}
                      contactDetails={person.contactDetails}
                      publicationLink={person.publicationLink}
                      projectSoftwareLink={person.projectSoftwareLink}
                    />
                  ))}
                </div>
              </AccordionSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PeoplePage;
