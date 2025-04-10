'use client';

import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-gray-900 text-white overflow-x-hidden'>
      <Navbar />

      <main className='w-full'>
        {/* Hero Section with Gradient Background */}
        <section className='relative py-20 md:py-32 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90 z-0'></div>
          <div className="absolute inset-0 bg-[url('/images/terms-bg.jpg')] bg-cover bg-center opacity-20 z-0"></div>
          <div className='container mx-auto px-4 relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                Terms of <span className='text-yellow-500'>Service</span>
              </h1>
              <p className='text-xl text-gray-300 mb-8'>
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <div className='h-1 w-24 bg-yellow-500 mx-auto'></div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <div className='container mx-auto px-4 py-12 md:py-16'>
          <div className='max-w-4xl mx-auto space-y-12'>
            {/* Introduction */}
            <section className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold mb-4 text-yellow-500'>
                1. Introduction
              </h2>
              <p className='text-gray-300 mb-4'>
                Welcome to INVEST PLATFORM. By accessing or using our services,
                you agree to be bound by these Terms of Service. Please read
                them carefully.
              </p>
              <p className='text-gray-300'>
                These terms govern your use of our trading platform, website,
                and any related services. If you do not agree to these terms,
                please do not use our services.
              </p>
            </section>

            {/* Account Terms */}
            <section className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold mb-4 text-yellow-500'>
                2. Account Terms
              </h2>
              <ul className='space-y-3 text-gray-300'>
                <li className='flex items-start'>
                  <span className='text-yellow-500 mr-2'>•</span>
                  You must be at least 18 years old to use our services
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-500 mr-2'>•</span>
                  You are responsible for maintaining the security of your
                  account
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-500 mr-2'>•</span>
                  You must provide accurate and complete information when
                  creating an account
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-500 mr-2'>•</span>
                  You are responsible for all activities that occur under your
                  account
                </li>
              </ul>
            </section>

            {/* Trading Terms */}
            <section className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold mb-4 text-yellow-500'>
                3. Trading Terms
              </h2>
              <p className='text-gray-300 mb-4'>
                By using our trading platform, you acknowledge and agree to the
                following:
              </p>
              <ul className='space-y-3 text-gray-300'>
                <li className='flex items-start'>
                  <span className='text-yellow-500 mr-2'>•</span>
                  Trading involves significant risk of loss
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-500 mr-2'>•</span>
                  Past performance is not indicative of future results
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-500 mr-2'>•</span>
                  You are responsible for your trading decisions
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-500 mr-2'>•</span>
                  We do not provide financial advice
                </li>
              </ul>
            </section>

            {/* Privacy and Data */}
            <section className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold mb-4 text-yellow-500'>
                4. Privacy and Data
              </h2>
              <p className='text-gray-300 mb-4'>
                We are committed to protecting your privacy and personal
                information. Our Privacy Policy explains how we collect, use,
                and protect your data.
              </p>
              <p className='text-gray-300'>
                By using our services, you consent to our collection and use of
                your information as described in our Privacy Policy.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold mb-4 text-yellow-500'>
                5. Intellectual Property
              </h2>
              <p className='text-gray-300 mb-4'>
                All content, features, and functionality of our platform are
                owned by INVEST PLATFORM and are protected by international
                copyright, trademark, and other intellectual property laws.
              </p>
              <p className='text-gray-300'>
                You may not reproduce, distribute, modify, or create derivative
                works of our content without our express written permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold mb-4 text-yellow-500'>
                6. Limitation of Liability
              </h2>
              <p className='text-gray-300 mb-4'>
                To the maximum extent permitted by law, INVEST PLATFORM shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues.
              </p>
              <p className='text-gray-300'>
                Our liability is limited to the amount you paid to use our
                services in the 12 months preceding the claim.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold mb-4 text-yellow-500'>
                7. Changes to Terms
              </h2>
              <p className='text-gray-300 mb-4'>
                We reserve the right to modify these terms at any time. We will
                notify you of any changes by posting the new terms on our
                website.
              </p>
              <p className='text-gray-300'>
                Your continued use of our services after any changes indicates
                your acceptance of the modified terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg'>
              <h2 className='text-2xl font-bold mb-4 text-yellow-500'>
                8. Contact Information
              </h2>
              <p className='text-gray-300 mb-4'>
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className='bg-gray-900/50 rounded-lg p-6 mt-4'>
                <p className='text-gray-300'>
                  <span className='text-yellow-500 font-semibold'>Email:</span>{' '}
                  legal@investplatform.com
                </p>
                <p className='text-gray-300 mt-2'>
                  <span className='text-yellow-500 font-semibold'>
                    Address:
                  </span>{' '}
                  123 Trading Street, Financial District, NY 10005
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
