
import { motion } from "framer-motion";

type QuoteSectionProps = {
  quote: string;
  className?: string;
};

const QuoteSection = ({ quote, className }: QuoteSectionProps) => {
  return (
    <section className={`relative py-12 md:py-20 bg-white overflow-hidden ${className || ""}`}>
      
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