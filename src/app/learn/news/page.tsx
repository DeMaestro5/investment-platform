'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface NewsArticle {
  title: string;
  body: string;
  fullContent: string;
  url: string;
  published_on: string;
  source: string;
  categories: string;
  featured?: boolean;
}

const staticNews: NewsArticle[] = [
  {
    title: 'Bitcoin Surges Past $70,000 Mark for First Time',
    body: 'Bitcoin has reached a new all-time high, surpassing the $70,000 mark for the first time in history. This milestone comes amid growing institutional adoption and increasing mainstream acceptance of cryptocurrency.',
    fullContent: `Bitcoin has reached a new all-time high, surpassing the $70,000 mark for the first time in history. This milestone comes amid growing institutional adoption and increasing mainstream acceptance of cryptocurrency.

The cryptocurrency's remarkable rally has been fueled by several factors, including the approval of spot Bitcoin ETFs earlier this year, which has opened the floodgates for institutional investment. Major financial institutions have been accumulating Bitcoin at unprecedented rates, with some analysts suggesting that the supply shock from these purchases could drive prices even higher.

Market analysts point to the upcoming Bitcoin halving event, scheduled for April 2024, as another significant catalyst. The halving, which occurs approximately every four years, reduces the rate at which new Bitcoins are created, effectively decreasing the available supply. Historically, previous halving events have preceded substantial price increases.

Retail interest has also surged, with Google Trends data showing that searches for "Bitcoin" have reached their highest levels since the 2021 bull run. Social media engagement around Bitcoin has similarly increased, with many commentators suggesting that the cryptocurrency is entering a new phase of mainstream adoption.

Despite the positive momentum, some analysts remain cautious, noting that Bitcoin's price has historically been volatile and subject to significant corrections. However, the growing institutional presence and regulatory clarity in major markets like the United States have provided a more stable foundation for Bitcoin's growth.

As Bitcoin continues to make headlines and attract new investors, the question remains whether this rally represents a new paradigm for the cryptocurrency or another cycle in its volatile history. For now, the milestone of $70,000 stands as a testament to Bitcoin's resilience and growing acceptance in the global financial system.`,
    url: '#',
    published_on: '2024-03-20',
    source: 'Crypto News',
    categories: 'bitcoin',
    featured: true,
  },
  {
    title: 'Major Bank Announces Bitcoin Custody Services',
    body: 'A leading global bank has announced plans to offer Bitcoin custody services to its institutional clients, marking a significant step in the integration of cryptocurrency into traditional finance.',
    fullContent: `A leading global bank has announced plans to offer Bitcoin custody services to its institutional clients, marking a significant step in the integration of cryptocurrency into traditional finance.

The bank, which manages over $2 trillion in assets, revealed that it will begin offering secure storage solutions for Bitcoin and other major cryptocurrencies starting next quarter. This development represents a watershed moment in the relationship between traditional financial institutions and digital assets.

The custody service will include multi-signature security protocols, insurance coverage, and integration with the bank's existing wealth management platforms. Clients will be able to view their cryptocurrency holdings alongside traditional assets in a unified dashboard, providing a seamless experience for institutional investors.

Industry experts have hailed the announcement as a validation of Bitcoin's role as a legitimate asset class. "When major banks start offering custody services for Bitcoin, it signals to the broader market that the asset has reached a level of maturity and acceptance that warrants institutional-grade infrastructure," said one analyst.

The bank's decision follows a trend of increasing institutional adoption of Bitcoin, with several major financial firms launching cryptocurrency products and services in recent months. This shift has been driven by growing client demand, regulatory clarity in key jurisdictions, and Bitcoin's performance as an inflation hedge and portfolio diversifier.

The announcement has also sparked discussions about the potential impact on Bitcoin's price and market dynamics. Some analysts suggest that the entry of more institutional players could lead to reduced volatility and increased stability in Bitcoin's price, as these investors typically take longer-term positions.

As traditional finance continues to embrace Bitcoin, the lines between conventional and digital finance are becoming increasingly blurred, setting the stage for a new era of financial innovation and integration.`,
    url: '#',
    published_on: '2024-03-19',
    source: 'Finance Daily',
    categories: 'bitcoin',
  },
  {
    title: 'Bitcoin Mining Goes Green: 50% Now Powered by Renewable Energy',
    body: 'New research shows that Bitcoin mining is becoming increasingly sustainable, with over 50% of mining operations now powered by renewable energy sources, addressing environmental concerns.',
    fullContent: `New research shows that Bitcoin mining is becoming increasingly sustainable, with over 50% of mining operations now powered by renewable energy sources, addressing environmental concerns.

A comprehensive study by the Cambridge Centre for Alternative Finance has revealed that Bitcoin's environmental impact is improving significantly, with renewable energy now accounting for more than half of the electricity used in Bitcoin mining globally. This represents a 15% increase from just two years ago and challenges the narrative that Bitcoin is environmentally destructive.

The shift toward renewable energy has been driven by several factors, including the increasing competitiveness of solar and wind power, regulatory pressure in certain jurisdictions, and growing awareness of environmental issues among mining companies. Many miners are now strategically locating their operations near renewable energy sources to reduce costs and environmental impact.

In regions like Texas, Iceland, and Norway, Bitcoin miners are actively helping to balance electrical grids by consuming excess renewable energy that would otherwise go to waste. This practice, known as "curtailment," allows renewable energy producers to maintain operations even when demand is low, improving the overall efficiency of renewable energy systems.

The study also highlighted innovative approaches to Bitcoin mining, such as using waste heat from mining operations to warm greenhouses or residential buildings, and repurposing abandoned oil and gas facilities for mining operations. These developments suggest that Bitcoin mining could potentially contribute to environmental solutions rather than just minimizing its impact.

Environmental advocates have cautiously welcomed the findings, noting that while Bitcoin's energy consumption remains significant, the trend toward renewable energy is positive. Some have suggested that Bitcoin's energy use could actually accelerate the transition to renewable energy by providing a consistent, location-independent demand for electricity that can be met by intermittent renewable sources.

As Bitcoin continues to grow and evolve, its relationship with energy and the environment will likely remain a key area of focus for both supporters and critics. The latest research suggests that the industry is moving in a more sustainable direction, though challenges remain in achieving even greater adoption of renewable energy.`,
    url: '#',
    published_on: '2024-03-18',
    source: 'Tech Review',
    categories: 'bitcoin',
  },
  {
    title: 'Bitcoin ETF Trading Volume Hits Record High',
    body: 'Trading volume for Bitcoin ETFs has reached unprecedented levels, indicating strong institutional interest and growing mainstream adoption of cryptocurrency investment vehicles.',
    fullContent: `Trading volume for Bitcoin ETFs has reached unprecedented levels, indicating strong institutional interest and growing mainstream adoption of cryptocurrency investment vehicles.

The newly approved spot Bitcoin ETFs have experienced a surge in trading activity, with daily volumes exceeding $5 billion on multiple occasions in recent weeks. This remarkable level of engagement has far exceeded market expectations and has positioned Bitcoin ETFs among the most actively traded financial products globally.

The influx of capital into these ETFs has been nothing short of extraordinary, with cumulative inflows approaching $15 billion since their launch in January. This has translated into significant Bitcoin accumulation by the ETF providers, with some analysts estimating that the ETFs are purchasing approximately 10 times more Bitcoin than is being produced through mining on a daily basis.

Market observers attribute this strong performance to several factors, including the convenience and familiarity of ETF structures for traditional investors, the reduced barriers to entry compared to direct cryptocurrency ownership, and the growing acceptance of Bitcoin as a legitimate asset class among institutional investors.

The success of Bitcoin ETFs has also had a notable impact on Bitcoin's price dynamics. The consistent buying pressure from ETF providers has created a supply shock, as large amounts of Bitcoin are being removed from circulation and placed in long-term custody. This structural shift in Bitcoin's market dynamics has contributed to its recent price appreciation and may continue to influence its trajectory in the coming months.

Financial advisors and wealth managers have reported increased client interest in Bitcoin exposure through these regulated vehicles, suggesting that the ETFs are successfully bridging the gap between traditional finance and digital assets. This mainstreaming of Bitcoin investment could have far-reaching implications for its adoption and integration into broader financial markets.

As the Bitcoin ETF landscape continues to evolve, with new products being launched and existing ones refining their offerings, the market is likely to see further innovation and competition. This development represents a significant milestone in Bitcoin's journey from a niche digital asset to a mainstream financial instrument.`,
    url: '#',
    published_on: '2024-03-17',
    source: 'Market Watch',
    categories: 'bitcoin',
  },
  {
    title: "New Study Shows Bitcoin's Growing Role in Global Finance",
    body: "A comprehensive study reveals Bitcoin's increasing importance in global finance, with growing adoption among both retail and institutional investors worldwide.",
    fullContent: `A comprehensive study reveals Bitcoin's increasing importance in global finance, with growing adoption among both retail and institutional investors worldwide.

The International Monetary Fund (IMF) has published a groundbreaking report examining Bitcoin's evolving role in the global financial system, acknowledging its growing significance while highlighting both opportunities and challenges. The study, which analyzed data from over 100 countries, found that Bitcoin adoption has increased by 880% over the past five years, with particularly strong growth in emerging markets.

The report identifies several key factors driving Bitcoin's adoption: inflation hedging in countries with unstable currencies, remittance facilitation for migrant workers, financial inclusion for the unbanked, and portfolio diversification for both retail and institutional investors. In regions experiencing economic turmoil or currency devaluation, Bitcoin has emerged as a viable alternative to traditional financial instruments.

Perhaps most notably, the study found that Bitcoin's correlation with traditional financial markets has decreased significantly over the past two years, suggesting that it is increasingly functioning as a distinct asset class rather than a speculative instrument tied to broader market movements. This decoupling has enhanced Bitcoin's appeal as a portfolio diversifier and potential hedge against systemic financial risks.

The IMF's analysis also highlights the growing institutional adoption of Bitcoin, with pension funds, insurance companies, and sovereign wealth funds increasingly allocating small portions of their portfolios to the cryptocurrency. This trend, the report suggests, represents a fundamental shift in how institutional investors view digital assets.

Despite these positive developments, the study acknowledges ongoing challenges, including regulatory uncertainty in some jurisdictions, environmental concerns related to energy consumption, and the need for greater consumer protection measures. The IMF recommends a balanced regulatory approach that fosters innovation while addressing these concerns.

The report concludes that Bitcoin's role in global finance is likely to continue evolving, potentially becoming more integrated with traditional financial systems while maintaining its distinctive characteristics. This evolution, the authors suggest, could lead to a more resilient and inclusive global financial architecture.`,
    url: '#',
    published_on: '2024-03-16',
    source: 'Financial Times',
    categories: 'bitcoin',
  },
  {
    title: 'Bitcoin Layer 2 Solutions See Record Growth',
    body: "Bitcoin's Layer 2 scaling solutions are experiencing unprecedented growth, with transaction volumes and user adoption reaching new heights, improving the network's efficiency.",
    fullContent: `Bitcoin's Layer 2 scaling solutions are experiencing unprecedented growth, with transaction volumes and user adoption reaching new heights, improving the network's efficiency.

The Lightning Network, Bitcoin's primary Layer 2 scaling solution, has reached a new milestone with over 17,000 active nodes and a network capacity exceeding 5,000 Bitcoin (approximately $350 million at current prices). This represents a 300% increase in capacity over the past year and signals a significant maturation of Bitcoin's secondary layer infrastructure.

The surge in Lightning Network adoption has been driven by several factors, including improved user interfaces, increased merchant acceptance, and growing recognition of its potential to enable Bitcoin to function as a medium of exchange rather than just a store of value. Major payment processors and financial technology companies have begun integrating Lightning Network capabilities into their platforms, making it easier for users to send and receive Bitcoin payments instantly and with minimal fees.

In developing countries, the Lightning Network is gaining particular traction as a solution for remittances and everyday transactions. Users in regions with limited access to traditional banking services are increasingly turning to Bitcoin and the Lightning Network as a more accessible and cost-effective alternative to conventional payment systems.

The technical improvements to the Lightning Network have also contributed to its growing adoption. Recent protocol upgrades have enhanced security, reduced routing failures, and improved the overall user experience. These developments have addressed some of the early challenges that limited the network's usability and have made it more attractive to both individual users and businesses.

Analysts suggest that the growth of Layer 2 solutions like the Lightning Network is crucial for Bitcoin's long-term viability as a global payment system. By enabling faster, cheaper transactions while maintaining Bitcoin's security and decentralization, these solutions help bridge the gap between Bitcoin's current capabilities and its potential as a comprehensive financial infrastructure.

As Layer 2 adoption continues to accelerate, some experts predict that the majority of Bitcoin transactions could eventually occur on these secondary layers, with the main Bitcoin blockchain serving primarily as a settlement layer for larger transactions and as a secure foundation for the entire ecosystem.`,
    url: '#',
    published_on: '2024-03-15',
    source: 'Crypto Tech',
    categories: 'bitcoin',
  },
  {
    title: 'Bitcoin Adoption Surges in Emerging Markets',
    body: 'Emerging markets are showing increased Bitcoin adoption rates, with several countries reporting significant growth in Bitcoin transactions and wallet creations.',
    fullContent: `Emerging markets are showing increased Bitcoin adoption rates, with several countries reporting significant growth in Bitcoin transactions and wallet creations.

A new report from the World Bank has highlighted the dramatic increase in Bitcoin adoption across emerging markets, with countries in Latin America, Africa, and Southeast Asia leading the way. The study, which analyzed cryptocurrency usage data from 75 developing nations, found that Bitcoin adoption has grown by an average of 1,200% over the past three years, far outpacing growth in developed economies.

In Latin America, countries like El Salvador, Argentina, and Brazil have seen particularly strong adoption rates, with Bitcoin increasingly being used for everyday transactions, savings, and protection against local currency volatility. El Salvador's decision to make Bitcoin legal tender in 2021 has served as a catalyst for adoption throughout the region, despite initial skepticism from international financial institutions.

African nations have also embraced Bitcoin, with Nigeria, Kenya, and South Africa reporting significant increases in cryptocurrency usage. In these countries, Bitcoin is primarily being used for international remittances, as traditional money transfer services often charge exorbitant fees that can consume up to 10% of the transferred amount. Bitcoin's ability to facilitate cross-border transactions with minimal fees has made it an attractive alternative for millions of people who rely on remittances from family members working abroad.

The report identifies several key factors driving Bitcoin adoption in emerging markets: limited access to traditional banking services, high inflation rates in many local currencies, restrictive capital controls, and the growing availability of mobile internet connectivity. In many cases, Bitcoin is providing financial services that are either unavailable or prohibitively expensive through conventional channels.

Local entrepreneurs and innovators have played a crucial role in facilitating Bitcoin adoption, developing user-friendly applications and establishing networks of Bitcoin ATMs and exchange services. These grassroots efforts have helped overcome barriers to entry and have made Bitcoin more accessible to people with varying levels of technical expertise.

Despite the positive trends, the report acknowledges ongoing challenges, including regulatory uncertainty, limited consumer protection, and the need for greater education about the risks and benefits of cryptocurrency use. The World Bank recommends a balanced approach to regulation that fosters innovation while addressing these concerns.

As Bitcoin adoption continues to grow in emerging markets, its potential to promote financial inclusion and economic empowerment becomes increasingly apparent. The cryptocurrency is not just being used as an investment vehicle but as a practical tool for addressing real-world financial challenges faced by millions of people.`,
    url: '#',
    published_on: '2024-03-14',
    source: 'Global Finance',
    categories: 'bitcoin',
  },
  {
    title: 'Major Retailers Begin Accepting Bitcoin Payments',
    body: 'Several major retail chains have announced plans to accept Bitcoin as payment, signaling growing mainstream adoption of cryptocurrency in everyday transactions.',
    fullContent: `Several major retail chains have announced plans to accept Bitcoin as payment, signaling growing mainstream adoption of cryptocurrency in everyday transactions.

In a watershed moment for cryptocurrency adoption, a consortium of major retail chains has announced that they will begin accepting Bitcoin payments at thousands of locations across the United States and Europe. The initiative, which includes some of the world's largest retailers, represents the most significant integration of Bitcoin into mainstream commerce to date.

The participating retailers, which collectively operate over 25,000 stores and generate annual revenue in excess of $500 billion, will implement Bitcoin payment solutions through a partnership with leading payment processors. The system will allow customers to pay for goods and services using Bitcoin through various methods, including mobile wallets, payment cards linked to cryptocurrency accounts, and QR code scanning.

The announcement has been met with enthusiasm from both the cryptocurrency community and retail industry analysts. "This is a tipping point for Bitcoin adoption," said one industry expert. "When major retailers begin accepting Bitcoin, it moves from being a speculative investment to a practical medium of exchange that can be used in everyday life."

The implementation will be phased, with initial rollout beginning in select locations before expanding to all stores over the next 12 months. During the transition period, the retailers will provide training to staff and educational materials to customers to ensure a smooth integration of Bitcoin payments into the shopping experience.

The decision by these retailers to accept Bitcoin reflects broader trends in consumer behavior and payment preferences. Surveys have shown increasing interest in cryptocurrency payments among consumers, particularly in younger demographics. By offering Bitcoin payment options, these retailers aim to attract tech-savvy customers and position themselves at the forefront of payment innovation.

The technical infrastructure for the initiative leverages the Lightning Network, Bitcoin's Layer 2 scaling solution, which enables fast, low-cost transactions suitable for retail environments. This approach allows the retailers to accept Bitcoin payments without experiencing the delays and high fees that have historically been associated with on-chain Bitcoin transactions.

While the primary focus is on Bitcoin, the payment system has been designed with flexibility to potentially incorporate other cryptocurrencies in the future. This forward-looking approach ensures that the retailers can adapt to evolving consumer preferences and technological developments in the cryptocurrency space.

The announcement has already had a positive impact on Bitcoin's price and market sentiment, with analysts suggesting that increased utility as a payment method could lead to greater stability and reduced volatility in Bitcoin's value over time.`,
    url: '#',
    published_on: '2024-03-13',
    source: 'Business News',
    categories: 'bitcoin',
  },
  {
    title: 'Bitcoin Lightning Network Capacity Reaches New ATH',
    body: "Bitcoin's Lightning Network has reached a new all-time high in capacity, demonstrating the growing adoption of Bitcoin's layer-2 scaling solution for fast and cheap transactions.",
    fullContent: `Bitcoin's Lightning Network has reached a new all-time high in capacity, demonstrating the growing adoption of Bitcoin's layer-2 scaling solution for fast and cheap transactions.

The Lightning Network, Bitcoin's primary Layer 2 scaling solution, has achieved a significant milestone with its network capacity surpassing 5,500 Bitcoin (approximately $385 million at current prices). This represents a 40% increase from the previous all-time high recorded just three months ago and signals accelerating adoption of this crucial Bitcoin infrastructure.

The growth in Lightning Network capacity has been accompanied by a corresponding increase in transaction volume, which has more than doubled over the past six months. This surge in activity reflects growing recognition of the Lightning Network's potential to enable Bitcoin to function as a practical medium of exchange rather than just a store of value.

Technical improvements to the Lightning Network protocol have played a crucial role in this growth. Recent upgrades have enhanced routing efficiency, reduced payment failures, and improved the overall user experience. These developments have addressed some of the early challenges that limited the network's usability and have made it more attractive to both individual users and businesses.

Major payment processors and financial technology companies have begun integrating Lightning Network capabilities into their platforms, making it easier for users to send and receive Bitcoin payments instantly and with minimal fees. This integration has been particularly significant in regions with limited access to traditional banking services, where the Lightning Network is providing a more accessible and cost-effective alternative to conventional payment systems.

The Lightning Network's success has also attracted the attention of traditional financial institutions, with several banks and payment companies exploring ways to incorporate this technology into their existing infrastructure. This interest from established financial players suggests that the Lightning Network could play a crucial role in bridging the gap between traditional finance and the Bitcoin ecosystem.

Analysts suggest that the Lightning Network's growth is essential for Bitcoin's long-term viability as a global payment system. By enabling faster, cheaper transactions while maintaining Bitcoin's security and decentralization, the Lightning Network helps address the scalability challenges that have historically limited Bitcoin's utility as a medium of exchange.

As adoption continues to accelerate, some experts predict that the majority of Bitcoin transactions could eventually occur on the Lightning Network, with the main Bitcoin blockchain serving primarily as a settlement layer for larger transactions and as a secure foundation for the entire ecosystem.`,
    url: '#',
    published_on: '2024-03-12',
    source: 'Tech Daily',
    categories: 'bitcoin',
  },
  {
    title: 'Bitcoin Mining Difficulty Hits Record High',
    body: 'Bitcoin mining difficulty has reached a new all-time high, reflecting increased competition among miners and the growing security of the Bitcoin network.',
    fullContent: `Bitcoin mining difficulty has reached a new all-time high, reflecting increased competition among miners and the growing security of the Bitcoin network.

Bitcoin's mining difficulty has surged to an unprecedented level, surpassing 80 trillion hashes per second for the first time in history. This milestone represents a 15% increase from the previous record set just two weeks ago and underscores the remarkable growth in Bitcoin's network security and computational power.

The mining difficulty, which adjusts approximately every two weeks, is a measure of how difficult it is to find a new block on the Bitcoin blockchain. As more miners join the network or existing miners deploy more powerful equipment, the difficulty increases to maintain the target block time of approximately 10 minutes. This self-adjusting mechanism is a crucial feature of Bitcoin's design, ensuring that the rate of new Bitcoin creation remains stable regardless of the total computational power dedicated to mining.

The record-breaking difficulty level reflects several significant developments in the Bitcoin mining industry. The deployment of more efficient mining hardware, particularly the latest generation of application-specific integrated circuits (ASICs), has dramatically increased the computational power available to the network. Additionally, the recent Bitcoin price rally has made mining more profitable, attracting new participants and encouraging existing miners to expand their operations.

The geographical distribution of Bitcoin mining has also evolved, with the United States now accounting for approximately 40% of the global hash rate, followed by China (despite the 2021 mining ban), Kazakhstan, and Canada. This diversification has enhanced Bitcoin's resilience against potential regulatory or geopolitical risks.

The increasing mining difficulty has important implications for Bitcoin's security and value proposition. A higher difficulty means that it becomes more expensive and resource-intensive to attempt a 51% attack on the network, further strengthening Bitcoin's position as the most secure blockchain in existence. This enhanced security is particularly significant as Bitcoin continues to attract institutional investment and adoption.

However, the rising difficulty also presents challenges for smaller miners, who may struggle to remain profitable as competition intensifies. Some analysts suggest that this trend could lead to further consolidation in the mining industry, with larger, more efficient operations gaining a greater share of the network's hash rate.

Despite these challenges, the record-breaking mining difficulty is ultimately a positive development for Bitcoin, demonstrating the network's robust security and the strong economic incentives that drive its continued growth and evolution.`,
    url: '#',
    published_on: '2024-03-11',
    source: 'Mining Weekly',
    categories: 'bitcoin',
  },
];

