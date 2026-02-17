import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, TrendingUp, Heart, MapPin, Clock, DollarSign } from "lucide-react";

const Hiring = () => {
  const positions = [
    {
      title: "Social Media Manager",
      department: "Marketing",
      type: "Full-time",
      location: "Jabalpur, MP",
      description: "We're looking for a creative social media manager to lead our client campaigns and build engaging online communities.",
      requirements: ["3+ years experience", "Platform expertise", "Content creation skills", "Analytics knowledge"],
    },
    {
      title: "Graphic Designer",
      department: "Design",
      type: "Full-time",
      location: "Jabalpur, MP",
      description: "Join our design team to create stunning visuals that tell compelling brand stories for our diverse clientele.",
      requirements: ["2+ years experience", "Adobe Creative Suite", "Portfolio required", "Brand identity experience"],
    },
    {
      title: "Content Writer",
      department: "Content",
      type: "Full-time",
      location: "Jabalpur, MP",
      description: "Seeking a talented writer to craft compelling content across blogs, social media, and marketing materials.",
      requirements: ["2+ years experience", "SEO knowledge", "Excellent English", "Marketing background"],
    },
    {
      title: "Performance Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Jabalpur, MP",
      description: "Drive results through data-driven campaigns across Google Ads, Facebook, and other digital platforms.",
      requirements: ["3+ years experience", "Google Ads certified", "Analytics expertise", "ROI focused"],
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career progression paths.",
      color: "text-primary",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Great Team",
      description: "Work with passionate professionals who love what they do.",
      color: "text-secondary",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Work-Life Balance",
      description: "Flexible hours and a supportive work environment.",
      color: "text-accent",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Competitive Pay",
      description: "Industry-leading compensation and performance bonuses.",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-6">
            WE ARE HIRING!
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Join Our <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Amazing Team</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Be part of a dynamic team that's transforming how businesses grow digitally. We're always looking for talented individuals who are passionate about digital marketing.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Why Join Socio Bhaarat?</h2>
            <p className="text-xl text-muted-foreground">Benefits and perks of working with us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className={`flex justify-center mb-4 ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">Explore opportunities to grow with us</p>
          </div>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-display mb-2">{position.title}</CardTitle>
                      <CardDescription className="text-base">{position.description}</CardDescription>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary font-semibold whitespace-nowrap" onClick={() => window.open("https://forms.office.com/r/u7zAwghd9Y", "_blank")}>
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Briefcase className="h-4 w-4 mr-2 text-primary" />
                      {position.department}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-secondary" />
                      {position.type}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      {position.location}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Don't See Your Role?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary font-semibold text-lg" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Send Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Hiring;
