'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import SectionHeading from '../../../components/sections/sectionHeading';
import Image from 'next/image';
import Bitcoin from '../../public/bitcoin.webp';
import Coinbase from '../../public/coinbase-logo.png';
import Binance from '../../public/binance.jpg';
import Changelly from '../../public/changelly.jpg';

// Tutorial steps data
const tutorialSteps = [
  {
    id: 1,
    title: 'Choose a Bitcoin Exchange',
    description:
      'Select one of the popular cryptocurrency exchanges: Coinbase, Bitcoin.com, Binance, or Changelly. Each platform has its own advantages and features.',
    image: '/images/tutorial/exchange.jpg',
    tips: [
      'Coinbase: Best for beginners with a user-friendly interface',
      'Bitcoin.com: Offers a simple wallet and exchange in one',
      'Binance: Provides lower fees and more trading options',
      'Changelly: Allows quick exchanges between different cryptocurrencies',
    ],
  },
  {
    id: 2,
    title: 'Create and Verify Your Account',
    description:
      'Sign up for an account on your chosen platform and complete the verification process. This typically involves providing personal information and proof of identity.',
    image: '/images/tutorial/verify.jpg',
    tips: [
      'Use a strong, unique password for each platform',
      'Enable two-factor authentication for added security',
      'Have your ID documents ready for verification',
      'Be prepared to provide proof of address if required',
    ],
  },
  {
    id: 3,
    title: 'Add a Payment Method',
    description:
      'Link your bank account, credit card, or other payment method to your exchange account. This will allow you to purchase Bitcoin with fiat currency.',
    image: '/images/tutorial/payment.jpg',
    tips: [
      'Coinbase: Supports bank transfers, credit/debit cards, and wire transfers',
      'Bitcoin.com: Accepts credit cards and bank transfers',
      'Binance: Offers multiple payment options including bank transfers and credit cards',
      'Changelly: Works with credit cards and bank transfers through their partners',
    ],
  },
  {
    id: 4,
    title: 'Place Your Bitcoin Order',
    description:
      'Decide how much Bitcoin you want to buy and place your order. You can choose between market orders (immediate execution at current price) or limit orders (execution at a specific price).',
    image: '/images/tutorial/order.jpg',
    tips: [
      'Start with a small amount if you&apos;re new to Bitcoin',
      'Compare prices across platforms before purchasing',
      'Be aware of the current Bitcoin price and market conditions',
      'Check the total cost including fees before confirming',
    ],
  },
  {
    id: 5,
    title: 'Transfer to Your Wallet',
    description:
      'For security, transfer your Bitcoin from the exchange to your personal wallet. This gives you full control over your private keys and funds.',
    image: '/images/tutorial/wallet.jpg',
    tips: [
      'Use a hardware wallet for maximum security',
      'Double-check the wallet address before sending',
      'Start with a small test transaction',
      'Keep your private keys and recovery phrases secure and offline',
    ],
  },
];

