import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Check, BarChart3, PieChart, ShieldCheck, TrendingUp } from "lucide-react";

const DigitalMarketingPackages = () => {
  const packages = [
    {
      name: "Starter",
      price: "₹25,000",
      period: "/month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Social Media Management (2 platforms)",
        "8 Posts per month",
        "Basic Graphic Design",
        "Monthly Performance Report",
        "Email Support",
      ],
      notIncluded: [
        "Paid Advertising",
        "SEO Services",
        "Content Marketing",
        "Video Production",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "₹50,000",
      period: "/month",
      description: "Ideal for growing businesses seeking comprehensive marketing",
      features: [
        "Social Media Management (4 platforms)",
        "20 Posts per month",
        "Advanced Graphic Design",
        "Basic SEO (10 keywords)",
        "Google My Business Optimization",
        "Monthly Blog Posts (2)",
        "Bi-weekly Performance Reports",
        "WhatsApp & Email Support",
        "Competitor Analysis",
      ],
      notIncluded: [
        "Paid Advertising Management",
        "Video Production",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "₹1,00,000",
      period: "/month",
      description: "Complete digital marketing solution for established businesses",
      features: [
        "Social Media Management (All platforms)",
        "40 Posts per month",
        "Premium Graphic & Video Content",
        "Advanced SEO (30 keywords)",
        "Google Ads Management (₹50k budget included)",
        "Facebook/Instagram Ads Management",
        "Content Marketing (4 blogs/month)",
        "Email Marketing Campaigns",
        "ORM Services",
        "Weekly Performance Reports",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Quarterly Strategy Sessions",
      ],
      notIncluded: [],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">

      <section className="relative pt-12 pb-36 px-4 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
              <Zap className="w-3 h-3" /> Growth Engineering Lab
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter mb-6">
              Strategic Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                Packages
              </span>
            </h1>
            <p className="text-md md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium italic">
              Select a high-performance framework tailored for your business scale. All packages include industrial-grade reporting and dedicated lab support.
            </p>
          </motion.div>
        </div>
      </section>


      {/* 2. ADAPTIVE PACKAGES */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`bg-card rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-2 transition-all p-6 sm:p-8 md:p-10 relative group overflow-hidden h-full flex flex-col justify-between ${
                  /* scale-105 only applied on LG+ to prevent mobile clipping */
                  pkg.highlighted
                    ? 'border-primary scale-100 lg:scale-105 z-10'
                    : 'border-border/50'
                  }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-6 md:right-10 bg-primary text-white px-4 md:px-6 py-1.5 md:py-2 rounded-b-2xl text-[10px] font-black uppercase tracking-widest shadow-lg z-20">
                    Most Popular
                  </div>
                )}

                <div className="relative z-10">
                  {/* Header Area */}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter text-slate-900 leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price Architecture: Fluid Padding */}
                  <div className="mb-8 p-5 md:p-6 rounded-[2rem] md:rounded-3xl bg-muted/30 border border-border/50 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-baseline justify-center sm:justify-start">
                      <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                        {pkg.price}
                      </span>
                      <span className="text-slate-400 text-xs md:text-sm font-bold sm:ml-2 italic">
                        {pkg.period}
                      </span>
                    </div>
                  </div>

                  {/* Button: Stays high-impact on all screens */}
                  <Button
                    size="lg"
                    className={`w-full h-14 md:h-16 rounded-full text-base md:text-lg font-black transition-all ${pkg.highlighted
                        ? 'bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20'
                        : 'bg-slate-900 hover:bg-slate-800'
                      }`}
                    onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                  >
                    DEPLOY NOW <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </div>

                {/* Watermark: Responsive font size */}
                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 text-slate-900/[0.03] text-6xl md:text-8xl font-black italic select-none">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer text with responsive spacing */}
          <p className="text-[10px] md:text-xs text-center mt-12 md:mt-16 text-slate-400 font-bold uppercase tracking-[0.2em] italic max-w-2xl mx-auto px-4">
            *Precision delivery based on custom requirements and allocation.*
          </p>
        </div>
      </section>

      {/* 3. TECHNICAL SERVICE ECOSYSTEM */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 border-y border-border/50 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mb-16 border-l-4 border-primary pl-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4">
              Integrated Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Ecosystem</span>
            </h2>
            <p className="text-slate-500 font-medium italic">
              Every package acts as a container for these specialized technical solutions, optimized for your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "SOCIAL MEDIA MANAGEMENT", "VIDEO PRODUCTION","META ADS ARCHITECTURE", "GOOGLE ADS VALIDATION", "CONTENT STRATEGY",
              "GOOGLE BUSINESS OPTIMIZATION", "WHATSAPP API","TELE-CONVERSION", "SALES PIPELINE FILTERING", "SEO / RANKING LAB",
              "REPUTATION MANAGEMENT", "PERFORMANCE MARKETING"
            ].map((service, index) => (
              <div key={index} className="bg-card p-5 rounded-2xl border border-border/50 shadow-sm hover:border-primary/40 group transition-all flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Check className="w-4 h-4" strokeWidth={4} />
                </div>
                <h3 className="font-black text-[11px] tracking-widest text-slate-700 uppercase">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM CTA ARCHITECTURE */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">


            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Need a Custom Spec?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Contact our engineering team to architect a bespoke marketing framework for your brand."
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-sm md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  REQUEST CUSTOM QUOTE
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPackages;
