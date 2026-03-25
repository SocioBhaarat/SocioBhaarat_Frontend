
import { staggerContainer, fadeLeft, fadeRight, cardAnimation } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, CheckCircle, Star, Sparkles, Users, Award, BarChart3, Globe, ShieldCheck, Target, Megaphone, ChevronLeft, ChevronRight, BarChart, Code, Palette, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ServiceCard from "@/components/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import SEO from "@/components/SEO";



const floatingBadges = [
  {
    pos: "top-14 left-10",
    delay: 0.4,
    floatDelay: "0s",
    iconBg: "bg-[#F5C518]",
    icon: <TrendingUp className="w-4 h-4 text-white" />,
    val: "10× Growth",
    sub: "Average client ROI",
  },
  {
    pos: "top-14 right-10",
    delay: 0.55,
    floatDelay: "1s",
    iconBg: "bg-blue-600",
    icon: <Zap className="w-4 h-4 text-white" />,
    val: "AI-Powered",
    sub: "Data-driven strategies",
  },
  {
    pos: "bottom-32 left-10",
    delay: 0.7,
    floatDelay: "0.5s",
    iconBg: "bg-green-100",
    icon: <CheckCircle className="w-4 h-4 text-green-600" />,
    val: "80% Retention",
    sub: "Happy clients stay",
  },
  {
    pos: "bottom-32 right-10",
    delay: 0.85,
    floatDelay: "1.5s",
    iconBg: "bg-red-100",
    icon: <Star className="w-4 h-4 text-red-500 fill-red-500" />,
    val: "5★ Rated",
    sub: "600+ client reviews",
  },
];

const stats = [
  { num: "50", suffix: "+", label: "Brands Grown Across India" },
  { num: "5", suffix: "×", label: "Average ROI Delivered" },
  { num: "170", suffix: "%", label: "Avg. Organic Traffic Growth" },
  { num: "5", suffix: "+", label: "Years of MP's Digital Excellence" },
];

const services = [
  {
    icon: <Megaphone className="h-7 w-7" />,
    title: "Social Media Marketing",
    description:
      "Build your brand presence across all major social platforms with engaging content.",
    features: [
      "Content Strategy",
      "Community Management",
      "Paid Advertising",
      "Analytics & Reporting",
    ],
    gradient: "orange" as const,
  },
  {
    icon: <Palette className="h-7 w-7" />,
    title: "Graphic Designing",
    description:
      "Create stunning visual identities that capture your brand essence.",
    features: [
      "Brand Identity",
      "Marketing Materials",
      "UI/UX Design",
      "Print Design",
    ],
    gradient: "blue" as const,
  },
  {
    icon: <Target className="h-7 w-7" />,
    title: "Performance Marketing",
    description:
      "Data-driven marketing strategies that focus on measurable results.",
    features: [
      "Campaign Optimization",
      "A/B Testing",
      "Conversion Tracking",
      "ROI Analysis",
    ],
    gradient: "green" as const,
  },
  {
    icon: <Code className="h-7 w-7" />,
    title: "Web Development",
    description:
      "Custom websites that drive conversions and deliver exceptional user experiences.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Integration",
      "SEO Optimization",
    ],
    gradient: "orange" as const,
  },
  {
    icon: <BarChart className="h-7 w-7" />,
    title: "Content Marketing",
    description:
      "Engaging content that tells your story and connects with your audience.",
    features: [
      "Blog Writing",
      "Video Production",
      "Email Marketing",
      "Content Strategy",
    ],
    gradient: "blue" as const,
  },
  {
    icon: <TrendingUp className="h-7 w-7" />,
    title: "SEO Services",
    description:
      "Improve your search rankings and drive organic traffic to your business.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Link Building",
      "Technical SEO",
    ],
    gradient: "green" as const,
  },
];

