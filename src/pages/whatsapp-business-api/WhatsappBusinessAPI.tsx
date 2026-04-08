import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, Check, BarChart3, MessageSquare, RefreshCcw, ShieldCheck, Users, Zap, X, Star, Target } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CTASection } from '@/components/ui/CTASection';
import QuoteSection from '@/components/ui/QuoteSection';
import SEO from '@/components/SEO';

function WhatsappBusinessAPI() {
  const navigate = useNavigate();

  const whyChooseUs = [
    {
      num: "01",
      icon: <ShieldCheck size={22} />,
      title: "WhatsApp API Partner",
      desc: "We provide verified, officially approved WhatsApp Business API access — giving your business the green tick badge and ensuring 100% compliant message delivery without risk of account bans.",
      bg: "bg-blue-50",
      border: "border-blue-200",
      iconBg: "bg-blue-100 text-blue-700",
      numColor: "text-blue-600",
      tagBg: "bg-blue-50",
      tagColor: "text-blue-700",
      tag: "Verified Access",
    },
    {
      num: "02",
      icon: <MessageSquare size={22} />,
      title: "Bulk Broadcast at Scale",
      desc: "Send 1,00,000+ personalised WhatsApp messages in a single campaign — with dynamic name tags, offer slots, and media attachments reaching every contact simultaneously without manual effort.",
      bg: "bg-green-50",
      border: "border-green-200",
      iconBg: "bg-green-100 text-green-700",
      numColor: "text-green-600",
      tagBg: "bg-green-50",
      tagColor: "text-green-700",
      tag: "Mass Messaging",
    },
    {
      num: "03",
      icon: <Zap size={22} />,
      title: "24-Hour API Setup",
      desc: "From application to live API access in under 24 hours — we handle the entire onboarding process including business verification, number registration, and template approval with Meta.",
      bg: "bg-orange-50",
      border: "border-orange-200",
      iconBg: "bg-orange-100 text-orange-700",
      numColor: "text-orange-600",
      tagBg: "bg-orange-50",
      tagColor: "text-orange-700",
      tag: "Fast Onboarding",
    },
    {
      num: "04",
      icon: <Users size={22} />,
      title: "Local MP Market Expertise",
      desc: "Deep understanding of Bhopal and Jabalpur consumer behaviour — our campaigns are timed, worded, and targeted specifically for the MP audience to maximise open rates and response rates.",
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      iconBg: "bg-indigo-100 text-indigo-700",
      numColor: "text-indigo-600",
      tagBg: "bg-indigo-50",
      tagColor: "text-indigo-700",
      tag: "Local Expertise",
    },
    {
      num: "05",
      icon: <BarChart3 size={22} />,
      title: "Full Campaign Analytics",
      desc: "Real-time dashboards tracking delivery rates, read rates, click-throughs, and conversions — giving you complete visibility into every campaign's ROI with weekly performance reports.",
      bg: "bg-teal-50",
      border: "border-teal-200",
      iconBg: "bg-teal-100 text-teal-700",
      numColor: "text-teal-600",
      tagBg: "bg-teal-50",
      tagColor: "text-teal-700",
      tag: "Full Visibility",
    },
    {
      num: "06",
      icon: <RefreshCcw size={22} />,
      title: "Automated Drip Campaigns",
      desc: "Intelligent automation flows that send the right message at the right time — welcome sequences, abandoned cart recovery, order updates, and re-engagement campaigns running 24/7 on autopilot.",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      iconBg: "bg-emerald-100 text-emerald-700",
      numColor: "text-emerald-600",
      tagBg: "bg-emerald-50",
      tagColor: "text-emerald-700",
      tag: "Always-On Automation",
    },
  ]

  const services = [
    {
      icon: <MessageSquare />,
      color: "#2563eb",
      title: "Bulk WhatsApp Broadcasting",
      desc: "Send personalised WhatsApp messages to unlimited contacts in a single click — with dynamic name tags, offer slots, images, and PDFs delivered directly to every customer's inbox simultaneously.",
    },
    {
      icon: <Zap />,
      color: "#7c3aed",
      title: "Automated Drip Campaigns",
      desc: "Intelligent message sequences triggered by user actions — welcome flows, abandoned cart recovery, order confirmations, and re-engagement campaigns running 24/7 without any manual effort.",
    },
    {
      icon: <Users />,
      color: "#ea580c",
      title: "WhatsApp Chatbot Setup",
      desc: "AI-powered chatbots that handle customer queries, collect leads, share catalogues, and book appointments automatically — freeing your team while keeping every customer instantly responded to.",
    },
    {
      icon: <ShieldCheck />,
      color: "#16a34a",
      title: "Green Tick Verification",
      desc: "We manage the complete Meta business verification process to get your brand the official WhatsApp green tick badge — building instant trust and credibility with every message you send.",
    },
    {
      icon: <BarChart3 />,
      color: "#4338ca",
      title: "Campaign Analytics & Reporting",
      desc: "Real-time dashboards tracking delivery rates, open rates, click-throughs, and revenue attribution — with weekly performance reports so you always know exactly what each campaign delivers.",
    },
    {
      icon: <RefreshCcw />,
      color: "#0d9488",
      title: "CRM & API Integration",
      desc: "Seamless integration with your existing CRM, website, e-commerce store, and payment gateway — automating WhatsApp notifications for orders, payments, appointments, and customer updates.",
    },
    {
      icon: <Target />,
      color: "#dc2626",
      title: "WhatsApp Ad Click Campaigns",
      desc: "Meta Click-to-WhatsApp ads that drive prospects directly into a WhatsApp conversation — capturing high-intent leads from Facebook and Instagram into your sales funnel instantly.",
    },
    {
      icon: <Star />,
      color: "#d97706",
      title: "Template Message Management",
      desc: "End-to-end management of your WhatsApp message templates — writing, submitting, and getting Meta approval for promotional, transactional, and utility templates that comply with all policies.",
    },
  ]
  return (
    <>
      <SEO
        title="WhatsApp Business API Services | Bulk Messaging & Automation | Socio Bhaarat"
        description="Enable seamless customer communication with WhatsApp Business API for bulk messaging, automation, and real-time engagement."
        keywords="whatsapp business api, whatsapp marketing, bulk whatsapp messaging, whatsapp automation, whatsapp api provider in jabalpur"
        url="/whatsapp-business-api"
      />
      <div className='min-h-screen bg-[#fafafa] selection:bg-primary/10'>
        {/* Hero Section */}
        <section className="relative pb-10 flex items-start overflow-hidden bg-[#fafafa]">

          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
            <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-green-500/5 blur-[130px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-emerald-400/10 blur-[110px] rounded-full" />
          </div>

          <div className="container mx-auto px-4 relative z-10 mt-12 pb-16">
            <div className="grid lg:grid-cols-12 gap-12 items-start">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-8 text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                  <Star className="w-3 h-3" /> WhatsApp Growth Partner
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">WhatsApp Business API Services</span> for Business Growth
                </h1>

                <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                  Send official bulk broadcasts, automate conversations, and engage thousands of customers instantly — all on the world’s most trusted messaging platform.
                </p>

                <div className="flex justify-start pt-4">
                  <Button
                    size="lg"
                    className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => navigate("/contact")}
                  >
                    Start with WhatsApp API
                  </Button>
                </div>

              </motion.div>

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
                      src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800"
                      alt="WhatsApp Business API Dashboard"
                      className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Floating ROAS card */}
                    <div className="absolute bottom-8 left-6 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl border border-slate-100 shadow-xl">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Campaign ROAS
                      </p>
                      <p className="text-2xl font-black text-slate-900 leading-none">7.5×</p>
                    </div>

                    {/* Floating delivery card */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-green-100 shadow-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-white" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Messages Sent
                        </p>
                        <p className="text-sm font-black text-slate-900">1,00,000+</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 z-20">
                    <MessageCircle size={28} className="text-white fill-white" />
                  </div>



                  {/* Framed Layer - Matching the "Legacy" section rotation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />


                </div>
                {/* Trust badges */}
                <div className="flex flex-wrap gap-6 pt-10">
                  {[
                    { val: "98%", label: "Message Delivery" },
                    { val: "3×", label: "Business Growth" },
                    { val: "24h", label: "API Setup Time" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-black text-primary leading-none mb-0.5">{s.val}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* why Choose Us section */}
        <section className="py-12 lg:px-10 bg-[#f8f9fb]">
          <div className="container mx-auto max-w-7xl">

            {/* Split header */}
            <div className="max-w-7xl mx-auto mb-14 space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-[.22em] text-blue-700 mb-5">
                  <MessageCircle className="w-3 h-3" /> WhatsApp Advantage
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                  Why Choose{" "}
                  <em className="bg-gradient-to-r from-blue-500 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                    Socio Bhaarat
                  </em>
                  {" "}for WhatsApp API
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm md:text-base text-slate-700 border-l-[3px] border-blue-200 pl-4 font-medium">
                  We don't just give you API access - we build the entire messaging
                  infrastructure, automation flows, and campaign strategy that turns
                  WhatsApp into your highest-ROI marketing channel.
                </p>
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.25 }}
                  className={`group relative flex flex-col rounded-2xl p-8 border-[1.5px] overflow-hidden cursor-default transition-all duration-300 ${item.bg} ${item.border}`}
                >
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-[13px] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconBg}`}>
                    {item.icon}
                  </div>

                  {/* Num */}
                  <span className={`text-sm font-bold tracking-[.18em] uppercase mb-2 ${item.numColor}`}>
                    {item.num}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm md:text-base font-medium text-slate-700 flex-1 mb-5">
                    {item.desc}
                  </p>

                  {/* Tag + bar */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-bold uppercase tracking-[.15em] px-3 py-1.5 rounded-full ${item.tagBg} ${item.tagColor} border border-current/20`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Bottom bar */}
                  <div className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${index === 0 ? "from-blue-600 to-blue-400" :
                    index === 1 ? "from-green-600 to-green-400" :
                      index === 2 ? "from-orange-600 to-orange-400" :
                        index === 3 ? "from-indigo-600 to-indigo-400" :
                          index === 4 ? "from-teal-600 to-teal-400" :
                            "from-emerald-600 to-emerald-400"
                    }`} />

                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* what is Whatsapp Business API */}
        <section className="py-12 lg:px-10 bg-white relative overflow-hidden">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* ── LEFT ── */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 md:gap-8"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs md:text-sm font-bold tracking-[0.2em] uppercase w-fit">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Business API
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                  What is{" "}
                  <em className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium not-italic">
                    WhatsApp Business API?
                  </em>
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-slate-700 border-l-4 border-blue-100 pl-4 md:pl-6 py-1 font-medium">
                  WhatsApp Business API is Meta's official enterprise-grade messaging
                  platform that allows businesses to send verified, high-volume messages
                  directly to customers — bypassing algorithms, spam filters, and social
                  media feeds entirely.
                </p>

                <p className="text-base text-slate-700 font-medium">
                  Unlike the regular WhatsApp Business app — which is limited to 256
                  contacts per broadcast — the API has no sending limits, supports full
                  automation, CRM integration, and delivers messages with a verified
                  green tick that builds instant trust with your audience.
                </p>

                {/* Feature list */}
                <div className="flex flex-col gap-2">
                  {[
                    { label: "No broadcast limit", sub: "Send to unlimited contacts in one go" },
                    { label: "Official Meta verification", sub: "Green tick badge builds instant customer trust" },
                    { label: "Full automation support", sub: "Connect to your CRM, website, and payment gateway" },
                    { label: "98% message open rate", sub: "Far higher than email or social media" },
                  ].map((f, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-4 px-4 py-4 rounded-xl border border-transparent bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-default"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-200 mt-0.5">
                        <Check size={13} strokeWidth={3} className="text-blue-600 group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-bold text-slate-800 leading-snug mb-0.5">{f.label}</p>
                        <p className="text-sm text-slate-800 font-medium">{f.sub}</p>
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
                className="flex flex-col gap-4 overflow-hidden"
              >
                {/* Stat banner - Changed grid to cols-1 on small screens to prevent overflow */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 mb-5">
                  {[
                    { val: "98%", label: "Open Rate", color: "text-blue-600" },
                    { val: "5×", label: "Vs Email ROI", color: "text-violet-600" },
                    { val: "1Cr+", label: "Daily Messages", color: "text-orange-500" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white py-6 text-center">
                      <div className={`font-display text-3xl font-black leading-none mb-1.5 ${s.color}`}>
                        {s.val}
                      </div>
                      <div className="text-[10px] md:text-sm font-bold uppercase tracking-[.18em] text-slate-400">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comparison — API vs Regular App - Added overflow-x-auto to prevent right-shift */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white mb-5">
                  <div className="px-5 md:px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="text-sm md:text-base font-bold text-slate-900">
                      API vs Regular App
                    </div>
                    <span className="text-[10px] md:text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Differences
                    </span>
                  </div>
                  <div className="overflow-x-auto"> {/* Critical fix for table overflow */}
                    <div className="divide-y divide-slate-100 min-w-[320px]">
                      {[
                        { label: "Limit", app: "256 contacts", api: "Unlimited" },
                        { label: "Automation", app: "Manual", api: "Full CRM" },
                        { label: "Badge", app: "None", api: "Green ✓" },
                        { label: "Open Rate", app: "~60%", api: "98%+" },
                      ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 items-center px-4 md:px-6 py-4">
                          <span className="text-xs font-semibold text-slate-500">{row.label}</span>
                          <div className="flex items-center gap-1 md:gap-2">
                            <X size={9} className="text-red-500" />
                            <span className="text-[11px] md:text-sm text-slate-400">{row.app}</span>
                          </div>
                          <div className="flex items-center gap-1 md:gap-2">
                            <Check size={9} className="text-blue-600" />
                            <span className="text-[11px] md:text-sm font-semibold text-slate-800">{row.api}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA strip - Fixed wrapping for mobile */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl px-5 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                  <div>
                    <p className="text-[10px] md:text-sm font-bold uppercase tracking-[.2em] text-blue-200 mb-1">
                      Ready to upgrade?
                    </p>
                    <h4 className="font-display text-lg md:text-xl font-extrabold italic text-white leading-tight">
                      Get API access in 24 hours.
                    </h4>
                  </div>
                  <Button
                    className="w-full md:w-auto rounded-xl px-5 h-11 text-sm font-bold bg-white hover:bg-blue-50 text-blue-700 transition-all flex items-center justify-center"
                    onClick={() => navigate("/contact")}
                  >
                    Get Started <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Why whatsapp business api */}
        <section className="py-5 lg:px-10 bg-white relative overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center mb-10 md:mb-14 space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Why WhatsApp API{" "}
                <em className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium not-italic">
                  in 2026?
                </em>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
                WhatsApp is the one platform that brings together Actionable Notifications & Customer Support.
                WhatsApp Business API helps you engage customers at scale — directly on the app they use every single day.
              </p>
            </div>

            {/* Stats strip */}
            {/* Changed to 1 column on tiny mobile, 2 on small/tablet, and 4 on desktop */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
              {[
                { val: "98%", label: "Open Rates", color: "text-blue-600" },
                { val: "45–60%", label: "Click Rates", color: "text-violet-600" },
                { val: "2.60Bn+", label: "Active Users", color: "text-orange-600" },
                { val: "70%", label: "Engagement Rate", color: "text-teal-600" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white px-4 py-8 md:px-6 md:py-10 text-center group hover:bg-slate-50 transition-colors duration-200 cursor-default"
                >
                  <div className={`font-display text-3xl md:text-4xl lg:text-5xl font-black leading-none mb-3 ${s.color}`}>
                    {s.val}
                  </div>
                  <div className="text-xs md:text-sm uppercase tracking-[.18em] text-slate-700 font-bold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 lg:px-10 bg-[#fafafa] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:35px_35px]" />

          <div className="container mx-auto max-w-7xl relative z-10">

            {/* Split header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
              <h2 className="text-3xl md:text-5xl font-bold italic tracking-tight text-slate-900">
                Our WhatsApp{" "}
                <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                  API Services
                </span>
              </h2>
              <p className="text-base text-slate-700 max-w-xs leading-relaxed border-l-[3px] border-blue-100 pl-4 flex-shrink-0 font-medium">
                Everything you need to turn WhatsApp into your highest-performing revenue channel.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-blue-100 to-transparent mb-12" />

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, boxShadow: "0 16px_48px rgba(0,0,0,0.07)" }}
                  transition={{ duration: 0.25 }}
                  style={{
                    background: `${service.color}08`,
                    borderColor: `${service.color}22`,
                  }}
                  className="group relative flex flex-col rounded-2xl p-8 border overflow-hidden cursor-default transition-all duration-300 hover:shadow-xl"
                >
                  {/* Icon stack */}
                  <div className="relative w-12 h-12 mb-5">
                    <div
                      className="absolute inset-0 rounded-[14px] rotate-6 group-hover:rotate-12 transition-all duration-500"
                      style={{ background: `${service.color}22` }}
                    />
                    <div
                      className="absolute inset-0 bg-white rounded-xl border flex items-center justify-center z-10 transition-all duration-300"
                      style={{ borderColor: `${service.color}33`, color: service.color }}
                    >
                      {React.cloneElement(service.icon as React.ReactElement, { size: 20 })}
                    </div>
                  </div>

                  {/* Num */}
                  <span
                    className="text-[10px] font-bold tracking-[.18em] uppercase mb-2 block"
                    style={{ color: `${service.color}66` }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3 className="text-base md:text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm md:text-base text-slate-800 flex-1 mb-5 font-medium">
                    {service.desc}
                  </p>

                  {/* Animated bar */}
                  <div
                    className="h-[2.5px] w-7 rounded-full group-hover:w-full transition-all duration-500"
                    style={{ background: service.color }}
                  />

                  {/* Ghost icon */}
                  {React.cloneElement(service.icon as React.ReactElement, {
                    size: 80,
                    className: "absolute -bottom-3 -right-3 -rotate-12 transition-opacity duration-400",
                    style: { color: service.color, opacity: 0.05 },
                  })}
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        <QuoteSection quote="In a world of noise, WhatsApp guarantees your message is seen. Make it count." />

        <CTASection
          title={<>Ready to Reach Every Customer <br className="hidden sm:block" /> Instantly on WhatsApp?</>}
          description={<>Get your WhatsApp Business API access in 24 hours - <br className="hidden sm:block" />no hidden fees, no long contracts, just results for your business.</>}
          buttonText="Get WhatsApp API Access"
        />
      </div>
    </>

  )
}

export default WhatsappBusinessAPI