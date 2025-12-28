import { ABOUT_US_CONTENT } from "@/content";

const AboutLab = () => {
  return (
    <section className="mb-12 rounded-lg bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
         {ABOUT_US_CONTENT}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutLab;
