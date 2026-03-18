import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MatrixLayout from "./ui/MatrixLayout"; 
interface Step {
  title: string;
  desc: string;
  color: string;
}

interface ProcessSectionProps {
  titlePrefix: string;
  highlightedWord: string;
  titleSuffix?: string;
  description: string;
  process: Step[];
}

const ProcessSection = ({
  titlePrefix,
  highlightedWord,
  titleSuffix = "Process",
  description,
  process
}: ProcessSectionProps) => {
  const [activePhase, setActivePhase] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // 1. Observer: Check visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Auto-play Logic
  useEffect(() => {
    if (!isIntersecting) return;

    const timer = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % process.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isIntersecting, process.length]);

  // 3. Scroll Sync Logic
  useEffect(() => {
    if (scrollRef.current && isIntersecting) {
      const activeItem = scrollRef.current.children[activePhase] as HTMLElement;
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [activePhase, isIntersecting]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
    >
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-200/30 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto max-w-[1500px] px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-7xl mb-5">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {titlePrefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible">
              {highlightedWord}
            </span>
            <br />
            {titleSuffix}
          </h2>

          <p className="text-slate-500 text-lg md:text-xl max-w-2xl">
            {description}
          </p>
        </div>

        {/* Matrix Component Call */}
        <MatrixLayout
          process={process}
          activePhase={activePhase}
          setActivePhase={setActivePhase}
          scrollRef={scrollRef}
        />
      </div>
    </section>
  );
};

export default ProcessSection;