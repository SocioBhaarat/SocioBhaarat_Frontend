import { Button } from "@/components/ui/button";
import {
  Check, BarChart, Target, DollarSign, TrendingUp, FileSearch,
  ShoppingCart, Briefcase, Heart, Home, ArrowRight, Zap,
  ShieldCheck, PieChart, MousePointer2,
  Search,
  Settings,
  RefreshCcw,
  IndianRupee
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/ui/CTASection";
import { staggerContainer, fadeUp, cardAnimation } from "@/components/ui/animation";
import HorizontalServiceList from "@/components/ui/HorizontalServiceList";
import SEO from "@/components/SEO";

const PerformanceMarketing = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Target />,
      color: "#1d4ed8",
      title: "Google Ads Management",
      desc: "Precision Search, Display, and Shopping campaigns engineered for high-intent traffic — with smart bidding strategies, negative keyword management, and continuous optimisation to maximise conversions and minimise wasted spend.",
    },
    {
      icon: <TrendingUp />,
      color: "#7e22ce",
      title: "Meta Ads (FB & IG)",
      desc: "Creative-driven Facebook and Instagram campaigns built for lead generation, brand visibility, and direct sales — using audience layering, lookalike targeting, and dynamic creative testing to consistently lower your cost per result.",
    },
    {
      icon: <Briefcase />,
      color: "#0369a1",
      title: "LinkedIn Advertising",
      desc: "B2B lead generation campaigns targeting professional decision-makers by job title, company size, and industry — ideal for reaching high-value prospects who are actively looking for solutions your business provides.",
    },
    {
      icon: <BarChart />,
      color: "#c2410c",
      title: "YouTube Video Ads",
      desc: "Engaging skippable, non-skippable, and bumper video campaigns that increase brand recall, drive website visits, and convert viewers into customers — targeted by search behaviour, in-market signals, and audience intent.",
    },
    {
      icon: <RefreshCcw />,
      color: "#15803d",
      title: "Retargeting Campaigns",
      desc: "Smart pixel-based retargeting across Google, Meta, and YouTube that re-engages warm prospects who visited your site or interacted with your brand — turning high-intent visitors into paying customers at a fraction of the acquisition cost.",
    },
    {
      icon: <FileSearch />,
      color: "#b45309",
      title: "Analytics & CRO",
      desc: "Full attribution modelling, conversion tracking setup, and landing page optimisation — giving you complete visibility into which campaigns drive revenue and systematically improving your conversion rate across every channel.",
    },
  ]

  const whyChooseUs = [
    {
      num: "01",
      title: "ROI Strategy",
      icon: <Target size={22} />,
      desc: "Every campaign is built with profitability at its core — not vanity metrics. We align your ad spend directly with revenue goals, tracking cost-per-acquisition and lifetime customer value to ensure your investment grows your business.",
      tag: "Profit-Focused",
      card: "bg-blue-50 border-blue-200",
      iconWrap: "bg-blue-100 text-blue-700",
      num_color: "text-blue-200",
      tag_color: "text-blue-700",
      dot: "bg-blue-700",
    },
    {
      num: "02",
      title: "Data-Driven Insights",
      icon: <PieChart size={22} />,
      desc: "Real-time analytics power continuous campaign adjustments for peak efficiency — every decision is backed by live data, not guesswork, ensuring your budget always works harder.",
      tag: "Live Analytics",
      card: "bg-fuchsia-50 border-purple-200",
      iconWrap: "bg-purple-100 text-purple-700",
      num_color: "text-purple-200",
      tag_color: "text-purple-700",
      dot: "bg-purple-700",
    },
    {
      num: "03",
      title: "Precision Targeting",
      icon: <MousePointer2 size={22} />,
      desc: "Laser-focused audience strategies that reach high-intent users at the exact right moment — eliminating wasted spend and maximising the quality of every click and conversion.",
      tag: "Zero Waste Spend",
      card: "bg-orange-50 border-orange-200",
      iconWrap: "bg-orange-100 text-orange-700",
      num_color: "text-orange-200",
      tag_color: "text-orange-700",
      dot: "bg-orange-700",
    },
    {
      num: "04",
      title: "Continuous A/B Testing",
      icon: <FileSearch size={22} />,
      desc: "We constantly test ad creatives, copy variations, and audience segments to identify the highest-performing combinations — compounding your results with every iteration.",
      tag: "Always Improving",
      card: "bg-green-50 border-green-200",
      iconWrap: "bg-green-100 text-green-700",
      num_color: "text-green-200",
      tag_color: "text-green-700",
      dot: "bg-green-700",
    },
    {
      num: "05",
      title: "CRO Focus",
      icon: <DollarSign size={22} />,
      desc: "Optimised landing pages, persuasive ad copy, and streamlined conversion funnels that turn paid traffic into qualified leads and paying customers — not just clicks.",
      tag: "Higher Conversions",
      card: "bg-red-50 border-red-200",
      iconWrap: "bg-red-100 text-red-700",
      num_color: "text-red-200",
      tag_color: "text-red-700",
      dot: "bg-red-700",
    },
    {
      num: "06",
      title: "Total Transparency",
      icon: <Briefcase size={22} />,
      desc: "Actionable weekly reports showing exactly where every rupee of your investment goes — no jargon, no vanity metrics, just clear data tied directly to real business outcomes.",
      tag: "Full Visibility",
      card: "bg-amber-50 border-amber-200",
      iconWrap: "bg-amber-100 text-amber-700",
      num_color: "text-amber-200",
      tag_color: "text-amber-700",
      dot: "bg-amber-700",
    },
  ]

  const industries = [
    {
      icon: ShoppingCart,
      label: "01",
      title: "E-commerce & D2C",
      desc: "High-ROAS shopping funnels, dynamic product ads, and abandoned cart retargeting — built to scale revenue without inflating acquisition costs.",
      bg: "bg-blue-50 border-blue-200",
      iconBg: "from-blue-600 to-indigo-600",
      labelColor: "text-blue-300",
      titleHover: "group-hover:text-blue-700",
      bar: "bg-blue-600",
      wm: "text-blue-600",
    },
    {
      icon: Briefcase,
      label: "02",
      title: "B2B Services",
      desc: "LinkedIn-led lead generation and Google Search campaigns targeting high-value decision-makers at the exact moment they need your solution.",
      bg: "bg-fuchsia-50 border-purple-200",
      iconBg: "from-violet-600 to-purple-500",
      labelColor: "text-purple-300",
      titleHover: "group-hover:text-violet-700",
      bar: "bg-violet-600",
      wm: "text-violet-600",
    },
    {
      icon: Heart,
      label: "03",
      title: "Healthcare",
      desc: "Compliant patient acquisition campaigns with precise local geo-targeting across Bhopal and Jabalpur — driving enquiries without policy violations.",
      bg: "bg-orange-50 border-orange-200",
      iconBg: "from-orange-500 to-amber-500",
      labelColor: "text-orange-300",
      titleHover: "group-hover:text-orange-700",
      bar: "bg-orange-500",
      wm: "text-orange-500",
    },
    {
      icon: Home,
      label: "04",
      title: "Real Estate",
      desc: "High-intent buyer and investor funnels for residential and commercial property leads — with WhatsApp integration and CRM-ready lead delivery.",
      bg: "bg-green-50 border-green-200",
      iconBg: "from-emerald-600 to-teal-500",
      labelColor: "text-green-300",
      titleHover: "group-hover:text-emerald-700",
      bar: "bg-emerald-600",
      wm: "text-emerald-600",
    },
  ]

  const processSteps = [
    {
      num: "01",
      tag: "Discovery",
      step: "Audit",
      icon: Search,
      color: "bg-blue-500",
      desc: "We conduct a comprehensive audit of your current ad accounts, competitors, and market positioning — identifying quick wins, wasted spend, and untapped opportunities before we touch a single campaign.",
    },
    {
      num: "02",
      tag: "Planning",
      step: "Strategy",
      icon: Target,
      color: "bg-purple-500",
      desc: "A full performance marketing blueprint is built around your revenue goals — defining target audiences, platform mix, budget allocation, funnel stages, and KPIs before a single rupee is spent.",
    },
    {
      num: "03",
      tag: "Build",
      step: "Setup",
      icon: Settings,
      color: "bg-orange-500",
      desc: "We build your campaigns from the ground up — pixel installation, conversion tracking, creative production, ad copy, audience segmentation, and landing page alignment all handled before go-live.",
    },
    {
      num: "04",
      tag: "Activation",
      step: "Launch",
      icon: Zap,
      color: "bg-emerald-500",
      desc: "Campaigns go live with a structured testing phase — controlled budgets, split audiences, and creative variants running simultaneously to gather data and validate our strategy in real market conditions.",
    },
    {
      num: "05",
      tag: "Growth",
      step: "Scale",
      icon: TrendingUp,
      color: "bg-amber-500",
      desc: "With proven winners identified, we scale budgets aggressively on top-performing campaigns — expanding audiences, refreshing creatives, and compounding results month over month for sustained growth.",
    },
  ]

  return (
    <>
      <SEO
        title="Performance Marketing Services | Best Marketing Agency - Socio Bhaarat"
        description="Drive measurable results with data-driven performance marketing strategies focused on ROI, conversions, and scalable growth."
        keywords="performance marketing, ppc marketing, paid ads strategy, conversion optimization, performance marketing agency in jabalpur"
        url="/performance-marketing"
      />
      <div className="min-h-screen bg-background selection:bg-primary/20">

        {/* HERO SECTION */}
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

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium">Performance Marketing Services</span> for Scalable Growth
                </h1>

                <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                  We scale businesses through precision-targeted advertising. Every rupee spent is tracked, optimized, and tied directly to your revenue goals.
                </p>

                <div className="flex justify-start pt-4">
                  <Button
                    size="lg"
                    className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => navigate("/contact")}
                  >
                    Get Free Audit <ArrowRight className="ml-2 w-5 h-5" />
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
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                      alt="Data Analytics and Growth Performance Dashboard"
                      className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Floating Live Metric Mockup */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Current ROAS</p>
                          <p className="text-xl font-black text-slate-900">4.85x</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Framed Layer for Identity */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* METRICS DASHBOARD */}
        <section className="py-12 bg-muted/30 border-y border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: "Average ROAS", value: "4.2x", color: "text-blue-600" },
                { label: "Lower CAC", value: "65%", color: "text-purple-600" },
                { label: "Ad Managed", value: "₹50Cr+", color: "text-emerald-600" },
                { label: "Campaigns", value: "300+", color: "text-orange-600" }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-2 tracking-tighter ${stat.color} group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SOCIOBHAARAT (Glow Cards) */}
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
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                Why Brands <br className="block sm:hidden"/>
                <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                  Trust Us
                </span>
              </h2>
              <p className="text-base md:text-base text-slate-700 font-medium leading-relaxed mx-auto ">
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

        {/* WHY YOU NEED PERFORMANCE MARKETING */}
        <section className="py-12 lg:px-10 bg-[#f8f9fb] relative overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* ── LEFT ── */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-0"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-[.22em] text-blue-700 mb-5 w-fit">
                  <DollarSign className="w-3 h-3" /> Financial Accountability
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5"
                  style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)" }}
                >
                  Stop Guessing. <br />
                  <em className=" bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                    Start Scaling.
                  </em>
                </h2>

                <p className="text-base md:text-lg text-slate-800 font-medium border-l-4 border-blue-100 pl-5 py-1 mb-8">
                  Performance marketing lets you track, measure, and optimise every campaign in
                  real-time. You pay only for measurable actions - ensuring better ROI and fully
                  controlled budgets.
                </p>

                {/* Check rows */}
                <div className="flex flex-col gap-2 mb-8">
                  {[
                    { label: "Pay for Results", sub: "Spend only when specific actions like leads or sales are completed — zero wasted budget." },
                    { label: "Real-Time Optimisation", sub: "Adjust budgets and targeting instantly based on what is actually converting right now." },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                      className="group flex items-start gap-4 px-5 py-4 rounded-2xl bg-white border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-default"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors duration-200">
                        <Check size={12} strokeWidth={2.5} className="text-blue-600 group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                          {item.label}
                        </h4>
                        <p className="text-sm font-medium text-slate-700 leading-relaxed">{item.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stat strip */}
                <div className="flex border border-slate-200 rounded-2xl overflow-hidden">
                  {[
                    { val: "3.5×", label: "Avg ROI", color: "text-blue-600" },
                    { val: "62%", label: "Lower CPA", color: "text-violet-600" },
                    { val: "10×", label: "Faster Scale", color: "text-orange-500" },
                  ].map((s, i) => (
                    <div key={i} className={`flex-1 py-4 text-center bg-white hover:bg-slate-50 transition-colors cursor-default ${i < 2 ? "border-r border-slate-200" : ""}`}>
                      <div className={`text-[1.4rem] font-black leading-none mb-1 ${s.color}`}>{s.val}</div>
                      <div className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-600">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── RIGHT — 2×2 tinted benefit grid ── */}
              <div className="grid md:grid-cols-2 gap-2.5">
                {[
                  { icon: BarChart, title: "Measurable Results", desc: "Track every lead, click, and conversion with real-time dashboards — no guesswork.", bg: "bg-blue-50 border-blue-200", iconBg: "bg-blue-100 text-blue-700", bar: "bg-blue-700", wm: "text-blue-600" },
                  { icon: Target, title: "Faster Lead Gen", desc: "Reach high-intent audiences instantly and start generating qualified leads from day one.", bg: "bg-fuchsia-50 border-purple-200", iconBg: "bg-purple-100 text-purple-700", bar: "bg-purple-700", wm: "text-purple-600" },
                  { icon: TrendingUp, title: "Higher Conversions", desc: "Continuous A/B testing of creatives, copy, and audiences to maximise your conversion rate.", bg: "bg-orange-50 border-orange-200", iconBg: "bg-orange-100 text-orange-700", bar: "bg-orange-700", wm: "text-orange-600" },
                  { icon: DollarSign, title: "Budget Optimisation", desc: "Scale winning campaigns and cut wasted spend — every rupee working at full efficiency.", bg: "bg-green-50 border-green-200", iconBg: "bg-green-100 text-green-700", bar: "bg-green-700", wm: "text-green-600" },
                ].map((b, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4, boxShadow: "0 14px 40px rgba(0,0,0,0.08)" }}
                    transition={{ duration: 0.25 }}
                    className={`group relative flex flex-col rounded-[18px] p-6 border overflow-hidden cursor-default transition-all duration-300 ${b.bg}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${b.iconBg}`}>
                      <b.icon size={17} />
                    </div>
                    <h3 className="text-base md:text-lg font-bold italic text-slate-900 mb-2 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-800 font-medium leading-[1.75] flex-1 mb-4">{b.desc}</p>
                    <div className={`h-[2.5px] w-6 rounded-full group-hover:w-full transition-all duration-500 ${b.bar}`} />
                    <span className={`absolute bottom-0 right-2 font-display text-[4.5rem] font-black italic leading-none pointer-events-none select-none opacity-[0.05] group-hover:opacity-[0.11] transition-opacity ${b.wm}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* PERFORMANCE MARKETING SERVICES */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-6xl px-4">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                Our Performace <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                  Marketing Services
                </span>
              </h2>
            </div>

            <HorizontalServiceList services={services} />

          </div>
        </section>

        {/* PROCESS (Horizontal Roadmap) */}
        {/* <section className="py-24 px-4 bg-muted/50 overflow-hidden relative">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 italic">The Roadmap to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">Scale</span> </h2>

          <div className="relative">
            <div className="hidden lg:block absolute top-[80px] left-[10%] right-[10%] h-px border-t-2 border-dashed border-border -z-10" />

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { step: "Audit", icon: Search, color: "bg-blue-500" },
                { step: "Strategy", icon: Target, color: "bg-purple-500" },
                { step: "Setup", icon: Settings, color: "bg-orange-500" },
                { step: "Launch", icon: Zap, color: "bg-emerald-500" },
                { step: "Scale", icon: TrendingUp, color: "bg-amber-500" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center shadow-xl mb-6 transition-transform hover:rotate-6`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">0{index + 1}. {item.step}</h4>
                  <p className="text-xs text-muted-foreground px-4">Standardized high-performance auditing and execution flow.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

        <section className="py-12 lg:px-10 bg-[#f8f9fb]">
          <div className="container mx-auto max-w-7xl">

            <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-14">
              Lifecycle{" "}
              <em className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                Strategy
              </em>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative grid grid-cols-[64px_1fr] min-h-[120px] rounded-2xl overflow-hidden border border-transparent bg-white hover:border-blue-100 hover:shadow-[0_8px_32px_rgba(37,99,235,0.07)] transition-all duration-250 cursor-default"
                >
                  {/* Left — number */}
                  <div className="flex flex-col items-center justify-center gap-1.5 border-r border-slate-100 py-5 group-hover:bg-blue-50 transition-colors duration-250">
                    <span className="font-display text-[1.3rem] font-black text-slate-200 group-hover:text-blue-600 transition-colors leading-none">
                      {item.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
                  </div>

                  {/* Right — content */}
                  <div className="relative px-6 py-6 flex flex-col justify-center gap-2 overflow-hidden">
                    {/* Sliding left accent bar */}
                    <div className="absolute left-0 top-0 w-[3px] h-0 bg-blue-600 group-hover:h-full transition-all duration-400 rounded-r-sm" />

                    <span className="text-sm font-bold uppercase tracking-[.22em] text-blue-400 group-hover:text-blue-600 transition-colors">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {item.step}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* INDUSTRIES (Bento Grid) */}
        <section className="py-5 lg:px-10 bg-[#fafafa]">
          <div className="container mx-auto max-w-7xl">

            {/* Header */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Industries We{" "}
                <em className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                  Serve Best
                </em>
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-lg mx-auto leading-relaxed font-medium">
                Tailored high-ROAS strategies built around the unique buyer journey of each industry.
              </p>
            </div>

            {/* 4 col → 2 col → 1 col grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {industries.map((ind, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,0,0,0.09)" }}
                  transition={{ duration: 0.25 }}
                  className={`group relative flex flex-col rounded-2xl p-7 border overflow-hidden cursor-default transition-all duration-300 min-h-[300px] ${ind.bg}`}
                >
                  {/* Ghost watermark */}
                  <ind.icon
                    className={`absolute -bottom-4 -right-4 w-28 h-28 opacity-[0.06] group-hover:opacity-[0.12] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${ind.wm}`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.iconBg} text-white flex items-center justify-center mb-6 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <ind.icon size={20} />
                  </div>

                  {/* Number */}
                  <span className={`text-sm font-bold uppercase tracking-[.2em] mb-2 block ${ind.labelColor}`}>
                    {ind.label}
                  </span>

                  {/* Title */}
                  <h3 className={`text-lg md:text-xl font-bold text-slate-900 mb-3 leading-snug transition-colors duration-250 ${ind.titleHover}`}>
                    {ind.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm md:text-base text-slate-800 leading-[1.8] flex-1 mb-6 font-medium">
                    {ind.desc}
                  </p>

                  {/* Expanding bar */}
                  <div className={`h-[3px] w-8 rounded-full group-hover:w-full transition-all duration-500 ${ind.bar}`} />
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* PRICING & TRANSPARENCY */}
        <section className="py-12 sm:px-6 lg:px-8 bg-[#f8f9fb] relative overflow-hidden">
          <div className="container mx-auto max-w-7xl relative z-10">

            {/* Header */}
            <div className="text-center mb-10">
              <h2 className=" text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Transparent{" "}
                <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                  Pricing
                </span>
              </h2>
              <div className="h-1 w-16 bg-blue-600 rounded-full mx-auto mt-4" />
            </div>

            {/* Main card */}
            <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden">

              {/* Top accent strip */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-violet-600 to-orange-500" />

              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">

                {/* LEFT — ROI Model */}
                <div className="p-8 md:p-12 flex flex-col gap-7 relative overflow-hidden">
                  <ShieldCheck className="absolute -bottom-4 -right-4 w-36 h-36 text-blue-600 opacity-[0.04] rotate-12 pointer-events-none" />

                  <div className="flex flex-col gap-4">
                    <span className="text-sm font-bold tracking-[.25em] uppercase text-blue-600">
                      Fee Structure
                    </span>
                    <h3 className="text-2xl md:text-4xl font-extrabold italic text-slate-900 leading-tight">
                      The ROI Model
                    </h3>
                    <p className="text-sm md:text-base text-slate-700  leading-[1.85] font-medium border-l-[3px] border-blue-100 pl-5 py-1">
                      We operate on a performance fee structure, typically{" "}
                      <strong className="text-slate-800 not-italic font-bold">
                        15–20% of monthly ad spend
                      </strong>{" "}
                      — ensuring our incentives are perfectly aligned with your growth.
                    </p>
                  </div>

                  {/* Min spend pill */}
                  <div className="flex items-center gap-4 py-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <IndianRupee size={18} className="text-blue-700" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-400 mb-0.5">
                        Minimum Budget
                      </p>
                      <p className="text-lg font-black text-blue-700">
                        ₹50,000 / month ad spend
                      </p>
                    </div>
                  </div>

                  {/* % breakdown */}
                  <div className="flex gap-3">
                    {[["15%", "Starter"], ["18%", "Growth"], ["20%", "Scale"]].map(([val, label]) => (
                      <div key={label} className="flex-1 text-center py-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="font-display text-2xl font-black text-blue-600 leading-none mb-1.5">{val}</div>
                        <div className="text-xs md:text-sm font-bold uppercase tracking-[.12em] text-slate-400">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT — Standard Terms */}
                <div className="p-8 md:p-12 flex flex-col gap-7">
                  <div className="flex flex-col gap-3">
                    <span className="text-sm font-bold tracking-[.25em] uppercase text-slate-400">
                      Standard Terms
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
                      What's Included
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {[
                      { label: "50% Advance Payment", sub: "Simple, secure onboarding process", color: "bg-green-100 text-green-700" },
                      { label: "Direct Platform Billing", sub: "Ad spend goes straight to Google & Meta", color: "bg-blue-100 text-blue-700" },
                      { label: "No Long-Term Contracts", sub: "Month-to-month, cancel anytime", color: "bg-violet-100 text-violet-700" },
                      { label: "Weekly ROI Reporting", sub: "Clear dashboards every Monday morning", color: "bg-orange-100 text-orange-700" },
                    ].map((t, i) => (
                      <div
                        key={i}
                        className="group flex items-center gap-4 py-4 rounded-xl border border-transparent bg-slate-50 hover:bg-green-50 hover:border-green-200 transition-all duration-200 cursor-default"
                      >
                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors duration-200">
                          <Check size={14} strokeWidth={3} className="text-green-600 group-hover:text-white transition-colors duration-200" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-base md:text-lg font-bold text-slate-800 leading-snug mb-0.5">{t.label}</p>
                          <p className="text-sm text-slate-600 font-medium">{t.sub}</p>
                        </div>
                        <span className={`text-sm font-bold uppercase tracking-[.12em] px-3 py-1 rounded-full flex-shrink-0 ${t.color}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-1">
                    <Button
                      className="w-full h-13 rounded-xl font-bold text-base bg-blue-600 hover:bg-blue-700 text-white transition-all"
                      onClick={() => navigate("/contact")}
                    >
                      Start Your Campaign <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* FINAL CTA */}
        <CTASection
          title={<>Ready to Stop Guessing <br className="hidden sm:block" /> and Start Scaling?</>}
          description={<>Join 500+ businesses who rely on Socio Bhaarat <br className="hidden sm:block" /> to deliver consistent leads and massive ROI through performance marketing.</>}
          buttonText="Claim Free ROI Audit Now"
        />

      </div>
    </>

  );
};

export default PerformanceMarketing;