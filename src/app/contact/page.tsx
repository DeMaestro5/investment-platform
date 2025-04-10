'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import SectionHeading from '@/components/sections/sectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar />

      {/* Hero Section with Parallax Effect */}
      <section className='relative py-32 bg-gray-800 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-800/50'></div>
        <div className='absolute inset-0 bg-[url("/images/contact-bg.jpg")] bg-cover bg-center opacity-20'></div>
        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              title='Contact Us'
              subtitle='Get in touch with our team'
              alignment='center'
            />
            <p className='text-center text-gray-300 max-w-2xl mx-auto mt-6'>
              Have questions about our platform or need assistance? Our team is
              here to help you with any inquiries about trading, account
              management, or technical support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className='bg-gray-800 border-gray-700 shadow-xl'>
                <CardContent className='p-8'>
                  <h3 className='text-2xl font-bold mb-6'>Send us a message</h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className='space-y-6'
                  >
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-300 mb-2'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-300 mb-2'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='subject'
                        className='block text-sm font-medium text-gray-300 mb-2'
                      >
                        Subject
                      </label>
                      <input
                        type='text'
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-300 mb-2'
                      >
                        Message
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors'
                        required
                      />
                    </div>
                    <Button
                      variant='primary'
                      size='lg'
                      className='w-full hover:scale-105 transition-transform'
                      onClick={handleSubmit}
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='space-y-8'
            >
              <div className='bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-xl'>
                <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
                <div className='space-y-6'>
                  <motion.div
                    className='flex items-start hover:bg-gray-700/50 p-4 rounded-lg transition-colors'
                    whileHover={{ x: 5 }}
                  >
                    <div className='flex-shrink-0'>
                      <svg
                        className='w-6 h-6 text-yellow-500'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                    </div>
                    <div className='ml-4'>
                      <h4 className='text-lg font-semibold text-white'>
                        Our Location
                      </h4>
                      <p className='text-gray-300'>
                        123 Investment Street, Financial District, NY 10001
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className='flex items-start hover:bg-gray-700/50 p-4 rounded-lg transition-colors'
                    whileHover={{ x: 5 }}
                  >
                    <div className='flex-shrink-0'>
                      <svg
                        className='w-6 h-6 text-yellow-500'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                    </div>
                    <div className='ml-4'>
                      <h4 className='text-lg font-semibold text-white'>
                        Email
                      </h4>
                      <p className='text-gray-300'>
                        contact@investplatform.com
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className='flex items-start hover:bg-gray-700/50 p-4 rounded-lg transition-colors'
                    whileHover={{ x: 5 }}
                  >
                    <div className='flex-shrink-0'>
                      <svg
                        className='w-6 h-6 text-yellow-500'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                        />
                      </svg>
                    </div>
                    <div className='ml-4'>
                      <h4 className='text-lg font-semibold text-white'>
                        Phone
                      </h4>
                      <p className='text-gray-300'>+1 (555) 123-4567</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Map and Location Info */}
              <div className='bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-xl'>
                <div className='flex items-center justify-between mb-8'>
                  <h3 className='text-2xl font-bold'>Find Us</h3>
                  <div className='flex items-center space-x-2 text-yellow-500'>
                    <svg
                      className='w-5 h-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                    <span className='text-sm font-medium'>
                      Financial District
                    </span>
                  </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                  {/* Info Cards - Left Column */}
                  <div className='space-y-4'>
                    <div className='flex items-start space-x-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors'>
                      <div className='flex-shrink-0 mt-1'>
                        <svg
                          className='w-5 h-5 text-yellow-500'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-semibold text-white'>Address</h4>
                        <p className='text-gray-300'>1 Wall Street</p>
                        <p className='text-gray-400 text-sm'>
                          New York, NY 10005
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start space-x-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors'>
                      <div className='flex-shrink-0 mt-1'>
                        <svg
                          className='w-5 h-5 text-yellow-500'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-semibold text-white'>
                          Office Hours
                        </h4>
                        <p className='text-gray-300'>Monday - Friday</p>
                        <p className='text-gray-400 text-sm'>
                          9:00 AM - 6:00 PM EST
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Info Cards - Right Column */}
                  <div className='space-y-4'>
                    <div className='flex items-start space-x-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors'>
                      <div className='flex-shrink-0 mt-1'>
                        <svg
                          className='w-5 h-5 text-yellow-500'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M13 10V3L4 14h7v7l9-11h-7z'
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-semibold text-white'>
                          Transportation
                        </h4>
                        <p className='text-gray-300'>
                          Subway: Wall St (2,3,4,5)
                        </p>
                        <p className='text-gray-400 text-sm'>
                          2 min walk from station
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start space-x-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors'>
                      <div className='flex-shrink-0 mt-1'>
                        <svg
                          className='w-5 h-5 text-yellow-500'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-semibold text-white'>
                          Appointments
                        </h4>
                        <p className='text-gray-300'>Schedule in advance</p>
                        <p className='text-gray-400 text-sm'>
                          Virtual meetings available
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map Section */}
                  <div className='lg:row-span-2'>
                    <div className='relative h-full rounded-lg overflow-hidden border border-gray-700'>
                      <div className='absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-800/20 z-10'></div>
                      <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215682579824!2d-74.0113!3d40.7071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1655c0b1f1%3A0x8f6c3b3b3b3b3b3b!2s1%20Wall%20St%2C%20New%20York%2C%20NY%2010005!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus'
                        width='100%'
                        height='100%'
                        style={{ border: 0, minHeight: '400px' }}
                        allowFullScreen
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        className='absolute inset-0'
                      ></iframe>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className='lg:col-span-2 space-y-4'>
                    <div className='bg-gray-700/30 rounded-lg p-4'>
                      <h4 className='font-semibold text-white mb-2'>
                        Additional Transportation
                      </h4>
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <p className='text-yellow-500 text-sm font-medium mb-1'>
                            Bus Routes
                          </p>
                          <p className='text-gray-300'>M15, M20, M55</p>
                          <p className='text-gray-400 text-sm'>5 min walk</p>
                        </div>
                        <div>
                          <p className='text-yellow-500 text-sm font-medium mb-1'>
                            Parking
                          </p>
                          <p className='text-gray-300'>
                            Multiple garages nearby
                          </p>
                          <p className='text-gray-400 text-sm'>
                            1-2 blocks away
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className='py-16 bg-gray-800'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-6'>Need Immediate Support?</h2>
            <p className='text-xl text-gray-300 mb-8'>
              Our support team is available 24/7 to help you with any questions
              or issues.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Button variant='primary' size='lg'>
                Live Chat
              </Button>
              <Button variant='outline' size='lg'>
                Help Center
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
