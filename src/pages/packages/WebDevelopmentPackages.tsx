import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BarChart3, Check, CheckCircle2, Code2, Globe, Layers, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebDevelopmentPackages = () => {
  const navigate = useNavigate()
  const reduce = useReducedMotion();
  const floatingBadges = [
    { icon: Code2, label: "Clean Code", value: "100%", color: "bg-blue-50 border-blue-200 text-blue-700", pos: "top-[18%] left-[6%]", delay: 0 },
    { icon: Globe, label: "Uptime SLA", value: "99.9%", color: "bg-emerald-50 border-emerald-200 text-emerald-700", pos: "top-[12%] right-[8%]", delay: 0.15 },
    { icon: Layers, label: "Projects Shipped", value: "240+", color: "bg-orange-50 border-orange-200 text-orange-700", pos: "bottom-[15%] left-[4%]", delay: 0.3 },
    { icon: CheckCircle2, label: "Client Satisfaction", value: "4.9★", color: "bg-violet-50 border-violet-200 text-violet-700", pos: "bottom-[24%] right-[5%]", delay: 0.45 },
  ];
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
    <>
      <SEO
        title="Website Development Packages | Socio Bhaarat"
        description="Choose from flexible website development packages tailored for startups, businesses, and e-commerce platforms."
        keywords="website development packages, web design packages, ecommerce packages, website pricing, web development packages in jabalpur"
        url="/packages/website-development"
      />
      <div className="min-h-screen bg-background">

        <section className="relative pt-12 pb-10 md:pb-36 overflow-hidden bg-[#fafafa]">
          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-[-40px] left-[-30px] md:bottom-[-80px] md:left-[-60px] w-[260px] md:w-[360px] h-[260px] md:h-[360px] bg-orange-500/[0.04] rounded-full blur-[60px] md:blur-[90px]" />
          </div>

          <div className="container mx-auto pt-10 md:px-4 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-12 items-start lg:items-center">

              {/* ── LEFT — benefits ── */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col gap-6 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm w-fit mx-auto lg:mx-0">
                  <Zap className="w-3 h-3" /> Growth Engineering Lab
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-800 leading-tight tracking-tighter">
                  Website Development <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                    Packages
                  </span>
                </h1>

                <p className="text-sm md:text-base lg:text-lg text-slate-600 max-w-lg leading-relaxed font-semibold mx-auto lg:mx-0">
                  Select a high-performance framework tailored for your business scale.
                  All packages include dedicated support and full source code delivery.
                </p>

                {/* 2×2 Stat grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0">
                  {[
                    { val: "3", label: "Plan Tiers", color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
                    { val: "7 Days", label: "Go Live In", color: "text-orange-600", bg: "bg-orange-50 border-orange-100" },
                    { val: "99+", label: "PageSpeed", color: "text-violet-600", bg: "bg-violet-50 border-violet-100" },
                    { val: "100%", label: "You Own It", color: "text-green-600", bg: "bg-green-50 border-green-100" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center justify-center p-8 md:py-5 rounded-2xl border ${s.bg}`}
                    >
                      <div className={`font-display text-xl md:text-2xl font-black leading-none mb-1 ${s.color}`}>
                        {s.val}
                      </div>
                      <div className="text-[10px] md:text-[9px] font-bold uppercase tracking-[.18em] text-slate-700">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <Button
                    className="rounded-full px-7 h-11 text-xs sm:text-sm font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => navigate("/contact")}
                  >
                    View All Packages <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-7 h-11 text-xs sm:text-sm font-bold border-2 border-primary/25 text-primary hover:bg-primary/5 transition-all"
                    onClick={() => navigate("/contact")}
                  >
                    Book a Free Call
                  </Button>
                </div>
              </motion.div>


              {/* ── RIGHT — content ── */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6"
              >
                {/* Eyebrow */}
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <div className="w-5 h-[2px] bg-primary rounded-full" />
                  <span className="text-sm font-bold tracking-[.28em] uppercase text-primary">
                    What You Get
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-center lg:text-left">
                  Websites that work{" "}
                  <span className=" bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent">
                    while you sleep.
                  </span>
                </h2>

                {/* Benefit rows */}
                <div className="flex flex-col gap-2">
                  {[
                    { icon: Globe, title: "Custom Design & Development", desc: "Fully bespoke websites — no templates, no page builders. Built to your brand from scratch." },
                    { icon: Zap, title: "Lightning Fast Performance", desc: "99+ Google PageSpeed scores, optimised images, and CDN delivery for instant load times everywhere." },
                    { icon: Smartphone, title: "100% Mobile Responsive", desc: "Pixel-perfect across every device — phones, tablets, and desktops without any compromise." },
                    { icon: ShieldCheck, title: "Security & Uptime", desc: "SSL, firewall protection, and 99.9% uptime guarantee — your site is always online and always secure." },
                    { icon: BarChart3, title: "SEO-Ready Architecture", desc: "Built with semantic HTML, fast Core Web Vitals, and structured data so Google can find you instantly." },
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

                {/* Possibilities */}
                <div className="flex flex-col gap-2 pt-2 border-t border-slate-100 items-center lg:items-start">
                  <p className="text-[10px] font-bold uppercase tracking-[.25em] text-slate-400 mb-1">
                    What becomes possible
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2">
                    {[
                      "Go live in 7–14 days from sign-off",
                      "2× more leads from the same traffic",
                      "Rank on Google Page 1 within 90 days",
                      "Full ownership — your code, your domain",
                    ].map((p, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-md bg-green-50 flex items-center justify-center flex-shrink-0">
                          <Check size={10} strokeWidth={3} className="text-green-600" />
                        </div>
                        <span className="text-xs font-semibold text-slate-600">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <section className=" md:py-12 sm:px-6 lg:px-8 relative z-10">
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
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-none m-4">
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{pkg.price}</span>
                      <span className="text-slate-700 text-xs font-bold uppercase italic">/ cycle</span>
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
                        : 'bg-slate-700 hover:bg-slate-800'
                        }`}
                      onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                    >
                      DEPLOY SPEC <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div >
        </section >

        <section className="py-12 sm:px-6 lg:px-8 bg-muted/30 border-y border-border/50 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-3xl mb-16 border-l-4 border-primary pl-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium ">Solutions </span> We Provide
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
                  <h3 className="font-bold text-[11px] tracking-widest text-slate-700 uppercase">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title={<>Need a Custom Spec?</>}
          description={<>Contact our engineering team to architect a bespoke marketing framework for your brand.</>}
          buttonText="REQUEST CUSTOM QUOTE"
        />
      </div>
    </>


  );
};

export default WebDevelopmentPackages;
