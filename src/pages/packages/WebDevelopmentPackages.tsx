import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap } from "lucide-react";

const WebDevelopmentPackages = () => {
  const packages = [
    {
      name: "Starter Package",
      price: "₹12,999",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 4 Pages",
        "Responsive Design",
        "Contact Form",
        "Basic SEO Setup",
        "Mobile Optimized",
        "1 Month Support",
        "Social Media Integration",
        "Google Maps Integration"
      ],
      popular: false
    },
    {
      name: "Business Package",
      price: "₹29,999",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 Pages",
        "Advanced Responsive Design",
        "Contact & Custom Forms",
        "Advanced SEO",
        "CMS Integration",
        "3 Months Support",
        "Analytics Integration",
        "Blog Section",
        "Newsletter Integration"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "Custom Pricing",
      description: "Complete solution for large businesses",
      features: [
        "Unlimited Pages",
        "Custom Design & Development",
        "Advanced Features",
        "Full SEO Optimization",
        "Custom CMS",
        "6 Months Support",
        "API Integrations",
        "User Dashboard",
        "Payment Gateway",
        "Advanced Security",
        "Performance Optimization",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              Web Development <br />
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

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 items-stretch">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col p-6 sm:p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] bg-card border-2 transition-all duration-500 overflow-hidden group ${pkg.popular
                  ? 'border-primary shadow-[0_20px_50px_-12px_rgba(var(--primary),0.2)] scale-100 lg:scale-105 z-10'
                  : 'border-border/50 hover:border-primary/30'
                  }`}
              >

                {/* Popular Badge Architecture */}
                {pkg.popular && (
                  <div className="absolute top-0 right-10 bg-primary text-white px-6 py-2 rounded-b-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg z-20">
                    Most Popular
                  </div>
                )}

                {/* Card Header: Industrial Typography */}
                <div className="relative z-10 mb-8">
                  <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter text-slate-900 leading-none m-4 uppercase">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{pkg.price}</span>
                    <span className="text-slate-400 text-xs font-bold uppercase italic">/ cycle</span>
                  </div>
                  <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed italic border-l-2 border-primary/20 pl-4">
                    {pkg.description}
                  </p>
                </div>

                {/* Feature Spec-List */}
                <ul className="relative z-10 space-y-4 mb-10 flex-grow">
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
                </ul>

                {/* High-Performance Action Button */}
                <div className="relative z-10 mt-auto">
                  <Button
                    className={`w-full h-14 md:h-16 rounded-full text-base md:text-lg font-black transition-all shadow-xl group/btn ${pkg.popular
                      ? 'bg-primary hover:bg-primary/90 shadow-primary/20'
                      : 'bg-slate-900 hover:bg-slate-800'
                      }`}
                    onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                  >
                    DEPLOY SPEC <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </div>

                {/* ID Watermark inside card */}
                <div className="absolute -bottom-4 -right-4 text-slate-900/[0.03] text-8xl font-black italic select-none">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div >
      </section >

          <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 border-y border-border/50 relative">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-3xl mb-16 border-l-4 border-primary pl-8">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Solutions </span> We Provide
                </h2>
                {/* <p className="text-slate-500 font-medium italic">
                  Every package acts as a container for these specialized technical solutions, optimized for your business goals.
                </p> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                   "GRAPHIC DESIGNING", "WEBSITE ENGINEERING", "WORDPRESS ECOSYSTEM", "APP DEVELOPMENT", "UI & UX DESIGN", "E-COMMERCE DEVELOPEMNT"
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

        export default WebDevelopmentPackages;
