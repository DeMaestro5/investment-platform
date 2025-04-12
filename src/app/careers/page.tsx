'use client';

import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import careersBg from '../public/reviewer.jpg';
import heroImg from '../public/Altimeter.jpg';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobOpenings: JobPosition[] = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Join our engineering team to build the future of investment technology.',
    requirements: [
      '5+ years of experience in full-stack development',
      'Expertise in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/GCP)',
      'Strong problem-solving skills',
    ],
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time',
    description:
      'Lead product development and drive innovation in our investment platform.',
    requirements: [
      '3+ years of product management experience',
      'Strong analytical and strategic thinking',
      'Experience in fintech or investment platforms',
      'Excellent communication skills',
    ],
  },
  {
    id: 3,
    title: 'Financial Analyst',
    department: 'Finance',
    location: 'London, UK',
    type: 'Full-time',
    description:
      'Analyze market trends and provide strategic financial insights.',
    requirements: [
      "Bachelor's degree in Finance or related field",
      '2+ years of financial analysis experience',
      'Strong quantitative skills',
      'Knowledge of financial markets',
    ],
  },
];

export default function CareersPage() {
  return (
    <div className='flex min-h-screen flex-col bg-gray-900 text-white'>
      <Navbar />

      <main className='flex-grow mt-16 sm:mt-20 md:mt-24'>
        {/* Hero Section */}
        <section className='relative flex h-[50vh] min-h-[400px] max-h-[600px] items-center justify-center overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90' />
            <Image
              src={heroImg}
              alt='Careers background'
              fill
              className='object-cover opacity-20'
              priority
              quality={90}
            />
          </div>
          <div className='relative z-10 px-4 sm:px-6 md:px-8 text-center max-w-4xl mx-auto'>
            <motion.h1
              className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Build the Future of Investing
            </motion.h1>
            <motion.p
              className='text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 text-gray-200 max-w-3xl mx-auto'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join our team of innovators and help shape the future of financial
              technology. We are looking for passionate individuals who want to
              make a difference.
            </motion.p>
            <motion.button
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              View Open Positions
            </motion.button>
          </div>
        </section>

        {/* Stats Section */}
        <section className='bg-gray-800 py-12 sm:py-16 md:py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10'>
              {[
                { number: '50+', label: 'Team Members' },
                { number: '15+', label: 'Countries' },
                { number: '24/7', label: 'Global Support' },
                { number: '100%', label: 'Remote Friendly' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className='text-center p-4 sm:p-6'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className='text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-2 sm:mb-3'>
                    {stat.number}
                  </div>
                  <div className='text-sm sm:text-base md:text-lg text-gray-300'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.h2
              className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Our Values
            </motion.h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10'>
              {[
                {
                  title: 'Innovation',
                  icon: '🚀',
                  description:
                    'We push boundaries and embrace new technologies to create better solutions.',
                },
                {
                  title: 'Integrity',
                  icon: '🔒',
                  description:
                    'We operate with transparency and maintain the highest ethical standards.',
                },
                {
                  title: 'Impact',
                  icon: '💡',
                  description:
                    'We strive to make a meaningful difference in the financial world.',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className='bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className='text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6'>
                    {value.icon}
                  </div>
                  <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4'>
                    {value.title}
                  </h3>
                  <p className='text-base sm:text-lg text-gray-300'>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='bg-gray-800 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.h2
              className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Benefits & Perks
            </motion.h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
              {[
                { title: 'Competitive Salary', icon: '💰' },
                { title: 'Remote Work Options', icon: '🌍' },
                { title: 'Health Insurance', icon: '🏥' },
                { title: 'Professional Development', icon: '📚' },
                { title: 'Stock Options', icon: '📈' },
                { title: 'Flexible Hours', icon: '⏰' },
                { title: 'Paid Time Off', icon: '✈️' },
                { title: 'Modern Equipment', icon: '💻' },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className='bg-gray-700 p-4 sm:p-6 md:p-8 rounded-xl text-center hover:bg-gray-600 transition-colors duration-300'
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className='text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4'>
                    {benefit.icon}
                  </div>
                  <p className='text-sm sm:text-base md:text-lg font-medium'>
                    {benefit.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.h2
              className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Open Positions
            </motion.h2>
            <div className='space-y-6 sm:space-y-8 md:space-y-10'>
              {jobOpenings.map((job) => (
                <motion.div
                  key={job.id}
                  className='bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl hover:bg-gray-700 transition-colors duration-300'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className='flex flex-col gap-4 sm:gap-6'>
                    <div>
                      <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4'>
                        {job.title}
                      </h3>
                      <div className='flex flex-wrap gap-2 mb-4 sm:mb-6'>
                        <span className='bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm sm:text-base'>
                          {job.department}
                        </span>
                        <span className='bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm sm:text-base'>
                          {job.location}
                        </span>
                        <span className='bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm sm:text-base'>
                          {job.type}
                        </span>
                      </div>
                      <p className='text-base sm:text-lg text-gray-300 mb-4 sm:mb-6'>
                        {job.description}
                      </p>
                      <div className='space-y-2 sm:space-y-3'>
                        {job.requirements.map((req, index) => (
                          <div
                            key={index}
                            className='flex items-center text-sm sm:text-base text-gray-300'
                          >
                            <span className='mr-2'>•</span>
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className='w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800'>
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className='bg-gray-800 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.h2
              className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Application Process
            </motion.h2>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
              {[
                {
                  step: '01',
                  title: 'Apply Online',
                  desc: 'Submit your application through our careers portal',
                  icon: '📝',
                },
                {
                  step: '02',
                  title: 'Initial Review',
                  desc: 'Our team reviews your application',
                  icon: '🔍',
                },
                {
                  step: '03',
                  title: 'Interviews',
                  desc: 'Meet with potential team members',
                  icon: '💬',
                },
                {
                  step: '04',
                  title: 'Decision',
                  desc: 'Receive our decision within 2 weeks',
                  icon: '✅',
                },
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  className='text-center bg-gray-700 p-4 sm:p-6 md:p-8 rounded-xl hover:bg-gray-600 transition-colors duration-300'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className='text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4'>
                    {process.icon}
                  </div>
                  <div className='text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-2 sm:mb-3'>
                    {process.step}
                  </div>
                  <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3'>
                    {process.title}
                  </h3>
                  <p className='text-sm sm:text-base text-gray-300'>
                    {process.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.h2
              className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Our Culture
            </motion.h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12'>
              <motion.div
                className='flex flex-col justify-center order-2 md:order-1 space-y-6 sm:space-y-8'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div>
                  <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4'>
                    Work-Life Balance
                  </h3>
                  <p className='text-base sm:text-lg text-gray-300'>
                    We believe in maintaining a healthy work-life balance. Our
                    flexible work arrangements and generous time-off policies
                    ensure our team members can perform at their best while
                    enjoying their personal lives.
                  </p>
                </div>
                <div>
                  <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4'>
                    Continuous Learning
                  </h3>
                  <p className='text-base sm:text-lg text-gray-300'>
                    We invest in our team&apos;s growth through regular
                    training, conferences, and learning opportunities. Every
                    team member has access to resources to develop their skills
                    and advance their careers.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className='order-1 md:order-2 mb-8 md:mb-0'
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className='aspect-[3/2] md:aspect-[4/3] w-full rounded-xl overflow-hidden relative'>
                  <Image
                    src={careersBg}
                    alt='Team culture'
                    fill
                    className='object-cover'
                    quality={90}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
