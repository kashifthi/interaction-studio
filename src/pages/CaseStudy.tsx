import { Navbar } from "@/components/Navbar";
import { CaseStudyStorybook } from "@/components/CaseStudyStorybook";
import { Helmet } from "react-helmet-async";

const CaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>Case Study: Fintech for Seniors | Kashif Iqbal</title>
        <meta 
          name="description" 
          content="UX case study on redesigning fintech applications for senior users. Learn about accessible design patterns and inclusive banking experiences." 
        />
      </Helmet>
      <Navbar />
      <main>
        <CaseStudyStorybook />
      </main>
    </>
  );
};

export default CaseStudy;
