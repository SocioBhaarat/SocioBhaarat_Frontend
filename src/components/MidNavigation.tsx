import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const MidNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="hidden md:block bg-white">
      <nav className="backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo-full.webp"
                alt="Socio Bhaarat" 
                className="h-12 sm:h-24 w-auto"
              />
            </Link>


            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-foreground hover:text-accent transition-colors font-medium text-lg"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-6"
              >
                BOOK A CALL
              </Button>
              <Link to="/hiring">
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-md px-6"
                >
                  WORK WITH US
                </Button>
              </Link>
            </div>


            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-accent transition-colors font-medium py-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full"
                >
                  BOOK A CALL
                </Button>
                <Link to="/hiring" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
                    WORK WITH US
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MidNavigation;
