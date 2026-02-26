import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuoteSection from "@/components/ui/QuoteSection";
import {
  Palette, Users, Smartphone, Zap, Layout, Target,
  Check, ArrowRight, Sparkles, Search, MousePointer2,
  Layers, ShieldCheck, Brush, PenTool,
  Rocket
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-background selection:bg-orange-100">

      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 px-4 overflow-hidden bg-[#fafafa] bg-gradient-to-br from-secondary/60 to-accent/35">
        {/* Dynamic Mesh Gradient Blobs */}

        {/* Subtle Designer's Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-200 backdrop-blur-md text-orange-600 text-[10px] font-bold mb-10 tracking-[0.2em] uppercase shadow-sm">
              <Sparkles className="w-3 h-3" />
              SocioBhaarat Creative Lab
            </div>

            <h1 className="font-display ext-4xl sm:text-6xl lg:text-7xl font-black mb-8 text-slate-900 leading-[1.05] tracking-tighter">
              Design <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-600">
                  Experiences
                </span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200/50 -z-10 skew-x-12" />
              </span> That Breathe.
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
              "Design is not decoration — it’s the bridge between a brand's logic and a user's soul."
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Button
                size="lg"
                className="rounded-full px-12 h-16 text-lg font-bold bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-200 transition-all hover:scale-105"
                onClick={() => navigate("/contact")}
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
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
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center italic">Specialized Design Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} whileHover={{ scale: 1.01 }} className="group relative p-10 rounded-[3.5rem] bg-muted/20 border border-border/60 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:scale-125 transition-transform">{service.icon}</div>
                <h3 className="text-3xl font-extrabold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed italic">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-70">
                      <Zap className="h-4 w-4 text-orange-500" /> {feature}
                    </div>
                  ))}
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
              The Design Roadmap
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
                <span className="absolute top-6 right-10 text-7xl font-bold text-gray-50 italic select-none group-hover:text-blue-50/50 transition-colors duration-300">
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
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12 italic">The Designer's Toolkit</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tool, index) => (
              <motion.span key={index} whileHover={{ scale: 1.1, color: "#f97316" }} className="px-8 py-4 bg-card border-2 border-border rounded-2xl text-lg font-bold shadow-sm transition-all cursor-default">
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection quote="Design is not decoration — it’s the bridge between a brand's logic and a user's soul." />

      {/* FINAL CTA */}
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

export default UIUXDesign;