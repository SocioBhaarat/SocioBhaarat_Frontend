type QuoteSectionProps = {
  quote: string;
};

const QuoteSection = ({ quote }: QuoteSectionProps) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-4xl">
        <div className="relative bg-background border border-border rounded-2xl p-10 sm:p-14 shadow-lg text-center">
          
          {/* Decorative Quote Mark */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-7xl text-primary/10 font-serif select-none">
            "
          </div>

          {/* Quote Text */}
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed text-foreground">
            {quote}
          </p>

          {/* Accent Line */}
          <div className="mt-8 h-[3px] w-24 mx-auto bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full"></div>
        
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;