import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    Video, Play, Youtube, MonitorPlay, Film, Share2,
    TrendingUp, BarChart3, CheckCircle2, ArrowRight,
    Zap, Users, Clapperboard, Layers,
    Smartphone
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoMarketing = () => {
    const navigate = useNavigate();

    /* DATA VARIABLES */
    const heroData = {
        heading: "Tell Your Brand Story with High-Impact Video Marketing",
        subtext: "We create captivating video content that stops the scroll, explains your value, and converts viewers into loyal customers across YouTube, Instagram, and LinkedIn.",
        cta: "Start Your Production",
    };

    const whyChoosePoints = [
        { title: "Pro-Grade Production", icon: <Film /> },
        { title: "Strategic Storytelling", icon: <Clapperboard /> },
        { title: "Multi-Platform SEO", icon: <Youtube /> },
        { title: "High-End Motion Graphics", icon: <Layers /> },
        { title: "Performance Tracking", icon: <BarChart3 /> },
        { title: "Viral Engagement Growth", icon: <TrendingUp /> },
    ];

    const whyNeedPoints = [
        "88% Increase in User Time on Site",
        "Boost Social Media Engagement by 1200%",
        "Higher Trust & Brand Authority",
        "Better Product Explanation & Sales",
        "Dominant Reach on Search Engines",
        "Mobile-First Content Consumption"
    ];

    const services = [
        { name: "Brand Story & Documentaries", icon: <Video />, desc: "High-quality brand films that build deep emotional connections." },
        { name: "Social Media Reels & Shorts", icon: <Smartphone />, desc: "Fast-paced, viral-ready vertical content for Meta and TikTok." },
        { name: "Product Explainer Videos", icon: <MonitorPlay />, desc: "Simplified 2D/3D animations that explain complex products easily." },
        { name: "YouTube Channel Growth", icon: <Youtube />, desc: "End-to-end management from SEO titles to professional editing." },
        { name: "Video SEO & Distribution", icon: <Share2 />, desc: "Ensuring your videos rank on the first page of Google and YouTube." },
        { name: "Corporate & Event Filming", icon: <Film />, desc: "Professional coverage of your milestones and business summits." },
    ];

    const processSteps = [
        { step: "Pre-Production", desc: "Scripting, storyboarding, and concept development." },
        { step: "The Shoot", desc: "Professional filming with high-end gear and lighting." },
        { step: "Post-Production", desc: "Editing, color grading, and sound engineering." },
        { step: "Distribution", desc: "Strategic launch and cross-platform promotion." }
    ];

    return (
        <div className="min-h-screen bg-background selection:bg-primary/20">

            {/* HERO SECTION */}
            <section className="relative pt-10 pb-20 px-4 flex items-center justify-center overflow-hidden bg-[#fafafa]">

                {/* 1. ARCHITECTURAL BACKGROUND LAYER */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Signature SocioBhaarat Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px] md:bg-[size:45px_45px]" />

                    {/* Dynamic Lighting Blobs */}
                    <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[40%] bg-blue-600/5 blur-[100px] rounded-full" />

                </div>

                {/* 2. MAIN CONTENT GRID */}
                <div className="container mx-auto max-w-7xl px-4 relative z-10 pt-12 md:pt-0">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Column: Narrative Architecture */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
                                <Play className="w-3 h-3 fill-current" /> Next-Gen Content Strategy
                            </div>

                            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
                                Tell Your Story with <br />
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                                        Cinematic Impact
                                    </span>

                                </span>
                            </h1>

                            <p className="text-base md:text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium italic border-l-0 lg:border-l-4 border-primary/20 lg:pl-8 mb-10">
                                {heroData.subtext}
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <Button
                                    size="lg"
                                    className="rounded-full px-10 h-16 bg-slate-900 text-white font-black text-lg shadow-2xl hover:bg-primary transition-all hover:scale-105"
                                    onClick={() => navigate("/contact")}
                                >
                                    {heroData.cta}
                                </Button>

                            </div>
                        </motion.div>

                        {/* Right Column: Visual Component Module */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative group w-full max-w-[500px] mx-auto hidden md:block"
                        >
                            {/* Shadow/Glow Architecture */}
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

                {/* Smooth Bottom Line */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
            </section>

            {/* WHY CHOOSE SOCIO BHAARAT (Enhanced) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left side: Stats & Proof */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                    Why Brands Trust Our
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Video Vision.</span>
                                </h2>
                                <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                                    We don't just point a camera and shoot. We combine cinematic artistry with performance marketing data to ensure your videos don't just look good—they convert.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-4">
                                {[
                                    { label: "Successful Projects", value: "500+", color: "text-primary" },
                                    { label: "Client Satisfaction", value: "98%", color: "text-secondary" },
                                    { label: "Retention Rate", value: "94%", color: "text-accent" },
                                    { label: "ROI Average", value: "3.5x", color: "text-primary" }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className={`text-4xl font-black tracking-tighter ${stat.color}`}>
                                            {stat.value}
                                        </div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right side: Value Pillars */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid gap-4"
                        >
                            {[
                                {
                                    title: "Data-Backed Scripting",
                                    desc: "Every word is chosen based on psychological triggers that maintain viewer retention.",
                                    icon: <Clapperboard className="w-5 h-5" />
                                },
                                {
                                    title: "Ultra-HD Infrastructure",
                                    desc: "We use cinema-grade 4K/6K equipment to ensure your brand looks premium on any screen.",
                                    icon: <MonitorPlay className="w-5 h-5" />
                                },
                                {
                                    title: "Platform-Specific Editing",
                                    desc: "Custom versions for TikTok, YouTube, and LinkedIn to maximize native reach.",
                                    icon: <Layers className="w-5 h-5" />
                                }
                            ].map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all flex gap-5 items-start"
                                >
                                    <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        {pillar.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">{pillar.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* WHY YOU NEED IT */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Why Does Your Brand <br /> Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Video?</span>
                            </h2>
                            <p className="text-muted-foreground text-sm md:text-lg">
                                In a digital world full of text, video is the bridge that builds trust. It is the only medium that combines visuals, audio, and narrative to create total brand immersion.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 pt-6">
                                {whyNeedPoints.map((point, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-background border border-border shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                                        <span className="font-bold text-xs tracking-tight">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card p-10 rounded-[3rem] border border-border relative overflow-hidden"
                        >
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                            <h3 className="text-xl md:text-2xl font-bold mb-6">Engagement Analysis</h3>
                            <div className="space-y-8">
                                {[
                                    { label: "User Attention Span", val: "Increased by 2x" },
                                    { label: "Purchase Intent", val: "80% Growth" },
                                    { label: "Brand Recall", val: "95% Effective" }
                                ].map((stat, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between text-sm font-bold mb-2">
                                            <span>{stat.label}</span>
                                            <span className="text-primary">{stat.val}</span>
                                        </div>
                                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 1, delay: idx * 0.2 }}
                                                className="h-full bg-primary"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Solutions</span></h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg italic">From TikTok trends to high-end corporate documentaries.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden shadow-sm"
                            >
                                <div className="mb-6 p-4 w-fit text-lg md:text-xl rounded-2xl bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE ROADMAP */}
            <section className="py-24 px-4 bg-muted/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-16">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Production Workflow</span></h2>
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Visual connector */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-dashed border-t border-border -z-10" />

                        {processSteps.map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 bg-background border-4 border-muted rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-6 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed px-4">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}

            <section className="py-12 md:py-24 px-4 sm:px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">


                        {/* 2. CONTENT ARCHITECTURE */}
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                                Ready to Lights, Camera, Action?
                            </h2>

                            <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                                "Create video content that resonates, educates, and sells. Let’s start your first production today."
                            </p>

                            {/* 3. ADAPTIVE BUTTON */}
                            <div className="flex justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-sm md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                                    onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                                >
                                    Claim Free Audit
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default VideoMarketing;