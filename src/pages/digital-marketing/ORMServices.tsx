import { staggerContainer, fadeUp, cardAnimation, fadeLeft } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { Check, Shield, Star, AlertTriangle, TrendingUp, ArrowRight, ShieldCheck, BarChart3, MessageSquare, Search, Zap } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ORMServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Shield,
      title: "Reputation Monitoring & Alerts",
      desc: "Real-time tracking of brand mentions, reviews, and search visibility across digital platforms."
    },
    {
      icon: Star,
      title: "Review Management & Response",
      desc: "Professional handling of customer reviews to build trust and improve ratings."
    },
    {
      icon: AlertTriangle,
      title: "Negative Content Suppression",
      desc: "Strategic SEO techniques to reduce the visibility of harmful or misleading content."
    },
    {
      icon: TrendingUp,
      title: "Positive Content Promotion",
      desc: "Promoting testimonials, achievements, and success stories to strengthen brand image."
    },
    {
      icon: Shield,
      title: "Brand Image Building",
      desc: "Developing authority-driven content strategies to enhance online credibility."
    },
    {
      icon: AlertTriangle,
      title: "Crisis Management Strategy",
      desc: "Rapid response planning and execution to control and recover from reputation crises."
    },
    {
      icon: TrendingUp,
      title: "Online PR & Media Outreach",
      desc: "Improving brand visibility through digital PR campaigns and authoritative publications."
    },
    {
      icon: Star,
      title: "Competitor Reputation Analysis",
      desc: "Monitoring competitor strategies to position your brand ahead in the market."
    },
  ]

  const whyChooseUs = [
    "24/7 Reputation Monitoring",
    "Expert Review Response Management",
    "Negative Content Suppression",
    "SEO-Based Brand Protection",
    "Crisis Management Strategies",
    "Transparent Reporting & Analysis",
  ]

  const whatIncluded = [
    "Brand mention monitoring across web and social media",
    "Review monitoring on Google, Facebook, Yelp, etc.",
    "Sentiment analysis and reporting",
    "Review response management",
    "Negative content suppression",
    "Positive content creation and promotion",
    "Crisis management planning",
    "Competitor reputation analysis",
    "Monthly reputation reports",
    "Review generation campaigns",
  ]

  const WhyORMMatters = [
    { stat: "90%", label: "Check Reviews First", desc: "Consumers who read online reviews before visiting a local business." },
    { stat: "88%", label: "Absolute Trust", desc: "People who trust online reviews as much as personal recommendations." },
    { stat: "5-9%", label: "Revenue Impact", desc: "Increase in revenue driven by a simple one-star increase on major platforms." },
    { stat: "12:1", label: "Recovery Ratio", desc: "Number of positive experiences needed to offset a single negative review." },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-primary/10">

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* 1. TECHNICAL BACKGROUND DESIGN */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Grid Overlay - The "Lab" Look */}
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
                <Shield className="w-3 h-3" /> Brand Protection Lab
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Secure Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Digital Legacy</span>.
              </h1>

              <p className="text-lg sm:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium italic">
                "We protect, manage, and strengthen your online reputation across Bhopal & Jabalpur using advanced suppression and PR strategies."
              </p>

              <div className="flex justify-start pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Protect Your Brand <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Proof (Dashboard Image) */}
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
                    src="https://images.unsplash.com/photo-1766853297154-3dcb4d3b38f8"
                    alt="Brand Reputation Dashboard"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Floating Mini-Metric Overlay */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Sentiment Score</p>
                    <p className="text-xl font-black text-slate-900">98.4% Positive</p>
                  </div>
                </div>

                {/* Framed Layer */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header Block */}
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">
              The SocioBhaarat Advantage
            </span>
            <h2 className="font-display text-4xl sm:text-5xl  md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              Why Brands <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic pr-1 inline-block tracking-tight font font-medium">Trust Us</span>
            </h2>
            <p className="text-md md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto italic">
              "We combine strategic monitoring and professional response management to protect and enhance your brand’s image across Madhya Pradesh."
            </p>
          </motion.div>

          {/* 2. PILLAR GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "24/7 Monitoring", icon: <ShieldCheck />, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "Expert Response", icon: <MessageSquare />, color: "text-orange-600", bg: "bg-orange-50" },
              { title: "Content Suppression", icon: <AlertTriangle />, color: "text-red-600", bg: "bg-red-50" },
              { title: "SEO Brand Protection", icon: <Search />, color: "text-indigo-600", bg: "bg-indigo-50" },
              { title: "Crisis Strategies", icon: <Zap />, color: "text-yellow-600", bg: "bg-yellow-50" },
              { title: "Transparent Analysis", icon: <BarChart3 />, color: "text-emerald-600", bg: "bg-emerald-50" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full items-start">
                  {/* Animated Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 tracking-tight">
                    {whyChooseUs[index]}
                  </h3>

                  <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">
                    <Check size={12} />
                    Verified Performance
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3. LOCAL AUTHORITY PULL-QUOTE */}
          <motion.div
            variants={fadeUp}
            className="mt-20 p-8 rounded-[3rem] bg-white border border-slate-100 text-center shadow-lg max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 via-primary to-orange-500" />
            <p className="text-xl text-slate-700 leading-relaxed font-medium italic ">
              "Built on the psychology of trust and the architecture of performance. We are Bhopal and Jabalpur's leading authority in digital reputation security."
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why ORM Matters */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">

        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header Block */}
          <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-200 backdrop-blur-sm">
              <TrendingUp className="w-3 h-3" />
              Market Authority & Revenue
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              The Science of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Digital Trust</span>
            </h2>

            <p className="text-sm md:text-lg text-slate-500 font-medium italic leading-relaxed max-w-3xl mx-auto">
              "In today’s digital world, customers trust online reviews as much as personal recommendations. A single negative search result can divert 70% of potential leads to your competitors."
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">

            {/* 2. LEFT PANEL: Narrative Context (5 Columns) */}
            <motion.div
              variants={fadeLeft}
              className="lg:col-span-5 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center space-y-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                Protecting Your Local <br /> Market Dominance
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed italic">
                Online Reputation Management ensures your business maintains a positive image, builds customer trust, and stays ahead of competitors across <strong>Bhopal & Jabalpur</strong>.
              </p>
              <div className="pt-4 border-t border-slate-50">
                <p className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Live Reputation Monitoring Active
                </p>
              </div>
            </motion.div>

            {/* 3. RIGHT PANEL: Data Bento Grid (7 Columns) */}
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
              {WhyORMMatters.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardAnimation}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl font-black tracking-tighter text-slate-900 group-hover:text-primary transition-colors">
                      {item.stat}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      <Check size={16} />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-tight">{item.label}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed italic group-hover:text-slate-600 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* 4. LOCALIZED FOOTER CALLOUT */}
          <motion.div
            variants={fadeUp}
            className="mt-16 text-center"
          >
            <div className="inline-block p-1 rounded-full bg-slate-100">
              <div className="px-6 py-2 rounded-full bg-white shadow-sm border border-slate-200">
                <p className="text-xs font-bold text-slate-600 tracking-wide">
                  Leading the digital shift across <span className="text-primary underline decoration-primary/30 underline-offset-4">Madhya Pradesh</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* OUR SERVICES (GLASS GRID) */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">Strategic <span className="text-primary font-serif font-medium">Armor</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:scale-125 transition-transform"><service.icon size={80} /></div>
                <div className="mb-6 p-4 w-fit rounded-2xl bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white transition-all"><service.icon size={24} /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed italic">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSIONS (CHECKLIST) */}
      <section className="py-24 px-4 bg-muted/50 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-16 text-center italic tracking-tight">Enterprise-Grade Coverage</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {whatIncluded.map((item, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all"><Check size={14} /></div>
                <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection quote="In the digital age, your reputation is the currency of trust—we ensure your brand never goes bankrupt." />

      {/* FINAL CTA */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">


            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                What Does the Internet Say About You?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Get a free 24-hour reputation audit and see how your brand ranks in Bhopal & Jabalpur."
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-sm md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Claim Free Reputation Audit
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>

  );
};

export default ORMServices;
