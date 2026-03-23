
// import { motion } from "framer-motion";

// type QuoteSectionProps = {
//   quote: string;
//   className?: string;
// };

// const QuoteSection = ({ quote, className }: QuoteSectionProps) => {
//   return (
//     <section className={`relative py-12 md:py-20 bg-white overflow-hidden ${className || ""}`}>

//       {/* 1. ARCHITECTURAL BACKGROUND ELEMENTS */}
//       {/* Subtle Grid Pattern */}
//       <div className="absolute inset-0 z-0 opacity-[0.09] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:64px_64px]" />

//       {/* Vertical 'Ruler' Line (Unique Design Element) */}
//       <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block">
//         <div className="sticky top-0 h-20 w-px bg-gradient-to-b from-primary to-transparent" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-4xl mx-auto relative shadow-lg hover:shadow-2xl transition-shadow duration-500">

//           {/* 2. FLOATING MINI-ELEMENTS */}
//           <motion.div 
//             animate={{ y: [0, -15, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute -top-10 -right-4 w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm"
//           >
//             <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
//           </motion.div>

//           {/* 3. THE QUOTE BOX (Soft Minimalist) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative bg-white border border-slate-100 p-10 md:p-24 rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]"
//           >
//             {/* Top Left Corner Bracket */}
//             <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />

//             {/* Quote Typography */}
//             <div className="relative">
//               <span className="absolute -top-6 -left-4 text-6xl font-serif text-slate-100 select-none">“</span>

//               <motion.h2 
//                 className="text-2xl md:text-4xl lg:text-5xl font-medium text-slate-900 leading-[1.2] md:leading-[1.15] tracking-tight"
//               >
//                 {quote}
//               </motion.h2>

//               <div className="mt-12 flex items-center gap-6">
//                 {/* Unique Brand Marker */}
//                 <div className="flex -space-x-2">
//                   <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-primary">SB</div>
//                   <img className="w-8 h-8 rounded-full border-2 border-white" src="/images/logo-icon.webp" alt="Brand Logo" />
//                 </div>

//                 <div>
//                   <p className="text-xs font-semibold text-slate-900">- By Socio Bhaarat</p>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Right Corner Bracket */}
//             <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />
//           </motion.div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default QuoteSection;

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Quote, TrendingUp, Star, Zap, Award } from "lucide-react";

type QuoteSectionProps = {
  quote: string;
  className?: string;
};

const microStats = [
  { icon: TrendingUp, value: "3.8×", label: "Avg. ROI" },
  { icon: Star, value: "4.9", label: "Rated" },
  { icon: Zap, value: "72hrs", label: "Onboard" },
  { icon: Award, value: "240+", label: "Brands" },
];

const floatingWords = ["Growth", "Trust", "Results", "Impact", "Vision"];

const QuoteSection = ({ quote, className }: QuoteSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={ref}
      className={`relative py-16 md:py-10 bg-[#fafafa] overflow-hidden ${className || ""}`}
    >
      {/* ── BG: Grid ── */}
      <div className="absolute inset-0 z-0 opacity-[0.07] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* ── BG: Parallax gradient blobs ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[90px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      </motion.div>

      {/* ── Floating word ribbons (left) ── */}
      <div className="absolute left-4 top-0 bottom-0 hidden xl:flex flex-col justify-around gap-3 z-10">
        {floatingWords.map((word, i) => (
          <motion.div
            key={word}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="writing-mode-vertical [writing-mode:vertical-lr] rotate-180 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-300 hover:text-primary transition-colors duration-300 cursor-default select-none"
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* ── Floating word ribbons (right) ── */}
      <div className="absolute right-4 top-0 bottom-0 hidden xl:flex flex-col justify-around gap-3 z-10">
        {[...floatingWords].reverse().map((word, i) => (
          <motion.div
            key={word + "-r"}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="[writing-mode:vertical-lr] text-[10px] font-bold tracking-[0.3em] uppercase text-slate-300 hover:text-primary transition-colors duration-300 cursor-default select-none"
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* ── Floating mini-elements (corners) ── */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 right-16 w-10 h-10 rounded-xl border border-primary/20 bg-white shadow-md flex items-center justify-center z-20"
      >
        <Sparkles className="w-4 h-4 text-primary" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-12 left-20 w-9 h-9 rounded-full border border-orange-200 bg-orange-50 shadow-md flex items-center justify-center z-20"
      >
        <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-8 w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent z-10"
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 left-10 w-px h-12 bg-gradient-to-b from-transparent via-orange-300/50 to-transparent z-10"
      />

      {/* ── Scatter dots ── */}
      {[
        "top-[15%] left-[20%]", "top-[25%] right-[22%]",
        "bottom-[20%] left-[30%]", "bottom-[30%] right-[18%]",
        "top-[50%] left-[8%]", "top-[60%] right-[10%]",
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? "bg-primary/20" : "bg-orange-300/30"}`}
          animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* ── Main content ── */}
      <div className="container mx-auto px-6 relative z-10">

        {/* Quote card */}
        <div className="max-w-4xl mx-auto relative">

          {/* Glowing border wrapper */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-200/60 via-primary/20 to-orange-200/60 blur-[2px] opacity-60" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ y: textY }}
            className="relative bg-white border border-slate-100/80 rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)]"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-primary to-orange-400" />

            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />

            {/* Inner grid texture */}
            <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative px-10 md:px-20 py-14 md:py-20">
              {/* Oversized quote mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-8 left-8 md:top-10 md:left-12"
              >
                <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary/10 fill-primary/10" strokeWidth={1} />
              </motion.div>

              {/* Quote text */}
              <motion.h2
                className="relative text-2xl md:text-3xl lg:text-[2.6rem] font-semibold text-slate-800 leading-[1.25] tracking-tight text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {quote}
              </motion.h2>

              {/* Divider */}
              <motion.div
                className="my-8 flex items-center gap-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ originX: 0.5 }}
              >
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${i === 1 ? "bg-primary scale-125" : "bg-slate-300"}`}
                    />
                  ))}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              </motion.div>

              {/* Attribution row */}
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    SB
                  </div>
                  <img
                    className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                    src="/images/logo-icon.webp"
                    alt="Brand Logo"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-800 leading-none">Socio Bhaarat</p>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-medium">Digital Growth Agency · Bhopal & Jabalpur</p>
                </div>

                {/* Verified badge */}
                <div className="ml-2 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">Verified</span>
                </div>
              </motion.div>
            </div>

            {/* Bottom shimmer bar */}
            <motion.div
              className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />
          </motion.div>
        </div>

        {/* Tag cloud — BELOW the card */}
        <motion.div
          className="max-w-4xl mx-auto mt-8 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["SEO", "Social Media", "Paid Ads", "ORM", "Content", "Email", "Branding", "Web Dev"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-500 shadow-sm hover:border-primary/30 hover:text-primary hover:shadow-md cursor-default transition-all duration-200"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default QuoteSection;