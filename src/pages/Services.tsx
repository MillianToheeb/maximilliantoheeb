import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Search, 
  Globe, 
  Palette, 
  ShoppingCart,
  Mail,
  Target,
  TrendingUp,
  Users,
  Megaphone,
  BarChart3,
  Star,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Search className="h-12 w-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that drive real results for your business.",
      features: [
        "Search Engine Optimization (SEO)",
        "Email Marketing Campaigns",
        "Affiliate Marketing Strategies",
        "Pay-Per-Click Advertising",
        "Local Business Marketing",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Analytics & Reporting"
      ],
      price: "Starting at $500/month",
      popular: true
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Website Design & Development",
      description: "Beautiful, responsive websites that convert visitors into customers.",
      features: [
        "Shopify Store Development",
        "Wix Website Design",
        "Responsive Mobile Design",
        "E-commerce Integration",
        "Custom Web Applications",
        "Website Optimization",
        "Landing Page Creation",
        "Maintenance & Support"
      ],
      price: "Starting at $800",
      popular: false
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Graphics Design",
      description: "Eye-catching designs that elevate your brand and engage your audience.",
      features: [
        "Logo & Brand Identity",
        "Social Media Graphics",
        "Marketing Materials",
        "Product Mockups",
        "Business Cards & Stationery",
        "Banner & Ad Design",
        "Packaging Design",
        "Print Design"
      ],
      price: "Starting at $50/design",
      popular: false
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce setup and optimization for maximum sales.",
      features: [
        "Shopify Store Setup",
        "Etsy Shop Optimization",
        "Product Listing Optimization",
        "Inventory Management",
        "Payment Gateway Integration",
        "Shipping Configuration",
        "SEO for E-commerce",
        "Sales Analytics"
      ],
      price: "Starting at $600",
      popular: false
    }
  ];

  const specializedServices = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Affiliate Marketing Scaling",
      description: "Proven strategies to scale your affiliate marketing business to 6-figures.",
      duration: "3-6 months"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Local Business Growth",
      description: "Complete digital transformation for local businesses to dominate their market.",
      duration: "2-4 months"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Creator Monetization",
      description: "Turn your passion into profit with strategic marketing and sales funnels.",
      duration: "1-3 months"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We discuss your goals, challenges, and vision for your business."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "I create a customized plan tailored to your specific needs and market."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the strategy with regular updates and transparent communication."
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and optimization based on data and results."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
            💼 Professional Services
          </Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Services That Drive Results
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive digital marketing and creative solutions designed to help your business 
            thrive in the digital landscape.
          </p>
          
          <Button size="lg" asChild className="bg-gradient-primary text-white hover:opacity-90">
            <a href="https://wa.me/2348130270031" target="_blank" rel="noopener noreferrer">
              Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">Core Services</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className={`relative group hover:shadow-elegant transition-all duration-300 border-0 shadow-sm ${service.popular ? 'ring-2 ring-accent' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-accent">{service.price}</span>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">Specialized Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-sm bg-background">
                <CardContent className="p-6 text-center">
                  <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {service.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">How We Work Together</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-sm bg-background">
            <CardContent className="p-8">
              <BarChart3 className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Custom Pricing for Custom Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Every business is unique, and so are their needs. I provide customized quotes based on 
                your specific requirements, ensuring you get the best value for your investment.
              </p>
              <Button asChild className="bg-gradient-primary text-white hover:opacity-90">
                <a href="https://wa.me/2348130270031" target="_blank" rel="noopener noreferrer">
                  Get Custom Quote
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss which service is right for you. Free consultation with no commitments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-gray-100">
              <a href="https://wa.me/2348130270031" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-5 w-5" />
                Book Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <a href="/portfolio">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Results
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;