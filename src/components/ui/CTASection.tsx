import { Button } from "@/components/ui/button";

interface CTAProps {
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: string;
}

export const CTASection = ({ title, description, buttonText }: CTAProps) => (
  <section className="bg-muted/30">
    <div className="w-full">
      <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-16 text-center shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 text-white italic leading-tight uppercase">
            {title}
          </h2>
          <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
            {description}
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-lg md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary hover:bg-slate-50"
              onClick={() => window.open("https://wa.me/+919407448837 ", "_blank")}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);