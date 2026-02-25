import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuoteSection from "@/components/ui/QuoteSection";
import { Palette, Users, Smartphone, Zap, Layout, Target, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UIUXDesign = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Palette,
      title: "User Interface Design",
      description: "Beautiful, intuitive interfaces that users love",
      features: ["Visual Design", "Design Systems", "Brand Integration", "Responsive Layouts"]
    },
    {
      icon: Users,
      title: "User Experience Design",
      description: "Research-driven UX that converts visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Native and cross-platform app designs",
      features: ["iOS Design", "Android Design", "App Prototypes", "Animation Design"]
    },
    {
      icon: Layout,
      title: "Web Design",
      description: "Modern, conversion-focused website designs",
      features: ["Landing Pages", "E-commerce Design", "Dashboard Design", "Micro-interactions"]
    }
  ];

  const process = [
    { step: "Research & Discovery", description: "Understanding your users and business goals" },
    { step: "Wireframing", description: "Creating the blueprint of your digital product" },
    { step: "Visual Design", description: "Bringing your brand to life with stunning visuals" },
    { step: "Prototyping", description: "Interactive prototypes for testing and validation" },
    { step: "User Testing", description: "Validating designs with real users" },
    { step: "Handoff & Support", description: "Seamless transition to development team" }
  ];

  const whyChooseUs = [
    "Experienced UI/UX Designers",
    "User-Centered Design Approach",
    "Research-Driven Strategy",
    "Modern & Clean Visual Design",
    "Prototyping & Usability Testing",
    "Transparent & Collaborative Process",
  ]

  const Technologies = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Framer",
    "Miro",
    "InVision",
    "Photoshop",
    "Illustrator"
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Design <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Experiences That Users Love</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            We create intuitive, engaging, and visually compelling user interfaces that enhance user satisfaction and drive meaningful interactions across web and mobile platforms.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            onClick={() => navigate("/contact")}
          >
            Start Your Design Project
          </Button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Why Choose Sociobhaarat for UI/UX Design
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
            We blend creativity, research, and strategy to design digital experiences that are visually stunning, functional, user-friendly, and conversion-focused.
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

      {/* OUR SERVICES*/}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Our UI/UX Design Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Zap className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Our Design Process
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS WE USE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-bold mb-12">
            Tools & Technologies We Use
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {Technologies.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        quote="Design is not decoration — it’s how users experience your brand."
      />

      {/* CTA Button */}
      <section className=" my-16 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Transform Your Digital Experience?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let’s design user experiences that drive engagement and conversions.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Get Free Consultation
          </Button>
        </div>
      </section>



      {/* <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              UI/UX Design Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create exceptional digital experiences that delight users and drive business growth with our expert UI/UX design services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Zap className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing User Experiences?</h2>
            <p className="text-lg mb-8 opacity-90">Let's discuss your design project and create something extraordinary</p>
            <Button size="lg" variant="secondary" onClick={() => navigate("/contact")} >
              Get Started Today
            </Button>
          </Card>
        </div>
      </div> */}
    </div>
  );
};

export default UIUXDesign;
