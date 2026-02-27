import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { Check, Search, TrendingUp, FileText, Link2, ShieldCheck, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebsiteSEO = () => {
  const navigate = useNavigate();

  const services = [
    { icon: Search, title: "Keyword Research", desc: "In-depth keyword analysis to target the right search terms" },
    { icon: FileText, title: "On-Page SEO", desc: "Optimize content, meta tags, and site structure" },
    { icon: Link2, title: "Link Building", desc: "High-quality backlinks from authoritative websites" },
    { icon: TrendingUp, title: "Technical SEO", desc: "Site speed, mobile optimization, and crawlability" },
    {
      icon: BarChart3, title: "SEO Analytics & Reporting", desc: "Transparent monthly reports with traffic, rankings, and performance insights.",
    },
    {
      icon: ShieldCheck, title: "Local SEO", desc: "Optimize Google Business Profile and local listings to attract nearby customers.",
    },
  ]

  const whyChooseUs = [
    "Experienced SEO Specialists",
    "In-Depth Keyword Research",
    "White-Hat SEO Techniques",
    "Technical & On-Page Optimization",
    "High-Quality Link Building",
    "Transparent Monthly Reporting",
  ]

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
      <section className="relative min-h-[90vh] flex items-start pt-12 overflow-hidden bg-[#fafafa]">
        {/* Technical Background Design */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 mt-24">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Narrative (Text Upwards) */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <Sparkles className="w-3 h-3" /> MP's Leading SEO Architecture
              </div>
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Rank Higher <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">& Grow Organically</span>.
              </h1>
              <p className="text-lg sm:text-xl text-slate-500 max-w-xl leading-relaxed font-medium italic">
                "We help businesses in Bhopal & Jabalpur dominate search engine rankings and generate quality leads through result-driven SEO solutions."
              </p>
              <div className="flex justify-start pt-4">
                <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105" onClick={() => navigate("/contact")}>
                  Get Free SEO Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Visual Evidence (SEO Dashboard) */}
            <motion.div initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.3, duration: 1 }} className="lg:col-span-5 relative hidden lg:block">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl rounded-[3rem] animate-pulse" />
                <div className="relative z-10 bg-white p-3 rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571721795195-a2cb2d33e00d"
                    alt="SEO Performance Dashboard"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg">
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Visibility Increase</p>
                    <p className="text-xl font-black text-slate-900">+300% Organic</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900 leading-none">Why Choose Our <span className="text-primary font-serif font-medium italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">SEO Strategy</span>?</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto italic border-l-4 border-primary/30 pl-6">Built for measurable, ethical growth in the Madhya Pradesh digital ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((point, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden h-64 flex flex-col justify-between">
                <span className="absolute top-4 right-6 text-7xl font-black text-slate-50 group-hover:text-primary/5 transition-colors italic select-none">0{index + 1}</span>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"><ShieldCheck size={24} /></div>
                <p className="font-extrabold text-xl tracking-tight text-slate-900 leading-tight">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEO matters */}
      <section className="py-24 px-4 bg-background overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 italic">Why SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic pr-2">Matters</span> </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed italic">
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
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        {/* Atmospheric Background Textures */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Soft Mesh Glows */}
          <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-orange-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] block"
            >
              Precision Engineering
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900 leading-none">
              Our SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-serif font-medium">Architecture</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic mt-6">
              Data-backed strategies designed to conquer search rankings across the MP digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col justify-between"
              >

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed italic text-sm group-hover:text-slate-700">
                    {service.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 w-10 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        quote="Optimized for search. Built for visibility. Designed for growth."
      />

      {/* Final CTA */}
      <section className="my-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative p-12 md:p-24 bg-gradient-to-br from-blue-600 via-primary to-orange-500 text-center rounded-[4rem] shadow-2xl overflow-hidden border-none text-white"
          >
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.pattern')] opacity-20 pointer-events-none" />

            {/* Atmospheric Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8 leading-tight">
                Ready to Rank #1 <br /> on Google?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium italic">
                "Get a comprehensive SEO audit and a custom-built growth strategy for your brand in <span className="underline decoration-white/30 underline-offset-8">Bhopal & Jabalpur</span>."
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full h-16 px-12 text-xl font-bold bg-white text-primary border-none shadow-xl hover:scale-110 transition-all hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Claim Your Free Audit
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteSEO;
