import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { 
  ExternalLink, 
  Search,
  Globe,
  ShoppingCart,
  Palette,
  Target,
  Plus,
  Filter
} from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Web Design",
    "Shopify Stores", 
    "Etsy Shops",
    "Graphics Design",
    "Digital Marketing",
    "Branding"
  ];

  const projects = [
    {
      id: 1,
      title: "High-Performance Shopify Store",
      category: "Shopify Stores",
      description: "Complete Shopify store setup with analytics tracking, achieving exceptional conversion rates and sales growth.",
      image: "/lovable-uploads/f2a469a3-ce31-4644-813e-693d1529b720.png",
      tags: ["Shopify Analytics", "E-commerce", "Performance Optimization"],
      link: "#",
      results: "$38K+ total sales, 14.2K sessions"
    },
    {
      id: 2,
      title: "Mobile Phone Accessories Store",
      category: "Shopify Stores",
      description: "Professional e-commerce store for mobile accessories with enhanced protection products and customer testimonials.",
      image: "/lovable-uploads/c76efbee-f3e3-4c78-9c0d-3e029b23d439.png",
      tags: ["Product Photography", "Customer Reviews", "Mobile Accessories"],
      link: "#",
      results: "High conversion mobile-first design"
    },
    {
      id: 3,
      title: "Premium Hat & Accessories Brand",
      category: "Shopify Stores",
      description: "Stylish e-commerce platform for premium hats and accessories with clean product showcasing.",
      image: "/lovable-uploads/0ba70ec1-1d37-4a72-a340-c711d4993587.png",
      tags: ["Fashion E-commerce", "Premium Branding", "Product Collections"],
      link: "#",
      results: "Enhanced brand positioning"
    },
    {
      id: 4,
      title: "Multi-Product Electronics Store",
      category: "Shopify Stores", 
      description: "Comprehensive electronics store featuring watches, gadgets, and tech accessories with detailed product pages.",
      image: "/lovable-uploads/9c679e75-9411-47ff-be6e-859c5d4a3316.png",
      tags: ["Electronics", "Product Variety", "Tech Accessories"],
      link: "#",
      results: "Diverse product portfolio success"
    },
    {
      id: 5,
      title: "High-Revenue Etsy Shop",
      category: "Etsy Shops",
      description: "Optimized Etsy shop generating significant revenue with strategic product positioning and SEO.",
      image: "/lovable-uploads/dc1311d2-1b28-46fe-a917-c13983ba498b.png",
      tags: ["Etsy SEO", "Revenue Optimization", "Product Listings"],
      link: "#",
      results: "$1,471 revenue, 97 orders (30 days)"
    },
    {
      id: 6,
      title: "Etsy Analytics Dashboard Management",
      category: "Etsy Shops",
      description: "Professional Etsy shop management with comprehensive analytics tracking and performance monitoring.",
      image: "/lovable-uploads/ddbb0d97-970a-4ae5-8476-a7a63db0c00b.png",
      tags: ["Analytics", "Performance Tracking", "Shop Management"],
      link: "#",
      results: "18.9K visits, 372 orders, 2% conversion"
    },
    {
      id: 7,
      title: "Etsy Performance Growth",
      category: "Etsy Shops",
      description: "Strategic Etsy shop optimization resulting in consistent growth and improved conversion rates.",
      image: "/lovable-uploads/23afc451-3273-44b3-a9a5-70b48e813415.png",
      tags: ["Growth Strategy", "Conversion Optimization", "Sales Analytics"],
      link: "#",
      results: "16.4K visits, $5,001 revenue"
    },
    {
      id: 8,
      title: "Multi-Platform E-commerce Success",
      category: "Digital Marketing",
      description: "Comprehensive digital marketing strategy across Shopify and Etsy platforms with proven results.",
      image: "/lovable-uploads/89fb257f-bde8-4484-96a5-54cf4c7e4c22.png",
      tags: ["Multi-Platform", "Digital Strategy", "Performance Marketing"],
      link: "#",
      results: "1,591 sessions, $498 sales growth"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Design":
        return <Globe className="h-4 w-4" />;
      case "Shopify Stores":
      case "Etsy Shops":
        return <ShoppingCart className="h-4 w-4" />;
      case "Graphics Design":
      case "Branding":
        return <Palette className="h-4 w-4" />;
      case "Digital Marketing":
        return <Target className="h-4 w-4" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
                🎨 Portfolio Showcase
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Real Projects, Real Results
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Explore my latest work and see how I've helped businesses across different industries 
                achieve their digital marketing goals.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Filter and Search Section */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.div
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant={activeFilter === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveFilter(category)}
                        className={activeFilter === category ? "bg-accent text-accent-foreground" : ""}
                      >
                        {getCategoryIcon(category)}
                        <span className="ml-1">{category}</span>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              {filteredProjects.length === 0 ? (
                <motion.div 
                  key="no-results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-16"
                >
                  <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="projects-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-sm overflow-hidden h-full">
                        <div className="relative">
                          <motion.img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-48 object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-background/90 text-foreground">
                              {getCategoryIcon(project.category)}
                              <span className="ml-1">{project.category}</span>
                            </Badge>
                          </div>
                          {project.link && (
                            <motion.div 
                              className="absolute top-4 right-4"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Button size="icon" variant="secondary" className="bg-background/90">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </motion.div>
                          )}
                        </div>
                        
                        <CardContent className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="border-t pt-4 mt-auto">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-accent">
                                {project.results}
                              </span>
                              {project.link && (
                                <Button variant="ghost" size="sm" asChild>
                                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Add Project CTA (for client) */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <Card className="max-w-2xl mx-auto border-0 shadow-sm bg-background">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus className="h-12 w-12 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Want to Add Your Project?</h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to see your project featured in this portfolio? Let's work together to create 
                    something amazing that drives real results for your business.
                  </p>
                  <Button asChild className="bg-gradient-primary text-white hover:opacity-90">
                    <a href="https://wa.me/2348130270031" target="_blank" rel="noopener noreferrer">
                      Start Your Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Portfolio Stats */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">Portfolio Impact</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <AnimatedSection delay={0.1}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="opacity-90">Projects Completed</div>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="text-4xl font-bold mb-2">$5M+</div>
                  <div className="opacity-90">Revenue Generated</div>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="opacity-90">Client Satisfaction</div>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="opacity-90">Industries Served</div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Portfolio;