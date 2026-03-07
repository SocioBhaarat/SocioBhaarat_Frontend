import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, BookOpen, ArrowUpRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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
  return (
    <div className="min-h-screen bg-background">
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

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
              Digital Marketing <br />
              <span className="relative inline-block py-1 pr-4 -mr-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase overflow-visible">
                Insights & Tips
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium italic border-x-4 border-primary/10 px-8">
              "Stay ahead of the curve with expert strategies, industry trends, and actionable tips to grow your business online."
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>
      <section className="py-20 md:px-4 bg-white relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -8 }}
                className="relative p-[2px] rounded-[2.5rem] overflow-hidden group bg-transparent transition-all duration-500 border"
              >

                <Card className="relative bg-white border-slate-100 rounded-[2.4rem] h-full overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                  {/* Image Module: Standardized Lab Radius */}
                  <div className="relative h-56 overflow-hidden m-3 rounded-[2rem]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-900/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/20">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-8 pt-4">
                    {/* Technical Metadata Row */}
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 italic">
                      <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" /> {post.date}</div>
                      <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-secondary" /> {post.readTime}</div>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary">
                      {post.title}
                    </h3>

                    <p className="text-slate-500 text-sm italic font-medium leading-relaxed border-l-2 border-primary/10 pl-4 mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <User className="w-3.5 h-3.5 text-accent" />
                        <span>{post.author}</span>
                      </div>

                      <Link to={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="group/btn text-[10px] font-black tracking-widest uppercase hover:bg-primary hover:text-white rounded-full transition-all">
                          Decrypt More
                          <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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
  );
};

export default Blog;
