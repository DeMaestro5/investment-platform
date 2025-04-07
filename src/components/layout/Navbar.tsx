'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { NavItem } from '../../types/P.types';
import { UserButton, useUser } from '@clerk/nextjs';

// Navigation items
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Markets',
    href: '/markets',
    subItems: [
      { label: 'Cryptocurrency', href: '/markets/crypto' },
      { label: 'Forex', href: '/markets/forex' },
      { label: 'Stocks', href: '/markets/stocks' },
      { label: 'Indices', href: '/markets/indices' },
      { label: 'Commodities', href: '/markets/commodities' },
    ],
  },
  {
    label: 'Trading',
    href: '/trading',
    subItems: [
      { label: 'Trading Platform', href: '/trading/platform' },
      { label: 'Charts', href: '/trading/charts' },
      { label: 'Analysis Tools', href: '/trading/tools' },
    ],
  },
  {
    label: 'Learn',
    href: '/learn',
    subItems: [
      { label: 'Tutorials', href: '/learn/tutorials' },
      { label: 'Market News', href: '/learn/news' },
      { label: 'Trading Guides', href: '/learn/guides' },
      { label: 'FAQ', href: '/learn/faq' },
    ],
  },
  { label: 'About', href: '/about' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isSignedIn, isLoaded, user } = useUser();

  // Debug authentication state
  useEffect(() => {
    console.log('Navbar auth state:', {
      isSignedIn,
      isLoaded,
      userId: user?.id,
      userEmail: user?.emailAddresses?.[0]?.emailAddress,
      userName: user?.firstName
        ? `${user.firstName} ${user.lastName || ''}`
        : 'Unknown',
    });
  }, [isSignedIn, isLoaded, user]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest('.mobile-menu') &&
        !target.closest('.mobile-menu-button')
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16 sm:h-20'>
          {/* Text Logo */}
          <Link href='/' className='flex-shrink-0'>
            <div className='flex items-center'>
              <span className='text-yellow-500 text-xl sm:text-2xl font-bold'>
                INVEST
              </span>
              <span className='text-white text-xl sm:text-2xl font-light'>
                PLATFORM
              </span>
              <div className='h-4 sm:h-6 w-1 bg-yellow-500 mx-2 rounded-full'></div>
              <span className='text-white text-xs sm:text-sm uppercase tracking-wider hidden sm:inline-block'>
                Trading Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {navItems.map((item) => (
              <div key={item.label} className='relative group'>
                <Link
                  href={item.href}
                  className='text-white hover:text-yellow-500 transition-colors'
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className='absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className='block px-4 py-2 text-sm text-white hover:bg-gray-700'
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Account Button */}
            <div className='ml-4'>
              {isSignedIn ? (
                <div className='flex space-x-4'>
                  <Link href='/accounts'>
                    <Button variant='primary'>Account</Button>
                  </Link>
                  <UserButton afterSignOutUrl='/' />
                </div>
              ) : (
                <div className='flex space-x-4'>
                  <Link href='/login'>
                    <Button variant='outline'>Log In</Button>
                  </Link>
                  <Link href='/register'>
                    <Button variant='primary'>Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className='lg:hidden text-white mobile-menu-button'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMenuOpen ? (
                <path d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden mobile-menu bg-gray-900 shadow-lg rounded-b-lg w-full overflow-hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className='block px-3 py-2 text-white hover:bg-gray-700 rounded-md'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className='pl-4'>
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className='block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Mobile Account Button */}
              <div className='px-3 py-2'>
                {isSignedIn ? (
                  <div className='flex flex-col space-y-2'>
                    <Link href='/accounts'>
                      <Button variant='primary' className='w-full'>
                        Accounts
                      </Button>
                    </Link>
                    <div className='flex justify-center'>
                      <UserButton afterSignOutUrl='/' />
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col space-y-2'>
                    <Link href='/login'>
                      <Button variant='outline' className='w-full'>
                        Log In
                      </Button>
                    </Link>
                    <Link href='/register'>
                      <Button variant='primary' className='w-full'>
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
