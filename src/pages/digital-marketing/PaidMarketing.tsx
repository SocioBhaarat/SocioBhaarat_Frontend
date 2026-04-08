import SEO from "@/components/SEO";
import { staggerContainer, fadeUp, cardAnimation } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import HorizontalServiceList from "@/components/ui/HorizontalServiceList";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { Check, TrendingUp, Target, DollarSign, BarChart, Zap, PlayCircle, RefreshCw, Search, Share2, ShoppingBag, ArrowRight, BarChart3, Users, Instagram, Briefcase, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaidMarketing = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Search />,
      color: "#2563eb",
      title: "Search Engine Ads (PPC)",
      desc: "Precision Google Search campaigns targeting high-intent buyers at the exact moment they search — maximising clicks and minimising wasted spend through smart bidding and negative keywords.",
    },
    {
      icon: <Share2 />,
      color: "#7c3aed",
      title: "Social Media Advertising",
      desc: "Targeted Meta, Instagram, and LinkedIn campaigns built around your ideal customer's demographics, interests, and behaviour — driving awareness, engagement, and direct conversions at scale.",
    },
    {
      icon: <RefreshCw />,
      color: "#ea580c",
      title: "Display & Remarketing",
      desc: "Re-engage visitors who left without converting through pixel-based retargeting across Google Display Network and partner sites — keeping your brand top-of-mind until they're ready to buy.",
    },
    {
      icon: <PlayCircle />,
      color: "#16a34a",
      title: "Video & YouTube Ads",
      desc: "Compelling skippable, non-skippable, and bumper ads on YouTube that build brand recall and drive action — targeted by audience intent, search behaviour, and in-market signals.",
    },
    {
      icon: <ShoppingBag />,
      color: "#38BDF8",
      title: "Shopping & E-commerce Ads",
      desc: "Google Shopping and Performance Max campaigns that put your products in front of ready-to-buy customers — with optimised product feeds, pricing strategy, and conversion tracking.",
    },
    {
      icon: <Target />,
      color: "#dc2626",
      title: "Lead Generation Campaigns",
      desc: "Full-funnel lead generation combining search, social, and landing page optimisation — delivering qualified, high-intent leads directly into your CRM pipeline every single day.",
    },
    {
      icon: <BarChart3 />,
      color: "#d97706",
      title: "Conversion Rate Optimisation",
      desc: "A/B testing of ad creatives, landing pages, and audience segments to systematically improve your conversion rate — turning more of your existing ad spend into actual paying customers.",
    },
    {
      icon: <Zap />,
      color: "#0d9488",
      title: "Performance Reporting & ROAS",
      desc: "Transparent monthly dashboards tracking impressions, CTR, CPC, conversions, and Return on Ad Spend — giving you complete clarity on where every rupee goes and what it delivers.",
    },
  ]

  const whyChooseUs = [
    {
      num: "01",
      title: "Google Ads Management",
      icon: <Target size={22} />,
      desc: "Data-driven Google Search, Display, and Performance Max campaigns crafted to maximise clicks, leads, and conversions — with continuous bid optimisation to stretch every rupee.",
      tag: "Search Dominance",
      card: "bg-blue-50 border-blue-200",
      iconWrap: "bg-blue-100 text-blue-700",
      num_color: "text-blue-200",
      tag_color: "text-blue-700",
      dot: "bg-blue-700",
    },
    {
      num: "02",
      title: "Meta & Instagram Ads",
      icon: <Instagram size={22} />,
      desc: "Hyper-targeted Facebook and Instagram ad campaigns built around your ideal customer's demographics, interests, and behaviour — driving awareness, engagement, and direct sales.",
      tag: "Social Reach",
      card: "bg-fuchsia-50 border-fuchsia-200",
      iconWrap: "bg-fuchsia-100 text-fuchsia-700",
      num_color: "text-fuchsia-200",
      tag_color: "text-fuchsia-700",
      dot: "bg-fuchsia-700",
    },
    {
      num: "03",
      title: "Search Engine Marketing",
      icon: <Search size={22} />,
      desc: "Dominate paid search results with precision keyword targeting, compelling ad copy, and optimised landing pages — capturing high-intent buyers exactly when they are ready to act.",
      tag: "High-Intent Traffic",
      card: "bg-orange-50 border-orange-200",
      iconWrap: "bg-orange-100 text-orange-700",
      num_color: "text-orange-200",
      tag_color: "text-orange-700",
      dot: "bg-orange-700",
    },
    {
      num: "04",
      title: "Retargeting Campaigns",
      icon: <TrendingUp size={22} />,
      desc: "Re-engage visitors who left without converting using smart pixel-based retargeting across Google, Meta, and YouTube — keeping your brand top-of-mind until they are ready to buy.",
      tag: "Recover Lost Leads",
      card: "bg-indigo-50 border-indigo-200",
      iconWrap: "bg-indigo-100 text-indigo-700",
      num_color: "text-indigo-200",
      tag_color: "text-indigo-700",
      dot: "bg-indigo-700",
    },
    {
      num: "05",
      title: "Conversion Rate Optimisation",
      icon: <BarChart3 size={22} />,
      desc: "A/B testing of ad creatives, headlines, and landing pages to systematically improve your conversion rate — turning more of your ad spend into actual paying customers.",
      tag: "More Conversions",
      card: "bg-green-50 border-green-200",
      iconWrap: "bg-green-100 text-green-700",
      num_color: "text-green-200",
      tag_color: "text-green-700",
      dot: "bg-green-700",
    },
    {
      num: "06",
      title: "Performance Reporting & ROAS",
      icon: <Zap size={22} />,
      desc: "Transparent monthly dashboards tracking impressions, CTR, CPC, conversions, and Return on Ad Spend — giving you complete clarity on where every rupee goes and what it delivers.",
      tag: "Full Visibility",
      card: "bg-emerald-50 border-emerald-200",
      iconWrap: "bg-emerald-100 text-emerald-700",
      num_color: "text-emerald-200",
      tag_color: "text-emerald-700",
      dot: "bg-emerald-700",
    },
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
    { name: "Google Ads", tag: "Search · Display · YouTube", desc: "Search, Display, Shopping, and YouTube campaigns — capturing high-intent buyers at every stage of the funnel with precision keyword targeting and smart bidding strategies.", icon: Search, labelBg: "bg-blue-50", iconWrap: "bg-blue-100 text-blue-700", accent: "#1d4ed8", tag_color: "text-blue-600" },
    { name: "Facebook Ads", tag: "Awareness · Conversions · Leads", desc: "Highly targeted campaigns reaching your exact audience by demographics, interests, and behaviour — built for engagement, lead generation, and direct conversions at scale.", icon: Users, labelBg: "bg-fuchsia-50", iconWrap: "bg-purple-100 text-purple-700", accent: "#7e22ce", tag_color: "text-purple-600" },
    { name: "Instagram Ads", tag: "Reels · Stories · Feed", desc: "Scroll-stopping visual storytelling through Reels, Stories, and Feed ads — turning passive browsers into engaged followers and paying customers with every placement.", icon: Instagram, labelBg: "bg-orange-50", iconWrap: "bg-orange-100 text-orange-700", accent: "#c2410c", tag_color: "text-orange-600" },
    { name: "LinkedIn Ads", tag: "B2B · Decision-Makers · Enterprise", desc: "Precision B2B lead generation and brand awareness campaigns targeting decision-makers, professionals, and industry leaders by job title, company size, and seniority.", icon: Briefcase, labelBg: "bg-green-50", iconWrap: "bg-green-100 text-green-700", accent: "#15803d", tag_color: "text-green-600" },
    { name: "Twitter / X Ads", tag: "Trending · Engagement · Brand", desc: "Real-time engagement and brand building through promoted tweets, trend takeovers, and follower campaigns — reaching audiences when live conversations are happening.", icon: MessageSquare, labelBg: "bg-slate-50", iconWrap: "bg-slate-100 text-slate-700", accent: "#334155", tag_color: "text-slate-500" },
    { name: "Programmatic Ads", tag: "RTB · Exchanges · Auto-Bidding", desc: "Automated real-time bidding across premium ad exchanges — delivering your message to the right person, on the right site, at the exact right moment for maximum efficiency.", icon: Zap, labelBg: "bg-emerald-50", iconWrap: "bg-emerald-100 text-emerald-700", accent: "#047857", tag_color: "text-emerald-600" },
  ]

  const Approach = [
    { icon: Target, title: "Targeting", desc: "Precise audience targeting based on demographics, interests, and behavior" },
    { icon: BarChart, title: "Testing", desc: "Continuous A/B testing to optimize ad performance" },
    { icon: TrendingUp, title: "Optimization", desc: "Daily monitoring and bid adjustments for maximum ROI" },
    { icon: DollarSign, title: "Scaling", desc: "Scale winning campaigns to maximize returns" },
  ]

  return (
    <>
      <SEO
        title="Paid Marketing Services | Meta Ads & Google Ads | PPC | Socio Bhaarat"
        description="Drive targeted traffic and maximize ROI with high-performing paid advertising campaigns across multiple platforms."
        keywords="google ads, meta ads, paid marketing, ppc services, Paid marketing in jabalpur"
        url="/digital-marketing/paid-marketing"
      />
      <div className="min-h-screen bg-background">

        {/* Hero Section */}
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
                  <Zap className="w-3 h-3" /> Meta Ads / Google Ads / Paid Marketing
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                  
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Paid Marketing Service</span> for Traffic & Leads
                </h1>

                <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                  We engineer high-converting Meta & Google ad campaigns designed to dominate the Madhya Pradesh digital landscape.
                </p>

                <div className="flex justify-start pt-4">
                  <Button
                    size="lg"
                    className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => navigate("/contact")}
                  >
                    Start Your Campaign <ArrowRight className="ml-2 w-5 h-5" />
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
                    <img
                      src="/images/Paid-Marketing.webp"
                      alt="Performance Marketing ROI Dashboard"
                      className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Floating Mini-Metric Overlay */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">Avg. ROAS</p>
                      <p className="text-xl font-black text-slate-900 leading-none">4.8x Meta/Google</p>
                    </div>
                  </div>

                  {/* Framed Layer - Matching the "Legacy" section rotation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 lg:px-8 bg-white relative overflow-hidden">
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
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                Why Brands <br className="block sm:hidden" />
                <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                  Trust Us
                </span>
              </h2>
              <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed mx-auto ">
                We combine strategic monitoring and professional response management to protect and enhance your brand's image across Madhya Pradesh.
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

                  {/* <span className={`text-[10px] font-bold tracking-[.2em] uppercase mb-2 ${item.num_color}`}>
                        {item.num}
                      </span> */}

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

          </motion.div>
        </section>

        {/* Why Paid Marketing Matters */}
        <section className="py-12 bg-[#f8f7f4] overflow-hidden">
          <div className="container mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-6 h-[2px] bg-blue-600 rounded-full" />
                  <span className="text-[11px] font-bold tracking-[.3em] uppercase text-blue-600">
                    Paid Performance
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.05] mb-6">
                  The Speed of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                    Results
                  </span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-slate-800 font-medium border-l-4 border-blue-200 pl-5 py-1 mb-10">
                  Paid marketing helps businesses reach ideal customers instantly. With precise
                  targeting, Meta and Google Ads generate faster revenue growth compared to
                  organic-only strategies.
                </p>

                {/* Stat strip */}
                <div className="flex border border-slate-200 rounded-2xl overflow-hidden">
                  {[
                    { val: "3×", label: "Faster Growth" },
                    { val: "80%", label: "Better Reach" },
                    { val: "2×", label: "More Leads" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className={`flex-1 py-5 sm:py-6 text-center ${i < 2 ? "border-r border-slate-200" : ""}`}
                    >
                      <div className="font-display text-2xl sm:text-3xl font-black text-blue-600 leading-none mb-1.5">
                        {s.val}
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[.18em] text-slate-700">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right — points list */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3"
              >
                {WhyMatters.map((point, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center gap-4 px-4 sm:px-5 py-4 sm:py-3 bg-slate-50 rounded-[14px] border border-transparent hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-default"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-200">
                      <Check
                        size={14}
                        strokeWidth={2.5}
                        className="text-blue-600 group-hover:text-white transition-colors duration-200"
                      />
                    </div>
                    <span className="text-sm sm:text-[14px] tracking-[.06em] font-medium text-slate-800 group-hover:text-blue-700 transition-colors duration-200 flex-1 leading-snug">
                      {point}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-200 group-hover:text-blue-200 transition-colors duration-200 font-mono flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* Our services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-6xl px-4">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                Our Paid <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                 Marketing Services
                </span>
              </h2>
            </div>

            <HorizontalServiceList services={services} />

          </div>
        </section>

        {/* Platforms */}
        <section className="py-12 lg:px-10 bg-[#f8f9fb]">
          <div className="container mx-auto max-w-6xl">

            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-[.2em] text-blue-700 mb-5">
                <Zap className="w-3 h-3" /> Omnichannel Performance
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                Strategic{" "}
                <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent">
                  Placement
                </span>
              </h2>
              <p className="text-[14px] text-slate-700 max-w-md mx-auto leading-[1.8] font-medium">
                Data-backed ad campaigns across the world's most influential platforms to scale your brand.
              </p>
            </div>

            {/* Zigzag rows */}
            <div className="flex flex-col rounded-2xl overflow-hidden border border-slate-100">
              {Platforms.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`group grid grid-cols-1 md:grid-cols-2 ${i > 0 ? "border-t border-slate-100" : ""}`}
                >
                  {/* Label side — alternates left/right */}
                  <div
                    className={`relative flex items-center px-10 py-10 overflow-hidden ${p.labelBg} ${i % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <div className="flex items-center gap-5 relative z-10">
                      <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 ${p.iconWrap}`}>
                        <p.icon size={22} />
                      </div>
                      <div>
                        <div className="font-display text-base md:text-xl lg:text-2xl font-extrabold text-slate-900 leading-tight">
                          {p.name}
                        </div>
                        <div className={`hidden md:block text-[10px] font-bold uppercase tracking-[.18em] mt-1 ${p.tag_color}`}>
                          {p.tag}
                        </div>
                      </div>
                    </div>
                    {/* Watermark number */}
                    <span
                      className="absolute bottom-[-8px] right-3 font-display text-[5rem] font-black italic leading-none pointer-events-none select-none opacity-10"
                      style={{ color: p.accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content side */}
                  <div
                    className={`flex flex-col justify-center px-10 py-10 bg-white ${i % 2 === 1 ? "md:order-1 border-r border-slate-100" : "border-l border-slate-100"}`}
                  >
                    <p className="text-sm md:text-base text-slate-800 leading-[1.85] font-medium">
                      {p.desc}
                    </p>
                    <div
                      className="mt-5 h-[3px] w-9 rounded-full group-hover:w-20 transition-all duration-500"
                      style={{ background: p.accent }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Our Approach */}
        <section className="py-12 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">

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
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-none">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">Approach</span>
              </h2>
              <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto mt-6 font-medium">
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
                  <div className="relative w-20 h-20 rounded-[2.2rem] bg-white border border-slate-100 flex items-center justify-center text-primary mx-auto mb-8 shadow-xl group-hover:bg-primary/80 group-hover:text-white group-hover:border-primary transition-all duration-500 ring-4 ring-white">
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
                    <h3 className="text-base md:text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-800 text-sm md:text-base leading-relaxed font-medium group-hover:text-slate-700">
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
        <CTASection
          title={<>Ready to Scale <br className="hidden md:block" /> Your Business? </>}
          description={<>Get a free paid advertising audit and custom strategy today.</>}
          buttonText="Claim Your Free Ad Audit"
        />

      </div>
    </>

  );
};

export default PaidMarketing;
