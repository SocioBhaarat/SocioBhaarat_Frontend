import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Check, BarChart3, PieChart, ShieldCheck, TrendingUp, Target, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DigitalMarketingPackages = () => {
  const navigate = useNavigate()
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
    <>
      <SEO
        title="Digital Marketing Packages | Socio Bhaarat"
        description="Explore affordable and result-driven digital marketing packages designed to boost your online presence and business growth."
        keywords="digital marketing packages, marketing plans, seo packages, social media packages, digital marketing packages in jabalpur"
      />
      <div className="min-h-screen bg-background relative overflow-hidden">
        <section className="relative pt-12 pb-5 px-4 overflow-hidden bg-[#fafafa]">

          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-[-80px] left-[-60px] w-[360px] h-[360px] bg-orange-500/[0.04] rounded-full blur-[90px]" />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">

              {/* ── LEFT — benefits ── */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col gap-6 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm w-fit mx-auto lg:mx-0">
                  <Zap className="w-3 h-3" /> Growth Engineering Lab
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800">
                  Strategic Marketing <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                    Packages
                  </span>
                </h1>

                <p className="text-base md:text-lg text-slate-600 max-w-lg leading-relaxed font-semibold mx-auto lg:mx-0">
                  Select a high-performance framework tailored for your business scale. All
                  packages include industrial-grade reporting and dedicated lab support.
                </p>

                {/* Stat strip */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { val: "3", label: "Plan Tiers", color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
                    { val: "₹9,999", label: "Starts At", color: "text-orange-500", bg: "bg-orange-50 border-orange-100" },
                    { val: "5×", label: "Avg ROI", color: "text-violet-600", bg: "bg-violet-50 border-violet-100" },
                    { val: "0", label: "Lock-In Period", color: "text-green-600", bg: "bg-green-50 border-green-100" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center justify-center py-5 rounded-2xl border ${s.bg}`}
                    >
                      <div className={`font-display text-2xl font-black leading-none mb-1 ${s.color}`}>
                        {s.val}
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>

              {/* ── RIGHT — heading + stats ── */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6"
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-[2px] bg-primary rounded-full" />
                  <span className="text-sm font-bold tracking-[.28em] uppercase text-primary">
                    What You Get
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Everything your brand needs{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent">
                    to grow faster.
                  </span>
                </h2>

                {/* Benefit rows */}
                <div className="flex flex-col gap-2">
                  {[
                    { icon: Target, title: "Laser-Focused Strategy", desc: "Each package is built around your specific revenue goals — not a one-size-fits-all template." },
                    { icon: BarChart3, title: "Weekly ROI Reports", desc: "Transparent dashboards every Monday — open rates, leads, ROAS, and what needs to improve." },
                    { icon: Users, title: "Dedicated Account Manager", desc: "A single point of contact who knows your brand, handles all execution, and never goes missing." },
                    { icon: ShieldCheck, title: "No Long-Term Lock-In", desc: "Month-to-month plans. If we're not delivering results, you're free to walk away — no questions asked." },
                    { icon: Zap, title: "Fast Onboarding", desc: "From sign-up to live campaigns in 48–72 hours — we move fast so your business doesn't lose momentum." },
                  ].map((b, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-4 px-4 py-3.5 rounded-xl border border-transparent bg-white/60 hover:bg-white hover:border-primary/20 hover:shadow-sm transition-all duration-200 cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                        <b.icon size={15} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-snug mb-0.5">
                          {b.title}
                        </p>
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Possibilities strip */}
                {/* <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-[.25em] text-slate-400 mb-1">
                  What becomes possible
                </p>
                {[
                  "3× more leads without increasing ad spend",
                  "First page Google rankings in 60–90 days",
                  "WhatsApp open rates above 95%",
                  "Full brand visibility across Bhopal & Jabalpur",
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-md bg-green-50 flex items-center justify-center flex-shrink-0">
                      <Check size={10} strokeWidth={3} className="text-green-600" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600">{p}</span>
                  </div>
                ))}
              </div> */}
              </motion.div>


            </div>
          </div>

          {/* Bottom fade */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" /> */}
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
    </>

  );
};

export default DigitalMarketingPackages;
