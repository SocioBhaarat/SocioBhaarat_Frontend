import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "We exclusively work for only 10 clients annually.",
  "Empower Your Business with Our Digital Solutions.",
  "Creativity has no price tag.",
  "Your Journey to Digital Success Starts Here.",
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-secondary text-secondary-foreground py-4 md:py-2.5 sm:px-6 md:px-8 overflow-hidden">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium relative">
        <div className="relative flex-1 py-1 md:py-2 lg:py-3 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={messages[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center text-center text-sm lg:text-xl font-semibold"
            >
              <Sparkles className="hidden md:flex h-4 w-4 animate-pulse shrink-0" />&nbsp;
              {messages[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
