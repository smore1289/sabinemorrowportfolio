import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Sabine Morrow</Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); document.querySelector('section:nth-of-type(2)')?.scrollIntoView({ behavior: 'smooth' }); }}>
            What I Do
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); document.querySelector('section:nth-of-type(3)')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Projects
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); document.querySelector('section:nth-of-type(4)')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Why Me
          </a>
          <Button onClick={() => document.querySelector('section:nth-of-type(5)')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </nav>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background pt-20 px-4 z-40 flex flex-col md:hidden">
          <nav className="flex flex-col space-y-6 text-center">
            <a 
              href="#" 
              className="text-xl py-2 border-b border-border"
              onClick={(e) => { 
                e.preventDefault(); 
                document.querySelector('section:nth-of-type(2)')?.scrollIntoView({ behavior: 'smooth' }); 
                setIsMobileMenuOpen(false);
              }}
            >
              What I Do
            </a>
            <a 
              href="#" 
              className="text-xl py-2 border-b border-border"
              onClick={(e) => { 
                e.preventDefault(); 
                document.querySelector('section:nth-of-type(3)')?.scrollIntoView({ behavior: 'smooth' }); 
                setIsMobileMenuOpen(false);
              }}
            >
              Projects
            </a>
            <a 
              href="#" 
              className="text-xl py-2 border-b border-border"
              onClick={(e) => { 
                e.preventDefault(); 
                document.querySelector('section:nth-of-type(4)')?.scrollIntoView({ behavior: 'smooth' }); 
                setIsMobileMenuOpen(false);
              }}
            >
              Why Me
            </a>
            <Button 
              className="mt-4 text-lg py-6" 
              onClick={() => {
                document.querySelector('section:nth-of-type(5)')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
