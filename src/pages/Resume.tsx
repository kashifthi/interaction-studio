import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ResumeContent, resumeTextContent } from "@/components/ResumeContent";
import { ResumeVisual } from "@/components/ResumeVisual";
import { Helmet } from "react-helmet-async";

const Resume = () => {
  const [visualMode, setVisualMode] = useState(false);

  return (
    <>
      <Helmet>
        <title>Resume | Kashif Iqbal - UX Designer</title>
        <meta 
          name="description" 
          content="View the professional resume of Kashif Iqbal, UX Designer with expertise in mobile apps, SaaS platforms, and web applications." 
        />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <AudioPlayer 
          text={resumeTextContent} 
          visualMode={visualMode}
          onVisualModeChange={setVisualMode}
        />
        {visualMode ? <ResumeVisual /> : <ResumeContent />}
      </main>
    </>
  );
};

export default Resume;
