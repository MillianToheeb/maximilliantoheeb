import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PageTransition from "@/components/PageTransition";
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Target, 
  Users, 
  TrendingUp,
  ShoppingCart,
  Palette,
  Search,
  Mail,
  Globe
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "SEO, email marketing, affiliate strategies, and local business growth."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Design",
      description: "Responsive websites on Shopify, Wix, and custom platforms."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphics Design",
      description: "Branding, social media creatives, and professional mockups."
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Setup",
      description: "Shopify store optimization and Etsy shop promotion."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Local Business Owner",
      content: "Maximillian transformed our online presence completely. Our sales increased by 150% in just 3 months!",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Affiliate Marketer",
      content: "His digital marketing strategies helped me scale my affiliate business to 6 figures. Highly recommended!",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Etsy Shop Owner",
      content: "My Etsy shop went from 10 sales a month to over 200 thanks to Max's optimization techniques.",
      rating: 5
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "50M+", label: "Revenue Generated" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
                ✨ Digital Marketing Expert
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
            >
              Hi, I'm{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block"
              >
                Maximillian Toheeb
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              I help businesses, creators, and affiliate marketers grow their online presence through 
              strategic digital marketing and stunning design.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button size="lg" asChild className="bg-gradient-primary text-white hover:opacity-90 shadow-elegant">
                <a href="https://wa.me/2348130270031" target="_blank" rel="noopener noreferrer">
                  Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/portfolio">View My Work</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What I Do Best</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital solutions to help your business thrive in the online world.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-sm h-full">
                      <CardContent className="p-6 text-center">
                        <motion.div 
                          className="text-accent mb-4 flex justify-center"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.icon}
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <a href="/services">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from real businesses that trusted me with their growth.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <TestimonialsCarousel />
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how I can help you achieve your digital marketing goals. 
                Free consultation, no obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-gray-100">
                  <a href="https://wa.me/2348130270031" target="_blank" rel="noopener noreferrer">
                    <Users className="mr-2 h-5 w-5" />
                    WhatsApp Me
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                  <a href="mailto:Milliantoheeb@gmil.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;