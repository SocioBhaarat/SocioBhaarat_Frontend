// import { motion } from "framer-motion";

// type QuoteSectionProps = {
//   quote: string;
//   className?: string;
// };

// const QuoteSection = ({ quote, className }: QuoteSectionProps) => {
//   return (
//     <section className={`relative py-16 md:py-32 overflow-hidden ${className ? className : "bg-white"
//       }`}>

//       {/* 1. DYNAMIC GRADIENT BACKGROUND (Mesh Look) */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//         {/* Top Glow - Blue */}
//         <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />

//         {/* Bottom Glow - Orange */}
//         <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[50%] rounded-full bg-orange-500/10 blur-[120px] animate-bounce" style={{ animationDuration: '10s' }} />

//         {/* Center Deep Glow - Using your Primary */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-primary/5 blur-[140px]" />
//       </div>

//       <div className="container mx-auto px-4 max-w-5xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] md:rounded-[4.5rem] p-10 sm:p-16 md:p-24 shadow-2xl text-center overflow-hidden group"
//         >
//           {/* Subtle Inner Glow Border */}
//           <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[4.5rem] border border-white pointer-events-none z-20" />

//           {/* 2. DECORATIVE QUOTE MARKS (Color Gradients) */}
//           <div className="absolute top-6 left-8 md:top-12 md:left-16 text-7xl md:text-[10rem] bg-clip-text text-transparent bg-gradient-to-br from-slate-200 to-slate-100 font-serif select-none italic transition-all duration-700 group-hover:from-blue-100 group-hover:to-blue-50 opacity-80">
//             “
//           </div>

//           <div className="absolute bottom-6 right-8 md:bottom-12 md:right-16 text-7xl md:text-[10rem] bg-clip-text text-transparent bg-gradient-to-br from-slate-200 to-slate-100 font-serif select-none italic transition-all duration-700 group-hover:from-orange-100 group-hover:to-orange-50 rotate-180 opacity-80">
//             “
//           </div>

//           {/* 3. QUOTE TEXT */}
//           <div className="relative z-10 space-y-8 md:space-y-12">
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="font-display text-xl sm:text-2xl md:text-3xl font-bold leading-[1.15] md:leading-[1.3] text-slate-900"
//             >
//               {quote}
//             </motion.p>

//             <div className="flex flex-col items-center gap-6">
//               {/* Animated Gradient Line */}
//               <div className="relative h-[3px] md:h-[4px] w-20 md:w-32 rounded-full bg-slate-100 overflow-hidden">
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-blue-600 via-primary to-orange-500"
//                   animate={{
//                     x: ["-100%", "100%"]
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "linear"
//                   }}
//                 />
//               </div>

//               <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-slate-400 flex items-center gap-4">
//                 <span className="h-px w-8 bg-slate-200 hidden sm:block"></span>
//                 Socio Bhaarat Vision
//                 <span className="h-px w-8 bg-slate-200 hidden sm:block"></span>
//               </p>
//             </div>
//           </div>

//           {/* Corner Accent Light Refraction */}
//           <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl transition-all duration-700 group-hover:bg-primary/10" />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default QuoteSection;


import { motion } from "framer-motion";

type QuoteSectionProps = {
  quote: string;
  className?: string;
};

const QuoteSection = ({ quote, className }: QuoteSectionProps) => {
  return (
    <section className={`relative py-24 md:py-20 bg-white overflow-hidden ${className || ""}`}>
      
      {/* 1. ARCHITECTURAL BACKGROUND ELEMENTS */}
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.09] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:64px_64px]" />
      
      {/* Vertical 'Ruler' Line (Unique Design Element) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block">
        <div className="sticky top-0 h-20 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto relative shadow-lg hover:shadow-2xl transition-shadow duration-500">
          
          {/* 2. FLOATING MINI-ELEMENTS */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-4 w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </motion.div>

          {/* 3. THE QUOTE BOX (Soft Minimalist) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white border border-slate-100 p-10 md:p-24 rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]"
          >
            {/* Top Left Corner Bracket */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />

            {/* Quote Typography */}
            <div className="relative">
              <span className="absolute -top-6 -left-4 text-6xl font-serif text-slate-100 select-none">“</span>
              
              <motion.h2 
                className="text-2xl md:text-4xl lg:text-5xl font-medium text-slate-900 leading-[1.2] md:leading-[1.15] tracking-tight"
              >
                {quote}
              </motion.h2>

              <div className="mt-12 flex items-center gap-6">
                {/* Unique Brand Marker */}
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-primary">SB</div>
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="/images/logo-icon.webp" alt="Brand Logo" />
                </div>
                
                <div>
                  <p className="text-xs font-semibold text-slate-900">- By Socio Bhaarat</p>
                </div>
              </div>
            </div>

            {/* Bottom Right Corner Bracket */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default QuoteSection;