import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a small delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Auto-remove after 5 seconds of being shown
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 11500); // 1.5s delay + 5s display

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.8, x: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }}
          className="fixed bottom-5 right-[90px] z-[100] flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 w-[220px] sm:w-[260px] pointer-events-auto"
        >
          {/* Close Button */}
          <button 
            aria-label="Close chat"
            onClick={() => setIsVisible(false)}
            className="absolute -top-1.5 md:-top-4 -right-1.5 md:w-10 md:h-10 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 shadow-sm transition-colors"
          >
            <X size={20} />
          </button>

          {/* Icon — hidden on very small screens to save space */}
          <div className="hidden xs:flex sm:flex w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 bg-blue-50 rounded-lg p-1.5 items-center justify-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3734/3734849.png" 
              alt="Welcome Icon" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text Content — no truncation, full name shown */}
          <div className="flex flex-col">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
              Welcome to Socio Bhaarat!
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 font-medium">
              How can I help you?
            </p>
          </div>

          {/* Tail pointing RIGHT toward the WhatsApp button */}
          <div className="absolute right-[-6px] bottom-4 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-[-45deg]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
