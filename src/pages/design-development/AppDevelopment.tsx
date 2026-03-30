import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import {
  Check, Code, Cpu, Layers, Rocket, Shield, Smartphone,
  ArrowRight, Search, Layout, Database, Terminal,
  MonitorSmartphone, Lock, Zap, SmartphoneNfc, AppWindow,
  Palette
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CTASection } from "@/components/ui/CTASection";
import ServiceList from "@/components/ui/ServiceList";
import TechGrid from "@/components/ui/TechGrid";
import ProcessSection from "@/components/DevelopmentProcess";
import FeatureGrid from "@/components/ui/FeatureGrid";
import SEO from "@/components/SEO";

const AppDevelopment = () => {
  const navigate = useNavigate();

  /* DATA */
  const process = [
    {
      title: "Discovery & Strategy",
      color: "#2563eb", // Blue
      desc: "We begin by analyzing your business objectives, target audience demographics, and core functional requirements to build a comprehensive strategic roadmap for your mobile application."
    },
    {
      title: "UX Architecture",
      color: "#a4773f", // Indigo
      desc: "Architecting the user journey through detailed wireframes and flowcharts, focusing on intuitive navigation patterns and accessibility standards to ensure a seamless mobile-first experience."
    },
    {
      title: "UI Visual Design",
      color: "#7c3aed", // Violet
      desc: "Transforming wireframes into high-fidelity visual designs. We craft bespoke interfaces with consistent branding, modern typography, and interactive elements that captivate and engage your app users."
    },
    {
      title: "Technical Engineering",
      color: "#db2777", // Pink
      desc: "Our developers write clean, modular code using Flutter, React Native, or Native languages, ensuring a robust backend architecture and high-performance frontend execution for all devices."
    },
    {
      title: "API & Data Integration",
      color: "#ea580c", // Orange
      desc: "Seamlessly connecting your mobile app with secure third-party APIs, cloud databases, and external services to enable real-time data synchronization and expanded functional capabilities."
    },
    {
      title: "Rigorous QA Testing",
      color: "#0d9488", // Teal
      desc: "Conducting comprehensive quality assurance including functional, regression, and usability testing across various screen sizes and OS versions to guarantee a 100% bug-free user experience."
    },
    {
      title: "App Store Deployment",
      color: "#38BDF8", // Green
      desc: "Navigating the complexities of the Apple App Store and Google Play Store submission processes, ensuring all metadata, assets, and privacy policies comply with platform-specific guidelines."
    },
    {
      title: "Post-Launch Growth",
      color: "#1e293b", // Slate
      desc: "Providing continuous monitoring, performance optimization, and regular feature updates to keep your application competitive, secure, and fully compatible with the latest mobile operating systems."
    }
  ];

  const techStack = [
    {
      category: "Mobile Frameworks",
      color: "#02569B", // Flutter Blue
      items: [
        { name: "Flutter", logo: "flutter" },
        { name: "React Native", logo: "react" },
        { name: "Kotlin", logo: "kotlin" },
      ]
    },
    {
      category: "Backend & API",
      color: "#339933", // Node.js Green
      items: [
        { name: "Node.js", logo: "nodedotjs" },
        { name: "GraphQL", logo: "graphql" },
        { name: "Firebase", logo: "firebase" },
      ]
    },
    {
      category: "Database & Storage",
      color: "#4479A1", // MySQL Blue
      items: [
        { name: "MongoDB", logo: "mongodb" },
        { name: "MySQL", logo: "mysql" },
      ]
    },
    {
      category: "DevOps & State",
      color: "#2496ED", // Docker Blue
      items: [
        { name: "AWS", logo: "amazonaws" },
        { name: "Docker", logo: "docker" },
        { name: "Redux", logo: "redux" },
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: "Experienced Developers",
      icon: SmartphoneNfc,
      desc: "Our team consists of industry veterans who specialize in complex mobile ecosystems. We leverage years of technical expertise to solve intricate coding challenges, ensuring your application is built using the most reliable and modern standards."
    },
    {
      title: "Custom App Solutions",
      icon: Layers,
      desc: "We move beyond generic templates to engineer bespoke mobile applications tailored specifically to your operational needs. Every feature is strategically developed to align with your unique business goals, providing a distinct competitive edge in the market."
    },
    {
      title: "User-Centric UI/UX",
      icon: Palette,
      desc: "Our design philosophy centers on the human experience, creating intuitive interfaces that drive engagement. We combine aesthetic elegance with functional usability, ensuring that every swipe and tap feels natural, purposeful, and rewarding for your end-users."
    },
    {
      title: "Cross-Platform Experts",
      icon: MonitorSmartphone,
      desc: "Maximize your market reach with our specialized cross-platform development services. We utilize frameworks like Flutter and React Native to deliver high-performance applications that maintain consistent functionality and a native feel across both iOS and Android platforms."
    },
    {
      title: "Secure Architecture",
      icon: Lock,
      desc: "Security is integrated into our core development lifecycle. We implement enterprise-grade encryption, secure API endpoints, and rigorous data protection protocols to safeguard your intellectual property and user information against evolving modern digital threats and vulnerabilities."
    },
    {
      title: "Timely Delivery",
      icon: Rocket,
      desc: "We value your time-to-market and adhere to a strict milestone-based delivery schedule. Our agile development process ensures that high-quality products are launched on time, allowing you to begin your digital transformation and generate ROI without delays."
    }
  ];

  const services = [
    {
      title: "Android Development",
      icon: <Smartphone />,
      color: "#3DDC84", // Android Green
      desc: "We engineer high-performance native applications tailored for the diverse Android ecosystem, utilizing Kotlin and Java to ensure seamless hardware integration, robust security protocols, and a fluid user experience across all devices."
    },
    {
      title: "iOS Development",
      icon: <AppWindow />,
      color: "#000000", // Apple Black/Slate
      desc: "Our team crafts premium iOS applications following Apple’s strict Human Interface Guidelines. Using Swift and SwiftUI, we deliver elegant, high-end mobile experiences that prioritize performance, security, and a sophisticated aesthetic for iPhone users."
    },
    {
      title: "Cross-Platform Apps",
      icon: <Code />,
      color: "#02539a", // Flutter/RN Blue
      desc: "Leveraging powerful frameworks like Flutter and React Native, we develop versatile applications from a single codebase. This approach ensures rapid deployment across both iOS and Android platforms without compromising on native-like performance or UI consistency."
    },
    {
      title: "Hybrid App Solutions",
      icon: <Cpu />,
      color: "#4f46e5", // Indigo
      desc: "We build efficient web-tech based applications using Ionic and Capacitor to provide a faster time-to-market. These solutions are perfect for businesses needing a cost-effective mobile presence that maintains high functionality and easy maintainability."
    },
    {
      title: "E-commerce Apps",
      icon: <Rocket />,
      color: "#db2777", // Pink
      desc: "Transform your retail business with mobile shopping experiences specifically designed to maximize conversions. We integrate secure payment gateways, advanced inventory tracking, and personalized push notifications to turn casual browsers into loyal, repeat buyers."
    },
    {
      title: "On-Demand Services",
      icon: <Zap />,
      color: "#ea580c", // Orange
      desc: "Our real-time app solutions power complex on-demand services like food delivery and ride-sharing. We implement precise GPS tracking, instant messaging, and automated dispatch algorithms to ensure a reliable and seamless user-provider connection."
    }
  ];

  return (
    <>
      <SEO
        title="Professional App Development Services in India | Android & iOS Apps"
        description="Create high-performance mobile and web applications with seamless user experience and scalable architecture."
        keywords="app development, mobile app development, android ios apps, web apps, app developers in jabalpur"
        url="/design-development/app-development"
      />
      <div className="min-h-screen bg-background selection:bg-primary/20">

        {/*  HERO SECTION  */}
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
                  <Smartphone className="w-3 h-3" /> App Development
                </div>
                {/* Build High-Performance
              Mobile Applications For Your Business */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                  Professional <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">App Development</span> Services.
                </h1>

                <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                  We design and develop user-friendly, secure, and high-performance mobile applications that enhance customer engagement, streamline operations, and drive business growth.
                </p>

                <div className="flex justify-start pt-4">
                  <Button
                    size="lg"
                    className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => navigate("/contact")}
                  >
                    Start Your App Project <ArrowRight className="ml-2 w-5 h-5" />
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
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                      alt="Web Development Engineering Dashboard"
                      className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Floating Mini-Metric Overlay */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Performance</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-black text-slate-900">Native Speed</p>
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

        {/*  WHY CHOOSE US  */}
        <section className="py-12 bg-white relative overflow-hidden">
          <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">

            {/* Section Header */}
            <div className="mb-12 md:mb-20 max-w-7xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-slate-900 leading-tight">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium inline-block pr-6 -mr-6 overflow-visible">
                  Socio Bhaarat
                </span> for App Development?
              </h2>
              <p className="text-slate-700 text-base md:text-xl max-w-7xl font-medium leading-relaxed">
                We move beyond standard development. Our lab builds <span className="text-slate-900 font-bold underline decoration-primary/30 decoration-4 underline-offset-4">scalable digital ecosystems</span> through precise code and strategic market intelligence.
              </p>
            </div>

            <FeatureGrid features={whyChooseUs} />
          </div>
        </section>

        {/*  SERVICES GRID  */}
        <section className="py-12 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">
            {/* Section Header: Shifted Left for Modern Engineering Feel */}
            <div className="mb-5 md:mb-10 max-w-6xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-none mb-8">
                What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible">Socio Bhaarat</span> Brings to the Table
              </h2>
              <p className="text-slate-700 text-base md:text-2xl max-w-8xl font-medium leading-relaxed border-l-4 border-primary/20 pl-6">
                Industrial-strength architecture tailored for high-growth business scalability and engineered for performance
              </p>
            </div>

            {/* The Technical Rows: No Empty Space */}
            <ServiceList services={services} />
          </div>
        </section>

        {/*  TECHNOLOGY */}
        <section className="py-5 bg-background relative overflow-hidden">

          <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">

            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 leading-none">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible leading-normal">Technology Stack</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-xl font-bold">
                Building the future with industry-leading infrastructure.
              </p>
            </div>
            <TechGrid techStack={techStack} />
          </div>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <ProcessSection
          titlePrefix="Our"
          highlightedWord="App Development"
          titleSuffix="Process"
          description="A dedicated pipeline for crafting high-performance mobile applications."
          process={process}
        />

        <QuoteSection quote="From concept to code, we create mobile experiences that people love to use daily." />

        {/*  FINAL CTA  */}
        <CTASection
          title={<> Ready to Build <br className="hidden md:block" /> Your App?</>}
          description={<>Get a free consultation and a technical roadmap for your Android or iOS project.</>}
          buttonText="Launch Your Project Now"
        />
      </div>
    </>

  );
};

export default AppDevelopment;