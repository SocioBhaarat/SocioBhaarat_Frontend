import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shourya Academy",
      content: "Partnering with SocioBhaarat has been highly beneficial for Shourya Academy. From social media management and ad campaigns to professional video shoots and both online and offline marketing assistance, their team supported our promotions end-to-end and helped us reach more students with better engagement and consistent enquiries.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      name: "Lotus Consultancy",
      content: "We at Lotus Consultancy had a great experience working with SocioBhaarat. Their team helped us with WhatsApp marketing, built our website, provided reliable tech support, and even recovered our hacked Instagram account smoothly. Their prompt response and technical expertise makes them a dependable digital partner for businesses.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
    {
      name: "Yuvraaj associates",
      content: "Working with SocioBhaarat has been excellent for Yuvraaj Associates. Their social media, ads, shoots, and lead generation strategies boosted our visibility, genuine enquiries, and overall business growth, making them a reliable long-term digital marketing partner.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      name: "Sn Constructions",
      content: "SocioBhaarat handled our shoots, social media management, ads, lead generation, and Google presence with a result-focused approach. We received quality enquiries, improved sales performance, and successfully closed 2 confirmed orders through their marketing efforts.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Apple properties",
      content: "SocioBhaarat managed our shoots and ad campaigns with excellent execution and professionalism. Their creative approach and targeted marketing delivered strong visibility and overall very good results for our business.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Build wells",
      content: "From video shoot and editing to social media management and ad campaigns, SocioBhaarat executed everything seamlessly. Their performance marketing approach brought us genuine leads, improved brand visibility, and directly contributed to consistent sales growth.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Client <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Testimonials</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">5.0</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 text-primary/10">
                  <Quote className="h-16 w-16" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic relative z-10">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
