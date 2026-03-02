import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuoteSection from "@/components/ui/QuoteSection";
import {
  Palette, Users, Smartphone, Zap, Layout, Target,
  Check, ArrowRight, Sparkles, Search, MousePointer2,
  Layers, ShieldCheck, Brush, PenTool,
  Rocket,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";

const UIUXDesign = () => {
  const navigate = useNavigate();

  /* DATA */
  const services = [
    {
      icon: <Palette />,
      title: "Interface Design",
      description: "Beautiful, intuitive interfaces that users love.",
      features: ["Visual Design", "Design Systems", "Brand Integration", "Responsive Layouts"]
    },
    {
      icon: <Users />,
      title: "Experience Strategy",
      description: "Research-driven UX that converts visitors into customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: <Smartphone />,
      title: "Mobile App Design",
      description: "Native and cross-platform app designs for iOS & Android.",
      features: ["iOS/Android Design", "App Prototypes", "Micro-animations", "Animation Design"]
    },
    {
      icon: <Layout />,
      title: "Web Platforms",
      description: "Modern, conversion-focused website and dashboard designs.",
      features: ["Landing Pages", "E-commerce Design", "Dashboards", "Micro-interactions"]
    }
  ];

  const steps = [
    {
      id: "01",
      title: "Research & Discovery",
      desc: "Understanding user pain points, business goals, and conducting competitor analysis.",
      icon: <Search className="w-6 h-6 text-blue-900" />,
    },
    {
      id: "02",
      title: "Wireframing & Architecture",
      desc: "Creating low-fidelity blueprints to define the structural flow and information hierarchy.",
      icon: <Layout className="w-6 h-6 text-blue-900" />,
    },
    {
      id: "03",
      title: "Visual Design",
      desc: "Applying brand identity, typography, and colors to create high-fidelity UI screens.",
      icon: <Palette className="w-6 h-6 text-blue-900" />,
    },
    {
      id: "04",
      title: "Interactive Prototyping",
      desc: "Building clickable prototypes to simulate real user interactions and transitions.",
      icon: <MousePointer2 className="w-6 h-6 text-blue-900" />,
    },
    {
      id: "05",
      title: "Usability Testing",
      desc: "Validating designs with real users to identify friction points and areas for improvement.",
      icon: <Users className="w-6 h-6 text-blue-900" />,
    },
    {
      id: "06",
      title: "Design Handoff",
      desc: "Providing developers with documented assets, specs, and style guides for production.",
      icon: <Rocket className="w-6 h-6 text-blue-900" />,
    },
  ];

  const technologies = [
    "Figma", "Adobe XD", "Sketch", "Framer", "Miro", "InVision", "Photoshop", "Illustrator"
  ];

  return (
    <div className="min-h-screen bg-background ">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* 1. TECHNICAL BACKGROUND ARCHITECTURE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Blueprint Grid Overlay - Represents the Wireframing Phase */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />

          {/* Atmospheric Mesh Blobs */}
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/5 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />

        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <Palette className="w-3 h-3" /> Human-Interface Lab
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Design <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                  Intuitive & Impactful
                </span> User Experiences.
              </h1>

              <p className="text-base md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                "We bridge the gap between complex technology and human emotion, crafting interfaces that drive engagement and loyalty across Madhya Pradesh."
              </p>

              <div className="flex justify-start pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-10 h-14 md:h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Start Your Design Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Proof (UX Bento) */}
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
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                    alt="UI/UX Research and Design Dashboard"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Floating Mini-Metric Overlay */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Usability</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-black text-slate-900">95% CSAT</p>
                      <Heart size={16} className="text-red-500 fill-red-500" />
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



      {/* WHY CHOOSE US (SPOTLIGHT) */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight">The Designer's Edge</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We blend the psychology of user behavior with the art of visual storytelling to create products that don't just work—they resonate.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-background rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl font-black text-orange-500">500+</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Successful Projects</p>
                </div>
                <div className="p-4 bg-background rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl font-black text-blue-600">98%</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {[
                { title: "Experienced UI/UX Team", icon: <Users /> },
                { title: "User-Centered Approach", icon: <Target /> },
                { title: "Research-Driven Strategy", icon: <Search /> },
                { title: "Clean Visual Aesthetic", icon: <Palette /> },
                { title: "Prototyping & Testing", icon: <Layers /> },
                { title: "Collaborative Process", icon: <MousePointer2 /> }
              ].map((item, idx) => (
                <motion.div key={idx} whileHover={{ x: 10 }} className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">{item.icon}</div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (BENTO GRID) */}
      <section className="py-12 md:py-24 px-4 bg-background relative overflow-hidden">

        {/* 1. TECHNICAL BACKGROUND (Maintaining SocioBhaarat Identity) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Responsive Header */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-10 md:mb-16 text-center italic tracking-tighter leading-tight">
            Specialized <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">
              Design Solutions
            </span>
          </h2>

          {/* 2. ADAPTIVE GRID (1 col mobile, 2 cols desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="group relative p-6 sm:p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] bg-muted/20 border border-border/60 overflow-hidden transition-all duration-500"
              >
                {/* Responsive Icon Watermark */}
                <div className="absolute top-0 right-0 p-6 md:p-8 text-primary/10 group-hover:scale-110 md:group-hover:scale-125 transition-transform pointer-events-none">
                  {React.cloneElement(service.icon as React.ReactElement, {
                    size: typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 100
                  })}
                </div>

                <div className="relative z-10">
                  {/* Fluid Typography for Headings */}
                  <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed italic pr-8">
                    {service.description}
                  </p>

                  {/* 3. RESPONSIVE FEATURE GRID (Stays as 2 cols but adjusts text size) */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-xs font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                        <Zap className="h-3 w-3 md:h-4 md:w-4 text-orange-500 fill-orange-500/20" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Accent Line */}
                  <div className="mt-8 h-1 w-0 bg-primary rounded-full group-hover:w-16 transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PATH TO DISCOVERY (ROADMAP) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Design Roadmap</span>
            </h2>
          </div>

          {/* Roadmap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden"
              >
                {/* Background Step Number */}
                <span className="absolute top-6 right-10 text-7xl font-bold text-gray-200 italic select-none group-hover:text-gray-300 transition-colors duration-300">
                  {step.id}
                </span>

                {/* Icon Container */}
                <div className="mb-6 relative z-10">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 italic leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH CLOUD */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Designer's Toolkit</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                className="px-6 py-3 bg-card border border-border rounded-2xl text-sm text-center font-bold shadow-sm transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection quote="Design is not decoration — it’s the bridge between a brand's logic and a user's soul." />

      {/* FINAL CTA */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">

            {/* 1. RESPONSIVE DECORATIVE ICON (Scaled and hidden on small mobiles if needed) */}
            <div className="absolute top-0 right-0 p-4 md:p-10 opacity-10 pointer-events-none transition-transform duration-700 group-hover:rotate-[25deg] group-hover:scale-110">
              <Smartphone className="w-32 h-32 md:w-64 md:h-64 rotate-12" />
            </div>

            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Refine <br className="hidden md:block" /> Your User Journey?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                Get a professional UX audit and a high-fidelity <br className="hidden sm:block" /> visual strategy for your next digital product.
              </p>

              {/* 3. ADAPTIVE BUTTON (Full width on mobile, centered on desktop) */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-lg md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-wrap text-primary hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Start Your Design Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;