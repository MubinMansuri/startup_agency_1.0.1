
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Zap, Users, DollarSign, ArrowRight, Lightbulb, Palette, Code, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const servicesData = {
  'strategy-consulting': {
    icon: Lightbulb,
    title: 'Strategy & Consulting',
    tagline: 'Crafting Your Blueprint for Startup Success.',
    description: 'Navigate the complexities of the startup world with our expert strategy and consulting services. We help you validate your ideas, define your market, and create a robust business model designed for sustainable growth and investor appeal.',
    longDescription: `
      <p>In today's competitive landscape, a brilliant idea is just the starting point. Our Strategy & Consulting service is designed to transform your vision into a concrete, actionable plan. We work closely with you to refine your concept, conduct thorough market research, and identify your unique value proposition.</p>
      <p>Our process involves deep dives into your target audience, competitive analysis, and potential revenue streams. We help you build a compelling business model, develop a go-to-market strategy, and prepare a pitch deck that resonates with investors. Whether you're at the ideation stage or looking to pivot, our strategic guidance will provide clarity and direction.</p>
    `,
    keyFeatures: [
      'Business Model Canvas Development',
      'Market Validation & Sizing',
      'Competitive Landscape Analysis',
      'Go-to-Market Strategy Formulation',
      'Investor Pitch Deck Creation',
      'Financial Modeling & Projections',
    ],
    process: [
      { title: 'Discovery Session', description: 'Understanding your vision, goals, and current challenges.' },
      { title: 'Market Research', description: 'In-depth analysis of your target market and competitors.' },
      { title: 'Strategy Formulation', description: 'Developing a tailored strategy and business model.' },
      { title: 'Action Plan Creation', description: 'Defining clear steps and milestones for execution.' },
      { title: 'Pitch Preparation', description: 'Crafting a compelling narrative for stakeholders.' },
    ],
    cta: 'Discuss Your Strategy',
    imageAlt: 'Team collaborating on a strategic plan with charts and diagrams on a large screen',
    relatedServices: ['brand-identity-design', 'web-app-development'],
  },
  'brand-identity-design': {
    icon: Palette,
    title: 'Brand Identity & Design',
    tagline: 'Building Brands That Captivate and Convert.',
    description: 'Your brand is more than just a logo. We create comprehensive brand identities that tell your story, connect with your audience, and differentiate you in a crowded market. From visual elements to brand voice, we craft an identity that truly represents your startup.',
    longDescription: `
      <p>A strong brand identity is crucial for making a lasting impression. Our Brand Identity & Design service focuses on creating a cohesive and memorable brand experience. We start by understanding your core values, mission, and target audience to develop a brand strategy that aligns with your business goals.</p>
      <p>Our design team then translates this strategy into stunning visual elements, including logos, color palettes, typography, and imagery. We also help define your brand voice and messaging to ensure consistency across all touchpoints. The result is a powerful brand identity that not only looks great but also drives recognition and loyalty.</p>
    `,
    keyFeatures: [
      'Brand Strategy Development',
      'Logo Design & Visual Identity Systems',
      'Brand Guidelines & Style Guides',
      'Marketing Collateral Design (digital & print)',
      'UI/UX Design for Web & Mobile',
      'Brand Voice & Messaging Workshops',
    ],
    process: [
      { title: 'Brand Discovery', description: 'Exploring your brand\'s essence, values, and audience.' },
      { title: 'Strategy & Positioning', description: 'Defining your unique market position and messaging.' },
      { title: 'Visual Identity Design', description: 'Creating logos, color palettes, and typography.' },
      { title: 'Brand Guidelines', description: 'Developing a comprehensive guide for brand consistency.' },
      { title: 'Asset Creation', description: 'Designing marketing materials and digital assets.' },
    ],
    cta: 'Shape Your Brand',
    imageAlt: 'Designer presenting a new brand identity system with mood boards and color palettes',
    relatedServices: ['strategy-consulting', 'web-app-development'],
  },
  'web-app-development': {
    icon: Code,
    title: 'Web & App Development',
    tagline: 'Engineering Digital Experiences That Perform.',
    description: 'Turn your innovative ideas into reality with our cutting-edge web and app development services. We build scalable, secure, and high-performance digital products tailored to your specific needs, ensuring a seamless user experience across all devices.',
    longDescription: `
      <p>In the digital age, your web and mobile presence is paramount. Our Web & App Development service provides end-to-end solutions, from initial concept and UI/UX design to development, testing, and deployment. We specialize in creating custom web applications, mobile apps (iOS & Android), and e-commerce platforms that are not only visually appealing but also robust and scalable.</p>
      <p>Our agile development process ensures flexibility and transparency, allowing for iterative improvements and quick adaptation to changing requirements. We leverage the latest technologies and best practices to deliver products that meet the highest standards of quality and performance, helping you engage users and achieve your business objectives.</p>
    `,
    keyFeatures: [
      'Custom Web Application Development',
      'Native & Cross-Platform Mobile App Development',
      'E-commerce Platform Development',
      'API Design & Integration',
      'Cloud Infrastructure & DevOps',
      'Ongoing Maintenance & Support',
    ],
    process: [
      { title: 'Requirement Analysis', description: 'Defining project scope, features, and technical specifications.' },
      { title: 'UI/UX Design & Prototyping', description: 'Creating intuitive and engaging user interfaces.' },
      { title: 'Agile Development Sprints', description: 'Iterative development with regular feedback cycles.' },
      { title: 'Quality Assurance & Testing', description: 'Ensuring a bug-free and high-performance product.' },
      { title: 'Deployment & Launch', description: 'Successfully launching your product to the market.' },
    ],
    cta: 'Build Your Product',
    imageAlt: 'Development team coding on multiple screens displaying complex code and UI designs',
    relatedServices: ['strategy-consulting', 'brand-identity-design'],
  },
   'digital-marketing': {
    icon: TrendingUp,
    title: 'Digital Marketing',
    tagline: 'Driving Growth Through Data-Driven Strategies.',
    description: 'Amplify your online presence and convert prospects into loyal customers with our comprehensive digital marketing services, including SEO, SMM, content strategy, and paid advertising.',
    longDescription: `
      <p>In a crowded digital world, effective marketing is key to standing out. Our Digital Marketing service provides a holistic approach to building your brand online and driving measurable results. We combine data analytics with creative strategies to reach your target audience where they are.</p>
      <p>From optimizing your website for search engines (SEO) and managing your social media presence (SMM) to crafting compelling content and running targeted paid advertising campaigns (PPC), we cover all bases. Our goal is to not just increase traffic, but to attract qualified leads and boost your conversion rates, ultimately fueling your startup's growth.</p>
    `,
    keyFeatures: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Content Strategy & Creation',
      'Pay-Per-Click (PPC) Advertising',
      'Email Marketing Campaigns',
      'Analytics & Reporting',
    ],
    process: [
      { title: 'Audit & Analysis', description: 'Assessing your current digital footprint and identifying opportunities.' },
      { title: 'Strategy Development', description: 'Creating a tailored digital marketing plan aligned with your goals.' },
      { title: 'Campaign Execution', description: 'Implementing strategies across various channels.' },
      { title: 'Performance Tracking', description: 'Monitoring key metrics and providing regular reports.' },
      { title: 'Optimization & Scaling', description: 'Continuously refining campaigns for maximum ROI.' },
    ],
    cta: 'Boost Your Growth',
    imageAlt: 'Marketing team analyzing charts and graphs related to campaign performance on a large screen',
    relatedServices: ['brand-identity-design', 'web-app-development'],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const service = servicesData[slug];

  const handleCTA = (featureName) => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: `The "${featureName || service.cta}" feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Service Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/services">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
        </Button>
      </div>
    );
  }

  const ServiceIcon = service.icon || Zap;

  return (
    <div className="pt-16 bg-background text-foreground">
      <section className="py-6 bg-secondary border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-sm text-muted-foreground hover:text-primary p-0 h-auto">
            <Link to="/services">
              <ArrowLeft className="h-4 w-4 mr-1.5" />
              All Services
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-20 hero-pattern-minimal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="mb-4">
                <ServiceIcon className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-foreground">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                {service.tagline}
              </p>
              <p className="text-base text-muted-foreground mb-8">
                {service.description}
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-3"
                onClick={() => handleCTA()}
              >
                {service.cta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-lg"
            >
              <img  
                class="w-full h-full object-cover"
                alt={service.imageAlt}
               src="https://images.unsplash.com/photo-1468716819264-c6088257636e" />
              <div className="absolute inset-0 bg-primary/5"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              What We <span className="text-primary">Deliver</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures every aspect of your {service.title.toLowerCase()} is covered, delivering tangible results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
              <ul className="space-y-3">
                {service.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2.5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-sm sm:prose-base prose-invert max-w-none"
               style={{
                '--tw-prose-body': 'hsl(var(--muted-foreground))',
                '--tw-prose-headings': 'hsl(var(--foreground))',
                '--tw-prose-links': 'hsl(var(--primary))',
                '--tw-prose-bold': 'hsl(var(--foreground))',
              }}
            >
              <h3 className="text-xl font-semibold mb-4 !text-foreground">Detailed Overview</h3>
              <div
                dangerouslySetInnerHTML={{ __html: service.longDescription }}
                className="text-sm text-muted-foreground leading-relaxed"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              A structured and transparent process to ensure quality and alignment with your goals.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`md:flex items-center mb-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2">
                  <div className={`card-minimal p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} hover:shadow-primary/30`}>
                    <span className="text-xs font-semibold text-primary block mb-1">Step {index + 1}</span>
                    <h4 className="text-lg font-semibold mb-1 text-foreground">{step.title}</h4>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex md:w-1/2 justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-sm">
                    {index + 1}
                  </div>
                </div>
                 <div className="md:hidden w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-sm my-4 mx-auto">
                    {index + 1}
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                Related <span className="text-primary">Services</span>
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Explore other services that complement {service.title}.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {service.relatedServices.map((slug, index) => {
                const relatedService = servicesData[slug];
                if (!relatedService) return null;
                const RelatedIcon = relatedService.icon || Zap;
                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-minimal p-5 hover:shadow-primary/30"
                  >
                    <RelatedIcon className="h-6 w-6 text-primary mb-2" />
                    <h3 className="text-lg font-semibold mb-1 text-foreground">{relatedService.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{relatedService.description}</p>
                    <Button variant="link" asChild className="p-0 h-auto text-xs text-primary hover:text-primary/80">
                      <Link to={`/services/${slug}`}>
                        Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 hero-pattern-minimal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Users className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Ready to Elevate Your Startup with Our {service.title}?
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} expertise can help you achieve your business goals.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-3"
              asChild
            >
              <Link to="/contact">
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
