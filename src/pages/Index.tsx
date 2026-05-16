
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import SelectedProjects from "@/components/SelectedProjects";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";

const Index = () => {
  const whatIDoRef = useRef<HTMLDivElement>(null);

  const scrollToWhatIDo = () => {
    whatIDoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero scrollToContent={scrollToWhatIDo} />

        {/* What I Do Section */}
        <div ref={whatIDoRef}>
          <WhatIDo />
        </div>

        {/* Selected Projects Section */}
        <SelectedProjects />

        {/* Why Me Section */}
        <WhyMe />

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
};

export default Index;
