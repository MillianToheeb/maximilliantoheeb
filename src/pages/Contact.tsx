import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MessageSquare, 
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Star
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    timeline: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
      timeline: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "WhatsApp",
      description: "Get instant responses and quick consultations",
      action: "Message Me",
      link: "https://wa.me/2348130270031",
      available: "24/7 Available"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      description: "Send detailed project requirements and questions", 
      action: "Email Me",
      link: "mailto:Milliantoheeb@gmil.com",
      available: "Response within 24hrs"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Call",
      description: "Schedule a call to discuss your project in detail",
      action: "Schedule Call",
      link: "https://wa.me/2348130270031",
      available: "Mon-Fri 9AM-6PM WAT"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope. Website design typically takes 2-4 weeks, while comprehensive marketing campaigns can take 1-3 months to fully implement."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients worldwide. All communication is conducted in English, and I'm flexible with different time zones."
    },
    {
      question: "What's included in your digital marketing services?",
      answer: "My digital marketing services include SEO, content marketing, email campaigns, social media strategy, PPC advertising, and detailed analytics reporting."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! I offer various maintenance packages and ongoing support options to ensure your digital assets continue to perform optimally."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
            📞 Get In Touch
          </Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Start Your Success Story
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to transform your business? I'm here to help you achieve your digital marketing goals. 
            Let's discuss how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">Choose Your Preferred Way to Connect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <Badge variant="outline" className="mb-4 text-xs">{method.available}</Badge>
                  <div>
                    <Button asChild className="w-full bg-gradient-primary text-white hover:opacity-90">
                      <a href={method.link} target="_blank" rel="noopener noreferrer">
                        {method.action}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Send Me a Detailed Message</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and I'll get back to you with a customized proposal.
              </p>
            </div>

            <Card className="border-0 shadow-sm bg-background">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Needed *</label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="website-design">Website Design</SelectItem>
                          <SelectItem value="graphics-design">Graphics Design</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
                          <SelectItem value="shopify">Shopify Development</SelectItem>
                          <SelectItem value="etsy">Etsy Optimization</SelectItem>
                          <SelectItem value="consultation">Consultation Only</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500">Under $500</SelectItem>
                          <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000-plus">$5,000+</SelectItem>
                          <SelectItem value="discuss">Let's Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Timeline</label>
                      <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details *</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Please describe your project, goals, target audience, and any specific requirements..."
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary text-white hover:opacity-90"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-0 shadow-sm bg-background">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-sm text-muted-foreground">Nigeria (Remote Worldwide)</div>
                  </div>
                  <div>
                    <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="font-semibold mb-1">Response Time</div>
                    <div className="text-sm text-muted-foreground">Within 24 hours</div>
                  </div>
                  <div>
                    <Star className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="font-semibold mb-1">Availability</div>
                    <div className="text-sm text-muted-foreground">Taking New Projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Don't Wait - Your Success Starts Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Every day you wait is a day your competitors get ahead. Let's start building your success story now.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-gray-100">
            <a href="https://wa.me/2348130270031" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Free Consultation
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;