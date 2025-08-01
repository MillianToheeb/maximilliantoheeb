import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { 
  ArrowRight, 
  Award, 
  Users, 
  Target, 
  TrendingUp,
  Lightbulb,
  Heart,
  Zap
} from "lucide-react";

const About = () => {
  const skills = [
    "Digital Marketing Strategy",
    "SEO & Content Marketing",
    "Shopify Development",
    "Etsy Optimization",
    "Email Marketing",
    "Affiliate Marketing",
    "Graphics Design",
    "Brand Development",
    "Local Marketing",
    "Social Media Strategy",
    "Web Design",
    "E-commerce Growth"
  ];

  const journey = [
    {
      year: "2019",
      title: "Started Digital Marketing Journey",
      description: "Began learning digital marketing while helping local businesses establish their online presence."
    },
    {
      year: "2020",
      title: "First Major Success",
      description: "Helped a local restaurant increase online orders by 300% during the pandemic through strategic digital marketing."
    },
    {
      year: "2021",
      title: "Expanded to E-commerce",
      description: "Started specializing in Shopify and Etsy stores, helping creators and entrepreneurs build profitable online businesses."
    },
    {
      year: "2022",
      title: "Affiliate Marketing Expertise",
      description: "Developed proven strategies for affiliate marketers, helping them scale from 4-figure to 6-figure businesses."
    },
    {
      year: "2023",
      title: "Full-Service Digital Agency",
      description: "Expanded services to include graphics design, branding, and comprehensive digital marketing solutions."
    },
    {
      year: "2024",
      title: "Continued Innovation",
      description: "Today, I continue to help businesses of all sizes achieve remarkable growth through data-driven strategies."
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "Every strategy is designed with measurable outcomes in mind. Your success is my success."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Centered",
      description: "I believe in building lasting relationships and truly understanding your business goals."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Creative Solutions",
      description: "Innovative approaches to common problems, always staying ahead of digital trends."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Execution",
      description: "Quick turnaround times without compromising quality. Your time is valuable."
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              {/* Left side - Text content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
                    About Maximillian
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
                >
                  Turning Digital Dreams into Reality
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-muted-foreground mb-8 leading-relaxed"
                >
                  With over 5 years of experience in digital marketing and creative design, 
                  I've helped hundreds of businesses transform their online presence and achieve remarkable growth.
                </motion.p>
              </div>

              {/* Right side - Professional image */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-elegant">
                    <img 
                      src="/lovable-uploads/9fd52814-966a-46e7-92cd-29bd4042f636.png" 
                      alt="Maximillian Toheeb - Digital Marketing Professional"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
                  >
                    <span className="text-white font-bold text-lg">MT</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">My Story</h2>
              </AnimatedSection>
              
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground mb-12">
                <p className="text-lg leading-relaxed mb-6">
                  My journey in digital marketing began with a simple observation: many talented business owners 
                  and creators were struggling to reach their audience online. They had amazing products and services, 
                  but lacked the digital expertise to showcase them effectively.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  This sparked my passion for bridging that gap. I started by helping local businesses in my community, 
                  learning through hands-on experience and constantly adapting to the ever-changing digital landscape. 
                  What began as a side project quickly grew into a full-time mission.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Today, I specialize in helping three key groups: affiliate marketers looking to scale their businesses, 
                  local businesses wanting to establish a strong online presence, and creators who need to turn their 
                  passion into profit. Each client brings unique challenges, and I love crafting personalized solutions 
                  that deliver real results.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My approach is simple: understand your goals, develop a strategic plan, execute with precision, 
                  and measure results. Whether it's building a high-converting Shopify store, optimizing an Etsy shop, 
                  or creating a comprehensive digital marketing strategy, I'm committed to your success.
                </p>
              </AnimatedSection>

              <AnimatedSection className="text-center">
                <Button size="lg" asChild className="bg-gradient-primary text-white hover:opacity-90">
                  <a href="https://wa.me/2348130270031" target="_blank" rel="noopener noreferrer">
                    Let's Work Together <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">My Journey</h2>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {journey.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <div className="flex flex-col md:flex-row gap-6 group">
                      <div className="md:w-24 flex-shrink-0">
                        <Badge variant="outline" className="bg-accent text-accent-foreground border-accent">
                          {item.year}
                        </Badge>
                      </div>
                      <Card className="flex-1 border-0 shadow-sm group-hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">Skills & Expertise</h2>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="p-3 text-center hover:bg-accent/10 hover:text-accent transition-colors cursor-default w-full"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">What Drives Me</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-sm h-full">
                    <CardContent className="p-6 text-center">
                      <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how my experience and expertise can help you achieve your digital marketing goals.
              </p>
              <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-gray-100">
                <a href="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;