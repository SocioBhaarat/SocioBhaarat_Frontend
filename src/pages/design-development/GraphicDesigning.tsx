import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/ui/CTASection";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ServiceList from "@/components/ui/ServiceList";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Palette, Layers, PenTool, Layout, Box, Image,
  CheckCircle2, ArrowRight, Zap, Target, MousePointer2,
  Sparkles, Brush, Component,
  Lightbulb,
  Paintbrush,
  Rocket,
  Search
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GraphicDesigning = () => {
  const navigate = useNavigate();

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
      color: "#C2410C", // Blue
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
    {
      step: "Discovery",
      desc: "Understanding your brand vision, values, and competition.",
      icon: Search,
    },
    {
      step: "Conceptualization",
      desc: "Brainstorming and creating initial moodboards and sketches.",
      icon: Lightbulb,
    },
    {
      step: "Design & Refine",
      desc: "Developing concepts into polished assets through feedback.",
      icon: Paintbrush,
    },
    {
      step: "Delivery",
      desc: "Providing all file formats and brand guidelines for launch.",
      icon: Rocket,
    },
  ];

  return (
    <>
      <SEO
        title="Graphic Designing Services | Socio Bhaarat"
        description="Create visually stunning and impactful designs that elevate your brand identity and engage your audience across all platforms."
        keywords="graphic designing services, graphic design company, logo design, branding agency, social media creatives, graphic designer in jabalpur"
      />
      <div className="min-h-screen bg-background selection:bg-primary/20">

        {/* Hero Section */}
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
        <section className="py-12 bg-muted/30 relative overflow-hidden">
          {/* Blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[60px] opacity-50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-[60px] opacity-50 pointer-events-none" />

          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left — Impact Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="relative bg-background border border-border rounded-[2rem] p-7 md:p-9 overflow-hidden">
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-orange-500" />

                  {/* Card title */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-600 to-orange-500" />
                    <h3 className="text-xl md:text-2xl font-normal text-foreground">
                      Design Impact Analysis
                    </h3>
                  </div>

                  {/* Points */}
                  <div className="flex flex-col gap-2">
                    {whyNeedPoints.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50 border border-border/50
                           hover:bg-background hover:border-blue-200 transition-all duration-200 group/item cursor-default"
                      >
                        <div className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0
                                group-hover/item:bg-blue-50 group-hover/item:border-blue-200 transition-all">
                          <CheckCircle2 className="w-4 h-4 text-muted-foreground group-hover/item:text-blue-600 transition-colors" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700 leading-snug">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right — Narrative */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="order-1 lg:order-2 flex flex-col gap-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.14em] w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                  Brand Psychology Lab
                </div>

                {/* Blue divider */}
                <div className="w-8 h-0.5 bg-blue-600 rounded-full" />

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                  Design is the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 font-medium">
                    Silent Ambassador
                  </span>{" "}
                  of Your Brand.
                </h2>

                {/* Quote block */}
                <div className="relative bg-background border border-border border-l-[3px] border-l-blue-600 rounded-xl rounded-l-none p-5">
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    "Before a customer ever reads your copy or talks to your team, they
                    judge you by your visuals. Great design builds a psychological bridge
                    of trust."
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WHY CHOOSE SOCIO BHAARAT */}
        <section className="py-12 bg-white relative overflow-hidden ">
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
        <section className="py-12 bg-muted/30 relative overflow-hidden">
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
        <section className="pt-5 pb-12 bg-muted/30">
          <div className="container mx-auto w-full max-w-7xl">

            {/* Header */}
            <div className="text-center mb-14">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">
                Our process
              </p>
              <h2 className=" text-4xl md:text-5xl font-bold leading-tight">
                The{" "}
                <em className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                  Creative Journey
                </em>
              </h2>
            </div>

            {/* Steps — unified bordered panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border rounded-[2rem] overflow-hidden bg-background">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative flex flex-col gap-0 p-8 md:p-9 cursor-default group overflow-hidden transition-colors duration-200 hover:bg-muted/50",
                    index < processSteps.length - 1 && [
                      "border-b lg:border-b-0 lg:border-r",
                      "sm:border-b-0 sm:border-r",
                      index % 2 === 1 && "sm:border-r-0 sm:border-b lg:border-b-0 lg:border-r",
                    ],
                    "border-border"
                  )}
                >
                  {/* Top row: number + icon + arrow */}
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className="w-11 h-11 rounded-xl border-[1.5px] border-blue-600 flex items-center justify-center
                         font-serif text-xl font-normal text-blue-600 bg-background
                         group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)]
                         transition-all duration-250"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center
                              group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-200">
                        <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                      </div>
                      {index < processSteps.length - 1 && (
                        <span className="text-border group-hover:text-blue-300 transition-colors text-lg hidden lg:block">
                          →
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phase label */}
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
                    Phase {String(index + 1).padStart(2, "0")}
                  </p>

                  {/* Title */}
                  <h3 className="text-[1.1rem] font-bold text-foreground mb-2.5 leading-snug">
                    {item.step}
                  </h3>

                  {/* Desc */}
                  <p className="text-[13.5px] text-muted-foreground leading-relaxed italic">
                    {item.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-orange-500
                scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
                </div>
              ))}
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
    </>

  );
};

export default GraphicDesigning;