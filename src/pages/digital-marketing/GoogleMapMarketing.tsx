import { cardAnimation, fadeUp, staggerContainer } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { Check, MapPin, Star, Search, TrendingUp, ArrowRight, BarChart3, LinkIcon, Target, Zap, Locate } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const GoogleMapMarketing = () => {
  const navigate = useNavigate();

  const services = [
    { icon: MapPin, title: "Google Business Profile Setup & Optimization", desc: "Complete setup, verification, and profile optimization." },
    { icon: Search, title: "Local Keyword Research", desc: "Target high-converting local keywords for map ranking." },
    { icon: Star, title: "Review Generation & Management", desc: "Build trust with strategic review acquisition and responses." },
    { icon: TrendingUp, title: "Map Ranking Improvement", desc: "Advanced strategies to improve local pack ranking." },
    { icon: Check, title: "NAP Optimization", desc: "Consistent Name, Address, and Phone across platforms." },
    { icon: MapPin, title: "Local Citation Building", desc: "High-quality local directory submissions." },
    { icon: Search, title: "Competitor Map Analysis", desc: "Analyze top competitors and outrank them strategically." },
    { icon: TrendingUp, title: "Monthly Performance Reporting", desc: "Transparent reports with measurable growth insights." },
  ]

  const whyChooseUs = [
    {
      title: "Local SEO Expertise",
      desc: "Deep understanding of the MP market algorithm to put you ahead of local rivals.",
      icon: <Target />, color: "text-blue-600", bg: "bg-blue-50"
    },
    {
      title: "GBP Optimization",
      desc: "Complete optimization of your Google Business Profile for maximum 'Map Pack' visibility.",
      icon: <Locate />, color: "text-orange-600", bg: "bg-orange-50"
    },
    {
      title: "Review Management",
      desc: "Strategic handling of customer feedback to build a 5-star digital reputation.",
      icon: <Star />, color: "text-yellow-600", bg: "bg-yellow-50"
    },
    {
      title: "Citation Building",
      desc: "Ensuring consistent business info across all local directories and map platforms.",
      icon: <LinkIcon />, color: "text-indigo-600", bg: "bg-indigo-50"
    },
    {
      title: "Hyper-Local Content",
      desc: "Creating geo-targeted content that resonates with customers in your specific city.",
      icon: <Zap />, color: "text-pink-600", bg: "bg-pink-50"
    },
    {
      title: "Transparent Analysis",
      desc: "Real-time tracking of calls, direction requests, and local search growth.",
      icon: <BarChart3 />, color: "text-emerald-600", bg: "bg-emerald-50"
    },
  ]

  const whatIncluded = [
    "Complete GMB profile setup and verification",
    "Business category and attribute optimization",
    "Keyword-rich business description",
    "High-quality business photos and videos",
    "Regular post updates and offers",
    "Review generation and response strategy",
    "Q&A management",
    "Local citation building",
    "Competitor analysis",
    "Monthly performance reports",
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* Technical Background Design */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* The Map Grid - Technical Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Atmospheric Mesh Gradients */}
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Narrative (Positioned Upwards) */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <MapPin className="w-3 h-3" /> Dominating the Local Pack
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Rank Higher on <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Google Maps</span>.
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-medium italic underline decoration-primary/20 decoration-2 underline-offset-8">
                "We help businesses improve their Google Maps visibility, optimize their Google Business Profile, and attract more local customers through strategic local SEO solutions"
              </p>

              <div className="flex justify-start pt-4">
                <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105" onClick={() => navigate("/contact")}>
                  Optimize My Listing <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Visual Evidence (Map/Profile Mockup) */}
            <motion.div initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.3, duration: 1 }} className="lg:col-span-5 relative hidden lg:block">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl rounded-[3rem] animate-pulse" />
                <div className="relative z-10 bg-white p-3 rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden">
                  {/* Replace with an image of a Google Business Profile or Map listing */}
                  <img
                    src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
                    alt="Google Business Profile Optimization"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Local Reach</p>
                    <p className="text-xl font-black text-slate-900">#1 Top 3 Pack</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">
        {/* Atmospheric Background Design - Fills White Space */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-[-5%] w-[45%] h-[45%] bg-blue-500/5 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-[-5%] w-[40%] h-[40%] bg-orange-500/5 blur-[110px] rounded-full" />
        </div>

        <motion.div
          className="container mx-auto max-w-7xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Header Block with Creative Typography */}
          <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/20 backdrop-blur-sm">
              <MapPin className="w-3 h-3" />
              Local Authority & Trust
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              Why Choose Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">
                Local SEO Engine
              </span>
            </h2>

            <p className="text-lg text-slate-500 font-medium italic leading-relaxed max-w-3xl mx-auto border-l-4 border-primary/30 pl-6">
              "We combine local expertise with technical precision to help businesses dominate search results."
            </p>
          </motion.div>

          {/* Enhanced Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-72"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Animated Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-8 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-md text-slate-400 leading-relaxed italic group-hover:text-slate-600 transition-colors pr-4">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-auto w-10 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* What is Google Map Marketing */}
      <section className="py-24 px-4 bg-background overflow-hidden relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative p-12 md:p-16 rounded-[4rem] bg-slate-800 text-white shadow-2xl overflow-hidden"
          >

            <div className="relative z-10 space-y-10">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white mb-6">
                  What is <span className="text-secondary font-serif pl-1">Google Map Marketing</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed font-medium italic">
                  Google Map Marketing, also known as Local SEO or Google My Business (GMB) optimization, helps your business appear in local search results and Google Maps when customers search for products or services near them.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { val: "46%", label: "Local Searches", color: "text-blue-400" },
                  { val: "76%", label: "24h Visit Rate", color: "text-secondary" },
                  { val: "28%", label: "Purchase Rate", color: "text-orange-400" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                    <div className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.val}</div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Google Map Marketing Matters */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">
        {/* Atmospheric Background - Eliminates White Space */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-[-5%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-[-5%] w-[35%] h-[35%] bg-orange-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="font-display text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900 leading-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-serif font-medium">Local Visibility</span> Matters
            </h2>
            <p className="text-lg text-slate-500 font-medium italic leading-relaxed border-l-4 border-primary/30 pl-6">
              "When customers search for services near them, Google Maps is the first choice. We ensure your business dominates the local pack in Bhopal & Jabalpur."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Increase local visibility", "Attract nearby customers", "Optimize reviews & ratings",
              "Drive calls & store visits", "Dominate local pack search", "Outrank regional competitors"
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <Check size={60} className="text-primary" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  <Check size={20} />
                </div>
                <p className="font-bold text-slate-900 text-left tracking-tight group-hover:text-primary transition-colors italic">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 px-4 bg-background relative overflow-hidden border-t border-border">

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900">
              Our GMB <span className="text-primary font-serif font-medium">Architecture</span>
            </h2>
            <p className="mt-4 text-muted-foreground italic font-medium">Structured optimization for regional market leadership.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col justify-between"
              >
                {/* Background Step Number - Aligns with Production Roadmap Aesthetic */}
                <span className="absolute top-4 right-6 text-7xl font-black text-slate-50 group-hover:text-primary/5 transition-colors italic select-none">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed italic text-sm group-hover:text-slate-700">
                    {service.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 w-10 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whats's Included
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whatIncluded.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <QuoteSection
        quote="Dominate local search and turn nearby searches into real customers."
      />

      {/* Final CTA Button */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">


            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Get More Local Customers
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Optimize your Google My Business profile and dominate local search today."
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

export default GoogleMapMarketing;
