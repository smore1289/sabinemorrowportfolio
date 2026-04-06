
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

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

  const handleNavClick = (sectionId: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    if (isHomePage) {
      // If on home page, scroll to the section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on another page, navigate to home and then scroll to section
      navigate('/', { state: { scrollTo: sectionId } });
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Effect to handle scrolling after navigation
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Small delay to ensure the page has loaded
      
      // Clear the state so we don't scroll on subsequent renders
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
          Sabine Morrow
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            className="text-sm font-medium hover:text-primary transition-colors" 
            onClick={(e) => handleNavClick('what-i-do', e)} 
          >
            What I Do
          </a>
          <a 
            href="#" 
            className="text-sm font-medium hover:text-primary transition-colors" 
            onClick={(e) => handleNavClick('selected-projects', e)}
          >
            Projects
          </a>
          <a 
            href="#" 
            className="text-sm font-medium hover:text-primary transition-colors" 
            onClick={(e) => handleNavClick('why-me', e)}
          >
            Why Me
          </a>
          <Button 
            onClick={() => handleNavClick('contact')}
          >
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
              onClick={(e) => handleNavClick('what-i-do', e)}
            >
              What I Do
            </a>
            <a 
              href="#" 
              className="text-xl py-2 border-b border-border"
              onClick={(e) => handleNavClick('selected-projects', e)}
            >
              Projects
            </a>
            <a 
              href="#" 
              className="text-xl py-2 border-b border-border"
              onClick={(e) => handleNavClick('why-me', e)}
            >
              Why Me
            </a>
            <Button 
              className="mt-4 text-lg py-6" 
              onClick={() => handleNavClick('contact')}
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
