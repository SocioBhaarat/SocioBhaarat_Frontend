import { cardAnimation, fadeUp, staggerContainer } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { Check, Instagram, Facebook, Linkedin, Twitter, Youtube, TrendingUp, ArrowRight, Sparkles, BarChart3, Palette, ShieldCheck, Target, Users, Zap, Rocket, MessageSquare, Search, ShieldAlert, Link2, Megaphone, MessageCircle } from "lucide-react";
import { platform } from "os";
import React from "react";
import { useNavigate } from "react-router-dom";

const SocialMedia = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Target />,
      color: "#2563eb", // Blue
      title: "Social Media Strategy Development",
      desc: "Data-driven roadmaps tailored to your brand goals. We define your target personas, platform selection, brand voice, and content pillars to ensure every post contributes to your bottom line.",
    },
    {
      icon: <Palette />,
      color: "#7c3aed", // Violet
      title: "Content Creation & Design",
      desc: "High-quality visual storytelling, including graphic design, short-form video (Reels/TikToks), and compelling copy that stops the scroll and drives meaningful engagement with your audience.",
    },
    {
      icon: <MessageSquare />,
      color: "#ea580c", // Orange
      title: "Community Management",
      desc: "Active monitoring and engagement with your followers. We handle comments, messages, and mentions in real-time to build loyal communities and maintain a 24/7 positive brand presence.",
    },
    {
      icon: <Zap />,
      color: "#16a34a", // Green
      title: "Paid Social Advertising",
      desc: "Precision-targeted ad campaigns across Meta, LinkedIn, and Instagram. We optimize for conversions, lead generation, and ROI through continuous A/B testing and audience retargeting.",
    },
    {
      icon: <Users />,
      color: "#4338ca", // Indigo
      title: "Influencer Marketing",
      desc: "Identifying and partnering with the right creators to amplify your brand. We manage the entire process — from outreach and contract negotiation to campaign execution and performance tracking.",
    },
    {
      icon: <Search />,
      color: "#0d9488", // Teal
      title: "Social Media Audit & Competitor Analysis",
      desc: "A deep dive into your current performance vs. your top competitors. We identify gaps in your strategy, uncover trending opportunities, and provide a clear plan to outperform the market.",
    },
    {
      icon: <BarChart3 />,
      color: "#d97706", // Amber
      title: "Analytics & Performance Reporting",
      desc: "Comprehensive monthly reports that translate complex data into actionable insights. We track reach, engagement, sentiment, and conversion metrics to prove your social media ROI.",
    },
    {
      icon: <ShieldAlert />,
      color: "#dc2626", // Red
      title: "Social Crisis & Reputation Monitoring",
      desc: "Proactive surveillance for brand risks. We detect negative sentiment early and deploy rapid-response protocols to protect your brand image from viral backlash or PR disasters.",
    },
  ];

  const whyChooseUs = [
    {
      num: "01",
      title: "Experienced Social Media Experts",
      icon: <Users size={22} />,
      desc: "Gain access to a dedicated team of strategists who understand the nuances of algorithm shifts, platform-specific trends, and community engagement psychology.",
      tag: "Industry Veterans",
      card: "bg-blue-50 border-blue-200",
      iconWrap: "bg-blue-100 text-blue-700",
      num_color: "text-blue-200",
      tag_color: "text-blue-700",
      dot: "bg-blue-700",
    },
    {
      num: "02",
      title: "Customized Marketing Strategies",
      icon: <Target size={22} />,
      desc: "No cookie-cutter templates. We build bespoke social roadmaps aligned with your specific business goals, whether it's lead generation, brand awareness, or community growth.",
      tag: "Result-Oriented",
      card: "bg-orange-50 border-orange-200",
      iconWrap: "bg-orange-100 text-orange-700",
      num_color: "text-orange-200",
      tag_color: "text-orange-700",
      dot: "bg-orange-700",
    },
    {
      num: "03",
      title: "Creative & Engaging Content",
      icon: <Palette size={22} />,
      desc: "High-impact visuals and compelling copy tailored to stop the scroll. We handle everything from graphic design to short-form video that resonates with your target audience.",
      tag: "Scroll-Stopping Creative",
      card: "bg-pink-50 border-pink-200",
      iconWrap: "bg-pink-100 text-pink-700",
      num_color: "text-pink-200",
      tag_color: "text-pink-700",
      dot: "bg-pink-700",
    },
    {
      num: "04",
      title: "Targeted Paid Ad Campaigns",
      icon: <Zap size={22} />,
      desc: "Maximize your ROI with hyper-targeted Meta, LinkedIn, and Instagram ads. We optimize your ad spend using A/B testing and precision demographic layering.",
      tag: "High-ROI Growth",
      card: "bg-yellow-50 border-yellow-200",
      iconWrap: "bg-yellow-100 text-yellow-700",
      num_color: "text-yellow-200",
      tag_color: "text-yellow-700",
      dot: "bg-yellow-700",
    },
    {
      num: "05",
      title: "Real-Time Performance Tracking",
      icon: <TrendingUp size={22} />,
      desc: "We monitor your metrics in real-time, allowing us to pivot strategies instantly and capitalize on viral moments or high-performing content as they happen.",
      tag: "Agile Optimization",
      card: "bg-emerald-50 border-emerald-200",
      iconWrap: "bg-emerald-100 text-emerald-700",
      num_color: "text-emerald-200",
      tag_color: "text-emerald-700",
      dot: "bg-emerald-700",
    },
    {
      num: "06",
      title: "Transparent Reporting & Analytics",
      icon: <BarChart3 size={22} />,
      desc: "Deep-dive monthly reports that break down follower growth, engagement rates, and conversion paths — giving you total clarity on your social media investment.",
      tag: "Data-Driven Insights",
      card: "bg-indigo-50 border-indigo-200",
      iconWrap: "bg-indigo-100 text-indigo-700",
      num_color: "text-indigo-200",
      tag_color: "text-indigo-700",
      dot: "bg-indigo-700",
    },
  ];

  const impact = [
    { number: "150+", label: "Brands Served" },
    { number: "500K+", label: "Leads Generated" },
    { number: "10M+", label: "Audience Reached" },
    { number: "98%", label: "Client Satisfaction" },
  ]

  const platforms = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "text-[#1877F2]", // Official Facebook Blue
      hoverGlow: "from-blue-600/20 to-blue-400/10",
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "text-[#E4405F]", // Official Instagram Pink/Red
      hoverGlow: "from-pink-600/20 to-purple-500/10",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "text-[#0A66C2]", // Official LinkedIn Blue
      hoverGlow: "from-blue-700/20 to-cyan-500/10",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      color: "text-[#000000]", // Modern X Branding
      hoverGlow: "from-slate-900/20 to-slate-400/10",
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "text-[#FF0000]", // Official YouTube Red
      hoverGlow: "from-red-600/20 to-orange-500/10",
    },
  ];

  const WhyMatters = [
    {
      icon: <Megaphone />,
      title: "Amplified Brand Reach",
      desc: "Extend your message beyond traditional boundaries and connect with audiences who've never heard of you — yet.",
    },
    {
      icon: <MessageCircle />,
      title: "Real-Time Engagement",
      desc: "Turn passive followers into active participants. Every comment, share, and reaction deepens brand loyalty.",
    },
    {
      icon: <Target />,
      title: "Precision Targeting",
      desc: "Reach the right people at the right moment — with messaging crafted to convert, not just impress.",
    },
    {
      icon: <TrendingUp />,
      title: "Measurable Growth",
      desc: "Every post is a data point. Track what resonates, refine your strategy, and compound results over time.",
    },
    {
      icon: <ShieldCheck />,
      title: "Trust & Authority",
      desc: "Consistent, quality presence signals credibility. In a crowded market, trust is your most valuable currency.",
    },
    {
      icon: <Link2 />,
      title: "Community Building",
      desc: "Build a network around your brand that advocates for you — organic word-of-mouth at digital scale.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* SOCIAL MEDIA HERO Section  */}
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
                <Sparkles className="w-3 h-3" /> Strategic Social Impact
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                Grow Your Brand With Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium">Social Media Marketing </span>
              </h1>

              <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                We help businesses connect with their target audience and drive measurable growth through result-oriented strategies in Bhopal & Jabalpur.
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

                <div className="relative z-10 bg-white p-3 rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden">
                  <video
                    autoPlay loop muted playsInline
                    className="rounded-[2.5rem] w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    poster="/images/video-placeholder.jpg"
                  >
                    {/* Replace with your actual video source URL */}
                    <source src="/socialMedia.webm" type="video/webm" />
                  </video>

                  {/* Floating Mini-Metric Overlay */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Lighthouse Score</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-black text-slate-900">100/100</p>
                      <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                </div>

                {/* Framed Layer - Matching the "Legacy" section rotation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why choose Us Section */}
      <section className="py-12 lg:px-8 bg-[#f8f7f4] relative overflow-hidden">
        <motion.div
          className="container mx-auto max-w-7xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className=" max-w-7xl mx-auto mb-14 space-y-4">
            <span className="text-blue-600 font-bold tracking-[0.35em] uppercase text-[10px] block">
              The SocioBhaarat Advantage
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800">
              Why SocioBhaarat{" "}
              <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                Excels in Marketing
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mx-auto ">
              We combine creativity, strategy, and data-backed execution to deliver campaigns that dominate local markets in <span className="text-slate-900 font-bold">Bhopal & Jabalpur</span>.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`group relative p-8 rounded-2xl border-[1.5px] flex flex-col transition-shadow duration-300 hover:shadow-xl ${item.card}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-5 ${item.iconWrap}`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-base md:text-xl font-bold text-slate-900 mb-3 leading-snug ">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base font-medium text-slate-900 leading-[1.8] flex-1 mb-5">
                  {item.desc}
                </p>

                {/* Tag */}
                <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] ${item.tag_color}`}>
                  <span className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${item.dot}`} />
                  {item.tag}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-1 rounded-full bg-slate-100 max-w-fit mx-auto"
          >
            <div className="px-8 py-3 rounded-full bg-white shadow-sm border border-slate-200">
              <p className="text-xs font-bold text-slate-600 tracking-widest uppercase flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Verified Performance Partner Across MP
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why do you need Social Media Marketing Section OR Why Matters*/}
      <section className="py-24 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header Block */}
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight">
              Why Your Brand Needs <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">
                Social Architecture
              </span>
            </h2>

            <p className="text-sm md:text-lg text-slate-500 font-medium italic leading-relaxed max-w-2xl mx-auto border-l-4 border-primary/30 pl-6">
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

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 tracking-tight">
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
      <section className="py-24 sm:px-6 lg:px-8 relative overflow-hidden bg-[#fafafa]">
        {/* Subtly animated background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#4285f405_0%,_transparent_70%)] pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold italic tracking-tighter text-slate-900">
              Platforms <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium inline-block ">We Master</span>
            </h2>
            <p className="text-sm md:text-lg mt-4 text-muted-foreground  font-medium">
              Expert execution across the world's most influential social architectures.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group h-full"
              >
                {/* Main Card */}
                <div className="relative z-10 bg-white/60 backdrop-blur-md p-10 rounded-[3rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group-hover:border-slate-200 group-hover:bg-white text-center h-full flex flex-col items-center justify-center overflow-hidden">

                  {/* Subtle Inner Glow on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-b ${platform.hoverGlow}`} />

                  {/* Icon Container with Glass Effect */}
                  <div className={`mb-8 p-5 rounded-[2rem] bg-slate-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-slate-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-slate-50`}>
                    <platform.icon className={`h-12 w-12 ${platform.color} transition-transform duration-500`} />
                  </div>

                  <h3 className="font-bold text-lg text-slate-800 group-hover:tracking-tight transition-all duration-500">
                    {platform.name}
                  </h3>

                  {/* Refined Indicator */}
                  <div className="mt-6 flex gap-1 items-center opacity-40 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors" />
                    <div className="w-8 h-[2px] bg-slate-200 rounded-full group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors" />
                  </div>
                </div>

                {/* Individual Platform Glow Layer */}
                <div className={`absolute -inset-1 opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-700 -z-10 bg-gradient-to-br ${platform.hoverGlow}`} />
              </motion.div>
            ))}
          </div>

          {/* Footer Ticker with Spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            className="mt-28 text-center text-[9px] font-bold uppercase tracking-[0.6em] text-slate-900 select-none"
          >
            Meta • Instagram • LinkedIn • X • YouTube • TikTok
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION  */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </div>

          <div className="w-full flex flex-col gap-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ '--hover-color': service.color } as React.CSSProperties}
                className="group border border-slate-100 rounded-2xl relative bg-slate-50 overflow-hidden hover:bg-[#fafbff] transition-all duration-500 hover:border-primary/30 hover:shadow-md"
              >


                <div className="grid grid-cols-1 lg:grid-cols-[72px_1fr_1.8fr] items-start lg:items-center gap-6 lg:gap-0 px-6 py-8 lg:px-8 border-b border-slate-50 last:border-0 relative group">


                  <span className="hidden lg:block text-[11px] font-bold tracking-[.2em] text-slate-400 transition-colors duration-300 custom-index">
                    [ 0{index + 1} ]
                  </span>


                  <div className="flex items-center gap-4 lg:gap-6 lg:pr-10">
                    <div className="relative flex-shrink-0" style={{ color: service.color }}>
                      <div className="absolute inset-0 rounded-2xl border-[1.5px] border-current opacity-20 group-hover:scale-110 lg:group-hover:scale-125 group-hover:rotate-45 transition-all duration-700" />
                      <div
                        className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center relative z-10 transition-all duration-300 custom-icon-box"
                        style={{ color: service.color }}
                      >
                        {React.isValidElement(service.icon)
                          ? React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5 lg:w-6 lg:h-6" })
                          : service.icon}
                      </div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 leading-snug transition-colors duration-300 custom-title">
                      {service.title}
                    </h3>
                  </div>


                  <div className="border-l-2 border-slate-100 pl-5 lg:pl-10 transition-all duration-300 custom-desc">
                    <p className="text-sm lg:text-base text-slate-900 font-medium leading-relaxed">
                      {service.desc}
                    </p>
                  </div>


                  <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-[5rem] lg:text-[7rem] font-extrabold text-slate-900/[0.018] pointer-events-none select-none leading-none">
                    0{index + 1}
                  </div>
                </div>

                <style jsx>{`
                  .group:hover .custom-index { color: var(--hover-color) !important; }
                  .group:hover .custom-icon-box {
                    background-color: var(--hover-color) !important;
                    color: white !important;
                  }
                  .group:hover .custom-title { color: var(--hover-color) !important; }
                  .group:hover .custom-desc {
                    border-left-color: var(--hover-color) !important;
                  }
                `}</style>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ENHANCED IMPACT HUB  */}
      <section className="py-12 relative overflow-hidden bg-[#fafafa]">

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold italic tracking-tighter">
                Our Impact in <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent">Numbers</span>
              </h2>
              <p className="text-slate-500 text-md md:text-lg font-medium italic mt-2">
                Proven performance across the Madhya Pradesh digital landscape.
              </p>
            </div>
          </div>

          {/* Compact Bento Grid: 4 Equal Columns on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {impact.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-6 md:p-8 rounded-[2rem] bg-white backdrop-blur-md border border-slate-300 flex flex-col justify-between overflow-hidden group transition-all"
              >
                {/* Subtle Background Icon */}
                <TrendingUp className="absolute -bottom-4 -right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity rotate-12" />

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold  text-slate-700 mb-1 transition-colors">
                    {item.number}
                  </h3>
                  <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-600 transition-colors leading-tight">
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
      <CTASection
        title={<>Ready to Dominate <br className="hidden md:block" /> Social Media?</>}
        description={<>Let's create a social media strategy <br className="hidden sm:block" />that drives real business results.</>}
        buttonText="Launch Your Project Now"
      />
    </div>
  );
};

export default SocialMedia;
