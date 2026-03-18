import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

interface Step {
  title: string;
  desc: string;
  color: string;
}

interface MatrixLayoutProps {
  process: Step[];
  activePhase: number;
  setActivePhase: (index: number) => void;
  scrollRef: React.RefObject<HTMLDivElement>;
}

function MatrixLayout({ process, activePhase, setActivePhase }: MatrixLayoutProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const strip = stripRef.current;
    const item = itemRefs.current[activePhase];
    if (!strip || !item) return;

    strip.scrollTo({
      left: item.offsetLeft - strip.offsetWidth / 2 + item.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [activePhase]);

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

      {/* LEFT PROCESS MATRIX */}
      <div className="w-full lg:w-[55%]">

        {/* ── MOBILE: horizontal scroll strip ── */}
        <div
          ref={stripRef}
          className="flex sm:hidden gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none -mx-4 px-4"
        >
          {process.map((step, index) => (
            <motion.div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePhase(index)}
              className={cn(
                "flex-shrink-0 w-[110px] rounded-2xl flex flex-col items-center justify-center text-center p-4 gap-2 cursor-pointer transition-all duration-300 border snap-center",
                activePhase === index
                  ? "bg-white shadow-lg border-transparent"
                  : "bg-white/60 border-slate-200"
              )}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shadow-sm transition-all duration-300"
                style={{
                  backgroundColor: activePhase === index ? step.color : `${step.color}18`,
                  color: activePhase === index ? "#fff" : step.color,
                  boxShadow: activePhase === index ? `0 4px 14px ${step.color}40` : undefined,
                }}
              >
                0{index + 1}
              </div>
              <h4
                className={cn(
                  "text-[11px] font-semibold leading-tight tracking-wide",
                  activePhase === index ? "text-slate-900" : "text-slate-500"
                )}
              >
                {step.title}
              </h4>
              {activePhase === index && (
                <motion.div
                  layoutId="activeDotMobile"
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: step.color }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* ── TABLET + DESKTOP: circle grid ── */}
        <div
          className={cn(
            "hidden sm:grid gap-4 md:gap-5",
            process.length === 6 ? "grid-cols-3 lg:grid-cols-3" : "grid-cols-3 lg:grid-cols-4"
          )}
        >
          {process.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePhase(index)}
              className={cn(
                "cursor-pointer aspect-square rounded-full flex flex-col items-center justify-center text-center relative backdrop-blur-md transition-all duration-500 mx-auto w-full",
                // Cap max size when 6 items — circles won't grow beyond this
                process.length === 6 ? "max-w-[140px]" : "max-w-[160px]",
                activePhase === index
                  ? "bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] border-transparent"
                  : "bg-white/55 border border-slate-200/80 hover:shadow-xl hover:bg-white/70"
              )}
            >
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-slate-200/40 pointer-events-none" />
              {activePhase === index && (
                <div
                  className="absolute inset-0 rounded-full opacity-[0.06] pointer-events-none"
                  style={{ background: `radial-gradient(circle at 60% 30%, ${step.color}, transparent 70%)` }}
                />
              )}
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-xs font-black mb-3 transition-all duration-500"
                style={{
                  backgroundColor: activePhase === index ? step.color : `${step.color}18`,
                  color: activePhase === index ? "#fff" : step.color,
                  boxShadow: activePhase === index ? `0 6px 20px ${step.color}40` : "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                0{index + 1}
              </div>
              <h4
                className={cn(
                  "text-[10px] md:text-[13px] font-semibold max-w-[100px] tracking-wide px-2 leading-snug transition-colors duration-300",
                  activePhase === index ? "text-slate-900" : "text-slate-500"
                )}
              >
                {step.title}
              </h4>
              {activePhase === index && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute bottom-3 w-2 h-2 rounded-full"
                  style={{ backgroundColor: step.color, boxShadow: `0 0 8px ${step.color}` }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT PANEL */}
      <div className="w-full lg:w-[45%] lg:sticky lg:top-24">

        {/* ── MOBILE panel: natural height, no absolute positioning ── */}
        <div className="block sm:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-[28px] p-8 flex flex-col gap-6 overflow-hidden text-white shadow-[0_24px_60px_-10px_rgba(0,0,0,0.2)] relative"
              style={{ backgroundColor: process[activePhase].color }}
            >
              {/* Texture */}
              <div className="absolute inset-0 opacity-[0.07] pointer-events-none [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:20px_20px]" />
              {/* Decorative rings */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-white/10 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border border-white/10 pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Label */}
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] border border-white/30 bg-white/10 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                  Unit Matrix // 0{activePhase + 1}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {process[activePhase].title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed font-medium pl-5 relative">
                  <span className="absolute left-0 top-1 w-[3px] h-10 rounded-full bg-white/70" />
                  {process[activePhase].desc}
                </p>
              </div>

              {/* Footer */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] opacity-70">
                  0{activePhase + 1} / 0{process.length}
                </span>
                <div className="flex items-center gap-1.5">
                  {process.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhase(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300 bg-white",
                        i === activePhase ? "w-5 opacity-100" : "w-1.5 opacity-35"
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/15 rounded-b-[28px] overflow-hidden">
                <motion.div
                  key={`bar-mobile-${activePhase}`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-full bg-white"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── DESKTOP panel: absolute positioned for fixed height box ── */}
        <div className="hidden sm:block relative min-h-[420px] md:min-h-[500px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 rounded-[32px] p-10 md:p-14 flex flex-col justify-between overflow-hidden text-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.18)]"
              style={{ backgroundColor: process[activePhase].color }}
            >
              <div
                className="absolute -top-12 -right-12 w-56 h-56 rounded-full blur-[100px] opacity-25 pointer-events-none"
                style={{ backgroundColor: process[activePhase].color }}
              />
              <div className="absolute inset-0 opacity-[0.07] pointer-events-none [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-white/10 pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] border border-white/30 bg-white/10 backdrop-blur-sm w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                  Unit Matrix // 0{activePhase + 1}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {process[activePhase].title}
                </h3>
                <p className="text-lg md:text-xl leading-relaxed font-medium pl-5 relative">
                  <span className="absolute left-0 top-1 w-[3px] h-10 rounded-full bg-white/70" />
                  {process[activePhase].desc}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-6 pt-5 border-t border-white/20">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] opacity-70">
                  0{activePhase + 1} / 0{process.length}
                </span>
                <div className="flex items-center gap-1.5">
                  {process.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhase(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300 bg-white",
                        i === activePhase ? "w-5 opacity-100" : "w-1.5 opacity-35"
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/15 rounded-b-[32px] overflow-hidden">
                <motion.div
                  key={`bar-${activePhase}`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

export default MatrixLayout