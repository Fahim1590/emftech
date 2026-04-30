import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronLeft, Share2 } from 'lucide-react';
import SEO from '../components/common/SEO';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  console.log('Loading post:', slug);

  // Mock data for a single post
  const post = {
    title: "AI in Saudi Arabia: 2025 Trends & Opportunities",
    date: "May 15, 2025",
    author: "Fahad bin Khalid",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Saudi Arabia is at the forefront of the global AI revolution. Explore trends for 2025.",
    content: `
      <p>Saudi Arabia is at the forefront of the global AI revolution. As part of Vision 2030, the Kingdom is investing heavily in artificial intelligence to diversify its economy and build a smarter future.</p>
      
      <h3>The Rise of Local AI Solutions</h3>
      <p>One of the most significant trends we're seeing in 2025 is the shift towards locally-built AI solutions. Saudi businesses are increasingly looking for systems that understand the local context, language nuances, and regulatory requirements.</p>
      
      <h3>AI in Government and Healthcare</h3>
      <p>From smart city initiatives in NEOM to automated patient care in Riyadh's leading hospitals, AI is becoming the backbone of Saudi's public and private sectors.</p>
      
      <blockquote>
        "The digital transformation of Saudi Arabia is not just about technology; it's about empowering people and businesses to reach their full potential."
      </blockquote>
      
      <h3>Opportunities for SMEs</h3>
      <p>Small and medium enterprises now have access to enterprise-grade AI tools that were once only available to large corporations. This leveling of the playing field is driving unprecedented innovation across the Kingdom.</p>
    `
  };

  return (
    <div className="pt-24 pb-20">
      <SEO title={post.title} description={post.excerpt || post.title} />
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="flex items-center text-primary mb-8 hover:translate-x-1 transition-transform inline-block">
          <ChevronLeft size={20} className="mr-2" />
          Back to Blog
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User size={16} />
              <span>{post.author}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="glass-card aspect-video mb-12 overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="prose prose-invert prose-primary max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          <div className="border-t border-white/10 pt-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 font-medium">Share this post:</span>
              <button className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
            <Link to="/contact" className="btn-primary text-sm">
              Discuss AI for Your Business
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostPage;
