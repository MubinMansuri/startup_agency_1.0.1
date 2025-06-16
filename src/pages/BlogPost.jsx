
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag, MessageSquare, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BlogPost = () => {
  const { slug } = useParams();
  const { toast } = useToast();

  const handleInteraction = (featureName) => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: `The "${featureName}" feature isn't implemented yet. You can request it! 🚀`,
    });
  };
  
  const blogPostsData = {
    'mastering-seed-funding': {
      title: 'Mastering Seed Funding: A Startup’s Guide',
      category: 'Funding',
      author: 'Sarah Chen',
      date: '2025-05-20',
      imageAlt: 'Dynamic image of business people intensely discussing charts and financial data for seed funding strategy',
      tags: ['Seed Funding', 'Investment', 'Startup Finance'],
      content: `
        <p class="lead">Securing seed funding is a critical milestone for early-stage startups. This guide breaks down the process, from preparing your pitch to navigating term sheets.</p>
        <h2>Understanding the Seed Stage</h2>
        <p>The seed stage is typically the first official equity funding round. It aims to provide enough capital for a startup to get its operations off the ground, develop its product, and begin to gain market traction.</p>
        <h3>Key Objectives of Seed Funding:</h3>
        <ul>
          <li>Product Development (MVP to Beta)</li>
          <li>Initial Team Hiring</li>
          <li>Market Research and Validation</li>
          <li>Early Customer Acquisition</li>
        </ul>
        <h2>Preparing Your Pitch</h2>
        <p>A compelling pitch is crucial. Investors want to see a clear problem, a viable solution, a large market opportunity, a strong team, and a sound business model.</p>
        <img  alt="Startup team presenting a visually engaging pitch deck in a modern, sunlit meeting room" class="my-6 rounded-md shadow-lg" src="https://images.unsplash.com/photo-1531796404855-370e2405e388" />
        <h3>Essential Pitch Deck Slides:</h3>
        <ol>
          <li>Problem/Opportunity</li>
          <li>Solution/Product</li>
          <li>Market Size (TAM, SAM, SOM)</li>
          <li>Business Model</li>
          <li>Team</li>
          <li>Traction/Milestones</li>
          <li>Financial Projections</li>
          <li>The Ask (Funding Amount & Use of Funds)</li>
        </ol>
        <h2>Finding and Approaching Investors</h2>
        <p>Research investors who specialize in your industry and stage. Angel investors, seed-stage VCs, and even crowdfunding platforms can be good sources.</p>
        <blockquote>Networking is key. Warm introductions often carry more weight than cold outreach. Attend industry events, leverage LinkedIn, and seek referrals.</blockquote>
        <h2>Navigating Term Sheets</h2>
        <p>A term sheet outlines the proposed terms of the investment. Key elements to understand include valuation, investment amount, equity offered, investor rights, and anti-dilution provisions. It's advisable to seek legal counsel at this stage.</p>
        <h2>Conclusion</h2>
        <p>Mastering seed funding requires diligence, a strong narrative, and resilience. Focus on building a solid foundation for your startup, and the right investors will recognize your potential.</p>
      `,
    },
     'lean-product-development': {
      title: 'Lean Product Development: Build, Measure, Learn',
      category: 'Product',
      author: 'Marcus Cole',
      date: '2025-05-15',
      imageAlt: 'Close-up of colorful sticky notes meticulously arranged on a glass wall during a product brainstorming session',
      tags: ['Lean Startup', 'MVP', 'Agile', 'Product Management'],
      content: `
        <p class="lead">The Lean Startup methodology, centered around the "Build-Measure-Learn" feedback loop, provides a scientific approach to creating and managing startups and getting a desired product to customers' hands faster.</p>
        <h2>Core Principles of Lean</h2>
        <p>Lean product development emphasizes capital efficiency and leverages human creativity more effectively. It's about working smarter, not just harder.</p>
        <h3>1. Eliminate Waste</h3>
        <p>Anything that doesn't add value to the customer is considered waste. This includes building features nobody wants, over-processing, or unnecessary handoffs.</p>
        <h3>2. Build an MVP (Minimum Viable Product)</h3>
        <p>The MVP is the version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort.</p>
        <img  alt="Clear diagram illustrating the MVP concept progression from skateboard to scooter to bicycle to car" class="my-6 rounded-md shadow-lg" src="https://images.unsplash.com/photo-1696677203942-d23d858f5651" />
        <h3>3. Validated Learning</h3>
        <p>Startups exist to learn how to build a sustainable business. This learning can be validated scientifically by running frequent experiments that allow entrepreneurs to test each element of their vision.</p>
        <h2>The Build-Measure-Learn Loop</h2>
        <p>This is the cornerstone of lean development:</p>
        <ul>
          <li><strong>Build:</strong> Quickly build an MVP or a feature.</li>
          <li><strong>Measure:</strong> Collect data on how customers react and use the product/feature.</li>
          <li><strong>Learn:</strong> Analyze the data to gain insights and decide whether to pivot (change strategy) or persevere (continue on the current path).</li>
        </ul>
        <blockquote>The goal of the loop is to iterate quickly and continuously improve the product based on real customer feedback.</blockquote>
        <h2>Benefits for Startups</h2>
        <p>Adopting lean principles can significantly increase a startup's chances of success by:</p>
        <ul>
          <li>Reducing wasted time and resources.</li>
          <li>Ensuring the product meets actual market needs.</li>
          <li>Allowing for quicker adaptation to market changes.</li>
          <li>Fostering a culture of continuous improvement.</li>
        </ul>
        <h2>Conclusion</h2>
        <p>Lean product development is not just a set of tools; it's a mindset. By embracing experimentation, customer feedback, and iterative design, startups can navigate uncertainty and build products customers truly love.</p>
      `,
    },
     'content-marketing-for-startups': {
      title: 'Content Marketing for Startups: Drive Growth on a Budget',
      category: 'Marketing',
      author: 'Elena Rodriguez',
      date: '2025-05-10',
      imageAlt: 'Overhead shot of a laptop displaying content creation software, surrounded by a coffee cup, notebook, and pens on a clean desk',
      tags: ['Content Strategy', 'SEO', 'Blogging', 'Startups'],
       content: `
        <p class="lead">Content marketing is a powerful tool for startups to build brand awareness, attract leads, and establish thought leadership—all without a massive budget. This guide explores effective strategies tailored for lean operations.</p>
        <h2>Why Content Marketing Matters for Startups</h2>
        <p>Startups often face fierce competition and limited resources. Content marketing levels the playing field by allowing you to connect with your audience authentically and provide value.</p>
        <h3>Key Benefits:</h3>
        <ul>
          <li>Builds Trust and Credibility</li>
          <li>Improves SEO and Organic Traffic</li>
          <li>Generates Leads and Nurtures Prospects</li>
          <li>Establishes Your Brand as an Authority</li>
        </ul>
        <h2>Developing a Lean Content Strategy</h2>
        <p>Focus on quality over quantity. Understand your audience's pain points and create content that directly addresses their needs.</p>
        <img  alt="Mind map diagram showing different content types (blog, video, podcast) connected to a central theme of customer needs" class="my-6 rounded-md shadow-lg" src="https://images.unsplash.com/photo-1676276374803-36e48196d5ac" />
        <h3>Content Pillars:</h3>
        <ol>
          <li><strong>Identify Core Themes:</strong> What are the 2-3 main topics your startup can own?</li>
          <li><strong>Keyword Research:</strong> Understand what your audience is searching for.</li>
          <li><strong>Content Formats:</strong> Choose formats that suit your resources (blogs, short videos, infographics).</li>
          <li><strong>Distribution Channels:</strong> Where does your audience hang out? (Social media, forums, email).</li>
        </ol>
        <h2>Creating High-Impact Content on a Budget</h2>
        <p>Leverage free tools, repurpose content, and focus on evergreen topics that remain relevant over time.</p>
        <blockquote>User-generated content and case studies can be incredibly powerful and cost-effective. Encourage your early customers to share their stories.</blockquote>
        <h2>Measuring Success</h2>
        <p>Track key metrics like website traffic, engagement rates, lead generation, and keyword rankings to understand what's working and refine your strategy.</p>
        <h2>Conclusion</h2>
        <p>Content marketing is a marathon, not a sprint. Consistency, value, and a deep understanding of your audience are the keys to driving sustainable growth for your startup on a budget.</p>
      `,
    },
    'art-of-the-pivot': {
      title: 'The Art of the Pivot: When and How to Change Direction',
      category: 'Strategy',
      author: 'David Miller',
      date: '2025-05-05',
      imageAlt: 'Stylized image of a compass with its needle pointing towards a new, promising direction on an abstract business map',
      tags: ['Startup Strategy', 'Pivoting', 'Business Model', 'Adaptability'],
      content: `
        <p class="lead">One of the most crucial skills for a startup founder is knowing when and how to pivot. A well-executed pivot can be the difference between failure and breakthrough success. This guide explores the signals and strategies for effective pivoting.</p>
        <h2>Recognizing the Need to Pivot</h2>
        <p>Ignoring the signs can be detrimental. Be honest with your data and feedback. A pivot isn't an admission of failure; it's a strategic move based on learning.</p>
        <h3>Common Triggers for a Pivot:</h3>
        <ul>
          <li>Weak Market Traction Despite Efforts</li>
          <li>Negative Customer Feedback on Core Product</li>
          <li>Unsustainable Business Model</li>
          <li>Stronger Opportunity Identified</li>
          <li>Intense, Unbeatable Competition in Current Niche</li>
        </ul>
        <h2>Types of Startup Pivots</h2>
        <p>Pivots can take many forms. The key is to leverage what you've already built or learned.</p>
        <img  alt="Infographic showing different types of startup pivots: Zoom-in, Zoom-out, Customer Segment, Technology, etc." class="my-6 rounded-md shadow-lg" src="https://images.unsplash.com/photo-1682514149196-e75fe2d1b899" />
        <h3>Popular Pivot Strategies:</h3>
        <ol>
          <li><strong>Zoom-in Pivot:</strong> A single feature becomes the whole product.</li>
          <li><strong>Zoom-out Pivot:</strong> The product becomes a single feature of a larger suite.</li>
          <li><strong>Customer Segment Pivot:</strong> Focusing on a different target audience.</li>
          <li><strong>Problem Pivot:</strong> Addressing a different, often related, problem for the same customer segment.</li>
          <li><strong>Technology Pivot:</strong> Using a different technology stack to achieve the same solution, often for better scalability or efficiency.</li>
        </ol>
        <h2>Executing a Successful Pivot</h2>
        <p>Communicate clearly with your team and stakeholders. Test your new hypothesis quickly and gather data before committing fully.</p>
        <blockquote>A pivot should be a change in strategy, not a desperate lurch. It should be informed by validated learning. - Eric Ries</blockquote>
        <h2>Conclusion</h2>
        <p>The art of the pivot lies in adaptability, data-driven decision-making, and the courage to change course. Embrace learning, stay agile, and be prepared to evolve your startup's vision to meet market realities.</p>
      `,
    }
  };

  const blogPost = blogPostsData[slug] || Object.values(blogPostsData)[0]; 
  
  const processContent = (htmlContent) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    const imgReplaceElements = tempDiv.querySelectorAll('img-replace');
    imgReplaceElements.forEach(el => {
      const alt = el.getAttribute('alt');
      const figcaptionText = el.textContent || alt; 
      const figure = document.createElement('figure');
      figure.className = 'my-6';
      const img = document.createElement('img');
      img.alt = alt;
      img.src = el.getAttribute('src') || `https://source.unsplash.com/random/800x450/?${encodeURIComponent(alt)}`; // Placeholder if src is missing
      img.className = 'rounded-md shadow-lg w-full h-auto';
      figure.appendChild(img);
      
      const figcaption = document.createElement('figcaption');
      figcaption.className = 'text-xs text-center text-muted-foreground mt-2';
      figcaption.textContent = figcaptionText;
      figure.appendChild(figcaption);
      
      el.parentNode.replaceChild(figure, el);
    });
    
    return tempDiv.innerHTML;
  };

  const processedContent = processContent(blogPost.content);

  return (
    <div className="pt-16 bg-background text-foreground">
      <section className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-sm text-muted-foreground hover:text-primary p-0 h-auto">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-1.5" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      <section className="pb-10 md:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs text-primary font-semibold uppercase mb-2 inline-block tracking-wider">
              {blogPost.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-foreground">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground mb-6">
              <div className="flex items-center">
                <User className="h-3.5 w-3.5 mr-1" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8 shadow-lg group">
              <img    
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt={blogPost.imageAlt}
               src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none"
             style={{
              '--tw-prose-body': 'hsl(var(--muted-foreground))',
              '--tw-prose-headings': 'hsl(var(--foreground))',
              '--tw-prose-links': 'hsl(var(--primary))',
              '--tw-prose-bold': 'hsl(var(--foreground))',
              '--tw-prose-bullets': 'hsl(var(--primary))',
              '--tw-prose-hr': 'hsl(var(--border))',
              '--tw-prose-quotes': 'hsl(var(--muted-foreground))',
              '--tw-prose-quote-borders': 'hsl(var(--primary))',
              '--tw-prose-captions': 'hsl(var(--muted-foreground))',
              '--tw-prose-code': 'hsl(var(--foreground))',
              '--tw-prose-pre-code': 'hsl(var(--foreground))',
              '--tw-prose-pre-bg': 'hsl(var(--secondary))',
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: processedContent }} />
          </motion.div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-border pt-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {blogPost.tags.map((tag) => (
                <Button 
                  key={tag}
                  variant="outline"
                  size="sm"
                  className="text-xs px-2.5 py-1 h-auto border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary/50"
                  onClick={() => handleInteraction(`Tag: ${tag}`)}
                >
                  <Tag className="h-3 w-3 mr-1.5" /> {tag}
                </Button>
              ))}
            </div>
            <div className="flex items-center space-x-3">
               <Button 
                variant="outline" 
                size="sm"
                className="text-xs hover:border-primary hover:text-primary"
                onClick={() => handleInteraction('Share Article')}
              >
                <Share2 className="h-3.5 w-3.5 mr-1.5" /> Share
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="text-xs hover:border-primary hover:text-primary"
                onClick={() => handleInteraction('Comment on Article')}
              >
                <MessageSquare className="h-3.5 w-3.5 mr-1.5" /> Comment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-foreground">
            Keep Reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.values(blogPostsData).filter(p => p.slug !== slug).slice(0, 2).map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-minimal p-4 hover:shadow-primary/30"
              >
                 <div className="aspect-[16/10] mb-3 rounded overflow-hidden group">
                    <img  
                        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        alt={post.imageAlt}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <h3 className="text-md font-semibold mb-1 text-foreground hover:text-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{post.content.match(/<p.*?>(.*?)<\/p>/)?.[1].replace(/<[^>]+>/g, '') || 'Read more...'}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
