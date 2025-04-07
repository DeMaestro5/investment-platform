'use client';

import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProgressIndicator from '../components/ui/ProgressIndicator';
import HeroSection from '../components/sections/HeroSection';
import TraderViewSection from '../components/sections/TraderViewSection';
import GetAccountBanner from '../components/sections/GetAccountBanner';
import CommunitySection from '../components/sections/CommunitySection';
import TutorialSection from '../components/sections/TutorialSection';
import ReviewSection from '../components/sections/ReviewSection';
import SecondTraderViewSection from '../components/sections/SecondTraderViewSection';
import { ProgressStep } from '../types/P.types';

export default function HomePage() {
  // Define progress steps for the ProgressIndicator
  const progressSteps: ProgressStep[] = [
    { id: 1, label: 'Home', active: true },
    { id: 2, label: 'Markets', active: false },
    { id: 3, label: 'Community', active: false },
    { id: 4, label: 'Learn', active: false },
  ];

  return (
    <div className='min-h-screen bg-gray-900 text-white overflow-x-hidden'>
      <Navbar />

      {/* Progress Indicator - Hide on mobile */}
      <div className='hidden md:block'>
        <ProgressIndicator steps={progressSteps} />
      </div>

      {/* Main Content */}
      <main className='w-full'>
        {/* Hero Section with Slider */}
        <HeroSection />

        {/* Real-time Trading Section */}
        <TraderViewSection />

        {/* Get a Live Account Banner */}
        <GetAccountBanner />

        {/* Community Section */}
        <CommunitySection />

        {/* Tutorial Section */}
        <TutorialSection />

        {/* Reviews Section */}
        <ReviewSection />

        {/* Second Trader View Section */}
        <SecondTraderViewSection />
      </main>

      <Footer />
    </div>
  );
}
