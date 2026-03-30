import { cardAnimation, fadeUp, staggerContainer } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import HorizontalServiceList from "@/components/ui/HorizontalServiceList";
import QuoteSection from "@/components/ui/QuoteSection";
import { AnimatePresence, color, motion } from "framer-motion";
import { ArrowRight, BarChart3, Calendar, Check, ChevronDown, FileText, Heart, Mail, Search, Share2, Shield, ShieldCheck, Sparkles, Star, Target, TrendingUp, Users, Video, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO"
import ExploralPanel from "@/components/ui/ExploralPanel";

const ContentMarketing = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0)

  const whyChooseUs = [
    {
      num: "01",
      icon: Search,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
      numColor: "text-blue-300",
      tagBg: "bg-blue-50",
      tagColor: "text-blue-700",
      tag: "Organic Growth",
      title: "SEO-Optimised Content",
      desc: "We produce high-performing blog posts, landing pages, and web copy specifically engineered to dominate Google rankings and convert cold visitors into qualified leads. Our approach goes beyond simple keyword stuffing; we analyze search intent and user behavior to create comprehensive resources that provide genuine value, establish your domain authority, and drive sustainable organic traffic to your site 24/7."
    },
    {
      num: "02",
      icon: Share2,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
      numColor: "text-purple-300",
      tagBg: "bg-purple-50",
      tagColor: "text-purple-700",
      tag: "Brand Reach",
      title: "Social Media Content",
      desc: "Stop shouting into the void and start building a community. We design platform-native posts, educational carousels, and high-energy Reels crafted to stop the scroll and spark meaningful engagement. By staying ahead of trending formats and algorithm shifts, we ensure your brand remains relevant, grows a loyal following, and maintains a consistent, professional presence across all major social networks daily."
    },
    {
      num: "03",
      icon: Video,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-700",
      numColor: "text-orange-300",
      tagBg: "bg-orange-50",
      tagColor: "text-orange-700",
      tag: "High Retention",
      title: "Video Script Writing",
      desc: "Video is the most powerful tool for connection, but only if people watch until the end. We write compelling scripts for YouTube, TikTok, and video ads that hook viewers within the first three seconds. Our storytelling framework focuses on high retention, maintaining interest through psychological triggers, and concluding with a clear, persuasive call-to-action that drives measurable business results and higher ROI."
    },
    {
      num: "04",
      icon: Shield,
      iconBg: "bg-green-100",
      iconColor: "text-green-700",
      numColor: "text-green-300",
      tagBg: "bg-green-50",
      tagColor: "text-green-700",
      tag: "Authority Building",
      title: "Brand Storytelling",
      desc: "We help you move from being a commodity to a category leader. Through press releases, deep-dive thought leadership articles, founder stories, and detailed case studies, we craft a narrative that builds lasting trust. This strategic storytelling positions your brand as an industry authority, making it the obvious choice for customers while increasing your perceived value and protecting your market position."
    },
    {
      num: "05",
      icon: Mail,
      iconBg: "bg-red-100",
      iconColor: "text-red-700",
      numColor: "text-red-300",
      tagBg: "bg-red-50",
      tagColor: "text-red-700",
      tag: "Direct Revenue",
      title: "Email Marketing",
      desc: "Your email list is your most valuable owned asset. We develop automated nurture sequences, weekly newsletters, and aggressive promotional campaigns that turn casual subscribers into repeat customers. By segmenting your audience and delivering personalized, high-value content directly to their inbox, we create a predictable revenue stream that works on autopilot, ensuring no lead is ever left behind in your sales funnel."
    },
    {
      num: "06",
      icon: Calendar,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-700",
      numColor: "text-teal-300",
      tagBg: "bg-teal-50",
      tagColor: "text-teal-700",
      tag: "90-Day Roadmap",
      title: "Content Strategy",
      desc: "Stop guessing what to post and start executing with precision. We provide a comprehensive 90-day content roadmap that outlines specific topics, optimal formats, distribution channels, and publishing cadences. This strategy is fully aligned with your overarching business goals, current seasonal trends, and actual audience search behavior, giving your team a clear, actionable blueprint to follow for consistent, long-term growth and visibility."
    },
    {
      num: "07",
      icon: Zap,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
      numColor: "text-amber-300",
      tagBg: "bg-amber-50",
      tagColor: "text-amber-700",
      tag: "Revenue Copy",
      title: "Conversion Copywriting",
      desc: "Great writing is nice, but writing that sells is essential. We specialize in high-converting landing pages, punchy ad headlines, and persuasive product descriptions that turn traffic into tangible revenue. Every word we write is chosen for its ability to overcome objections, highlight your unique selling proposition, and compel the reader to take action immediately, ensuring your marketing budget delivers the highest possible return."
    },
    {
      num: "08",
      icon: BarChart3,
      iconBg: "bg-sky-100",
      iconColor: "text-sky-700",
      numColor: "text-sky-300",
      tagBg: "bg-sky-50",
      tagColor: "text-sky-700",
      tag: "Link Earning",
      title: "Infographics & Visuals",
      desc: "Complexity is the enemy of conversion. Our team transforms dense data and industry insights into beautiful, easy-to-digest infographics and visual assets. These high-value resources simplify complex information for your audience while acting as 'link magnets' that earn organic backlinks from authoritative websites. This boosts your SEO profile, increases brand awareness, and makes your content significantly more shareable across all professional networks."
    },
  ];

  const services = [
    {
      icon: <Search />,
      color: "#1d4ed8",
      title: "SEO Blog & Article Writing",
      desc: "Long-form, keyword-rich blog posts and articles engineered to rank on Google — answering the exact questions your target audience is searching for in Bhopal and Jabalpur.",
    },
    {
      icon: <Share2 />,
      color: "#7e22ce",
      title: "Social Media Content",
      desc: "Platform-native posts, carousels, and Reels crafted to drive engagement and grow your following — consistently relevant in your audience's feed every single day.",
    },
    {
      icon: <Video />,
      color: "#c2410c",
      title: "Video Script Writing",
      desc: "Compelling scripts for YouTube, Reels, and ads that hook viewers in the first 3 seconds — holding attention throughout and driving measurable action at the end.",
    },
    {
      icon: <Shield />,
      color: "#15803d",
      title: "Brand Storytelling & PR",
      desc: "Press releases, thought leadership articles, and case studies that build lasting credibility and position your brand as the most trusted name in your local industry.",
    },
    {
      icon: <Mail />,
      color: "#b91c1c",
      title: "Email Marketing Sequences",
      desc: "Automated nurture sequences, newsletters, and promotional emails that convert subscribers into paying customers at every stage of your funnel — running on autopilot.",
    },
    {
      icon: <Zap />,
      color: "#38BDF8",
      title: "Conversion Copywriting",
      desc: "High-converting landing page copy, ad headlines, and CTAs engineered to turn traffic into revenue — every word tested, intentional, and placed to drive the next action.",
    },
  ]

  const process = [
    { step: "01", title: "Research & Strategy", desc: "We analyze your audience, competitors, and industry to create a winning content strategy" },
    { step: "02", title: "Content Creation", desc: "Our expert writers and designers craft high-quality, engaging content" },
    { step: "03", title: "Optimization & Publishing", desc: "We optimize content for SEO and publish across relevant channels" },
    { step: "04", title: "Analysis & Refinement", desc: "We track performance and continuously refine our approach for better results" },
  ]

  const whyMatters = [
    { icon: <Shield size={22} />, title: "Builds Brand Authority", desc: "Consistent, high-quality content positions your brand as the go-to expert in your industry — earning trust from potential customers long before they ever contact you.", bg: "bg-blue-50", border: "border-blue-200", iconBg: "bg-blue-100 text-blue-700", num: "text-blue-300", bar: "bg-blue-700" },
    { icon: <TrendingUp size={22} />, title: "Drives Organic Traffic", desc: "SEO-optimised content attracts high-intent visitors from Google search — a compounding asset that grows your traffic month over month without ongoing ad spend.", bg: "bg-fuchsia-50", border: "border-purple-200", iconBg: "bg-purple-100 text-purple-700", num: "text-purple-300", bar: "bg-purple-700" },
    { icon: <Users size={22} />, title: "Generates Qualified Leads", desc: "Content that addresses real customer questions filters out unqualified traffic and attracts buyers who are already interested in exactly what your business offers.", bg: "bg-orange-50", border: "border-orange-200", iconBg: "bg-orange-100 text-orange-700", num: "text-orange-300", bar: "bg-orange-700" },
    { icon: <Star size={22} />, title: "Nurtures Customer Loyalty", desc: "Regular, valuable content keeps your existing customers engaged, informed, and loyal — reducing churn and increasing lifetime value far beyond the initial purchase.", bg: "bg-green-50", border: "border-green-200", iconBg: "bg-green-100 text-green-700", num: "text-green-300", bar: "bg-green-700" },
    { icon: <Zap size={22} />, title: "Supports Every Funnel Stage", desc: "From awareness blog posts to conversion-focused landing pages — content works across every stage of your sales funnel, guiding prospects from first click to final purchase.", bg: "bg-red-50", border: "border-red-200", iconBg: "bg-red-100 text-red-700", num: "text-red-300", bar: "bg-red-700" },
    { icon: <BarChart3 size={22} />, title: "Outperforms Paid Ads Long-Term", desc: "While paid ads stop the moment your budget ends, quality content continues to drive traffic, leads, and sales for months or years — delivering compounding ROI over time.", bg: "bg-teal-50", border: "border-teal-200", iconBg: "bg-teal-100 text-teal-700", num: "text-teal-300", bar: "bg-teal-700" },
  ]

  return (
    <>
      <SEO
        title="Content Marketing Services | Best Content Marketing Company in India"
        description="Engage your audience and build authority with strategic and high-quality content marketing solutions."
        keywords="content marketing, blog marketing, seo content, content strategy, content marketing in jabalpur"
        url="/digital-marketing/content-marketing"
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
                  <Sparkles className="w-3 h-3" /> Engage, Educate & Convert
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Content Marketing</span> Services
                </h1>

                <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                  We create high-quality, value-driven content that builds brand authority across Bhopal & Jabalpur.
                </p>

                <div className="flex justify-start pt-4">
                  <Button
                    size="lg"
                    className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => navigate("/contact")}
                  >
                    Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.3, duration: 1 }} className="mt-10 lg:col-span-5 grid grid-cols-2 gap-4">
                {[
                  { val: "500+", label: "Pieces Created", icon: <FileText /> },
                  { val: "50+", label: "Happy Clients", icon: <Users /> },
                  { val: "85%", label: "Traffic Boost", icon: <TrendingUp /> },
                  { val: "80%", label: "Retention Rate", icon: <Target /> }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <h3 className="text-3xl font-black text-slate-900">{stat.val}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="pt-12 pb-5 px-6 lg:px-10 bg-[#f8f9fb]">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-[.22em] text-blue-700 mb-5">
                <Sparkles className="w-3 h-3" /> The Content Engineering Edge
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">
                Why Choose Our{" "}
                <span className=" bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent">
                  Content Ecosystem
                </span>
              </h2>
              <p className="text-base text-slate-600 leading-[1.8] max-w-2xl border-l-[3px] border-blue-100 pl-4">
                "We build digital assets that scale your brand authority and drive measurable growth across the Bhopal & Jabalpur business landscape."
              </p>
            </div>
            <ExploralPanel content={whyChooseUs} />
          </div>
        </section>

        <section className="py-12 lg:px-10 bg-[#f8f9fb]">
          <div className="container mx-auto max-w-7xl">

            {/* ── SPLIT HERO PANEL ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-slate-200 mb-3"
            >
              {/* Left — definition panel */}
              <div className="bg-blue-50 px-5 md:px-10 py-14 relative overflow-hidden border-r border-blue-100">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200/30 rounded-full blur-[60px] pointer-events-none" />
                <span className="text-[10px] font-bold tracking-[.3em] uppercase text-blue-600 mb-5 block">
                  Content Strategy
                </span>
                <h2 className=" text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  What is{" "}
                  <span className=" bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text font-medium text-transparent">
                    Content Marketing
                  </span> ?
                </h2>
                <p className="text-sm md:text-base text-slate-700 font-medium leading-[1.85] border-l-[3px] border-blue-200 pl-4 mb-8">
                  A strategic approach focused on creating and distributing valuable, relevant content to attract and retain a clearly defined audience - building trust long before a sale.
                </p>
                <div className="flex gap-8">
                  {[
                    { val: "3×", label: "More Leads", color: "text-blue-600" },
                    { val: "62%", label: "Lower Cost", color: "text-violet-600" },
                    { val: "6×", label: "Conversion Rate", color: "text-orange-500" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className={`font-display text-2xl font-black leading-none mb-1 ${s.color}`}>
                        {s.val}
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-700">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — why panel */}
              <div className="bg-white px-5 md:px-10 py-14 flex flex-col justify-center gap-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-[.2em] text-blue-700 w-fit">
                  <Sparkles className="w-3 h-3" /> The Organic Advantage
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                  Why Content Marketing{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                    Matters for Growth
                  </span>
                </h3>
                <p className="text-sm md:text-base  text-slate-700 font-medium leading-[1.85]">
                  Unlike traditional advertising, content marketing establishes your brand as an industry authority - generating qualified leads organically across the Madhya Pradesh business landscape.
                </p>
                <div className="w-12 h-[2px] bg-blue-600 rounded-full" />
              </div>
            </motion.div>

            {/* ── BENEFIT GRID ── */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {whyMatters.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardAnimation}
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.25 }}
                  className={`group relative flex flex-col rounded-2xl p-8 border-[1.5px] overflow-hidden cursor-default transition-all duration-300 ${item.bg} ${item.border}`}
                >
                  <div className={`w-11 h-11 rounded-[13px] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconBg}`}>
                    {item.icon}
                  </div>

                  <span className={`text-[10px] font-bold tracking-[.18em] uppercase mb-2 ${item.num}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display text-base md:text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base font-medium leading-[1.85] text-slate-800 flex-1 mb-5">
                    {item.desc}
                  </p>

                  <div className={`h-[2.5px] w-7 rounded-full group-hover:w-full transition-all duration-500 ${item.bar}`} />

                  <span className={`absolute bottom-0 right-2 font-display text-[5rem] font-black italic leading-none pointer-events-none select-none opacity-[0.06] group-hover:opacity-[0.13] transition-opacity ${item.num}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* Our Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-6xl px-4">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                Our Content Marketing <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
            </div>

            <HorizontalServiceList services={services} />

          </div>
        </section>

        <QuoteSection
          quote="Content that informs, engages, and drives measurable results." />

        {/* CTA */}
        <CTASection
          title={<>Ready to Transform <br className="hidden md:block" /> Your Content Strategy?</>}
          description={<>Let's create content that drives real business results.<br className="hidden md:block" /> Get a free content audit today.</>}
          buttonText="Get Your Free Content Audit"
        />
      </div>
    </>

  );
};

export default ContentMarketing;
