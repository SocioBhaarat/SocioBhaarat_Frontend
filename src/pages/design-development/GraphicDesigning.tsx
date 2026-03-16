import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/ui/CTASection";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ServiceList from "@/components/ui/ServiceList";
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
  {
    title: "Bespoke Brand Identities",
    icon: Brush,
    desc: "We engineer unique visual signatures that capture your brand's core essence. By combining custom typography with strategic color psychology, we ensure your identity stands out with absolute distinction in an overcrowded marketplace."
  },
  {
    title: "Strategic Visual Design",
    icon: Target,
    desc: "Our design approach is driven by data and business objectives. We don't just create beautiful visuals; we craft strategic assets that align with your marketing goals to effectively communicate your unique value proposition."
  },
  {
    title: "Conversion-Focused UI",
    icon: MousePointer2,
    desc: "We bridge the gap between aesthetics and functionality by building user interfaces designed to drive action. Every button, layout, and interaction is optimized to reduce user friction and maximize your digital conversion rates."
  },
  {
    title: "Print & Digital Mastery",
    icon: Layout,
    desc: "Our expertise spans across the physical and digital realms, ensuring brand consistency whether it's on a mobile screen or a high-end brochure. We deliver pixel-perfect designs optimized for every medium and viewing environment."
  },
  {
    title: "Iterative Creative Process",
    icon: Layers,
    desc: "Transparency and collaboration define our workflow. Through a structured, milestone-based feedback loop, we refine every design detail based on your input, ensuring the final deliverable exceeds your expectations and fulfills your vision."
  },
  {
    title: "High-Resolution Assets",
    icon: Box,
    desc: "Receive industry-standard deliverables ready for immediate use. From vector source files to high-performance web assets, we provide a complete kit of professionally exported files that maintain their crisp quality at any scale."
  }
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
    {
      title: "Brand Identity & Logo Design",
      color: "#2563eb", // Blue
      icon: <Palette className="w-6 h-6" />,
      desc: "We engineer comprehensive visual identity systems, crafting iconic logos, bespoke typography, and strategic color palettes that establish a powerful market presence and ensure long-term brand recognition across all digital touchpoints."
    },
    {
      title: "Social Media Creatives",
      color: "#4f46e5", // Indigo
      icon: <Image className="w-6 h-6" />,
      desc: "Our team designs high-conversion social assets and optimized banners tailored for platform-specific engagement. We combine trending aesthetics with your brand's unique voice to stop the scroll and drive organic user interactions."
    },
    {
      title: "Marketing & Sales Collateral",
      color: "#7c3aed", // Violet
      icon: <Layout className="w-6 h-6" />,
      desc: "Transforming complex business value into professional brochures, digital pitch decks, and sales flyers. We focus on clear information hierarchy and persuasive design layouts that effectively communicate your message and close deals."
    },
    {
      title: "UI/UX & Web Interface",
      color: "#db2777", // Pink
      icon: <MousePointer2 className="w-6 h-6" />,
      desc: "Developing human-centric interface designs that prioritize seamless navigation and accessibility. Our process blends aesthetic beauty with functional precision to create digital experiences that delight users and fulfill complex business requirements intuitively."
    },
    {
      title: "Product & Packaging Design",
      color: "#0d9488", // Teal
      icon: <Box className="w-6 h-6" />,
      desc: "Crafting innovative physical packaging solutions that maximize shelf appeal and elevate the unboxing experience. We consider material durability, brand storytelling, and consumer psychology to create tangible products that stand out competitively."
    },
    {
      title: "Custom Illustrations",
      color: "#059669", // Green
      icon: <PenTool className="w-6 h-6" />,
      desc: "Adding a layer of exclusivity to your brand through unique hand-drawn or vector assets. Our custom illustrations are designed to simplify complex concepts and provide a distinctive, artistic character to your marketing."
    }
  ];

  const processSteps = [
    { step: "Discovery", desc: "Understanding your brand vision, values, and competition." },
    { step: "Conceptualization", desc: "Brainstorming and creating initial moodboards and sketches." },
    { step: "Design & Refine", desc: "Developing concepts into polished assets through feedback." },
    { step: "Delivery", desc: "Providing all file formats and brand guidelines for launch." }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

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
                <Sparkles className="w-3 h-3" /> Graphic Designing
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Visual Identities </span> That Scale.
              </h1>

              <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                We create stunning, high-impact designs that reflect your brand's unique essence and build a deep connection with your target audience across every digital and physical touchpoint.
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

                {/* Framed Layer - Matching the "Legacy" section rotation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY YOU NEED IT */}
      <section className="py-16 md:py-24 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">


        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-card border-2 border-border p-6 sm:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group">

                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 italic">
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

              <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tighter text-slate-900">
                Design is the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible">
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

      <section className="py-16 md:py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">

          {/* Section Header */}
          <div className="mb-12 md:mb-20 max-w-7xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-slate-900 leading-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium inline-block pr-6 -mr-6 overflow-visible">
                Socio Bhaarat
              </span> for Graphic Designing?
            </h2>
            <p className="text-slate-700 text-lg md:text-xl max-w-7xl font-medium leading-relaxed">

              We combine 500+ projects of experience with a <span className="text-slate-900 font-bold underline decoration-primary/30 decoration-4 underline-offset-4">high-end satisfaction</span> rate to deliver pixels that perform. 
            </p>
          </div>

          <FeatureGrid features={whyChoosePoints} />
        </div>
      </section>

      {/* SERVICES GRID */}

      <section className="py-24 md:py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-10 relative z-10">
          {/* Section Header: Shifted Left for Modern Engineering Feel */}
          <div className="mb-20 md:mb-10 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-none mb-8">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible">Socio Bhaarat</span> Brings to the Table
            </h2>
          </div>

          {/* The Technical Rows: No Empty Space */}
          <ServiceList services={services} />
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 italic">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">Creative Journey</span></h2>
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
      <CTASection
        title={<>Ready to Refine <br className="hidden md:block" /> Your Visuals?</>}
        description={<>Let’s create a brand identity that turns heads and converts leads. Your creative evolution starts here.</>}
        buttonText="Start Your Design Project"
      />
    </div>
  );
};

export default GraphicDesigning;