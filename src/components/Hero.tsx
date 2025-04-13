
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollToContent: () => void;
}

const Hero = ({ scrollToContent }: HeroProps) => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8">
          I build beautiful brands and back them with operational strength.
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl leading-relaxed mb-12">
          I'm a designer, strategist, and fractional leader who helps mission-driven businesses elevate their presence and streamline their process. From visual storytelling to backend systems, I do more than make things look good — I help you move smarter.
        </p>
        <Button 
          onClick={scrollToContent} 
          size="lg" 
          className="group text-lg"
        >
          See what I do
          <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="h-8 w-8 opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
