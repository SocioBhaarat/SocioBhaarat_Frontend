import { motion } from "framer-motion";

type QuoteSectionProps = {
  quote: string;
  className?:string
};

const QuoteSection = ({ quote, className }: QuoteSectionProps) => {
  return (
    <section className={`relative py-12 md:py-24 px-4 overflow-hidden ${
        className ? className : "bg-[#fafafa]"
      }`}>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative bg-white border border-slate-100 rounded-[2rem] md:rounded-[3.5rem] p-8 sm:p-14 md:p-20 shadow-xl text-center overflow-hidden group"
        >
          {/* 2. DECORATIVE QUOTE MARKS (Responsive Scaling) */}
          <div className="absolute top-4 left-6 md:top-10 md:left-12 text-6xl md:text-9xl text-primary/10 font-serif select-none italic group-hover:text-primary/20 transition-colors">
            “
          </div>
          
          <div className="absolute bottom-4 right-6 md:bottom-10 md:right-12 text-6xl md:text-9xl text-primary/10 font-serif select-none italic group-hover:text-primary/20 transition-colors rotate-180">
            “
          </div>

          {/* 3. QUOTE TEXT (Fluid Typography) */}
          <div className="relative z-10 space-y-6 md:space-y-8">
            <p className="font-display text-lg sm:text-2xl md:text-4xl font-black leading-[1.2] md:leading-relaxed text-slate-900 tracking-tighter uppercase italic">
              {quote}
            </p>

            {/* Accent Line (Animated on Hover) */}
            <div className="h-[2px] md:h-[3px] w-16 md:w-24 mx-auto bg-gradient-to-r from-blue-600 via-primary to-orange-500 rounded-full group-hover:w-40 transition-all duration-700"></div>
            
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
              SocioBhaarat Vision
            </p>
          </div>

          {/* Bottom Lab-Style Glow */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-primary to-orange-500 opacity-20" />
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;