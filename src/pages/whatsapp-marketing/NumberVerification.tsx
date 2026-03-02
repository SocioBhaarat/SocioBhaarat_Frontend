
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CheckCircle, Shield, Zap, Phone, BadgeCheck, Users,
  SearchCheck, Database, FileCheck, BarChart4, ArrowRight, Lock,
  Settings2,
  Code2,
  Layers,
  Rocket,
  Check
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NumberVerification = () => {
  const navigate = useNavigate();

  /* DATA */
  const whyChoosePoints = [
    { title: "Real-Time Verification", icon: <Zap /> },
    { title: "Profile Validation", icon: <BadgeCheck /> },
    { title: "Bulk Processing", icon: <Database /> },
    { title: "High Accuracy", icon: <CheckCircle /> },
    { title: "Confidential Data", icon: <Lock /> },
    { title: "Full API Support", icon: <BarChart4 /> },
  ];

  const processSteps = [
    { step: "Documentation", desc: "Submit business details" },
    { step: "Request", desc: "Official submission to WhatsApp" },
    { step: "Review", desc: "WhatsApp platform audit" },
    { step: "Approval", desc: "Green tick & custom name" }
  ];

  /* SERVICES */

  const services = [
    { name: "Bulk Number Verification", icon: <Database className="w-6 h-6" />, desc: "High-speed auditing for lists up to 1M+ contacts." },
    { name: "Individual Validation", icon: <SearchCheck className="w-6 h-6" />, desc: "Real-time single entry checks for instant feedback." },
    { name: "Profile Data Matching", icon: <Users className="w-6 h-6" />, desc: "Cross-reference names and profile photos automatically." },
    { name: "Database Filtering", icon: <Shield className="w-6 h-6" />, desc: "Remove dead leads and non-WhatsApp numbers." },
    { name: "API-Based Solutions", icon: <Code2 className="w-6 h-6" />, desc: "Seamlessly integrate verification into your own app." },
    { name: "CRM Sync Support", icon: <Layers className="w-6 h-6" />, desc: "Direct connectors for Salesforce, Hubspot, and more." },
    { name: "Live Status Reports", icon: <BarChart4 className="w-6 h-6" />, desc: "Downloadable PDF/CSV reports with delivery metrics." },
    { name: "Campaign Automation", icon: <Rocket className="w-6 h-6" />, desc: "Verify and launch in one single automated workflow." },
    { name: "Optimization Audit", icon: <Settings2 className="w-6 h-6" />, desc: "Monthly cleanup to maintain high sender reputation." },
  ]

  /* FEATURES (UNCHANGED DESIGN) */

  const features = [
    {
      icon: BadgeCheck,
      title: "Official Business Verification",
      description:
        "Get your WhatsApp Business account officially verified with the green tick",
      benefits: [
        "Verified Badge",
        "Increased Trust",
        "Better Deliverability",
        "Official Business Profile"
      ]
    },
    {
      icon: Shield,
      title: "Custom Name Verification",
      description: "Display your business name instead of phone number",
      benefits: [
        "Brand Recognition",
        "Professional Appearance",
        "Customer Confidence",
        "Easy Identification"
      ]
    },
    {
      icon: Phone,
      title: "Number Authentication",
      description:
        "Secure authentication and verification for your business number",
      benefits: [
        "Security Compliance",
        "Account Protection",
        "Identity Verification",
        "API Access"
      ]
    },
    {
      icon: Users,
      title: "Multi-User Access",
      description:
        "Enable multiple team members to use verified business account",
      benefits: [
        "Team Collaboration",
        "Role Management",
        "Activity Tracking",
        "Centralized Control"
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* 1. TECHNICAL BACKGROUND ARCHITECTURE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Blueprint Grid Overlay - Representing Data Validation Grids */}
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
                <Shield className="w-3 h-3" /> Enterprise Grade Validation
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Accurate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                  WhatsApp Verification
                </span> Solutions.
              </h1>

              <p className="text-base md:text-xl text-slate-500 leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                "Reduce bounce rates by 99% and maintain a high-trust customer database with official green-tick architecture and real-time active user validation."
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-12 h-14 md:h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Start Verification <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                {/* Social Proof Avatars */}
                <div className="flex -space-x-3 items-center">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-primary shadow-sm">
                      <Check className="w-4 h-4" />
                    </div>
                  ))}
                  <span className="pl-6 text-[11px] md:text-sm font-black text-slate-400 uppercase tracking-widest italic">
                    Used by 500+ Brands
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Proof (Security Bento) */}
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
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                    alt="Secure Data Verification Interface"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Floating Verification Badge UI */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                        <BadgeCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Database Status</p>
                        <p className="text-xl font-black text-slate-900 italic">Verified User</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </section>

      {/* WHY CHOOSE US (Technical Grid) */}
      <section className="py-24 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">The Sociobhaarat Edge</h2>

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
                <p className="text-sm text-muted-foreground leading-relaxed">Fast-track your business growth with our secure validation engine.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YOU NEED (Metric-Style) */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">Why Verification Matters?</h2>
              <p className="text-lg text-muted-foreground">
                Sending campaigns to invalid numbers isn't just a waste of money—it risks your official WhatsApp API standing.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 border-l-4 border-primary bg-primary/5">
                  <p className="text-2xl font-bold">99.9%</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Accuracy Rate</p>
                </div>
                <div className="p-4 border-l-4 border-secondary bg-secondary/5">
                  <p className="text-2xl font-bold">0.1s</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Validation Speed</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Improve Delivery", icon: <CheckCircle className="text-green-500" /> },
                { label: "Reduce Cost", icon: <CheckCircle className="text-green-500" /> },
                { label: "Maintain CRM", icon: <CheckCircle className="text-green-500" /> },
                { label: "Boost ROI", icon: <CheckCircle className="text-green-500" /> }
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 p-6 rounded-2xl bg-card border border-border shadow-sm">
                  {point.icon}
                  <span className="font-bold text-sm">{point.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED SERVICES SECTION */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 border border-primary/20"
            >
              <Zap className="w-3 h-3" />
              <span>PRO-GRADE TOOLS</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Verification Suite</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Precision-engineered tools to audit, clean, and verify your global WhatsApp databases in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dynamic Service Mapping with Specific Icons */}
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden"
              >
                {/* Accent Glow */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                    {service.icon}
                  </div>
                  <div className="text-[10px] font-bold text-muted-foreground/50 tracking-widest uppercase">
                    Service 0{index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">Platform Capabilities</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="p-10 h-full rounded-[2.5rem] bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all border-border/50">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="p-4 rounded-3xl bg-primary/10 text-primary">
                      <feature.icon className="h-10 w-10" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-4 border-t border-border/50">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm font-semibold italic text-foreground/70">
                            <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ENHANCED VERIFICATION ROADMAP */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        {/* Decorative Background Accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-xs"
            >
              Step-by-Step Guide
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">The Roadmap to Green Tick</h2>
          </div>

          <div className="relative">
            {/* Central Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary to-primary/10 -z-10" />

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="bg-card border border-border/60 rounded-[2.5rem] p-8 text-center transition-all duration-500 hover:border-primary/50 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 relative z-10 overflow-hidden">

                    {/* Corner Number Decor */}
                    <div className="absolute -top-2 -right-2 text-6xl font-black text-primary/5 italic select-none">
                      0{index + 1}
                    </div>

                    {/* Icon / Number Circle */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 bg-background border-4 border-muted rounded-full flex items-center justify-center font-bold mx-auto transition-all duration-500 group-hover:border-primary group-hover:scale-110 shadow-xl">
                        {index === 3 ? (
                          <BadgeCheck className="w-8 h-8 text-[#25D366]" />
                        ) : (
                          <span className="text-xl">{index + 1}</span>
                        )}
                      </div>

                      {/* Connection Dots (Mobile) */}
                      <div className="md:hidden w-px h-8 bg-dashed border-l border-primary/30 mx-auto mt-4" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {item.step}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    {/* Status Badge Mockup */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${index === 3 ? 'bg-green-500/10 text-green-500' : 'bg-secondary/10 text-secondary'
                      }`}>
                      <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${index === 3 ? 'bg-green-500' : 'bg-secondary'
                        }`} />
                      {index === 3 ? 'Final Approval' : 'Standard Phase'}
                    </div>
                  </div>

                  {/* Hover Shadow Glow */}
                  <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity -z-20" />
                </motion.div>
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
                Ready to Verify Your Assets?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Stop guessing and start validating. Join thousands of brands cleaning their databases today."
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-sm md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Start Verification Process
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default NumberVerification;