import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import { 
  Check, Code, Cpu, Layers, Rocket, Shield, Smartphone, 
  ArrowRight, Search, Layout, Database, Terminal, 
  MonitorSmartphone,Lock, Zap, SmartphoneNfc, AppWindow,
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
      <section className="relative pt-44 pb-32 px-4 overflow-hidden bg-gradient-to-br from-secondary/60 to-accent/35">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        {/* <div className="absolute inset-0 z-0 opacity-50">
            <img 
                src="https://img.freepik.com/free-vector/background-abstract-pixel-rain_23-2148376182.jpg" 
                className="w-full h-full object-cover" 
                alt="App Dev Background" 
            />
        </div> */}

        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 text-black leading-[1.1]">
              Build <span className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Smart & Scalable</span> Mobile Applications
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed italic">
              We design and develop user-friendly, secure, and high-performance mobile applications that streamline operations and drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 h-16 text-lg shadow-2xl hover:scale-105 transition-transform"
                onClick={() => navigate("/contact")}
              >
                Launch Your App Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/*  WHY CHOOSE US  */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">The Mobile Mastery</h2>
          
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
                <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm italic">Engineering seamless experiences for modern users.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  SERVICES GRID  */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center italic">Specialized App Solutions</h2>

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
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
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
            <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight">The Production Roadmap</h2>
          
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
      <section className="my-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-12 md:p-24 text-center rounded-[4rem] shadow-2xl relative overflow-hidden text-white">
             <div className="absolute top-0 right-0 p-10 opacity-10">
                <Smartphone className="w-64 h-64 rotate-12" />
             </div>
             <h2 className="text-4xl md:text-6xl font-extrabold mb-8 italic">Ready to Build Your App?</h2>
             <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">
               Get a free consultation and a technical roadmap for your Android or iOS project.
             </p>
             <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-full h-16 px-12 text-xl font-bold hover:scale-105 transition-all shadow-xl" 
                onClick={() => window.open("https://wa.me/919589581364", "_blank")}
             >
                Start Free Consultation
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;