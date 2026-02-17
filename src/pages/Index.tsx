import { Link, useNavigate } from "react-router-dom";
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
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();
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

      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-left sm:text-center max-w-5xl mx-auto space-y-10 mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-black sm:pt-9"
            >
              MP's Fastest Growing Digital Marketing and IT Company in Jabalpur & Bhopal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl text-gray-800 font-medium"
            >
              <i>Empowering businesses digitally</i>
            </motion.p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-accent-foreground font-semibold text-base px-8 py-6 rounded-full shadow-lg"
              onClick={() => navigate("/contact")}
            >
              Let's Talk!
            </Button>
          </div>
          
          <h2 className=" text-3xl sm:text-4xl font-bold text-center py-8 sm:p-8 mt-16 md:mt-32 text-gray-800">
            Give a lookout at our, let’s talk about numbers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-md text-muted-foreground mb-1">
                      Revenue
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      0X to 5X
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-md text-muted-foreground mb-1">
                      Leads
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      10,000+
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Megaphone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-md text-muted-foreground mb-1">
                      Social Media Engagement
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      10M+
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-md text-muted-foreground mb-1">
                      Business worked with
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      50+
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display  text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Bhopal & Jabalpur’s Fastest Growing Digital Marketing & IT Company
            </h2>
            <p className="text-xl font-medium text-muted-foreground leading-relaxed">
              <i>"Built for Real, Measurable Growth"</i>
            </p>
          </div>

          <div className="text-lg space-y-10 mb-20 lg:px-10 xl:px-24 text-gray-600">
            <div className="grid md:grid-cols-12 grid-cols-1 space-y-10 px-7">
              <div className="col-span-7 flex items-center">
                <div className="space-y-5 pt-4">
                  <p>
                    At <b>Socio Bhaarat</b>, we take pride in being recognized as{" "}
                    <b>
                      Bhopal & Jabalpur’s Fastest-Growing Digital Marketing & IT
                      Agency - built for real, measurable growth.
                    </b>{" "}
                    As a homegrown company deeply rooted in the heart of Madhya
                    Pradesh, we combine creativity, technology, research, and
                    performance-driven strategies to help businesses scale faster
                    in today’s competitive digital era.
                    Our journey, which began
                    in 2022, has transformed into a trusted digital partner for{" "}
                    <b>50+ brands</b> across industries including real estate,
                    retail, fashion, healthcare, manufacturing, education, and
                    local businesses in MP.
                  </p>
                  <p>
                    &nbsp; &nbsp;&nbsp;With offices based in <b>Bhopal</b>{" "}
                    and <b>Jabalpur</b>, we’ve become a preferred choice for
                    businesses searching for the best digital marketing agency in
                    Bhopal, top digital marketing services in Jabalpur, or a
                    reliable IT company in Central India that understands the
                    region’s evolving market landscape.
                  </p>
                </div>
              </div>
              <div className="col-span-5 flex justify-center">
                <img
                  src="./images/IndexPageImg.webp"
                  className="w-full lg:w-[80%] object-contain rounded-xl"
                />
              </div>
            </div>
            <p className="px-7">
              Socio Bhaarat is built on one strong belief - digital growth
              should be data-backed, strategic, transparent, and effortless for
              business owners. While most agencies focus only on creating
              digital presence, we focus on creating digital impact. Our team of
              certified digital marketers, creative designers, full-stack
              developers, ad specialists, strategists, and brand consultants
              work closely with clients to deliver solutions that are not only
              aesthetically strong but also revenue-oriented. With expertise in
              Meta Ads (Facebook & Instagram Ads), Google Ads, Online Reputation
              Management (ORM), Website SEO, Google SEO, Social Media
              Management, Branding, Website Development, we ensure that every
              business we partner with experiences tangible growth — whether
              that means more leads, higher sales, stronger brand awareness, or
              an improved digital identity.
            </p>

            <p className="px-7">
              Socio Bhaarat provides personalized digital strategies that are
              tailored to the region, the audience, and your business goals.
              This localized expertise, combined with national-level digital
              capabilities, positions us as the best digital marketing company
              in Bhopal, top IT service provider in Jabalpur, and a reliable,
              growth-focused digital partner trusted across MP. Over the years,
              Socio Bhaarat has helped businesses achieve measurable growth
              across platforms. Our clients have experienced increased lead
              quality, better customer engagement, improved ROAS, and higher
              brand recognition. Many of our long-term clients have grown from
              small ventures to fast-scaling businesses under our digital
              guidance. We have successfully handled 500+ advertising campaigns,
              created 1000+ designs, developed 20+ websites, and delivered
              consistent results for brands of all sizes. Our strong grasp of
              local consumer psychology, combined with advanced digital
              expertise, makes us a powerful growth partner for businesses
              across MP.
            </p>
          </div>

          <section className="py-20 sm:px-6 lg:px-8 bg-background">
            <div className="mx-auto max-w-5xl space-y-10">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Why Your Business Needs Digital Marketing in Today’s
                  Competitive Market
                </h2>
                <p className="text-lg text-black  mx-auto">
                  <i>"Your customer’s journey has completely shifted online — and
                  if your business is not visible where they spend their time,
                  you're losing potential clients every day."</i>
                </p>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p>
                  Running a business today is very different from what it was 5,
                  10, or 15 years ago. Earlier, customers discovered brands
                  through word of mouth, newspapers, hoardings, or walk-ins. But
                  today, their first step is digital. Before buying anything —
                  whether it’s jewellery, clothes, a home, hiring a service,
                  booking an appointment, or choosing a brand — people first:
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 text-base list-none">
                  {[
                    "Search on Google",
                    "Check reviews",
                    "Browse on Instagram",
                    "Look for offers on Facebook",
                    "Watch videos on YouTube",
                    "Message businesses on WhatsApp",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p>
                  Your customer’s journey has shifted online — and if your
                  business is not visible where they are, you're losing
                  customers without even realizing it.
                </p>

                <p className="font-semibold text-xl mt-6">
                  Digital marketing helps your business:
                </p>

                <ul className="space-y-3 text-base">
                  {[
                    "Reach the right audience at the right time",
                    "Appear instantly on search through SEO or Google Ads",
                    "Generate high-quality leads consistently",
                    "Build credibility on social media",
                    "Increase brand recall with creative content",
                    "Track performance in real time",
                    "Spend less but gain more with targeted ads",
                    "Beat competitors with a stronger digital presence",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-accent font-bold text-xl md:ps-10">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="py-20 sm:px-6 lg:px-8 bg-muted/20">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-center font-display text-4xl sm:text-5xl font-bold text-foreground mb-12">
                How Socio Bhaarat Starts Your Growth Journey
              </h2>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6 text-lg leading-relaxed">
                  {[
                    "Step 1 — Research & Strategy: Understanding your brand, competitors, and audience.",
                    "Step 2 — Creative & Technical Setup: Designs, website improvements, and content planning.",
                    "Step 3 — Ads & SEO Execution: Meta Ads, Google Ads, keyword ranking & visibility.",
                    "Step 4 — Tracking & Optimization: Pixel, analytics, heatmaps, retargeting funnels.",
                    "Step 5 — Scaling: Once results come, we scale campaigns 2x–5x.",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-2xl">✔</span>
                      <p>{step}</p>
                    </div>
                  ))}

                  <p className="font-semibold text-xl pt-4">
                    Socio Bhaarat isn’t just a marketing company — we become
                    your digital growth partner.
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="./images/IndexPageImg2.webp"
                    alt="Growth process illustration"
                    className="w-full md:w-4/5 rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 sm:px-6 lg:px-8 bg-background">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-center font-display text-4xl sm:text-5xl font-bold text-foreground mb-10">
                Industries We Serve
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg">
                {[
                  "Real Estate",
                  "Hospitality",
                  "Retail & Fashion",
                  "Healthcare",
                  "Education",
                  "Manufacturing",
                  "Restaurants & Hotels",
                  "Coaching & Consultancies",
                  "Startups",
                  "CA Firms",
                  "Doctor’s Clinics",
                  "Advocates",
                  "Salon & Parlours",
                  "Cloth & Saree Showrooms",
                  "E-commerce",
                ].map((industry, i) => (
                  <div
                    key={i}
                    className="p-5 bg-card border border-border rounded-xl text-center shadow-sm"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 sm:px-6 lg:px-8 bg-muted/20">
            <div className="container mx-auto max-w-5xl space-y-10">
              <h2 className="text-center font-display text-4xl sm:text-5xl font-bold text-foreground">
                What Makes Us Different?
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 text-lg">
                {[
                  "50+ Businesses Served Across MP",
                  "10,000+ Leads Delivered",
                  "10M+ Social Media Engagement",
                  "500+ Ad Campaigns Managed",
                  "1000+ Creative Designs Produced",
                  "50+ Websites Developed",
                  "0x to 5x Revenue Growth Achieved",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-accent font-bold text-xl">✔</span>
                    {point}
                  </div>
                ))}
              </div>

              <p className="text-lg leading-relaxed">
                Socio Bhaarat stands out because we deliver real, measurable
                growth — not just posts or vanity metrics. Being a homegrown
                agency in Bhopal & Jabalpur, we understand local market
                behavior, consumer psychology, and MP’s business landscape
                better than anyone.
              </p>

              <div className="p-6 bg-card rounded-xl border border-border shadow-md">
                <h3 className="font-semibold text-xl mb-3">
                  Data Security & Transparency
                </h3>
                <p className="text-lg leading-relaxed">
                  Every credential provided to us is handled securely with
                  professional protocols. We ensure complete transparency with
                  monthly reports, analytics, and measurable KPIs.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 sm:px-6 lg:px-8 bg-background">
            <div className="container mx-auto max-w-4xl text-center space-y-6">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
                Digital Marketing & IT Services We Provide
              </h2>
              <p className="text-muted-foreground text-lg">
                <i>"All services listed above are included in our digital growth
                ecosystem."</i>
              </p>

              <Link to="/services">
                <Button className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold mt-8">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            Your Search for the Best Digital Marketing Agency in Bhopal &
            Jabalpur Ends Here
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            When businesses partner with Socio Bhaarat, they don’t just get
            marketing — they get a long-term digital growth engine. From
            branding to ads to IT development, we handle everything your
            business needs to grow in today’s digital-first world.
          </p>
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
