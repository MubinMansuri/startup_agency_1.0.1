import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Strategy', path: '/services/strategy-consulting' },
        { name: 'Branding', path: '/services/brand-identity-design' },
        { name: 'Development', path: '/services/web-app-development' },
        { name: 'Marketing', path: '/services/digital-marketing' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Support', path: '/contact' },
        { name: 'Careers', path: '/team' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold text-foreground">StartupForge</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Crafting the future, one startup at a time.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <span className="text-foreground font-semibold mb-3 block text-sm">{section.title}</span>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-xs">
            © {currentYear} StartupForge. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <motion.button
                key={social.label}
                onClick={handleSocialClick}
                whileHover={{ scale: 1.1, color: 'hsl(var(--primary))' }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;