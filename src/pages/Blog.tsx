import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { getAllBlogs } from "@/services/blogService";
import { Calendar, User, ArrowRight, BookOpen, ArrowUpRight, Clock, Search, ChevronDown, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const blogPosts = [
  {
    id: "content-marketing-guide",
    title: "Complete Guide to Content Marketing in 2026",
    excerpt: "Learn how to create compelling content that drives engagement, builds brand authority, and converts visitors into loyal customers.",
    category: "Content Marketing",
    author: "Content Strategy Team",
    date: "March 12, 2026",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&auto=format&fit=crop",
    readTime: "10 min read"
  },
  {
    id: "social-media-roi",
    title: "Measuring Social Media ROI: A Complete Guide",
    excerpt: "Track, measure, and optimize your social media marketing efforts with proven metrics and analytics strategies that deliver real business results.",
    category: "Social Media",
    author: "Social Media Team",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    readTime: "7 min read"
  },
  {
    id: "seo-trends-2026",
    title: "Top 10 SEO Trends to Watch in 2026",
    excerpt: "Track, measure, and optimize your SEO strategy with emerging 2026 search trends, evolving algorithms, and data-driven insights that help improve visibility, rankings, and sustainable organic traffic growth.",
    category: "SEO Strategy",
    author: "Digital Marketing Team",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1674027001834-719c347d1eca?w=800&auto=format&fit=crop",
    readTime: "8 min read"
  },
];

const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getAllBlogs();
        if (res.success && res.data) {
          setBlogs(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <SEO
        title="Digital Marketing Blog | Insights & Tips | Socio Bhaarat"
        description="Explore expert insights, marketing strategies, SEO tips, and growth hacks to scale your business online."
        keywords="digital marketing blog, seo tips, growth hacks, content marketing, marketing blog in jabalpur"
      />
      <div className="min-h-screen bg-background">
        <section className="relative pt-14 pb-32 px-4 overflow-hidden bg-[#fafafa]">

          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient-slow" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>
          <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] bg-blue-600/[0.06] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-80px] left-[-80px] w-[360px] h-[360px] bg-orange-500/[0.05] rounded-full blur-[90px] pointer-events-none" />

          {/* Floating chips */}
          {[
            { label: "SEO Tips", pos: "top-20 left-[1%]", color: "text-blue-600 border-blue-100 bg-blue-50", delay: 0 },
            { label: "Growth Hacks", pos: "bottom-40 left-[3%]", color: "text-slate-500 border-slate-100 bg-white", delay: 0.8 },
            { label: "Ad Strategies", pos: "top-16 right-[38%]", color: "text-violet-600 border-purple-100 bg-purple-50", delay: 1.4 },
          ].map((c) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: c.delay + 0.5, duration: 0.5 },
                y: { delay: c.delay, duration: 3.5 + c.delay * 0.3, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`absolute hidden xl:block px-4 py-2 rounded-full border text-[10px] font-bold pointer-events-none z-10 shadow-sm ${c.pos} ${c.color}`}
            >
              {c.label}
            </motion.div>
          ))}

          <div className="container mx-auto max-w-6xl relative z-10">

            {/* Top row — badge + stats */}
            <div className="flex items-center justify-between mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-primary text-[10px] font-black tracking-[0.3em] uppercase shadow-sm">
                <BookOpen className="w-3 h-3" /> Intelligence Stream
              </div>
            </div>

            {/* Main grid */}
            <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-center">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6"
              >
                <p className="text-base font-bold uppercase tracking-[.1em] text-slate-400">
                  Digital Marketing Blog
                </p>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[0.95] tracking-tighter">
                  Digital Marketing <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                    Insights & Tips
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed font-semibold">
                  Stay ahead of the curve with expert strategies, industry trends, and
                  actionable tips to grow your business online.
                </p>
              </motion.div>

              {/* RIGHT — single featured card only */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="hidden lg:block"
              >
                <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xl group cursor-pointer">

                  {/* Card image / header */}
                  <div className="relative h-[200px] bg-gradient-to-br from-[#1e3a6e] via-blue-600 to-violet-600 flex flex-col justify-end p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    {/* Ghost icon watermark */}
                    <BookOpen className="absolute top-4 right-4 w-20 h-20 text-white opacity-[0.06]" />
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-white text-[9px] font-bold uppercase tracking-[.15em] mb-3">
                        <Zap size={8} /> Featured Article
                      </div>
                      <h3 className="font-display text-lg font-extrabold text-white leading-snug">
                        Complete Guide to Content Marketing in 2026
                      </h3>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col gap-4">

                    {/* Tags */}
                    <div className="flex gap-2">
                      <span className="text-[9px] font-bold uppercase tracking-[.12em] px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        Content Marketing
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 italic leading-relaxed">
                      Learn how to create compelling content that drives engagement, builds brand authority, and converts visitors into loyal customers.
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-[8px] font-black text-primary">SB</span>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-400">
                          Socio Bhaarat · 5 min read
                        </span>
                      </div>
                      <Link to={"/blog/content-marketing-guide"}>
                        <span className="text-[10px] font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-200"

                        >

                          Read Article <ArrowRight size={11} />
                        </span>
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        </section>

        <section className="py-20 md:px-4 bg-white relative">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 text-slate-500">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-sm font-medium text-slate-500">Loading articles...</p>
                </div>
              ) : blogs.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <Card className="relative bg-white border border-slate-200 rounded-2xl h-full overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">

                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Gradient overlay for category badge readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white text-slate-800 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider shadow-sm border border-slate-100">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Metadata Row */}
                      <div className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-wider text-slate-700 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-700 font-medium text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-xs font-semibold text-slate-600">{post.author}</span>
                        </div>

                        <Link to={`/blog/${post.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs font-semibold tracking-wide text-primary hover:bg-primary hover:text-white rounded-full px-4 transition-all duration-300"
                          >
                            Read More
                            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>

  );
};


const anotherBlog = () => {
  return (
    <div>
      <section className="relative pt-12 pb-32 px-4 overflow-hidden bg-[#fafafa]">
        {/* Engineering Grid Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient-slow" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-sm">
              <BookOpen className="w-3 h-3" /> Intelligence Stream
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[0.95] tracking-tighter mb-8">
              Digital Marketing <br />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                Insights & Tips
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-semibold  px-8">
              "Stay ahead of the curve with expert strategies, industry trends, and actionable tips to grow your business online."
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>
      <section className="relative pt-12 pb-32 px-4 overflow-hidden bg-[#fafafa]">

        {/* Background — unchanged */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient-slow" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Floating card — top left */}
        {/* Floating card — top left */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 0.8, duration: 0.6 },
            y: { delay: 0.8, duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-12 left-[4%] hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-100 shadow-lg z-10 pointer-events-none"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
            <BookOpen size={15} />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Total Articles</p>
            <p className="text-sm font-black text-slate-900 leading-none">50+ Guides</p>
          </div>
        </motion.div>

        {/* Floating card — top right */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 0.9, duration: 0.6 },
            y: { delay: 1.2, duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-12 right-[4%] hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-100 shadow-lg z-10 pointer-events-none"
        >
          <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
            <TrendingUp size={15} />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Always</p>
            <p className="text-sm font-black text-slate-900 leading-none">100% Free</p>
          </div>
        </motion.div>

        {/* Floating card — bottom left */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -7, 0] }}
          transition={{
            opacity: { delay: 1.0, duration: 0.6 },
            y: { delay: 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-36 left-[4%] hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-100 shadow-lg z-10 pointer-events-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Fresh Content</p>
            <p className="text-sm font-black text-slate-900 leading-none">Updated Weekly</p>
          </div>
        </motion.div>

        {/* Floating card — bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -9, 0] }}
          transition={{
            opacity: { delay: 1.1, duration: 0.6 },
            y: { delay: 1.8, duration: 3.2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-36 right-[4%] hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-100 shadow-lg z-10 pointer-events-none"
        >
          <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0">
            <Zap size={15} />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Topics Covered</p>
            <p className="text-sm font-black text-slate-900 leading-none">10+ Categories</p>
          </div>
        </motion.div>

        {/* Main content — completely unchanged */}
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-sm">
              <BookOpen className="w-3 h-3" /> Intelligence Stream
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[0.95] tracking-tighter mb-8">
              Digital Marketing <br />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                Insights & Tips
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-semibold px-8">
              "Stay ahead of the curve with expert strategies, industry trends, and
              actionable tips to grow your business online."
            </p>
          </motion.div>
        </div>

        {/* Bottom fade — unchanged */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>
    </div>
  )
}

export default Blog;
