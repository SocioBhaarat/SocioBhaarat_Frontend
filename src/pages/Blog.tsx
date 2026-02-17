import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    id: "content-marketing-guide",
    title: "Complete Guide to Content Marketing in 2024",
    excerpt: "Learn how to create compelling content that drives engagement, builds brand authority, and converts visitors into loyal customers.",
    category: "Content Marketing",
    author: "Content Strategy Team",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&auto=format&fit=crop",
    readTime: "10 min read"
  },
  {
    id: "social-media-roi",
    title: "Measuring Social Media ROI: A Complete Guide",
    excerpt: "Track, measure, and optimize your social media marketing efforts with proven metrics and analytics strategies that deliver real business results.",
    category: "Social Media",
    author: "Social Media Team",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    readTime: "7 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Digital Marketing Insights & Tips
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay ahead of the curve with expert strategies, industry trends, and actionable tips
              to grow your business online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
