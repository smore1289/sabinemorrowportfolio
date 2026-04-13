
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollToContent: () => void;
}

const Hero = ({ scrollToContent }: HeroProps) => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8">
          I help teams go from idea to launched product — fast.
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl leading-relaxed mb-12">
          Digital Product Strategist with 20+ years across enterprise and startup environments. I lead product strategy, UX, workflows, copy, and launch execution for remote teams.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button 
            onClick={scrollToContent} 
            size="lg" 
            className="group text-lg"
          >
            View Product Case Studies
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
          <Button 
            asChild
            size="lg" 
            className="group text-lg"
          >
            <a href="/Sabine_Morrow_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="h-8 w-8 opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
