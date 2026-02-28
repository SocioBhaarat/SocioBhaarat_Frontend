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

const AppDevelopment = () => {
  const navigate = useNavigate();

  /* DATA */
  const process = [
    { title: "Requirement Analysis", desc: "Defining goals, user personas, and a technical roadmap.", icon: <Search /> },
    { title: "Wireframing & UI/UX", desc: "Creating intuitive designs focused on mobile usability.", icon: <Layout /> },
    { title: "App Development", desc: "Writing clean, scalable code for Android and iOS.", icon: <Code /> },
    { title: "Testing & QA", desc: "Ensuring 100% bug-free performance on all devices.", icon: <Shield /> },
    { title: "Deployment", desc: "Handling App Store and Play Store submission process.", icon: <Rocket /> },
    { title: "Support & Updates", desc: "Continuous monitoring and post-launch maintenance.", icon: <Zap /> },
  ];

  const technologies = [
    "Flutter", "React Native", "Kotlin", "Swift",
    "Node.js", "Firebase", "MongoDB", "MySQL",
    "AWS", "GraphQL", "Redux", "Docker"
  ];

  const whyChooseUs = [
    { title: "Experienced Developers", icon: SmartphoneNfc },
    { title: "Custom App Solutions", icon: Layers },
    { title: "User-Centric UI/UX", icon: Palette },
    { title: "Cross-Platform Experts", icon: MonitorSmartphone },
    { title: "Secure Architecture", icon: Lock },
    { title: "Timely Delivery", icon: Rocket },
  ];

  const services = [
    { title: "Android Development", icon: <Smartphone />, desc: "Native apps built for the diverse Android ecosystem." },
    { title: "iOS Development", icon: <AppWindow />, desc: "High-end apps following Apple's premium human interface guidelines." },
    { title: "Cross-Platform Apps", icon: <Code />, desc: "Single codebase for iOS & Android using Flutter or React Native." },
    { title: "Hybrid App Solutions", icon: <Cpu />, desc: "Efficient web-tech based apps for faster time-to-market." },
    { title: "E-commerce Apps", icon: <Rocket />, desc: "Mobile shopping experiences designed to convert users into buyers." },
    { title: "On-Demand Services", icon: <Zap />, desc: "Real-time apps like food delivery, cleaning, or ride-sharing." },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/*  HERO SECTION  */}
      <section className="relative min-h-[90vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* 1. TECHNICAL BACKGROUND ARCHITECTURE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Blueprint Grid Overlay - Consistent with Web/Paid pages */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />

          {/* Atmospheric Mesh Blobs */}
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/5 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />

        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: Strategic Narrative (Responsive Typography) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <Smartphone className="w-3 h-3" /> App Architecture Lab
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                  Smart & Scalable
                </span> Mobile Ecosystems.
              </h1>

              <p className="text-base md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                "We design and develop high-performance iOS & Android applications that streamline operations and drive business growth across Madhya Pradesh."
              </p>

              <div className="flex justify-start pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-12 h-14 md:h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Launch Your App Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Proof (App Mockup Bento) */}
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
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                    alt="High-Performance Mobile App UI"
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

                {/* Framed Layer for Identity */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/*  WHY CHOOSE US  */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Mobile Mastery</span></h2>
            <p className="text-muted-foreground text-sm md:text-base px-4">
              Why SocioBhaarat is the trusted partner for web innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-card p-8 rounded-[2.5rem] border border-border/50 hover:border-primary/50 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm italic">Engineering seamless experiences for modern users.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  SERVICES GRID  */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">App Solutions</span></h2>

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


      {/*  TECHNOLOGY */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Technology Stack</span></h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                className="px-6 py-3 bg-card border border-border rounded-2xl text-sm font-bold shadow-sm transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Production Roadmap</span></h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-[2rem] bg-muted/10 border border-border group hover:bg-card transition-all"
              >
                <div className="absolute top-0 right-0 p-8 text-6xl font-black text-primary/5 group-hover:text-primary/10 transition-colors italic select-none">
                  0{index + 1}
                </div>
                <div className="mb-6 text-primary">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection quote="From concept to code, we create mobile experiences that people love to use daily." />

      {/*  FINAL CTA  */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">

            {/* 1. RESPONSIVE DECORATIVE ICON */}
            <div className="absolute top-0 right-0 p-4 md:p-10 opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <Smartphone className="w-64 h-64 rotate-12" />
            </div>

            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Build Your App?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                Get a free consultation and a technical roadmap for your Android or iOS project.
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

export default AppDevelopment;