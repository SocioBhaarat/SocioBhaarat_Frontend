
import { Button } from "@/components/ui/button";
import {
  Check, Zap, Shield, BarChart3, Target, MessageSquare,
  Send, Users, Globe, Smartphone, Mail, Key, Layers, Rocket,
  ArrowRight,
  Radio,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CTASection } from "@/components/ui/CTASection";

const BulkBroadcasting = () => {
  const navigate = useNavigate();

  const whyChoosePoints = [
    { title: "High Delivery Rate", icon: <Rocket className="w-6 h-6" /> },
    { title: "Instant Broadcasting", icon: <Zap className="w-6 h-6" /> },
    { title: "Smart Segmentation", icon: <Users className="w-6 h-6" /> },
    { title: "Secure & Compliant", icon: <Shield className="w-6 h-6" /> },
    { title: "Real-Time Tracking", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Scalable Solutions", icon: <Layers className="w-6 h-6" /> },
  ];

  const services = [
    { name: "Bulk SMS Marketing", icon: <Smartphone /> },
    { name: "WhatsApp Messaging", icon: <MessageSquare /> },
    { name: "Email Campaigns", icon: <Mail /> },
    { name: "Transactional SMS", icon: <Send /> },
    { name: "OTP Services", icon: <Key /> },
    { name: "API Integration", icon: <Globe /> },
  ];

  // const whyNeedPoints = [
  //   "Instant Customer Communication",
  //   "Promote Offers & Discounts",
  //   "Send Transactional Alerts",
  //   "Increase Customer Engagement",
  //   "Improve Brand Awareness",
  //   "Cost-Effective Marketing Channel",
  // ];

  const features = [
    "Unlimited Contacts",
    "Smart Scheduling",
    "Rich Media Support",
    "Contact Management",
    "Delivery Analytics",
    "Dynamic Personalization",
  ];

  const whyNeedPoints = [
    "Direct to inbox",
    "No algorithm filter",
    "High open rates",
    "Cost-effective at scale",
    "Instant delivery",
    "Full analytics",
  ]

  const whyMetrics = [
    { icon: Target, title: "Instant Mass Reach", sub: "Reach thousands of customers in seconds — no delays, no algorithms blocking your message.", badge: "Speed", badgeBg: "bg-blue-100 text-blue-700", iconBg: "bg-blue-100 text-blue-700" },
    { icon: Users, title: "Personalised at Scale", sub: "Dynamic name tags and offer slots make every message feel 1-to-1 even when sent to millions.", badge: "Smart", badgeBg: "bg-purple-100 text-purple-700", iconBg: "bg-purple-100 text-purple-700" },
    { icon: TrendingUp, title: "Measurable ROI", sub: "Track delivery, open, and conversion rates on every single campaign with full attribution.", badge: "Data", badgeBg: "bg-green-100 text-green-700", iconBg: "bg-green-100 text-green-700" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
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
                <Zap className="w-3 h-3 fill-current" /> ROI-Driven Engineering Lab
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                Reach Thousands Instantly with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium">Smart Broadcasting</span> Solutions.
              </h1>

              <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                We help businesses connect with their audience instantly through reliable, fast, and targeted bulk broadcasting services. Whether it’s promotions, updates, or alerts — deliver your message at scale with confidence.
              </p>

              <div className="flex justify-start pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Start Broadcasting Now <ArrowRight className="ml-2 w-5 h-5" />
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
                {/* Decorative Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl rounded-[3rem] animate-pulse" />

                <div className="relative z-10 bg-white p-3 rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80"
                    alt="Advanced Messaging Dashboard"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Floating Mini-Metric Overlay */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Efficiency</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-black text-slate-900">98% Delivery</p>
                      <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (Modern Grid) */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal ">Socio Bhaarat </span> ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
              We combine advanced technology and real-time analytics to ensure your campaigns achieve maximum engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="mb-5 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">Engineered for speed and reliability to keep your business growing.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YOU NEED IT */}
      <section className="py-16 md:py-24 sm:px-6 lg:px-8 relative overflow-hidden bg-muted">

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Heading Area */}
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.2em] uppercase text-[10px] md:text-xs border-b-2 border-primary/20 pb-1"
            >
              Business Impact Architecture
            </motion.span>

            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-6 text-slate-900 leading-tight">
              Why Do You Need
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">
                Bulk Broadcasting?
              </span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-medium italic">
              "Bulk broadcasting eliminates the lag between your idea and your customer's action, ensuring you are the first to reach the phone."
            </p>
          </div>

          {/* Content Grid: Stacks on mobile, 2 columns on medium+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Visual Side (Left on Desktop, Bottom on Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 relative"
            >
              <div className="bg-card border-2 border-border/50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group">

                <div className="space-y-6 md:space-y-8 relative z-10">
                  {whyNeedPoints.slice(0, 3).map((point, index) => (
                    <div key={index} className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-all duration-300 shadow-sm">
                        <Target className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <h3 className="text-lg md:text-xl font-black text-slate-800 italic">{point}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Narrative Side (Right on Desktop, Top on Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 space-y-6 md:space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-[10px] md:text-xs font-bold uppercase tracking-widest border border-secondary/20 backdrop-blur-md">
                <Zap className="w-3 md:w-4 h-4 fill-secondary/20" />
                <span>Speed to Market</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black leading-tight text-slate-900 tracking-tighter italic">
                Communicate at the <br /> speed of thought.
              </h3>

              <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium border-l-4 border-secondary/30 pl-6 italic">
                In a world of noise, being the first to reach your customer's phone is everything. We engineering the infrastructure that makes it happen.
              </p>

              {/* Mini Grid for secondary points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {whyNeedPoints.slice(3).map((point, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="bg-primary/10 p-1.5 rounded-lg">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" strokeWidth={4} />
                    </div>
                    <span className="font-bold text-xs md:text-sm text-slate-700 tracking-tight">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-[#f8f9fb] relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-blue-600 font-bold tracking-[.3em] uppercase text-sm border-b-2 border-blue-200 pb-1.5 inline-block mb-5">
              Business Impact Architecture
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.07] mb-4">
              Why Do You Need{" "}
              <em className="bg-gradient-to-r from-blue-600 via-violet-600 to-orange-500 bg-clip-text text-transparent">
                Bulk Broadcasting?
              </em>
            </h2>
            <p className="text-base text-slate-400 italic max-w-xl mx-auto leading-[1.85]">
              "Bulk broadcasting eliminates the lag between your idea and your customer's
              action — ensuring you are the first to reach the phone."
            </p>
          </div>

          {/* Body */}
          <div className="grid md:grid-cols-2 gap-3 items-start">

            {/* LEFT — metric rows + stat strip */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2.5"
            >
              {whyMetrics.map((m, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 3, boxShadow: "0 6px 24px rgba(37,99,235,0.07)" }}
                  transition={{ duration: 0.2 }}
                  className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 px-5 py-5 rounded-2xl border border-transparent bg-white hover:border-blue-100 transition-all duration-200 cursor-default"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${m.iconBg}`}>
                    <m.icon size={19} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold italic text-slate-900 group-hover:text-blue-700 transition-colors mb-1 leading-snug">
                      {m.title}
                    </h4>
                    <p className="text-sm text-slate-400 italic leading-relaxed">{m.sub}</p>
                  </div>
                  <span className={`text-sm font-bold uppercase tracking-[.12em] px-3 py-1.5 rounded-full flex-shrink-0 ${m.badgeBg}`}>
                    {m.badge}
                  </span>
                </motion.div>
              ))}

              {/* Stat strip */}
              <div className="grid grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
                {[
                  { val: "98%", label: "Open Rate", color: "text-blue-600" },
                  { val: "5×", label: "Vs Email ROI", color: "text-violet-600" },
                  { val: "45s", label: "Avg Read Time", color: "text-orange-500" },
                ].map((s, i) => (
                  <div key={i} className="bg-white py-5 text-center">
                    <div className={`font-display text-2xl font-black leading-none mb-1.5 ${s.color}`}>{s.val}</div>
                    <div className="text-sm font-bold uppercase tracking-[.18em] text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — narrative + checklist + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sm font-bold uppercase tracking-[.18em] text-blue-700 w-fit">
                <Zap className="w-3 h-3" /> Speed to Market
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-extrabold italic text-slate-900 leading-tight">
                Communicate at the speed of thought.
              </h3>

              <p className="text-base text-slate-500 italic leading-[1.85] border-l-4 border-blue-100 pl-5 py-1">
                In a world of noise, being the first to reach your customer's phone is
                everything. We engineer the infrastructure that makes instant, personalised
                mass communication effortless and measurable.
              </p>

              {/* Check grid */}
              <div className="grid grid-cols-2 gap-2">
                {whyNeedPoints.map((point, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-default"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-200">
                      <Check size={11} strokeWidth={3} className="text-blue-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-700 transition-colors leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA strip */}
              <div className="bg-blue-600 rounded-2xl px-6 py-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-200 mb-1">
                    Ready to Broadcast?
                  </p>
                  <h4 className="font-display text-lg font-extrabold italic text-white leading-tight">
                    Start your first campaign today.
                  </h4>
                </div>
                <Button
                  variant="secondary"
                  className="rounded-full px-5 h-10 text-sm font-bold flex-shrink-0 bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-all"
                  onClick={() => navigate("/contact")}
                >
                  Get Started <ArrowRight className="ml-1.5 w-4 h-4" />
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SERVICES (Glassmorphism Cards) */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header Architecture */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl border-l-4 border-primary pl-6 md:pl-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">
                Our <br className="block md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium pr-4 -mr-4 overflow-visible">
                  Specialized Services
                </span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-medium italic">
                "Powerful communication tools engineered for every industrial scale."
              </p>
            </div>
          </div>

          {/* Adaptive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-center gap-4 p-5 md:p-6 rounded-[1.5rem] md:rounded-2xl bg-gradient-to-b from-card to-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all group"
              >
                {/* Responsive Icon Container */}
                <div className="p-3 md:p-4 rounded-xl bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                  {/* Ensuring icon scales properly */}
                  <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="font-black text-sm md:text-lg text-slate-800 italic group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  {/* Added a subtle detail line for the "Lab" aesthetic */}
                  <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="bg-card border-2 border-border/50 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden p-6 sm:p-10 md:p-16 relative shadow-2xl">

            {/* Responsive Decorative Icon */}
            <div className="absolute top-0 right-0 p-4 md:p-10 opacity-5 pointer-events-none">
              <Target className="w-32 h-32 md:w-64 md:h-64 rotate-12" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-12 text-center md:text-left text-slate-900 italic">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">Features</span>
              </h2>

              {/* Adaptive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-10 gap-x-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 bg-green-500/10 p-1.5 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shrink-0">
                      <Check className="h-4 w-4 md:h-5 md:w-5" strokeWidth={4} />
                    </div>
                    <div>
                      <h3 className="font-black text-lg md:text-xl mb-1 text-slate-800 uppercase italic leading-tight">
                        {feature}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                        Optimize your workflow with our built-in intelligence.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Responsive Testimonial & Social Proof Footer */}
              <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-border/50 flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="max-w-md border-l-4 border-primary/20 pl-6 text-center md:text-left">
                  <p className="text-lg md:text-xl font-bold italic text-slate-500 leading-relaxed">
                    "The most reliable broadcasting tool we've ever used."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        title={<>Ready to Scale Your Growth?</>}
        description={<>Join 500+ businesses using Sociobhaarat to reach their customers daily.</>}
        buttonText="Get Started for Free"
      />
    </div>
  );
};

export default BulkBroadcasting;