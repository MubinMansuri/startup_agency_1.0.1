
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, CheckCircle, Shield, Building, Rocket, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We forge partnerships, not just projects.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Driven',
      description: 'Constantly exploring new technologies and strategies to give you an edge.',
    },
    {
      icon: CheckCircle,
      title: 'Results-Oriented',
      description: 'Focused on delivering measurable outcomes and tangible business growth.',
    },
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'Operating with transparency, honesty, and the highest ethical standards.',
    },
  ];

  const milestones = [
    { year: '2018', event: 'Founded with a Vision', icon: Building },
    { year: '2020', event: '100+ Startups Empowered', icon: Rocket },
    { year: '2022', event: 'Expanded Service Offerings', icon: TrendingUp },
    { year: '2024', event: 'Recognized Industry Leader', icon: Award },
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
              About StartupForge
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a passionate team of strategists, designers, and developers committed to empowering startups and driving innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                At StartupForge, our mission is to be the catalyst for entrepreneurial success. We provide startups with the strategic insights, creative design, and robust technology they need to thrive in a competitive landscape.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                We believe in the power of great ideas and are dedicated to transforming them into impactful businesses that shape the future. Our approach is collaborative, data-driven, and always focused on delivering exceptional value.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
            >
              <img   
                class="w-full h-full object-cover"
                alt="Diverse team collaborating in a bright, modern office space with laptops and whiteboards"
               src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
              <div className="absolute inset-0 bg-primary/10"></div>
            </motion.div>
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
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-minimal p-6 text-center hover:shadow-primary/30"
              >
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our story of growth and impact.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`md:flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2">
                  <div className={`card-minimal p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} hover:shadow-primary/30`}>
                    <span className="text-sm font-semibold text-primary block mb-1">{milestone.year}</span>
                    <h4 className="text-lg font-semibold mb-1 text-foreground">{milestone.event}</h4>
                  </div>
                </div>
                 <div className="hidden md:flex md:w-1/2 justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-md">
                    <milestone.icon className="w-4 h-4" />
                  </div>
                </div>
                 <div className="md:hidden w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-md my-4 mx-auto">
                    <milestone.icon className="w-4 h-4" />
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Join Us on Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you're a founder with a groundbreaking idea or a talent looking to make an impact, let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-3" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-3 hover:border-primary" asChild>
              <Link to="/team">View Careers</Link>
            </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
