import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import ExploralPanel from "@/components/ui/ExploralPanel";
import { motion } from "framer-motion";
import {
    Video, Play, Youtube, MonitorPlay, Film, Share2,
    TrendingUp, BarChart3, ArrowRight,
     Clapperboard, Layers,
    Smartphone,
    Check
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoMarketing = () => {
    const navigate = useNavigate();


    const whyNeedPoints = [
        "88% Increase in User Time on Site",
        "Boost Social Media Engagement by 1200%",
        "Higher Trust & Brand Authority",
        "Better Product Explanation & Sales",
        "Dominant Reach on Search Engines",
        "Mobile-First Content Consumption"
    ];

    const services = [
        {
            num: "01",
            icon: Video,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-700",
            numColor: "text-blue-300",
            tagBg: "bg-blue-50",
            tagColor: "text-blue-700",
            tag: "Brand Identity",
            title: "Brand Story & Documentaries",
            desc: "We craft high-quality brand films and mini-documentaries that go beyond product promotion — capturing your founder story, team culture, and mission to build deep emotional connections with your audience that drive lasting loyalty.",
        },
        {
            num: "02",
            icon: Smartphone,
            iconBg: "bg-fuchsia-100",
            iconColor: "text-fuchsia-700",
            numColor: "text-fuchsia-300",
            tagBg: "bg-fuchsia-50",
            tagColor: "text-fuchsia-700",
            tag: "Viral Content",
            title: "Social Media Reels & Shorts",
            desc: "We produce fast-paced, hook-driven vertical content specifically engineered for Instagram Reels, YouTube Shorts, and Meta — optimised for maximum watch time, shares, and follower growth across every platform your audience uses.",
        },
        {
            num: "03",
            icon: MonitorPlay,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-700",
            numColor: "text-orange-300",
            tagBg: "bg-orange-50",
            tagColor: "text-orange-700",
            tag: "2D / 3D Animation",
            title: "Product Explainer Videos",
            desc: "We simplify complex products and services into clear, engaging 2D and 3D animated explainer videos — turning technical features into compelling visual stories that educate prospects and dramatically improve conversion rates on landing pages.",
        },
        {
            num: "04",
            icon: Youtube,
            iconBg: "bg-red-100",
            iconColor: "text-red-700",
            numColor: "text-red-300",
            tagBg: "bg-red-50",
            tagColor: "text-red-700",
            tag: "Channel Management",
            title: "YouTube Channel Growth",
            desc: "We handle your entire YouTube presence end-to-end — from SEO-optimised titles and thumbnails to professional editing, chapter markers, and community management — building a subscriber base that compounds into a long-term organic traffic asset.",
        },
        {
            num: "05",
            icon: Share2,
            iconBg: "bg-green-100",
            iconColor: "text-green-700",
            numColor: "text-green-300",
            tagBg: "bg-green-50",
            tagColor: "text-green-700",
            tag: "Visibility & Reach",
            title: "Video SEO & Distribution",
            desc: "We ensure every video you publish ranks on the first page of both Google and YouTube — using keyword research, metadata optimisation, closed captions, and strategic distribution across platforms to maximise total views and qualified leads.",
        },
        {
            num: "06",
            icon: Film,
            iconBg: "bg-indigo-100",
            iconColor: "text-indigo-700",
            numColor: "text-indigo-300",
            tagBg: "bg-indigo-50",
            tagColor: "text-indigo-700",
            tag: "Professional Filming",
            title: "Corporate & Event Filming",
            desc: "We provide professional multi-camera coverage of your product launches, business summits, award ceremonies, and corporate milestones — delivering broadcast-quality footage edited into highlight reels, testimonials, and internal communications.",
        },
    ]

    const processSteps = [
        {
            num: "01",
            tag: "Planning",
            step: "Pre-Production",
            desc: "We begin with in-depth scripting, storyboarding, and concept development — aligning the visual narrative with your brand goals, target audience, and campaign objectives before a single camera is switched on.",
        },
        {
            num: "02",
            tag: "Filming",
            step: "The Shoot",
            desc: "Our crew captures every scene with professional-grade cameras, cinema lenses, and precision lighting setups — ensuring broadcast-quality footage that holds attention and elevates your brand's visual identity on screen.",
        },
        {
            num: "03",
            tag: "Refinement",
            step: "Post-Production",
            desc: "Every frame goes through expert editing, cinematic colour grading, motion graphics, and professional sound engineering — transforming raw footage into a polished, high-impact final video that's ready to perform.",
        },
        {
            num: "04",
            tag: "Launch",
            step: "Distribution",
            desc: "We execute a strategic multi-platform launch — optimising titles, thumbnails, captions, and metadata for YouTube and Google, then distributing across social channels to maximise reach, views, and qualified leads from day one.",
        },
    ]



    return (
        <>
            <SEO
                title="Video Marketing Services | Video Marketing Agency in India"
                description="Boost engagement and brand awareness with high-impact video marketing strategies across digital platforms."
                keywords="video marketing, video advertising, youtube marketing, reels marketing, video marketing services in jabalpur"
                url="/digital-marketing/video-marketing"
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
                                    <Play className="w-3 h-3 fill-current" /> Video Marketing
                                </div>

                                <h1 className=" text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Video Marketing Services </span> That Drives Engagement
                                </h1>

                                <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                                    We create captivating video content that stops the scroll, explains your value, and converts viewers into loyal customers across YouTube, Instagram, and LinkedIn.
                                </p>

                                <div className="flex justify-start pt-4">
                                    <Button
                                        size="lg"
                                        className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                                        onClick={() => navigate("/contact")}
                                    >
                                        Start Your Production <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </motion.div>

                            {/* RIGHT COLUMN: Visual Proof (Dev/Code Bento) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 1 }}
                                className="lg:col-span-5 relative hidden lg:block group"
                            >
                                <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-700" />

                                {/* Frame Architecture */}
                                <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] p-3 bg-white border-2 border-slate-200 shadow-2xl overflow-hidden">
                                    <div className="absolute top-6 left-6 z-20 flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>

                                    <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem]">
                                        <img
                                            src="https://img.freepik.com/free-vector/video-production-concept-illustration_114360-1145.jpg"
                                            alt="Video Production Process"
                                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />

                                        {/* Play Trigger Module */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 group-hover:bg-slate-900/40 transition-all duration-500">
                                            <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                                <Play className="w-10 h-10 md:w-14 md:h-14 fill-white ml-2" />
                                            </div>
                                        </div>

                                        {/* Technical Detail Badge */}
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-bold text-white uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            00 : 45 : 12 / REC
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Decorative Elements */}
                                <div className="absolute -top-10 -right-10 hidden lg:block animate-bounce-slow">
                                    <div className="p-4 bg-white border border-slate-200 rounded-3xl shadow-xl -rotate-12">
                                        <Clapperboard className="w-8 h-8 text-orange-500" />
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE SOCIO BHAARAT*/}
                <section className="py-12 lg:px-10 bg-[#f8f9fb] relative overflow-hidden">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">

                            {/* ── LEFT ── */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-8"
                            >
                                {/* Eyebrow */}
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-[2px] bg-blue-600 rounded-full" />
                                    <span className="text-[11px] font-bold tracking-[.28em] uppercase text-blue-600">
                                        Video Performance
                                    </span>
                                </div>

                                {/* Heading */}
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
                                        style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)" }}
                                    >
                                        Why Brands Trust Our{" "}
                                        <span className=" bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                                            Video Vision.
                                        </span>
                                    </h2>
                                    <p className="text-sm sm:text-base md:text-lg text-slate-700 border-l-4 border-blue-100 font-medium pl-5 py-2">
                                        We combine cinematic artistry with performance marketing data — ensuring your
                                        videos don't just look stunning, they convert viewers into customers and build
                                        lasting brand equity.
                                    </p>
                                </div>

                                {/* 2×2 stat grid */}
                                <div className="grid grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
                                    {[
                                        { val: "500+", label: "Projects Delivered", color: "text-blue-600", bar: "bg-blue-600" },
                                        { val: "98%", label: "Client Satisfaction", color: "text-violet-600", bar: "bg-violet-600" },
                                        { val: "80%", label: "Retention Rate", color: "text-orange-700", bar: "bg-orange-500" },
                                        { val: "3.5×", label: "ROI Average", color: "text-teal-600", bar: "bg-teal-600" },
                                    ].map((s, i) => (
                                        <div
                                            key={i}
                                            className="group relative bg-white px-5 py-6 overflow-hidden hover:bg-slate-50 transition-colors cursor-default"
                                        >
                                            <div className={`font-display text-[2.4rem] font-black leading-none mb-1.5 ${s.color}`}>
                                                {s.val}
                                            </div>
                                            <p className="text-xs font-semibold uppercase tracking-[.18em] text-slate-500">
                                                {s.label}
                                            </p>
                                            <div className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-400 ${s.bar}`} />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* ── RIGHT ── */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-2.5"
                            >
                                {[
                                    {
                                        tag: "Scripting", icon: Clapperboard,
                                        iconBg: "bg-blue-100 text-blue-700", accentBg: "bg-blue-50", tagColor: "text-blue-700 group-hover:text-blue-600",
                                        title: "Data-Backed Scripting",
                                        desc: "Every word is chosen based on psychological retention triggers — keeping viewers watching and moving them toward the desired action.",
                                    },
                                    {
                                        tag: "Equipment", icon: MonitorPlay,
                                        iconBg: "bg-purple-100 text-purple-700", accentBg: "bg-purple-50", tagColor: "text-purple-700 group-hover:text-purple-600",
                                        title: "Ultra-HD Infrastructure",
                                        desc: "Cinema-grade 4K/6K equipment ensures your brand looks premium on every screen — from mobile to billboard-size displays.",
                                    },
                                    {
                                        tag: "Distribution", icon: Layers,
                                        iconBg: "bg-orange-100 text-orange-700", accentBg: "bg-orange-50", tagColor: "text-orange-700 group-hover:text-orange-600",
                                        title: "Platform-Specific Editing",
                                        desc: "Custom-cut versions for TikTok, YouTube, and LinkedIn — each optimised for native algorithms to maximise organic reach.",
                                    },
                                ].map((p, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ boxShadow: "0 8px 28px rgba(37,99,235,0.07)" }}
                                        transition={{ duration: 0.2 }}
                                        className="group grid grid-cols-[52px_1fr] rounded-2xl overflow-hidden border border-slate-100 bg-white hover:border-blue-100 transition-all duration-250 cursor-default"
                                    >
                                        {/* Accent column */}
                                        <div className={`flex items-center justify-center ${p.accentBg} group-hover:opacity-100 transition-colors`}>
                                            <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${p.iconBg}`}>
                                                <p.icon size={17} />
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="px-5 py-5 border-l border-slate-100 group-hover:border-transparent transition-colors">
                                            <span className={`text-[9px] font-bold uppercase tracking-[.2em] mb-1.5 block transition-colors ${p.tagColor}`}>
                                                {p.tag}
                                            </span>
                                            <div className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-700 tracking-wider transition-colors mb-1.5 leading-snug">
                                                {p.title}
                                            </div>
                                            <p className="text-sm md:text-base text-slate-5=800 font-medium leading-[1.75]">{p.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Proof strip */}
                                {/* <div className="bg-slate-900 rounded-2xl px-6 py-5 flex items-center justify-between gap-4 mt-0.5">
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[.18em] text-white/40 mb-1">
                                        Trusted By
                                    </p>
                                    <h4 className="font-display text-base font-extrabold italic text-white leading-tight">
                                        200+ Brands in Madhya Pradesh
                                    </h4>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[9px] font-bold uppercase tracking-[.12em] px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300">
                                        Bhopal
                                    </span>
                                    <span className="text-[9px] font-bold uppercase tracking-[.12em] px-3 py-1.5 rounded-full bg-violet-500/20 text-violet-300">
                                        Jabalpur
                                    </span>
                                </div>
                            </div> */}
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* WHY YOU NEED IT */}
                <section className="py-12 lg:px-10 bg-white">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-14 items-center">

                            {/* ── LEFT ── */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-7"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-[2px] bg-blue-600 rounded-full" />
                                    <span className="text-[11px] font-bold tracking-[.28em] uppercase text-blue-600">
                                        Video Impact
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.07]"
                                    style={{ fontSize: "clamp(1.8rem, 4.2vw, 2.8rem)" }}
                                >
                                    Why Does Your Brand Need{" "}
                                    <span className="bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                                        Video?
                                    </span>
                                </h2>

                                <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-[1.85] border-l-4 border-blue-100 font-medium pl-5 py-2">
                                    In a digital world full of text, video is the bridge that builds trust — the only
                                    medium combining visuals, audio, and narrative to create total brand immersion.
                                </p>

                                {/* Points grid */}
                                <div className="grid md:grid-cols-2 gap-2">
                                    {whyNeedPoints.map((point, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -2 }}
                                            transition={{ duration: 0.2 }}
                                            className="group flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-default"
                                        >
                                            <div className="w-5 h-5 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors duration-200">
                                                <Check size={10} strokeWidth={3} className="text-blue-600 group-hover:text-white transition-colors duration-200" />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors leading-snug">
                                                {point}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* ── RIGHT — Analysis Panel ── */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-slate-200 overflow-hidden bg-white"
                            >
                                {/* Dark header */}
                                <div className="bg-slate-900 px-7 py-5 flex items-center justify-between">
                                    <h3 className="text-lg font-bold tracking-wider text-white">
                                        Engagement Analysis
                                    </h3>
                                    <span className="text-[9px] font-bold uppercase tracking-[.2em] px-3 py-1.5 rounded-full bg-blue-500/25 text-blue-300">
                                        Live Metrics
                                    </span>
                                </div>

                                {/* Metrics */}
                                <div className="px-7 py-7 flex flex-col gap-6">
                                    {[
                                        { label: "User Attention Span", val: "+2× Increase", pct: "72%", bar: "from-blue-600 to-blue-400" },
                                        { label: "Purchase Intent", val: "80% Growth", pct: "80%", bar: "from-violet-600 to-violet-400" },
                                        { label: "Brand Recall", val: "95% Effective", pct: "95%", bar: "from-teal-600 to-teal-400" },
                                    ].map((m, idx) => (
                                        <div key={idx}>
                                            <div className="flex items-center justify-between mb-2.5">
                                                <span className="text-sm font-semibold text-slate-700">{m.label}</span>
                                                <span className="text-[12px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                                    {m.val}
                                                </span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: m.pct }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
                                                    className={`h-full rounded-full bg-gradient-to-r ${m.bar}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer stat strip */}
                                <div className="flex border-t border-slate-100">
                                    {[
                                        { val: "3×", label: "More Shares", color: "text-blue-600" },
                                        { val: "49%", label: "Faster Growth", color: "text-violet-600" },
                                        { val: "64%", label: "Buy Likelihood", color: "text-teal-600" },
                                    ].map((s, i) => (
                                        <div
                                            key={i}
                                            className={`flex-1 text-center px-4 py-4 ${i < 2 ? "border-r border-slate-100" : ""}`}
                                        >
                                            <div className={`font-display text-xl font-black leading-none mb-1 ${s.color}`}>
                                                {s.val}
                                            </div>
                                            <div className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">
                                                {s.label}
                                            </div>
                                        </div>
                                    ))}
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
                                Our Video <span className=" bg-gradient-to-r from-blue-600 via-primary to-orange-500 bg-clip-text text-transparent font-medium">
                                  Marketing Services
                                </span>
                            </h2>
                            <p className="text-sm md:text-base font-medium text-slate-800 leading-[1.8] max-w-2xl border-l-[3px] border-blue-100 pl-4">
                                "We build digital assets that scale your brand authority and drive measurable growth across the Bhopal & Jabalpur business landscape."
                            </p>
                        </div>

                        {/* Explorer panel */}
                        <ExploralPanel content={services}/>
                    </div>
                </section>

                {/* THE ROADMAP */}
                <section className="pb-12 lg:px-10 bg-[#f8f9fb]">
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

                {/* FINAL CTA */}
                <CTASection
                    title={<>Ready to Lights, Camera, Action?</>}
                    description={<>Create video content that resonates, educates, and sells. Let’s start your first production today.</>}
                    buttonText="Claim Free Audit"
                />

            </div>
        </>

    );
};

export default VideoMarketing;