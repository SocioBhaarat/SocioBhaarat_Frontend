
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
    { title: "Transparent Support", desc: "Clear communication throughout the lifecycle.", icon: <ShieldCheck className="w-5 h-5" /> }
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
      <section className="py-24 bg-muted/50 border-y border-border overflow-hidden">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible">Socio Bhaarat</span> for WordPress ?
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-8">
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
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">


        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Heading with Requested Gradient */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
              Why Your Brand Needs <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible">WordPress</span>
            </h2>
            <p className="mt-4 text-slate-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] italic">
              Engineering the backbone of modern digital commerce.
            </p>
          </div>

          {/* 2. ADAPTIVE GRID (1 col mobile, 3 cols desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
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
      <section className="py-24 md:py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">
          {/* Section Header: Shifted Left for Modern Engineering Feel */}
          <div className="mb-20 md:mb-10 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-none mb-8">
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 leading-none">
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
