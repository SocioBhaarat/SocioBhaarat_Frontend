import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Palette, Layers, PenTool, Layout, Box, Image,
  CheckCircle2, ArrowRight, Zap, Target, MousePointer2,
  Sparkles, Brush, Component
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GraphicDesigning = () => {
  const navigate = useNavigate();

  /* DATA VARIABLES */
  const heroData = {
    heading: "Visual Identities That Capture Hearts and Drive Growth",
    subtext: "We create stunning, high-impact designs that reflect your brand's unique essence and build a deep connection with your target audience across every digital and physical touchpoint.",
    cta: "Start Your Design Project",
  };

  const whyChoosePoints = [
    { title: "Bespoke Brand Identities", icon: <Brush /> },
    { title: "Strategic Visual Design", icon: <Target /> },
    { title: "Conversion-Focused UI", icon: <MousePointer2 /> },
    { title: "Print & Digital Mastery", icon: <Layout /> },
    { title: "Iterative Creative Process", icon: <Layers /> },
    { title: "High-Resolution Assets", icon: <Box /> },
  ];

  const whyNeedPoints = [
    "94% of First Impressions are Design-Related",
    "Build Instant Trust and Credibility",
    "Consistent Branding Across All Channels",
    "Differentiate Your Business from Competitors",
    "Increase Engagement and Conversion Rates",
    "Communicate Complex Ideas Visually"
  ];

  const services = [
    { name: "Brand Identity & Logo Design", icon: <Palette />, desc: "Complete visual systems including logos, typography, and color palettes." },
    { name: "Social Media Creatives", icon: <Image />, desc: "Eye-catching post designs and banners optimized for engagement." },
    { name: "Marketing & Sales Collateral", icon: <Layout />, desc: "Professional brochures, flyers, and digital pitch decks that close deals." },
    { name: "UI/UX & Web Interface", icon: <MousePointer2 />, desc: "User-centric interface designs that ensure seamless digital experiences." },
    { name: "Product & Packaging Design", icon: <Box />, desc: "Physical packaging solutions that stand out on shelves and in unboxings." },
    { name: "Custom Illustrations", icon: <PenTool />, desc: "Unique hand-drawn or vector assets that add a custom feel to your brand." },
  ];

  const processSteps = [
    { step: "Discovery", desc: "Understanding your brand vision, values, and competition." },
    { step: "Conceptualization", desc: "Brainstorming and creating initial moodboards and sketches." },
    { step: "Design & Refine", desc: "Developing concepts into polished assets through feedback." },
    { step: "Delivery", desc: "Providing all file formats and brand guidelines for launch." }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* 1. TECHNICAL BACKGROUND ARCHITECTURE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Blueprint Grid Overlay - Representing the Grid-System in Design */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />

          {/* Atmospheric Mesh Blobs */}
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/5 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />

        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <Sparkles className="w-3 h-3" /> Creative Excellence Lab
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                {heroData.heading.split("Visual")[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                  Visual Identities
                </span> That Scale.
              </h1>

              <p className="text-base md:text-xl text-slate-500 max-w-lg leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                {heroData.subtext}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-12 h-14 md:h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  {heroData.cta} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Proof (Graphic Bento) */}
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
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
                    alt="High-End Brand Identity Design"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Floating Mini-Metric Overlay */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Aesthetic Score</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-black text-slate-900">Pixel Perfect</p>
                      <Palette size={16} className="text-orange-500" />
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

      {/* WHY YOU NEED IT */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">

        {/* Subtle Background Identity */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* 1. ANALYSIS CARD (Moves below text on mobile via 'order' logic) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-card border-2 border-border p-6 sm:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group">

                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 tracking-tighter uppercase italic">
                  Design Impact Analysis
                </h3>

                <div className="space-y-4 md:space-y-6">
                  {whyNeedPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all group/item shadow-sm">
                      <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="font-bold text-xs md:text-sm tracking-tight text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 2. STRATEGIC NARRATIVE (Shows first on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                Brand Psychology Lab
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter text-slate-900">
                Design is the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">
                  Silent Ambassador
                </span> <br className="hidden md:block" /> of Your Brand.
              </h2>

              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                "Before a customer ever reads your copy or talks to your team, they judge you by your visuals. Great design builds a psychological bridge of trust."
              </p>

              <div className="pt-4">
                <Button variant="link" className="text-primary p-0 h-auto text-base md:text-lg font-black group uppercase tracking-tight">
                  Learn about Brand Psychology
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE SOCIO BHAARAT */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Socio Bhaarat</span> Advantage</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We combine 500+ projects of experience with a high-end satisfaction rate to deliver pixels that perform.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2.5rem] bg-muted/50 border border-transparent hover:border-primary/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">Crafting identities that resonate across every customer touchpoint.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Design Solutions</span> Suite</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-[2rem] bg-card border border-border/60 hover:border-primary/40 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Component className="w-32 h-32" />
                </div>

                <div className="mb-6 p-4 w-fit rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16 italic">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Creative Journey</span></h2>
          <div className="relative">
            {/* Visual Path Connector */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px border-t-2 border-dashed border-border -z-10" />

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-background border-2 border-primary text-primary rounded-2xl flex items-center justify-center font-black text-lg mx-auto mb-6 shadow-xl transition-transform hover:rotate-6">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.step}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">



            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Refine <br className="hidden md:block" /> Your Visuals?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                Let’s create a brand identity that turns heads and converts leads. Your creative evolution starts here.
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-lg md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Start Your Design Project
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesigning;