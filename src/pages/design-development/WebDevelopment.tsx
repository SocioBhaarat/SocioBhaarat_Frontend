import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import {
  Check, Code, Smartphone, Zap, Lock, Rocket, Globe, Layers,
  Layout, Palette, Users, ArrowRight, MousePointer2, Settings2,
  Terminal, Database, Cpu, MonitorCheck,
  Code2,
  Server,
  ShoppingBag,
  Search,
  ShieldCheck,
  Target,
  Box,
  Globe2,
  Shield,
  Wind
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const WebDevelopment = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
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

  const processes = [
    { title: "Requirement Analysis & Planning", desc: "We understand your goals, target audience, and business requirements to create a strategic roadmap." },
    { title: "UI/UX Design", desc: "Crafting intuitive, engaging, and user-focused designs that align with your brand identity." },
    { title: "Frontend & Backend Development", desc: "Developing scalable, secure, and high-performance architecture using modern technologies." },
    { title: "Testing & Quality Assurance", desc: "Comprehensive testing to ensure performance, security, responsiveness, and bug-free deployment." },
    { title: "Deployment", desc: "Smooth and optimized deployment with performance checks and final verification." },
    { title: "Ongoing Support & Optimization", desc: "Continuous monitoring, updates, and improvements to keep your website future-ready." },
  ];

  const process = [
    { title: "Client Requirements", desc: "We begin by deep-diving into your business logic. This isn't just a meeting; it's a strategic session where we gather unique requirements to grasp your vision and technical goals." },
    { title: "Customized Plan", desc: "Every project is unique. We engineer a bespoke development roadmap, selecting the right tech stack (MERN/Next.js) to ensure your platform is built for speed and long-term scalability." },
    { title: "Wireframe", desc: "We map out the user journey with high-fidelity wireframes. This architectural skeletal structure ensures the UX logic is flawless before we move into visual development." },
    { title: "Design Approval", desc: "Our creative lab presents the UI mockups. We iterate based on your feedback until the aesthetic perfectly aligns with your brand’s digital identity and market positioning." },
    { title: "Website Designing", desc: "Moving from wireframes to vibrant visuals. We create smooth, high-end interactions and responsive layouts that ensure a premium feel across all modern devices." },
    { title: "Website Development", desc: "This is where our engineering power shines. We write clean, semantic code and build robust backend systems to turn designs into a high-performance digital engine." },
    { title: "Testing By Experts", desc: "Zero compromise on quality. Our QA team performs rigorous stress tests, security audits, and cross-browser checks to ensure 100% stability at launch." },
    { title: "Launch Website", desc: "Deployment day. We handle the server configuration, cloud migration, and final optimizations to ensure your brand goes live with a sub-second LCP score." },
  ];

  const whyChooseUs = [
    {
      icon: Code,
      title: "Experienced Developers",
      desc: "Our engineering team specializes in the MERN stack and Next.js, building clean, modular codebases that eliminate technical debt. We focus on long-term stability, ensuring your platform remains agile, stable, and easy to upgrade as global web standards evolve."
    },
    {
      icon: Layers,
      title: "Custom-Built Solutions",
      desc: "We move beyond generic templates to build high-performance digital ecosystems engineered to solve your specific business challenges. Every line of code is written to perfectly reflect your brand’s identity while maintaining a flexible architecture ready for future-ready expansion."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      desc: "With mobile traffic dominating the market, we utilize advanced CSS frameworks and Framer Motion to ensure your site feels like a native app. Our layouts undergo rigorous testing across various screen resolutions to guarantee zero compromise on speed, accessibility, or visual impact."
    },
    {
      icon: Globe,
      title: "SEO-Optimized Code",
      desc: "We bake technical SEO into the DNA of your site—integrating Semantic HTML5, Schema.org markup, and JSON-LD structured data. This engineering-first approach ensures that search engines can easily index your content, giving your business a significant competitive advantage from day one."
    },
    {
      icon: Lock,
      title: "Secure Architecture",
      desc: "Security is the foundation of digital trust. We implement military-grade SSL encryption, secure API endpoints, and multi-layer firewall protections. Our deployment strategy utilizes scalable cloud hosting to ensure 99.9% uptime and lightning-fast content delivery for your global audience."
    },
    {
      icon: Rocket,
      title: "Timely Delivery",
      desc: "We believe in transparency through engineering precision. Using Agile methodology, we break your project into clear, trackable milestones with regular updates. This ensures that your high-performance system is delivered strictly on schedule, fully optimized, and ready to dominate your market."
    },
  ];

  const technologies = [
    "React.js", "Next.js", "Three.js", "Node.js", "Express.js",
    "MongoDB", "MySQL", "GSAP", "Framer Motion", "WordPress",
    "Tailwind CSS", "TypeScript"
  ];

  const techStack = [
    {
      category: "Frontend Architecture",
      items: [
        { name: "React.js", icon: <Layout className="w-6 h-6" /> },
        { name: "Next.js", icon: <Zap className="w-6 h-6" /> },
        { name: "TypeScript", icon: <Code2 className="w-6 h-6" /> },
        { name: "Tailwind CSS", icon: <Wind className="w-6 h-6" /> },
        { name: "Redux Toolkit", icon: <Box className="w-6 h-6" /> },
        { name: "Three.js", icon: <Globe2 className="w-6 h-6" /> }
      ]
    },
    {
      category: "Backend & Logic",
      items: [
        { name: "Node.js", icon: <Server className="w-6 h-6" /> },
        { name: "Express.js", icon: <Cpu className="w-6 h-6" /> },
        { name: "Python", icon: <Code2 className="w-6 h-6" /> },
        { name: "GraphQL", icon: <Layers className="w-6 h-6" /> },
        { name: "PHP", icon: <Server className="w-6 h-6" /> },
        { name: "WordPress", icon: <Globe2 className="w-6 h-6" /> }
      ]
    },
    {
      category: "Data & Infrastructure",
      items: [
        { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
        { name: "MySQL", icon: <Database className="w-6 h-6" /> },
        { name: "Firebase", icon: <Zap className="w-6 h-6" /> },
        { name: "AWS", icon: <Shield className="w-6 h-6" /> },
        { name: "Docker", icon: <Box className="w-6 h-6" /> },
        { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> }
      ]
    },
    {
      category: "Animation & Motion",
      items: [
        { name: "GSAP", icon: <Zap className="w-6 h-6" /> },
        { name: "Framer Motion", icon: <Smartphone className="w-6 h-6" /> },
        { name: "Canvas API", icon: <Layout className="w-6 h-6" /> },
        { name: "Lottie", icon: <Zap className="w-6 h-6" /> }
      ]
    }
  ];

  const businessNeeds = [
    {
      title: "Speed as a Feature",
      desc: "In the modern economy, 90% of users bounce if a site takes over 3 seconds to load. Our high-performance Node.js and React stack ensures sub-second deployments and lightning-fast interactions to keep your audience engaged.",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      metric: "0.8s LCP"
    },
    {
      title: "SEO-Native Code",
      desc: "We don't just 'add SEO' later; we bake it into the DNA of your site. We build with semantic HTML5, JSON-LD schema markup, and optimized metadata from the first line of code to ensure maximum search engine visibility.",
      icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
      metric: "100/100 Audit"
    },
    {
      title: "Conversion Logic",
      desc: "Every pixel is placed based on conversion-focused psychological triggers and real-world heat-map data. We engineer user paths that guide visitors toward measurable actions, turning passive traffic into consistent revenue.",
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
      metric: "+40% ROI"
    },
    {
      title: "Scalable Core",
      desc: "Your digital presence should grow as fast as your business. Our modular architecture allows for seamless feature integration and high-concurrency handling, providing a future-ready foundation that handles massive traffic spikes.",
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
      metric: "99.9% Uptime"
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 font-montserrat">

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
                <Code2 className="w-3 h-3" /> Build High Performing Websites
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Web Development</span> Services.
              </h1>

              <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                From Bhopal and Jabalpur, we design and develop modern, responsive, and conversion-focused websites for businesses worldwide, helping them build a strong digital presence and achieve measurable growth.
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
      {/* <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">Socio Bhaarat</span> for Web Development?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base px-4">
              We combine technology, creativity, and strategic thinking to build websites that are fast, secure, scalable, and aligned with your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
      
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 relative z-10">

        
          <div className="mb-20">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-[8px] font-black uppercase tracking-[0.3em] mb-6">
              SocioBhaarat_Systems v1.0
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              Why Choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium pr-4 -mr-4 overflow-visible">
                Our Architecture
              </span>
            </h3>
          </div>

          <div className="border-t border-slate-200">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 md:grid-cols-12 py-8 md:py-12 border-b border-slate-100 items-center hover:bg-slate-50/50 transition-colors px-4 -mx-4 rounded-xl"
              >
               
                <div className="md:col-span-1 mb-4 md:mb-0">
                  <span className="text-xs font-black text-slate-300 group-hover:text-primary transition-colors">
                    [ 0{index + 1} ]
                  </span>
                </div>

            
                <div className="md:col-span-4 flex items-center gap-4 mb-4 md:mb-0">
                  <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-100 text-primary group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight italic">
                    {feature.title}
                  </h4>
                </div>

               
                <div className="md:col-span-7">
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium italic border-l-2 border-transparent group-hover:border-primary/20 pl-0 group-hover:pl-6 transition-all duration-500">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      
      */}

      <section className="py-24 md:py-20 bg-white relative overflow-hidden">

        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">
          {/* Section Header */}
          <div className="mb-20 md:mb-20 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium inline-block pr-6 -mr-6 overflow-visible">
                Socio Bhaarat
              </span> for Web Development?
            </h2>
            <p className="text-slate-700 text-lg md:text-2xl max-w-7xl font-medium leading-relaxed">
              We move beyond standard development. Our lab builds <span className="text-slate-900 font-bold underline decoration-primary/30 decoration-4 underline-offset-4">scalable digital ecosystems</span> through precise code and strategic market intelligence.
            </p>
          </div>

          {/* The Technical Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Decorative Corner Accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-slate-200 group-hover:border-primary transition-colors z-20" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-slate-200 group-hover:border-secondary transition-colors z-20" />

                {/* Icon Section: Floating Glass Style */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <feature.icon className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                </div>

                <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 p-8 md:p-12 rounded-tr-[4rem] rounded-bl-[4rem] group-hover:bg-white group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] group-hover:border-primary/20 transition-all duration-700 h-full flex flex-col justify-between relative overflow-hidden">

                  <div className="space-y-6 pr-12 md:pr-16">

                    <h3 className="text-2xl md:text-4xl font-black text-slate-900 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 text-base md:text-xl leading-relaxed tracking-wide font-semibold border-l-2 border-slate-100 group-hover:border-primary/30 pl-6 transition-all">
                      {feature.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why do you need Web Development */}
      {/* <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 italic">System Intelligence</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-6">
              Why Your Business Needs <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium pr-4 -mr-4 overflow-visible leading-[1.2]">
                Performance Engineering
              </span>
            </h3>
            <p className="text-slate-500 text-lg italic font-medium leading-relaxed border-l-4 border-primary/20 pl-6">
              A website is not a digital brochure; it is a high-speed conversion engine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Speed as a Feature",
                desc: "90% of users bounce if a site takes >3s to load. Our stack ensures sub-second deployments.",
                icon: <Zap className="w-6 h-6" />,
                metric: "0.8s LCP"
              },
              {
                title: "SEO-Native Code",
                desc: "We build with semantic HTML and schema markup from the first line of code.",
                icon: <Search className="w-6 h-6" />,
                metric: "100/100 Audit"
              },
              {
                title: "Conversion Logic",
                desc: "Pixels placed based on psychological triggers and heat-map data to drive action.",
                icon: <Target className="w-6 h-6" />,
                metric: "+40% ROI"
              },
              {
                title: "Scalable Core",
                desc: "Modular architecture allows for easy feature integration as your business scales.",
                icon: <ShieldCheck className="w-6 h-6" />,
                metric: "99.9% Uptime"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }} // Subtle scale instead of lifting
                className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary/20"
              >
  
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 mb-6 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors italic">
                  {item.title}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-hover:text-secondary transition-colors">
                    {item.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}


      {/* <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">
          
          <div className="mb-20 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
              Why Your Business Needs a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible leading-[1.2]">
                Strong Web Presence
              </span>
            </h2>
            <p className="text-slate-700 text-lg md:text-2xl max-w-7xl font-medium leading-relaxed border-l-4 border-primary/20 pl-6">
              A website is not a digital brochure; it is a high-speed conversion engine.
            </p>
          </div>

         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
            {businessNeeds.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative h-full"
              >

                <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                </div>

                <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 p-8 md:p-12 rounded-tr-[4rem] rounded-bl-[4rem] group-hover:bg-white group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] group-hover:border-primary/20 transition-all duration-700 h-full flex flex-col justify-between relative overflow-hidden">

                  <div className="space-y-6 pr-12 md:pr-16">

                    <h4 className="text-2xl md:text-4xl font-black text-slate-900 group-hover:text-primary transition-colors tracking-tight italic">
                      {item.title}
                    </h4>

                    <p className="text-slate-600 text-base md:text-xl leading-relaxed tracking-wide font-semibold border-l-2 border-slate-100 group-hover:border-primary/30 pl-6 transition-all">
                      {item.desc}
                    </p>
                  </div>

               
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-hover:text-secondary transition-colors">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-24 md:py-20 bg-slate-50 relative overflow-hidden">
        {/* Background: Data Stream dots instead of grid */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">
          {/* Section Header */}
          <div className="mb-20 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
              Why Your Business Needs a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible leading-[1.2]">
                Strong Web Presence
              </span>
            </h2>
            <p className="text-slate-700 text-lg md:text-2xl max-w-7xl font-medium leading-relaxed border-l-4 border-primary/20 pl-6">
              A website is not a digital brochure; it is a high-speed conversion engine.
            </p>
          </div>

          {/* The Intelligence Grid: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {businessNeeds.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex gap-6 md:gap-10 p-8 md:p-12 bg-white/40 backdrop-blur-md border-4 border-slate-200 hover:border-primary transition-all duration-500 rounded-2xl relative"
              >
                {/* 1. Large Dynamic Number Background */}
                <span className="absolute top-4 right-8 text-7xl md:text-9xl font-black text-slate-100 group-hover:text-primary/5 transition-colors -z-10">
                  0{idx + 1}
                </span>

                {/* 2. Left Side: Icon & Vertical Meter */}
                <div className="flex flex-col items-center gap-4 shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border-4 border-slate-50">
                    {item.icon}
                  </div>
                  <div className="w-1 h-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      whileInView={{ height: ["0%", "100%"] }}
                      transition={{ duration: 1.5, delay: idx * 0.2 }}
                      className="w-full bg-gradient-to-b from-primary to-orange-500"
                    />
                  </div>
                </div>

                {/* 3. Right Side: Content (Exact Font Specs) */}
                <div className="space-y-6">
                  <h4 className="text-2xl md:text-4xl font-black text-slate-900 group-hover:text-primary transition-colors tracking-tight italic">
                    {item.title}
                  </h4>

                  {/* Same Font Specs: text-base/text-xl, font-semibold, pl-6 border */}
                  <p className="text-slate-600 text-base md:text-xl leading-relaxed tracking-wide font-semibold border-l-2 border-slate-200 group-hover:border-primary/30 pl-6 transition-all">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-hover:text-secondary transition-colors">
                      {item.metric}
                    </span>
                    <div className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 group-hover:bg-primary group-hover:text-white transition-colors">
                      SYSTEM_STABLE
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* SERVICES */}
      {/* < section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden" >
        < div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 blur-[80px] md:blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto max-w-6xl relative z-10 px-4">
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs"
            >
              Enterprise Grade
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 md:mt-3 tracking-tight leading-tight">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">Socio Bhaarat</span> Brings to the Table
            </h2>
          </div>

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

                <div className="absolute -right-6 -bottom-6 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-700 pointer-events-none">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 100 })}
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
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
      </section > */}

      <section className="py-24 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">
          {/* Section Header: Shifted Left for Modern Engineering Feel */}
          <div className="mb-20 md:mb-10 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-none mb-8">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible">Socio Bhaarat</span> Brings to the Table
            </h2>
            <p className="text-slate-500 text-lg md:text-2xl max-w-8xl font-medium leading-relaxed border-l-4 border-primary/20 pl-6">
              Industrial-strength architecture tailored for high-growth business scalability and engineered for performance
            </p>
          </div>

          {/* The Technical Rows: No Empty Space */}
          <div className="border-t border-slate-200">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 md:grid-cols-12 py-5 border-b border-slate-100 items-center hover:bg-slate-50/50 transition-all duration-500 px-6 -mx-6 rounded-2xl relative overflow-hidden"
              >
                {/* 1. Technical Index */}
                <div className="md:col-span-1 mb-6 md:mb-0">
                  <span className="text-xs font-black text-slate-300 group-hover:text-primary transition-colors font-mono">
                    [ 0{index + 1} ]
                  </span>
                </div>

                {/* 2. Icon & Title Section */}
                <div className="md:col-span-4 flex items-center gap-6 mb-6 md:mb-0">
                  <div className="relative">
                    {/* Animated Ring around icon */}
                    <div className="absolute inset-0 border border-primary/20 rounded-2xl group-hover:scale-125 group-hover:rotate-45 transition-all duration-700" />
                    <div className="p-4 md:p-5 rounded-2xl bg-white shadow-sm border border-slate-100 text-primary relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6 md:w-8 md:h-8" })}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* 3. Detailed Description (3-4 Lines to fill space) */}
                <div className="md:col-span-7 relative">
                  <p className="text-slate-600 text-base md:text-xl leading-relaxed tracking-wide font-semibold border-l-2 border-slate-100 pl-8 group-hover:border-primary/30 group-hover:pl-10 transition-all duration-500">
                    We deliver industrial-strength {service.title.toLowerCase()} engineered to dominate competitive market landscapes. Our architecture focuses on high-concurrency handling, military-grade security, and seamless scalability to ensure your business stays ahead of the curve.
                  </p>

                </div>

                {/* Background Watermark (Specific to the row) */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[10rem] font-black text-slate-900/[0.02] pointer-events-none select-none group-hover:text-primary/[0.03] transition-colors">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* TECHNOLOGIES */}
      {/* < section className="py-24 bg-background border-y border-border" >
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium pr-4 -mr-4 overflow-visible">Technology Stack</span></h2>
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
      </section > */}

      {/* <section className="py-24 bg-white relative overflow-hidden">

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Technology Stack</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-black uppercase tracking-[0.3em] italic">
              The engine behind Madhya Pradesh's fastest digital platforms.
            </p>
          </div>

          
          <div className="space-y-16">
            {techStack.map((group, groupIdx) => (
              <div key={groupIdx} className="relative">
               
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-sm font-black uppercase tracking-widest text-primary italic whitespace-nowrap">
                    {group.category}
                  </h3>
                  <div className="h-px w-full bg-slate-100" />
                </div>

                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {group.items.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.05)",
                        borderColor: "rgba(59, 130, 246, 0.3)"
                      }}
                      className="flex items-center gap-3 px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl transition-all group cursor-default"
                    >
                      <div className="text-slate-400 group-hover:text-primary transition-colors">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      <section className="py-20 bg-slate-50 relative overflow-hidden">


        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-2 leading-none">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible leading-normal">Technology Stack</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-xl font-bold">
              Building the future with industry-leading infrastructure.
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((group, groupIdx) => (
              <motion.div
                key={groupIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 group"
              >

                <div className="bg-slate-900 p-4">
                  <h3 className="text-lg md:text-xl font-black text-white">
                    {group.category}
                  </h3>
                </div>


                <div className="flex-grow">
                  {group.items.map((tech, techIdx) => (
                    <div
                      key={techIdx}
                      className="flex items-center gap-4 px-5 py-2 border-b border-slate-100 last:border-b-0 group-hover:bg-slate-50/50 transition-colors"
                    >

                      <div className="text-slate-400 group-hover:text-primary transition-all duration-300 transform group-hover:scale-110">
                        {tech.icon}
                      </div>


                      <span className="text-base md:text-lg font-bold text-slate-700 tracking-tight">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>


                <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      {/* < section className="py-12 md:py-24 bg-[#fafafa] relative overflow-hidden" >

        <div className="container mx-auto max-w-6xl relative z-10 px-4">
          <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 leading-[1.1] md:leading-none">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible">Development</span> Process
            </h2>
            <p className="text-slate-500 text-[10px] md:text-sm max-w-xl mx-auto italic uppercase tracking-[0.15em] font-medium">
              High-velocity workflow for Bhopal & Jabalpur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
  
                <div className="absolute -top-2 -right-0 text-6xl md:text-8xl font-black text-slate-50 group-hover:text-primary/5 transition-colors italic select-none">
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

                <div className="mt-6 md:mt-8 w-10 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section > */}

      <section className="py-20 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">

          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-serif font-medium">Development</span> Process
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
              From strategic gathering to high-velocity deployment, we focus on every detail to deliver reliable solutions that help your business scale quickly.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {process.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className="flex flex-col items-center cursor-pointer group"
              >
                <span className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors ${activeStep === index ? 'text-primary' : 'text-slate-400'}`}>
                  Step {index + 1}
                </span>

                <div className={`
                relative w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center text-center p-3 transition-all duration-500 border-4 shadow-sm
                ${activeStep === index
                    ? 'border-primary bg-white scale-110 shadow-xl'
                    : 'border-transparent bg-white hover:border-slate-200'}
              `}>
                  <p className={`text-[10px] md:text-xs font-black leading-tight ${activeStep === index ? 'text-slate-900' : 'text-slate-400'}`}>
                    {step.title}
                  </p>

                  {/* Arrow indicator for active step */}
                  {activeStep === index && (
                    <motion.div
                      layoutId="arrow"
                      className="absolute -bottom-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-primary"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 2. THE CONTENT BOX (Active Step Details) */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-primary/5 flex items-center justify-center text-primary text-3xl md:text-4xl font-bold">
                    0{activeStep + 1}
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-4xl font-black text-slate-900 group-hover:text-primary">
                      {process[activeStep].title}
                    </h3>

                    {/* Exact Font Specs: text-base/text-xl, font-semibold */}
                    <p className="text-slate-600 text-base md:text-xl leading-relaxed tracking-wide font-semibold border-l-2 border-slate-100 group-hover:border-primary/30 pl-6 transition-all">
                      {process[activeStep].desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <QuoteSection
        quote="We don’t just build websites. We create complete digital solutions that help businesses grow."
      />

      {/* FINAL CTA */}
      <section className="py-12 md:py-24 sm:px-6">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">

            {/* 1. RESPONSIVE DECORATIVE ICON */}
            <div className="absolute top-0 right-0 p-4 md:p-10 opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <Code className="w-32 h-32 md:w-64 md:h-64" />
            </div>

            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 text-white italic leading-tight uppercase">
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
    </div >
  );
};

export default WebDevelopment;