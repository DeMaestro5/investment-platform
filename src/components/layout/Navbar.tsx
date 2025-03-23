'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { NavItem } from '../../types/P.types';

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
      { label: 'API', href: '/trading/api' },
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsMenuOpen(false);

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
        <div className='flex justify-between items-center h-20'>
          {/* Text Logo */}
          <Link href='/' className='flex-shrink-0'>
            <div className='flex items-center'>
              <span className='text-yellow-500 text-2xl font-bold'>INVEST</span>
              <span className='text-white text-2xl font-light'>PLATFORM</span>
              <div className='h-6 w-1 bg-yellow-500 mx-2 rounded-full'></div>
              <span className='text-white text-sm uppercase tracking-wider'>
                Trading Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {navItems.map((item) => (
              <div key={item.label} className='relative'>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.label);
                      }}
                      className='flex items-center text-white hover:text-yellow-500 transition-colors'
                    >
                      {item.label}
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div className='absolute top-full left-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-md py-2 z-50'>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className='block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white'
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className='text-white hover:text-yellow-500 transition-colors'
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Login/Signup Buttons */}
          <div className='hidden lg:flex items-center space-x-4'>
            <Button variant='outline' size='sm' href='/login'>
              Log In
            </Button>
            <Button variant='primary' size='sm' href='/register'>
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className='text-white p-2'
              aria-label='Toggle menu'
            >
              {isMenuOpen ? (
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
              ) : (
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
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden bg-gray-900 shadow-lg'>
          <div className='container mx-auto px-4 py-4'>
            <nav className='flex flex-col space-y-4'>
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(item.label);
                        }}
                        className='flex items-center justify-between w-full text-white py-2'
                      >
                        {item.label}
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 9l-7 7-7-7'
                          />
                        </svg>
                      </button>

                      {activeDropdown === item.label && (
                        <div className='pl-4 mt-2 border-l-2 border-gray-800'>
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className='block py-2 text-gray-300 hover:text-white'
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className='block text-white py-2'
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className='mt-6 flex flex-col space-y-3'>
              <Button variant='outline' fullWidth href='/login'>
                Log In
              </Button>
              <Button variant='primary' fullWidth href='/register'>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
