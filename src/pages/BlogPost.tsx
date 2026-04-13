import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { getBlogByID } from "@/services/blogService";

const blogContent = {
  "seo-trends-2026": {
    title: "Top 10 SEO Trends to Watch in 2026",
    category: "SEO Strategy",
    author: "Digital Marketing Team",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1674027001834-719c347d1eca?w=800&auto=format&fit=crop",
    content: `
      <h2>Introduction to SEO in 2024</h2>
      <p>Search Engine Optimization continues to evolve at a rapid pace, with Google and other search engines constantly updating their algorithms. Staying ahead of these changes is crucial for maintaining and improving your search rankings.</p>

      <h2>1. AI-Powered Content and Search</h2>
      <p>Artificial Intelligence is revolutionizing how content is created and how search engines understand user intent. Google's AI algorithms, including BERT and MUM, are becoming increasingly sophisticated at understanding context and natural language.</p>
      
      <h2>2. Core Web Vitals Optimization</h2>
      <p>Page experience signals, particularly Core Web Vitals, have become critical ranking factors. Focus on:</p>
      <ul>
        <li>Largest Contentful Paint (LCP) - aim for under 2.5 seconds</li>
        <li>First Input Delay (FID) - target under 100 milliseconds</li>
        <li>Cumulative Layout Shift (CLS) - maintain below 0.1</li>
      </ul>

      <h2>3. E-E-A-T and Topical Authority</h2>
      <p>Google's focus on Experience, Expertise, Authoritativeness, and Trustworthiness has intensified. Building topical authority through comprehensive, expert content is more important than ever.</p>

      <h2>4. Voice Search Optimization</h2>
      <p>With the rise of smart speakers and voice assistants, optimizing for voice search queries has become essential. Focus on natural language, long-tail keywords, and featured snippets.</p>

      <h2>5. Mobile-First Indexing</h2>
      <p>Google now predominantly uses mobile versions of content for indexing and ranking. Ensure your mobile site is fully optimized for performance and user experience.</p>

      <h2>Conclusion</h2>
      <p>Staying current with SEO trends is essential for digital success. By focusing on user experience, quality content, and technical optimization, you'll be well-positioned for success in 2024 and beyond.</p>
    `
  },
  "content-marketing-guide": {
    title: "Complete Guide to Content Marketing in 2026",
    category: "Content Marketing",
    author: "Content Strategy Team",
    date: "March 12, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1200&auto=format&fit=crop",
    content: `
      <h2>What is Content Marketing?</h2>
      <p>Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience.</p>

      <h2>Building Your Content Strategy</h2>
      <p>A successful content marketing strategy requires careful planning and execution:</p>
      <ul>
        <li>Define your target audience and buyer personas</li>
        <li>Set clear, measurable goals</li>
        <li>Conduct thorough keyword research</li>
        <li>Create a content calendar</li>
        <li>Establish content creation workflows</li>
      </ul>

      <h2>Content Types That Drive Results</h2>
      <p>Different content formats serve different purposes in your marketing funnel:</p>
      <ul>
        <li><strong>Blog Posts:</strong> Ideal for SEO and thought leadership</li>
        <li><strong>Videos:</strong> High engagement and shareability</li>
        <li><strong>Infographics:</strong> Complex data made digestible</li>
        <li><strong>Case Studies:</strong> Proof of your expertise and results</li>
        <li><strong>E-books & Whitepapers:</strong> Lead generation magnets</li>
      </ul>

      <h2>Distribution and Promotion</h2>
      <p>Creating great content is only half the battle. Effective distribution includes:</p>
      <ul>
        <li>Email marketing campaigns</li>
        <li>Social media promotion</li>
        <li>Influencer partnerships</li>
        <li>Paid amplification</li>
        <li>Community engagement</li>
      </ul>

      <h2>Measuring Content Marketing Success</h2>
      <p>Track these key metrics to measure your content performance:</p>
      <ul>
        <li>Organic traffic growth</li>
        <li>Engagement rates (time on page, bounce rate)</li>
        <li>Lead generation and conversion rates</li>
        <li>Social shares and backlinks</li>
        <li>ROI and revenue attribution</li>
      </ul>
    `
  },
  "social-media-roi": {
    title: "Measuring Social Media ROI: A Complete Guide",
    category: "Social Media",
    author: "Social Media Team",
    date: "March 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop",
    content: `
      <h2>Understanding Social Media ROI</h2>
      <p>Return on Investment (ROI) for social media measures the efficiency and profitability of your social media marketing efforts. It answers the crucial question: "Is our social media strategy generating real business value?"</p>

      <h2>Key Metrics to Track</h2>
      <p>To calculate social media ROI effectively, monitor these essential metrics:</p>
      <ul>
        <li><strong>Engagement Rate:</strong> Likes, comments, shares, and saves</li>
        <li><strong>Reach and Impressions:</strong> How many people see your content</li>
        <li><strong>Click-Through Rate (CTR):</strong> Traffic driven to your website</li>
        <li><strong>Conversion Rate:</strong> Actions taken (purchases, sign-ups, downloads)</li>
        <li><strong>Customer Acquisition Cost (CAC):</strong> Cost to acquire a customer</li>
        <li><strong>Customer Lifetime Value (CLV):</strong> Long-term customer worth</li>
      </ul>

      <h2>Calculating Social Media ROI</h2>
      <p>The basic formula for social media ROI is:</p>
      <p><strong>ROI = (Return - Investment) / Investment × 100</strong></p>
      <p>Where:</p>
      <ul>
        <li>Return = Revenue generated from social media</li>
        <li>Investment = Total cost of social media marketing</li>
      </ul>

      <h2>Tools for Measuring Social Media Performance</h2>
      <ul>
        <li>Google Analytics for website traffic and conversions</li>
        <li>Native platform analytics (Facebook Insights, Twitter Analytics)</li>
        <li>Social media management tools (Hootsuite, Sprout Social)</li>
        <li>UTM parameters for campaign tracking</li>
      </ul>

      <h2>Best Practices for Improving ROI</h2>
      <ul>
        <li>Set clear, measurable goals aligned with business objectives</li>
        <li>Create high-quality, engaging content consistently</li>
        <li>Target the right audience with precision</li>
        <li>Test and optimize continuously</li>
        <li>Focus on platforms where your audience is most active</li>
      </ul>
    `
  }
};

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const res = await getBlogByID(postId);
        if (res.success && res.data) {
          setPost(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
      } finally {
        setLoading(false);
      }
    };
    if (postId) {
      fetchPost();
    }
  }, [postId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
        <p className="text-slate-500 font-medium">Decrypting Data...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }



  const handleShare = async () => {
    const url = window.location.href;

    // Try native share (mostly mobile)
    if (navigator.share && /Mobi|Android/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: post.title,
          text: `Check out this article: ${post.title}`,
          url,
        });
        return;
      } catch (error) {
        // user cancelled — do nothing
        return;
      }
    }

    
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API blocked — last resort
      const el = document.createElement("input");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };


  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Navigation */}
      <nav className="container mx-auto max-w-6xl pt-10 px-4 relative z-20">
        <Link
          to="/blog"
          className="group inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </nav>

      {/* Hero */}
      <header className="container mx-auto max-w-6xl px-4 pt-8 pb-10 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-slate-900 text-white text-[10px] font-semibold uppercase tracking-widest">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 py-5 border-y border-slate-100">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-700">
              <User className="w-3.5 h-3.5 text-primary" /> {post.author}
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-700">
              <Calendar className="w-3.5 h-3.5 text-primary" /> {post.date}
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-700">
              <Clock className="w-3.5 h-3.5 text-primary" /> {post.readTime}
            </div>
          </div>
        </div>

      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-6xl pb-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-16">

          {/* Article */}
          <article className="lg:col-span-8 min-w-0 overflow-x-hidden">

            {/* Cover Image — compact, inside article column */}
            {post.image && (
              <div className="mb-8 rounded-2xl overflow-hidden border border-slate-100 shadow-md group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[220px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            )}

            <div
              className="
            blog-content overflow-x-hidden
            prose prose-slate max-w-none

            prose-h1:text-3xl prose-h1:font-bold prose-h1:text-slate-900 prose-h1:mt-10 prose-h1:mb-4 prose-h1:leading-snug
            prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-10 prose-h2:mb-4 prose-h2:leading-snug
            prose-h3:text-xl prose-h3:font-semibold prose-h3:text-slate-800 prose-h3:mt-8 prose-h3:mb-3

            prose-p:text-slate-800 prose-p:text-base prose-p:leading-[1.85] prose-p:mb-5

            prose-strong:text-slate-900 prose-strong:font-semibold
            prose-em:text-slate-600

            prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary/80

            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-5
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-5
            prose-li:text-slate-600 prose-li:mb-2 prose-li:leading-relaxed

            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-5 prose-blockquote:italic prose-blockquote:text-slate-500 prose-blockquote:my-8

            prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-5 prose-pre:overflow-x-auto prose-pre:text-sm prose-pre:my-8
            prose-code:text-primary prose-code:bg-primary/8 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-medium

            prose-img:rounded-xl prose-img:shadow-md prose-img:my-8 prose-img:w-full prose-img:h-auto

            prose-table:text-sm prose-table:w-full
            prose-th:bg-slate-100 prose-th:text-slate-700 prose-th:font-semibold prose-th:text-left prose-th:px-4 prose-th:py-3
            prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-slate-100 prose-td:text-slate-600
          "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Module */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Found this helpful?</p>
                <p className="text-sm text-slate-500">Share it with your network.</p>
              </div>
              <Button
                variant="outline"
                onClick={handleShare}
                className="rounded-full gap-2 transition-all duration-200 flex-shrink-0"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="font-semibold text-green-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    Share Post
                  </>
                )}
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">

              {/* About Card */}
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-7 overflow-hidden relative">
                <div className="absolute top-3 right-4 text-slate-200 font-bold italic text-3xl select-none opacity-30 pointer-events-none">
                  INFO
                </div>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-3">
                  About This Post
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our team analyzes industry shifts in real-time. This article is part of the SocioBhaarat growth intelligence system.
                </p>
              </div>

              {/* CTA Card */}
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <Link to="/contact" className="block group">
                  <div className="p-7 bg-slate-900 text-white group-hover:bg-primary transition-all duration-500">
                    <p className="text-lg font-bold leading-snug mb-2">
                      Ready to grow your business?
                    </p>
                    <p className="text-sm text-slate-400 group-hover:text-white/70 transition-colors leading-relaxed">
                      Get a free digital marketing audit tailored to your business goals.
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60 group-hover:text-white/90 transition-colors">
                      Request Audit <ArrowLeft className="w-3 h-3 rotate-180" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Tags (if available) */}
              {post.tags?.length > 0 && (
                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-7">
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400 mb-4">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-medium text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </aside>

        </div>
      </main>
    </div>
  );

};

export default BlogPost;