'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../../components/ui/Button';
import { motion } from 'framer-motion';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const { signIn, isLoaded } = useSignIn();
  const router = useRouter();
  const { isSignedIn } = useUser();

  // Debug authentication state
  React.useEffect(() => {
    console.log('Login page auth state:', { isSignedIn, isLoaded });
  }, [isSignedIn, isLoaded]);

  // Redirect if already signed in
  React.useEffect(() => {
    if (isSignedIn) {
      console.log('User is signed in, redirecting to homepage');
      router.push('/');
    }
  }, [isSignedIn, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      setIsLoading(true);
      setError('');

      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === 'complete') {
        router.push('/');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred during sign in'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!isLoaded) return;

    try {
      setIsLoading(true);
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/',
        redirectUrlComplete: '/',
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'An error occurred during Google sign in'
      );
      setIsLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-gray-900'>
      {/* Left side - Form */}
      <motion.div
        className='w-full md:w-1/2 flex items-center justify-center p-8 md:p-16'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className='max-w-md w-full space-y-8'>
          {/* Logo */}
          <motion.div
            className='text-center'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div
              className='flex items-center justify-center'
              variants={itemVariants}
            >
              <span className='text-yellow-500 text-3xl font-bold'>INVEST</span>
              <span className='text-white text-3xl font-light'>PLATFORM</span>
            </motion.div>
            <motion.h2
              className='mt-6 text-3xl font-bold text-white'
              variants={itemVariants}
            >
              Welcome back
            </motion.h2>
            <motion.p
              className='mt-2 text-sm text-gray-400'
              variants={itemVariants}
            >
              Don&apos;t have an account?{' '}
              <Link
                href='/register'
                className='text-yellow-500 hover:text-yellow-400 transition-colors'
              >
                Sign up
              </Link>
            </motion.p>
          </motion.div>

          {/* Login Form */}
          <motion.form
            className='mt-8 space-y-6'
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {error && (
              <motion.div
                className='bg-red-500/20 border border-red-500 text-red-200 px-4 py-2 rounded-md text-sm'
                variants={itemVariants}
              >
                {error}
              </motion.div>
            )}

            <motion.div
              className='rounded-md shadow-sm space-y-4'
              variants={itemVariants}
            >
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-300 mb-1'
                >
                  Email address
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all'
                  placeholder='you@example.com'
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-300 mb-1'
                >
                  Password
                </label>
                <div className='relative'>
                  <input
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    autoComplete='current-password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all pr-10'
                    placeholder='••••••••'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute inset-y-0 right-0 flex items-center justify-center w-10 text-gray-400 hover:text-yellow-500 transition-colors'
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showPassword ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className='flex items-center justify-between'
              variants={itemVariants}
            >
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className='h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-700 rounded bg-gray-800 transition-colors'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-300'
                >
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <Link
                  href='/forgot-password'
                  className='text-yellow-500 hover:text-yellow-400 transition-colors'
                >
                  Forgot your password?
                </Link>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                variant='primary'
                size='lg'
                fullWidth
                className='w-full relative overflow-hidden group'
              >
                <span
                  className={`${
                    isLoading ? 'opacity-0' : 'opacity-100'
                  } transition-opacity`}
                >
                  Sign in
                </span>
                {isLoading && (
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <svg
                      className='animate-spin h-5 w-5 text-black'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                  </div>
                )}
              </Button>
            </motion.div>
          </motion.form>

          {/* Social Login */}
          <motion.div
            className='mt-6'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-700'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-gray-900 text-gray-400'>
                  Or continue with
                </span>
              </div>
            </div>

            <motion.div className='mt-6' variants={itemVariants}>
              <Button
                variant='secondary'
                size='md'
                fullWidth
                className='flex items-center justify-center hover:bg-gray-700 transition-colors'
                onClick={handleGoogleSignIn}
              >
                <svg className='w-5 h-5 mr-2' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z'
                  />
                </svg>
                Google
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right side - Animation/Illustration */}
      <motion.div
        className='hidden md:flex md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 items-center justify-center p-8 md:p-16 relative overflow-hidden'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        <div className='relative z-10 max-w-lg'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='text-center'
          >
            <h2 className='text-4xl font-bold text-white mb-4'>
              Your Investment Journey Starts Here
            </h2>
            <p className='text-gray-300 text-lg mb-8'>
              Access real-time market data, advanced trading tools, and expert
              insights to make informed investment decisions.
            </p>

            <div className='grid grid-cols-3 gap-4 mb-8'>
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className='bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700'
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + item * 0.1 }}
                >
                  <div className='h-12 w-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3'>
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
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-white font-medium'>Feature {item}</h3>
                  <p className='text-gray-400 text-sm'>
                    Description of this amazing feature
                  </p>
                </motion.div>
              ))}
            </div>

            <div className='flex justify-center'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant='outline' size='lg'>
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
};

export default LoginPage;
