import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, Tech Solutions India",
      content: "Socio Bhaarat transformed our digital presence completely. Their social media strategies helped us reach 10x more customers in just 6 months. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      name: "Priya Sharma",
      role: "Founder, Fashion Hub",
      content: "The team at Socio Bhaarat is incredibly professional and creative. Their graphic design work has elevated our brand to a whole new level. We couldn't be happier!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
    {
      name: "Amit Patel",
      role: "Director, Real Estate Plus",
      content: "Working with Socio Bhaarat has been a game-changer for our business. Their performance marketing campaigns delivered exceptional ROI. True professionals!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      name: "Sneha Deshmukh",
      role: "Owner, Café Delight",
      content: "From strategy to execution, everything was perfect. Our social media engagement has increased by 300% since we started working with them.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Vikram Singh",
      role: "Marketing Head, Education First",
      content: "The content marketing strategies provided by Socio Bhaarat are top-notch. They understand our brand and deliver quality work consistently.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Anita Reddy",
      role: "Co-founder, Health & Wellness",
      content: "Exceptional service and outstanding results! Their SEO strategies helped us rank on the first page for our target keywords. Couldn't ask for more!",
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
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