export default function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredArticle = staticNews.find((article) => article.featured);
  const regularNews = staticNews.filter((article) => !article.featured);

  const openArticleModal = (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <>
      <Navbar />
      <main className='min-h-screen bg-background'>
        {/* Hero Section */}
        <div className='relative bg-gradient-to-r text-white py-20'>
          <div className='absolute inset-0 bg-[url("/images/bitcoin-pattern.png")] opacity-10'></div>
          <div className='container mx-auto px-4 max-w-7xl relative z-10'>
            <div className='max-w-3xl'>
              <h1 className='text-5xl font-bold mb-6 leading-tight text-white'>
                Latest Bitcoin News & Updates
              </h1>
              <p className='text-xl text-white/90 mb-8'>
                Stay informed with the latest Bitcoin news, market trends, and
                industry developments.
              </p>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4 max-w-7xl py-12'>
          {/* Featured Article */}
          {featuredArticle && (
            <div className='mb-16'>
              <h2 className='text-2xl font-bold mb-6 flex items-center'>
                <span className='bg-yellow-100 text-yellow-500 px-3 py-1 rounded-md mr-3'>
                  Featured
                </span>
                Featured Story
              </h2>
              <Card className='overflow-hidden border-2 border-yellow-200transition-all duration-300'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='p-8 flex flex-col justify-center'>
                    <Badge className='mb-4 w-fit bg-yellow-100 text-yellow-500 hover:bg-yellow-200'>
                      {featuredArticle.source}
                    </Badge>
                    <h3 className='text-2xl font-bold mb-4 leading-tight text-yellow-500'>
                      {featuredArticle.title}
                    </h3>
                    <p className='text-gray-700 mb-6 line-clamp-4'>
                      {featuredArticle.body}
                    </p>
                    <div className='flex items-center justify-between mt-auto'>
                      <span className='text-sm text-gray-500'>
                        {new Date(
                          featuredArticle.published_on
                        ).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <button
                        onClick={() => openArticleModal(featuredArticle)}
                        className='inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium transition-colors'
                      >
                        Read full article
                        <svg
                          className='ml-2 h-4 w-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className=' flex items-center justify-center p-8'>
                    <div className='w-full h-full flex items-center justify-center'>
                      <svg
                        className='w-32 h-32 text-yellow-200'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* News Grid */}
          <div className='mb-8'>
            <h2 className='text-2xl font-bold mb-6 text-yellow-500'>
              Latest News
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {regularNews.map((article, index) => (
                <Card
                  key={index}
                  className='overflow-hidden hover:shadow-lg transition-all duration-300 border border-yellow-100 hover:border-yellow-300 h-full flex flex-col'
                >
                  <CardHeader className='pb-2'>
                    <div className='flex justify-between items-start gap-4 mb-2'>
                      <Badge
                        variant='secondary'
                        className='shrink-0 bg-yellow-100 text-yellow-500 hover:bg-yellow-200'
                      >
                        {article.source}
                      </Badge>
                      <span className='text-xs text-gray-500'>
                        {new Date(article.published_on).toLocaleDateString(
                          'en-US',
                          {
                            month: 'short',
                            day: 'numeric',
                          }
                        )}
                      </span>
                    </div>
                    <CardTitle className='text-xl font-bold leading-tight text-yellow-500'>
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='flex-grow'>
                    <p className='text-gray-700 leading-relaxed line-clamp-3'>
                      {article.body}
                    </p>
                  </CardContent>
                  <CardFooter className='pt-0'>
                    <button
                      onClick={() => openArticleModal(article)}
                      className='inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium transition-colors'
                    >
                      Read more
                      <svg
                        className='ml-2 h-4 w-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Article Modal */}
      {isModalOpen && selectedArticle && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6'>
              <div className='flex justify-between items-start mb-4'>
                <Badge className='bg-yellow-100 text-yellow-500'>
                  {selectedArticle.source}
                </Badge>
                <button
                  onClick={closeModal}
                  className='text-gray-500 hover:text-gray-700'
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
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
              <h2 className='text-2xl font-bold text-yellow-500 mb-2'>
                {selectedArticle.title}
              </h2>
              <p className='text-sm text-gray-500 mb-6'>
                {new Date(selectedArticle.published_on).toLocaleDateString(
                  'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
              </p>
              <div className='prose max-w-none'>
                {selectedArticle.fullContent
                  .split('\n\n')
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className='text-gray-700 leading-relaxed mb-4'
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
              <div className='mt-8 flex justify-end'>
                <a
                  href={selectedArticle.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors'
                >
                  View original source
                  <svg
                    className='ml-2 h-4 w-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
