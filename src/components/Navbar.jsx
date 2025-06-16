import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-7 w-7 text-primary" />
            <span className="text-xl font-semibold text-foreground">StartupForge</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className={`text-sm font-medium transition-colors hover:text-primary hover:bg-accent ${
                  location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== '/')
                    ? 'text-primary bg-accent'
                    : 'text-muted-foreground'
                }`}
              >
                <Link to={item.path}>{item.name}</Link>
              </Button>
            ))}
            <Button 
              onClick={handleGetStarted}
              className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90"
              size="sm"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card rounded-md mt-2 p-4 shadow-lg"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  onClick={() => setIsOpen(false)}
                  className={`block w-full justify-start px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-accent ${
                    location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== '/')
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground'
                  }`}
                >
                  <Link to={item.path}>{item.name}</Link>
                </Button>
              ))}
              <Button 
                onClick={() => { handleGetStarted(); setIsOpen(false); }}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 mt-2"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;