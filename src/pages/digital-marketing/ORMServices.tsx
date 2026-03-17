import { staggerContainer, fadeUp, cardAnimation, fadeLeft } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { Check, Shield, Star, AlertTriangle, TrendingUp, ArrowRight, ShieldCheck, BarChart3, MessageSquare, Search, Zap, Users } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ORMServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Shield />,
      color: "#2563eb",
      title: "Reputation Monitoring & Alerts",
      desc: "Real-time tracking of brand mentions, reviews, and search visibility across all digital platforms — Google, social media, news sites, and review portals — with instant alerts whenever your brand is discussed online.",
    },
    {
      icon: <Star />,
      color: "#7c3aed",
      title: "Review Management & Response",
      desc: "Professional, on-brand responses to every customer review — positive or negative. We improve your star ratings, resolve complaints publicly, and turn unhappy customers into loyal brand advocates.",
    },
    {
      icon: <AlertTriangle />,
      color: "#ea580c",
      title: "Negative Content Suppression",
      desc: "Strategic SEO and content tactics to push down harmful reviews, false claims, and damaging articles from search results — replacing them with positive, authoritative content that reflects your true brand story.",
    },
    {
      icon: <TrendingUp />,
      color: "#16a34a",
      title: "Positive Content Promotion",
      desc: "Amplifying your success stories, client testimonials, awards, and achievements across high-authority platforms to build a compelling, trustworthy digital presence that consistently attracts new customers.",
    },
    {
      icon: <Shield />,
      color: "#4338ca",
      title: "Brand Image Building",
      desc: "Creating and distributing authority-driven content — press releases, thought leadership articles, and case studies — that strengthens your credibility and positions your brand as the leading name in your industry.",
    },
    {
      icon: <AlertTriangle />,
      color: "#dc2626",
      title: "Crisis Management Strategy",
      desc: "Rapid-response playbooks, spokesperson guidance, and real-time execution to contain reputation crises — minimising damage, restoring public confidence, and getting your brand back on solid ground fast.",
    },
    {
      icon: <TrendingUp />,
      color: "#d97706",
      title: "Online PR & Media Outreach",
      desc: "Building relationships with digital journalists, bloggers, and influencers to secure positive media coverage — improving brand visibility, domain authority, and public perception through credible third-party publications.",
    },
    {
      icon: <Users />,
      color: "#0d9488",
      title: "Competitor Reputation Analysis",
      desc: "In-depth monitoring of competitor brand mentions, review trends, and SERP positioning — giving you actionable intelligence to stay ahead, differentiate your offering, and seize opportunities they are missing.",
    },
  ]

  const whyChooseUs = [
    {
      num: "01",
      title: "24/7 Reputation Monitoring",
      icon: <ShieldCheck size={22} />,
      desc: "Round-the-clock surveillance of every mention, review, and conversation across social media, news portals, and review platforms — so nothing slips through unnoticed.",
      tag: "Always-On Protection",
      card: "bg-blue-50 border-blue-200",
      iconWrap: "bg-blue-100 text-blue-700",
      num_color: "text-blue-200",
      tag_color: "text-blue-700",
      dot: "bg-blue-700",
    },
    {
      num: "02",
      title: "Expert Review Response",
      icon: <MessageSquare size={22} />,
      desc: "Professionally crafted responses to every customer review — positive or negative — turning feedback into powerful brand-trust signals on Google, JustDial, and beyond.",
      tag: "Human-Led Responses",
      card: "bg-orange-50 border-orange-200",
      iconWrap: "bg-orange-100 text-orange-700",
      num_color: "text-orange-200",
      tag_color: "text-orange-700",
      dot: "bg-orange-700",
    },
    {
      num: "03",
      title: "Negative Content Suppression",
      icon: <AlertTriangle size={22} />,
      desc: "Strategic removal and de-ranking of harmful content, false reviews, and damaging search results — pushing negativity down and your brand story to the top.",
      tag: "Damage Control",
      card: "bg-red-50 border-red-200",
      iconWrap: "bg-red-100 text-red-700",
      num_color: "text-red-200",
      tag_color: "text-red-700",
      dot: "bg-red-700",
    },
    {
      num: "04",
      title: "SEO-Based Brand Protection",
      icon: <Search size={22} />,
      desc: "Own the first page of Google for your brand name. We build authoritative positive content that dominates search results and shields you from competitors and critics.",
      tag: "SERP Dominance",
      card: "bg-indigo-50 border-indigo-200",
      iconWrap: "bg-indigo-100 text-indigo-700",
      num_color: "text-indigo-200",
      tag_color: "text-indigo-700",
      dot: "bg-indigo-700",
    },
    {
      num: "05",
      title: "Crisis Management Strategies",
      icon: <Zap size={22} />,
      desc: "Pre-built response playbooks and rapid deployment protocols for PR crises — minimising exposure and restoring brand confidence fast when it matters most.",
      tag: "Rapid Response Ready",
      card: "bg-green-50 border-green-200",
      iconWrap: "bg-green-100 text-green-700",
      num_color: "text-green-200",
      tag_color: "text-green-700",
      dot: "bg-green-700",
    },
    {
      num: "06",
      title: "Transparent Reporting & Analysis",
      icon: <BarChart3 size={22} />,
      desc: "Clear monthly reports with sentiment scores, review trends, SERP tracking, and ROI metrics — full visibility into your brand's health and our measurable results.",
      tag: "Full Visibility",
      card: "bg-emerald-50 border-emerald-200",
      iconWrap: "bg-emerald-100 text-emerald-700",
      num_color: "text-emerald-200",
      tag_color: "text-emerald-700",
      dot: "bg-emerald-700",
    },
  ]

  const iconStyles = [
    { bg: "bg-blue-50", text: "text-blue-600" },
    { bg: "bg-violet-50", text: "text-violet-600" },
    { bg: "bg-orange-50", text: "text-orange-600" },
    { bg: "bg-green-50", text: "text-green-600" },
    { bg: "bg-indigo-50", text: "text-indigo-600" },
    { bg: "bg-red-50", text: "text-red-600" },
    { bg: "bg-amber-50", text: "text-amber-600" },
    { bg: "bg-teal-50", text: "text-teal-600" },
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
    {
      stat: "97%",
      label: "Consumer Trust in Reviews",
      desc: "Nearly all consumers read online reviews before making a purchase decision — your review profile is your most powerful sales tool.",
      bg: "#eff6ff", // Very Light Blue (Blue-50)
    },
    {
      stat: "70%",
      label: "Leads Lost to Competitors",
      desc: "A single negative search result diverts the majority of potential customers to a competitor — reputation damage is a direct revenue leak.",
      bg: "#fff1f2", // Very Light Rose (Rose-50)
    },
    {
      stat: "3.3×",
      label: "Revenue from Positive Image",
      desc: "Businesses with actively managed reputations generate over three times more revenue — trust directly converts into compounding growth.",
      bg: "#ecfdf5", // Very Light Emerald (Emerald-50)
    },
    {
      stat: "4.2★",
      label: "Minimum Rating for Trust",
      desc: "Customers consider only businesses rated 4.2 stars or higher. Falling below this threshold removes you from most buyers' consideration.",
      bg: "#fffbeb", // Very Light Amber (Amber-50)
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-primary/10">

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
                <Shield className="w-3 h-3" /> Secure Your Digital Legacy
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Reputation Management</span>
              </h1>

              <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                Supporting professionals such as CAs, advocates, doctors, and professors in maintaining a strong and credible online presence across Google and social media platforms.
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

                {/* Framed Layer - Matching the "Legacy" section rotation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Brands{" "}
              <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                Trust Us
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mx-auto ">
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

          {/* Pull Quote */}
          <motion.div
            variants={fadeUp}
            className="mt-12 px-2 py-10 rounded-2xl bg-white border border-slate-200 text-center max-w-4xl mx-auto relative"
          >
            <span className="font-display text-[64px] font-extrabold text-slate-100 absolute top-[-14px] left-8 leading-none select-none">
              "
            </span>
            <p className="text-sm md:text-lg text-slate-700 leading-[1.9] font-medium italic relative z-10">
              Built on the psychology of trust and the architecture of performance. We are Bhopal and Jabalpur's leading authority in digital reputation security.
            </p>
            <div className="w-9 h-[2.5px] bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mx-auto mt-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Why ORM Matters */}
      <section className="py-12 lg:px-10 bg-[#fafafa] relative overflow-hidden">
        <motion.div
          className="container mx-auto max-w-7xl relative z-10 flex flex-col min-h-[90vh] justify-between gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >

          {/* Header */}
          <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto flex flex-col items-center gap-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/7 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-200">
              <TrendingUp className="w-3 h-3" />
              Market Authority & Revenue
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900">
              The Science of <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                Digital Trust
              </span>
            </h2>
            <p className="text-sm md:text-[15px] text-slate-500 font-medium italic leading-[1.85] max-w-2xl">
              "In today's digital world, customers trust online reviews as much as personal recommendations. A single negative search result can divert 70% of potential leads to your competitors."
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-5 items-stretch flex-1">

            {/* Left Panel */}
            <motion.div
              variants={fadeLeft}
              className="bg-white rounded-[1.75rem] border border-slate-300 py-10 px-5 lg:p-12 flex flex-col justify-between gap-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/8 flex items-center justify-center text-orange-600">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <div className="flex flex-col gap-5 flex-1 justify-center">
                <h3 className="font-display text-xl md:text-[1.65rem] font-bold text-slate-900 ">
                  Protecting Your Local Market Dominance
                </h3>
                <p className="text-sm md:text-base text-slate-900 font-medium ">
                  Online Reputation Management ensures your business maintains a positive image, builds customer trust, and stays ahead of competitors across{" "}
                  <strong className="text-slate-900  font-semibold">Bhopal & Jabalpur</strong>.
                  Every review, mention, and search result shapes how potential customers perceive your brand — before they ever contact you.
                </p>
                <p className="text-sm md:text-base text-slate-900 font-medium ">
                  We combine data-driven monitoring with strategic content publishing to keep your digital footprint clean, credible, and compelling at all times.
                </p>
              </div>

              <div>
                <div className="border-t border-slate-50 pt-5">
                  <p className="text-[11px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Live Reputation Monitoring Active
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WhyORMMatters.map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardAnimation}
                  whileHover={{ y: -6 }}
                  className={" border border-slate-300 rounded-[1.5rem] p-7 lg:p-8 flex flex-col gap-3 group hover:shadow-[0_16px_48px_rgba(37,99,235,0.08)] hover:border-blue-200/60 transition-all duration-300 cursor-default"}
                  style={{ backgroundColor: item.bg }}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-display text-[2rem] lg:text-[2.2rem] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.stat}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <Check size={14} className="text-slate-300 group-hover:text-blue-500 transition-colors" strokeWidth={2.5} />
                    </div>
                  </div>
                  <p className="text-base font-bold text-slate-800 ">
                    {item.label}
                  </p>
                  <p className="text-sm md:text-base text-slate-900 group-hover:text-slate-700 transition-colors font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Footer Pill */}
          <motion.div variants={fadeUp} className="text-center">
            <div className="inline-block p-[3px] rounded-full bg-slate-100">
              <div className="px-6 py-2 rounded-full bg-white border border-slate-200">
                <p className="text-xs font-bold text-slate-600 tracking-wide">
                  Leading the digital shift across{" "}
                  <span className="text-primary underline decoration-primary/30 underline-offset-4">
                    Madhya Pradesh
                  </span>.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* OUR SERVICES (GLASS GRID) */}
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

      {/* INCLUSIONS (CHECKLIST) */}
      <section className="py-12 bg-[#f8f9fb] border-y border-border">
        <div className="container mx-auto max-w-4xl">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight text-slate-900 mb-2">
              Enterprise-Grade Coverage
            </h2>
            <p className="text-sm text-slate-400">
              Everything included — no hidden add-ons, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            {whatIncluded.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-5 py-[14px] rounded-xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-[0_2px_12px_rgba(16,185,129,0.07)] transition-all duration-200 group cursor-default"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors duration-200">
                  <Check
                    size={13}
                    className="text-emerald-500 group-hover:text-white transition-colors duration-200"
                    strokeWidth={2.5}
                  />
                </div>
                <span className="text-md md:text-base font-medium text-slate-900 group-hover:text-slate-900 transition-colors duration-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <QuoteSection quote="In the digital age, your reputation is the currency of trust—we ensure your brand never goes bankrupt." />

      {/* FINAL CTA */}
      <CTASection
        title={<>What Does the Internet <br className="hidden sm:block" /> Say About You?</>}
        description={<>Get a free 24-hour reputation audit and <br className="hidden sm:block" />see how your brand ranks in Bhopal & Jabalpur.</>}
        buttonText="Claim Free Reputation Audit"
      />
    </div>

  );
};

export default ORMServices;
