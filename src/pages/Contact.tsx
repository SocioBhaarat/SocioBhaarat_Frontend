import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "official@sociobhaarat.com",
      href: "mailto:official@sociobhaarat.com",
      color: "text-primary",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+91 95895 81364",
      href: "tel:+919589581364",
      color: "text-secondary",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      content: "Jabalpur, Madhya Pradesh, India",
      href: "#",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? Let's discuss how we can help you achieve your
            digital marketing goals.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className={`flex justify-center mb-4 ${info.color}`}>
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                  <a
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <Card className="border-border/50 shadow-xl">
              <CardContent className="p-8">
                <form
                  className="space-y-6"
                  method="POST"
                  action={import.meta.env.VITE_SHEETS_URL}
                  target="hidden_iframe"
                  onSubmit={(e) => {
                    try {
                      setSubmitting(true);
                      const form = e.currentTarget as HTMLFormElement;

                      setTimeout(() => {
                        form.reset();
                        toast({
                          title: "✅ Message Sent!",
                          description:
                            "Your response has been saved successfully.",
                        });
                        setSubmitting(false);
                      }, 500);
                    } catch {
                      toast({
                        title: "❌ Submission Failed",
                        description:
                          "Something went wrong. Please try again later.",
                        variant: "destructive",
                      });
                      setSubmitting(false);
                    }
                  }}
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input name="name" required placeholder="John Doe" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      required
                      placeholder="Tell us about your project..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 font-semibold"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                <iframe
                  name="hidden_iframe"
                  style={{ display: "none" }}
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
