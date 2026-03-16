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
import { CTASection } from "@/components/ui/CTASection";
import ProcessSection from "@/components/DevelopmentProcess";

const UIUXDesign = () => {
  const navigate = useNavigate();

  /* DATA */
  const services = [
    {
      icon: <Palette />,
      title: "Interface Design",
      description: "Beautiful, intuitive interfaces that users love.",
      features: ["Visual Design", "Design Systems", "Brand Integration", "Responsive Layouts"],
      btnText: "Request a Design Quote"
    },
    {
      icon: <Users />,
      title: "Experience Strategy",
      description: "Research-driven UX that converts visitors.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      btnText: "Get Research Insights"
    },
    {
      icon: <Smartphone />,
      title: "Mobile App Design",
      description: "App designs for iOS & Android ecosystems.",
      features: ["iOS/Android Design", "App Prototypes", "Micro-animations", "UI Graphics"],
      btnText: "Start Mobile Project"
    },
    {
      icon: <Layout />,
      title: "Web Platforms",
      description: "Conversion-focused dashboard designs.",
      features: ["Landing Pages", "E-commerce Design", "Dashboards", "Micro-interactions"],
      btnText: "Start Web Design"
    }
  ];

  const steps = [
    {
      id: "01",
      title: "Research & Discovery",
      color: "#2563eb", // Blue
      desc: "We perform a deep dive into user psychology, business objectives, and market trends. By analyzing competitor landscapes, we establish a data-driven foundation that informs every strategic design decision moving forward.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      id: "02",
      title: "Wireframing & Architecture",
      color: "#4f46e5", // Indigo
      desc: "Our team constructs detailed low-fidelity blueprints to map out the structural skeleton of your product. We focus on defining the information hierarchy and user flow to ensure intuitive navigation and logical interactions.",
      icon: <Layout className="w-6 h-6" />,
    },
    {
      id: "03",
      title: "Visual Design",
      color: "#7c3aed", // Violet
      desc: "We transform structural wireframes into stunning high-fidelity interfaces. By carefully selecting typography, brand-aligned color palettes, and modern UI elements, we create a visual language that resonates deeply with your target audience.",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      id: "04",
      title: "Interactive Prototyping",
      color: "#db2777", // Pink
      desc: "Building high-fidelity clickable prototypes that simulate the final product experience. This stage allows stakeholders to experience real user interactions, transitions, and micro-animations before a single line of production code is written.",
      icon: <MousePointer2 className="w-6 h-6" />,
    },
    {
      id: "05",
      title: "Usability Testing",
      color: "#0d9488", // Teal
      desc: "We validate our design hypotheses with real-world users to identify potential friction points. This iterative testing process ensures the final interface is not only beautiful but also highly functional and accessible.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: "06",
      title: "Design Handoff",
      color: "#059669", // Green
      desc: "Our seamless transition to development involves providing engineers with comprehensive documentation, pixel-perfect assets, and interactive style guides. We ensure the final production build matches the design vision with absolute precision.",
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  const designStack = [
    { name: "Figma", logo: "figma", color: "#F24E1E", desc: "Main UI Tool" },
    { name: "Adobe XD", logo: "xd", color: "#FF61F6", desc: "Prototyping" },
    { name: "Framer", logo: "framer", color: "#0055FF", desc: "High-Fidelity" },
    { name: "Sketch", logo: "sketch", color: "#FDB300", desc: "Design System" },
    { name: "Miro", logo: "miro", color: "#FFD02F", desc: "Brainstorming" }, // Miro fallback niche handle kiya hai
    { name: "InVision", logo: "invision", color: "#FF3366", desc: "Collaboration" },
    { name: "Photoshop", logo: "ps", color: "#31A8FF", desc: "Image Editing" },
    { name: "Illustrator", logo: "ai", color: "#FF9A00", desc: "Vector Art" },
  ];

  return (
    <div className="min-h-screen bg-background ">

      {/* HERO SECTION */}

      <section className="relative pb-10 flex items-start overflow-hidden bg-[#fafafa]">
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
                <Palette className="w-3 h-3" /> UI & UX Design
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Design Experiences
                </span> That Users Love
              </h1>

              <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                We bridge the gap between complex technology and human emotion, crafting interfaces that drive engagement and loyalty across Madhya Pradesh.
              </p>

              <div className="flex justify-start pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Start Your Design journey
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
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                    alt="UI/UX Research and Design Dashboard"
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

      {/* WHY CHOOSE US (SPOTLIGHT) */}
      <section className="py-24 bg-muted/30 border-y border-border overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">Socio Bhaarat</span></h2>
              <p className="text-muted-foreground md:text-lg mb-8 leading-relaxed">
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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible">Services</span>
            </h2>
          </div>

          {/* Services Grid (4 Columns on Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="flex flex-col bg-white border border-slate-200 rounded-[2.5rem] shadow-sm overflow-hidden group transition-all duration-300 hover:shadow-2xl"
              >
                {/* Card Header: Deep Blue (Replacing Black) */}
                <div className="bg-blue-900 p-8 relative overflow-hidden">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="flex items-center gap-4 relative z-10">
                    {/* Circular Icon (Orange Accent) */}
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      {React.cloneElement(service.icon as React.ReactElement, { size: 24, strokeWidth: 2.5 })}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-slate-500 text-sm md:text-md mb-8 font-medium">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-10 flex-grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-slate-700">
                        <Check className={`h-4 w-4 mt-1 flex-shrink-0`} />
                        <span className="text-[14px] md:text-sm font-bold leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PATH TO DISCOVERY (ROADMAP) */}

      <ProcessSection
        titlePrefix="Our"
        highlightedWord="Design"
        titleSuffix="Process"
        description="A user-centric creative workflow that translates complex business requirements into intuitive and aesthetic digital experiences."
        process={steps}
      />

      {/* TECH CLOUD */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Abstract Design Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 leading-none">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible leading-normal">Technology Stack</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-xl font-bold">
              Building the future with industry-leading infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {designStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] flex flex-col items-center justify-center transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
              >
                {/* Tool Icon with Dynamic Glow */}
                <div className="relative mb-6">
                  <div
                    className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-3xl shadow-sm border border-slate-100 group-hover:border-transparent group-hover:rotate-6 transition-all duration-500">
                    {tech.name === "InVision" ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-10 h-10 md:w-12 md:h-12"
                        fill={tech.color}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.258c-3.456 0-6.258-2.802-6.258-6.258 0-3.456 2.802-6.258 6.258-6.258 3.456 0 6.258 2.802 6.258 6.258 0 3.456-2.802 6.258-6.258 6.258zm2.419-6.258c0 1.336-1.083 2.419-2.419 2.419s-2.419-1.083-2.419-2.419 1.083-2.419 2.419-2.419 2.419 1.083 2.419 2.419z" />
                      </svg>
                    ) : (<img
                      // Primary: Simple Icons CDN
                      src={`https://cdn.simpleicons.org/${tech.logo}`}
                      alt={tech.name}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Fallback 1: Try Skill Icons (Short names)
                        if (!target.src.includes('skillicons')) {
                          const shortName = tech.name.toLowerCase().includes('photoshop') ? 'ps' :
                            tech.name.toLowerCase().includes('illustrator') ? 'ai' :
                              tech.name.toLowerCase().includes('xd') ? 'xd' : tech.logo;
                          target.src = `https://skillicons.dev/icons?i=${shortName}`;
                        } else {
                          target.src = "https://cdn.simpleicons.org/codesandbox";
                        }
                      }}
                    />
                    )}
                  </div>
                </div>

                {/* Tool Info */}
                <h3 className="text-lg md:text-xl font-bold text-slate-800">
                  {tech.name}
                </h3>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-2">
                  {tech.desc}
                </p>

                {/* Unique "Artboard" Corner */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: tech.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection quote="Design is not decoration — it’s the bridge between a brand's logic and a user's soul." />

      {/* FINAL CTA */}

      <CTASection
        title={<>Ready to Refine <br className="hidden md:block" /> Your User Journey?</>}
        description={<>Get a professional UX audit and a high-fidelity <br className="hidden sm:block" /> visual strategy for your next digital product.</>}
        buttonText="Start Your Design Audit"
      />
    </div>
  );
};

export default UIUXDesign;