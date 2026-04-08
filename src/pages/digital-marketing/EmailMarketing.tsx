import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/ui/CTASection";
import ExploralPanel from "@/components/ui/ExploralPanel";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail, Zap, Users, BarChart3, ShieldCheck, MousePointer2,
  RefreshCcw,Send, ArrowRight,
  TrendingUp,
  Phone,
  Shield,
  Star,
  Edit3,
  MapPin
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailMarketing = () => {
  const navigate = useNavigate();

  const whyChoosePoints = [
    {
      num: "01", tag: "Results-Driven", color: "#1d4ed8",
      iconBgL: "bg-blue-100 text-blue-700", iconBgR: "bg-blue-100 text-blue-700",
      iconL: <TrendingUp size={16} />, iconR: <BarChart3 size={16} />,
      leftTitle: "Opens, Clicks & Revenue",
      leftSub: "We focus on metrics that actually move your business — not vanity numbers.",
      rightTitle: "Real Attribution Reporting",
      rightSub: "Every rupee earned traced back to the exact campaign that drove it.",
      tagBg: "bg-blue-50 text-blue-700",
    },
    {
      num: "02", tag: "Local Expertise", color: "#7e22ce",
      iconBgL: "bg-purple-100 text-purple-700", iconBgR: "bg-purple-100 text-purple-700",
      iconL: <MapPin size={16} />, iconR: <Star size={16} />,
      leftTitle: "Bhopal & Jabalpur Focus",
      leftSub: "Deep knowledge of MP consumer behaviour, seasonal trends, and local buying cycles.",
      rightTitle: "Regional Campaign Timing",
      rightSub: "Campaigns timed around local festivals, seasons, and audience activity peaks.",
      tagBg: "bg-purple-50 text-purple-700",
    },
    {
      num: "03", tag: "Full Service", color: "#c2410c",
      iconBgL: "bg-orange-100 text-orange-700", iconBgR: "bg-orange-100 text-orange-700",
      iconL: <Edit3 size={16} />, iconR: <Mail size={16} />,
      leftTitle: "Dedicated Copywriter",
      leftSub: "Every campaign written by a specialist — never templated, never AI-generated.",
      rightTitle: "ESP Setup & Management",
      rightSub: "We handle the full technical setup, integration, and ongoing platform management.",
      tagBg: "bg-orange-50 text-orange-700",
    },
  ]

  const services = [
    {
      num: "01",
      icon: Zap, iconBg: "bg-yellow-100",
      iconColor: "text-yellow-700",
      numColor: "text-yellow-700",
      tagBg: "bg-yellow-50",
      tagColor: "text-yellow-700",
      tag: "Always-On Automation",
      title: "Automation & Drip Campaigns",
      desc: "We build intelligent automated welcome series, nurture sequences, and abandoned cart recovery flows — triggered by user behaviour and precisely timed to convert subscribers into paying customers at every stage of the funnel without manual effort.",
    },
    {
      num: "02",
      icon: Mail, iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
      numColor: "text-blue-700",
      tagBg: "bg-blue-50",
      tagColor: "text-blue-700",
      tag: "Brand Consistency",
      title: "Newsletter Management",
      desc: "We craft engaging weekly or monthly newsletters designed to keep your brand top-of-mind, educate your audience with genuinely valuable content, and drive consistent, measurable traffic back to your website — building long-term loyalty with every send.",
    },
    {
      num: "03",
      icon: Users, iconBg: "bg-green-100",
      iconColor: "text-green-700",
      numColor: "text-green-700",
      tagBg: "bg-green-50",
      tagColor: "text-green-700",
      tag: "List Health",
      title: "List Cleaning & Growth",
      desc: "We systematically remove inactive and unengaged subscribers to protect your sender reputation and deliverability, while simultaneously building a high-quality, permission-based list of genuinely interested prospects through proven opt-in strategies.",
    },
    {
      num: "04",
      icon: Send, iconBg: "bg-indigo-100",
      iconColor: "text-indigo-700",
      numColor: "text-indigo-700",
      tagBg: "bg-indigo-50",
      tagColor: "text-indigo-700",
      tag: "Post-Purchase Experience",
      title: "Transactional Emails",
      desc: "We optimise every order confirmation, shipping update, and post-purchase email to build customer trust, reduce inbound support queries, and strategically surface upsell and cross-sell opportunities that increase average order value and repeat purchases.",
    },
    {
      num: "05",
      icon: MousePointer2,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-700",
      numColor: "text-orange-700",
      tagBg: "bg-orange-50",
      tagColor: "text-orange-700",
      tag: "Revenue Campaigns",
      title: "Promotional Blast Campaigns",
      desc: "We design and execute strategic holiday, seasonal, and product-launch sales campaigns — fully segmented by audience behaviour, written for maximum open rates, and timed for peak engagement to deliver measurable revenue impact with every broadcast.",
    },
    {
      num: "06",
      icon: BarChart3,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-700",
      numColor: "text-teal-700",
      tagBg: "bg-teal-50",
      tagColor: "text-teal-700",
      tag: "Full Visibility",
      title: "Detailed Analytics & Audit",
      desc: "We deliver in-depth monthly reports tracking open rates, click-through rates, unsubscribes, conversions, and actual sales revenue attributed directly to each campaign — giving you complete clarity on ROI and a clear roadmap for continuous improvement.",
    },
  ]

  const processSteps = [
    {
      num: "01",
      tag: "Foundation",
      step: "Audience & Goal Discovery",
      desc: "We start by deeply understanding your business goals, target audience segments, and current email performance benchmarks — mapping the full subscriber journey before writing a single word.",
    },
    {
      num: "02",
      tag: "Architecture",
      step: "Sequence & Funnel Design",
      desc: "Every touchpoint is planned — from welcome flows to post-purchase sequences — with precise timing, segmentation logic, and trigger conditions mapped against your customer lifecycle stages.",
    },
    {
      num: "03",
      tag: "Execution",
      step: "Copy, Design & Build",
      desc: "Our team writes compelling, on-brand email copy, designs mobile-optimised templates, and builds every automation inside your ESP — tested across devices and clients before going live.",
    },
    {
      num: "04",
      tag: "Optimisation",
      step: "Send, Analyse & Iterate",
      desc: "Once live, we continuously monitor open rates, click-throughs, conversions, and revenue attribution — running A/B tests and iterating on subject lines, CTAs, and timing every single month.",
    },
  ]

  return (
    <>
      <SEO
        title="Email Marketing Services | Best Email Marketing Company in India"
        description="Reach your audience directly with personalized email campaigns that drive engagement, conversions, and customer retention."
        keywords="email marketing, email campaigns, newsletter marketing, email automation, bulk email marketing in jabalpur"
        url="/digital-marketing/email-marketing"
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
                  <Mail className="w-3 h-3 fill-primary/20" /> Email Marketing
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Email Marketing Services</span> That Converts Subscribers
                </h1>

                <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                  We create high-converting email marketing campaigns that build relationships, nurture leads, and drive consistent revenue through personalized automation and data-driven optimization.
                </p>

                <div className="flex justify-start pt-4">
                  <Button
                    size="lg"
                    className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => navigate("/contact")}
                  >
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
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

                  <div className="relative p-3 bg-white border-2 border-slate-200 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2"
                      alt="Email Marketing Automation"
                      className="relative rounded-[2rem] md:rounded-[3rem] group-hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Floating Mini-Metric Overlay */}
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                      <BarChart3 className="text-primary w-8 h-8 mb-2" />
                      <p className="text-2xl font-black text-foreground">4200%</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">Average Email ROI</p>
                    </div>
                  </div>

                  {/* Framed Layer - Matching the "Legacy" section rotation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-12 lg:px-10 bg-[#fafafa]">
          <div className="container mx-auto max-w-7xl">

            <div className="mb-14 max-">
              <h2 className="font-bold text-slate-900 text-3xl md:text-5xl"
                style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}
              >
                Why Choose <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent">
                  Socio Bhaarat
                </span> for Email Marketing
              </h2>
            </div>

            {/* Timeline rows */}
            <div className="flex flex-col gap-2.5">
              {whyChoosePoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] items-center min-h-[88px]"
                  style={{ '--ac': item.color } as React.CSSProperties}
                >
                  {/* LEFT cell */}
                  <div
                    className="flex items-center gap-4 px-7 py-5 rounded-2xl md:rounded-r-none border border-transparent bg-slate-50/80 group-hover:bg-white group-hover:border-current group-hover:-translate-x-1 transition-all duration-250 cursor-default"
                    style={{ borderColor: "transparent" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = item.color + "22")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
                  >
                    <div
                      className={`w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconBgL}`}
                    >
                      {item.iconL}
                    </div>
                    <div>
                      <div
                        className="text-base md:text-lg font-bold text-slate-900 mb-1 leading-snug transition-colors duration-200 group-hover:text-current"
                        style={{}}
                      >
                        {item.leftTitle}
                      </div>
                      <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">{item.leftSub}</p>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-[.18em] px-2.5 py-1 rounded-full mt-2 inline-block ${item.tagBg}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Spine */}
                  <div className="hidden md:flex items-center justify-center relative py-2">
                    <div className="absolute inset-y-0 left-1/2 w-px bg-slate-100 -translate-x-1/2" />
                    <div
                      className="w-8 h-8 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center z-10 font-mono text-[10px] font-bold text-slate-300 transition-all duration-250 group-hover:border-current group-hover:text-black group-hover:bg-white"
                    >
                      {item.num}
                    </div>
                  </div>

                  {/* RIGHT cell */}
                  <div
                    className="flex items-center gap-4 px-7 py-8 rounded-2xl md:rounded-l-none border border-transparent bg-slate-50/80 group-hover:bg-white group-hover:translate-x-1 transition-all duration-250 cursor-default"
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = item.color + "22")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
                  >
                    <div
                      className={`w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconBgR}`}
                    >
                      {item.iconR}
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-bold text-slate-900 mb-1 leading-snug">
                        {item.rightTitle}
                      </div>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">{item.rightSub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* WHY YOU NEED EMAIL MARKETING */}
        <section className="py-12 lg:px-10 bg-white relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* ── LEFT ── */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-[2px] bg-blue-600 rounded-full" />
                  <span className="text-[10px] font-bold tracking-[.3em] uppercase text-blue-600">
                    Audience Ownership
                  </span>
                </div>

                <h2 className="font-bold text-3xl md:text-5xl text-slate-900 tracking-tight leading-[1.06]"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
                >
                  Stop Relying on <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                    Borrowed Audiences.
                  </span>
                </h2>

                <p className="text-sm md:text-base text-slate-800 leading-[1.85] font-medium border-l-4 border-blue-100 pl-5 py-1">
                  Social media algorithms change daily and your reach can vanish overnight. Email
                  gives you a direct, uninterrupted line to your customers that you{" "}
                  <strong className="text-slate-900 not-italic font-bold">own 100%</strong> -
                  the highest ROI channel in digital marketing.
                </p>

                <div className="flex flex-col gap-0.5">
                  {[
                    { icon: Phone, title: "Direct Access", sub: "Bypass algorithms and reach the inbox directly — every single time." },
                    { icon: Users, title: "Personalisation", sub: "Speak to customers based on their specific behaviour and purchase history." },
                    { icon: Shield, title: "Data Ownership", sub: "Build a valuable business asset that stays with you — platform-independent." },
                  ].map((f, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-4 px-5 py-4 rounded-xl border border-transparent hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-default"
                    >
                      <div className="w-8 h-8 rounded-[9px] bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-200">
                        <f.icon size={14} className="text-blue-600 group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <div className=" text-[14px] font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                          {f.title}
                        </div>
                        <p className="text-[12px] text-slate-700 font-medium leading-relaxed">{f.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── RIGHT ── */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3"
              >
                {/* Stat banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl px-7 py-6 flex items-center justify-between gap-4">
                  {[
                    { val: "42×", label: "Avg ROI", color: "text-blue-600" },
                    { val: "4.2B", label: "Email Users", color: "text-violet-600" },
                    { val: "99%", label: "Inbox Rate", color: "text-orange-500" },
                  ].map((s, i) => (
                    <div key={i} className={`text-center flex-1 ${i < 2 ? "border-r border-blue-200" : ""}`}>
                      <div className={`text-base md:text-3xl font-black leading-none mb-1 ${s.color}`}>
                        {s.val}
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-[.2em] text-slate-400">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Metric rows */}
                {[
                  { icon: TrendingUp, title: "Higher open rates than social", sub: "Email averages 20–40% open rates vs 2–5% on social feeds", badge: "Reach", badgeBg: "bg-blue-100 text-blue-700", iconBg: "bg-blue-50 text-blue-600" },
                  { icon: Zap, title: "Automated lifecycle flows", sub: "Welcome, nurture, and win-back sequences running 24/7", badge: "Auto", badgeBg: "bg-purple-100 text-purple-700", iconBg: "bg-purple-50 text-purple-600" },
                  { icon: Star, title: "Behaviour-based personalisation", sub: "Triggered by clicks, purchases, and browsing patterns", badge: "Smart", badgeBg: "bg-orange-100 text-orange-700", iconBg: "bg-orange-50 text-orange-600" },
                  { icon: BarChart3, title: "Full revenue attribution", sub: "Track every rupee earned directly from each campaign", badge: "ROI", badgeBg: "bg-green-100 text-green-700", iconBg: "bg-green-50 text-green-600" },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center gap-4 px-5 py-4 rounded-xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-[0_4px_20px_rgba(37,99,235,0.07)] transition-all duration-200 cursor-default"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110 ${m.iconBg}`}>
                      <m.icon size={17} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className=" text-base font-bold text-slate-900 leading-snug mb-0.5">
                        {m.title}
                      </div>
                      <p className="text-sm text-slate-800 font-medium">{m.sub}</p>
                    </div>
                    <span className={`text-[9px] font-bold uppercase tracking-[.15em] px-3 py-1.5 rounded-full flex-shrink-0 ${m.badgeBg}`}>
                      {m.badge}
                    </span>
                  </motion.div>
                ))}

                {/* Bottom CTA strip */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl px-6 py-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.2em] text-blue-200 mb-1">
                      Retention Strategy
                    </p>
                    <div className="text-base tracking-wide font-bold text-white">
                      Automated Lifecycle Engine
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <RefreshCcw size={20} className="text-white" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-12 px-6 lg:px-10 bg-[#f8f9fb]">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-14">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">
                Our Email Marketing <span className=" bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                  Services
                </span>
              </h2>
              <p className="text-sm md:text-base font-medium text-slate-800 leading-[1.8] max-w-2xl border-l-[3px] border-blue-100 pl-4">
                "We build digital assets that scale your brand authority and drive measurable growth across the Bhopal & Jabalpur business landscape."
              </p>
            </div>

            <ExploralPanel content={services}/>
          </div>
        </section>

        {/* THE PROCESS */}
        <section className="pb-12 lg:px-10 bg-[#f8f9fb]">
          <div className="container mx-auto max-w-7xl">

            <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-14">
              Lifecycle{" "}
              <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                Strategy
              </span>
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

        {/* FINAL CTA */}
        <CTASection
          title={<>Ready to Own <br className="hidden md:block" /> Your Audience?</>}
          description={<>Stop relying solely on social algorithms. Build a list you truly own.</>}
          buttonText="Claim Your Free Audit"
        />
      </div>
    </>

  );
};

export default EmailMarketing;