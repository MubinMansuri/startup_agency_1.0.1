
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Rocket, Users, TrendingUp, CheckCircle, Lightbulb, Brain, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const { toast } = useToast();

  const handleCTA = (featureName) => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: `The "${featureName}" feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const stats = [
    { number: '500+', label: 'Startups Launched' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '$50M+', label: 'Funding Facilitated' },
    { number: '10+', label: 'Years of Experience' },
  ];

  const servicesHighlights = [
    {
      icon: Brain,
      title: 'Strategic Consulting',
      description: 'Blueprint your success with expert market analysis and business modeling.',
      link: '/services/strategy-consulting',
    },
    {
      icon: Zap,
      title: 'Product Development',
      description: 'Build scalable and robust digital products, from MVP to full-scale.',
      link: '/services/web-app-development',
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Amplify your reach and acquire customers with data-driven strategies.',
      link: '/services/digital-marketing',
    },
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Tailored Strategies',
      description: 'Custom solutions designed for your unique business needs and goals.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Access to seasoned professionals with proven track records in diverse industries.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Approach',
      description: 'Leveraging the latest technologies and methodologies to drive results.',
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'A portfolio of successful startups and tangible growth metrics.',
    },
  ];

  const testimonials = [
    {
      quote: "StartupForge transformed our idea into a market-ready product. Their expertise was invaluable.",
      name: "Alex Chen",
      company: "CEO, Innovatech",
      imageAlt: "Smiling Asian male CEO in a modern office",
    },
    {
      quote: "The strategic guidance we received was a game-changer for our funding round.",
      name: "Maria Rodriguez",
      company: "Founder, HealthAI",
      imageAlt: "Confident Latina founder in a tech startup environment",
    },
    {
      quote: "Their development team is top-notch. Fast, efficient, and incredibly skilled.",
      name: "John B. Smith",
      company: "CTO, MarketLink",
      imageAlt: "Professional Caucasian male CTO at a computer",
    },
  ];

  return (
    <div className="pt-16 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center hero-pattern-minimal overflow-hidden">
        <div className="absolute inset-0 bg-background/70"></div>
        <img  
          alt="Abstract background representing innovation and technology" 
          class="absolute inset-0 w-full h-full object-cover opacity-5"
         src="https://images.unsplash.com/photo-1691996723818-3c9f0a63eff3" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Build. Launch. <span className="text-primary">Scale.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              StartupForge is your dedicated partner in transforming innovative ideas into successful, market-leading businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-3"
                onClick={() => handleCTA("Get Started")}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 py-3 hover:border-primary"
                asChild
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
          <div className="absolute -bottom-1/4 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlights Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Your <span className="text-primary">Growth Engine</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end solutions to accelerate your startup's journey from concept to market leadership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-minimal p-6 text-center hover:shadow-primary/30"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <Button variant="link" asChild className="text-sm p-0 h-auto text-primary hover:text-primary/80">
                  <Link to={service.link}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Partner with <span className="text-primary">StartupForge</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of a dedicated team committed to your startup's success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-lg hover:bg-accent transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-md flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Words From <span className="text-primary">Our Clients</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how we've helped other ambitious founders achieve their goals.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 * 0.1, duration: 0.5 }}
              className="card-minimal p-6 hover:shadow-primary/30"
            >
              <p className="text-muted-foreground italic mb-4">"{testimonials[0].quote}"</p>
              <div className="flex items-center">
                <img 
                  class="w-10 h-10 rounded-full mr-3 object-cover"
                  alt={testimonials[0].imageAlt}
                 src="https://images.unsplash.com/photo-1627577741153-74b82d87607b" />
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonials[0].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[0].company}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.1, duration: 0.5 }}
              className="card-minimal p-6 hover:shadow-primary/30"
            >
              <p className="text-muted-foreground italic mb-4">"{testimonials[1].quote}"</p>
              <div className="flex items-center">
                 <img 
                  class="w-10 h-10 rounded-full mr-3 object-cover"
                  alt={testimonials[1].imageAlt}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonials[1].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[1].company}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2 * 0.1, duration: 0.5 }}
              className="card-minimal p-6 hover:shadow-primary/30"
            >
              <p className="text-muted-foreground italic mb-4">"{testimonials[2].quote}"</p>
              <div className="flex items-center">
                <img 
                  class="w-10 h-10 rounded-full mr-3 object-cover"
                  alt={testimonials[2].imageAlt}
                 src="https://images.unsplash.com/photo-1627577741153-74b82d87607b" />
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonials[2].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[2].company}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Ignite Your Startup's Potential?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's talk about your vision. Schedule a free consultation with our experts today.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-3"
              asChild
            >
              <Link to="/contact">Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
