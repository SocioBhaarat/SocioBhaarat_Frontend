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

function MatrixLayout({ process, activePhase, setActivePhase, scrollRef }: MatrixLayoutProps) {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* LEFT PROCESS MATRIX */}
            <div className="w-full lg:w-[55%]">
                <div className="grid grid-cols-4 gap-5">

                    {process.map((step, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.08, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActivePhase(index)}
                            className={`cursor-pointer aspect-square rounded-full flex flex-col items-center justify-center text-center relative backdrop-blur-md transition-all duration-500

                  ${activePhase === index
                                    ? "bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
                                    : "bg-white/50 border border-slate-200 hover:shadow-xl"
                                }
                  
                  `}
                        >
                            {/* Inner Ring */}
                            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-slate-200/40"></div>

                            {/* Icon */}
                            <div
                                className="w-8 h-8 md:w-10 md:h-9 rounded-xl flex items-center justify-center text-xs font-black mb-3 shadow-md"
                                style={{
                                    backgroundColor:
                                        activePhase === index
                                            ? step.color
                                            : `${step.color}15`,
                                    color:
                                        activePhase === index ? "#fff" : step.color,
                                }}
                            >
                                0{index + 1}
                            </div>

                            {/* Title */}
                            <h4
                                className={`text-[10px] md:text-[16px] font-semibold max-w-[120px] tracking-wide px-2
                    ${activePhase === index
                                        ? "text-slate-900"
                                        : "text-slate-600"
                                    }`}
                            >
                                {step.title}
                            </h4>

                            {/* Active Dot */}
                            {activePhase === index && (
                                <motion.div
                                    layoutId="activeDot"
                                    className="absolute bottom-3 w-2 h-2 rounded-full"
                                    style={{ backgroundColor: step.color }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* RIGHT CONTENT PANEL */}
            <div className="w-full lg:w-[35%] lg:sticky lg:top-24">
                <div className="relative min-h-[450px] md:min-h-[550px] w-full">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePhase}
                            initial={{ opacity: 0, x: 40, scale: 0.98 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -40, scale: 0.98 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white/90 backdrop-blur-xl
                  p-12 md:p-16
                  rounded-[40px]
                  shadow-[0_40px_120px_-20px_rgba(0,0,0,0.15)]
                  border border-white/40
                  absolute inset-0
                  flex flex-col justify-center overflow-hidden text-white"
                            style={{ backgroundColor: process[activePhase].color }}
                        >

                            {/* Glow Effect */}
                            <div
                                className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-[120px] opacity-20"
                                style={{ backgroundColor: process[activePhase].color }}
                            />

                            <div className="relative z-10">

                                {/* Label */}
                                <span
                                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] border mb-8 inline-block"
                                >
                                    Unit Matrix // 0{activePhase + 1}
                                </span>

                                {/* Title */}
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                                    {process[activePhase].title}
                                </h3>

                                {/* Description */}
                                <p className=" text-lg md:text-xl leading-relaxed font-medium pl-6 relative">
                                    <span
                                        className="absolute left-0 top-1 w-1 h-10 rounded-full bg-white"
                                    ></span>

                                    {process[activePhase].desc}
                                </p>
                            </div>

                            {/* Progress Bar */}
                            <div className="absolute bottom-0 left-0 w-full h-[3px]">
                                <motion.div
                                    key={`bar-${activePhase}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 4, ease: "linear" }}
                                    className="h-full shadow-[0_0_20px_rgba(59,130,246,0.5)] bg-white"
                                />
                            </div>

                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>

        </div>
    )
}

export default MatrixLayout