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

    /* ================= DATA VARIABLES ================= */
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

            {/* ================= HERO SECTION ================= */}
            <section className="relative pt-24 pb-20 px-4 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-transparent">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 uppercase tracking-widest">
                                <Play className="w-3 h-3 fill-current" />
                                Next-Gen Content Strategy
                            </div>

                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                                Tell Your Story with <br />
                                <span className="text-primary italic font-serif">Cinematic Impact</span>
                            </h1>

                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
                                {heroData.subtext}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button
                                    size="lg"
                                    className="rounded-full px-10 h-14 shadow-2xl shadow-primary/20 text-lg hover:scale-105 transition-transform"
                                    onClick={() => navigate("/contact")}
                                >
                                    {heroData.cta}
                                </Button>
                                <Button variant="ghost" size="lg" className="rounded-full h-14 gap-2">
                                    <MonitorPlay className="w-5 h-5" /> View Showreel
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all" />
                            <img
                                src="https://img.freepik.com/free-vector/video-production-concept-illustration_114360-1145.jpg"
                                alt="Video Production Process"
                                className="relative rounded-[2.5rem] shadow-2xl border border-border"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                                    <Play className="w-8 h-8 fill-current ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

      {/* ================= WHY CHOOSE SOCIO BHAARAT (Enhanced) ================= */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full -z-10" />

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
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    Why Brands Trust Our <br />
                                    <span className="text-primary italic">Video Vision.</span>
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
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

            {/* ================= WHY YOU NEED IT ================= */}
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
                                Why Does Your Brand <br /> Need <span className="text-primary">Video?</span>
                            </h2>
                            <p className="text-muted-foreground text-lg">
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
                            <h3 className="text-2xl font-bold mb-6">Engagement Analysis</h3>
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

            {/* ================= SERVICES ================= */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Production Solutions</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg italic">From TikTok trends to high-end corporate documentaries.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden shadow-sm"
                            >
                                <div className="mb-6 p-4 w-fit rounded-2xl bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                                <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all">
                                    START PROJECT <ArrowRight className="w-3 h-3" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= THE ROADMAP ================= */}
            <section className="py-24 px-4 bg-muted/50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-16">The Production Workflow</h2>
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

            {/* ================= FINAL CTA ================= */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-5xl">
                    <Card className="bg-gradient-to-br from-primary via-primary/90 to-indigo-900 text-white p-12 md:p-20 text-center rounded-[3rem] shadow-2xl relative overflow-hidden border-none">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl"
                        />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Ready to Lights, Camera, Action?</h2>
                            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium">Create video content that resonates, educates, and sells. Let’s start your first production today.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg" variant="secondary" className="rounded-full h-16 px-12 text-xl font-bold hover:scale-105 transition-transform" onClick={() => navigate("/contact")}>
                                    Get a Production Quote
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full h-16 px-12 text-xl border-2 bg-transparent hover:bg-white hover:text-primary transition-all">
                                    Browse Portfolio
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

        </div>
    );
};

export default VideoMarketing;