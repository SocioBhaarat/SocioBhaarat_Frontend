import { Button } from "@/components/ui/button";
import { Check, BarChart, Target, DollarSign, TrendingUp, FileSearch, ShoppingCart, Briefcase, Heart, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PerformanceMarketing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-6  pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-background to-[#eef2ff]">

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
              {
                icon: Target,
                title: "ROI-Focused Campaign Strategy",
                desc: "Every campaign is built with profitability in mind, ensuring your marketing spend directly contributes to revenue growth."
              },
              {
                icon: BarChart,
                title: "Data-Driven Decision Making",
                desc: "We use real-time analytics and performance metrics to continuously optimize campaigns for maximum efficiency."
              },
              {
                icon: TrendingUp,
                title: "Advanced Audience Targeting",
                desc: "Laser-focused targeting strategies to reach high-intent users and reduce wasted ad spend."
              },
              {
                icon: FileSearch,
                title: "Continuous A/B Testing",
                desc: "We constantly test creatives, copies, and audiences to improve CTR, conversions, and ROAS."
              },
              {
                icon: DollarSign,
                title: "Conversion Rate Optimization",
                desc: "Optimized landing pages and funnels that convert traffic into qualified leads and sales."
              },
              {
                icon: Briefcase,
                title: "Transparent Reporting & Insights",
                desc: "Detailed weekly reports with actionable insights so you always know where your money goes."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-background via-secondary/5 to-primary/10 border border-border shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition">
                  <item.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full -z-10"></div>

        <div className="container mx-auto max-w-6xl text-center">

          <h2 className="font-display text-4xl font-bold mb-6">
            Why Do You Need Performance Marketing?
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
            Performance marketing allows businesses to track, measure, and optimize every campaign in real time. You pay only for measurable actions like clicks, leads, or sales — ensuring better ROI, controlled budgets, and scalable business growth.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

            {[
              {
                icon: BarChart,
                title: "Measurable Results",
                desc: "Track every click, lead, and conversion with real-time analytics and performance dashboards."
              },
              {
                icon: Target,
                title: "Faster Lead Generation",
                desc: "Reach high-intent audiences instantly and generate qualified leads consistently."
              },
              {
                icon: TrendingUp,
                title: "Higher Conversions",
                desc: "Optimized funnels and A/B testing strategies to maximize your conversion rates."
              },
              {
                icon: DollarSign,
                title: "Budget Optimization",
                desc: "Allocate budget efficiently by scaling winning campaigns and cutting wasted spend."
              },
              {
                icon: Briefcase,
                title: "Scalable Growth",
                desc: "Expand campaigns strategically while maintaining profitability and strong ROAS."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-background via-primary/5 to-secondary/10 border border-border shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-3"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition">
                  <item.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>



      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full -z-10"></div>

        <div className="container mx-auto max-w-7xl">

          <h2 className="font-display text-4xl font-bold mb-20 text-center">
            Our Performance Marketing Process
          </h2>

          <div className="grid md:grid-cols-5 gap-10 relative">

            {[
              {
                icon: FileSearch,
                title: "Business Audit",
                desc: "We analyze your business model, competitors, audience behavior, and market opportunities to build a strong foundation.",
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                icon: Target,
                title: "Strategy Development",
                desc: "We craft a customized paid media strategy aligned with your revenue goals and budget allocation.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: BarChart,
                title: "Campaign Setup",
                desc: "Ad account structure, pixel tracking, audience segmentation, and conversion tracking setup.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: TrendingUp,
                title: "Launch & Optimize",
                desc: "Campaign launch with ongoing A/B testing, bid adjustments, and creative optimization.",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: DollarSign,
                title: "Scale & Report",
                desc: "We scale profitable campaigns and provide transparent weekly performance reports.",
                gradient: "from-yellow-500 to-amber-600"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-background via-secondary/5 to-primary/10 border border-border shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-3 backdrop-blur"
              >

                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background px-4 py-1 text-xs font-bold rounded-full border border-border shadow-sm">
                  0{index + 1}
                </div>

                {/* Icon Wrapper (Perfect Centering) */}
                <div className="flex justify-center w-full">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>

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
              {
                icon: Target,
                title: "Google Ads Management",
                desc: "Search, Display & Shopping campaigns optimized for high-intent traffic and maximum ROI."
              },
              {
                icon: TrendingUp,
                title: "Meta Ads (Facebook & Instagram)",
                desc: "Creative-driven campaigns designed to generate leads and boost brand visibility."
              },
              {
                icon: Briefcase,
                title: "LinkedIn Advertising",
                desc: "B2B lead generation campaigns targeting decision-makers and professionals."
              },
              {
                icon: BarChart,
                title: "YouTube Video Ads",
                desc: "Engaging video campaigns that increase brand awareness and conversions."
              },
              {
                icon: DollarSign,
                title: "Retargeting Campaigns",
                desc: "Re-engage visitors and turn warm prospects into paying customers."
              },
              {
                icon: FileSearch,
                title: "Analytics & CRO",
                desc: "In-depth tracking, attribution modeling, and landing page optimization."
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-background via-secondary/5 to-primary/10 border border-border shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-3 backdrop-blur"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-center mb-6 shadow-lg group-hover:rotate-6 transition">
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/30">

        {/* Soft Background Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full -z-10"></div>

        <div className="container mx-auto max-w-6xl">

          <h2 className="font-display text-4xl font-bold mb-16 text-center">
            Industries We Serve Best
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {
                icon: ShoppingCart,
                title: "E-commerce",
                desc: "Scale online stores with high-converting ad funnels, dynamic retargeting, and optimized ROAS strategies.",
                gradient: "from-pink-500 to-orange-500"
              },
              {
                icon: Briefcase,
                title: "B2B Services",
                desc: "Generate qualified leads and book appointments with precision-targeted LinkedIn and Google campaigns.",
                gradient: "from-blue-600 to-indigo-600"
              },
              {
                icon: Heart,
                title: "Healthcare",
                desc: "Increase patient bookings and consultations through localized and intent-based ad campaigns.",
                gradient: "from-rose-500 to-red-500"
              },
              {
                icon: Home,
                title: "Real Estate",
                desc: "Drive property inquiries and site visits using hyper-targeted ads and smart remarketing funnels.",
                gradient: "from-emerald-500 to-teal-500"
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-background via-secondary/5 to-primary/10 border border-border shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-3 backdrop-blur"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition`}
                >
                  <industry.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-4 text-center">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {industry.desc}
                </p>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition"></div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">Transparent Pricing & Payment Terms</h2>
          <div className="bg-gradient-to-br from-background via-secondary/5 to-primary/10 p-8 rounded-lg shadow-lg border border-border">
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
