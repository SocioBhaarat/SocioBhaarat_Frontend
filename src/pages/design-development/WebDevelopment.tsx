import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import { 
  Check, Code, Smartphone, Zap, Lock, Rocket, Globe, Layers, 
  Layout, Palette, Users, ArrowRight, MousePointer2, Settings2, 
  Terminal, Database, Cpu, MonitorCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WebDevelopment = () => {
  const navigate = useNavigate();

  /* ================= DATA ================= */
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

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-44 pb-32 px-4 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-40">
            <img 
                src="https://img.freepik.com/premium-vector/web-development-concept-with-plexus-background-seo-website-app-design-digital-network-design_618588-1215.jpg" 
                className="w-full h-full object-cover" 
                alt="Web Dev Background" 
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background z-1"></div>

        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 text-white leading-[1.1]">
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 italic">Powerful & Scalable</span> Digital Foundations
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              We engineer high-performance websites that transform brands. From custom web apps to seamless e-commerce, we build for conversion and growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 h-16 text-lg shadow-2xl hover:scale-105 transition-transform"
                onClick={() => navigate("/contact")}
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              {/* <Button variant="outline" size="lg" className="rounded-full h-16 px-10 text-white border-white/20 hover:bg-white/10">
                View Our Stack
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Engineering Excellence</h2>
            <p className="text-muted-foreground">Why SocioBhaarat is the trusted partner for web innovation.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/50 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed italic">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center italic">Specialized Solutions</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.02 }}
                className="bg-card p-8 rounded-3xl border border-border/50 flex flex-col items-center text-center group transition-all"
              >
                <div className="text-primary mb-4 p-3 bg-primary/5 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <p className="font-bold text-lg">{service.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="py-24 px-4 bg-background border-y border-border">
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
                className="px-6 py-3 bg-card border border-border rounded-2xl text-sm font-bold shadow-sm cursor-default transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEVELOPMENT PROCESS ================= */}
      <section className="py-24 px-4 bg-muted/20 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">How We Bring Ideas to Life</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A structured, transparent, and high-velocity workflow built for modern delivery.</p>
          </div>

          <div className="relative">
            {/* Visual Center Path */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500 via-primary to-blue-500/20 rounded-full opacity-30"></div>

            <div className="space-y-20 relative z-10">
              {process.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="md:w-1/2"
                  >
                    <div className="bg-card p-10 rounded-[2.5rem] shadow-sm border border-border group hover:border-primary/30 transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors uppercase italic select-none">
                            Step {index + 1}
                        </span>
                      </div>
                      <h3 className="font-bold text-2xl mb-4 tracking-tight">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed italic">{step.desc}</p>
                    </div>
                  </motion.div>

                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      {index + 1}
                    </div>
                  </div>

                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuoteSection
        quote="We don’t just build websites. We engineer high-velocity digital ecosystems."
      />

      {/* ================= FINAL CTA ================= */}
      <section className="my-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-12 md:p-20 text-center rounded-[3.5rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-10">
                <Code className="w-64 h-64" />
             </div>
             <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-white italic tracking-tight">Ready to Digitize Your Vision?</h2>
             <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
               Join 500+ brands powered by SocioBhaarat engineering. Let's discuss your roadmap today.
             </p>
             <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-full h-16 px-12 text-xl font-bold shadow-xl hover:scale-105 transition-all" 
                onClick={() => window.open("https://wa.me/919589581364", "_blank")}
             >
                Launch Your Project Now
             </Button>
          </div>
        </div>
      </section>
      <section className="my-16 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Build Your Website?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free consultation and quote for your web development project.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;