const benefits = [
  { title: "Precision Targeting", desc: "Reach the right audience at the perfect moment in their buying journey.", icon: <Target className="w-6 h-6" /> },
  { title: "Lead Generation", desc: "Build a consistent pipeline of high-quality leads that actually convert.", icon: <Users className="w-6 h-6" /> },
  { title: "Brand Authority", desc: "Establish deep trust through social proof and expert branding.", icon: <Award className="w-6 h-6" /> },
  { title: "Real-time Tracking", desc: "Stop guessing. Track every rupee spent with advanced real-time analytics.", icon: <BarChart3 className="w-6 h-6" /> },
  { title: "Competitive Edge", desc: "Don't just compete—outperform your rivals by owning the digital space.", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Scalable ROI", desc: "Scale profitably with targeted ad strategies designed for 2x–5x growth.", icon: <Zap className="w-6 h-6" /> },
];

const industries = [
  {
    name: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    name: "Hospitality",
    image:
      "https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg",
  },
  {
    name: "Retail & Fashion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  },
  {
    name: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df",
  },
  {
    name: "Education",
    image:
      "https://img.freepik.com/free-photo/education-concept-student-studying-brainstorming-campus-concept-close-up-students-discussing-their-subject-books-textbooks-selective-focus_1418-627.jpg",
  },
  {
    name: "Manufacturing",
    image:
      "https://img.freepik.com/premium-photo/mechanical-arm-welds-car-frame-factory_1208049-4.jpg",
  },
  {
    name: "Restaurants & Hotels",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  },
  {
    name: "Coaching & Consultancies",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    name: "Startups",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
  },
  {
    name: "CA Firms",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
  },
  {
    name: "Doctor’s Clinics",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
  },
  {
    name: "Advocates",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  },
  {
    name: "Salon & Parlours",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
  },
  {
    name: "Cloth & Saree Showrooms",
    image:
      "https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg",
  },
  {
    name: "E-commerce",
    image:
      "https://img.freepik.com/free-photo/laptop-shopping-bags-online-shopping-concept_1423-190.jpg",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const badgeIn: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: (d: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};


export default function Index() {
  const navigate = useNavigate();
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const isInView1 = useInView(videoRef1, { amount: 0.4 });
  const isInView2 = useInView(videoRef2, { amount: 0.4 });


  useEffect(() => {
    handleAutoPlay(videoRef1, isInView1);
  }, [isInView1]);


  useEffect(() => {
    handleAutoPlay(videoRef2, isInView2);
  }, [isInView2]);


  const handleAutoPlay = (ref, inView) => {
    if (inView && ref.current) {
      const playPromise = ref.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          ref.current.muted = false;
          ref.current.play();
        });
      }
    } else {
      ref.current?.pause();
    }
  };
  return (
    <>
      <SEO
        title="Digital Marketing & IT Solutions Company | Socio Bhaarat"
        description="We provide digital marketing, performance marketing, and IT solutions to help businesses grow with innovative strategies and technology."
        keywords="digital marketing company, it solutions company, performance marketing, web development services, marketing agency in jabalpur"
      />
      <div className="min-h-screen bg-background selection:bg-primary/20">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">

          {/* ── Background ── */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Warm radial orb */}
            <div className="absolute w-[700px] h-[700px] rounded-full -top-48 left-1/2 -translate-x-1/2 bg-gradient-radial from-yellow-100/30 via-blue-50/20 to-transparent blur-3xl" />
            {/* Grid lines */}
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{ backgroundImage: "linear-gradient(rgba(37,99,235,1) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }}
            />
            {/* Left brand stripe */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F5C518] via-blue-600 to-green-600" />
          </div>

          {/* ── Floating Badges ── */}
          {floatingBadges.map((b, i) => (
            <motion.div
              key={i}
              custom={b.delay}
              variants={badgeIn}
              initial="hidden"
              animate="visible"
              className={`absolute ${b.pos} hidden lg:flex items-center gap-3 bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 px-4 py-3 z-10`}
              style={{ animation: `floatBadge 3s ease-in-out ${b.floatDelay} infinite` }}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${b.iconBg}`}>
                {b.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">{b.val}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{b.sub}</p>
              </div>
            </motion.div>
          ))}

          {/* ── Center Content ── */}
          <div className="relative z-5 text-center max-w-6xl mx-auto px-6 pt-14 pb-10">

            {/* Pill tag */}
            <motion.div custom={0.05} variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
              <span className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-300 text-yellow-800 rounded-full px-5 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse" />
                MP's #1 Growth Partner &nbsp;·&nbsp; Bhopal &amp; Jabalpur
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-4">
              <motion.div custom={0.1} variants={fadeUp} initial="hidden" animate="visible">
                <span className="inline-block bg-[#F5C518] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded-lg px-4 py-1 mb-3">
                  AI-Powered &nbsp;✦&nbsp; Creativity &nbsp;✦&nbsp; Results-Driven
                </span>
              </motion.div>

              <motion.h1 custom={0.22} variants={fadeUp} initial="hidden" animate="visible" className="leading-[1.06]">
                <span className="text-4xl md:text-6xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 leading-[1.25]">
                  Creative Marketing & IT Solutions
                </span>{"  "}<span className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.25]">
                  For Bhaarat.
                </span>
              </motion.h1>

              <motion.p custom={0.34} variants={fadeUp} initial="hidden" animate="visible"
                className="mt-4 font-['DM_Sans'] text-slate-500 text-lg md:text-xl font-medium"
              >
                Redefining Growth with Strategy + Technology + Creativity
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div custom={0.46} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap justify-center gap-4 mt-8 mb-6"
            >
              <motion.a
                onClick={() => window.open("https://wa.me/+919407448837 ", "_blank")}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 pl-2 pr-7 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-['DM_Sans'] font-bold text-sm transition-colors shadow-lg shadow-blue-200"
              >
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </span>
                Get Your Free Growth Strategy
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F5C518] hover:bg-yellow-400 text-slate-900 rounded-full font-['DM_Sans'] font-bold text-sm transition-colors"
              >
                Explore Services ↓
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div custom={0.58} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500"
            >
              <span>Rated 5 Stars</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#F5C518] text-base">★</span>
                ))}
              </div>
              <div className="w-px h-4 bg-slate-200" />
              <div className="w-px h-4 bg-slate-200" />
              <span>No lock-ins · Transparent reporting</span>
            </motion.div>
          </div>

          {/* Float keyframe injected via style tag (Tailwind can't do custom keyframes inline) */}
          <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
      `}</style>
        </section>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 mt-8"
        >
          {stats.map(({ num, suffix, label }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.25 }}
              className="group relative flex flex-col items-center justify-center px-6 py-8 rounded-2xl bg-white border border-slate-100 overflow-hidden cursor-default text-center"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-violet-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Watermark number */}
              <span className="absolute -bottom-3 -right-1 font-display text-[5rem] font-black italic leading-none text-slate-900 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Value */}
              <p className="font-display text-4xl md:text-5xl font-black text-slate-900 leading-none mb-2">
                {num}
                <span className="text-blue-600 text-2xl md:text-3xl font-black">
                  {suffix}
                </span>
              </p>

              {/* Label */}
              <p className="text-sm font-semibold text-slate-400 leading-snug mt-1 uppercase tracking-[.12em]">
                {label}
              </p>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-gradient-to-r from-blue-600 to-violet-600 group-hover:w-full transition-all duration-500 rounded-tr-sm" />
            </motion.div>
          ))}
        </motion.div>

        {/* Impact */}
        <section className="relative py-12 lg:px-10 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-10 items-stretch">

              {/* ── LEFT ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col gap-5"
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-[2px] bg-[#1B3A8C] rounded-full" />
                  <span className="text-sm font-bold tracking-[.3em] uppercase text-[#1B3A8C]">
                    Our Impact
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.06]">
                  We believe in{" "}
                  <span className=" bg-gradient-to-r from-blue-500 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                    impactful
                  </span>{" "}
                  metrics.
                </h2>

                {/* Description */}
                <p className="text-sm md:text-lg text-slate-700 leading-[1.85] border-l-4 border-[#E8F0FB] pl-5 py-1 font-medium">
                  Since 2022, we've transformed the digital landscape for 50+ brands
                  across Madhya Pradesh. Our focus isn't just clicks — it's sustainable
                  revenue and lasting brand authority that compounds over time.
                </p>

                {/* Verified badge */}
                <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#E8F0FB] border border-[#1B3A8C]/10">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border border-[#1B3A8C]/10">
                    <ShieldCheck size={19} className="text-[#1B3A8C]" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">Verified Results</p>
                    <p className="text-sm text-slate-800 ">
                      Performance audit available upon request.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col border border-slate-100 rounded-2xl overflow-hidden w-full max-w-4xl mx-auto">
                  {[
                    { dot: "#F5A800", label: "Average revenue growth per client", val: "5×" },
                    { dot: "#1B3A8C", label: "Total qualified leads delivered", val: "1 Lakh+" },
                    { dot: "#2196F3", label: "Total ad impressions generated", val: "10M+" },
                    { dot: "#F5A800", label: "Long-term client retention rate", val: "80%" },
                    { dot: "#1B3A8C", label: "Brands served across Bhopal & Jabalpur", val: "50+" },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="group flex flex-row items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 border-b border-slate-50 last:border-b-0 bg-white hover:bg-[#E8F0FB]/50 transition-colors duration-200 cursor-default"
                    >
                      {/* Indicator Dot */}
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: row.dot }}
                      />

                      {/* Label: Adjusted font size for mobile */}
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 flex-1 leading-snug pr-2">
                        {row.label}
                      </span>

                      {/* Value: Prevent wrapping and keep it aligned right */}
                      <span
                        className="font-display text-sm sm:text-base font-black flex-shrink-0 whitespace-nowrap text-right"
                        style={{ color: row.dot }}
                      >
                        {row.val}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── RIGHT — 2×2 stat cards ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-2 gap-2 md:gap-3"
              >
                {[
                  {
                    icon: TrendingUp,
                    val: "5×",
                    label: "Revenue Growth",
                    sub: "Average across all active clients",
                    bg: "bg-[#FFF8E7] border-[#F5A800]/30",
                    iconBg: "bg-[#FFF0C0] text-[#F5A800]",
                    valColor: "#F5A800",
                    bar: "from-[#F5A800] to-[#FFD154]",
                  },
                  {
                    icon: Users,
                    val: "1Lakh+",
                    label: "Leads Delivered",
                    sub: "Qualified leads across all campaigns",
                    bg: "bg-[#E8F0FB] border-[#1B3A8C]/20",
                    iconBg: "bg-white text-[#1B3A8C]",
                    valColor: "#1B3A8C",
                    bar: "from-[#1B3A8C] to-[#2196F3]",
                  },
                  {
                    icon: Megaphone,
                    val: "10M+",
                    label: "Ad Impressions",
                    sub: "Across Google, Meta & YouTube",
                    bg: "bg-[#E8F4FF] border-[#2196F3]/20",
                    iconBg: "bg-white text-[#2196F3]",
                    valColor: "#2196F3",
                    bar: "from-[#2196F3] to-[#64B5F6]",
                  },
                  {
                    icon: Target,
                    val: "80%",
                    label: "Client Retention",
                    sub: "Clients who renew month on month",
                    bg: "bg-[#FFF8E7] border-[#F5A800]/30",
                    iconBg: "bg-[#FFF0C0] text-[#F5A800]",
                    valColor: "#1B3A8C",
                    bar: "from-[#1B3A8C] to-[#F5A800]",
                  },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(27,58,140,0.1)" }}
                    transition={{ duration: 0.25 }}
                    className={`group relative flex flex-col rounded-xl md:rounded-2xl p-4 md:p-8 border overflow-hidden cursor-default transition-all duration-300 ${s.bg}`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-8 h-8 md:w-11 md:h-11 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-white/60 ${s.iconBg}`}
                    >
                      <s.icon size={14} className="md:hidden" />
                      <s.icon size={19} className="hidden md:block" />
                    </div>

                    {/* Value */}
                    <div
                      className="font-display text-3xl md:text-5xl font-black leading-none mb-1 md:mb-2"
                      style={{ color: s.valColor }}
                    >
                      {s.val}
                    </div>

                    {/* Label */}
                    <p className="text-xs md:text-base font-bold text-slate-700 mb-1 md:mb-1.5 leading-snug">
                      {s.label}
                    </p>

                    {/* Sub — hidden on mobile */}
                    <p className="hidden md:block text-sm text-slate-400 italic leading-snug flex-1">
                      {s.sub}
                    </p>

                    {/* Bottom bar */}
                    <div
                      className={`mt-3 md:mt-5 h-[2px] md:h-[3px] w-6 md:w-8 rounded-full group-hover:w-full transition-all duration-500 bg-gradient-to-r ${s.bar}`}
                    />

                    {/* Watermark — hidden on mobile */}
                    <span
                      className="hidden md:block absolute bottom-0 right-2 text-4xl font-black italic leading-none pointer-events-none select-none opacity-[0.05] group-hover:opacity-[0.1] transition-opacity"
                      style={{ color: s.valColor }}
                    >
                      {s.val}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* About US */}
        <section className="py-12 sm:px-6 lg:px-8 bg-background relative overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[60%] h-[60%] bg-blue-600/10 blur-[80px] md:blur-[140px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[50%] h-[50%] bg-orange-500/10 blur-[80px] md:blur-[130px] rounded-full" />
          </div>

          <motion.div
            className="container mx-auto max-w-7xl relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-[1.8fr_1fr] gap-10 lg:gap-14 items-stretch min-h-[600px]">

              {/* ── LEFT ── */}
              <motion.div
                variants={fadeLeft}
                className="flex flex-col justify-between gap-6 order-2 lg:order-1"
              >
                {/* Top block */}
                <div className="flex flex-col gap-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest border border-primary/20 max-w-xs">
                    <Sparkles className="w-3 h-3" />
                    The SocioBhaarat Identity
                  </div>

                  <div>
                    {/* <p className="text-sm font-bold uppercase tracking-[.15em] text-slate-400 mb-2">
                      MP's Fastest Growing
                    </p> */}
                    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05]">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                        Jabalpur and Bhopal Best Digital Marketing and IT Company
                      </span>
                    </h2>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "Performance Marketing", cls: "bg-blue-50 text-blue-700 border-blue-200" },
                      { label: "Web Development", cls: "bg-orange-50 text-orange-700 border-orange-200" },
                      { label: "WhatsApp API", cls: "bg-green-50 text-green-700 border-green-200" },
                      { label: "SEO & Content", cls: "bg-indigo-50 text-indigo-700 border-indigo-200" },
                      { label: "ORM", cls: "bg-purple-50 text-purple-700 border-purple-200" },
                      { label: "Video Marketing", cls: "bg-red-50 text-red-700 border-red-200" },
                    ].map((t) => (
                      <span
                        key={t.label}
                        className={`text-[11px] font-bold px-3 py-1 rounded-full border ${t.cls}`}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-4 text-base md:text-lg tracking-wide leading-relaxed text-muted-foreground">
                    <p className="border-l-4 border-primary/30 pl-4 md:pl-6 italic font-medium">
                      <strong>Socio Bhaarat</strong> is a performance-driven digital agency
                      helping businesses across India scale with strategy, creativity,
                      and technology.
                    </p>
                    <p className="text-sm md:text-base font-medium">
                      From paid advertising and SEO to branding and web development, we focus
                      on <strong>measurable results</strong>. We combine deep local market
                      understanding with data-backed execution to help Bhopal & Jabalpur
                      businesses grow faster than the competition.
                    </p>
                    <p className="text-sm md:text-base font-medium">
                      Our team of specialists works as an extension of your business — not just
                      an agency. Every campaign we run is aligned to your revenue goals, tracked
                      in real time, and optimised relentlessly until your numbers move.
                    </p>
                  </div>
                </div>

                {/* Mid block — feature points */}
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { icon: Target, title: "Goal-Aligned Strategy", desc: "Every campaign built around your specific revenue targets." },
                    { icon: BarChart3, title: "Real-Time Reporting", desc: "Full transparency on where every rupee goes." },
                    { icon: Users, title: "Local Market Expertise", desc: "Deep knowledge of Bhopal & Jabalpur consumer behaviour." },
                    { icon: ShieldCheck, title: "Verified Performance", desc: "Audit-ready results available upon request." },
                  ].map((f, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-3 px-4 py-3.5 rounded-xl border border-transparent bg-muted/40 hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200 text-primary">
                        <f.icon size={15} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground leading-snug mb-0.5">{f.title}</p>
                        <p className="text-sm text-muted-foreground font-medium">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom block — CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    className="rounded-full px-7 h-11 text-sm font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => navigate("/contact")}
                  >
                    Reach Out Us <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-7 h-11 text-sm font-bold border-2 border-primary/30 text-primary hover:bg-primary/5 hover:text-primary transition-all"
                    onClick={() => window.open("https://wa.me/+919407448837 ", "_blank")}
                  >
                    Book a Free Call
                  </Button>
                  <Button
                    variant="ghost"
                    className="rounded-full px-5 h-11 text-sm font-bold text-muted-foreground hover:text-white transition-all"
                    onClick={() => navigate("/about")}
                  >
                    Learn More →
                  </Button>
                </div>
              </motion.div>

              {/* ── RIGHT — video, exact same dimensions ── */}
              <motion.div
                variants={fadeRight}
                className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-12 lg:mb-0"
              >
                <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px]">

                  {/* Video */}
                  <div className="relative z-10 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-white/10 aspect-[9/16] max-h-[500px] md:max-h-[600px] bg-slate-900">
                    <video
                      ref={videoRef1}
                      loop
                      playsInline
                      preload="auto"
                      muted={false}
                      className="w-full h-full object-cover scale-105"
                    >
                      <source src="/socio bhaarat1.3running.webm" type="video/webm" />
                    </video>
                  </div>

                  {/* Floating card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-14 -left-10 md:-bottom-1 md:-left-12 z-20 bg-white/80 dark:bg-card/80 backdrop-blur-xl border border-border p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl max-w-[200px] md:max-w-xs"
                  >
                    <div className="flex items-center gap-3 mb-2 md:mb-3">
                      <div className=" rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600">
                        <Users className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Trusted By
                      </p>
                    </div>
                    <p className="text-lg md:text-2xl font-black text-foreground">
                      50+ Local Brands
                    </p>
                    <p className="text-[9px] md:text-xs text-muted-foreground mt-1 leading-tight">
                      Leading the digital shift across MP.
                    </p>
                  </motion.div>

                  {/* Decorative blobs */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 md:w-40 md:h-40 bg-blue-500/10 rounded-full blur-2xl md:blur-3xl -z-10" />
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 md:w-32 md:h-32 bg-orange-500/10 rounded-full blur-xl md:blur-2xl -z-10" />
                </div>
              </motion.div>

            </div>
          </motion.div>
        </section>

        {/* Why Your business needs digital Marketing */}
        <section className="py-12 bg-[#fafafa] relative overflow-hidden sm:px-6">
          {/* Background Orbs - Hidden or scaled on small screens to prevent overflow issues */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-orange-500/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

          <motion.div
            className="container mx-auto max-w-7xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Split header */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end pb-8 border-b border-slate-100"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-4">
                  <TrendingUp className="w-3 h-3" /> Market Survival & Growth
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                  Why Your Business Needs{" "}
                  <em className="bg-gradient-to-r from-blue-500 via-primary to-orange-500 bg-clip-text text-transparent font-medium not-italic">
                    Digital Marketing
                  </em>
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed border-l-[3px] border-blue-100 pl-4 font-medium">
                  "Your customers are online. If your business isn't visible there, you're
                  losing opportunities every single day."
                </p>
              </div>
            </motion.div>

            {/* Asymmetric bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4 mb-4">
              {[
                { span: "md:col-span-3", title: "Precision Targeting", desc: "Reach the right audience at the perfect moment in their buying journey — not just anyone, but the people most likely to buy from you today.", icon: Target, tint: "bg-blue-50 border-blue-200", iconBg: "bg-blue-100 text-blue-700", num: "text-blue-300", bar: "bg-blue-700", ac: "#1d4ed8", wide: false },
                { span: "md:col-span-3", title: "Consistent Lead Generation", desc: "Build a predictable pipeline of high-quality leads that actually convert — no more relying on word-of-mouth or seasonal walk-ins.", icon: Users, tint: "bg-fuchsia-50 border-purple-200", iconBg: "bg-purple-100 text-purple-700", num: "text-purple-300", bar: "bg-purple-700", ac: "#6d28d9", wide: false },
                { span: "md:col-span-2", title: "Brand Authority", desc: "Establish deep trust through social proof, expert content, and high visibility that makes you the obvious choice.", icon: Award, tint: "bg-orange-50 border-orange-200", iconBg: "bg-orange-100 text-orange-700", num: "text-orange-300", bar: "bg-orange-700", ac: "#c2410c", wide: false },
                { span: "md:col-span-2", title: "Real-Time Tracking", desc: "Track every rupee with advanced analytics — know exactly what's working and where to invest more.", icon: BarChart3, tint: "bg-green-50 border-green-200", iconBg: "bg-green-100 text-green-700", num: "text-green-300", bar: "bg-green-700", ac: "#15803d", wide: false },
                { span: "md:col-span-2", title: "Competitive Edge", desc: "Don't just compete — outperform rivals by owning the digital space they're ignoring right now.", icon: ShieldCheck, tint: "bg-red-50 border-red-200", iconBg: "bg-red-100 text-red-700", num: "text-red-300", bar: "bg-red-700", ac: "#b91c1c", wide: false },
                { span: "md:col-span-6", title: "Scalable ROI", desc: "Scale profitably with targeted ad strategies designed for 2×–5× growth — campaigns that compound in value the longer they run, delivering more revenue per rupee.", icon: Zap, tint: "bg-amber-50 border-amber-200", iconBg: "bg-amber-100 text-amber-700", num: "text-amber-300", bar: "bg-amber-700", ac: "#b45309", wide: true },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardAnimation}
                  whileHover={{ y: item.wide ? 0 : -4, boxShadow: "0 16px 40px rgba(0,0,0,0.06)" }}
                  transition={{ duration: 0.25 }}
                  className={`group relative border rounded-2xl overflow-hidden cursor-default transition-all duration-300 
            ${item.tint} ${item.span} 
            ${item.wide ? "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 px-6 py-8 sm:px-8 sm:py-6" : "flex flex-col p-6 sm:p-8"}`}
                >
                  {/* Icon Container */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.wide ? "mb-2 sm:mb-0" : "mb-5"} ${item.iconBg}`}>
                    <item.icon size={22} />
                  </div>

                  <div className={item.wide ? "flex-1 min-w-0" : "flex-1 flex flex-col"}>
                    <span className={`text-[10px] font-bold tracking-[.18em] uppercase mb-2 block ${item.num}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-bold italic text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className={`text-sm sm:text-base font-medium text-slate-700 leading-relaxed ${item.wide ? "mb-0" : "mb-6"}`}>
                      {item.desc}
                    </p>

                    {/* Bottom bar for standard cards */}
                    {!item.wide && (
                      <div className={`mt-auto h-[2.5px] w-8 rounded-full group-hover:w-full transition-all duration-500 ${item.bar}`} />
                    )}
                  </div>

                  {/* Right bar for the wide card (Scalable ROI) - Hidden on mobile */}
                  {item.wide && (
                    <div className={`hidden sm:block w-[3px] h-12 rounded-full group-hover:h-full transition-all duration-500 flex-shrink-0 self-stretch ${item.bar}`} />
                  )}

                  {/* Background Number decoration - Only visible on desktop/tablet to reduce clutter */}
                  {!item.wide && (
                    <span className="hidden sm:block absolute bottom-[-10px] right-2 font-display text-[5.5rem] font-black italic leading-none pointer-events-none select-none opacity-[0.05] group-hover:opacity-[0.11] transition-opacity" style={{ color: item.ac }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Pull-quote strip */}
            <motion.div
              variants={fadeUp}
              className="relative flex flex-col sm:flex-row items-center gap-6 md:gap-10 px-6 py-8 md:px-12 md:py-10 rounded-2xl bg-slate-900 overflow-hidden"
            >
              <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
                <Globe className="w-32 h-32 md:w-48 md:h-48 text-white" />
              </div>

              <p className="text-sm md:text-lg text-slate-300 italic leading-relaxed md:leading-[1.85] relative z-10 text-center sm:text-left">
                "Today, <strong className="text-white not-italic font-bold">customers search, compare, and decide online</strong> before making any purchase. Your digital presence directly impacts your growth, credibility, and revenue."
              </p>

              {/* Decorative line/accents */}
              <div className="w-12 h-[3px] sm:w-[3px] sm:h-12 bg-gradient-to-b sm:bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex-shrink-0" />
            </motion.div>
          </motion.div>
        </section>

        {/* Growth */}
        <section className="py-12 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">
          {/* Background Motion Blur */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />

          <motion.div
            className="container mx-auto max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Header */}
            <motion.div variants={fadeUp} className="text-center max-w-5xl mx-auto mb-20 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                The Roadmap to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                  Digital Dominance
                </span>
              </h2>
              <p className="text-sm md:text-lg text-slate-500 font-medium ">
                "A high-velocity, data-driven approach designed for sustainable growth."
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">

              {/* 1. INTERACTIVE STEPS COLUMN (7 Columns) */}
              <div className="lg:col-span-7 relative">
                {/* The Animated Connectivity Line */}
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-transparent hidden md:block opacity-30" />

                <div className="space-y-2 relative z-10">
                  {[
                    { title: "Research & Strategy", desc: "Analyzing brand positioning, competitors, and target audience to craft a growth roadmap." },
                    { title: "Creative & Technical Setup", desc: "High-converting designs, optimized website structure, and strategic content planning." },
                    { title: "Ads & SEO Execution", desc: "Meta & Google Ads combined with SEO visibility strategies that drive high-intent traffic." },
                    { title: "Tracking & Optimization", desc: "Pixel setup, heatmaps, and retargeting funnels for continuous performance improvement." },
                    { title: "Scaling & Growth", desc: "Once profitable, we strategically scale campaigns 2x–5x for maximum sustainable ROI." },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      variants={fadeLeft}
                      className="flex items-start gap-8 group"
                    >
                      {/* Animated Step Number */}
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center font-black text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 relative">
                          0{i + 1}
                        </div>
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping group-hover:block hidden" />
                      </div>

                      {/* Content Card */}
                      <div className="p-5 rounded-[2rem] bg-white/50 backdrop-blur-sm border border-slate-100 group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-500 flex-grow">
                        <h3 className="text-md md:text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-medium">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 2. VIDEO COLUMN (5 Columns) */}
              <motion.div
                variants={fadeRight}
                className="lg:col-span-5 relative flex justify-center lg:justify-center order-2 lg:order-2 lg:sticky lg:top-24 w-full"
              >
                <div className="relative w-full max-w-[320px] md:max-w-[380px] px-4">
                  <div className="relative z-10 overflow-hidden rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border-[8px] border-white aspect-[9/16] bg-slate-900 w-full">
                    <video
                      ref={videoRef2}
                      autoPlay
                      loop
                      muted={false}
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/GrowthSteps.webm" type="video/webm" />
                    </video>

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Decorative Back Elements */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10" />
                </div>
              </motion.div>
            </div>

            {/* Bottom Narrative Statement */}
            <motion.div
              variants={fadeUp}
              className="mt-20 p-8 rounded-[2.5rem] bg-slate-900 text-white text-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Rocket className="w-24 h-24 rotate-12" />
              </div>
              <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed italic">
                "Your growth isn't a single event—it's a <span className="text-secondary font-bold">continuous evolution</span> powered by data and creativity."
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Industries */}
        <section className="py-8 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 relative z-10">
              <div className="max-w-2xl">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 italic">System Versatility</h2>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                  Expertise Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                    Verticals
                  </span>
                </h3>
                <p className="text-md md:text-lg text-slate-500 italic font-medium border-l-4 border-primary/20 pl-6">
                  Our solutions are engineered to meet the unique psychological triggers of different industries.
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex gap-4">
                <button className="prev-btn w-14 h-14 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-primary hover:text-white transition-all shadow-xl active:scale-90 group">
                  <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button className="next-btn w-14 h-14 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-primary hover:text-white transition-all shadow-xl active:scale-90 group">
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Autoplay, Mousewheel, Keyboard]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
              }}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
                thresholdDelta: 20,
              }}
              speed={1000}
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3.5 }
              }}
              className="pb-12"
            >
              {industries.map((industry, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative h-[500px] rounded-[2.5rem] p-3 bg-white border border-slate-100 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700">
                    <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                      <div className="absolute bottom-10 left-10 right-10">
                        <h3 className="text-2xl font-black text-white mb-4 tracking-tight italic uppercase">{industry.name}</h3>
                        <div className="w-12 h-1 bg-primary rounded-full group-hover:w-full transition-all duration-700" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-8 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">Core</span> Ecosystem</h2>
              <p className="text-muted-foreground text-md md:text-lg max-w-2xl mx-auto italic underline decoration-primary/30">Complete WhatsApp marketing solutions tailored for every business across India </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                size="lg" variant="ghost"
                className="rounded-full gap-2 text-lg font-bold group "
                onClick={() => navigate("/services")}
              >
                Explore All 12+ Services <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        <CTASection
          title={<>Ready to Scale <br className="md:hidden" />Your <span className="underline decoration-white/30 underline-offset-4">Online Empire?</span></>}
          description={<>Let's discuss how we can engineer your digital marketing goals and drive sustainable revenue across India</>}
          buttonText="Claim Your Free Audit"
        />
      </div>
    </>

  );
}