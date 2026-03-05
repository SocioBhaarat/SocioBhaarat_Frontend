import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Mail, Zap, Users, BarChart3, ShieldCheck, MousePointer2,
  RefreshCcw, LayoutTemplate, Send, Search, CheckCircle2, ArrowRight,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmailMarketing = () => {
  const navigate = useNavigate();

  /* ================= DATA VARIABLES ================= */
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
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 uppercase tracking-widest">
                <Mail className="w-3 h-3" />
                ROI-Focused Marketing
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                {heroData.heading.split("Smart")[0]}
                <span className="text-primary italic">Smart Email Automation</span>
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
                <div className="flex items-center gap-2 ml-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted" />)}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Join 200+ active brands</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg"
                alt="Email Marketing Automation"
                className="relative rounded-[2.5rem] shadow-2xl border border-border"
              />
              {/* Floating Stat Card */}
              <div className="absolute -top-6 -right-6 bg-card border border-border p-6 rounded-2xl shadow-xl animate-float">
                <BarChart3 className="text-primary w-8 h-8 mb-2" />
                <p className="text-2xl font-black text-foreground">4200%</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase">Average Email ROI</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Expert Email Management</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-3xl border border-border/50 hover:border-primary transition-all flex flex-col items-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">We focus on the metrics that matter: Opens, Clicks, and Revenue.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YOU NEED EMAIL MARKETING */ }
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
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
                <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
                  Stop Relying on <span className="text-primary italic">Borrowed</span> Audiences.
                </h2>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
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
              <div className="bg-card border-2 border-border p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
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
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Solutions Suite</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Full-service email management from technical setup to creative execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group p-8 rounded-[2rem] bg-muted/30 border border-transparent hover:border-primary/20 hover:bg-card transition-all duration-300"
              >
                <div className="mb-6 p-3 w-fit rounded-xl bg-background text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="py-24 px-4 bg-muted/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16">Lifecycle Strategy</h2>
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
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">


            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Own Your Audience?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Stop relying solely on social algorithms. Build a list you truly own."
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-sm md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Claim Your Free Audit
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketing;