import SEO from "@/components/SEO";
import { cardAnimation, fadeUp, staggerContainer } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import HorizontalServiceList from "@/components/ui/HorizontalServiceList";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Youtube, TrendingUp, ArrowRight, Sparkles, BarChart3, Palette, ShieldCheck, Target, Users, Zap, Rocket, MessageSquare, Search, ShieldAlert, Link2, Megaphone, MessageCircle, MapPin, Share2, Shield, } from "lucide-react";
import { FaGoogle } from "react-icons/fa"
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
      color: "#38BDF8", // Indigo
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
    { number: "50+", label: "Brands Served" },
    { number: "50K+", label: "Leads Generated" },
    { number: "10M+", label: "Audience Reached" },
    { number: "80%", label: "Client Satisfaction" },
  ]

  const platforms = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "text-[#1877F2]",
      hoverGlow: "from-blue-600/20 to-blue-400/10",
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "text-[#E4405F]",
      hoverGlow: "from-pink-600/20 to-purple-500/10",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "text-[#0A66C2]",
      hoverGlow: "from-blue-700/20 to-cyan-500/10",
    },
    {
      name: "Google",
      icon: FaGoogle,
      color: "text-[#4285F4]",
      hoverGlow: "from-blue-500/20 to-red-400/10",
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "text-[#FF0000]",
      hoverGlow: "from-red-600/20 to-orange-500/10",
    },
  ]

  const WhyMatters = [
    { icon: <Share2 size={19} />, title: "Brand Visibility", desc: "Stay top-of-mind with your target audience every single day — before they even know they need your product or service.", iconBg: "bg-blue-100 text-blue-700", bar: "bg-blue-700", tint: "bg-blue-50 border-blue-200" },
    { icon: <Users size={19} />, title: "Community Building", desc: "Transform followers into a loyal brand community that advocates for you, defends you, and brings in new customers organically.", iconBg: "bg-purple-100 text-purple-700", bar: "bg-purple-700", tint: "bg-white border-slate-100" },
    { icon: <MapPin size={19} />, title: "Audience Targeting", desc: "Reach exactly the right people in Bhopal and Jabalpur using demographic, interest, and behaviour-based targeting precision.", iconBg: "bg-orange-100 text-orange-700", bar: "bg-orange-700", tint: "bg-fuchsia-50 border-purple-200" },
    { icon: <TrendingUp size={19} />, title: "Competitor Edge", desc: "Monitor competitors, identify gaps in their strategy, and consistently outperform them for your audience's attention and trust.", iconBg: "bg-green-100 text-green-700", bar: "bg-green-700", tint: "bg-orange-50 border-orange-200" },
    { icon: <Zap size={19} />, title: "Lead Generation", desc: "Convert social engagement into measurable business outcomes — website visits, enquiries, and direct sales every month.", iconBg: "bg-red-100 text-red-700", bar: "bg-red-700", tint: "bg-white border-slate-100" },
    { icon: <Shield size={19} />, title: "Brand Authority", desc: "Consistent, high-quality content positions your brand as the most credible and trustworthy name in your local industry.", iconBg: "bg-amber-100 text-amber-700", bar: "bg-amber-700", tint: "bg-green-50 border-green-200" },
  ]

  return (
    <>
      <SEO
        title="Social Media Marketing Services | Socio Bhaarat"
        description="Grow your brand visibility and engagement with result-driven social media marketing strategies."
        keywords="social media marketing, smm services, instagram marketing, facebook marketing, social media marketing in jabalpur"
      />
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
          </motion.div>
        </section>

        {/* Why do you need Social Media Marketing Section OR Why Matters*/}
        <section className="py-12 lg:px-10 bg-[#f8f9fb] relative overflow-hidden">
          <motion.div
            className="container mx-auto max-w-7xl relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >

            {/* Split editorial header */}
            <motion.div
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-12 items-end mb-14 pb-8 border-b border-slate-200"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-[.22em] text-blue-700 mb-4">
                  <Share2 className="w-3 h-3" /> Social Architecture
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.07]">
                  Why Your Brand Needs <span className=" bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                    Social Presence
                  </span>
                </h2>
              </div>
              <div className="flex flex-col gap-4 justify-end">
                <p className="text-sm font-medium text-slate-700 leading-[1.8] border-l-[3px] border-blue-100 pl-4">
                  "Social media is where your customers spend their time and make purchasing
                  decisions — stay visible or get left behind in the MP business landscape."
                </p>
                <div className="flex gap-6">
                  {[["4.9B", "Social Users", "text-blue-600"], ["2.5h", "Daily Usage", "text-violet-600"], ["76%", "Buy via Social", "text-orange-500"]].map(([val, lbl, color]) => (
                    <div key={lbl}>
                      <div className={`font-display text-[1.5rem] font-black leading-none mb-0.5 ${color}`}>{val}</div>
                      <div className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Flush alternating grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-2xl border border-slate-200"
              style={{ gap: "3px", background: "#e2e8f0" }}
            >
              {WhyMatters.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardAnimation}
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.25 }}
                  className={`group relative flex flex-col p-8 cursor-default transition-all duration-250 border border-transparent ${item.tint}`}
                >
                  {/* Top row: icon + num */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-200 group-hover:text-blue-200 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-xl font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm md:text-base text-slate-800 flex-1 mb-5 font-medium">
                    {item.desc}
                  </p>

                  {/* Bar */}
                  <div className={`h-[2.5px] w-7 rounded-full group-hover:w-full transition-all duration-500 ${item.bar}`} />
                </motion.div>
              ))}
            </div>

          </motion.div>
        </section>

        {/* Platforms we master */}
        <section className="py-12 sm:px-6 lg:px-8 relative overflow-hidden bg-[#f8f7f4]">
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

            <HorizontalServiceList services={services} />

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
    </>

  );
};

export default SocialMedia;
