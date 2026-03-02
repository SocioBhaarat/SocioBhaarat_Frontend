

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
      <section className="py-24 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Scale & Performance</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We don't just build bots; we build conversational experiences that drive revenue.</p>
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
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Seamlessly integrated into your existing business workflow for maximum efficiency.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* WHY YOU NEED IT (Enhanced) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#25D366]/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#25D366]/20 to-primary/10 rounded-[2.5rem] blur-xl opacity-50 -z-10" />
              <div className="bg-card border border-border p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                {/* Subtle watermark icon */}
                <MessageCircle className="absolute -right-8 -bottom-8 w-40 h-40 text-secondary/5 rotate-12" />

                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="h-10 w-1 bg-secondary rounded-full" />
                  Key Business Benefits
                </h3>

                <div className="space-y-6">
                  {whyNeedPoints.slice(0, 4).map((point, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                        <Check className="w-6 h-6" strokeWidth={3} />
                      </div>
                      <span className="text-lg font-semibold">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Narrative Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Efficiency at Scale</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Why Do You Need <br />
                <span className="text-secondary">WhatsApp Chatbots?</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {whyNeedIntro}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {whyNeedPoints.slice(4).map((point, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="h-1 w-12 bg-border group-hover:bg-primary transition-colors" />
                    <span className="font-bold text-sm uppercase tracking-tighter opacity-80">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button
                  variant="outline"
                  className="rounded-full px-8 border-2 hover:bg-primary hover:text-white transition-all"
                  onClick={() => navigate("/contact")}
                >
                  Explore Use Cases
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* OUR SERVICES (Spotlight Layout) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our WhatsApp Chatbot Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                From simple FAQs to complex e-commerce automation, we build bots that handle the heavy lifting while you focus on growth.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-secondary" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, backgroundColor: "hsl(var(--card))" }}
                className="group relative p-8 rounded-[2rem] bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Background Glow on Hover */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-background border border-border group-hover:text-primary group-hover:border-primary/50 transition-all shadow-sm">
                    <Bot className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    {service}
                  </h3>
                </div>

                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  <span>Details</span>
                  <div className="ml-2 h-[1px] w-0 group-hover:w-8 bg-primary transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES (Detailed View) */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Powerful Capabilities</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full rounded-[2.5rem] border-2 border-transparent hover:border-primary/20 transition-all bg-gradient-to-br from-card to-background overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <feature.icon className="w-32 h-32" />
                  </div>

                  <feature.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{feature.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-medium">
                        <div className="h-2 w-2 rounded-full bg-secondary" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS (The Timeline) */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Our Development Journey</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {developmentProcess.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:text-right">
                    <div className={index % 2 === 0 ? 'md:text-left' : 'md:text-right'}>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">Strategy tailored to ensure your bot speaks your brand's voice perfectly.</p>
                    </div>
                  </div>

                  <div className="z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/30">
                    {index + 1}
                  </div>

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