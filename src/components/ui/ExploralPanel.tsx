import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

function ExploralPanel({ content }) {
    const [active, setActive] = useState(0);


    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white flex flex-col md:flex-row">
            {/* Navigation: Horizontal on Mobile, Vertical on Desktop */}
            <div className="md:w-[35%] flex-shrink-0 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-2 flex flex-row md:flex-col overflow-x-auto no-scrollbar gap-1 md:gap-0.5">
                {content.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 md:w-full rounded-xl border text-left transition-all duration-200 ${active === i
                            ? "bg-white border-blue-100 shadow-sm ring-1 ring-blue-50"
                            : "border-transparent hover:bg-white/50"
                            }`}
                    >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${active === i ? "scale-105" : ""} ${item.iconBg} ${item.iconColor}`}>
                            <item.icon size={14} />
                        </div>

                        {/* Title: Hidden on very small screens if you want icon-only, or keep for context */}
                        <span className={`text-sm md:text-base font-semibold whitespace-nowrap ${active === i ? "text-blue-700" : "text-slate-600"}`}>
                            {item.title}
                        </span>

                        {/* Number: Hidden on mobile to save space */}
                        <span className={`hidden md:block ml-auto text-[9px] font-bold tracking-[.15em] flex-shrink-0 ${active === i ? "text-blue-300" : "text-slate-600"}`}>
                            {item.num}
                        </span>
                    </button>
                ))}
            </div>

            {/* Right panel */}
            <div className="flex-1 p-6 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[320px] md:min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Num Tag */}
                        <span className={`text-[10px] font-bold tracking-[.2em] uppercase mb-2 block ${content[active].numColor}`}>
                            {content[active].num}
                        </span>

                        {/* Title */}
                        <h3 className={`font-display text-2xl md:text-4xl font-extrabold mb-3 md:mb-4 ${content[active].iconColor}`}>
                            {content[active].title}
                        </h3>

                        {/* Description */}
                        <p className={`text-sm md:text-lg text-slate-700 max-w-lg mb-6 font-medium border-l-[3px] pl-4 leading-relaxed ${content[active].iconBg.replace("bg-", "border-")}`}>
                            {content[active].desc}
                        </p>

                        {/* Tag */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[.15em] ${content[active].tagBg} ${content[active].tagColor}`}>
                            <Check size={10} strokeWidth={2.5} />
                            {content[active].tag}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Ghost icon: Hidden on small mobile screens to prevent overlap */}
                <div className="hidden sm:block absolute top-8 right-10 opacity-[0.05]">
                    {React.createElement(content[active].icon, { size: 80, className: content[active].iconColor })}
                </div>
            </div>
        </div>
    );
}

export default ExploralPanel