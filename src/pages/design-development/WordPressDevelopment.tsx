
import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import {
  Building2, Code2, Gauge, Palette,
  Puzzle, Rocket, ShieldCheck, ShoppingCart,
  Smartphone, ArrowRight, Search,
  Users,
  Wrench,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WordPressDevelopment = () => {
  const navigate = useNavigate();

  /* DATA */
  const services = [
    { title: "Custom WordPress Development", icon: <Code2 />, desc: "High-performance, bespoke site architecture." },
    { title: "Theme Customization", icon: <Palette />, desc: "Tailored visual identities that convert." },
    { title: "Plugin Engineering", icon: <Puzzle />, desc: "Custom features and third-party integrations." },
    { title: "WooCommerce Solutions", icon: <ShoppingCart />, desc: "Scalable digital storefronts and gateways." },
    { title: "Enterprise Websites", icon: <Building2 />, desc: "Professional portals for corporate growth." },
    { title: "Speed & Performance", icon: <Gauge />, desc: "Core Web Vitals and caching optimization." },
  ];

  const whyChooseUs = [
    { title: "Experienced Developers", desc: "Expert professionals with hands-on CMS mastery.", icon: <Users className="w-5 h-5" /> },
    { title: "Custom Theme Design", desc: "Bespoke visuals tailored to your unique brand.", icon: <Palette className="w-5 h-5" /> },
    { title: "Plugin Engineering", desc: "Seamless integration and custom logic building.", icon: <Puzzle className="w-5 h-5" /> },
    { title: "SEO-Ready Code", desc: "Optimized structure for maximum search visibility.", icon: <Search className="w-5 h-5" /> },
    { title: "Mobile-Responsive", desc: "Perfectly optimized for every modern device.", icon: <Smartphone className="w-5 h-5" /> },
    { title: "Performance First", desc: "Secure and speed-focused backend architecture.", icon: <Gauge className="w-5 h-5" /> },
    { title: "Transparent Support", desc: "Clear communication throughout the lifecycle.", icon: <ShieldCheck className="w-5 h-5" /> }
  ]

  const process = [
    { title: "Requirement Analysis", desc: "Defining technical goals and business roadmaps." },
    { title: "UI/UX & Prototyping", desc: "Crafting modern, user-centric mobile-first designs." },
    { title: "Development Phase", desc: "Clean coding with PHP, MySQL, and modern CSS." },
    { title: "QA & Optimization", desc: "Rigorous security audits and speed testing." },
    { title: "Launch & Support", desc: "Seamless deployment with post-launch care." },
  ];

  const technologies = [
    "WordPress CMS", "PHP", "MySQL", "WooCommerce",
    "Elementor Pro", "Yoast SEO", "HTML5 / CSS3", "JavaScript",
    "Rest APIs", "WPBakery", "RankMath", "WP Rocket"
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* HERO SECTION */}

      <section className="relative min-h-[90vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* 1. TECHNICAL BACKGROUND ARCHITECTURE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Blueprint Grid Overlay - The "Lab" Look */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />

          {/* Atmospheric Mesh Blobs */}
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/5 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />

        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: Narrative (Text Upwards) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <Wrench className="w-3 h-3" /> Managed Ecosystems Lab
              </div>

              <h1 className="font-display text-4xl sm:text-6xl  lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                  Scalable Foundations
                </span> with WordPress.
              </h1>

              <p className="text-base md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                "We engineer high-performance, secure, and fully customizable WordPress ecosystems tailored to convert Jabalpur & Bhopal visitors into loyal customers."
              </p>

              <div className="flex justify-start pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-12 h-14 md:h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Launch Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Proof (CMS Performance Bento) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative group">
                {/* Decorative Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl rounded-[3rem] animate-pulse" />

                <div className="relative z-10 bg-white p-3 rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=800&q=80"
                    alt="High Speed WordPress Optimization"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Floating Mini-Metric Overlay */}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Core Web Vitals</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-black text-slate-900">98% Optimized</p>
                      <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                </div>

                {/* Framed Layer for Identity */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-4 bg-muted/50 border-y border-border overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Narrative & Visual Context */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3" />
                Top-Tier Engineering
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Why Choose <span className="text-primary">Sociobhaarat</span> for WordPress?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We combine creative design, technical expertise, and strategic planning to deliver WordPress websites that are fast, secure, SEO-friendly, and easy to manage.
                We don't just build sites; we build digital assets that scale with your business goals.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-background rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl font-black text-primary">500+</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Successful Projects</p>
                </div>
                <div className="p-4 bg-background rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl font-black text-secondary">98%</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Value Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-4"
            >
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY WORDPRESS */}
      <section className="py-16 md:py-24 px-4 bg-background relative overflow-hidden">


        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Heading with Requested Gradient */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 leading-[1.1]">
              Why Your Brand Needs <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">WordPress</span>
            </h2>
            <p className="mt-4 text-slate-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] italic">
              Engineering the backbone of modern digital commerce.
            </p>
          </div>

          {/* 2. ADAPTIVE GRID (1 col mobile, 3 cols desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Digital Dominance", icon: <Rocket className="w-8 h-8" />, desc: "Establish a future-ready presence with a highly scalable platform." },
              { title: "Edge Performance", icon: <Smartphone className="w-8 h-8" />, desc: "Responsive layouts optimized for every screen size and device." },
              { title: "SEO Authority", icon: <Search className="w-8 h-8" />, desc: "Built-in technical SEO structures to dominate search engine rankings." }
            ].map((box, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border border-border/50 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                {/* Subtle Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="text-primary mb-6 group-hover:scale-110 group-hover:text-orange-500 transition-all duration-500">
                    {box.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-black mb-4 italic tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                    {box.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                    {box.desc}
                  </p>

                  {/* Interactive Accent Line */}
                  <div className="mt-8 h-1 w-0 bg-primary rounded-full group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* SERVICE GRID */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Service Suite</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group p-10 rounded-[2.5rem] bg-muted/20 border border-border/60 hover:border-primary/40 transition-all duration-300"
              >
                <div className="mb-6 p-4 w-fit rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK BENTO */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Technology Stack</span></h2>
            <p className="mt-4 text-slate-500 text-xs md:text-sm font-medium uppercase tracking-[0.2em] italic">
              The engine behind Madhya Pradesh's fastest digital platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                className="px-6 py-3 bg-card border border-border rounded-2xl text-sm font-bold shadow-sm cursor-default transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS PATH */}
      <section className="py-12 md:py-24 px-4 bg-[#fafafa] relative overflow-hidden">

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Responsive Header */}
          <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 leading-[1.1] md:leading-none">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Engineering</span> Approach
            </h2>
            <p className="text-slate-500 text-[10px] md:text-sm max-w-xl mx-auto italic uppercase tracking-[0.15em] font-medium">
              High-velocity workflow for Bhopal & Jabalpur.
            </p>
          </div>

          {/* 2. RESPONSIVE GRID (1 Column Mobile, 2 Columns Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle Background Watermark - Adjusted for Mobile */}
                <div className="absolute -top-2 -right-2 text-6xl md:text-8xl font-black text-slate-50 group-hover:text-primary/5 transition-colors italic select-none">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary text-white flex items-center justify-center font-black text-xs md:text-sm shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-lg md:text-xl tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed italic group-hover:text-slate-700 transition-colors">
                    {step.desc}
                  </p>
                </div>

                {/* Progress Bar Accent */}
                <div className="mt-6 md:mt-8 w-10 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection quote="Flexible, powerful WordPress solutions built to scale with your vision and business goals." />

      {/* FINAL CTA */}

      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">

            {/* 1. RESPONSIVE DECORATIVE ICON */}
            <div className="absolute top-0 right-0 p-4 md:p-10 opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <Code2 className="w-64 h-64 rotate-12" />
            </div>

            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Innovate with WordPress?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                Join 500+ brands powered by SocioBhaarat engineering. Let's start your technical consultation today.
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-lg md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Launch Your Project Now
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WordPressDevelopment;
