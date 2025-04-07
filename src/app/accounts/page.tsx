'use client';

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { userService } from '../../services/userService';
import { Button } from '../../components/ui/Button';

export default function AccountsPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [balance, setBalance] = useState(0);
  const [profit, setProfit] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Debug authentication state
  useEffect(() => {
    console.log('Accounts page auth state:', {
      isSignedIn,
      isLoaded,
      userId: user?.id,
      userEmail: user?.emailAddresses?.[0]?.emailAddress,
      userName: user?.firstName
        ? `${user.firstName} ${user.lastName || ''}`
        : 'Unknown',
    });
  }, [isSignedIn, isLoaded, user]);

  // Load user data from Supabase
  useEffect(() => {
    const loadUserData = async () => {
      if (user?.id) {
        try {
          console.log('Loading user data for ID:', user.id);
          setIsLoading(true);
          const userProfile = await userService.getUserProfile(user.id);

          console.log('User profile loaded:', userProfile);

          if (userProfile) {
            setBalance(userProfile.balance || 0);
            setProfit(userProfile.profit || 0);
          } else {
            console.log('Creating new user profile');
            // Create a new profile if it doesn't exist
            const newProfile = await userService.upsertUserProfile({
              id: user.id,
              email: user.emailAddresses[0]?.emailAddress || '',
              full_name: `${user.firstName || ''} ${
                user.lastName || ''
              }`.trim(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              balance: 0,
              profit: 0,
              account_status: 'active',
              risk_level: 'medium',
              account_type: 'basic',
              portfolio_value: 0,
            });

            console.log('New profile created:', newProfile);

            if (newProfile) {
              setBalance(newProfile.balance || 0);
              setProfit(newProfile.profit || 0);
            }
          }
        } catch (error) {
          console.error('Error loading user data:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.log('No user ID available, skipping data load');
      }
    };

    if (isLoaded && user) {
      loadUserData();
    } else if (isLoaded && !user) {
      console.log('User is not signed in, redirecting to login');
      router.push('/login');
    }
  }, [isLoaded, user, router]);

  if (!isLoaded || isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        Loading...
      </div>
    );
  }

  if (!user) {
    console.log('No user found, redirecting to login');
    router.push('/login');
    return null;
  }

  const handleDeposit = async () => {
    // TODO: Implement deposit functionality
    console.log('Deposit clicked');
    // For now, just update the balance in Supabase
    if (user.id) {
      const newBalance = balance + 100;
      const success = await userService.updateBalance(user.id, newBalance);
      if (success) {
        setBalance(newBalance);
      }
    }
  };

  const handleWithdraw = async () => {
    // TODO: Implement withdraw functionality
    console.log('Withdraw clicked');
    // For now, just update the balance in Supabase
    if (user.id && balance >= 50) {
      const newBalance = balance - 50;
      const success = await userService.updateBalance(user.id, newBalance);
      if (success) {
        setBalance(newBalance);
      }
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-gray-800/50 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden border border-gray-700'>
          <div className='px-8 py-10'>
            <div className='text-center mb-10'>
              <h1 className='text-4xl font-bold text-white mb-2'>
                Account Dashboard
              </h1>
              <p className='text-gray-400 text-lg'>
                Welcome back, {user.firstName || user.username}
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-10'>
              <div className='bg-gray-800/80 p-8 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300'>
                <div className='flex items-center justify-between mb-4'>
                  <h2 className='text-lg font-semibold text-gray-300'>
                    Current Balance
                  </h2>
                  <div className='p-2 bg-yellow-500/10 rounded-lg'>
                    <svg
                      className='w-6 h-6 text-yellow-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                </div>
                <p className='text-4xl font-bold text-yellow-500'>
                  ${balance.toFixed(2)}
                </p>
                <p className='mt-2 text-sm text-gray-400'>
                  Available for trading
                </p>
              </div>

              <div className='bg-gray-800/80 p-8 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300'>
                <div className='flex items-center justify-between mb-4'>
                  <h2 className='text-lg font-semibold text-gray-300'>
                    Total Profit
                  </h2>
                  <div className='p-2 bg-green-500/10 rounded-lg'>
                    <svg
                      className='w-6 h-6 text-green-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                      />
                    </svg>
                  </div>
                </div>
                <p
                  className={`text-4xl font-bold ${
                    profit >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  ${profit.toFixed(2)}
                </p>
                <p className='mt-2 text-sm text-gray-400'>
                  All-time trading profit
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-gray-800/80 p-6 rounded-xl border border-gray-700'>
                <h3 className='text-lg font-semibold text-gray-300 mb-4'>
                  Quick Actions
                </h3>
                <div className='space-y-4'>
                  <Button
                    variant='primary'
                    size='lg'
                    fullWidth
                    onClick={handleDeposit}
                    className='w-full'
                  >
                    <svg
                      className='w-5 h-5 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                      />
                    </svg>
                    Deposit Funds
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    fullWidth
                    onClick={handleWithdraw}
                    className='w-full'
                    disabled={balance < 50}
                  >
                    <svg
                      className='w-5 h-5 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M20 12H4'
                      />
                    </svg>
                    Withdraw Funds
                  </Button>
                </div>
              </div>

              <div className='bg-gray-800/80 p-6 rounded-xl border border-gray-700'>
                <h3 className='text-lg font-semibold text-gray-300 mb-4'>
                  Account Status
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-400'>Account Type</span>
                    <span className='text-yellow-500 font-medium'>Basic</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-400'>Risk Level</span>
                    <span className='text-yellow-500 font-medium'>Medium</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-400'>Status</span>
                    <span className='text-green-500 font-medium'>Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
