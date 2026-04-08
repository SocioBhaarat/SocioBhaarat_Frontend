import { HelpCircle } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const FAQWidget = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { pathname } = useLocation();

  // Only show on the home page
  if (pathname !== "/") return null;

  const handleClick = () => {
    const element = document.getElementById("faq");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-[88px] right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-white hover:bg-slate-50 text-blue-600 rounded-full p-4 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-slate-100 transition-all duration-300 flex items-center gap-2 group"
        aria-label="Frequently Asked Questions"
      >
        <HelpCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="font-bold text-sm overflow-hidden whitespace-nowrap text-slate-800"
            >
              FAQ
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FAQWidget;
