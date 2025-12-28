import AboutLab from "@/components/AboutLab";
import PageHeading from "@/components/PageHeading";
import Video from "@/components/Video";
import { ABOUT_US_TITLE, VIDEO_URL } from "@/content";

const AboutPage = () => {
  return (
    <div className="mb-16 mt-16">
      <PageHeading title={ABOUT_US_TITLE} />
      <Video videoUrl={VIDEO_URL} />
      <AboutLab />
    </div>
  );
};

export default AboutPage;
