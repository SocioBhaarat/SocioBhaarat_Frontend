import { staggerContainer, fadeUp, cardAnimation } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import HorizontalServiceList from "@/components/ui/HorizontalServiceList";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { Check, Search, TrendingUp, FileText, Link2, ShieldCheck, BarChart3, ArrowRight, Sparkles, Cpu, SearchCode, Users, Globe, Zap } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const WebsiteSEO = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Search />,
      color: "#2563eb", // Blue
      title: "Strategic Keyword Analysis",
      desc: "Beyond simple search terms, we perform deep-intent analysis to identify high-conversion keywords and long-tail opportunities that connect your brand with ready-to-buy customers.",
    },
    {
      icon: <FileText />,
      color: "#7c3aed", // Violet
      title: "On-Page Content Engineering",
      desc: "Precision optimization of your content architecture, meta-semantics, and internal linking structures to ensure search engines perfectly understand your topical authority and relevance.",
    },
    {
      icon: <Link2 />,
      color: "#ea580c", // Orange
      title: "Authority Link Building",
      desc: "Ethical, white-hat acquisition of high-DA backlinks from industry-leading publications. We build a digital 'reputation web' that signals trust and dominance to search engine algorithms.",
    },
    {
      icon: <Zap />,
      color: "#16a34a", // Green
      title: "Technical SEO & Core Vitals",
      desc: "Fine-tuning your site’s backend for elite performance — optimizing crawl budgets, site speed, mobile responsiveness, and schema markup to meet Google’s strictest ranking criteria.",
    },
    {
      icon: <BarChart3 />,
      color: "#4338ca", // Indigo
      title: "SEO Analytics & KPI Tracking",
      desc: "Transparent, real-time data visualization of your search performance. We track traffic quality, keyword rankings, and conversion metrics to provide a clear view of your growth and ROI.",
    },
    {
      icon: <ShieldCheck />,
      color: "#0d9488", // Teal
      title: "Local SEO & Map Dominance",
      desc: "Maximizing visibility in local search results and Google Maps. We optimize your Business Profile and local citation network to ensure you are the first choice for customers in your area.",
    },
    {
      icon: <Globe />,
      color: "#dc2626", // Red
      title: "International & Multi-Regional SEO",
      desc: "Expanding your reach across borders with hreflang implementation and localized content strategies, ensuring your brand ranks effectively in diverse global markets and languages.",
    },
    {
      icon: <SearchCode />,
      color: "#d97706", // Amber
      title: "Competitor SERP Intelligence",
      desc: "Continuous monitoring of your competitors' SEO maneuvers. We analyze their backlink profiles and keyword gaps to identify opportunities for you to leapfrog them in search results.",
    },
  ];

  const whyChooseUs = [
    {
      num: "01",
      title: "Experienced SEO Specialists",
      desc: "A veteran team of data-driven analysts and technical architects dedicated to navigating the volatility of complex search algorithms to maintain your lead.",
      tag: "Algorithm Experts",
      card: "bg-blue-50 border-blue-200",
      iconWrap: "bg-blue-100 text-blue-700",
      num_color: "text-blue-200",
      tag_color: "text-blue-700",
      dot: "bg-blue-700",
      icon: <Users size={22} />,
    },
    {
      num: "02",
      title: "In-Depth Keyword Research",
      desc: "Identifying high-intent search terms and long-tail opportunities that bridge the gap between user intent and your brand — capturing leads before the competition.",
      tag: "Intent-Based Targeting",
      card: "bg-orange-50 border-orange-200",
      iconWrap: "bg-orange-100 text-orange-700",
      num_color: "text-orange-200",
      tag_color: "text-orange-700",
      dot: "bg-orange-700",
      icon: <SearchCode size={22} />,
    },
    {
      num: "03",
      title: "White-Hat SEO Techniques",
      desc: "Strict adherence to Google Search Essentials (formerly Webmaster Guidelines) to ensure your rankings achieve long-term, penalty-proof, and sustainable growth.",
      tag: "Sustainable Ranking",
      card: "bg-emerald-50 border-emerald-200",
      iconWrap: "bg-emerald-100 text-emerald-700",
      num_color: "text-emerald-200",
      tag_color: "text-emerald-700",
      dot: "bg-emerald-700",
      icon: <ShieldCheck size={22} />,
    },
    {
      num: "04",
      title: "Technical & On-Page Audit",
      desc: "Engineering your site’s Core Web Vitals, Schema markup, and internal architecture for maximum crawl efficiency and a seamless mobile-first user experience.",
      tag: "Core Vital Optimization",
      card: "bg-indigo-50 border-indigo-200",
      iconWrap: "bg-indigo-100 text-indigo-700",
      num_color: "text-indigo-200",
      tag_color: "text-indigo-700",
      dot: "bg-indigo-700",
      icon: <Cpu size={22} />,
    },
    {
      num: "05",
      title: "High-Quality Link Building",
      desc: "Architecting a high-authority backlink profile through strategic outreach and PR — establishing the digital domain dominance required to rank for competitive terms.",
      tag: "Authority Building",
      card: "bg-purple-50 border-purple-200",
      iconWrap: "bg-purple-100 text-purple-700",
      num_color: "text-purple-200",
      tag_color: "text-purple-700",
      dot: "bg-purple-700",
      icon: <Link2 size={22} />,
    },
    {
      num: "06",
      title: "Transparent Monthly Reporting",
      desc: "Clear visibility into your SEO health with sentiment scores, keyword movement, and ROI metrics — providing measurable results every 30-day cycle.",
      tag: "Full Visibility",
      card: "bg-rose-50 border-rose-200",
      iconWrap: "bg-rose-100 text-rose-700",
      num_color: "text-rose-200",
      tag_color: "text-rose-700",
      dot: "bg-rose-700",
      icon: <BarChart3 size={22} />,
    },
  ];

  const WhyMatters = [
    "93% of online experiences begin with a search engine",
    "SEO leads have a 14.6% close rate vs 1.7% for outbound leads",
    "75% of users never scroll past the first page of search results",
    "Organic search drives 53% of all website traffic",
    "SEO provides 1000%+ ROI compared to traditional marketing",
    "Local searches lead 50% of mobile users to visit stores within one day",
  ]

  return (
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
                <Sparkles className="w-3 h-3" /> SEO for Website
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                Rank Higher <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">& Grow Organically.</span>
              </h1>

              <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                We help businesses in Bhopal & Jabalpur dominate search engine rankings and generate quality leads through result-driven SEO solutions.
              </p>

              <div className="flex justify-start pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Get Free SEO Audit <ArrowRight className="ml-2 w-5 h-5" />
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
                    src="https://images.unsplash.com/photo-1600469984476-c713650f1b1b"
                    alt="SEO Performance Dashboard"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Floating Mini-Metric Overlay */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg">
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Visibility Increase</p>
                    <p className="text-xl font-bold text-slate-900">+300% Organic</p>
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
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                Our SEO Strategy
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mx-auto ">
              Built for measurable, ethical growth in the Madhya Pradesh digital ecosystem.
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

      {/* Why SEO matters */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 italic">Why SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic inline-block pr-4 -mr-4 overflow-visible leading-normal">Matters</span> </h2>
              <p className="text-muted-foreground text-sm md:text-lg mb-8 leading-relaxed italic">
                In today’s competitive digital landscape, ranking is essential for business growth. A strong SEO strategy ensures you appear at the top, attracts organic traffic, and generates consistent leads.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {WhyMatters.map((point, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/40 transition-all shadow-sm">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm font-semibold text-slate-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*Our  Services */}
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

          <HorizontalServiceList services={services} />

        </div>
      </section>

      <QuoteSection
        quote="Optimized for search. Built for visibility. Designed for growth."
      />

      {/* Final CTA */}

      <CTASection
        title={<>Ready to Rank #1 <br className="hidden md:block" /> Your Vision?</>}
        description={<>Get a comprehensive SEO audit and a custom-built growth strategy for your brand in <span className="underline decoration-white/30 underline-offset-8">Bhopal & Jabalpur</span>.</>}
        buttonText="Claim Your Free Audit"
      />

    </div>
  );
};

export default WebsiteSEO;
