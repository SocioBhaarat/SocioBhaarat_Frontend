import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import {
  Check, Code, Smartphone, Zap, Lock, Rocket, Globe, Layers,
  Layout, Palette, Users, ArrowRight, MousePointer2, Settings2,
  Terminal, Database, Cpu, MonitorCheck,
  Code2,
  Server,
  ShoppingBag
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";

const WebDevelopment = () => {
  const navigate = useNavigate();

  /* DATA */
  const services = [
    { title: "Corporate Websites", icon: <Globe /> },
    { title: "E-commerce Platforms", icon: <MonitorCheck /> },
    { title: "Landing Pages", icon: <MousePointer2 /> },
    { title: "Web Applications", icon: <Cpu /> },
    { title: "Progressive Web Apps (PWA)", icon: <Smartphone /> },
    { title: "API Development & Integration", icon: <Terminal /> },
    { title: "Website Redesign", icon: <Palette /> },
    { title: "Website Maintenance", icon: <Settings2 /> },
    { title: "Performance Optimization", icon: <Zap /> },
  ];

  const process = [
    { title: "Requirement Analysis & Planning", desc: "We understand your goals, target audience, and business requirements to create a strategic roadmap." },
    { title: "UI/UX Design", desc: "Crafting intuitive, engaging, and user-focused designs that align with your brand identity." },
    { title: "Frontend & Backend Development", desc: "Developing scalable, secure, and high-performance architecture using modern technologies." },
    { title: "Testing & Quality Assurance", desc: "Comprehensive testing to ensure performance, security, responsiveness, and bug-free deployment." },
    { title: "Deployment", desc: "Smooth and optimized deployment with performance checks and final verification." },
    { title: "Ongoing Support & Optimization", desc: "Continuous monitoring, updates, and improvements to keep your website future-ready." },
  ];

  const whyChooseUs = [
    { icon: Code, title: "Experienced Developers", desc: "Skilled professionals with hands-on expertise in modern frameworks and scalable architecture." },
    { icon: Layers, title: "Custom-Built Solutions", desc: "Every website is tailored to your business needs with flexible and future-ready development." },
    { icon: Smartphone, title: "Mobile-First Design", desc: "Seamless experience across all devices with optimized layouts and smooth interactions." },
    { icon: Globe, title: "SEO-Optimized Code", desc: "Built with technical SEO best practices to improve search visibility and performance." },
    { icon: Lock, title: "Secure Architecture", desc: "Strong security standards and scalable backend systems that grow with your business." },
    { icon: Rocket, title: "Timely Delivery", desc: "Clear communication, milestone tracking, and on-time project completion." },
  ];

  const technologies = [
    "React.js", "Next.js", "Three.js", "Node.js", "Express.js",
    "MongoDB", "MySQL", "GSAP", "Framer Motion", "WordPress",
    "Tailwind CSS", "TypeScript"
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-start overflow-hidden bg-[#fafafa]">
        {/* 1. TECHNICAL BACKGROUND DESIGN */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Grid Overlay - Matches Brand Protection Lab */}
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
                <Code2 className="w-3 h-3" /> Full-Stack Engineering Hub
              </div>

              <h1 className="font-display text-5xl sm:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Scalable Foundations</span>.
              </h1>

              <p className="text-base md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                "We engineer high-performance digital ecosystems that transform brands through custom code, seamless UX, and robust architecture."
              </p>

              <div className="flex justify-start pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Proof (Dev/Code Bento) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative group">
                {/* Decorative Glow behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl rounded-[3rem] animate-pulse" />

                <div className="relative z-10 bg-white p-3 rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                    alt="Web Development Engineering Dashboard"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Floating Mini-Metric Overlay */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Lighthouse Score</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-black text-slate-900">100/100</p>
                      <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                </div>

                {/* Framed Layer - Matching the "Legacy" section rotation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            {/* text-3xl for mobile, text-5xl for desktop */}
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base px-4">
              Why SocioBhaarat is the trusted partner for web innovation.
            </p>
          </div>

          {/* grid-cols-1 for mobile ensures cards have full width to breathe */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/50 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-5 md:mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="h-6 w-6 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed italic">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 px-4 bg-muted/30 relative overflow-hidden">
        {/* Background Decorative Element - Adjusted size for mobile */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 blur-[80px] md:blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs"
            >
              Enterprise Grade
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 md:mt-3 tracking-tight leading-tight">
              Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Solutions</span>
            </h2>
          </div>

          {/* grid-cols-1 on small mobile, sm:grid-cols-2 on small tablets, lg:grid-cols-3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-card/60 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Watermark Icon - scaled down on mobile */}
                <div className="absolute -right-6 -bottom-6 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-700 pointer-events-none">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 100 })}
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Floating Icon Container */}
                  <div className="mb-6 md:mb-8 p-3 md:p-4 rounded-2xl bg-gradient-to-br from-background to-muted border border-border shadow-inner group-hover:bg-primary  group-hover:scale-110 transition-all duration-500">
                    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-primary transition-colors">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6">
                    Industrial-strength {service.title.toLowerCase()} tailored for high-growth business scalability.
                  </p>

                  <div className="h-1 w-0 bg-primary rounded-full group-hover:w-12 transition-all duration-500" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* TECHNOLOGIES */}
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


      {/* DEVELOPMENT PROCESS */}
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

      <QuoteSection
        quote="We don’t just build websites. We engineer high-velocity digital ecosystems."
      />

      {/* FINAL CTA */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">

            {/* 1. RESPONSIVE DECORATIVE ICON */}
            <div className="absolute top-0 right-0 p-4 md:p-10 opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <Code className="w-32 h-32 md:w-64 md:h-64" />
            </div>

            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Digitize <br className="hidden md:block" /> Your Vision?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                Join 500+ brands powered by SocioBhaarat engineering. <br className="hidden sm:block" />
                Let's discuss your roadmap today.
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

export default WebDevelopment;