// Platform-specific guides
const platformGuides = [
  {
    name: 'Coinbase',
    logo: Coinbase,
    description:
      'Coinbase is one of the most user-friendly cryptocurrency exchanges, making it ideal for beginners.',
    steps: [
      'Visit coinbase.com and click "Get Started"',
      'Create an account with your email and password',
      'Verify your identity by providing government-issued ID',
      'Add a payment method (bank account or credit card)',
      'Navigate to the "Buy/Sell" tab and select Bitcoin',
      'Enter the amount you want to purchase and complete the transaction',
    ],
    fees: '1.49% for bank transfers, 3.99% for credit/debit cards',
    pros: [
      'User-friendly interface',
      'High security standards',
      'Insurance coverage',
      'Educational resources',
    ],
    cons: [
      'Higher fees than some competitors',
      'Limited cryptocurrency selection',
      'Customer service can be slow',
    ],
  },
  {
    name: 'Bitcoin.com',
    logo: Bitcoin,
    description:
      'Bitcoin.com offers a wallet and exchange in one platform, simplifying the process for users.',
    steps: [
      'Go to bitcoin.com and create an account',
      'Complete the verification process',
      'Set up your wallet within the platform',
      'Add funds using your preferred payment method',
      'Use the "Buy Bitcoin" feature to purchase',
      'Your Bitcoin will be stored in your Bitcoin.com wallet',
    ],
    fees: 'Varies by payment method and region',
    pros: [
      'Integrated wallet and exchange',
      'Simple interface',
      'Multiple payment options',
      'Good for beginners',
    ],
    cons: [
      'Limited to Bitcoin and a few other cryptocurrencies',
      'May not offer advanced trading features',
    ],
  },
  {
    name: 'Binance',
    logo: Binance,
    description:
      "Binance is the world's largest cryptocurrency exchange by trading volume, offering competitive fees and extensive features.",
    steps: [
      'Visit binance.com and register for an account',
      'Complete identity verification (KYC process)',
      'Add a payment method to your account',
      'Navigate to the "Buy Crypto" section',
      'Select Bitcoin and your payment method',
      'Enter the amount and complete your purchase',
    ],
    fees: '0.1% trading fee (can be reduced with BNB or higher volume)',
    pros: [
      'Low fees',
      'Wide selection of cryptocurrencies',
      'Advanced trading features',
      'High liquidity',
    ],
    cons: [
      'More complex interface for beginners',
      'Not available in all countries',
      'Customer support can be challenging',
    ],
  },
  {
    name: 'Changelly',
    logo: Changelly,
    description:
      'Changelly is a cryptocurrency exchange platform that allows users to swap between different cryptocurrencies quickly.',
    steps: [
      'Go to changelly.com and create an account',
      'Complete the verification process if required',
      'Select Bitcoin as the cryptocurrency you want to receive',
      'Choose your payment method and the cryptocurrency you want to exchange',
      'Enter the amount and review the exchange rate',
      'Complete the transaction and receive your Bitcoin',
    ],
    fees: '0.25% exchange fee plus network fees',
    pros: [
      'Fast exchanges between cryptocurrencies',
      'No account required for basic swaps',
      'Supports many cryptocurrencies',
      'Fixed and floating rates available',
    ],
    cons: [
      'Not ideal for direct fiat-to-Bitcoin purchases',
      'Exchange rates may not always be competitive',
      'Limited customer support',
    ],
  },
];

// FAQ data
const faqs = [
  {
    question: 'Which platform is best for buying Bitcoin?',
    answer:
      'The best platform depends on your needs. Coinbase is ideal for beginners with its user-friendly interface. Binance offers lower fees and more trading options. Bitcoin.com provides a simple wallet and exchange in one. Changelly is great for quick exchanges between cryptocurrencies. Consider factors like fees, security, payment methods, and ease of use when choosing.',
  },
  {
    question: 'How much should I invest in Bitcoin?',
    answer:
      'Only invest what you can afford to lose. Bitcoin is a volatile asset, and its price can fluctuate significantly. Financial experts typically recommend allocating no more than 1-5% of your investment portfolio to cryptocurrencies.',
  },
  {
    question: 'Is it safe to buy Bitcoin from these platforms?',
    answer:
      'Yes, these platforms are generally considered safe for buying Bitcoin, but there are always risks. Cryptocurrency prices are highly volatile, and there&apos;s always the risk of losing your investment. Additionally, you need to protect your private keys and be aware of potential scams. Using established exchanges, enabling two-factor authentication, and storing your Bitcoin in a secure wallet can help mitigate these risks.',
  },
  {
    question: 'What are the tax implications of buying Bitcoin?',
    answer:
      'Tax regulations for cryptocurrencies vary by country. In many jurisdictions, Bitcoin is treated as property for tax purposes, meaning you may need to pay capital gains tax when you sell it. It&apos;s important to consult with a tax professional to understand your specific obligations.',
  },
  {
    question: 'Can I buy Bitcoin anonymously?',
    answer:
      'While Bitcoin transactions are pseudonymous (linked to addresses rather than real names), most exchanges require identity verification to comply with regulations. For increased privacy, you can use peer-to-peer exchanges or Bitcoin ATMs, but these often come with higher fees and risks.',
  },
];

