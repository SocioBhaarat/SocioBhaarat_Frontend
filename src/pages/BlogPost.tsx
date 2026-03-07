import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogContent: Record<string, any> = {
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
  const post = blogContent[postId || ""];

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
  const shareData = {
    title: post.title,
    text: `Check out this article: ${post.title}`,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  } catch (error) {
    console.error("Error sharing:", error);
  }
};


  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Background Engineering Mesh */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 1. NAVIGATION LAYER (Always Top) */}
      <nav className="container mx-auto max-w-6xl pt-12 px-4 relative z-20">
        <Link to="/blog" className="group inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Intelligence Stream
        </Link>
      </nav>

      {/* 2. HERO LAYER: Title & Visual Identity */}
      <header className="container mx-auto max-w-6xl px-4 py-12 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest italic">
            {post.category}
          </div>

          {/* Safari iPhone Clipping Fix for Italic Heading */}
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.95] italic mb-8">
            <span className="relative inline-block py-1 pr-4 -mr-4 overflow-visible">
              {post.title}
            </span>
          </h1>

          {/* Technical Metadata Row */}
          <div className="flex flex-wrap items-center gap-8 py-6 border-y border-slate-100">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <User className="w-4 h-4 text-primary" /> {post.author}
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <Calendar className="w-4 h-4 text-secondary" /> {post.date}
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <Clock className="w-4 h-4 text-accent" /> {post.readTime}
            </div>
          </div>
        </div>

        {/* Hero Image: Standardized SocioBhaarat Frame */}
        <div className="mt-12 relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-[3.5rem] blur-3xl opacity-50" />
          <div className="relative rounded-[2.5rem] p-3 bg-white border-2 border-slate-100 shadow-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[350px] md:h-[550px] object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </header>

      {/* 3. CORE ARCHITECTURE: Content & Sidebar */}
      <main className="container mx-auto px-4 max-w-6xl pb-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">

          <article className="lg:col-span-8">
            <div
              className="prose prose-slate max-w-none 
              prose-h2:text-2xl prose-h2:font-black prose-h2: prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-slate-900
              prose-p:text-slate-600 prose-p:text-md prose-p:leading-relaxed prose-p:mb-6 prose-p:italic prose-p:font-medium
              prose-strong:text-slate-900 prose-strong:font-black
              prose-ul:my-8 prose-ul:list-disc prose-ul:pl-5
              prose-li:text-slate-600 prose-li:mb-2 prose-li:font-medium"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Module */}
            <div className="mt-12 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">Distribute this Intelligence</p>
              <Button variant="outline"
                onClick={handleShare}
                className="rounded-full gap-2">
                <Share2 className="w-4 h-4" /> Share Post
              </Button>
            </div>
          </article>

          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-slate-200 font-black italic text-4xl select-none opacity-20">DATA</div>

              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 italic">Engineering Brief</h4>
              <p className="text-sm text-slate-500 italic font-medium leading-relaxed mb-8">
                Our lab analyzes industry shifts in real-time. This intelligence is part of the SocioBhaarat growth system.
              </p>

              <div className="space-y-4">
                <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Growth CTA</h5>
                <Link to="/contact" className="block group">
                  <div className="p-6 rounded-2xl bg-slate-900 text-white group-hover:bg-primary transition-all duration-500">
                    <p className="text-lg font-black italic tracking-tighter mb-2 leading-none">Ready to scale?</p>
                    <p className="text-xs text-slate-400 group-hover:text-white/80 transition-colors">Request a free audit today.</p>
                  </div>
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );

};

export default BlogPost;
