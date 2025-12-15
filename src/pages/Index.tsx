import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kashif Iqbal | UX Researcher & PhD Candidate in HCI</title>
        <meta 
          name="description" 
          content="UX Researcher and PhD Candidate specializing in Human-Computer Interaction. Designing the future of inclusive digital experiences." 
        />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </>
  );
};

export default Index;
