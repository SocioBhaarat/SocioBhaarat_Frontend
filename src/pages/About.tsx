import { Users, Target, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that contribute to your business growth.",
      color: "text-primary",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships with our clients.",
      color: "text-secondary",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead of digital trends to provide cutting-edge solutions.",
      color: "text-accent",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a team of passionate digital marketing professionals dedicated to helping businesses grow and thrive in the digital landscape.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded with a vision to transform how businesses connect with their audiences, Socio Bhaarat has grown from a small startup to a trusted digital marketing partner for hundreds of businesses across India.
                </p>
                <p>
                  Based in the heart of Madhya Pradesh, we serve clients in Jabalpur, Nagpur, Bhopal, Indore, and beyond. Our team combines creativity with data-driven strategies to deliver exceptional results.
                </p>
                <p>
                  We believe in the power of digital marketing to level the playing field, allowing businesses of all sizes to compete and succeed in today's digital-first world.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our Team"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`flex justify-center mb-4 ${value.color}`}>
                    {value.icon}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5">
              <h3 className="font-display text-3xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful connections with their target audience.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5">
              <h3 className="font-display text-3xl font-bold mb-4 text-secondary">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To be the most trusted digital marketing partner in Central India, known for delivering exceptional results and building long-lasting client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
