import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/ui/CTASection";
import { motion } from "framer-motion";
import {
  Mail, Zap, Users, BarChart3, ShieldCheck, MousePointer2,
  RefreshCcw, LayoutTemplate, Send, Search, CheckCircle2, ArrowRight,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmailMarketing = () => {
  const navigate = useNavigate();

  /* DATA VARIABLES */
  const heroData = {
    heading: "Convert Subscribers into Customers with Smart Email Automation",
    subtext: "We create high-converting email marketing campaigns that build relationships, nurture leads, and drive consistent revenue through personalized automation and data-driven optimization.",
    cta: "Start Your Campaign",
  };

  const whyChoosePoints = [
    { title: "High Inbox Deliverability", icon: <ShieldCheck /> },
    { title: "Smart Segmentation", icon: <Users /> },
    { title: "Automated Workflows", icon: <RefreshCcw /> },
    { title: "Creative Template Design", icon: <LayoutTemplate /> },
    { title: "A/B Testing & Optimization", icon: <BarChart3 /> },
    { title: "Performance Reporting", icon: <Search /> },
  ];

  const services = [
    { name: "Automation & Drip Campaigns", icon: <Zap />, desc: "Automated welcome series and abandoned cart recovery flows." },
    { name: "Newsletter Management", icon: <Mail />, desc: "Engaging weekly or monthly newsletters to keep your brand top-of-mind." },
    { name: "List Cleaning & Growth", icon: <Users />, desc: "Removing inactive subscribers and building a high-quality list." },
    { name: "Transactional Emails", icon: <Send />, desc: "Optimized order confirmations and shipping updates that drive upsells." },
    { name: "Promotional Blast Campaigns", icon: <MousePointer2 />, desc: "Strategic holiday and seasonal sales campaigns for maximum impact." },
    { name: "Detailed Analytics Audit", icon: <BarChart3 />, desc: "In-depth tracking of open rates, clicks, and actual sales revenue." },
  ];

  const whyNeedPoints = [
    "Direct Ownership of Your Audience",
    "Unmatched ROI (Up to 4200%)",
    "Personalized Customer Journeys",
    "Higher Conversion than Social Media",
    "Automated Revenue Generation",
    "Detailed Behavioral Analytics"
  ];

  const processSteps = [
    { step: "Audit & Strategy", desc: "Analyzing your current list and defining goals." },
    { step: "Design & Copy", desc: "Crafting beautiful templates and persuasive messaging." },
    { step: "Automation Setup", desc: "Building the logic and behavioral triggers." },
    { step: "Launch & Optimize", desc: "Sending campaigns and refining based on data." }
  ];

  return (
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
                <Mail className="w-3 h-3 fill-primary/20" /> Email Marketing
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                Convert Subscribers into Customers with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Smart Email Automation</span>
              </h1>

              <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                We create high-converting email marketing campaigns that build relationships, nurture leads, and drive consistent revenue through personalized automation and data-driven optimization.
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

                <div className="relative p-3 bg-white border-2 border-slate-200 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2"
                  alt="Email Marketing Automation"
                  className="relative rounded-[2rem] md:rounded-[3rem] group-hover:scale-105 transition-transform duration-1000"
                />

                  {/* Floating Mini-Metric Overlay */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <BarChart3 className="text-primary w-8 h-8 mb-2" />
                    <p className="text-2xl font-black text-foreground">4200%</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">Average Email ROI</p>
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
      <section className="py-24 bg-muted">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">Socio Bhaarat</span> for Email Marketing</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-3xl border border-border/50 hover:border-primary transition-all flex flex-col items-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">We focus on the metrics that matter: Opens, Clicks, and Revenue.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YOU NEED EMAIL MARKETING */}
      <section className="py-24 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
        {/* Modern Gradient Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 -z-10" />

        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Narrative & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.span
                  className="text-primary font-bold tracking-widest uppercase text-xs"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  Audience Ownership
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
                  Stop Relying on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">Borrowed</span> Audiences.
                </h2>
              </div>

              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                Social media algorithms change daily, and your reach can vanish overnight. Email marketing gives you a direct, un-interrupted line to your customers that you <strong>own 100%</strong>. It’s the highest ROI channel in digital marketing for a reason.
              </p>

              {/* Feature Comparison */}
              <div className="space-y-4">
                {[
                  { label: "Direct Access", sub: "Bypass algorithms and reach the inbox directly." },
                  { label: "Personalization", sub: "Speak to customers based on their specific behavior." },
                  { label: "Data Ownership", sub: "Build a valuable asset that stays with your business." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="mt-1 h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center p-1 group-hover:bg-primary transition-colors">
                      <CheckCircle2 className="w-3 h-3 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base leading-none mb-1">{item.label}</h4>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Visual Impact Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border-2 border-border py-10 px-5 md:py-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                {/* Animated Background Pulse */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-colors" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8">Campaign Efficiency Metrics</h3>

                  <div className="grid gap-6">
                    {whyNeedPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <span className="font-semibold">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 p-6 bg-primary rounded-2xl text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold uppercase opacity-80 mb-1">Retention Strategy</p>
                        <p className="text-xl font-bold leading-none">Automated Lifecycle</p>
                      </div>
                      <RefreshCcw className="w-8 h-8 opacity-20" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ENHANCED SERVICES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">Services</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">Full-service email management from technical setup to creative execution.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group p-8 rounded-[2rem] bg-muted/30 border border-transparent hover:border-primary/20 hover:bg-card transition-all duration-300"
              >
                <div className="mb-6 p-3 w-fit rounded-xl bg-background text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Lifecycle <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">Strategy</span></h2>
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-dashed border-t border-border -z-10" />

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.step}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        title={<>Ready to Own <br className="hidden md:block" /> Your Audience?</>}
        description={<>Stop relying solely on social algorithms. Build a list you truly own.</>}
        buttonText="Claim Your Free Audit"
      />
    </div>
  );
};

export default EmailMarketing;