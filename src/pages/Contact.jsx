import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, Briefcase, MessageSquare, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'general',
    budget: 'not-specified',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent (Simulated)",
      description: "Thanks for reaching out! We'll get back to you shortly. (This is a demo, no data was actually sent).",
    });
    // Reset form (optional)
    // setFormData({ name: '', email: '', company: '', service: 'general', budget: 'not-specified', message: '' });
  };

  const contactMethods = [
    { icon: Mail, text: 'hello@startupforge.com', href: 'mailto:hello@startupforge.com' },
    { icon: Phone, text: '+1 (555) 010-FORGE', href: 'tel:+155501036743' },
    { icon: MapPin, text: 'Innovate Hub, SF, CA', href: '#' },
  ];

  const services = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'strategy', label: 'Strategy & Consulting' },
    { value: 'design', label: 'Brand & Design' },
    { value: 'development', label: 'Web/App Development' },
    { value: 'marketing', label: 'Digital Marketing' },
  ];

  const budgetRanges = [
    { value: 'not-specified', label: 'Not Specified' },
    { value: 'under-5k', label: '< $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: 'over-50k', label: '> $50,000' },
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
              Let's Talk
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're excited to hear about your project. Reach out and let's explore how StartupForge can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Contact Information</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Find us here or drop us a line. We aim to respond within one business day.
                </p>
                <div className="space-y-3">
                  {contactMethods.map((method) => (
                    <a 
                      key={method.text} 
                      href={method.href} 
                      target={method.href.startsWith('mailto') || method.href.startsWith('tel') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center group"
                    >
                      <method.icon className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{method.text}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                 <h3 className="text-lg font-semibold mb-2 text-foreground">Business Hours</h3>
                 <p className="text-sm text-muted-foreground">Monday - Friday: 9 AM - 6 PM (PST)</p>
              </div>

            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="card-minimal p-6 md:p-8 space-y-5"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-1">Send Us a Message</h2>
              <p className="text-sm text-muted-foreground !mb-5">Tell us a bit about your project or inquiry.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required className="w-full pl-8 pr-3 py-2 bg-input border border-border rounded-md text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="John Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-8 pr-3 py-2 bg-input border border-border rounded-md text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="you@example.com" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-medium text-muted-foreground mb-1">Company (Optional)</label>
                <div className="relative">
                    <Briefcase className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <input type="text" name="company" id="company" value={formData.company} onChange={handleInputChange} className="w-full pl-8 pr-3 py-2 bg-input border border-border rounded-md text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your Company Inc." />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label htmlFor="service" className="block text-xs font-medium text-muted-foreground mb-1">Service of Interest</label>
                   <select name="service" id="service" value={formData.service} onChange={handleInputChange} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none">
                    {services.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-xs font-medium text-muted-foreground mb-1">Budget Range (Optional)</label>
                  <select name="budget" id="budget" value={formData.budget} onChange={handleInputChange} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary appearance-none">
                    {budgetRanges.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1">Message</label>
                <div className="relative">
                    <MessageSquare className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                    <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} required rows={4} className="w-full pl-8 pr-3 py-2 bg-input border border-border rounded-md text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm py-2.5">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;