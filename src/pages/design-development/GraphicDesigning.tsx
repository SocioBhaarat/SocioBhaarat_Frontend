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

  /* ================= DATA VARIABLES ================= */
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

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent">
        {/* Artistic Background Accents */}
        <div className="absolute top-0 right-0 p-20 opacity-10">
            <Palette className="w-96 h-96 rotate-12" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 uppercase tracking-widest">
                <Sparkles className="w-3 h-3" />
                Creative Excellence
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                {heroData.heading.split("Visual")[0]}
                <span className="text-primary italic font-serif italic">Visual Identities</span> That Scale.
              </h1>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
                {heroData.subtext}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-10 h-14 shadow-2xl shadow-primary/20 text-lg hover:scale-105 transition-transform"
                  onClick={() => navigate("/contact")}
                >
                  {heroData.cta}
                </Button>
                <Button variant="outline" size="lg" className="rounded-full h-14 border-2">
                    View Portfolio
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <img
                src="https://img.freepik.com/free-vector/graphic-design-concept-illustration_114360-1049.jpg"
                alt="Graphic Design Process"
                className="relative rounded-[2.5rem] shadow-2xl border border-border group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY YOU NEED IT ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-card border-2 border-border p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-8">Design Impact Analysis</h3>
                <div className="space-y-6">
                  {whyNeedPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all group">
                      <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-sm tracking-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Design is the <span className="text-primary italic">Silent Ambassador</span> of Your Brand.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Before a customer ever reads your copy or talks to your team, they judge you by your visuals. Great design doesn't just look pretty—it builds a psychological bridge of trust and authority.
              </p>
              <div className="pt-4">
                <Button variant="link" className="text-primary p-0 h-auto text-lg font-bold group">
                  Learn about Brand Psychology <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE SOCIO BHAARAT ================= */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">The Socio Bhaarat Advantage</h2>
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

      {/* ================= SERVICES GRID ================= */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Design Solutions Suite</h2>

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

      {/* ================= DESIGN PROCESS ================= */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16 italic">The Creative Journey</h2>
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

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-primary p-12 md:p-20 text-center rounded-[4rem] shadow-2xl relative overflow-hidden border-none text-white">
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight italic">
                Ready to Refine Your Visuals?
              </h2>
              <p className="text-xl opacity-80 max-w-xl mx-auto font-medium">
                Let’s create a brand identity that turns heads and converts leads. Your creative evolution starts here.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="rounded-full h-16 px-12 text-xl font-bold hover:scale-105 transition-transform"
                  onClick={() => navigate("/contact")}
                >
                  Start Your Design Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default GraphicDesigning;