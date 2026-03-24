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

  const pills = ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"];
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
      />
      <div className="min-h-screen bg-background">

        <section className="relative pt-16 overflow-hidden bg-[#fafafa]">
          {/* ── Background layers ── */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
            {/* Glows */}
            <div className="absolute top-0 right-0 w-[560px] h-[560px] bg-primary/5 blur-[130px] rounded-full animate-pulse" />
            <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-blue-400/5 blur-[100px] rounded-full animate-pulse [animation-delay:1.5s]" />


          </div>

          {/* ── Floating stat badges ── */}
          {floatingBadges.map(({ icon: Icon, label, value, color, pos, delay }) => (
            <motion.div
              key={label}
              className={`absolute ${pos} hidden lg:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border backdrop-blur-sm shadow-sm z-20 ${color}`}
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + delay }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <div>
                <p className="text-[10px] font-semibold opacity-70 leading-none mb-0.5">{label}</p>
                <p className="text-sm font-bold leading-none">{value}</p>
              </div>
            </motion.div>
          ))}

          {/* ── Main content ── */}
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
                <Zap className="w-3 h-3" /> Growth Engineering Lab
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-800 leading-tight tracking-tighter mb-6">
                Web Development <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">
                  Packages
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-md md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 font-semibold">
                Select a high-performance framework tailored for your business scale. All packages include
                industrial-grade reporting and dedicated lab support.
              </p>

              {/* Tech pill strip */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-2 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-xs text-slate-400 font-medium mr-1">Built with</span>
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 shadow-sm"
                  >
                    {pill}
                  </span>
                ))}
              </motion.div>

              {/* Code snippet block */}
              {/* <motion.div
              className="w-full max-w-xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden text-left"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-auto text-[10px] font-mono text-slate-400">sociobhaarat.config.ts</span>
              </div>
              <div className="px-5 py-4 space-y-2 font-mono text-xs">
                {codeLines.map(({ text, delay }) => (
                  <motion.p
                    key={text}
                    className="text-slate-500"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + delay }}
                  >
                    <span className="text-primary font-semibold">{">"}</span>{" "}
                    <span className="text-slate-700">{text}</span>
                  </motion.p>
                ))}
                <motion.span
                  className="inline-block w-2 h-4 bg-primary rounded-sm ml-3"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div> */}
            </motion.div>
          </div>

          {/* ── Bottom fade ── */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" /> */}

          <style jsx>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
        </section>

        <section className="relative pt-12 pb-36 px-4 overflow-hidden bg-[#fafafa]">

          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-[-80px] left-[-60px] w-[360px] h-[360px] bg-orange-500/[0.04] rounded-full blur-[90px]" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">

              {/* ── LEFT — benefits ── */}
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
                        <p className="text-xs text-slate-400 italic leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Possibilities */}
                <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-[.25em] text-slate-400 mb-1">
                    What becomes possible
                  </p>
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
              </motion.div>

              {/* ── RIGHT — heading + stats + CTA ── */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col gap-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm w-fit">
                  <Zap className="w-3 h-3" /> Growth Engineering Lab
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 leading-tight tracking-tighter">
                  Web Development <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                    Packages
                  </span>
                </h1>

                <p className="text-base md:text-lg text-slate-600 max-w-lg leading-relaxed font-semibold">
                  Select a high-performance framework tailored for your business scale.
                  All packages include dedicated support and full source code delivery.
                </p>

                {/* 2×2 Stat grid */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { val: "3", label: "Plan Tiers", color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
                    { val: "7 Days", label: "Go Live In", color: "text-orange-500", bg: "bg-orange-50 border-orange-100" },
                    { val: "99+", label: "PageSpeed", color: "text-violet-600", bg: "bg-violet-50 border-violet-100" },
                    { val: "100%", label: "You Own It", color: "text-green-600", bg: "bg-green-50 border-green-100" },
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

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    className="rounded-full px-7 h-11 text-sm font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => navigate("/contact")}
                  >
                    View All Packages <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-7 h-11 text-sm font-bold border-2 border-primary/25 text-primary hover:bg-primary/5 transition-all"
                    onClick={() => navigate("/contact")}
                  >
                    Book a Free Call
                  </Button>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        </section>



        <section className="py-10 md:py-12 sm:px-6 lg:px-8 relative z-10">
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
