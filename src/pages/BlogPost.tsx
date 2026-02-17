import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogContent: Record<string, any> = {
  "seo-trends-2024": {
    title: "Top 10 SEO Trends to Watch in 2024",
    category: "SEO Strategy",
    author: "Digital Marketing Team",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&auto=format&fit=crop",
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
    title: "Complete Guide to Content Marketing in 2024",
    category: "Content Marketing",
    author: "Content Strategy Team",
    date: "March 12, 2024",
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
    date: "March 10, 2024",
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

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover"
        />
      </div>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <div className="mb-6">
          <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>

        <h1 className="text-5xl font-bold text-foreground mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{post.date}</span>
          </div>
          <span>{post.readTime}</span>
          <Button variant="outline" size="sm" className="ml-auto">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        <div 
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-bold mb-4">Ready to grow your business?</h3>
          <p className="text-muted-foreground mb-6">
            Get expert digital marketing strategies tailored to your business goals.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
