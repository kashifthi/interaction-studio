import { Navbar } from "@/components/Navbar";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ResumeContent, resumeTextContent } from "@/components/ResumeContent";
import { Helmet } from "react-helmet-async";

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Resume | Kashif Iqbal - UX Researcher</title>
        <meta 
          name="description" 
          content="View the professional resume of Kashif Iqbal, UX Researcher and PhD Candidate with expertise in accessibility and human-computer interaction." 
        />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <AudioPlayer text={resumeTextContent} />
        <ResumeContent />
      </main>
    </>
  );
};

export default Resume;
