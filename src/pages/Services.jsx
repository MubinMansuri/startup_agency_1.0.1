
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Code, TrendingUp, Users, Lightbulb, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const handleCTA = (featureName) => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: `The "${featureName}" feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const services = [
    {
      slug: 'strategy-consulting',
      icon: Lightbulb,
      title: 'Strategy & Consulting',
      description: 'Craft a winning game plan with market research, business modeling, and go-to-market strategies.',
      features: ['Market Validation', 'Business Model Canvas', 'Competitive Analysis', 'Investor Readiness'],
      priceInfo: 'Custom Quote',
      imageAlt: 'Team brainstorming around a whiteboard with strategy diagrams'
    },
    {
      slug: 'brand-identity-design',
      icon: Palette,
      title: 'Brand Identity & Design',
      description: 'Build a memorable brand that connects with your audience. Includes logo, visuals, and messaging.',
      features: ['Logo & Visual System', 'Brand Guidelines', 'UI/UX Design', 'Marketing Collateral'],
      priceInfo: 'From $2,500',
      imageAlt: 'Designer working on a logo concept on a tablet'
    },
    {
      slug: 'web-app-development',
      icon: Code,
      title: 'Web & App Development',
      description: 'Develop scalable, high-performance digital products from MVP to enterprise-grade solutions.',
      features: ['Custom Web Apps', 'Mobile Apps (iOS/Android)', 'E-commerce Solutions', 'API Development'],
      priceInfo: 'From $8,000',
      imageAlt: 'Developer coding on a computer with multiple monitors showing code'
    },
    {
      slug: 'digital-marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Drive growth with data-driven SEO, content marketing, SMM, and paid advertising campaigns.',
      features: ['SEO & SEM', 'Content Strategy', 'Social Media Marketing', 'PPC Campaigns'],
      priceInfo: 'From $1,500/mo',
      imageAlt: 'Digital marketing dashboard showing analytics and campaign performance'
    },
    {
      slug: 'team-building',
      icon: Users,
      title: 'Team Advisory',
      description: 'Guidance on structuring, recruiting, and scaling high-performing teams for your startup.',
      features: ['Talent Acquisition Strategy', 'Org Structure Design', 'Culture Development', 'Leadership Coaching'],
      priceInfo: 'Custom Quote',
      imageAlt: 'Diverse group of professionals in a collaborative team meeting'
    },
    {
      slug: 'legal-compliance',
      icon: Shield,
      title: 'Startup Legal Pack',
      description: 'Navigate legal complexities with support for formation, IP, and compliance.',
      features: ['Business Formation Aid', 'IP Protection Guidance', 'Compliance Checklists', 'Contract Templates'],
      priceInfo: 'From $1,200',
      imageAlt: 'Legal documents and a gavel, symbolizing startup compliance'
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We listen to your vision, goals, and challenges.',
    },
    {
      step: '02',
      title: 'Strategic Plan',
      description: 'Tailored roadmap and proposal development.',
    },
    {
      step: '03',
      title: 'Execution Phase',
      description: 'Our experts bring your project to life.',
    },
    {
      step: '04',
      title: 'Review & Iterate',
      description: 'Continuous improvement and optimization for success.',
    },
  ];

  return (
    <div className="pt-16 bg-background text-foreground">
      <section className="py-20 md:py-24 hero-pattern-minimal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-stack solutions to empower your startup at every stage of growth, from initial idea to market leadership.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="card-minimal p-0 flex flex-col hover:shadow-primary/30" 
              >
                <div className="aspect-video w-full overflow-hidden">
                   <img  
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    alt={service.imageAlt}
                   src="https://images.unsplash.com/photo-1468716819264-c6088257636e" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-5 w-5" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>
                  
                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0,2).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="text-lg font-semibold text-primary mb-3">{service.priceInfo}</div>
                    <Button 
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                      size="sm"
                    >
                      <Link to={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent and collaborative process designed for your startup's success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-lg hover:bg-accent transition-colors duration-200"
              >
                <div className="w-12 h-12 border-2 border-primary text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 hero-pattern-minimal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Build Your Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how our expertise can fuel your startup's growth. Get in touch for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-3"
                onClick={() => handleCTA("Free Consultation")}
              >
                Get Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base px-8 py-3 hover:border-primary" 
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
