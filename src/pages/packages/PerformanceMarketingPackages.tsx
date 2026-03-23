import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/ui/CTASection";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Check, CheckCircle, DollarSign, Eye, MousePointerClick, TrendingUp, Zap } from "lucide-react";
import { features } from "process";

const PerformanceMarketingPackages = () => {
  const packages = [
    {
      name: "Starter Campaign",
      price: "Get quote",
      adSpend: "₹20,000 - ₹50,000/month",
      description: "Perfect for businesses starting with performance marketing",
      features: [
        "Google Ads or Meta Ads",
        "1 Platform Management",
        "Basic Campaign Setup",
        "Monthly Reporting",
        "Conversion Tracking",
        "Landing Page Optimization",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Growth Campaign",
      price: "₹Get quote",
      adSpend: "₹50,000 - ₹2,00,000/month",
      description: "Most popular for scaling businesses",
      features: [
        "Multi-Platform Campaigns",
        "Google Ads + Meta Ads",
        "Advanced Targeting",
        "A/B Testing",
        "Weekly Reporting",
        "Conversion Rate Optimization",
        "Remarketing Campaigns",
        "Custom Landing Pages",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise Campaign",
      price: "Get quote",
      adSpend: "₹2,00,000+/month",
      description: "For businesses with aggressive growth targets",
      features: [
        "Full-Funnel Strategy",
        "All Major Platforms",
        "Advanced Analytics & AI",
        "Daily Optimization",
        "Custom Dashboards",
        "Dedicated Account Manager",
        "24/7 Support",
        "Competitor Analysis",
        "Brand Strategy",
        "Creative Production",
        "Advanced Attribution",
        "Marketing Automation"
      ],
      popular: false
    }
  ];

  const features = [
    "Google & Meta Ads Management",
    "A/B Creative Testing",
    "Conversion Rate Optimisation",
    "Real-time ROAS Dashboards",
  ];

  const pills = ["Google Ads", "Meta Ads", "YouTube", "Retargeting", "Shopping"];

  const metrics = [
    { icon: TrendingUp, label: "Avg. ROAS", value: "4.8×", trend: "+12%", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
    { icon: MousePointerClick, label: "Click-Through", value: "7.4%", trend: "+0.9%", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { icon: DollarSign, label: "Cost per Lead", value: "₹38", trend: "-18%", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
    { icon: Eye, label: "Impressions", value: "2.1M", trend: "+34%", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
  ];

  return (
    <div className="min-h-screen bg-background">

      <section className="relative py-12 overflow-hidden bg-[#fafafa]">

        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-blue-400/5 blur-[100px] rounded-full animate-pulse [animation-delay:2s]" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* ── LEFT: Content ── */}
            <motion.div
              className="flex-1 flex flex-col items-start text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
                <Zap className="w-3 h-3" /> Growth Engineering Lab
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 leading-tight tracking-tighter mb-5">
                Performance Marketing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">
                  Packages
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 max-w-lg leading-relaxed mb-8 font-semibold">
                Select a high-performance framework tailored for your business scale. All packages include industrial-grade reporting and dedicated lab support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-10">
                {features.map((f, i) => (
                  <motion.div
                    key={f}
                    className="flex items-center gap-2 text-sm text-slate-600 font-semibold"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </motion.div>
                ))}
              </div>


              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-medium mr-1">Platforms</span>
                {pills.map((pill, i) => (
                  <motion.span
                    key={pill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 shadow-sm hover:border-primary/30 hover:text-primary transition-colors duration-200"
                  >
                    {pill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Stats card ── */}
            <motion.div
              className="w-full lg:w-[360px] shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-100/50 via-primary/10 to-orange-100/40 rounded-2xl blur-lg" />

                <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">

                  {/* Header */}
                  <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-600 tracking-wide">Live Campaign Stats</span>
                    <span className="ml-auto text-[10px] text-slate-400">Updated now</span>
                  </div>

                  {/* 2×2 metric grid */}
                  <div className="grid grid-cols-2 divide-x divide-y divide-slate-100">
                    {metrics.map(({ icon: Icon, label, value, trend, color, bg }, i) => (
                      <motion.div
                        key={label}
                        className={`${bg} px-5 py-5`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/70 border border-white flex items-center justify-center mb-3 shadow-sm">
                          <Icon className={`w-4 h-4 ${color}`} />
                        </div>
                        <p className="text-[11px] text-slate-500 font-semibold mb-1">{label}</p>
                        <div className="flex items-end gap-2">
                          <p className={`text-2xl font-bold leading-none ${color}`}>{value}</p>
                          <span className="text-[10px] font-bold text-emerald-600 mb-0.5">{trend}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[11px] text-slate-500 font-medium">
                      Avg. <span className="text-slate-700 font-bold">4.8× ROAS</span> across all active clients
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" /> */}
      </section>

      <section className="relative py-12 overflow-hidden bg-[#fafafa]">
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
              Performance Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                Packages
              </span>
            </h1>
            <p className="text-md md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-semibold">
              Select a high-performance framework tailored for your business scale. All packages include industrial-grade reporting and dedicated lab support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch mb-16">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`bg-card rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-2 transition-all p-6 sm:p-8 md:p-10 relative group overflow-hidden h-full flex flex-col ${pkg.popular
                  ? 'border-primary scale-100 lg:scale-105 z-10'
                  : 'border-border/50'
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-6 md:right-10 bg-primary text-white px-4 md:px-6 py-1.5 md:py-2 rounded-b-2xl text-[10px] font-black uppercase tracking-widest shadow-lg z-20">
                    Most Popular
                  </div>
                )}

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

                  {/* Price & Ad Spend Architecture */}
                  <div className="mb-8 p-5 md:p-6 rounded-[2rem] md:rounded-3xl bg-muted/30 border border-border/50 text-center sm:text-left">
                    <div className="flex flex-col items-baseline justify-center sm:justify-start">
                      <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">
                        {pkg.price}
                      </span>
                      <span className="text-primary text-[10px] md:text-xs font-black uppercase mt-2 tracking-wider">
                        Spend: {pkg.adSpend}
                      </span>
                    </div>
                  </div>

                  {/* Features List: flex-grow ensures this fills space and pushes button down */}
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

                  {/* Button: Stick to end via flex-grow on the UL above */}
                  <div className="relative z-10 mt-auto">
                    <Button
                      size="lg"
                      className={`w-full h-14 md:h-16 rounded-full text-base md:text-lg font-black transition-all shadow-xl group/btn ${pkg.popular
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

          {/* Footer text */}
          <p className="text-[10px] md:text-xs text-center mt-12 md:mt-16 text-slate-400 font-bold uppercase tracking-[0.2em] italic max-w-2xl mx-auto px-4">
            *Precision delivery based on custom requirements and allocation.*
          </p>
        </div>
      </section>

      <CTASection
        title={<>Need a Custom Spec?</>}
        description={<>Contact our engineering team to architect a bespoke marketing framework for your brand.</>}
        buttonText="REQUEST CUSTOM QUOTE"
      />
    </div>
  );
};

export default PerformanceMarketingPackages;
