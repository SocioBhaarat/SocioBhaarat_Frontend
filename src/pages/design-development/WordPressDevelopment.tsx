
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
import ServiceList from "@/components/ui/ServiceList";
import { useEffect, useRef, useState } from "react";
import MatrixLayout from "@/components/ui/MatrixLayout";
import TechGrid from "@/components/ui/TechGrid";
import { CTASection } from "@/components/ui/CTASection";
import ProcessSection from "@/components/DevelopmentProcess";
import { cn } from "@/lib/utils";

const WordPressDevelopment = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Custom WordPress Development",
      icon: <Code2 />,
      color: "#2563eb", // Blue
      desc: "We engineer high-performance, bespoke site architectures from the ground up, ensuring clean code, security-first protocols, and complete scalability to handle complex business logic and high-traffic demands effortlessly."
    },
    {
      title: "Theme Customization",
      icon: <Palette />,
      color: "#7c3aed", // Violet
      desc: "Transform your brand identity with tailored visual aesthetics that prioritize user experience. We go beyond basic templates to build pixel-perfect designs that align with your unique corporate vision and conversion goals."
    },
    {
      title: "Plugin Engineering",
      icon: <Puzzle />,
      color: "#0d9488", // Teal
      desc: "Our team develops custom functional features and seamless third-party integrations, bridging the gap between standard WordPress capabilities and your specific operational requirements through rigorous, secure, and update-proof backend engineering."
    },
    {
      title: "WooCommerce Solutions",
      icon: <ShoppingCart />,
      color: "#db2777", // Pink
      desc: "Building robust digital storefronts designed for scale. From advanced product filtering to secure payment gateway integrations, we provide end-to-end e-commerce solutions that optimize the buyer journey and maximize online revenue."
    },
    {
      title: "Enterprise Websites",
      icon: <Building2 />,
      color: "#4f46e5", // Indigo
      desc: "We develop professional portals and multisite networks specifically designed for corporate growth. These platforms feature advanced permission controls, high-security standards, and integrated workflows to manage large-scale organizational content efficiently."
    },
    {
      title: "Speed & Performance",
      icon: <Gauge />,
      color: "#ea580c", // Orange
      desc: "Maximize your search rankings by optimizing for Core Web Vitals. We implement advanced caching strategies, database optimization, and image compression to ensure lightning-fast load times and a seamless user experience across devices."
    }
  ];

  const whyChooseUs = [
    { title: "Experienced Developers", desc: "Expert professionals with hands-on CMS mastery.", icon: <Users className="w-5 h-5" /> },
    { title: "Custom Theme Design", desc: "Bespoke visuals tailored to your unique brand.", icon: <Palette className="w-5 h-5" /> },
    { title: "Plugin Engineering", desc: "Seamless integration and custom logic building.", icon: <Puzzle className="w-5 h-5" /> },
    { title: "SEO-Ready Code", desc: "Optimized structure for maximum search visibility.", icon: <Search className="w-5 h-5" /> },
    { title: "Mobile-Responsive", desc: "Perfectly optimized for every modern device.", icon: <Smartphone className="w-5 h-5" /> },
    { title: "Performance First", desc: "Secure and speed-focused backend architecture.", icon: <Gauge className="w-5 h-5" /> },
  ]

  const process = [
    {
      title: "Project Discovery",
      color: "#2563eb", // Blue
      desc: "Initial deep-dive into your business goals, target audience, and functional requirements to establish a solid project foundation."
    },
    {
      title: "Strategic Roadmap",
      color: "#4f46e5", // Indigo
      desc: "Architecting the technical ecosystem, defining the sitemap, and creating a detailed timeline for milestone-driven delivery."
    },
    {
      title: "UI/UX Architecture",
      color: "#7c3aed", // Violet
      desc: "Designing high-fidelity wireframes and interactive prototypes that prioritize accessibility and mobile-first user experiences."
    },
    {
      title: "Development Phase",
      color: "#db2777", // Pink
      desc: "Engineering the backend and frontend using clean code practices with PHP, MySQL, and optimized React or Tailwind CSS."
    },
    {
      title: "Custom Integration",
      color: "#ea580c", // Orange
      desc: "Connecting third-party APIs, payment gateways, and custom plugins to extend the platform's native functional capabilities."
    },
    {
      title: "Security Audits",
      color: "#0d9488", // Teal
      desc: "Conducting rigorous penetration testing, SQL injection checks, and SSL configurations to ensure enterprise-grade data protection."
    },
    {
      title: "Performance Optimization",
      color: "#059669", // Green
      desc: "Optimizing database queries, caching layers, and Core Web Vitals to achieve lightning-fast load times and superior SEO rankings."
    },
    {
      title: "Launch & Monitoring",
      color: "#1e293b", // Slate
      desc: "Final deployment to live servers followed by 24/7 uptime monitoring and post-launch maintenance to ensure long-term stability."
    }
  ];

  const techStack = [
    {
      category: "Core Platforms",
      color: "#21759b", // WordPress Blue
      items: [
        { name: "WordPress CMS", logo: "wordpress" },
        { name: "WooCommerce", logo: "woocommerce" },
        { name: "Elementor Pro", logo: "elementor" },
      ]
    },
    {
      category: "Languages & API",
      color: "#777bb4", // PHP Purple
      items: [
        { name: "PHP", logo: "php" },
        { name: "HTML5 / CSS3", logo: "html5" },
        { name: "JavaScript", logo: "javascript" },
        { name: "Rest APIs", logo: "postman" }, // Using Postman for API representation
      ]
    },
    {
      category: "Database & Backend",
      color: "#00758f", // MySQL Blue
      items: [
        { name: "MySQL", logo: "mysql" },
        { name: "WPBakery", logo: "wordpress" }, // No official logo, using WP
      ]
    },
    {
      category: "Optimization & SEO",
      color: "#ea580c", // Optimization Orange
      items: [
        { name: "Yoast SEO", logo: "google" }, // Using Google/SEO related
        { name: "RankMath", logo: "googleanalytics" },
        { name: "WP Rocket", logo: "rocket" }, // Generic rocket icon
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

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
                <Wrench className="w-3 h-3" /> Managed Ecosystems Lab
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                Custom <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Wordpress Websites</span> That Drive Growth.
              </h1>

              <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                We design and develop high-performance, secure, and fully customizable WordPress websites tailored to your business goals. From corporate sites to e-commerce stores, we deliver solutions that convert visitors into customers.
              </p>

              <div className="flex justify-start pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Launch Your Project <ArrowRight className="ml-2 w-5 h-5" />
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
                    src="https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc"
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

                {/* Framed Layer - Matching the "Legacy" section rotation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 border-y border-border overflow-hidden bg-muted/30 relative">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-muted-foreground text-[11px] font-semibold tracking-widest uppercase mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Top-Tier Engineering
              </div>

              <div className="w-8 h-0.5 bg-blue-600 mb-6 rounded-full" />

              <h2 className=" text-4xl sm:text-5xl font-bold leading-tight mb-5 text-slate-800">
                Why choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 font-medium">
                  Socio Bhaarat
                </span> for WordPress?
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-md">
                We combine creative design, technical expertise, and strategic planning to deliver WordPress websites that are fast, secure, SEO-friendly, and easy to manage. We don't just build sites; we build digital assets that scale with your business goals.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:max-w-xs">
                <div className="bg-muted rounded-2xl p-5">
                  <div className="font-serif text-[2.6rem] font-normal text-blue-600 leading-none mb-1.5">500+</div>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Successful Projects</p>
                </div>
                <div className="bg-muted rounded-2xl p-5">
                  <div className="font-serif text-[2.6rem] font-normal text-orange-500 leading-none mb-1.5">98%</div>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: numbered grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 divide-x divide-y divide-border border border-border rounded-2xl overflow-hidden"
            >
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-5 sm:p-6 bg-background hover:bg-muted/50 transition-colors group cursor-default"
                >
                  <div className="font-serif text-[1.8rem] font-normal text-border/60 mb-3 leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="w-[34px] h-[34px] rounded-lg bg-muted flex items-center justify-center mb-3 border border-border group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <span className="text-muted-foreground group-hover:text-white transition-colors ">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="text-md font-medium mb-1.5">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY WORDPRESS */}

      <section className="py-16 md:py- bg-background relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10 px-6">

          {/* Header — split layout, fills the width */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
            <h2 className=" text-4xl md:text-5xl font-bold max-w-lg text-slate-800">
              Why your brand needs <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 font-medium">
                WordPress
              </span>
            </h2>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-right sm:max-w-[220px] leading-relaxed">
              Engineering the backbone of modern digital commerce.
            </p>
          </div>

          {/* Cards — bordered grid, no gaps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border border-border/50 rounded-3xl overflow-hidden">
            {[
              {
                index: "01",
                title: "Digital Dominance",
                icon: <Rocket className="w-5 h-5" />,
                desc: "Establish a future-ready presence with a highly scalable platform that grows alongside your business without limits.",
              },
              {
                index: "02",
                title: "Edge Performance",
                icon: <Smartphone className="w-5 h-5" />,
                desc: "Responsive layouts optimized for every screen size and device, delivering flawless experiences wherever your users are.",
              },
              {
                index: "03",
                title: "SEO Authority",
                icon: <Search className="w-5 h-5" />,
                desc: "Built-in technical SEO structures to dominate rankings and drive consistent, compounding organic traffic.",
              },
            ].map((card, i, arr) => (
              <motion.div
                key={i}
                className={cn(
                  "relative p-9 md:p-10 group cursor-default hover:bg-muted/50 transition-colors duration-200",
                  i < arr.length - 1 && "border-b sm:border-b-0 sm:border-r border-border/50"
                )}
              >
                {/* Index */}
                <span className="hidden md:block text-[4rem] font-normal text-border/40 leading-none mb-8">
                  {card.index}
                </span>

                {/* Icon */}
                <div className="w-[46px] h-[46px] rounded-xl border border-border bg-muted flex items-center justify-center mb-6
                          group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                  <span className="text-muted-foreground group-hover:text-white transition-colors">
                    {card.icon}
                  </span>
                </div>

                {/* Text */}
                <h3 className=" text-2xl font-semibold text-foreground mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm md:text-lg font-semibold text-slate-700 text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>

                {/* Accent line */}
                <div className="mt-8 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-orange-500
                          rounded-full group-hover:w-10 transition-all duration-500" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* SERVICE GRID */}
      <section className="py-24 md:py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">
          {/* Section Header: Shifted Left for Modern Engineering Feel */}
          <div className="mb-20 md:mb-10 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-none mb-8">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible">Socio Bhaarat</span> Brings to the Table
            </h2>
            <p className="text-slate-500 text-lg md:text-2xl max-w-8xl font-medium leading-relaxed border-l-4 border-primary/20 pl-6">
              Industrial-strength architecture tailored for high-growth business scalability and engineered for performance
            </p>
          </div>

          {/* The Technical Rows: No Empty Space */}
          <ServiceList services={services} />
        </div>
      </section>

      {/* TECH STACK BENTO */}
      <section className="py-12 bg-background relative overflow-hidden">

        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2 leading-none">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible leading-normal">Technology Stack</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-xl font-bold">
              The engine behind Madhya Pradesh's fastest digital platforms.
            </p>
          </div>
          <TechGrid techStack={techStack} />
        </div>
      </section>

      {/* PROCESS PATH */}
      <ProcessSection
        titlePrefix="Our"
        highlightedWord="Development"
        titleSuffix="Process"
        description="A structured workflow that transforms ideas into scalable digital products through a modern development pipeline."
        process={process}
      />

      <QuoteSection quote="Flexible, powerful WordPress solutions built to scale with your vision and business goals." />

      {/* FINAL CTA */}
      <CTASection
        title={<>Ready to Innovate <br className="hidden md:block" /> with WordPress?</>}
        description={<>Join 500+ brands powered by SocioBhaarat engineering. <br className="hidden sm:block" />Let's start your technical consultation today</>}
        buttonText="Launch Your Project Now"
      />
    </div>
  );
};

export default WordPressDevelopment;
