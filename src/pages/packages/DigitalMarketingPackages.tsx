import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
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
        "Social Media Management -Instagram, Facebook, Linkedin & Youtube",
        "Video (4 Unit)",
        "Graphic Design (4 Unit",
        "2 Video Shoots",
        "Meta ADs - Visibility, Enquiries,Engagement",
        "Basic Google Business Profile Mgmt",
        "24*7 Support"
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
        "Social Media Management -Instagram, Facebook, Linkedin & Youtube",
        "Video (6 Unit), 3 Shoots",
        "Graphic Design (5 Unit)",
        "2 Drone Shoots",
        "Meta ADs - Visibility, Enquiries, Engagement, Leads",
        "Google Business Profile Mgmt",
        "24*7 Support"
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
        "Social Media Management -Instagram, Facebook, Linkedin & Youtube",
        "Video (8 Unit), 4 Shoots",
        "Graphic Design (7 Unit)",
        "Video Shoots with Influencers",
        "Meta ADs - Visibility, Enquiries, Engagement, Leads",
        "1 Drone Shoot",
        "Top Google Search Ranking of GMB for 2,3 Keywords",
        "24*7 Support"
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-800 leading-tight tracking-tighter mb-6">
              Strategic Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                Packages
              </span>
            </h1>
            <p className="text-md md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-semibold ">
              Select a high-performance framework tailored for your business scale. All packages include industrial-grade reporting and dedicated lab support.
            </p>
          </motion.div>
        </div>
      </section>


      {/* 2. ADAPTIVE PACKAGES */}

      <section className="py-16 md:py-24 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch mb-16">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`bg-card rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-2 transition-all p-6 sm:p-8 md:p-10 relative group overflow-hidden h-full flex flex-col ${pkg.highlighted
                  ? 'border-primary scale-100 lg:scale-105 z-10'
                  : 'border-border/50'
                  }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-6 md:right-10 bg-primary text-white px-4 md:px-6 py-1.5 md:py-2 rounded-b-2xl text-[10px] font-black uppercase tracking-widest shadow-lg z-20">
                    Most Popular
                  </div>
                )}

                {/* Wrapper for ALL content above the button, set to flex-grow */}
                <div className="relative z-10 flex flex-col flex-grow">

                  {/* Header Area */}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price Architecture */}
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

                  {/* Features List: Added flex-grow here to push the button down */}
                  {/* <ul className="relative z-10 space-y-4 mb-10 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="h-5 w-5 rounded-md bg-primary/10 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-primary transition-colors duration-300">
                          <Check className="h-3 w-3 text-primary group-hover/item:text-white" strokeWidth={4} />
                        </div>
                        <span className="text-xs md:text-sm font-bold text-slate-600 tracking-tight leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul> */}

                  {/* Button Area: Now guaranteed to stay at the bottom */}
                  <div className="relative z-10 mt-auto">
                    <Button
                      size="lg"
                      className={`w-full h-14 md:h-16 rounded-full text-base md:text-lg font-black transition-all shadow-xl group/btn ${pkg.highlighted
                        ? 'bg-primary hover:bg-primary/90 shadow-primary/20'
                        : 'bg-slate-700 hover:bg-slate-800'
                        }`}
                      onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                    >
                      DEPLOY NOW <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[10px] md:text-xs text-center mt-12 md:mt-16 text-slate-400 font-bold uppercase tracking-[0.2em] italic max-w-2xl mx-auto px-4">
            *Precision delivery based on custom requirements and allocation.*
          </p>
        </div>
      </section>

      {/* 3. TECHNICAL SERVICE ECOSYSTEM */}
      <section className="py-12 sm:px-6 lg:px-8 bg-muted/30 border-y border-border/50 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mb-16 border-l-4 border-primary pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">Solutions</span> We Provide
            </h2>
            <p className="text-slate-700 font-medium italic">
              Every package acts as a container for these specialized technical solutions, optimized for your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "SOCIAL MEDIA MANAGEMENT", "VIDEO PRODUCTION", "META ADS ARCHITECTURE", "GOOGLE ADS VALIDATION", "CONTENT STRATEGY",
              "GOOGLE BUSINESS OPTIMIZATION", "WHATSAPP API", "TELE-CONVERSION", "SALES PIPELINE FILTERING", "SEO / RANKING LAB",
              "REPUTATION MANAGEMENT", "PERFORMANCE MARKETING"
            ].map((service, index) => (
              <div key={index} className="bg-card p-5 rounded-2xl border border-border/50 shadow-sm hover:border-primary/40 group transition-all flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Check className="w-4 h-4" strokeWidth={4} />
                </div>
                <h3 className="font-bold text-[11px] tracking-widest text-slate-700 uppercase">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM CTA ARCHITECTURE */}
      <CTASection
        title={<>Need a Custom Spec?</>}
        description={<>Contact our engineering team to architect a bespoke marketing framework for your brand.</>}
        buttonText="REQUEST CUSTOM QUOTE"
      />
    </div>
  );
};

export default DigitalMarketingPackages;
