import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote, Check } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shourya Academy",
      content: "Partnering with SocioBhaarat has been highly beneficial for Shourya Academy. From social media management and ad campaigns to professional video shoots and both online and offline marketing assistance, their team supported our promotions end-to-end and helped us reach more students with better engagement and consistent enquiries.",
      rating: 5,
      image: "/testimonials/ShouryaAcademy.jpeg",
    },
    {
      name: "Lotus Consultancy",
      content: "We at Lotus Consultancy had a great experience working with SocioBhaarat. Their team helped us with WhatsApp marketing, built our website, provided reliable tech support, and even recovered our hacked Instagram account smoothly. Their prompt response and technical expertise makes them a dependable digital partner for businesses.",
      rating: 5,
      image: "/testimonials/LotusGroups.png",
    },
    {
      name: "Yuvraaj Associates",
      content: "Working with SocioBhaarat has been excellent for Yuvraaj Associates. Their social media, ads, shoots, and lead generation strategies boosted our visibility, genuine enquiries, and overall business growth, making them a reliable long-term digital marketing partner.",
      rating: 5,
      image: "/testimonials/YuvrajAssociates.jpeg",
    },
    {
      name: "Sn Constructions",
      content: "SocioBhaarat handled our shoots, social media management, ads, lead generation, and Google presence with a result-focused approach. We received quality enquiries, improved sales performance, and successfully closed 2 confirmed orders through their marketing efforts.",
      rating: 5,
      image: "/testimonials/SnConstruction.png",
    },
    {
      name: "Apple Properties",
      content: "SocioBhaarat managed our shoots and ad campaigns with excellent execution and professionalism. Their creative approach and targeted marketing delivered strong visibility and overall very good results for our business.",
      rating: 5,
      image: "/testimonials/AppleProperties.png",
    },
    {
      name: "Build Well's",
      content: "From video shoot and editing to social media management and ad campaigns, SocioBhaarat executed everything seamlessly. Their performance marketing approach brought us genuine leads, improved brand visibility, and directly contributed to consistent sales growth.",
      rating: 5,
      image: "/testimonials/BuildWells.png",
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-start pt-12 overflow-hidden bg-[#fafafa]">

      {/* 1. IMMERSIVE BACKGROUND DESIGN */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dynamic Mesh Gradients */}
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-200 backdrop-blur-md text-primary text-[10px] font-bold mb-10 tracking-[0.2em] uppercase shadow-sm">
              <Star className="w-3 h-3" /> Client Success Stories
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black mb-8 text-slate-900 leading-[1.05] tracking-tighter">
              The Voice of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Digital Impact</span>.
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed italic underline decoration-primary/20 decoration-2 underline-offset-8">
              "Don't just take our word for it. Here's how we've engineered growth for businesses across Bhopal & Jabalpur."
            </p>
          </motion.div>
        </div>

        {/* 2. COMPACT METRIC HUB */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {[
            { val: "500+", label: "Happy Clients", color: "text-primary" },
            { val: "98%", label: "Satisfaction Rate", color: "text-blue-600" },
            { val: "5.0", label: "Average Rating", color: "text-orange-500" },
            { val: "1000+", label: "Projects Delivered", color: "text-emerald-600" }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-white/50 backdrop-blur-xl border border-slate-100 shadow-sm text-center group hover:shadow-xl transition-all duration-500">
              <div className={`text-4xl font-black tracking-tighter mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>{stat.val}</div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 3. TESTIMONIAL BENTO GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              className="relative group h-full"
            >
              <Card className="h-full border-slate-100 bg-white/80 backdrop-blur-lg rounded-[3rem] p-4 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-4 -right-4 text-primary/[0.03] group-hover:text-primary/5 transition-colors">
                  <Quote className="h-32 w-32 rotate-12" />
                </div>

                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1 rounded-lg shadow-lg">
                        <Check className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="font-black text-slate-900 tracking-tight leading-none">{testimonial.name}</h3>
                      <div className="flex mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed italic text-sm mb-8 flex-grow">
                    "{testimonial.content}"
                  </p>

                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Verified Partner</span>
                    <div className="h-1.5 w-12 bg-slate-100 rounded-full group-hover:bg-primary/30 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
