'use client';

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { userService } from '../../services/userService';
import { transactionService } from '../../services/transactionService';
import {
  performanceService,
  PerformanceMetrics,
} from '../../services/performanceService';
import {
  securityService,
  SecuritySettings,
} from '../../services/securityService';
import { Button } from '../../components/ui/Button';
import { Transaction } from '../../types';
import { DepositModal } from '../../components/DepositModal';

export default function AccountsPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [balance, setBalance] = useState(0);
  const [profit, setProfit] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>(
    []
  );
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([]);
  const [performanceMetrics, setPerformanceMetrics] =
    useState<PerformanceMetrics | null>(null);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(true);
  const [securitySettings, setSecuritySettings] =
    useState<SecuritySettings | null>(null);
  const [isLoadingSecurity, setIsLoadingSecurity] = useState(true);
  const [isUpdatingSecurity, setIsUpdatingSecurity] = useState(false);
  const [securityUpdateMessage, setSecurityUpdateMessage] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileUpdateMessage, setProfileUpdateMessage] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [userDetails, setUserDetails] = useState({
    full_name: '',
    phone_number: '',
    address: '',
    city: '',
    country: '',
    postal_code: '',
  });
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

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

            // Set user details for the form
            setUserDetails({
              full_name: userProfile.full_name || '',
              phone_number: userProfile.phone_number || '',
              address: userProfile.address || '',
              city: userProfile.city || '',
              country: userProfile.country || '',
              postal_code: userProfile.postal_code || '',
            });
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

              // Set user details for the form
              setUserDetails({
                full_name: newProfile.full_name || '',
                phone_number: newProfile.phone_number || '',
                address: newProfile.address || '',
                city: newProfile.city || '',
                country: newProfile.country || '',
                postal_code: newProfile.postal_code || '',
              });
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

  // Load transactions
  useEffect(() => {
    const loadTransactions = async () => {
      if (user?.id) {
        try {
          setIsLoadingTransactions(true);
          const recent = await transactionService.getRecentTransactions(
            user.id,
            5
          );
          const all = await transactionService.getAllTransactions(user.id);

          setRecentTransactions(recent);
          setAllTransactions(all);
        } catch (error) {
          console.error('Error loading transactions:', error);
        } finally {
          setIsLoadingTransactions(false);
        }
      }
    };

    if (isLoaded && user) {
      loadTransactions();
    }
  }, [isLoaded, user]);

  // Load performance metrics
  useEffect(() => {
    const loadPerformanceMetrics = async () => {
      if (user?.id) {
        try {
          setIsLoadingMetrics(true);
          const metrics = await performanceService.getPerformanceMetrics(
            user.id
          );
          setPerformanceMetrics(metrics);
        } catch (error) {
          console.error('Error loading performance metrics:', error);
        } finally {
          setIsLoadingMetrics(false);
        }
      }
    };

    if (isLoaded && user) {
      loadPerformanceMetrics();
    }
  }, [isLoaded, user]);

  // Load security settings
  useEffect(() => {
    const loadSecuritySettings = async () => {
      if (user?.id) {
        try {
          setIsLoadingSecurity(true);
          const settings = await securityService.getSecuritySettings(user.id);
          setSecuritySettings(settings);
        } catch (error) {
          console.error('Error loading security settings:', error);
        } finally {
          setIsLoadingSecurity(false);
        }
      }
    };

    if (isLoaded && user) {
      loadSecuritySettings();
    }
  }, [isLoaded, user]);

  // Clear security update message after 3 seconds
  useEffect(() => {
    if (securityUpdateMessage) {
      const timer = setTimeout(() => {
        setSecurityUpdateMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [securityUpdateMessage]);

  // Clear profile update message after 3 seconds
  useEffect(() => {
    if (profileUpdateMessage) {
      const timer = setTimeout(() => {
        setProfileUpdateMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [profileUpdateMessage]);

  if (!isLoaded || isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-900'>
        <div className='flex flex-col items-center'>
          <div className='w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-4'></div>
          <p className='text-gray-300'>Loading your account...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    console.log('No user found, redirecting to login');
    router.push('/login');
    return null;
  }

  const handleDeposit = () => {
    setIsDepositModalOpen(true);
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

        // Create a transaction record
        await transactionService.createTransaction({
          userId: user.id,
          transactionType: 'withdrawal',
          totalAmount: 50,
          status: 'completed',
          executedAt: new Date().toISOString(),
        });

        // Refresh transactions
        const recent = await transactionService.getRecentTransactions(
          user.id,
          5
        );
        const all = await transactionService.getAllTransactions(user.id);
        setRecentTransactions(recent);
        setAllTransactions(all);
      }
    }
  };

  const handleToggleLoginNotifications = async () => {
    if (!user.id) return;

    setIsUpdatingSecurity(true);
    try {
      const currentState = securitySettings?.loginNotificationsEnabled || false;
      const success = await securityService.updateLoginNotifications(
        user.id,
        !currentState
      );

      if (success) {
        setSecuritySettings((prev) => {
          if (!prev) {
            return {
              id: '', // This will be set by the database
              userId: user.id,
              loginNotificationsEnabled: !currentState,
              updatedAt: new Date().toISOString(),
              createdAt: new Date().toISOString(),
            };
          }
          return {
            ...prev,
            loginNotificationsEnabled: !currentState,
          };
        });
        setSecurityUpdateMessage({
          type: 'success',
          message: `Login notifications ${
            !currentState ? 'enabled' : 'disabled'
          } successfully`,
        });
      } else {
        setSecurityUpdateMessage({
          type: 'error',
          message: 'Failed to update login notifications',
        });
      }
    } catch (error) {
      console.error('Error toggling login notifications:', error);
      setSecurityUpdateMessage({
        type: 'error',
        message: 'An error occurred while updating login notifications',
      });
    } finally {
      setIsUpdatingSecurity(false);
    }
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    if (!user.id) return;

    try {
      const success = await userService.updateUserDetails(user.id, userDetails);

      if (success) {
        setProfileUpdateMessage({
          type: 'success',
          message: 'Profile updated successfully',
        });
        setIsEditingProfile(false);
      } else {
        setProfileUpdateMessage({
          type: 'error',
          message: 'Failed to update profile',
        });
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setProfileUpdateMessage({
        type: 'error',
        message: 'An error occurred while updating your profile',
      });
    }
  };

  // Format performance metrics for display
  const formattedMetrics = performanceMetrics
    ? [
        {
          label: 'Win Rate',
          value: `${performanceMetrics.winRate}%`,
          change:
            performanceMetrics.winRateChange > 0
              ? `+${performanceMetrics.winRateChange}%`
              : `${performanceMetrics.winRateChange}%`,
        },
        {
          label: 'Average Trade',
          value: `$${performanceMetrics.averageTrade.toLocaleString()}`,
          change:
            performanceMetrics.averageTradeChange > 0
              ? `+$${performanceMetrics.averageTradeChange}`
              : `-$${Math.abs(performanceMetrics.averageTradeChange)}`,
        },
        {
          label: 'Total Trades',
          value: performanceMetrics.totalTrades.toString(),
          change:
            performanceMetrics.totalTradesChange > 0
              ? `+${performanceMetrics.totalTradesChange}`
              : `-${Math.abs(performanceMetrics.totalTradesChange)}`,
        },
        {
          label: 'Risk/Reward',
          value: performanceMetrics.riskRewardRatio.toFixed(1),
          change:
            performanceMetrics.riskRewardChange > 0
              ? `+${performanceMetrics.riskRewardChange.toFixed(1)}`
              : `-${Math.abs(performanceMetrics.riskRewardChange).toFixed(1)}`,
        },
      ]
    : [
        { label: 'Win Rate', value: '0%', change: '0%' },
        { label: 'Average Trade', value: '$0', change: '$0' },
        { label: 'Total Trades', value: '0', change: '0' },
        { label: 'Risk/Reward', value: '0.0', change: '0.0' },
      ];

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      {/* Header */}
      <div className='bg-gray-800 border-b border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-yellow-500'>
                Trading Dashboard
              </h1>
              <p className='text-gray-400 mt-1'>
                Welcome back, {user.firstName || user.username}
              </p>
            </div>
            <div className='mt-4 md:mt-0 flex items-center space-x-4'>
              <Button variant='primary' size='md' onClick={handleDeposit}>
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
                Deposit
              </Button>
              <Button
                variant='outline'
                size='md'
                onClick={handleWithdraw}
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
                Withdraw
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Deposit Modal */}
      <DepositModal
        isOpen={isDepositModalOpen}
        onClose={() => setIsDepositModalOpen(false)}
      />

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Tabs */}
        <div className='border-b border-gray-700 mb-8'>
          <nav className='-mb-px flex space-x-8'>
            {['overview', 'transactions', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-yellow-500 text-yellow-500'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className='space-y-8'>
            {/* Account Summary Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-lg font-medium text-gray-300'>
                    Account Balance
                  </h3>
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
                <p className='text-3xl font-bold text-yellow-500'>
                  ${balance.toLocaleString()}
                </p>
                <p className='mt-2 text-sm text-gray-400'>
                  Available for trading
                </p>
              </div>

              <div className='bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-lg font-medium text-gray-300'>
                    Total Profit
                  </h3>
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
                  className={`text-3xl font-bold ${
                    profit >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  ${profit.toLocaleString()}
                </p>
                <p className='mt-2 text-sm text-gray-400'>
                  All-time trading profit
                </p>
              </div>

              <div className='bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-lg font-medium text-gray-300'>
                    Portfolio Value
                  </h3>
                  <div className='p-2 bg-blue-500/10 rounded-lg'>
                    <svg
                      className='w-6 h-6 text-blue-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                      />
                    </svg>
                  </div>
                </div>
                <p className='text-3xl font-bold text-blue-500'>
                  ${(balance + profit).toLocaleString()}
                </p>
                <p className='mt-2 text-sm text-gray-400'>
                  Total account value
                </p>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
              <h3 className='text-lg font-medium text-gray-300 mb-6'>
                Performance Metrics
              </h3>
              {isLoadingMetrics ? (
                <div className='flex justify-center py-8'>
                  <div className='w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin'></div>
                </div>
              ) : (
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                  {formattedMetrics.map((metric, index) => (
                    <div key={index} className='bg-gray-700/50 rounded-lg p-4'>
                      <p className='text-sm text-gray-400'>{metric.label}</p>
                      <p className='text-xl font-bold text-white mt-1'>
                        {metric.value}
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          metric.change.startsWith('+')
                            ? 'text-green-500'
                            : 'text-red-500'
                        }`}
                      >
                        {metric.change}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Transactions */}
            <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-lg font-medium text-gray-300'>
                  Recent Transactions
                </h3>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className='text-sm text-yellow-500 hover:text-yellow-400'
                >
                  View All
                </button>
              </div>
              {isLoadingTransactions ? (
                <div className='flex justify-center py-8'>
                  <div className='w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin'></div>
                </div>
              ) : recentTransactions.length > 0 ? (
                <div className='overflow-x-auto'>
                  <table className='min-w-full divide-y divide-gray-700'>
                    <thead>
                      <tr>
                        <th className='px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                          Type
                        </th>
                        <th className='px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                          Amount
                        </th>
                        <th className='px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                          Date
                        </th>
                        <th className='px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-700'>
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td className='px-4 py-3 whitespace-nowrap'>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                transaction.transactionType === 'deposit'
                                  ? 'bg-green-100 text-green-800'
                                  : transaction.transactionType === 'withdrawal'
                                  ? 'bg-red-100 text-red-800'
                                  : transaction.transactionType === 'buy'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {transaction.transactionType
                                .charAt(0)
                                .toUpperCase() +
                                transaction.transactionType.slice(1)}
                            </span>
                          </td>
                          <td className='px-4 py-3 whitespace-nowrap text-sm text-white'>
                            ${transaction.totalAmount.toLocaleString()}
                          </td>
                          <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-400'>
                            {new Date(
                              transaction.createdAt
                            ).toLocaleDateString()}
                          </td>
                          <td className='px-4 py-3 whitespace-nowrap'>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                transaction.status === 'completed'
                                  ? 'bg-green-100 text-green-800'
                                  : transaction.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : transaction.status === 'failed'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {transaction.status.charAt(0).toUpperCase() +
                                transaction.status.slice(1)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className='text-center py-8 text-gray-400'>
                  No transactions found. Start trading to see your history.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
            <h3 className='text-lg font-medium text-gray-300 mb-6'>
              All Transactions
            </h3>
            {isLoadingTransactions ? (
              <div className='flex justify-center py-8'>
                <div className='w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin'></div>
              </div>
            ) : allTransactions.length > 0 ? (
              <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-700'>
                  <thead>
                    <tr>
                      <th className='px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                        Type
                      </th>
                      <th className='px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                        Amount
                      </th>
                      <th className='px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                        Date
                      </th>
                      <th className='px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-700'>
                    {allTransactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className='px-4 py-3 whitespace-nowrap'>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              transaction.transactionType === 'deposit'
                                ? 'bg-green-100 text-green-800'
                                : transaction.transactionType === 'withdrawal'
                                ? 'bg-red-100 text-red-800'
                                : transaction.transactionType === 'buy'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {transaction.transactionType
                              .charAt(0)
                              .toUpperCase() +
                              transaction.transactionType.slice(1)}
                          </span>
                        </td>
                        <td className='px-4 py-3 whitespace-nowrap text-sm text-white'>
                          ${transaction.totalAmount.toLocaleString()}
                        </td>
                        <td className='px-4 py-3 whitespace-nowrap text-sm text-gray-400'>
                          {new Date(transaction.createdAt).toLocaleDateString()}
                        </td>
                        <td className='px-4 py-3 whitespace-nowrap'>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              transaction.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : transaction.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : transaction.status === 'failed'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {transaction.status.charAt(0).toUpperCase() +
                              transaction.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className='text-center py-8 text-gray-400'>
                No transactions found. Start trading to see your history.
              </div>
            )}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
            <h3 className='text-lg font-medium text-gray-300 mb-6'>
              Account Settings
            </h3>

            {/* Profile Update Message */}
            {profileUpdateMessage && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  profileUpdateMessage.type === 'success'
                    ? 'bg-green-900/50 text-green-300 border border-green-700'
                    : 'bg-red-900/50 text-red-300 border border-red-700'
                }`}
              >
                {profileUpdateMessage.message}
              </div>
            )}

            {/* Security Update Message */}
            {securityUpdateMessage && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  securityUpdateMessage.type === 'success'
                    ? 'bg-green-900/50 text-green-300 border border-green-700'
                    : 'bg-red-900/50 text-red-300 border border-red-700'
                }`}
              >
                {securityUpdateMessage.message}
              </div>
            )}

            <div className='space-y-6'>
              <div className='bg-gray-700/50 rounded-lg p-4'>
                <div className='flex justify-between items-center mb-4'>
                  <h4 className='text-md font-medium text-white'>
                    Personal Information
                  </h4>
                  {!isEditingProfile ? (
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setIsEditingProfile(true)}
                    >
                      Edit Profile
                    </Button>
                  ) : (
                    <div className='flex space-x-2'>
                      <Button
                        variant='primary'
                        size='sm'
                        onClick={handleUpdateProfile}
                      >
                        Save Changes
                      </Button>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() => setIsEditingProfile(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>

                {isEditingProfile ? (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm text-gray-400 mb-1'>
                        Full Name
                      </label>
                      <input
                        type='text'
                        name='full_name'
                        value={userDetails.full_name}
                        onChange={handleProfileChange}
                        className='w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
                      />
                    </div>
                    <div>
                      <label className='block text-sm text-gray-400 mb-1'>
                        Phone Number
                      </label>
                      <input
                        type='text'
                        name='phone_number'
                        value={userDetails.phone_number}
                        onChange={handleProfileChange}
                        className='w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
                      />
                    </div>
                    <div className='md:col-span-2'>
                      <label className='block text-sm text-gray-400 mb-1'>
                        Address
                      </label>
                      <input
                        type='text'
                        name='address'
                        value={userDetails.address}
                        onChange={handleProfileChange}
                        className='w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
                      />
                    </div>
                    <div>
                      <label className='block text-sm text-gray-400 mb-1'>
                        City
                      </label>
                      <input
                        type='text'
                        name='city'
                        value={userDetails.city}
                        onChange={handleProfileChange}
                        className='w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
                      />
                    </div>
                    <div>
                      <label className='block text-sm text-gray-400 mb-1'>
                        Country
                      </label>
                      <input
                        type='text'
                        name='country'
                        value={userDetails.country}
                        onChange={handleProfileChange}
                        className='w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
                      />
                    </div>
                    <div>
                      <label className='block text-sm text-gray-400 mb-1'>
                        Postal Code
                      </label>
                      <input
                        type='text'
                        name='postal_code'
                        value={userDetails.postal_code}
                        onChange={handleProfileChange}
                        className='w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
                      />
                    </div>
                  </div>
                ) : (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <p className='text-sm text-gray-400'>Full Name</p>
                      <p className='text-white font-medium'>
                        {userDetails.full_name || 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-400'>Phone Number</p>
                      <p className='text-white font-medium'>
                        {userDetails.phone_number || 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-400'>Address</p>
                      <p className='text-white font-medium'>
                        {userDetails.address || 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-400'>City</p>
                      <p className='text-white font-medium'>
                        {userDetails.city || 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-400'>Country</p>
                      <p className='text-white font-medium'>
                        {userDetails.country || 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-400'>Postal Code</p>
                      <p className='text-white font-medium'>
                        {userDetails.postal_code || 'Not provided'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className='bg-gray-700/50 rounded-lg p-4'>
                <h4 className='text-md font-medium text-white mb-2'>
                  Account Information
                </h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <p className='text-sm text-gray-400'>Account Type</p>
                    <p className='text-white font-medium'>Basic</p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Risk Level</p>
                    <p className='text-white font-medium'>Medium</p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Account Status</p>
                    <p className='text-green-500 font-medium'>Active</p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Member Since</p>
                    <p className='text-white font-medium'>January 2023</p>
                  </div>
                </div>
              </div>

              <div className='bg-gray-700/50 rounded-lg p-4'>
                <h4 className='text-md font-medium text-white mb-2'>
                  Security Settings
                </h4>
                {isLoadingSecurity ? (
                  <div className='flex justify-center py-4'>
                    <div className='w-6 h-6 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin'></div>
                  </div>
                ) : (
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <p className='text-white font-medium'>
                          Login Notifications
                        </p>
                        <p className='text-sm text-gray-400'>
                          Get notified when someone logs into your account
                        </p>
                      </div>
                      <Button
                        variant={
                          securitySettings?.loginNotificationsEnabled
                            ? 'primary'
                            : 'outline'
                        }
                        size='sm'
                        onClick={handleToggleLoginNotifications}
                        disabled={isUpdatingSecurity}
                      >
                        {isUpdatingSecurity ? (
                          <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                        ) : securitySettings?.loginNotificationsEnabled ? (
                          'Enabled'
                        ) : (
                          'Enable'
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
