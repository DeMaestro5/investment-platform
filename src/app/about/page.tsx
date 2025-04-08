'use client';

import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SectionHeading from '../../components/sections/sectionHeading';
import Image from 'next/image';

// Team member data
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in financial markets, Sarah founded INVEST PLATFORM to democratize access to professional trading tools.',
    image: '/team/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Michael brings 12 years of software engineering expertise, specializing in building scalable financial platforms and real-time trading systems.',
    image: '/team/michael.jpg',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Markets',
    bio: 'Elena has worked with major financial institutions for over a decade, bringing deep knowledge of global markets and trading strategies.',
    image: '/team/elena.jpg',
  },
  {
    name: 'David Kim',
    role: 'Head of Security',
    bio: "David leads our security initiatives, ensuring the highest standards of protection for our users' assets and personal information.",
    image: '/team/david.jpg',
  },
];

// Company stats
const companyStats = [
  { label: 'Active Users', value: '500K+' },
  { label: 'Countries Served', value: '120+' },
  { label: 'Trading Volume', value: '$10B+' },
  { label: 'Years in Business', value: '8+' },
];

// Values
const companyValues = [
  {
    title: 'Security',
    description:
      'We prioritize the protection of your assets and personal information with industry-leading security measures.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 text-yellow-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description:
      'We continuously develop cutting-edge tools and features to enhance your trading experience.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 text-yellow-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 10V3L4 14h7v7l9-11h-7z'
        />
      </svg>
    ),
  },
  {
    title: 'Transparency',
    description:
      'We believe in clear communication and honest business practices with our users and partners.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 text-yellow-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
        />
      </svg>
    ),
  },
  {
    title: 'Education',
    description:
      'We provide comprehensive learning resources to help traders of all levels succeed.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 text-yellow-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path d='M12 14l9-5-9-5-9 5 9 5z' />
        <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gray-900 text-white overflow-x-hidden'>
      <Navbar />

      <main className='w-full'>
        {/* Hero Section */}
        <section className='relative py-20 md:py-32 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90 z-0'></div>
          <div className="absolute inset-0 bg-[url('/images/about-hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"></div>
          <div className='container mx-auto px-4 relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                About <span className='text-yellow-500'>INVEST PLATFORM</span>
              </h1>
              <p className='text-xl text-gray-300 mb-8'>
                Empowering traders worldwide with professional-grade tools and
                resources
              </p>
              <div className='h-1 w-24 bg-yellow-500 mx-auto'></div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className='py-16 md:py-24 bg-gray-800'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
              <div>
                <SectionHeading
                  title='Our Mission'
                  subtitle='Building the future of trading'
                  alignment='left'
                />
                <p className='text-gray-300 mb-6'>
                  At INVEST PLATFORM, we are on a mission to democratize access
                  to professional trading tools and resources. We believe that
                  everyone should have the opportunity to participate in global
                  financial markets with the same advantages that were once
                  reserved for institutional traders.
                </p>
                <p className='text-gray-300 mb-6'>
                  Founded in 2015, we have grown from a small team of passionate
                  traders and developers into a global platform serving over
                  500,000 users across 120+ countries. Our commitment to
                  innovation, security, and user education has made us a trusted
                  name in the trading community.
                </p>
                <p className='text-gray-300'>
                  We are not just building a trading platform; we are creating a
                  community where traders can learn, grow, and succeed together.
                </p>
              </div>
              <div className='relative h-[400px] rounded-lg overflow-hidden shadow-2xl'>
                <div className='absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-gray-900/80 z-10'></div>
                <Image
                  src='/images/mission-image.jpg'
                  alt='Our Mission'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-16 md:py-24 bg-gray-900'>
          <div className='container mx-auto px-4'>
            <SectionHeading
              title='Our Impact'
              subtitle='Numbers that speak for themselves'
            />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-12'>
              {companyStats.map((stat, index) => (
                <div
                  key={index}
                  className='text-center p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
                >
                  <div className='text-3xl md:text-4xl font-bold text-yellow-500 mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-gray-300'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className='py-16 md:py-24 bg-gray-800'>
          <div className='container mx-auto px-4'>
            <SectionHeading
              title='Our Values'
              subtitle='The principles that guide us'
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className='bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
                >
                  <div className='mb-4'>{value.icon}</div>
                  <h3 className='text-xl font-bold mb-3'>{value.title}</h3>
                  <p className='text-gray-300'>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='py-16 md:py-24 bg-gray-900'>
          <div className='container mx-auto px-4'>
            <SectionHeading
              title='Our Leadership'
              subtitle='Meet the team behind INVEST PLATFORM'
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className='bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300'
                >
                  <div className='relative h-64 w-full'>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold mb-1'>{member.name}</h3>
                    <p className='text-yellow-500 mb-3'>{member.role}</p>
                    <p className='text-gray-300 text-sm'>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 md:py-24 bg-gradient-to-r from-gray-800 to-gray-900'>
          <div className='container mx-auto px-4 text-center'>
            <SectionHeading
              title='Join Our Community'
              subtitle='Start your trading journey with us today'
            />
            <div className='mt-8'>
              <a
                href='/register'
                className='inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300'
              >
                Create an Account
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