// Resources data
const resources = [
  {
    title: 'Bitcoin.org',
    description:
      'The official Bitcoin website with comprehensive information about Bitcoin, wallets, and how to get started.',
    link: 'https://bitcoin.org',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-8 w-8 text-yellow-500'
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
    title: 'CoinGecko',
    description:
      'Track Bitcoin prices, market cap, and other cryptocurrencies in real-time with detailed charts and data.',
    link: 'https://www.coingecko.com',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-8 w-8 text-yellow-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        />
      </svg>
    ),
  },
  {
    title: 'Bitcoin Magazine',
    description:
      'Stay updated with the latest news, analysis, and educational content about Bitcoin and the broader cryptocurrency ecosystem.',
    link: 'https://bitcoinmagazine.com',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-8 w-8 text-yellow-500'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
        />
      </svg>
    ),
  },
  {
    title: 'Ledger Academy',
    description:
      'Educational resources from Ledger, covering Bitcoin basics, security best practices, and advanced topics for crypto enthusiasts.',
    link: 'https://www.ledger.com/academy',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-8 w-8 text-yellow-500'
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

export default function LearnPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const togglePlatform = (platform: string) => {
    setActivePlatform(activePlatform === platform ? null : platform);
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-x-hidden'>
      <Navbar />

      <main className='w-full'>
        {/* Hero Section - Enhanced mobile spacing */}
        <section className='relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90 z-0'></div>
          <div className="absolute inset-0 bg-[url('/images/tutorial/bitcoin-bg.jpg')] bg-cover bg-center opacity-20 z-0"></div>
          <div className='container mx-auto px-4 relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight'>
                How to <span className='text-yellow-500'>Buy Bitcoin</span>
              </h1>
              <p className='text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 font-light px-4 sm:px-0'>
                A step-by-step guide to purchasing Bitcoin from popular
                platforms
              </p>
              <div className='h-1 w-24 sm:w-32 bg-yellow-500 mx-auto mb-6 sm:mb-8'></div>
              <div className='flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0'>
                <a
                  href='#platforms'
                  className='w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-center'
                >
                  Compare Platforms
                </a>
                <a
                  href='#tutorial'
                  className='w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 border border-gray-700 hover:border-gray-600 text-center'
                >
                  View Tutorial
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Selection Section - Improved grid responsiveness */}
        <section id='platforms' className='py-16 sm:py-20 bg-gray-900'>
          <div className='container mx-auto px-4'>
            <SectionHeading
              title='Choose Your Platform'
              subtitle='Compare the top Bitcoin buying platforms'
              alignment='center'
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12'>
              {platformGuides.map((platform) => (
                <div
                  key={platform.name}
                  className={`bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    activePlatform === platform.name
                      ? 'ring-2 ring-yellow-500 shadow-xl'
                      : 'hover:shadow-xl'
                  }`}
                  onClick={() => togglePlatform(platform.name)}
                >
                  <div className='flex items-center justify-between mb-4'>
                    <div className='relative h-10 sm:h-12 w-10 sm:w-12 bg-white rounded-full p-2'>
                      <Image
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        fill
                        className='object-contain'
                      />
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className={`h-5 w-5 text-yellow-500 transform transition-transform duration-300 ${
                        activePlatform === platform.name ? 'rotate-180' : ''
                      }`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </div>
                  <h3 className='text-lg sm:text-xl font-bold mb-2'>
                    {platform.name}
                  </h3>
                  <p className='text-gray-300 text-sm mb-4 line-clamp-3'>
                    {platform.description}
                  </p>
                  <div className='text-sm text-yellow-500 font-semibold'>
                    Fees: {platform.fees}
                  </div>
                </div>
              ))}
            </div>

            {/* Platform Comparison Table - Make it scrollable on mobile */}
            <div className='mt-16 sm:mt-20 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8'>
              <div className='text-center mb-8 sm:mb-12'>
                <h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4'>
                  Platform Feature Comparison
                </h3>
                <p className='text-gray-300 text-base sm:text-lg px-4 sm:px-0'>
                  Compare key features across all platforms to make the best
                  choice for your needs
                </p>
              </div>

              <div className='overflow-x-auto -mx-4 sm:mx-0'>
                <div className='min-w-[800px] sm:min-w-full px-4 sm:px-0'>
                  <table className='w-full'>
                    <thead>
                      <tr className='border-b border-gray-700'>
                        <th className='px-6 py-4 text-left text-lg font-semibold'>
                          Feature
                        </th>
                        <th className='px-6 py-4 text-center text-lg font-semibold'>
                          Coinbase
                        </th>
                        <th className='px-6 py-4 text-center text-lg font-semibold'>
                          Bitcoin.com
                        </th>
                        <th className='px-6 py-4 text-center text-lg font-semibold'>
                          Binance
                        </th>
                        <th className='px-6 py-4 text-center text-lg font-semibold'>
                          Changelly
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-700'>
                      <tr>
                        <td className='px-6 py-4 text-gray-300'>
                          Base Trading Fee
                        </td>
                        <td className='px-6 py-4 text-center'>1.49%</td>
                        <td className='px-6 py-4 text-center'>Varies</td>
                        <td className='px-6 py-4 text-center'>0.1%</td>
                        <td className='px-6 py-4 text-center'>0.25%</td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 text-gray-300'>
                          Beginner Friendly
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-green-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-green-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-yellow-500'>~</span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-green-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 text-gray-300'>
                          Advanced Trading Features
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-yellow-500'>~</span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-red-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                          </span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-green-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-red-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 text-gray-300'>
                          Built-in Wallet
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-green-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-green-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-green-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-red-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-4 text-gray-300'>
                          Credit Card Purchase
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-green-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-green-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-green-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </span>
                        </td>
                        <td className='px-6 py-4 text-center'>
                          <span className='text-green-500'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 mx-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='mt-8 text-center'>
                <p className='text-gray-400 text-sm'>
                  ~ Indicates partial or limited feature availability
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform-specific guides - Now in a modal-like overlay */}
        {activePlatform && (
          <div className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto'>
            <div className='bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto relative'>
              <div className='sticky top-0 bg-gray-900 p-4 sm:p-6 border-b border-gray-800 flex justify-between items-center z-10'>
                <h2 className='text-xl sm:text-2xl font-bold text-yellow-500'>
                  {activePlatform} Guide
                </h2>
                <button
                  onClick={() => setActivePlatform(null)}
                  className='text-gray-400 hover:text-white transition-colors p-2'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 sm:h-6 sm:w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div className='p-4 sm:p-6'>
                {platformGuides.map(
                  (platform) =>
                    platform.name === activePlatform && (
                      <div key={platform.name}>
                        <div className='flex items-center mb-6 sm:mb-8'>
                          <div className='relative h-16 w-16 sm:h-20 sm:w-20 bg-white rounded-full p-2 sm:p-3 mr-4 sm:mr-6'>
                            <Image
                              src={platform.logo}
                              alt={`${platform.name} logo`}
                              fill
                              className='object-contain'
                            />
                          </div>
                          <div>
                            <p className='text-gray-300 text-base sm:text-lg'>
                              {platform.description}
                            </p>
                          </div>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10'>
                          <div className='lg:col-span-2'>
                            <h3 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-yellow-500'>
                              Step-by-Step Process
                            </h3>
                            <div className='bg-gray-800 p-4 sm:p-8 rounded-xl shadow-lg'>
                              <ol className='space-y-4 sm:space-y-6'>
                                {platform.steps.map((step, index) => (
                                  <li key={index} className='flex items-start'>
                                    <div className='flex-shrink-0 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-yellow-500 text-gray-900 flex items-center justify-center font-bold mr-3 sm:mr-4 shadow-md'>
                                      {index + 1}
                                    </div>
                                    <span className='text-base sm:text-lg pt-1'>
                                      {step}
                                    </span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                          <div>
                            <h3 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-yellow-500'>
                              Platform Details
                            </h3>
                            <div className='bg-gray-800 p-4 sm:p-8 rounded-xl shadow-lg'>
                              <div className='mb-6 sm:mb-8'>
                                <h4 className='font-semibold text-lg sm:text-xl mb-2 sm:mb-3'>
                                  Fees
                                </h4>
                                <p className='text-base sm:text-lg'>
                                  {platform.fees}
                                </p>
                              </div>
                              <div className='mb-6 sm:mb-8'>
                                <h4 className='font-semibold text-lg sm:text-xl mb-2 sm:mb-3'>
                                  Pros
                                </h4>
                                <ul className='list-disc pl-5 space-y-1 sm:space-y-2'>
                                  {platform.pros.map((pro, index) => (
                                    <li
                                      key={index}
                                      className='text-base sm:text-lg'
                                    >
                                      {pro}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className='font-semibold text-lg sm:text-xl mb-2 sm:mb-3'>
                                  Cons
                                </h4>
                                <ul className='list-disc pl-5 space-y-1 sm:space-y-2'>
                                  {platform.cons.map((con, index) => (
                                    <li
                                      key={index}
                                      className='text-base sm:text-lg'
                                    >
                                      {con}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tutorial Steps Section - Enhanced mobile experience */}
        <section id='tutorial' className='py-16 sm:py-20 bg-gray-900'>
          <div className='container mx-auto px-4'>
            <SectionHeading
              title='General Buying Process'
              subtitle='Follow these steps regardless of which platform you choose'
              alignment='center'
            />

            {/* Step Navigation - Scrollable on mobile */}
            <div className='flex overflow-x-auto gap-2 sm:gap-4 mt-8 sm:mt-12 mb-8 sm:mb-12 -mx-4 sm:mx-0 px-4 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-hide'>
              {tutorialSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                    activeStep === step.id
                      ? 'bg-yellow-500 text-gray-900 font-bold shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Step {step.id}
                </button>
              ))}
            </div>

            {/* Active Step Content - Stack on mobile */}
            {tutorialSteps.map((step) => (
              <div
                key={step.id}
                className={`transition-all duration-500 ${
                  activeStep === step.id ? 'opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start'>
                  <div className='order-2 lg:order-1'>
                    <div className='flex items-center gap-3 mb-4 sm:mb-6'>
                      <div className='h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-yellow-500 text-gray-900 flex items-center justify-center font-bold shadow-lg'>
                        {step.id}
                      </div>
                      <h3 className='text-xl sm:text-2xl md:text-3xl font-bold'>
                        {step.title}
                      </h3>
                    </div>
                    <p className='text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 pl-11 sm:pl-14'>
                      {step.description}
                    </p>

                    <div className='bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg'>
                      <h4 className='text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-yellow-500'>
                        Platform-Specific Tips:
                      </h4>
                      <ul className='space-y-3 sm:space-y-4'>
                        {step.tips.map((tip, index) => (
                          <li key={index} className='flex items-start'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 mr-3 mt-0.5 flex-shrink-0'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path
                                fillRule='evenodd'
                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                clipRule='evenodd'
                              />
                            </svg>
                            <span className='text-base sm:text-lg'>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className='order-1 lg:order-2 relative h-[250px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl'>
                    <div className='absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-gray-900/80 z-10'></div>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className='object-cover'
                    />
                  </div>
                </div>

                {/* Navigation Buttons - Full width on mobile */}
                <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-8 sm:mt-12'>
                  <button
                    onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                    disabled={activeStep === 1}
                    className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      activeStep === 1
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    <span className='flex items-center justify-center sm:justify-start'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 mr-2'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 19l-7-7 7-7'
                        />
                      </svg>
                      Previous Step
                    </span>
                  </button>
                  <button
                    onClick={() =>
                      setActiveStep(
                        Math.min(tutorialSteps.length, activeStep + 1)
                      )
                    }
                    disabled={activeStep === tutorialSteps.length}
                    className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      activeStep === tutorialSteps.length
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
                    }`}
                  >
                    <span className='flex items-center justify-center sm:justify-start'>
                      Next Step
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 ml-2'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security Tips Section - Improved spacing on mobile */}
        <section className='py-16 sm:py-20 bg-gray-800/50 backdrop-blur-sm'>
          <div className='container mx-auto px-4'>
            <SectionHeading
              title='Security Best Practices'
              subtitle='Protect your Bitcoin investment'
              alignment='center'
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12'>
              <div className='bg-gray-900 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300'>
                <div className='text-yellow-500 mb-6'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-16 w-16'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold mb-4'>Use a Secure Wallet</h3>
                <p className='text-gray-300 text-lg'>
                  Never leave large amounts of Bitcoin on an exchange. Transfer
                  your funds to a secure wallet where you control the private
                  keys. Hardware wallets offer the highest level of security.
                </p>
              </div>
              <div className='bg-gray-900 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300'>
                <div className='text-yellow-500 mb-6'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-16 w-16'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold mb-4'>Beware of Scams</h3>
                <p className='text-gray-300 text-lg'>
                  Be cautious of unsolicited offers, fake exchanges, and
                  phishing attempts. Never share your private keys or recovery
                  phrases with anyone, and verify the authenticity of websites
                  and apps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Better mobile spacing */}
        <section className='py-16 sm:py-20 bg-gray-900'>
          <div className='container mx-auto px-4'>
            <SectionHeading
              title='Frequently Asked Questions'
              subtitle='Common questions about buying Bitcoin'
              alignment='center'
            />
            <div className='max-w-3xl mx-auto mt-8 sm:mt-12 space-y-4 sm:space-y-6'>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className='bg-gray-800 rounded-xl overflow-hidden shadow-lg'
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className='w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-700 transition-colors duration-300'
                  >
                    <h3 className='text-xl font-semibold'>{faq.question}</h3>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className={`h-6 w-6 text-yellow-500 transform transition-transform duration-300 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </button>
                  <div
                    className={`px-8 py-6 bg-gray-700 transition-all duration-300 ${
                      expandedFaq === index
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <p className='text-gray-300 text-lg'>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section - Improved grid on mobile */}
        <section className='py-16 sm:py-20 bg-gray-800/50 backdrop-blur-sm'>
          <div className='container mx-auto px-4'>
            <SectionHeading
              title='Additional Resources'
              subtitle='Learn more about Bitcoin and cryptocurrency'
              alignment='center'
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12'>
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
                >
                  <div className='mb-6 text-yellow-500'>{resource.icon}</div>
                  <h3 className='text-xl font-bold mb-4'>{resource.title}</h3>
                  <p className='text-gray-300'>{resource.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
