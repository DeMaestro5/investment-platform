'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import SocialSidebar from '../../../components/socialMediaSidebar';
import { Badge } from '../../../components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';

// FAQ data structure
interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// FAQ categories
const categories = [
  'All',
  'Account',
  'Trading',
  'Deposits & Withdrawals',
  'Security',
  'Technical',
  'Cryptocurrency',
  'Forex',
  'Stocks',
];

// FAQ data
const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How do I create an account?',
    answer:
      'To create an account, click on the "Register" button in the top right corner of the homepage. Fill out the required information, verify your email, and complete the identity verification process. Once approved, you can fund your account and start trading.',
    category: 'Account',
  },
  {
    id: 2,
    question: 'What documents do I need to verify my account?',
    answer:
      "To verify your account, you will need to provide a valid government-issued ID (passport, driver's license, or national ID) and proof of address (utility bill or bank statement less than 3 months old). Additional documents may be required depending on your jurisdiction.",
    category: 'Account',
  },
  {
    id: 3,
    question: 'How long does account verification take?',
    answer:
      'Account verification typically takes 1-3 business days. In some cases, it may take longer if additional information is required. You will receive an email notification once your account has been verified.',
    category: 'Account',
  },
  {
    id: 4,
    question: 'What trading platforms do you support?',
    answer:
      'We support multiple trading platforms including MetaTrader 4, MetaTrader 5, and our proprietary web-based platform. Each platform offers different features and is suitable for different trading styles. You can download the platforms from our website or access the web platform directly through your browser.',
    category: 'Trading',
  },
  {
    id: 5,
    question: 'What are the minimum deposit requirements?',
    answer:
      'The minimum deposit varies by account type. Standard accounts require a minimum deposit of $250, while premium accounts require $1,000. Cryptocurrency deposits may have different minimum requirements. Check our deposit page for the most up-to-date information.',
    category: 'Deposits & Withdrawals',
  },
  {
    id: 6,
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods including bank transfers, credit/debit cards, e-wallets (PayPal, Skrill, Neteller), and cryptocurrencies (Bitcoin, Ethereum, USDT). Processing times and fees vary by method. Bank transfers typically take 1-3 business days, while card deposits are usually instant.',
    category: 'Deposits & Withdrawals',
  },
  {
    id: 7,
    question: 'How long do withdrawals take to process?',
    answer:
      'Withdrawal processing times depend on the payment method. E-wallet withdrawals are typically processed within 24 hours, bank transfers may take 3-5 business days, and cryptocurrency withdrawals are usually processed within a few hours. All withdrawals are subject to security checks and may require additional verification.',
    category: 'Deposits & Withdrawals',
  },
  {
    id: 8,
    question: 'What security measures do you have in place?',
    answer:
      'We implement multiple security measures to protect your account and funds, including two-factor authentication (2FA), SSL encryption, cold storage for cryptocurrencies, regular security audits, and advanced fraud detection systems. We also recommend that you use strong passwords and never share your account credentials with anyone.',
    category: 'Security',
  },
  {
    id: 9,
    question: 'How do I enable two-factor authentication?',
    answer:
      'To enable 2FA, go to your account settings, select "Security," and follow the instructions to set up 2FA using an authenticator app like Google Authenticator or Authy. You will need to scan a QR code and enter the verification code to complete the setup. We strongly recommend enabling 2FA to enhance your account security.',
    category: 'Security',
  },
  {
    id: 10,
    question: 'What happens if I forget my password?',
    answer:
      'If you forget your password, click on the "Forgot Password" link on the login page. Enter your email address, and we will send you a password reset link. Follow the instructions in the email to create a new password. For security reasons, the reset link will expire after 24 hours.',
    category: 'Security',
  },
  {
    id: 11,
    question: 'What is leverage trading?',
    answer:
      'Leverage trading allows you to control a larger position with a smaller amount of capital. For example, with 10:1 leverage, you can control a $10,000 position with just $1,000 of your own money. While leverage can amplify profits, it also increases the risk of losses. We offer different leverage options depending on the asset and your account type.',
    category: 'Trading',
  },
  {
    id: 12,
    question: 'What are the trading fees?',
    answer:
      'Trading fees vary by asset type and account tier. We charge spreads on forex pairs, commissions on stocks and cryptocurrencies, and swap fees for positions held overnight. Premium account holders receive reduced fees. You can view the complete fee schedule in your account dashboard or on our website.',
    category: 'Trading',
  },
  {
    id: 13,
    question: 'How do I place a trade?',
    answer:
      'To place a trade, log in to your trading platform, select the asset you want to trade, choose whether to buy (go long) or sell (go short), set your position size, and click the "Buy" or "Sell" button. You can also set stop-loss and take-profit orders to manage your risk. For detailed instructions, refer to our trading guides.',
    category: 'Trading',
  },
  {
    id: 14,
    question: 'What is a stop-loss order?',
    answer:
      'A stop-loss order is a risk management tool that automatically closes your position at a predetermined price to limit your losses. For example, if you buy a stock at $100 and set a stop-loss at $95, your position will be automatically closed if the price falls to $95, limiting your loss to $5 per share.',
    category: 'Trading',
  },
  {
    id: 15,
    question: 'What is a take-profit order?',
    answer:
      'A take-profit order automatically closes your position when the price reaches a predetermined level, allowing you to lock in profits. For example, if you buy a stock at $100 and set a take-profit at $120, your position will be automatically closed when the price reaches $120, securing a $20 profit per share.',
    category: 'Trading',
  },
  {
    id: 16,
    question: 'How do I analyze market trends?',
    answer:
      'Market analysis can be done through technical analysis (studying price charts and indicators), fundamental analysis (evaluating economic data and company financials), or sentiment analysis (gauge market mood). Our platform provides various technical indicators, economic calendars, and news feeds to help with your analysis.',
    category: 'Technical',
  },
  {
    id: 17,
    question: 'What technical indicators do you offer?',
    answer:
      'Our platform offers a wide range of technical indicators including moving averages, RSI, MACD, Bollinger Bands, Fibonacci retracements, and many more. These indicators can be customized to suit your trading strategy. We also provide educational resources on how to use these indicators effectively.',
    category: 'Technical',
  },
  {
    id: 18,
    question: 'How do I set up price alerts?',
    answer:
      'To set up price alerts, right-click on a chart or use the "Alerts" feature in your trading platform. You can set alerts for price levels, technical indicators, or news events. You will receive notifications via email, SMS, or push notifications when your alert conditions are met.',
    category: 'Technical',
  },
  {
    id: 19,
    question: 'What cryptocurrencies can I trade?',
    answer:
      'We offer trading on a wide range of cryptocurrencies including Bitcoin, Ethereum, Ripple, Litecoin, Bitcoin Cash, and many others. You can trade crypto pairs against fiat currencies or other cryptocurrencies. The available pairs may vary depending on market conditions and regulatory requirements.',
    category: 'Cryptocurrency',
  },
  {
    id: 20,
    question: 'How do I store my cryptocurrencies?',
    answer:
      'When you buy cryptocurrencies through our platform, they are stored in your account wallet. For enhanced security, we use a combination of hot wallets (for immediate trading) and cold storage (offline, highly secure). You can also withdraw your cryptocurrencies to your own external wallet if you prefer to manage your own private keys.',
    category: 'Cryptocurrency',
  },
  {
    id: 21,
    question: 'What forex pairs do you offer?',
    answer:
      'We offer trading on major, minor, and exotic forex pairs. Major pairs include EUR/USD, GBP/USD, USD/JPY, and USD/CHF. Minor pairs include EUR/GBP, EUR/JPY, and GBP/JPY. Exotic pairs involve currencies from emerging markets. The spread and trading conditions may vary by pair.',
    category: 'Forex',
  },
  {
    id: 22,
    question:
      'What is the difference between a market order and a limit order?',
    answer:
      "A market order is executed immediately at the current market price, while a limit order is executed only when the market reaches your specified price. Market orders guarantee execution but may result in slight price slippage, while limit orders guarantee price but may not execute if the market doesn't reach your specified level.",
    category: 'Trading',
  },
  {
    id: 23,
    question: 'What stocks can I trade?',
    answer:
      'We offer trading on stocks from major exchanges around the world, including the NYSE, NASDAQ, LSE, and others. The available stocks may vary depending on your account type and jurisdiction. You can trade stocks with leverage (CFDs) or invest directly in the underlying assets, depending on your account type.',
    category: 'Stocks',
  },
  {
    id: 24,
    question: 'Do you offer demo accounts?',
    answer:
      'Yes, we offer free demo accounts with virtual funds that allow you to practice trading without risking real money. Demo accounts have the same features and functionality as live accounts, making them ideal for beginners or for testing new trading strategies. You can open a demo account directly from our website.',
    category: 'Account',
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Filter FAQs based on search query and active category
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Toggle FAQ expansion
  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-x-hidden'>
      <Navbar />

      {/* Social Media Sidebar */}
      <SocialSidebar />

      <main className='w-full'>
        {/* Hero Section */}
        <section className='relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90 z-0'></div>
          <div className="absolute inset-0 bg-[url('/images/faq-bg.jpg')] bg-cover bg-center opacity-20 z-0"></div>
          <div className='container mx-auto px-4 relative z-10'>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white'>
                Frequently Asked Questions
              </h1>
              <p className='text-xl text-gray-300 mb-8'>
                Find answers to common questions about our platform, trading,
                and account management.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className='py-8 bg-gray-800'>
          <div className='container mx-auto px-4'>
            <div className='mb-10 flex flex-col md:flex-row justify-between items-start gap-4 bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-yellow-500/20'>
              <div className='relative w-full md:w-1/3'>
                <input
                  type='text'
                  placeholder='Search FAQs...'
                  className='w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
              <div className='flex flex-wrap gap-2 justify-end md:justify-start w-full md:w-auto'>
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={
                      activeCategory === category ? 'default' : 'outline'
                    }
                    className={`cursor-pointer transition-all duration-300 text-xs px-3 py-1 ${
                      activeCategory === category
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                        : 'hover:bg-gray-700 border-gray-600'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-16 sm:py-20 bg-gray-900'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              {filteredFaqs.length > 0 ? (
                <div className='space-y-4'>
                  {filteredFaqs.map((faq) => (
                    <Card
                      key={faq.id}
                      className='bg-gray-800 border-gray-700 overflow-hidden'
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className='w-full text-left'
                      >
                        <CardHeader className='flex flex-row items-center justify-between p-6 hover:bg-gray-700 transition-colors duration-300'>
                          <div className='flex flex-col gap-2'>
                            <CardTitle className='text-xl font-semibold text-white'>
                              {faq.question}
                            </CardTitle>
                            <Badge className='w-fit bg-yellow-500/20 text-yellow-500 border-yellow-500/30 text-xs px-2.5 py-0.5'>
                              {faq.category}
                            </Badge>
                          </div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className={`h-6 w-6 text-yellow-500 transform transition-transform duration-300 flex-shrink-0 ml-4 ${
                              expandedFaq === faq.id ? 'rotate-180' : ''
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
                        </CardHeader>
                      </button>
                      <div
                        className={`transition-all duration-300 ${
                          expandedFaq === faq.id
                            ? 'max-h-96 opacity-100'
                            : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                      >
                        <CardContent className='p-6 pt-0 text-gray-300'>
                          {faq.answer}
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className='text-center py-12'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-16 w-16 mx-auto text-gray-500 mb-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    No results found
                  </h3>
                  <p className='text-gray-400'>
                    Try adjusting your search or filter to find what you&apos;re
                    looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className='py-16 bg-gray-800'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl font-bold mb-6'>Still have questions?</h2>
              <p className='text-xl text-gray-300 mb-8'>
                Our support team is available 24/7 to help you with any
                questions or issues.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <a
                  href='/contact'
                  className='px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors duration-300'
                >
                  Contact Support
                </a>
                <a
                  href='/learn/guides'
                  className='px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300'
                >
                  Browse Guides
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
