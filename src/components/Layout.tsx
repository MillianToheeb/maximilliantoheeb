import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StickyWhatsApp from "./StickyWhatsApp";
import LoadingLogo from "./LoadingLogo";
import { useLoading } from "@/contexts/LoadingContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { startLoading, stopLoading } = useLoading();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Only scroll to top on route changes, no automatic loading
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 600);
  };

  const handleExternalClick = () => {
    startLoading();
    setTimeout(() => stopLoading(), 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/40e6e913-3446-4cab-aea5-9aeea3a131c4.png" 
                alt="Maximillian Toheeb Logo" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive(item.path)
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                asChild 
                className="bg-gradient-primary text-white hover:opacity-90"
                onClick={handleExternalClick}
              >
                <a href="https://wa.me/2348130270031" target="_blank" rel="noopener noreferrer">
                  Free Consultation
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  asChild 
                  className="w-full bg-gradient-primary text-white"
                  onClick={handleExternalClick}
                >
                  <a href="https://wa.me/2348130270031" target="_blank" rel="noopener noreferrer">
                    Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Sticky WhatsApp */}
      <StickyWhatsApp />

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/40e6e913-3446-4cab-aea5-9aeea3a131c4.png" 
                  alt="Maximillian Toheeb Logo" 
                  className="h-12 w-auto mr-3"
                />
                <h3 className="text-lg font-semibold text-primary">Maximillian Toheeb</h3>
              </div>
              <p className="text-muted-foreground">
                Digital Marketing & Creative Professional helping businesses grow online.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact & Social</h4>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <a 
                    href="mailto:milliantoheeb@gmail.com" 
                    className="hover:text-primary transition-colors"
                    onClick={handleExternalClick}
                  >
                    milliantoheeb@gmail.com
                  </a>
                </p>
                <p>
                  <a 
                    href="https://wa.me/2348130270031" 
                    className="hover:text-primary transition-colors"
                    onClick={handleExternalClick}
                  >
                    WhatsApp
                  </a>
                </p>
                <div className="flex space-x-4 mt-4">
                  <a 
                    href="https://www.facebook.com/share/14yBF44E5S/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors"
                    onClick={handleExternalClick}
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/maxi_millian020?igsh=MXZ3d3NodWJ4eXJvMg==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors"
                    onClick={handleExternalClick}
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@maxi_millian02?_t=ZM-8yFYRuSrDXk&_r=1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors"
                    onClick={handleExternalClick}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.04-.1z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/Maxi_millian02?t=f6pn6doYJDqq38sKgpMRxQ&s=09" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors"
                    onClick={handleExternalClick}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://pin.it/1R9lKTxD2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors"
                    onClick={handleExternalClick}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.372 0 12.017c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.373 11.99-12.017C24.007 5.369 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
            <p>&copy; 2024 Maximillian Toheeb. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Global Loading Animation */}
      <LoadingLogo />
    </div>
  );
};

export default Layout;