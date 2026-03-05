import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { Check, TrendingUp, Target, DollarSign, BarChart, Zap, PlayCircle, RefreshCw, Search, Share2, ShoppingBag, ArrowRight } from "lucide-react";
import { platform } from "os";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaidMarketing = () => {
  const navigate = useNavigate();

  const services = [
    "Meta (Facebook & Instagram) Ads",
    "Google Search Ads",
    "Google Display Ads",
    "YouTube Video Ads",
    "Remarketing & Retargeting Campaigns",
    "Conversion Tracking Setup",
    "Landing Page Optimization",
    "Performance Analysis & Reporting",
  ]

  const whyChooseUs = [
    "Certified Ads Specialists",
    "Advanced Audience Targeting",
    "ROI-Focused Campaign Strategy",
    "A/B Testing & Optimization",
    "Budget Control & Scaling",
    "Transparent Reporting & Insights",
  ]

  const whatIncluded = [
    "Campaign strategy and planning",
    "Ad account setup and structure",
    "Keyword research and audience targeting",
    "Ad creative development",
    "Landing page recommendations",
    "Conversion tracking setup",
    "A/B testing and optimization",
    "Bid management and budget allocation",
    "Weekly performance reports",
    "Dedicated account manager",
  ]

  const WhyMatters = [
    "Instant visibility on search & social platforms",
    "Highly targeted audience reach",
    "Faster lead generation",
    "Measurable ROI",
    "Scalable growth opportunities",
  ]

  const Platforms = [
    { title: "Google Ads", desc: "Search, Display, Shopping, and YouTube ads" },
    { title: "Facebook Ads", desc: "Targeted campaigns for engagement and conversions" },
    { title: "Instagram Ads", desc: "Visual storytelling that drives action" },
    { title: "LinkedIn Ads", desc: "B2B lead generation and brand awareness" },
    { title: "Twitter Ads", desc: "Real-time engagement and brand building" },
    { title: "Programmatic Ads", desc: "Automated bidding across ad exchanges" },
  ]

  const Approach = [
    { icon: Target, title: "Targeting", desc: "Precise audience targeting based on demographics, interests, and behavior" },
    { icon: BarChart, title: "Testing", desc: "Continuous A/B testing to optimize ad performance" },
    { icon: TrendingUp, title: "Optimization", desc: "Daily monitoring and bid adjustments for maximum ROI" },
    { icon: DollarSign, title: "Scaling", desc: "Scale winning campaigns to maximize returns" },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* Technical Background Design */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Narrative (Text Upwards) */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <Zap className="w-3 h-3" /> High-Velocity ROI Engine
              </div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Instant Traffic. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase tracking-tight leading-none">Scalable Leads.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-500 max-w-xl leading-relaxed font-medium italic underline decoration-primary/20 decoration-2 underline-offset-8">
                "We engineer high-converting Meta & Google ad campaigns designed to dominate the Madhya Pradesh digital landscape."
              </p>
              <div className="flex justify-start pt-4">
                <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105" onClick={() => navigate("/contact")}>
                  Start Your Campaign <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Visual Evidence (Performance Bento) */}
            <motion.div initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.3, duration: 1 }} className="lg:col-span-5 relative hidden lg:block">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl rounded-[3rem] animate-pulse" />
                <div className="relative z-10 bg-white p-3 rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="Performance Marketing ROI Dashboard"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">Avg. ROAS</p>
                    <p className="text-xl font-black text-slate-900 leading-none">4.8x Meta/Google</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900 mb-20">Why Choose <span className="text-primary font-serif font-medium italic">Our Expertise</span>?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden h-64 flex flex-col justify-between text-left"
              >

                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  <Check size={24} />
                </div>

                <h3 className="font-extrabold text-xl tracking-tight text-slate-900 leading-tight group-hover:text-primary transition-colors italic uppercase">
                  {point}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Paid Marketing Matters */}
      <section className="py-24 px-4 bg-background overflow-hidden relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-6 uppercase">The Speed of <br /><span className="text-primary italic font-serif font-medium">Results</span></h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed italic border-l-4 border-primary/30 pl-6">
                Paid marketing helps businesses reach ideal customers instantly. With precise targeting, Meta and Google Ads generate faster revenue growth compared to organic-only strategies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {WhyMatters.map((point, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex items-center gap-4 p-6 bg-white rounded-[2rem] border border-slate-100 hover:border-primary/40 transition-all shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600"><Check size={16} /></div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-700 leading-tight">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our services */}
      <section className="py-24 px-4 bg-[#fafafa] relative overflow-hidden">
        {/* Atmospheric Background Layers */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900 leading-none">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-serif font-medium ">Performance</span> Units
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto italic">
              High-precision ad architectures engineered for ROI across the MP digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Search Engine Ads (PPC)", icon: <Search /> },
              { title: "Social Media Advertising", icon: <Share2 /> },
              { title: "Display & Remarketing", icon: <RefreshCw /> },
              { title: "Video & YouTube Ads", icon: <PlayCircle /> },
              { title: "Shopping & E-commerce Ads", icon: <ShoppingBag /> },
              { title: "Lead Generation Campaigns", icon: <Target /> },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col items-start h-full">
                  {/* Compact Icon Hub */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 20 })}
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors tracking-tight leading-tight">
                    {service.title}
                  </h3>

                  {/* Large Watermark Step Number - Roadmap Aesthetic */}
                  <span className="absolute bottom-[-5%] right-[-5%] text-6xl font-black text-slate-50 group-hover:opacity-10 opacity-[0.03] transition-opacity italic select-none">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative z-10 mt-6 w-8 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-primary/20 backdrop-blur-sm">
              <Zap className="w-3 h-3" /> Omnichannel Performance
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900 leading-none">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-serif font-medium">Placement</span>
            </h2>
            <p className="mt-6 text-slate-500 italic font-medium leading-relaxed">
              "We deploy data-backed ad campaigns across the world's most influential platforms to scale your brand."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Platforms.map((platform, index) => {
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-72"
                >
                  {/* Hover Energy Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    {/* Dynamic Icon Container */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 shadow-inner bg-blue-400`}
                    >
                      <Zap size={24} className="text-white transition-colors duration-500" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 tracking-tight leading-tight">
                      {platform.title}
                    </h3>
                    <p className="text-md text-slate-400 leading-relaxed italic group-hover:text-slate-600 transition-colors pr-4">
                      {platform.desc}
                    </p>
                  </div>

                  {/* Background Watermark Step - Production Roadmap Identity */}
                  <span className="absolute bottom-[-10%] right-[-5%] text-8xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-10 transition-opacity italic select-none pointer-events-none">
                    0{index + 1}
                  </span>

                  <div className="relative z-10 mt-auto w-10 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24 space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] block"
            >
              Methodology
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900 leading-none uppercase">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-serif font-medium">Approach</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto italic mt-6">
              "A results-driven pipeline engineered to scale brands across Bhopal & Jabalpur."
            </p>
          </div>

          {/* The Connected Roadmap Grid */}
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Horizontal Connector Line (Desktop Only) */}
            <div className="absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/20 via-primary/40 to-orange-500/20 hidden lg:block -z-10" />

            {Approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative text-center group"
              >
                {/* Animated Step Node */}
                <div className="relative w-20 h-20 rounded-[2.2rem] bg-white border border-slate-100 flex items-center justify-center text-primary mx-auto mb-8 shadow-xl group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 ring-4 ring-white">
                  <item.icon className="h-8 w-8 transition-transform group-hover:scale-110" />

                  {/* Pulsing Energy Aura */}
                  <div className="absolute inset-0 rounded-[2.2rem] bg-primary/20 animate-ping group-hover:block hidden" />

                  {/* Step Counter Label */}
                  <div className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-black w-6 h-6 rounded-lg flex items-center justify-center shadow-lg border border-white/20">
                    0{index + 1}
                  </div>
                </div>

                {/* Glassmorphism Content Card */}
                <div className="p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-slate-100 group-hover:shadow-2xl group-hover:bg-white transition-all duration-500 min-h-[180px] flex flex-col justify-center">
                  <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors uppercase italic">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed italic group-hover:text-slate-700">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included
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
        quote="Strategic ad campaigns that maximize ROI and accelerate business growth."
      />

      {/* Final CTA Button */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">


            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Scale Your Business?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Get a free paid advertising audit and custom strategy today."
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-sm md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Claim Your Free Ad Audit
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PaidMarketing;
