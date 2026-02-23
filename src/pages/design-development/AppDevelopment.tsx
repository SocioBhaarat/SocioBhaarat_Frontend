import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import { Check, Code, Cpu, Layers, Rocket, Shield, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";



const AppDevelopment = () => {
  const navigate = useNavigate();

  const process = [
    "Requirement Analysis & Planning",
    "Wireframing & UI/UX Design",
    "App Development",
    "Testing & Quality Assurance",
    "Deployment (Play Store / App Store)",
    "Post-Launch Support & Updates",
  ]

  const Technologies = [
    "Flutter",
    "React Native",
    "Kotlin",
    "Swift",
    "Node.js",
    "Firebase",
    "MongoDB",
    "MySQL",
  ]

  const whyChooseUs = [
    "Experienced Mobile App Developers",
    "Custom App Solutions",
    "User-Centric UI/UX Design",
    "Cross-Platform & Native Development",
    "Secure & Scalable Architecture",
    "Timely Delivery & Transparent Process",
  ]

  const services = [
    {
      title: "Android App Development",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
    },
    {
      title: "iOS App Development",
      icon: <Layers className="h-6 w-6 text-primary" />,
    },
    {
      title: "Cross-Platform App Development",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "Hybrid App Development",
      icon: <Cpu className="h-6 w-6 text-primary" />,
    },
    {
      title: "E-commerce App Development",
      icon: <Rocket className="h-6 w-6 text-primary" />,
    },
    {
      title: "On-Demand Service Apps",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
    {
      title: "App UI/UX Design",
      icon: <Layers className="h-6 w-6 text-primary" />,
    },
    {
      title: "App Testing & QA",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
    {
      title: "App Maintenance & Updates",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Build <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Smart, Scalable & High-Performance</span> Mobile Applications
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            We design and develop user-friendly, secure, and high-performance mobile applications that enhance customer engagement, streamline operations, and drive business growth
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Start Your App Project
          </Button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Why Sociobhaarat is the Best for App Development
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
            We combine innovation, strategy, and cutting-edge technology to
            create mobile applications that deliver seamless user experiences
            and real business impact.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition"
              >
                <Check className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YOU NEED APP DEVELOPMENT */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Why Your Business Needs Mobile App Development
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A mobile app helps you increase brand visibility, improve customer
            engagement, offer personalized experiences, streamline operations,
            and generate higher revenue through direct customer interaction.
          </p>
        </div>
      </section> */}

      {/* OUR SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Our App Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition mx-auto ">
                  {service.icon}
                </div>

                <h3 className="font-semibold text-lg group-hover:text-primary transition text-center">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-bold mb-12">
            Technologies We Use
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {Technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left ">
            {process.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary mt-1" />
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        quote="From concept to code, we create apps people love to use."
      />

      <section className="my-16 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Build with WordPress?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free consultation for your WordPress development needs.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
