import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import {
  Code, Smartphone, Zap, Lock, Rocket, Globe, Layers, Palette, ArrowRight, MousePointer2, Settings2,
  Terminal, Cpu, MonitorCheck,
  Code2,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CTASection } from "@/components/ui/CTASection";
import ServiceList from "@/components/ui/ServiceList";
import TechGrid from "@/components/ui/TechGrid";
import ProcessSection from "@/components/DevelopmentProcess";
import FeatureGrid from "@/components/ui/FeatureGrid";
import SEO from "@/components/SEO";


const WebDevelopment = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Corporate Websites",
      color: "#2563EB",
      icon: <Globe />,
      desc: "We build professional digital headquarters that establish authority. These sites showcase your brand values and services to build deep trust with your global audience and stakeholders."
    },
    {
      title: "E-commerce Platforms",
      color: "#EA580C",
      icon: <MonitorCheck />,
      desc: "Robust online stores engineered for high conversion and security. We create seamless shopping experiences that turn casual browsers into loyal customers with optimized product management and checkouts."
    },
    {
      title: "Landing Pages",
      color: "#DB2777",
      icon: <MousePointer2 />,
      desc: "High-impact, single-page solutions focused on a specific marketing goal. These pages are precision-engineered to capture leads and drive conversions with zero distractions and clear calls-to-action."
    },
    {
      title: "Web Applications",
      color: "#7C3AED",
      icon: <Cpu />,
      desc: "Custom-built software that runs in your browser to solve complex business problems. We focus on scalability and user experience to help you automate workflows or launch unique products."
    },
    {
      title: "Progressive Web Apps (PWA)",
      color: "#0891B2",
      icon: <Smartphone />,
      desc: "Websites that look and feel like mobile apps with fast loading and offline capabilities. PWAs provide home-screen shortcuts and a premium mobile experience without needing an App Store download."
    },
    {
      title: "API Development & Integration",
      color: "#111827",
      icon: <Terminal />,
      desc: "We build the invisible bridges that connect your software systems. Whether creating custom APIs or integrating third-party tools, we ensure your platforms communicate flawlessly, securely, and efficiently."
    },
    {
      title: "Website Redesign",
      color: "#0D9488",
      icon: <Palette />,
      desc: "Transforming your outdated site into a modern, high-performance engine. We overhaul your visual identity and technical structure to bring your digital presence back to the cutting edge."
    },
    {
      title: "Website Maintenance",
      color: "#475569",
      icon: <Settings2 />,
      desc: "Continuous technical care to keep your platform running smoothly. We handle security patches, backups, and updates so you can focus on business growth without worrying about unexpected downtime."
    },
    {
      title: "Performance Optimization",
      color: "#059669",
      icon: <Zap />,
      desc: "We fine-tune your code and server settings for sub-second loading speeds. Faster sites improve user retention and boost SEO rankings, ensuring your business stays ahead of the competition."
    }
  ];

  const process = [
    {
      title: "Client Requirements",
      color: "#2563EB", // Royal Blue
      bg: "#eff6ff",
      desc: "We begin by deep-diving into your business logic. This isn't just a meeting; it's a strategic session where we gather unique requirements to grasp your vision and technical goals."
    },
    {
      title: "Customized Plan",
      color: "#f43f5e", // Cyan/Teal
      bg: "#ecfeff",
      desc: "Every project is unique. We engineer a bespoke development roadmap, selecting the right tech stack (MERN/Next.js) to ensure your platform is built for speed and long-term scalability."
    },
    {
      title: "Wireframe",
      color: "#0D9488", // Emerald Teal
      bg: "#f0fdfa",
      desc: "We map out the user journey with high-fidelity wireframes. This architectural skeletal structure ensures the UX logic is flawless before we move into visual development."
    },
    {
      title: "Design Approval",
      color: "#7C3AED", // Vivid Violet
      bg: "#f5f3ff",
      desc: "Our creative lab presents the UI mockups. We iterate based on your feedback until the aesthetic perfectly aligns with your brand’s digital identity and market positioning."
    },
    {
      title: "Website Designing",
      color: "#C026D3", // Fuchsia
      bg: "#fdf4ff",
      desc: "Moving from wireframes to vibrant visuals. We create smooth, high-end interactions and responsive layouts that ensure a premium feel across all modern devices."
    },
    {
      title: "Website Development",
      color: "#EA580C", // Deep Orange
      bg: "#fff7ed",
      desc: "This is where our engineering power shines. We write clean, semantic code and build robust backend systems to turn designs into a high-performance digital engine."
    },
    {
      title: "Testing By Experts",
      color: "#16A34A", // Success Green
      bg: "#f0fdf4",
      desc: "Zero compromise on quality. Our QA team performs rigorous stress tests, security audits, and cross-browser checks to ensure 100% stability at launch."
    },
    {
      title: "Launch Website",
      color: "#0F172A", // Midnight Slate
      bg: "#f8fafc",
      desc: "Deployment day. We handle the server configuration, cloud migration, and final optimizations to ensure your brand goes live with a sub-second LCP score."
    },
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


  const techStack = [
    {
      category: "Frontend Architecture",
      color: "#2563EB", // Blue
      items: [
        { name: "React.js", logo: "react" },
        { name: "Next.js", logo: "nextdotjs" },
        { name: "TypeScript", logo: "typescript" },
        { name: "Tailwind CSS", logo: "tailwindcss" },
        { name: "Redux Toolkit", logo: "redux" },
        { name: "Three.js", logo: "threedotjs" }
      ]
    },
    {
      category: "Backend & Logic",
      color: "#059669", // Green
      items: [
        { name: "Node.js", logo: "nodedotjs" },
        { name: "Express.js", logo: "express" },
        { name: "Python", logo: "python" },
        { name: "GraphQL", logo: "graphql" },
        { name: "PHP", logo: "php" },
        { name: "WordPress", logo: "wordpress" }
      ]
    },
    {
      category: "Data & Infrastructure",
      color: "#D97706", // Amber/Orange
      items: [
        { name: "MongoDB", logo: "mongodb" },
        { name: "MySQL", logo: "mysql" },
        { name: "Firebase", logo: "firebase" },
        { name: "AWS", logo: "amazonaws" },
        { name: "Docker", logo: "docker" },
        { name: "PostgreSQL", logo: "postgresql" }
      ]
    },
    {
      category: "Animation & Motion",
      color: "#7C3AED", // Violet
      items: [
        { name: "GSAP", logo: "greensock" },
        { name: "Framer Motion", logo: "framer" },
        { name: "Canvas API", logo: "html5" },
        { name: "Lottie", logo: "lottie" }
      ]
    }
  ];

  const businessNeeds = [
    {
      title: "Speed as a Feature",
      desc: "In the modern economy, 90% of users bounce if a site takes over 3 seconds to load. Our high-performance Node.js and React stack ensures sub-second deployments and lightning-fast interactions to keep your audience engaged.",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      metric: "0.8s LCP",
      color: "#f97316", // orange
    },
    {
      title: "SEO-Native Code",
      desc: "We don't just 'add SEO' later; we bake it into the DNA of your site. We build with semantic HTML5, JSON-LD schema markup, and optimized metadata from the first line of code to ensure maximum search engine visibility.",
      icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
      metric: "100/100 Audit",
      color: "#2563EB", // blue
    },
    {
      title: "Conversion Logic",
      desc: "Every pixel is placed based on conversion-focused psychological triggers and real-world heat-map data. We engineer user paths that guide visitors toward measurable actions, turning passive traffic into consistent revenue.",
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
      metric: "+40% ROI",
      color: "#10b981", // emerald
    },
    {
      title: "Scalable Core",
      desc: "Your digital presence should grow as fast as your business. Our modular architecture allows for seamless feature integration and high-concurrency handling, providing a future-ready foundation that handles massive traffic spikes.",
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
      metric: "99.9% Uptime",
      color: "#8b5cf6", // violet
    },
  ];

  return (
    <>
      <SEO
        title="Professional Web Development Services in India | Socio Bhaarat"
        description="Build fast, scalable, and modern websites tailored to your business needs with our expert web development solutions."
        keywords="web development, website development company, custom websites, frontend backend development, web development in jabalpur"
        url="/design-development/web-development"
      />
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
                  <Code2 className="w-3 h-3" /> Build High Performing Websites
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                  Professional <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Web Development</span> Services.
                </h1>

                <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                  we design and develop modern, responsive, and conversion-focused websites for businesses worldwide, helping them build a strong digital presence and achieve measurable growth.
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
        <section className="py-12 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">

            {/* Section Header */}
            <div className="mb-12 md:mb-20 max-w-7xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-slate-900 leading-tight">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium inline-block pr-6 -mr-6 overflow-visible">
                  Socio Bhaarat
                </span> for Web Development?
              </h2>
              <p className="text-slate-700 text-base md:text-xl max-w-7xl font-medium leading-relaxed">
                We move beyond standard development. Our lab builds <span className="text-slate-900 font-bold underline decoration-primary/30 decoration-4 underline-offset-4">scalable digital ecosystems</span> through precise code and strategic market intelligence.
              </p>
            </div>

            <FeatureGrid features={whyChooseUs} />
          </div>
        </section>

        {/* Why do you need Web Development */}
        <section className="py-12 bg-background relative overflow-hidden">
          {/* Background: Data Stream dots */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">
            {/* Section Header */}
            <div className="mb-12 md:mb-20 max-w-8xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-4 text-slate-900 leading-tight">
                Why Your Business Needs a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible leading-[1.2]">
                  Strong Web Presence
                </span>
              </h2>
              <p className="text-slate-600 text-base md:text-xl max-w-7xl font-medium leading-relaxed border-l-4 border-primary/20 pl-4 md:pl-6">
                A website is not a digital brochure; it is a high-speed conversion engine.
              </p>
            </div>

            {/* The Intelligence Grid: 1 Col on Mobile, 2 Cols on Large Screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
              {businessNeeds.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group flex flex-row gap-4 sm:gap-6 md:gap-10 p-6 sm:p-8 md:p-12 bg-white/40 backdrop-blur-md border-2 md:border-4 border-slate-200 hover:border-primary transition-all duration-500 rounded-2xl relative"
                >
                  {/* 1. Large Dynamic Number Background - Hidden or scaled on small mobile */}
                  <span className="absolute top-2 right-4 text-6xl sm:text-7xl md:text-9xl font-black text-slate-100/50 group-hover:text-primary/5 transition-colors -z-10 select-none">
                    0{idx + 1}
                  </span>

                  {/* 2. Left Side: Icon & Vertical Meter */}
                  <div className="flex flex-col items-center gap-3 md:gap-4 shrink-0">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border-2 md:border-4 border-slate-50">
                      {/* Scale icon for mobile */}
                      <div className="scale-75 sm:scale-100">
                        {item.icon}
                      </div>
                    </div>

                    {/* Meter: Hidden on very small screens to save space if needed, or kept thin */}
                    <div className="w-1 h-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        whileInView={{ height: ["0%", "100%"] }}
                        transition={{ duration: 1.5, delay: idx * 0.2 }}
                        className="w-full bg-gradient-to-b from-primary to-orange-500"
                      />
                    </div>
                  </div>

                  {/* 3. Right Side: Content */}
                  <div className="space-y-4 md:space-y-6 flex-grow">
                    <div className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide font-medium pl-4 md:pl-6 transition-all">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 md:pt-4">
                      <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] group-hover:text-secondary transition-colors">
                        {item.metric}
                      </span>
                      <div className="px-2 md:px-3 py-1 rounded-full bg-slate-100 text-[9px] md:text-[10px] font-bold text-slate-500 group-hover:bg-primary group-hover:text-white transition-colors">
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
        <section className="py-12 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">
            {/* Section Header: Shifted Left for Modern Engineering Feel */}
            <div className="mb-5 md:mb-10 max-w-6xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-none mb-8">
                What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible">Socio Bhaarat</span> Brings to the Table
              </h2>
              <p className=" text-base md:text-xl max-w-8xl font-medium leading-relaxed border-l-4 border-primary/20 pl-6 text-slate-700">
                Industrial-strength architecture tailored for high-growth business scalability and engineered for performance
              </p>
            </div>

            {/* The Technical Rows: No Empty Space */}
            <ServiceList services={services} />
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="py-5 bg-background relative overflow-hidden">

          <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">

            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2 leading-none">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible leading-normal">Technology Stack</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-xl font-medium">
                Building the future with industry-leading infrastructure.
              </p>
            </div>
            <TechGrid techStack={techStack} />
          </div>
        </section>

        <ProcessSection
          titlePrefix="Our"
          highlightedWord="Development"
          titleSuffix="Process"
          description="A structured workflow that transforms ideas into scalable digital products through a modern development pipeline."
          process={process}
        />

        <QuoteSection
          quote="We don’t just build websites. We create complete digital solutions that help businesses grow." className="background"
        />

        <CTASection
          title={<>Ready to Digitize <br className="hidden md:block" /> Your Vision?</>}
          description={<>Join 500+ brands powered by SocioBhaarat engineering. <br className="hidden sm:block" />Let's discuss your roadmap today.</>}
          buttonText="Launch Your Project Now"
        />
      </div >
    </>

  );
};

export default WebDevelopment;