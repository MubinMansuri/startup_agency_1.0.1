
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Briefcase } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const Team = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: `Connecting to ${platform} isn't implemented yet. You can request it! 🚀`,
    });
  };

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Lead Strategist',
      bio: 'Visionary leader with 15+ years in scaling tech startups. Expert in market entry and growth strategies.',
      imageAlt: 'Professional headshot of Sarah Chen, a confident Asian woman, CEO, against a modern office backdrop',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Cole',
      role: 'CTO & Head of Engineering',
      bio: 'Architect of robust, scalable systems. Passionate about AI and emerging technologies.',
      imageAlt: 'Professional headshot of Marcus Cole, an African American man, CTO, with a subtle tech-themed background',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Elena Rodriguez',
      role: 'Chief Design Officer',
      bio: 'Award-winning designer focused on user-centric experiences and impactful branding.',
      imageAlt: 'Professional headshot of Elena Rodriguez, a Latina woman, designer, in a bright and creative studio setting',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'David Miller',
      role: 'VP of Product',
      bio: 'Drives product vision and execution, ensuring alignment with user needs and business goals.',
      imageAlt: 'Professional headshot of David Miller, a Caucasian man, VP of Product, looking approachable and thoughtful',
      social: { linkedin: '#', twitter: '#' }
    },
  ];
  
  const advisors = [
     {
      name: 'Dr. Ava Green',
      role: 'AI & Ethics Advisor',
      expertise: 'PhD in AI Ethics, Stanford University',
      imageAlt: 'Professional headshot of Dr. Ava Green, an academic looking woman, AI expert, possibly in a library or university setting',
    },
    {
      name: 'Kenji Tanaka',
      role: 'Fintech Advisor',
      expertise: 'Ex-VP, Goldman Sachs Digital Assets',
      imageAlt: 'Professional headshot of Kenji Tanaka, an Asian man in a sharp business suit, finance expert, against a cityscape',
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
              Meet Our Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The driving force behind StartupForge. A collective of passionate experts dedicated to your success.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Leadership
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Seasoned professionals steering our mission to empower startups.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-minimal p-6 text-center flex flex-col items-center hover:shadow-primary/30"
              >
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                  <img    
                    class="w-full h-full object-cover"
                    alt={member.imageAlt}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-3 flex-grow">{member.bio}</p>
                
                <div className="flex space-x-3 mt-auto">
                  {member.social.linkedin && (
                    <Button 
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => handleSocialClick('LinkedIn')}
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  )}
                  {member.social.twitter && (
                    <Button 
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => handleSocialClick('Twitter')}
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Strategic Advisors
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Industry veterans providing invaluable guidance and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-minimal p-6 flex items-center space-x-4 hover:shadow-primary/30"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50 shadow-md">
                 <img    
                    class="w-full h-full object-cover"
                    alt={advisor.imageAlt}
                   src="https://images.unsplash.com/photo-1686434538579-4723a0cf2890" />
                </div>
                <div>
                  <h3 className="text-md font-semibold text-foreground">{advisor.name}</h3>
                  <p className="text-xs text-primary mb-1">{advisor.role}</p>
                  <p className="text-xs text-muted-foreground">{advisor.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Briefcase className="h-10 w-10 text-primary mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
              We're looking for passionate individuals to help shape the future of startups. Explore career opportunities at StartupForge.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-3"
              onClick={() => handleSocialClick('Careers Page')}
            >
              View Open Roles
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
