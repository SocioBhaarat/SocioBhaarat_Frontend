import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 3000);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // On home page: sit above FAQ button. On other pages: sit just above WhatsApp widget.
  const bottomClass = pathname === "/" ? "bottom-[152px]" : "bottom-[88px]";

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className={`fixed ${bottomClass} right-6 z-50 h-12 w-12 rounded-full 
                     bg-secondary backdrop-blur-md border border-slate-200 
                     text-slate-900 shadow-xl hover:bg-white hover:text-blue-600 
                     transition-all duration-300 animate-in fade-in zoom-in slide-in-from-bottom-4`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 stroke-[2.5px]" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;