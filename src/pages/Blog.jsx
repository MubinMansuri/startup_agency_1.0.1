
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSubscribe = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: `Newsletter subscription isn't implemented yet. You can request it! 🚀`,
    });
  };

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'funding', name: 'Funding' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'product', name: 'Product' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Mastering Seed Funding: A Startup’s Guide',
      slug: 'mastering-seed-funding',
      excerpt: 'Navigate the complexities of seed funding and secure the capital to fuel your startup\'s early growth.',
      category: 'funding',
      author: 'Sarah Chen',
      date: '2025-05-20',
      imageAlt: 'Business people discussing charts and financial data at a modern office desk, focusing on seed funding strategy',
      featured: true,
    },
    {
      id: 2,
      title: 'Lean Product Development: Build, Measure, Learn',
      slug: 'lean-product-development',
      excerpt: 'Implement lean methodologies to efficiently build products that resonate with your target market.',
      category: 'product',
      author: 'Marcus Cole',
      date: '2025-05-15',
      imageAlt: 'Colorful sticky notes on a glass wall during a dynamic product brainstorming session for lean development',
    },
    {
      id: 3,
      title: 'Content Marketing for Startups: Drive Growth on a Budget',
      slug: 'content-marketing-for-startups',
      excerpt: 'Learn effective content strategies to attract and engage your audience without breaking the bank.',
      category: 'marketing',
      author: 'Elena Rodriguez',
      date: '2025-05-10',
      imageAlt: 'Laptop displaying content creation software with a cup of coffee and notebook on a minimalist desk',
    },
    {
      id: 4,
      title: 'The Art of the Pivot: When and How to Change Direction',
      slug: 'art-of-the-pivot',
      excerpt: 'Understand the critical decision-making process behind a successful startup pivot.',
      category: 'strategy',
      author: 'David Miller',
      date: '2025-05-05',
      imageAlt: 'A compass pointing in a new direction overlayed on a strategic business map, symbolizing a startup pivot',
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || post !== featuredPost);


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
              StartupForge <span className="text-primary">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Actionable advice, industry trends, and expert strategies to fuel your startup journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-input border border-border rounded-md text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1.5 text-xs rounded-full transition-all font-medium ${selectedCategory === category.id ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary/50'}`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-minimal md:flex overflow-hidden hover:shadow-primary/30"
            >
              <div className="md:w-1/2 relative aspect-video md:aspect-auto overflow-hidden group">
                <img    
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={featuredPost.imageAlt}
                 src="https://images.unsplash.com/photo-1627577741153-74b82d87607b" />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <span className="text-xs text-primary font-semibold uppercase mb-2 tracking-wider">{featuredPost.category}</span>
                <h2 className="text-2xl lg:text-3xl font-semibold mb-3 text-foreground hover:text-primary transition-colors">
                  <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{featuredPost.excerpt}</p>
                <div className="text-xs text-muted-foreground flex items-center mb-4">
                  <User className="h-3.5 w-3.5 mr-1.5" /> {featuredPost.author}
                  <span className="mx-2">·</span>
                  <Calendar className="h-3.5 w-3.5 mr-1.5" /> {new Date(featuredPost.date).toLocaleDateString()}
                </div>
                <Button asChild variant="link" className="p-0 h-auto self-start text-sm text-primary hover:text-primary/80">
                  <Link to={`/blog/${featuredPost.slug}`}>Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="card-minimal group flex flex-col hover:shadow-primary/30"
              >
                <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                  <img    
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={post.imageAlt}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </Link>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs text-primary font-semibold uppercase mb-1.5 tracking-wider">{post.category}</span>
                  <h3 className="text-md font-semibold mb-2 text-foreground hover:text-primary transition-colors flex-grow">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <div className="text-xs text-muted-foreground flex items-center mt-auto pt-2 border-t border-border">
                    <User className="h-3.5 w-3.5 mr-1.5" /> {post.author}
                    <span className="mx-1.5">·</span>
                    <Calendar className="h-3.5 w-3.5 mr-1.5" /> {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 col-span-full"
            >
              <Edit3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No articles match your current search or filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Tag className="h-10 w-10 text-primary mx-auto mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Stay Ahead of the Curve
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest startup insights, strategies, and success stories delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => {e.preventDefault(); handleSubscribe();}}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-input border border-border rounded-md text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 text-sm">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
