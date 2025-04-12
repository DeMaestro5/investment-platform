'use client';

import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Badge } from '../../components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '../../components/ui/card';
import Image from 'next/image';

// Blog post interface
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  featured?: boolean;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding Market Trends in 2024',
    excerpt:
      'A comprehensive analysis of emerging market trends and their potential impact on trading strategies.',
    content: 'Full content here...',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    category: 'Market Analysis',
    image: '/blog/market-trends.jpg',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: "Cryptocurrency Trading: A Beginner's Guide",
    excerpt:
      'Essential tips and strategies for those new to cryptocurrency trading.',
    content: 'Full content here...',
    author: 'Michael Chen',
    date: '2024-03-10',
    category: 'Cryptocurrency',
    image: '/blog/crypto-guide.jpg',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 3,
    title: 'Risk Management in Forex Trading',
    excerpt:
      'Learn how to effectively manage risks in your forex trading portfolio.',
    content: 'Full content here...',
    author: 'Elena Rodriguez',
    date: '2024-03-05',
    category: 'Forex',
    image: '/blog/forex-risk.jpg',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Technical Analysis Tools Every Trader Should Know',
    excerpt:
      'An overview of essential technical analysis tools and how to use them effectively.',
    content: 'Full content here...',
    author: 'David Kim',
    date: '2024-03-01',
    category: 'Trading Tools',
    image: '/blog/technical-analysis.jpg',
    readTime: '7 min read',
  },
];

// Categories for filtering
const categories = [
  'All',
  'Market Analysis',
  'Cryptocurrency',
  'Forex',
  'Trading Tools',
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className='min-h-screen bg-gray-900 text-white overflow-x-hidden'>
      <Navbar />

      <main className='w-full pt-20'>
        {/* Hero Section */}
        <section className='relative py-16 md:py-24 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90 z-0'></div>
          <div className="absolute inset-0 bg-[url('/images/blog-bg.jpg')] bg-cover bg-center opacity-20 z-0"></div>
          <div className='container mx-auto px-4 relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                Trading <span className='text-yellow-500'>Insights</span>
              </h1>
              <p className='text-xl text-gray-300 mb-8'>
                Stay informed with our latest market analysis, trading
                strategies, and industry updates.
              </p>
              <div className='h-1 w-24 bg-yellow-500 mx-auto'></div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className='py-12 bg-gray-800'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Featured Articles
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <Card key={post.id} className='bg-gray-700 border-0'>
                    <div className='relative h-48 w-full'>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className='object-cover rounded-t-lg'
                      />
                    </div>
                    <CardHeader>
                      <Badge variant='secondary' className='mb-2'>
                        {post.category}
                      </Badge>
                      <CardTitle className='text-xl'>{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-300'>{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className='flex justify-between items-center'>
                      <span className='text-sm text-gray-400'>
                        {post.readTime}
                      </span>
                      <span className='text-sm text-gray-400'>{post.date}</span>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Blog Posts with Categories */}
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className='bg-gray-800 border-0 hover:bg-gray-700 transition-colors'
                >
                  <div className='relative h-48 w-full'>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className='object-cover rounded-t-lg'
                    />
                  </div>
                  <CardHeader>
                    <Badge variant='secondary' className='mb-2'>
                      {post.category}
                    </Badge>
                    <CardTitle className='text-xl'>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-300'>{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className='flex justify-between items-center'>
                    <span className='text-sm text-gray-400'>
                      {post.readTime}
                    </span>
                    <span className='text-sm text-gray-400'>{post.date}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className='py-16 bg-gray-800'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl font-bold mb-6'>Stay Updated</h2>
              <p className='text-xl text-gray-300 mb-8'>
                Subscribe to our newsletter for the latest trading insights and
                market updates.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-500'
                />
                <button className='px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors duration-300'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
