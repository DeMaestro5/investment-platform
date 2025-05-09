'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import SocialSidebar from '../../../components/socialMediaSidebar';
import ReadMoreModal from '../../../components/ui/ReadMoreModal';

// Define Guide interface
interface Guide {
  id: number;
  title: string;
  description: string;
  fullContent: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
}

// Category colors for badges
const categoryColors = {
  Basics: 'bg-blue-500 hover:bg-blue-600',
  Technical: 'bg-purple-500 hover:bg-purple-600',
  Risk: 'bg-red-500 hover:bg-red-600',
  Crypto: 'bg-yellow-500 hover:bg-yellow-600',
  Advanced: 'bg-green-500 hover:bg-green-600',
  Psychology: 'bg-pink-500 hover:bg-pink-600',
  Strategy: 'bg-indigo-500 hover:bg-indigo-600',
  Market: 'bg-orange-500 hover:bg-orange-600',
};

// Sample guide data
const guides: Guide[] = [
  {
    id: 1,
    title: 'Getting Started with Forex Trading',
    description:
      'Learn the basics of forex trading, including key concepts, terminology, and how to read currency pairs.',
    fullContent: `Forex trading, also known as foreign exchange trading or currency trading, is the process of buying one currency while simultaneously selling another. This is done in the foreign exchange market, a global marketplace that's open 24 hours a day during weekdays.

The forex market is the largest and most liquid financial market in the world, with a daily trading volume exceeding $6 trillion. This massive size means that forex traders can enter and exit positions with minimal slippage, even with large position sizes.

Key concepts in forex trading include:

1. Currency Pairs: Forex is always traded in pairs, such as EUR/USD (Euro/US Dollar) or GBP/JPY (British Pound/Japanese Yen). The first currency in the pair is the base currency, and the second is the quote currency.

2. Bid and Ask: The bid price is the price at which you can sell the base currency, while the ask price is the price at which you can buy it. The difference between these prices is called the spread.

3. Pips: A pip is the smallest price move in forex trading. For most currency pairs, a pip is equal to 0.0001, except for the Japanese Yen pairs where it's 0.01.

4. Leverage: Forex brokers often offer high leverage, allowing traders to control large positions with a small amount of capital. While this can amplify profits, it also increases the risk of significant losses.

5. Margin: This is the amount of money required to open a leveraged position. It's essentially a deposit that the broker holds as security.

Understanding these basic concepts is essential before you start trading forex. It's also important to develop a solid trading strategy and risk management plan to protect your capital.`,
    category: 'Basics',
    readTime: '10 min read',
    image: '/images/guides/forex-basics.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Technical Analysis Fundamentals',
    description:
      'Master the art of technical analysis with our comprehensive guide to chart patterns, indicators, and strategies.',
    fullContent: `Technical analysis is a method of evaluating securities by analyzing statistics generated by market activity, such as past prices and volume. Unlike fundamental analysis, which looks at economic and company data to determine value, technical analysis focuses on the study of price movements.

Key components of technical analysis include:

1. Chart Patterns: These are formations that appear on price charts and can signal potential future price movements. Common patterns include head and shoulders, double tops and bottoms, triangles, and flags.

2. Trend Analysis: Identifying the direction and strength of market trends is crucial. Trends can be upward (bullish), downward (bearish), or sideways (consolidation).

3. Support and Resistance: Support levels are price levels where a downtrend might pause due to a concentration of buying interest. Resistance levels are price levels where an uptrend might pause due to a concentration of selling interest.

4. Technical Indicators: These are mathematical calculations based on price, volume, or open interest. Popular indicators include moving averages, relative strength index (RSI), MACD, and Bollinger Bands.

5. Candlestick Patterns: These patterns, developed in Japan, provide visual cues about market sentiment and potential price reversals.

Technical analysis is based on three fundamental principles:

1. Market action discounts everything: All known information is already reflected in the price.

2. Prices move in trends: Once a trend is established, it's more likely to continue than to reverse.

3. History tends to repeat itself: Market participants tend to behave in similar ways under similar circumstances.

While technical analysis can be a powerful tool, it's most effective when used in conjunction with other forms of analysis and proper risk management techniques.`,
    category: 'Technical',
    readTime: '15 min read',
    image: '/images/guides/technical-analysis.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Risk Management Strategies',
    description:
      'Discover effective risk management techniques to protect your capital and maximize your trading potential.',
    fullContent: `Risk management is arguably the most important aspect of successful trading. No matter how good your analysis or how profitable your strategy, without proper risk management, you're likely to lose money in the long run.

Key risk management principles include:

1. Position Sizing: Never risk more than a small percentage of your trading capital on any single trade. A common rule is to risk no more than 1-2% of your account per trade.

2. Stop Losses: Always use stop losses to limit potential losses. A stop loss is an order to exit a position when the price reaches a certain level, preventing further losses.

3. Risk-Reward Ratio: Before entering a trade, determine your potential profit (reward) and potential loss (risk). A good rule of thumb is to aim for a risk-reward ratio of at least 1:2, meaning your potential profit is at least twice your potential loss.

4. Diversification: Don't put all your eggs in one basket. Spread your risk across different assets, markets, or strategies.

5. Leverage Management: Be cautious with leverage. While it can amplify profits, it can also lead to significant losses. Use leverage sparingly and understand its risks.

6. Emotional Control: Trading can be emotionally challenging. Develop a trading plan and stick to it, regardless of your emotions. Don't let fear or greed drive your decisions.

7. Regular Review: Periodically review your trading performance and risk management practices. Identify areas for improvement and adjust your approach accordingly.

Remember that risk management is not about avoiding losses entirely—that's impossible in trading. Instead, it's about controlling and limiting losses so that your winning trades can outweigh your losing ones over time.`,
    category: 'Risk',
    readTime: '12 min read',
    image: '/images/guides/risk-management.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Cryptocurrency Trading Guide',
    description:
      'Navigate the volatile world of cryptocurrency trading with our expert tips and strategies.',
    fullContent: `Cryptocurrency trading has become increasingly popular as digital assets gain mainstream acceptance. However, the crypto market is known for its extreme volatility, making it both potentially profitable and risky.

Key aspects of cryptocurrency trading include:

1. Understanding Blockchain: Cryptocurrencies are built on blockchain technology, a decentralized ledger that records all transactions. Understanding how blockchain works is fundamental to understanding cryptocurrencies.

2. Types of Cryptocurrencies: Beyond Bitcoin, there are thousands of cryptocurrencies (altcoins) with different purposes and technologies. Some are designed as digital currencies, while others serve specific functions within blockchain ecosystems.

3. Exchanges and Wallets: Cryptocurrencies are traded on specialized exchanges. You'll need to choose a reliable exchange and set up a secure wallet to store your digital assets.

4. Market Analysis: Like traditional markets, crypto markets can be analyzed using technical and fundamental analysis. However, crypto markets are less regulated and more susceptible to manipulation and hype.

5. Volatility Management: Cryptocurrency prices can swing dramatically in short periods. Successful crypto traders develop strategies to manage this volatility, such as dollar-cost averaging and setting strict stop losses.

6. Security Considerations: Cryptocurrency theft is a significant risk. Use secure wallets, enable two-factor authentication, and be cautious of phishing attempts and fraudulent schemes.

7. Regulatory Environment: Cryptocurrency regulations vary by country and are evolving rapidly. Stay informed about regulatory developments that could impact your trading.

Cryptocurrency trading requires a solid understanding of both the technology and the market dynamics. It's important to approach it with caution, thorough research, and a well-defined strategy.`,
    category: 'Crypto',
    readTime: '14 min read',
    image: '/images/guides/crypto-trading.jpg',
    featured: true,
  },
  {
    id: 5,
    title: 'Advanced Trading Strategies',
    description:
      'Take your trading to the next level with these advanced strategies for experienced traders.',
    fullContent: `Advanced trading strategies are designed for experienced traders who have mastered the basics and are looking to enhance their trading performance. These strategies often involve more complex analysis and risk management techniques.

Some advanced trading strategies include:

1. Multi-Timeframe Analysis: This involves analyzing the same asset across different timeframes (e.g., daily, hourly, 15-minute) to get a more comprehensive view of market trends and potential entry/exit points.

2. Correlation Trading: This strategy involves trading assets that tend to move in relation to each other. For example, if two assets typically move in opposite directions, you might buy one and sell the other when their correlation deviates from the norm.

3. Mean Reversion: This strategy is based on the idea that asset prices tend to return to their average over time. Traders identify when prices deviate significantly from the mean and take positions expecting a return to the average.

4. Momentum Trading: This involves following the trend and buying assets that are rising and selling those that are falling. Momentum traders use various indicators to identify strong trends and potential entry points.

5. Options Strategies: Options provide more complex ways to trade, including strategies like spreads, straddles, and iron condors. These can be used to hedge positions, generate income, or speculate on price movements.

6. Algorithmic Trading: This involves using computer programs to execute trades based on predefined criteria. Algorithmic trading can remove emotional bias and execute trades faster than human traders.

7. Market Making: This involves providing liquidity to the market by simultaneously placing buy and sell orders. Market makers profit from the spread between these orders.

Advanced strategies require a deep understanding of market mechanics, risk management, and technical analysis. They also often involve higher risk and complexity than basic strategies.`,
    category: 'Advanced',
    readTime: '20 min read',
    image: '/images/guides/advanced-strategies.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'Market Psychology',
    description:
      'Understand the psychological aspects of trading and how to maintain emotional discipline in the markets.',
    fullContent: `Market psychology refers to the collective sentiment and behavior of market participants, which can significantly influence price movements. Understanding market psychology is crucial for successful trading, as it helps you anticipate market movements and avoid common emotional pitfalls.

Key aspects of market psychology include:

1. Fear and Greed: These are the two primary emotions that drive market behavior. Fear leads to selling during downturns, while greed leads to buying during uptrends. Understanding these emotions can help you identify potential market reversals.

2. Herd Mentality: Many traders follow the crowd, buying when others are buying and selling when others are selling. This can lead to market bubbles and crashes. Successful traders often go against the herd when they see opportunities.

3. Confirmation Bias: This is the tendency to seek information that confirms your existing beliefs and ignore information that contradicts them. Overcoming confirmation bias requires actively seeking diverse perspectives and being open to changing your mind.

4. Loss Aversion: People tend to feel the pain of losses more strongly than the pleasure of gains. This can lead to holding losing positions too long and selling winning positions too early. Developing a balanced perspective on gains and losses is essential.

5. Overconfidence: After a series of successful trades, traders may become overconfident and take excessive risks. Maintaining humility and sticking to your trading plan regardless of recent performance is crucial.

6. Anchoring: This is the tendency to rely too heavily on the first piece of information encountered when making decisions. For example, a trader might anchor on the price they paid for an asset and be reluctant to sell at a loss, even when market conditions have changed.

7. Emotional Discipline: Successful trading requires emotional discipline—the ability to stick to your trading plan regardless of your emotions. This involves developing self-awareness, managing stress, and maintaining a balanced perspective.

Understanding market psychology can help you anticipate market movements and avoid common emotional pitfalls. It's an essential component of successful trading.`,
    category: 'Psychology',
    readTime: '11 min read',
    image: '/images/guides/market-psychology.jpg',
    featured: false,
  },
  {
    id: 7,
    title: 'Options Trading Strategies',
    description:
      'Learn how to use options to hedge positions, generate income, and speculate on market movements.',
    fullContent: `Options trading offers a versatile way to approach the markets, allowing traders to profit from price movements, generate income, or protect existing positions.

Key concepts in options trading include:

1. Call and Put Options: A call option gives the holder the right to buy an asset at a specified price, while a put option gives the holder the right to sell an asset at a specified price.

2. Strike Price: This is the price at which the option can be exercised. Options with strike prices below the current market price (for calls) or above the current market price (for puts) are said to be "in the money."

3. Expiration Date: Options have a limited lifespan. The expiration date is the last day on which the option can be exercised.

4. Premium: This is the price paid for the option. It consists of intrinsic value (the difference between the strike price and the current market price) and time value (the value of the option's remaining time until expiration).

5. Implied Volatility: This is a measure of the market's expectation of future volatility. It affects the price of options, with higher implied volatility leading to higher option prices.

Common options strategies include:

1. Covered Call: Selling call options against stock you already own to generate income.

2. Protective Put: Buying put options to protect against downside risk in a stock position.

3. Bull Call Spread: Buying a call option at a lower strike price and selling a call option at a higher strike price to reduce the cost of the trade.

4. Iron Condor: A strategy that profits from low volatility by selling both a put spread and a call spread.

5. Straddle: Buying both a call and a put option with the same strike price and expiration date to profit from significant price movements in either direction.

Options trading requires a solid understanding of the underlying asset and the factors that affect option prices. It's important to start with simple strategies and gradually move to more complex ones as you gain experience.`,
    category: 'Strategy',
    readTime: '18 min read',
    image: '/images/guides/options-trading.jpg',
    featured: true,
  },
  {
    id: 8,
    title: 'Market Analysis Techniques',
    description:
      'Explore different approaches to market analysis, from fundamental to technical, and learn how to combine them for better trading decisions.',
    fullContent: `Market analysis is the process of evaluating market conditions to make informed trading decisions. There are several approaches to market analysis, each with its own strengths and weaknesses.

Key approaches to market analysis include:

1. Fundamental Analysis: This involves evaluating the intrinsic value of an asset by analyzing economic, financial, and other qualitative and quantitative factors. For stocks, this might include analyzing company financials, industry trends, and economic conditions.

2. Technical Analysis: This involves analyzing price movements and patterns to predict future price behavior. Technical analysts use charts, indicators, and other tools to identify trends and potential entry/exit points.

3. Sentiment Analysis: This involves gauging the mood of market participants to predict price movements. Sentiment can be measured through surveys, social media analysis, and other methods.

4. Quantitative Analysis: This involves using mathematical models and algorithms to analyze market data and identify trading opportunities.

5. Macro Analysis: This involves analyzing broader economic and political factors that can affect markets, such as interest rates, inflation, and government policies.

The most effective approach often involves combining multiple methods of analysis. For example, a trader might use fundamental analysis to identify undervalued assets, technical analysis to determine entry and exit points, and sentiment analysis to gauge market mood.

It's also important to recognize the limitations of each approach. No method of analysis can predict market movements with certainty, and all methods are subject to human bias and error.

Successful traders develop a systematic approach to market analysis that aligns with their trading style, risk tolerance, and time horizon. They also continuously refine their approach based on experience and changing market conditions.`,
    category: 'Market',
    readTime: '16 min read',
    image: '/images/guides/market-analysis.jpg',
    featured: false,
  },
  {
    id: 9,
    title: 'Trading Psychology Mastery',
    description:
      'Develop the mental discipline needed to succeed in trading by understanding and managing your emotions.',
    fullContent: `Trading psychology is the study of how emotions and cognitive biases affect trading decisions. Mastering trading psychology is often the difference between successful and unsuccessful traders.

Key aspects of trading psychology include:

1. Emotional Control: Successful traders learn to manage their emotions, particularly fear and greed, which can lead to impulsive and irrational decisions.

2. Discipline: Following a trading plan consistently, regardless of emotions or market conditions, is essential for long-term success.

3. Patience: Waiting for high-probability setups rather than forcing trades can significantly improve trading results.

4. Confidence: Believing in your strategy and ability to execute it is important, but overconfidence can lead to excessive risk-taking.

5. Acceptance of Losses: Understanding that losses are an inevitable part of trading and learning from them rather than trying to avoid them at all costs.

6. Focus on Process: Concentrating on executing your strategy correctly rather than on the outcome of individual trades.

7. Mindfulness: Being present and aware of your thoughts and emotions while trading can help you make more rational decisions.

Common psychological pitfalls in trading include:

1. FOMO (Fear of Missing Out): Entering trades just because others are doing so, without proper analysis.

2. Revenge Trading: Trying to recover losses by taking excessive risks, which often leads to even larger losses.

3. Confirmation Bias: Seeking information that confirms your existing beliefs and ignoring information that contradicts them.

4. Anchoring: Relying too heavily on the first piece of information encountered when making decisions.

5. Loss Aversion: Feeling the pain of losses more strongly than the pleasure of gains, which can lead to holding losing positions too long and selling winning positions too early.

Developing strong trading psychology requires self-awareness, practice, and a commitment to continuous improvement. It's often helpful to keep a trading journal to track your thoughts, emotions, and decisions, and to review it regularly to identify patterns and areas for improvement.`,
    category: 'Psychology',
    readTime: '14 min read',
    image: '/images/guides/trading-psychology.jpg',
    featured: false,
  },
  {
    id: 10,
    title: 'Building a Trading System',
    description:
      'Learn how to develop a systematic approach to trading that can be tested, refined, and automated.',
    fullContent: `A trading system is a set of rules and parameters that guide trading decisions. A well-designed trading system can help remove emotion from trading, provide consistency, and potentially improve results.

Key components of a trading system include:

1. Entry and Exit Rules: Clear criteria for when to enter and exit trades, based on technical indicators, price action, or other factors.

2. Position Sizing: Rules for determining how much to risk on each trade, typically based on account size and risk tolerance.

3. Risk Management: Rules for managing risk, including stop losses, take profits, and maximum drawdown limits.

4. Timeframe: The specific timeframes to analyze and trade, such as daily, hourly, or 15-minute charts.

5. Markets: The specific markets or instruments to trade, based on liquidity, volatility, and correlation.

6. Filters: Additional criteria to filter out low-probability setups, such as trend filters, volatility filters, or time-based filters.

Steps to building a trading system:

1. Define Your Objectives: Determine your goals, risk tolerance, and time horizon.

2. Choose Your Approach: Decide whether to use a trend-following, mean-reversion, or other approach.

3. Select Your Indicators: Choose technical indicators or other tools that align with your approach.

4. Develop Your Rules: Create specific rules for entries, exits, position sizing, and risk management.

5. Backtest Your System: Test your system on historical data to evaluate its performance.

6. Optimize Your Parameters: Fine-tune your system's parameters to improve performance while avoiding over-optimization.

7. Forward Test Your System: Test your system on out-of-sample data to validate its performance.

8. Implement Your System: Start trading with your system, either manually or through automation.

9. Monitor and Refine: Continuously monitor your system's performance and make adjustments as needed.

A good trading system should be simple, robust, and aligned with your trading style and objectives. It should also be flexible enough to adapt to changing market conditions.

Remember that no trading system is perfect, and all systems will experience drawdowns. The key is to have a system that you can follow consistently and that has a positive expected value over time.`,
    category: 'Strategy',
    readTime: '20 min read',
    image: '/images/guides/trading-system.jpg',
    featured: true,
  },
];

