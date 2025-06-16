
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState('all');

  const handleViewProject = (projectName) => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: `Viewing details for "${projectName}" isn't implemented yet. You can request it! 🚀`,
    });
  };

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'fintech', name: 'FinTech' },
    { id: 'healthtech', name: 'HealthTech' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'saas', name: 'SaaS' },
  ];

  const projects = [
    {
      id: 1,
      title: 'PayFlow',
      category: 'fintech',
      description: 'Streamlined payment processing for SMBs.',
      imageAlt: 'Sleek fintech dashboard showing transaction analytics and charts',
      tags: ['React', 'Node.js', 'Stripe'],
      funding: '$2.5M',
      users: '10k+',
    },
    {
      id: 2,
      title: 'HealthSync AI',
      category: 'healthtech',
      description: 'AI-driven patient management platform.',
      imageAlt: 'Clean medical app interface with patient charts and vital signs display',
      tags: ['Vue.js', 'Python', 'AI/ML'],
      funding: '$5M',
      users: '500+ Clinics',
    },
    {
      id: 3,
      title: 'EcoMarket',
      category: 'ecommerce',
      description: 'Marketplace for sustainable products.',
      imageAlt: 'Modern e-commerce site with vibrant green product listings and eco-friendly theme',
      tags: ['Next.js', 'Shopify API', 'GraphQL'],
      funding: '$1.8M',
      users: '50k+ Products',
    },
    {
      id: 4,
      title: 'TeamFlow',
      category: 'saas',
      description: 'Collaborative project management tool.',
      imageAlt: 'Intuitive SaaS dashboard for project tracking with task lists and progress bars',
      tags: ['React', 'Firebase', 'Realtime DB'],
      funding: '$3.2M',
      users: '25k+ Teams',
    },
    {
      id: 5,
      title: 'AssetGuard',
      category: 'fintech',
      description: 'Secure digital asset management platform.',
      imageAlt: 'Secure financial platform interface for asset tracking with cryptographic elements',
      tags: ['Angular', 'Java', 'Blockchain'],
      funding: '$4M',
      users: '15k+ Users',
    },
    {
      id: 6,
      title: 'WellCare Connect',
      category: 'healthtech',
      description: 'Telemedicine app for remote consultations.',
      imageAlt: 'User-friendly telemedicine app interface showing a doctor and patient in a video call',
      tags: ['Flutter', 'WebRTC', 'GCP'],
      funding: '$6.5M',
      users: '1M+ Consults',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              Our Success Stories
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore a selection of innovative startups we've partnered with to build, launch, and scale their visions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 text-xs sm:text-sm rounded-full transition-all font-medium ${activeFilter === category.id ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary/50'}`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="card-minimal group flex flex-col hover:shadow-primary/30"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img    
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={project.imageAlt}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-1 text-foreground">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    <span className="flex items-center"><DollarSign className="h-3 w-3 mr-1"/>{project.funding} Raised</span>
                    <span className="flex items-center"><Users className="h-3 w-3 mr-1"/>{project.users}</span>
                  </div>
                  
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full mt-auto text-xs hover:border-primary hover:text-primary"
                    onClick={() => handleViewProject(project.title)}
                  >
                    View Case Study <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
           {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 col-span-full"
            >
              <Layers className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No projects found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Partner with Us for Your Next Success
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's build the next game-changing startup together. Share your vision with our expert team.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-3"
              asChild
            >
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
