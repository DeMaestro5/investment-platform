'use client';

import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { motion } from 'framer-motion';
// import Image from 'next/image';

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
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar />

      {/* Hero Section */}
      <section className='relative h-[600px] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90' />
          <div className="absolute inset-0 bg-[url('/images/careers-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          <motion.h1
            className='text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Build the Future of Investing
          </motion.h1>
          <motion.p
            className='text-xl mb-8 text-gray-200'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our team of innovators and help shape the future of financial
            technology. We are looking for passionate individuals who want to
            make a difference.
          </motion.p>
          <motion.button
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            View Open Positions
          </motion.button>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid md:grid-cols-4 gap-8'>
            {[
              { number: '50+', label: 'Team Members' },
              { number: '15+', label: 'Countries' },
              { number: '24/7', label: 'Global Support' },
              { number: '100%', label: 'Remote Friendly' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className='text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='text-4xl font-bold text-blue-500 mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-300'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <motion.h2
            className='text-4xl font-bold text-center mb-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <div className='grid md:grid-cols-3 gap-8'>
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
                className='bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-colors duration-300'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className='text-4xl mb-4'>{value.icon}</div>
                <h3 className='text-2xl font-semibold mb-4'>{value.title}</h3>
                <p className='text-gray-300'>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='bg-gray-800 py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <motion.h2
            className='text-4xl font-bold text-center mb-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Benefits & Perks
          </motion.h2>
          <div className='grid md:grid-cols-4 gap-8'>
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
                className='bg-gray-700 p-6 rounded-xl text-center hover:bg-gray-600 transition-colors duration-300'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='text-3xl mb-3'>{benefit.icon}</div>
                <p className='font-medium'>{benefit.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <motion.h2
            className='text-4xl font-bold text-center mb-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Open Positions
          </motion.h2>
          <div className='space-y-6'>
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                className='bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-300'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
                  <div>
                    <h3 className='text-2xl font-semibold mb-2'>{job.title}</h3>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      <span className='bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm'>
                        {job.department}
                      </span>
                      <span className='bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm'>
                        {job.location}
                      </span>
                      <span className='bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm'>
                        {job.type}
                      </span>
                    </div>
                    <p className='text-gray-300 mb-4'>{job.description}</p>
                    <div className='space-y-2'>
                      {job.requirements.map((req, index) => (
                        <div
                          key={index}
                          className='flex items-center text-gray-300'
                        >
                          <span className='mr-2'>•</span>
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'>
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className='bg-gray-800 py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <motion.h2
            className='text-4xl font-bold text-center mb-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Application Process
          </motion.h2>
          <div className='grid md:grid-cols-4 gap-8'>
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
                className='text-center bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors duration-300'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className='text-4xl mb-4'>{process.icon}</div>
                <div className='text-3xl font-bold text-blue-500 mb-4'>
                  {process.step}
                </div>
                <h3 className='text-xl font-semibold mb-2'>{process.title}</h3>
                <p className='text-gray-300'>{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <motion.h2
            className='text-4xl font-bold text-center mb-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Culture
          </motion.h2>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-semibold mb-4'>Work-Life Balance</h3>
              <p className='text-gray-300 mb-6'>
                We believe in maintaining a healthy work-life balance. Our
                flexible work arrangements and generous time-off policies ensure
                our team members can perform at their best while enjoying their
                personal lives.
              </p>
              <h3 className='text-2xl font-semibold mb-4'>
                Continuous Learning
              </h3>
              <p className='text-gray-300'>
                We invest in our team&apos;s growth through regular training,
                conferences, and learning opportunities. Every team member has
                access to resources to develop their skills and advance their
                careers.
              </p>
            </motion.div>
            <motion.div
              className='relative h-[400px] rounded-xl overflow-hidden'
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[url('/images/team-culture.jpg')] bg-cover bg-center" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