export default function GuidesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter guides based on search query and active category
  const filteredGuides = guides.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' || guide.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured guides
  const featuredGuides = guides.filter((guide) => guide.featured);

  const openGuideModal = (guide: Guide) => {
    setSelectedGuide(guide);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGuide(null);
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar />
      <SocialSidebar />

      <main className='container mx-auto px-4 py-12 mt-10'>
        {/* Page Header with Animation */}
        <div className='mb-16 text-center relative'>
          <div className='absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl'></div>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-gradient'>
            Trading Guides
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Explore our comprehensive collection of trading guides to enhance
            your knowledge and improve your trading skills.
          </p>
        </div>

        {/* Featured Guides Section */}
        {activeCategory === 'All' && (
          <div className='mb-16'>
            <h2 className='text-2xl font-bold mb-6 flex items-center'>
              <span className='bg-gradient-to-r from-yellow-400 to-yellow-600 w-1 h-8 mr-3 rounded-full'></span>
              Featured Guides
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {featuredGuides.map((guide) => (
                <Card
                  key={guide.id}
                  className='bg-gray-800/50 border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 backdrop-blur-sm'
                >
                  <div className='h-64 overflow-hidden rounded-t-lg relative'>
                    <div className='w-full h-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center'>
                      <span className='text-6xl font-bold text-white opacity-50'>
                        {guide.category[0]}
                      </span>
                    </div>
                    <div className='absolute top-4 right-4'>
                      <Badge className='bg-yellow-500 hover:bg-yellow-600'>
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className='flex justify-between items-start mb-2'>
                      <Badge
                        className={`${
                          categoryColors[
                            guide.category as keyof typeof categoryColors
                          ]
                        }`}
                      >
                        {guide.category}
                      </Badge>
                      <span className='text-xs text-gray-400'>
                        {guide.readTime}
                      </span>
                    </div>
                    <CardTitle className='text-2xl'>{guide.title}</CardTitle>
                    <CardDescription className='text-gray-300 mt-2 text-base'>
                      {guide.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <button
                      onClick={() => openGuideModal(guide)}
                      className='w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 rounded-md transition-all duration-300 transform hover:scale-105'
                    >
                      Read Guide
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter Section */}
        <div className='mb-10 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-yellow-500/20'>
          <div className='relative w-full md:w-1/3'>
            <input
              type='text'
              placeholder='Search guides...'
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
          <div className='flex flex-wrap gap-2'>
            {[
              'All',
              'Basics',
              'Technical',
              'Risk',
              'Crypto',
              'Advanced',
              'Psychology',
              'Strategy',
              'Market',
            ].map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={`cursor-pointer transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-yellow-500 hover:bg-yellow-600'
                    : 'hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredGuides.map((guide) => (
            <Card
              key={guide.id}
              className='bg-gray-800/50 border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 backdrop-blur-sm group'
            >
              <div className='h-48 overflow-hidden rounded-t-lg relative'>
                <div className='w-full h-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500'>
                  <span className='text-4xl font-bold text-white opacity-50'>
                    {guide.category[0]}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className='flex justify-between items-start mb-2'>
                  <Badge
                    className={`${
                      categoryColors[
                        guide.category as keyof typeof categoryColors
                      ]
                    }`}
                  >
                    {guide.category}
                  </Badge>
                  <span className='text-xs text-gray-400'>
                    {guide.readTime}
                  </span>
                </div>
                <CardTitle className='text-xl group-hover:text-yellow-400 transition-colors duration-300'>
                  {guide.title}
                </CardTitle>
                <CardDescription className='text-gray-300 mt-2'>
                  {guide.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <button
                  onClick={() => openGuideModal(guide)}
                  className='w-full py-2 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 rounded-md transition-all duration-300 transform hover:scale-105'
                >
                  Read Guide
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredGuides.length === 0 && (
          <div className='text-center py-16'>
            <div className='w-24 h-24 mx-auto mb-6 text-gray-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-2'>No guides found</h3>
            <p className='text-gray-400'>
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredGuides.length > 0 && (
          <div className='mt-12 flex justify-center'>
            <div className='flex space-x-2'>
              <button className='px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-300'>
                Previous
              </button>
              <button className='px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300'>
                1
              </button>
              <button className='px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-300'>
                2
              </button>
              <button className='px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-300'>
                3
              </button>
              <button className='px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-300'>
                Next
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* Read More Modal */}
      {selectedGuide && (
        <ReadMoreModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedGuide.title}
          content={selectedGuide.fullContent}
          category={selectedGuide.category}
          readTime={selectedGuide.readTime}
        />
      )}
    </div>
  );
}
