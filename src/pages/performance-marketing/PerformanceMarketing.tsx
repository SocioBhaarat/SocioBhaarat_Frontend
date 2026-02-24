import { Button } from "@/components/ui/button";
import { Check, BarChart, Target, DollarSign, TrendingUp, FileSearch, ShoppingCart, Briefcase, Heart, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PerformanceMarketing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="relative  pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-background to-[#eef2ff]">

        {/* Background Glow */}
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full -z-10"></div>

        <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Drive Measurable Growth with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-primary to-yellow-500 bg-clip-text text-transparent">
                Data-Driven Performance Marketing
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We create ROI-focused marketing campaigns that deliver measurable results, maximize conversions, and scale your business efficiently through strategic paid advertising and continuous optimization.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg"
                onClick={() => navigate("/contact")}
              >
                Get Free Audit
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">

            {/* Floating background card */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl scale-105 -z-10"></div>

            <img
              src="https://img.freepik.com/free-vector/performance-marketing-concept-illustration_114360-1432.jpg"
              alt="Performance Marketing Illustration"
              className="relative w-full max-w-lg mx-auto rounded-2xl"
            />
          </div>

        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">What is Performance Marketing?</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Performance marketing is a results-driven approach where you only pay when specific actions are completed—such as clicks, leads, or sales. Unlike traditional advertising, every rupee spent is tied directly to measurable outcomes.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Our performance marketing strategies leverage advanced analytics, A/B testing, and continuous optimization to maximize your return on ad spend (ROAS) and minimize customer acquisition costs (CAC).
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.2x</div>
              <p className="text-muted-foreground">Average ROAS</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">65%</div>
              <p className="text-muted-foreground">Lower CAC</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">300+</div>
              <p className="text-muted-foreground">Campaigns Managed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹50Cr+</div>
              <p className="text-muted-foreground">Ad Spend Managed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">

          <h2 className="font-display text-4xl font-bold mb-6">
            Why Sociobhaarat is the Best for Your Performance Marketing
          </h2>

          <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
            We combine advanced targeting, real-time analytics, and continuous optimization to ensure every marketing investment delivers maximum performance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "ROI-Focused Campaign Strategy",
              "Data-Driven Decision Making",
              "Advanced Audience Targeting",
              "Continuous A/B Testing",
              "Conversion Rate Optimization",
              "Transparent Reporting & Insights",
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border border-border shadow-md hover:shadow-xl transition">
                <Check className="h-6 w-6 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">

          <h2 className="font-display text-4xl font-bold mb-6">
            Why Do You Need Performance Marketing?
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Performance marketing allows businesses to track, measure, and optimize every marketing effort in real time. Unlike traditional marketing, you pay based on actual results such as clicks, leads, or conversions. With the right strategy, performance marketing ensures scalable growth, better ROI, and faster business expansion.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Measurable and trackable results",
              "Faster lead generation",
              "Higher conversion rates",
              "Budget optimization",
              "Scalable marketing growth",
            ].map((item, index) => (
              <div key={index} className="bg-primary/5 p-6 rounded-xl border border-border hover:bg-primary/10 transition">
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Performance Marketing Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: FileSearch, title: "Business Audit", desc: "Comprehensive analysis of your business, competitors, and market opportunities" },
              { icon: Target, title: "Strategy Development", desc: "Custom performance marketing strategy aligned with your goals and budget" },
              { icon: BarChart, title: "Campaign Setup", desc: "Platform setup, pixel installation, and campaign structure optimization" },
              { icon: TrendingUp, title: "Launch & Optimize", desc: "Campaign launch with continuous A/B testing and optimization" },
              { icon: DollarSign, title: "Scale & Report", desc: "Scale winning campaigns and provide detailed performance reports" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">

          <h2 className="font-display text-4xl font-bold text-center mb-16">
            Our Performance Marketing Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Google Ads Management (Search, Display, Shopping)",
              "Facebook & Instagram Ads",
              "LinkedIn Advertising",
              "YouTube Video Ads",
              "Programmatic Advertising",
              "Landing Page Optimization",
              "Conversion Rate Optimization (CRO)",
              "Retargeting & Remarketing Campaigns",
              "A/B Testing & Experimentation",
              "Analytics & Attribution Tracking",
              "Weekly Performance Reports",
              "Dedicated Account Manager",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <Check className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-semibold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Industries We Serve Best</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShoppingCart, title: "E-commerce", desc: "Drive sales and increase ROAS for online stores" },
              { icon: Briefcase, title: "B2B Services", desc: "Generate high-quality leads for service businesses" },
              { icon: Heart, title: "Healthcare", desc: "Patient acquisition and appointment bookings" },
              { icon: Home, title: "Real Estate", desc: "Property leads and site visits" },
            ].map((industry, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{industry.title}</h3>
                <p className="text-muted-foreground">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">Transparent Pricing & Payment Terms</h2>
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl mb-3">Our Pricing Model</h3>
                <p className="text-muted-foreground">We charge a management fee of 15-20% of your monthly ad spend, depending on campaign complexity and volume. Minimum monthly ad spend: ₹50,000.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Payment Terms</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>50% advance payment before campaign launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Balance 50% at month-end based on actual ad spend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ad budget is paid directly to the platform (Google, Facebook, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No long-term contracts - monthly rolling agreements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">What You Get</h3>
                <p className="text-muted-foreground">Complete campaign management, weekly reports, dedicated account manager, landing page recommendations, and continuous optimization to improve your ROAS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Get Your Free Website & Business Audit</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Discover untapped opportunities and get a custom performance marketing strategy tailored to your business.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Claim Your Free Audit Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PerformanceMarketing;
