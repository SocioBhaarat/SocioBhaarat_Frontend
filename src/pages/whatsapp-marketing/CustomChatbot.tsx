

import { Button } from "@/components/ui/button";
import {
  Check, Bot, MessageCircle, Zap, Shield, BarChart3,
  TrendingUp, Users, Smartphone, Code2, Headphones,
  Settings2, Rocket, Search, MessageSquareCode,
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const WhatsAppChatbot = () => {
  const navigate = useNavigate();

  /* DATA */
  const heroData = {
    heading: "Automate Customer Engagement with Smart WhatsApp Chatbots",
    subtext: "We design and develop intelligent WhatsApp chatbots that automate customer communication, generate leads, handle queries instantly, and boost conversions — all within the world’s most popular messaging platform.",
    cta: "Get Free Consultation",
  };

  const socialLogos = [
    { src: "https://cdn-icons-png.flaticon.com/512/733/733585.png", label: "WhatsApp" },
    { src: "https://cdn-icons-png.flaticon.com/512/733/733547.png", label: "Facebook" },
    { src: "https://cdn-icons-png.flaticon.com/512/733/733558.png", label: "Instagram" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", label: "Meta API" },
  ];

  const whyChoosePoints = [
    { title: "Custom Development", icon: <Code2 /> },
    { title: "Lead Generation", icon: <TrendingUp /> },
    { title: "24/7 Support", icon: <Headphones /> },
    { title: "Official API Access", icon: <Smartphone /> },
    { title: "Payment Integration", icon: <Zap /> },
    { title: "Deep Analytics", icon: <BarChart3 /> },
  ];

  const whyNeedIntro =
    "Customers expect instant responses and seamless communication. A WhatsApp chatbot helps you automate conversations, nurture leads, and provide round-the-clock assistance without increasing operational costs.";

  const whyNeedPoints = [
    "Instant Automated Responses",
    "Improved Customer Engagement",
    "Higher Lead Conversion Rate",
    "Reduced Manual Workload",
    "Personalized Marketing Campaigns",
    "Faster Customer Support",
  ];

  const services = [
    "Custom Chatbot Flow Design",
    "Lead Capture & Qualification Bots",
    "E-commerce Chatbot Integration",
    "Booking & Appointment Bot",
    "Automated FAQ & Support Bots",
    "Payment & Order Tracking Integration",
    "WhatsApp Campaign Automation",
    "Chatbot Maintenance & Optimization",
  ];

  const developmentProcess = [
    { title: "Requirement Analysis", icon: <Search /> },
    { title: "Strategy & Flow", icon: <MessageSquareCode /> },
    { title: "UI & Conversation", icon: <Users /> },
    { title: "API Integration", icon: <Settings2 /> },
    { title: "Testing & Launch", icon: <Rocket /> },
    { title: "Optimization", icon: <TrendingUp /> },
  ];

  const features = [
    {
      icon: MessageCircle,
      title: "24/7 Automated Responses",
      description: "Never miss a customer query with round-the-clock automated support",
      benefits: ["Instant Replies", "Multi-language Support", "Smart Routing"]
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description: "Engage customers with personalized conversations",
      benefits: ["Product Recommendations", "Order Updates", "FAQ Automation"]
    },
    {
      icon: Zap,
      title: "Lead Generation",
      description: "Capture and qualify leads automatically through WhatsApp",
      benefits: ["Lead Capture Forms", "CRM Integration", "Auto Follow-ups"]
    },
    {
      icon: TrendingUp,
      title: "Sales Automation",
      description: "Automate your sales process and close deals faster",
      benefits: ["Product Catalogs", "Order Booking", "Payment Links"]
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* HERO SECTION */}
      <section className="relative pb-24 px-4 flex items-start overflow-hidden bg-[#fafafa]">

        {/* 1. TECHNICAL BACKGROUND ARCHITECTURE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Blueprint Grid Overlay - Logic Architecture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />

          {/* Atmospheric Mesh Blobs */}
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/5 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />

        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: Strategic Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <Bot className="w-3 h-3" /> AI-Powered Automation Lab
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Automate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] via-primary to-orange-500 italic font-serif font-medium uppercase">
                  WhatsApp Chatbots
                </span> At Scale.
              </h1>

              <p className="text-base md:text-xl text-slate-500 max-w-lg leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                "Deploy intelligent conversational agents that handle 90% of your customer queries instantly while driving conversions on autopilot."
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-12 h-14 md:h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Launch Your Bot <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Proof (Chatbot Bento) */}
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
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?w=800&q=80"
                    alt="AI Chatbot Logic and Interface"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Floating Mini-Metric Overlay */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Efficiency</p>
                        <p className="text-xl font-black text-slate-900">90% Auto-Reply</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Framed Layer for Identity */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
          <div className="mt-10 border-t border-border pt-12">
            <p className="text-xs text-center uppercase tracking-widest text-muted-foreground mb-8 font-bold">Integrated Across Ecosystems</p>
            <div className="flex justify-center items-center gap-8 md:gap-16 grayscale opacity-60 hover:grayscale-0 transition-all">
              {socialLogos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.label} className="h-8 md:h-10 w-auto" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (Sleek Grid) */}
      <section className="py-24 px-4 ">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Scale & Performance</span> </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">We don't just build bots; we build conversational experiences that drive revenue.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Seamlessly integrated into your existing business workflow for maximum efficiency.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* WHY YOU NEED IT (Enhanced) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* 1. NARRATIVE CONTENT (Appears first on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6 md:space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] md:text-sm font-black uppercase tracking-[0.2em] border border-primary/20 backdrop-blur-md">
                <Zap className="w-3 md:w-4 h-4" />
                <span>Efficiency at Scale</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter text-slate-900">
                Why Do You Need <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] via-primary to-orange-500 italic font-serif font-medium px-2">
                  WhatsApp Chatbots?
                </span>
              </h2>

              <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                {whyNeedIntro}
              </p>

              {/* Secondary Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
                {whyNeedPoints.slice(4).map((point, index) => (
                  <div key={index} className="flex flex-col gap-2 group">
                    <div className="h-1 w-10 bg-border group-hover:bg-primary transition-all duration-500" />
                    <span className="font-black text-[12px] md:text-xs uppercase tracking-tight opacity-80 text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. VISUAL CARD (Appears below text on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-[#25D366]/20 to-primary/10 rounded-[2.5rem] blur-xl opacity-50 -z-10" />
              <div className="bg-card border-2 border-border/50 p-6 sm:p-8 md:p-10 rounded-[2.5rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                {/* Subtle watermark icon */}
                <MessageCircle className="absolute -right-8 -bottom-8 w-32 h-32 md:w-40 md:h-40 text-secondary/5 rotate-12 pointer-events-none" />

                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 flex items-center gap-3 tracking-tighter italic">
                  <div className="h-8 md:h-10 w-1.5 bg-secondary rounded-full" />
                  Key Business Benefits
                </h3>

                <div className="space-y-4 md:space-y-6">
                  {whyNeedPoints.slice(0, 4).map((point, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3 md:gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-all duration-300 shadow-sm">
                        <Check className="w-5 h-5 md:w-6 md:h-6" strokeWidth={4} />
                      </div>
                      <span className="text-base md:text-lg font-bold text-slate-800 tracking-tight italic">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* OUR SERVICES (Spotlight Layout) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        {/* Technical Background Architecture (SocioBhaarat Engineering Lab) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header Architecture: Fluid Stack */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="text-left border-l-4 border-primary pl-6 md:pl-8">
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-slate-900 leading-tight">
                Our <br className="block md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                  WhatsApp Chatbot
                </span> Services
              </h2>
              <p className="text-slate-500 text-sm md:text-lg font-medium italic max-w-2xl leading-relaxed">
                "From simple FAQs to complex e-commerce automation, we build bots that handle the heavy lifting while you focus on growth."
              </p>
            </div>
          </div>

          {/* Adaptive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, backgroundColor: "hsl(var(--card))" }}
                className="group relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-card/50 border-2 border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm"
              >
                {/* Subtle Background Glow on Hover */}
                <div className="absolute -right-4 -top-4 w-20 h-20 md:w-24 md:h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon Container: Scaled for mobile */}
                  <div className="mb-4 md:mb-6 inline-flex p-2.5 md:p-3 rounded-xl bg-background border border-border group-hover:text-primary group-hover:border-primary/50 group-hover:shadow-md transition-all">
                    <Bot className="h-5 w-5 md:h-6 shrink-0" />
                  </div>

                  <h3 className="text-base md:text-lg font-black leading-tight text-slate-800 italic group-hover:text-primary transition-colors">
                    {service}
                  </h3>

                  {/* Added Lab Detail Line */}
                  <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 mt-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section className="py-16 md:py-24 px-4 bg-background relative overflow-hidden">

        <div className="container mx-auto max-w-6xl relative z-10 ">

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center italic">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Capabilities</span>
          </h2>


          {/* Adaptive Grid: 1 col on mobile, 2 on tablet+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-7">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="p-6 sm:p-8 md:p-10 h-full rounded-[2rem] md:rounded-[2.5rem] border-2 border-gray-200 hover:border-primary/20 transition-all bg-gradient-to-br from-card to-background overflow-hidden relative group">

                  {/* Responsive Watermark Icon: Scaled for mobile */}
                  <div className="absolute top-0 right-0 p-4 md:p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    <feature.icon className="w-24 h-24 md:w-32 md:h-32 rotate-12" />
                  </div>

                  <div className="relative z-10">
                    <feature.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />

                    <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-800 uppercase tracking-tight italic">
                      {feature.title}
                    </h3>

                    <p className="text-slate-500 text-sm md:text-base mb-8 leading-relaxed font-medium italic border-l-2 border-primary/10 pl-4">
                      {feature.description}
                    </p>

                    {/* Internal Benefit Grid: 1 col on narrow mobile, 2 on small tablets+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 md:gap-4">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-2 rounded-xl hover:bg-primary/5 transition-colors group/item">
                          <div className="h-2 w-2 rounded-full bg-secondary shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span className="text-[11px] md:text-sm font-bold text-slate-600 tracking-tight uppercase">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS (The Timeline) */}
      <section className="py-16 md:py-24 px-4 bg-muted/30 relative overflow-hidden">
        {/* Technical Background Architecture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 italic">
              Our Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Journey</span>
            </h2>
          </div>

          <div className="relative">
            <div className=" hidden sm:block absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent -translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {developmentProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-start md:items-center gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                    }`}
                >
                  {/* TEXT CONTAINER */}
                  <div className={`flex-1 pt-1 md:pt-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}>
                    <div className="bg-card/50 md:bg-transparent p-4 md:p-0 rounded-2xl border border-border/50 md:border-none shadow-sm md:shadow-none">
                      <h3 className="text-lg md:text-xl font-black text-slate-800 uppercase italic mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                        Strategy tailored to ensure your bot speaks your brand's voice perfectly.
                      </p>
                    </div>
                  </div>

                  {/* STEP INDICATOR (The Dot) */}
                  <div className="z-20 shrink-0 w-12 h-12 rounded-2xl md:rounded-full bg-primary text-white flex items-center justify-center font-black shadow-xl shadow-primary/30 text-lg italic border-4 border-background transition-transform hover:scale-110">
                    {index + 1}
                  </div>

                  {/* SPACER (Hidden on mobile to maintain left-alignment) */}
                  <div className="flex-1 hidden md:block" />
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
                Ready to Automate?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Get a custom chatbot built specifically for your business needs."
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-sm md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Get Started for Free
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default WhatsAppChatbot;