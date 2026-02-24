import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Award,
  Clock,
  TrendingUp,
  Palette,
  Target,
  Megaphone,
  Code,
  BarChart,
  Briefcase,
  Building2,
  Factory,
  FileText,
  GraduationCap,
  HeartPulse,
  Hotel,
  Rocket,
  Scale,
  Scissors,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Stethoscope,
  Utensils,
  Globe,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  // const Industries = [
  //   { name: "Real Estate", icon: Building2 },
  //   { name: "Hospitality", icon: Hotel },
  //   { name: "Retail & Fashion", icon: ShoppingBag },
  //   { name: "Healthcare", icon: HeartPulse },
  //   { name: "Education", icon: GraduationCap },
  //   { name: "Manufacturing", icon: Factory },
  //   { name: "Restaurants & Hotels", icon: Utensils },
  //   { name: "Coaching & Consultancies", icon: Briefcase },
  //   { name: "Startups", icon: Rocket },
  //   { name: "CA Firms", icon: FileText },
  //   { name: "Doctor’s Clinics", icon: Stethoscope },
  //   { name: "Advocates", icon: Scale },
  //   { name: "Salon & Parlours", icon: Scissors },
  //   { name: "Cloth & Saree Showrooms", icon: Shirt },
  //   { name: "E-commerce", icon: ShoppingCart },
  // ]
  const industries = [
    {
      name: "Real Estate",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    },
    {
      name: "Hospitality",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },
    {
      name: "Retail & Fashion",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    },
    {
      name: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1580281657527-47f249e8f4df",
    },
    {
      name: "Education",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    },
    {
      name: "Manufacturing",
      image:
        "https://images.unsplash.com/photo-1581091215367-59ab6b3a4c4d",
    },
    {
      name: "Restaurants & Hotels",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    },
    {
      name: "Coaching & Consultancies",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      name: "Startups",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692",
    },
    {
      name: "CA Firms",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    },
    {
      name: "Doctor’s Clinics",
      image:
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
    },
    {
      name: "Advocates",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    },
    {
      name: "Salon & Parlours",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
    },
    {
      name: "Cloth & Saree Showrooms",
      image:
        "https://images.unsplash.com/photo-1520975922284-6b6b5a9b3f65",
    },
    {
      name: "E-commerce",
      image:
        "https://images.unsplash.com/photo-1515169067865-5387ec356754",
    },
  ];
  const services = [
    {
      icon: <Megaphone className="h-7 w-7" />,
      title: "Social Media Marketing",
      description:
        "Build your brand presence across all major social platforms with engaging content.",
      features: [
        "Content Strategy",
        "Community Management",
        "Paid Advertising",
        "Analytics & Reporting",
      ],
      gradient: "orange" as const,
    },
    {
      icon: <Palette className="h-7 w-7" />,
      title: "Graphic Designing",
      description:
        "Create stunning visual identities that capture your brand essence.",
      features: [
        "Brand Identity",
        "Marketing Materials",
        "UI/UX Design",
        "Print Design",
      ],
      gradient: "blue" as const,
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Performance Marketing",
      description:
        "Data-driven marketing strategies that focus on measurable results.",
      features: [
        "Campaign Optimization",
        "A/B Testing",
        "Conversion Tracking",
        "ROI Analysis",
      ],
      gradient: "green" as const,
    },
    {
      icon: <Code className="h-7 w-7" />,
      title: "Web Development",
      description:
        "Custom websites that drive conversions and deliver exceptional user experiences.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Integration",
        "SEO Optimization",
      ],
      gradient: "orange" as const,
    },
    {
      icon: <BarChart className="h-7 w-7" />,
      title: "Content Marketing",
      description:
        "Engaging content that tells your story and connects with your audience.",
      features: [
        "Blog Writing",
        "Video Production",
        "Email Marketing",
        "Content Strategy",
      ],
      gradient: "blue" as const,
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "SEO Services",
      description:
        "Improve your search rankings and drive organic traffic to your business.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Link Building",
        "Technical SEO",
      ],
      gradient: "green" as const,
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Projects Completed",
      icon: <Award className="h-6 w-6" />,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Clock className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 sm:top-30 md:top-40 lg:top-60 xl:top-70 z-[-10] opacity-[1] top-32 shadow-sm">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dtlqkeane/video/upload/q_auto:good,f_mp4,vc_h264,br_1200k,w_1280,fps_24/3141208-uhd_3840_2160_25fps_evhgy7.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/40" />
      </div>

      <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto space-y-8 mb-24">

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
            >
              MP’s Fastest Growing{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Digital Marketing & IT Company
              </span>{" "}
              in Jabalpur & Bhopal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl sm:text-2xl text-muted-foreground font-medium italic"
            >
              Empowering businesses digitally.
            </motion.p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Let’s Talk
            </Button>
          </div>

          {/* Numbers Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Let’s Talk About{" "}
              <span className="text-primary">Numbers</span>
            </h2>
            <p className="text-muted-foreground mt-3">
              Real results. Measurable growth. Proven impact.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { icon: TrendingUp, label: "Revenue Growth", value: "0X → 5X" },
              { icon: Users, label: "Leads Generated", value: "10,000+" },
              { icon: Megaphone, label: "Social Media Engagement", value: "10M+" },
              { icon: Target, label: "Businesses Worked With", value: "50+" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={i}
                  className="border border-border bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <div className="text-3xl font-bold text-foreground">
                      {item.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

          </div>

        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-foreground leading-tight">
              Bhopal & Jabalpur’s{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Fastest Growing Digital Marketing & IT Company
              </span>
            </h2>

            <p className="text-lg italic text-muted-foreground">
              Built for real, measurable growth.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                <strong>Socio Bhaarat</strong> is a performance-driven digital
                marketing and IT agency helping businesses scale with strategy,
                creativity, and technology. Since 2022, we’ve partnered with 50+
                brands across Madhya Pradesh to generate leads, build strong digital
                identities, and drive sustainable growth.
              </p>

              <p>
                From paid advertising and SEO to branding and website development,
                our focus is simple — deliver measurable results, not just online
                presence. We combine local market understanding with data-backed
                execution to help businesses grow faster and smarter.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="./images/IndexPageImg.webp"
                alt="Socio Bhaarat digital marketing team"
                className="w-full max-w-md rounded-2xl shadow-xl object-contain"
              />
            </div>

          </div>

        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Why Your Business Needs{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Digital Marketing
              </span>
            </h2>

            <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
              Your customers are online. If your business isn’t visible there,
              you're losing opportunities every single day.
            </p>
          </div>

          {/* Short Explanation */}
          <p className="text-lg leading-relaxed text-foreground/90 text-center">
            Today, customers search, compare, and decide online before making any purchase.
            Your digital presence directly impacts your growth, credibility, and revenue.
          </p>

          {/* Key Benefits */}
          <div className="grid sm:grid-cols-2 gap-6 text-base">
            {[
              "Reach the right audience at the right time",
              "Generate consistent high-quality leads",
              "Build trust through social proof & branding",
              "Track performance with real-time analytics",
              "Outperform competitors digitally",
              "Scale profitably with targeted ads",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto max-w-6xl">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              How Socio Bhaarat{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Starts Your Growth Journey
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A structured, data-driven approach designed to turn strategy into measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Steps */}
            <div className="relative space-y-10">

              {[
                {
                  title: "Research & Strategy",
                  desc: "We analyze your brand positioning, competitors, and target audience to craft a clear growth roadmap."
                },
                {
                  title: "Creative & Technical Setup",
                  desc: "High-converting creatives, optimized website structure, and strategic content planning."
                },
                {
                  title: "Ads & SEO Execution",
                  desc: "Meta & Google Ads, search engine optimization, and visibility strategies that drive traffic."
                },
                {
                  title: "Tracking & Optimization",
                  desc: "Pixel setup, analytics tracking, heatmaps, and retargeting funnels for continuous improvement."
                },
                {
                  title: "Scaling & Growth",
                  desc: "Once campaigns prove profitable, we strategically scale them 2x–5x for sustainable growth."
                },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-6 group">

                  {/* Step Number */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {i + 1}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Highlight Statement */}
              <div className="mt-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
                <p className="text-lg font-semibold text-foreground text-center">
                  We’re not just a marketing agency — we become your long-term digital growth partner.
                </p>
              </div>

            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="./images/IndexPageImg2.webp"
                  alt="Growth process illustration"
                  className="w-full max-w-md rounded-3xl shadow-xl object-cover"
                />
                <div className="absolute -z-10 -inset-6 bg-primary/10 blur-3xl rounded-full"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Industries <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">We Serve</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We deliver tailored digital solutions across diverse industries, helping businesses grow and scale efficiently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <div
                  key={i}
                  className="group relative p-6 bg-card/60 backdrop-blur-md border border-border rounded-2xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {industry.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      <section className="py-24 bg-muted rounded-2xl overflow-hidden">
        <div className="container mx-auto max-w-7xl">

          <div className="flex flex-col lg:flex-row">

            {/* LEFT SIDE (30%) */}
            <div className="lg:w-[30%] w-full mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mt-12">
                Industries <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">We Serve</span>
              </h2>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our digital marketing solutions meet needs of various industries.
                With advanced techniques we help businesses enhance engagement
                and drive growth.
              </p>
            </div>

            {/* RIGHT SIDE (70%) */}
            <div className="lg:w-[70%] w-full relative">

              <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
              >
                {industries.map((industry, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-[420px] rounded-3xl overflow-hidden relative shadow-xl">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/30" />

                      <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl py-3 px-5 shadow-md">
                        <h3 className="text-primary font-semibold text-lg">
                          {industry.name}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="flex gap-4 justify-end mt-6">
                <button className="prev-btn w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">
                  <ChevronLeft size={18} />
                </button>

                <button className="next-btn w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">
                  <ChevronRight size={18} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl space-y-16">

          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              What Makes Us <span className="text-primary">Different?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We focus on measurable growth, real impact, and long-term brand value — not vanity metrics.
            </p>
          </div>

          {/* Stats – Clean 2 Lines */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Businesses Served Across MP", icon: Users },
              { value: "10,000+", label: "Leads Delivered", icon: TrendingUp },
              { value: "10M+", label: "Social Media Engagement", icon: BarChart3 },
              { value: "500+", label: "Ad Campaigns Managed", icon: Megaphone },
              { value: "1000+", label: "Creative Designs Produced", icon: Palette },
              { value: "50+", label: "Websites Developed", icon: Globe },
              { value: "0x → 5x", label: "Revenue Growth Achieved", icon: Rocket },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group py-6 border-b border-border hover:border-primary transition-colors duration-300"
                >
                  <div className="flex justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {item.value}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* About Content */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Socio Bhaarat stands apart because we build scalable digital systems — not just campaigns.
              As a homegrown agency rooted in Bhopal & Jabalpur, we deeply understand local consumer
              psychology and MP’s evolving business landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl">

          {/* Heading Block */}
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Digital Marketing & IT Services{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                We Provide
              </span>
            </h2>

            <p className="text-lg text-muted-foreground">
              <span className="italic">
                All services listed above are part of our complete digital growth ecosystem.
              </span>
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Single CTA */}
          <div className="text-center mt-16">
            <Link to="/services">
              <Button
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

        {/* Soft Background Glow
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full"></div>
        </div> */}

        <div className="container mx-auto max-w-5xl">
          <div className="relative bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-10 sm:p-16 shadow-xl text-center">

            {/* Decorative Quote Mark */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-serif">
              “
            </div>

            {/* Main Quote */}
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground leading-snug">
              Marketing isn’t an expense —
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                it’s the engine that powers your growth.
              </span>
            </h2>

            {/* Supporting Line */}
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine strategy, creativity, and technology to transform brands
              into scalable digital success stories.
            </p>

          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's discuss how we can help you achieve your digital marketing
            goals.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg shadow-lg px-8 py-6 rounded-full"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
