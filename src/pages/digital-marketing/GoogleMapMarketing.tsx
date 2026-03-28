import SEO from "@/components/SEO";
import { cardAnimation, fadeUp, staggerContainer } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import HorizontalServiceList from "@/components/ui/HorizontalServiceList";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { Check, MapPin, Star, Search, TrendingUp, ArrowRight, BarChart3, LinkIcon, Target, Zap, Locate, SearchCode, CheckCircle2, Globe2, Eye, Phone, Users } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const GoogleMapMarketing = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <MapPin />,
      color: "#2563eb", // Blue
      title: "GBP Setup & Authority Optimization",
      desc: "End-to-end configuration, verification, and strategic optimization of your Google Business Profile to ensure maximum visibility in the high-converting Local Pack.",
    },
    {
      icon: <Search />,
      color: "#7c3aed", // Violet
      title: "Hyper-Local Keyword Targeting",
      desc: "Identifying location-specific, high-intent search terms that bridge the gap between local customers and your physical or service-area business location.",
    },
    {
      icon: <Star />,
      color: "#ea580c", // Orange
      title: "Review Generation & Reputation Logic",
      desc: "Architecting a steady flow of authentic 5-star reviews and crafting professional responses that build public trust and signal quality to Google's ranking algorithms.",
    },
    {
      icon: <TrendingUp />,
      color: "#16a34a", // Green
      title: "Advanced Map Pack Ranking",
      desc: "Deploying sophisticated proximity and relevance strategies designed to push your business into the top 3 results on Google Maps for your most competitive services.",
    },
    {
      icon: <CheckCircle2 />,
      color: "#38BDF8", // Indigo
      title: "NAP Consistency & Data Integrity",
      desc: "Standardizing your Name, Address, and Phone number across the entire digital ecosystem to eliminate ranking-suppressing data conflicts and improve crawl trust.",
    },
    {
      icon: <Globe2 />,
      color: "#0d9488", // Teal
      title: "Geo-Targeted Citation Building",
      desc: "Securing high-authority placements in premium local directories and industry-specific aggregators to strengthen your business's local relevance and domain authority.",
    },
    {
      icon: <SearchCode />,
      color: "#dc2626", // Red
      title: "Competitor Proximity Analysis",
      desc: "In-depth intelligence gathering on top-ranking local competitors to identify their citation gaps and ranking maneuvers, allowing us to out-position them strategically.",
    },
    {
      icon: <BarChart3 />,
      color: "#d97706", // Amber
      title: "Local Growth Insights & Reporting",
      desc: "Transparent monthly analytics tracking phone calls, direction requests, and website visits originating from your local presence, proving clear ROI on your local investment.",
    },
  ];

  const whyChooseUs = [
    {
      num: "01",
      title: "Local SEO Expertise",
      icon: <Target size={22} />,
      desc: "A deep architectural understanding of the regional market algorithms, designed to position your brand as the dominant authority over local competitors.",
      tag: "Market Authority",
      card: "bg-blue-50 border-blue-200",
      iconWrap: "bg-blue-100 text-blue-700",
      num_color: "text-blue-200",
      tag_color: "text-blue-700",
      dot: "bg-blue-700",
    },
    {
      num: "02",
      title: "GBP Optimization",
      icon: <Locate size={22} />,
      desc: "Comprehensive engineering of your Google Business Profile to secure maximum 'Map Pack' visibility and capture high-intent local search traffic.",
      tag: "Map Pack Dominance",
      card: "bg-orange-50 border-orange-200",
      iconWrap: "bg-orange-100 text-orange-700",
      num_color: "text-orange-200",
      tag_color: "text-orange-700",
      dot: "bg-orange-700",
    },
    {
      num: "03",
      title: "Review Management",
      icon: <Star size={22} />,
      desc: "Strategic handling of customer feedback and active review acquisition to build an elite, 5-star digital reputation that signals trust to both users and Google.",
      tag: "Reputation Logic",
      card: "bg-yellow-50 border-yellow-200",
      iconWrap: "bg-yellow-100 text-yellow-700",
      num_color: "text-yellow-200",
      tag_color: "text-yellow-700",
      dot: "bg-yellow-700",
    },
    {
      num: "04",
      title: "Citation Building",
      icon: <LinkIcon size={22} />,
      desc: "Rigorous standardization of your Name, Address, and Phone (NAP) data across premium local directories to establish bulletproof data integrity.",
      tag: "Data Consistency",
      card: "bg-indigo-50 border-indigo-200",
      iconWrap: "bg-indigo-100 text-indigo-700",
      num_color: "text-indigo-200",
      tag_color: "text-indigo-700",
      dot: "bg-indigo-700",
    },
    {
      num: "05",
      title: "Hyper-Local Content",
      icon: <Zap size={22} />,
      desc: "Crafting geo-targeted content and landing pages that resonate with city-specific audiences, improving your relevance for localized search queries.",
      tag: "Geo-Targeting",
      card: "bg-pink-50 border-pink-200",
      iconWrap: "bg-pink-100 text-pink-700",
      num_color: "text-pink-200",
      tag_color: "text-pink-700",
      dot: "bg-pink-700",
    },
    {
      num: "06",
      title: "Transparent Analysis",
      icon: <BarChart3 size={22} />,
      desc: "Industrial-grade tracking of direction requests, phone calls, and local search trends — providing a clear view of your growth every 30-day cycle.",
      tag: "Full Visibility",
      card: "bg-emerald-50 border-emerald-200",
      iconWrap: "bg-emerald-100 text-emerald-700",
      num_color: "text-emerald-200",
      tag_color: "text-emerald-700",
      dot: "bg-emerald-700",
    },
  ];

  const whatIncluded = [
    "Complete GMB profile setup and verification",
    "Business category and attribute optimization",
    "Keyword-rich business description",
    "High-quality business photos and videos",
    "Regular post updates and offers",
    "Review generation and response strategy",
    "Q&A management",
    "Local citation building",
    "Competitor analysis",
    "Monthly performance reports",
  ]

  return (
    <>
      <SEO
        title="Google Business Profile & Local SEO | Socio Bhaarat"
        description="Boost local visibility and attract nearby customers with optimized Google Business Profile and local SEO strategies."
        keywords="google business profile, local seo, gmb optimization, local search ranking, local seo in jabalpur"
        url="/digital-marketing/google-map-marketing"
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
                  <MapPin className="w-3 h-3" /> Google Business Profile & SEO
                </div>

                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                  Rank Higher on <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Google Search</span>
                </h1>

                <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                  We help businesses improve their Google search visibility by optimizing their Google Business Profile and using strategic keywords to attract more local customers.
                </p>

                <div className="flex justify-start pt-4">
                  <Button
                    size="lg"
                    className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => navigate("/contact")}
                  >
                    Optimize My Listing <ArrowRight className="ml-2 w-5 h-5" />
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
                      src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
                      alt="Google Business Profile Optimization"
                      className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Floating Mini-Metric Overlay */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Local Reach</p>
                      <p className="text-xl font-black text-slate-900">#1 Top 3 Pack</p>
                    </div>
                  </div>

                  {/* Framed Layer - Matching the "Legacy" section rotation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Why Choose us */}
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

        {/* Why matters */}
        <section className="py-12 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* ── LEFT ── */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[.2em] text-blue-600">Local SEO Guide</span>
                </div>

                {/* Heading */}
                <div className="space-y-5">
                  <h2 className="text-3xl md:text-4xl md:text-[3.2rem] font-bold text-slate-900 leading-[1.08]">
                    What is{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                      Google Map Marketing?
                    </span>
                  </h2>
                  <p className=" text-sm md:text-base lg:text-lg text-slate-800 font-medium border-l-[5px] border-blue-100 pl-6 py-2 rounded-r-md">
                    The strategic engineering of your digital footprint to dominate the "Local Pack" — ensuring your business is the first choice in Bhopal & Jabalpur.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { val: "46%", label: "Local Search", bar: "from-blue-600 to-blue-400", text: "from-blue-600 to-blue-400", w: "w-[46%]" },
                    { val: "76%", label: "24h Visit", bar: "from-violet-600 to-violet-400", text: "from-violet-600 to-violet-400", w: "w-[76%]" },
                    { val: "28%", label: "Purchase", bar: "from-orange-500 to-orange-400", text: "from-orange-500 to-orange-400", w: "w-[28%]" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="group relative bg-white border border-slate-100 rounded-2xl p-6 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className={`text-3xl md:text-4xl font-black mb-1.5 bg-gradient-to-br ${s.text} bg-clip-text text-transparent`}>
                        {s.val}
                      </div>
                      <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-500">
                        {s.label}
                      </p>

                      {/* Progress bar track (Added for better UI) */}
                      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-50" />

                      {/* Progress bar fill */}
                      <div className={`absolute bottom-0 left-0 h-[3px] ${s.w} bg-gradient-to-r ${s.bar} rounded-full z-10`} />
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col divide-y divide-slate-100"
              >
                {[
                  { title: "Increase Local Visibility", icon: Eye, color: "#2563eb" },
                  { title: "Attract Nearby Customers", icon: Users, color: "#2563eb" },
                  { title: "Optimise Reviews & Ratings", icon: Star, color: "#2563eb" },
                  { title: "Drive Calls & Store Visits", icon: Phone, color: "#2563eb" },
                  { title: "Dominate Local Pack Search", icon: MapPin, color: "#2563eb" },
                  { title: "Outrank Regional Competitors", icon: TrendingUp, color: "#2563eb" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center gap-4 py-4 cursor-default hover:bg-slate-100"
                  >
                    {/* Index */}
                    <span className="text-[10px] font-bold tracking-[.15em] px-2 text-slate-300 w-6 flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div
                      className="w-10 h-10 text-center rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${item.color}12`, color: item.color }}
                    >
                      <item.icon size={15} />
                    </div>

                    {/* Title */}
                    <span
                      className="text-base text-center font-medium text-slate-700 flex-1 transition-colors duration-200 group-hover:text-slate-900"
                    >
                      {item.title}
                    </span>

                  </motion.div>
                ))}
              </motion.div>

            </div>

            {/* Footer line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-20 text-center text-[10px] font-black uppercase tracking-[.55em] text-slate-300 select-none"
            >
              Bhopal &bull; Jabalpur &bull; Local Growth Strategists
            </motion.div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-6xl px-4">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                Our <span className="font-medium bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent">
                  Services
                </span> Under Google Map Marketing
              </h2>
            </div>

            <HorizontalServiceList services={services} />

          </div>
        </section>

        {/* Whats's Included
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
          quote="Dominate local search and turn nearby searches into real customers."
        />

        {/* Final CTA Button */}

        <CTASection
          title={<>Get More Local Customers</>}
          description={<>Optimize your Google My Business profile and dominate local search today.</>}
          buttonText="Claim Your Free Audit"
        />
      </div>
    </>

  );
};

export default GoogleMapMarketing;
