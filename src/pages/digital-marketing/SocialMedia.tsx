import { cardAnimation, fadeUp, staggerContainer } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { Check, Instagram, Facebook, Linkedin, Twitter, Youtube, TrendingUp, ArrowRight, Sparkles, BarChart3, Palette, ShieldCheck, Target, Users, Zap, Rocket } from "lucide-react";
import { platform } from "os";
import React from "react";
import { useNavigate } from "react-router-dom";

const SocialMedia = () => {
  const navigate = useNavigate();

  const services = [
    "Social Media Strategy Development",
    "Content Creation & Design",
    "Community Management",
    "Paid Social Advertising",
    "Influencer Marketing",
    "Social Media Audit & Competitor Analysis",
    "Analytics & Performance Reporting",
    "Crisis Management & Reputation Monitoring",
  ]

  const whyChooseUs = [
    { title: "Experienced Social Media Experts", icon: <Users />, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Customized Marketing Strategies", icon: <Target />, color: "text-orange-600", bg: "bg-orange-50" },
    { title: "Creative & Engaging Content", icon: <Palette />, color: "text-pink-600", bg: "bg-pink-50" },
    { title: "Targeted Paid Advertising Campaigns", icon: <Zap />, color: "text-yellow-600", bg: "bg-yellow-50" },
    { title: "Real-Time Performance Tracking", icon: <TrendingUp />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Transparent Reporting & Analytics", icon: <BarChart3 />, color: "text-indigo-600", bg: "bg-indigo-50" },
  ]

  const impact = [
    { number: "150+", label: "Brands Served" },
    { number: "500K+", label: "Leads Generated" },
    { number: "10M+", label: "Audience Reached" },
    { number: "98%", label: "Client Satisfaction" },
  ]

  const platforms = [
    { icon: Facebook, name: "Facebook", color: "text-blue-600" },
    { icon: Instagram, name: "Instagram", color: "text-pink-600" },
    { icon: Linkedin, name: "LinkedIn", color: "text-blue-700" },
    { icon: Twitter, name: "Twitter", color: "text-sky-500" },
    { icon: Youtube, name: "YouTube", color: "text-red-600" },
  ]

  const WhyMatters = [
    { title: "Boost Brand Awareness", icon: <Sparkles />, desc: "Establish a dominant presence in the local digital feed." },
    { title: "Increase Engagement", icon: <Users />, desc: "Build meaningful connections that turn followers into advocates." },
    { title: "Generate Quality Leads", icon: <TrendingUp />, desc: "Fuel your revenue engine with data-backed lead generation." },
    { title: "Build Brand Authority", icon: <ShieldCheck />, desc: "Position your business as a trusted leader in Bhopal & Jabalpur." },
    { title: "Drive Website Traffic", icon: <Zap />, desc: "Convert social interest into high-intent website visitors." },
    { title: "Convert Loyal Customers", icon: <Rocket />, desc: "Transform casual followers into long-term brand loyalists." },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* SOCIAL MEDIA HERO Section  */}
      <section className=" relative min-h-[80vh] flex items-start overflow-hidden bg-[#fafafa] pb-4">

        {/* 1. IMMERSIVE BACKGROUND DESIGN */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Grid Overlay - The "Production" Look */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />

          {/* Atmospheric Mesh Blobs */}
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />
        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* LEFT COLUMN: Narrative (Positioned Upwards for Navbar Clarity) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <Sparkles className="w-3 h-3" /> MP's Fastest Growing Agency
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Strategic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Social Impact</span>.
              </h1>

              <p className="text-lg sm:text-xl text-slate-500 max-w-xl leading-relaxed font-medium italic">
                "We help businesses connect with their target audience and drive measurable growth through result-oriented strategies in Bhopal & Jabalpur."
              </p>

              <div className="flex justify-start pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Start Growing Today <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Video Integration (Logo/Brand Portfolio) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative group">
                {/* Animated Glow behind video */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl rounded-[3rem] animate-pulse" />

                {/* Video Container Frame */}
                <div className="relative z-10 bg-white p-3 rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden aspect-video">
                  <video
                    autoPlay loop muted playsInline
                    className="rounded-[2.5rem] w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    poster="/images/video-placeholder.jpg"
                  >
                    {/* Replace with your actual video source URL */}
                    <source src="/socialMedia.mp4" type="video/mp4" />
                  </video>

                  {/* Dynamic O verlay Label */}
                  <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
                    <p className="text-[10px] font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    </p>
                  </div>
                </div>

                {/* Background Decorative Layer */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">
        {/* 1. ATMOSPHERIC BACKGROUND ELEMENTS - Eliminates White Space */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Soft Blue Mesh - Top Left */}
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />

          {/* Soft Orange Mesh - Bottom Right */}
          <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-orange-500/5 blur-[100px] rounded-full" />
        </div>

        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header Block with Creative Typography */}
          <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              The Performance Edge
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              Why SocioBhaarat <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">
                Excels in Marketing
              </span>
            </h2>

            <p className="text-lg text-slate-500 font-medium italic leading-relaxed max-w-3xl mx-auto border-l-4 border-primary/30 pl-6">
              "We combine creativity, strategy, and data-backed execution to deliver campaigns that dominate local markets in <span className="text-slate-900 font-bold">Bhopal & Jabalpur</span>."
            </p>
          </motion.div>

          {/* 2. PILLAR GRID - Bento Style Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Animated Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-8 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed italic group-hover:text-slate-600 transition-colors">
                    Engineered for high-performance ROI in the <span className="text-primary font-bold">Madhya Pradesh</span> business ecosystem.
                  </p>
                </div>

                {/* Large Background Watermark Number */}
                <span className="absolute bottom-[-10%] right-[-5%] text-8xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-10 transition-opacity italic">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>

          {/* 3. LOCAL TRUST CALLOUT */}
          <div className="mt-20 p-1 rounded-full bg-slate-100 max-w-fit mx-auto"
          >
            <div className="px-8 py-3 rounded-full bg-white shadow-sm border border-slate-200">
              <p className="text-xs font-black text-slate-600 tracking-widest uppercase flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Verified Performance Partner Across MP
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why do you need Social Media Marketing Section OR Why Matters*/}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        {/* Atmospheric Design Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-orange-500/5 blur-[100px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header Block */}
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-tight">
              Why Your Brand Needs <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">
                Social Architecture
              </span>
            </h2>

            <p className="text-lg text-slate-500 font-medium italic leading-relaxed max-w-2xl mx-auto border-l-4 border-primary/30 pl-6">
              "Social media is where your customers spend their time and make purchasing decisions. A strong presence ensures you stay visible and competitive in the MP business landscape."
            </p>
          </motion.div>

          {/* Value Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WhyMatters.map((point, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    {React.cloneElement(point.icon as React.ReactElement, { size: 24 })}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 tracking-tight">
                    {point.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed italic group-hover:text-slate-600 transition-colors">
                    {point.desc}
                  </p>
                </div>

                {/* Large Watermark Number */}
                <span className="absolute bottom-[-10%] right-[-5%] text-8xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-10 transition-opacity italic select-none">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Platforms we master */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/20">

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900">
              Ecosystem <span className="text-primary">Mastery</span>
            </h2>
            <p className="mt-4 text-muted-foreground italic font-medium">
              Expert execution across the world's most influential social architectures.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group cursor-default"
              >
                {/* Card Layer */}
                <div className="relative z-10 bg-white/80  p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-sm group-hover:border-primary/20 group-hover:bg-white text-center h-full flex flex-col items-center justify-center">

                  {/* Animated Icon Container */}
                  <div className={`mb-6 p-4 rounded-2xl bg-slate-50 transition-all duration-500  group-hover:scale-110 shadow-inner`}>
                    <platform.icon className={`h-12 w-12 ${platform.color} `} />
                  </div>

                  <h3 className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-primary transition-colors uppercase">
                    {platform.name}
                  </h3>

                  <div className="mt-4 w-8 h-1 bg-slate-100 rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
                </div>

                {/* Hover Glow Effect - Custom for each platform */}
                <div className={`absolute -inset-2 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10 bg-gradient-to-br from-primary/10 to-blue-500/10`} />
              </motion.div>
            ))}
          </div>

          {/* Localized Footer Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            className="mt-20 text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 select-none"
          >
            Facebook • Instagram • LinkedIn • Twitter • Youtube
          </motion.div>
        </div>
      </section>

      {/*  ENHANCED SERVICES SECTION  */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        {/* Subtle Background Textures */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block"
            >
              Comprehensive Solutions
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900">
              Our <span className="text-primary">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden h-48 flex flex-col justify-between"
              >
                {/* Large Background Step Number */}
                <span className="absolute top-4 right-6 text-7xl font-black text-slate-50 group-hover:text-primary/5 transition-colors italic select-none">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <Check size={20} />
                  </div>
                  <h3 className="font-bold text-lg leading-tight text-slate-900 group-hover:text-primary transition-colors">
                    {service}
                  </h3>
                </div>

                <div className="w-12 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENHANCED IMPACT HUB  */}
      <section className="py-16 px-4 bg-slate-700 text-white relative overflow-hidden rounded-[3rem] mx-4 my-6">

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter">
                Our Impact in <span className="text-transparent bg-clip-text bg-amber-400 pr-2">Numbers</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium italic mt-2">
                Proven performance across the Madhya Pradesh digital landscape.
              </p>
            </div>
          </div>

          {/* Compact Bento Grid: 4 Equal Columns on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {impact.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-6 md:p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10 flex flex-col justify-between overflow-hidden group transition-all"
              >
                {/* Subtle Background Icon */}
                <TrendingUp className="absolute -bottom-4 -right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity rotate-12" />

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-1 group-hover:text-secondary transition-colors">
                    {item.number}
                  </h3>
                  <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors leading-tight">
                    {item.label}
                  </p>
                </div>

                <div className="mt-6 w-8 h-1 bg-secondary/30 rounded-full group-hover:w-full group-hover:bg-secondary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        quote="Building meaningful connections that turn followers into loyal customers."
      />
      {/* Final CTA Button */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">


            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Dominate Social Media?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Let's create a social media strategy that drives real business results."
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-sm md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Claim Free Social Audit
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
