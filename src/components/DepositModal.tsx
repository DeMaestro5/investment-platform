import React, { useState } from 'react';
import { Button } from './ui/Button';
import { QRCodeSVG } from 'qrcode.react';

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DepositModal: React.FC<DepositModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  // This is a sample Bitcoin wallet address - in a real app, this would come from your backend
  const bitcoinWalletAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';

  const handleCopyAddress = () => {
    navigator.clipboard
      .writeText(bitcoinWalletAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy address: ', err);
      });
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4 border border-gray-700'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-medium text-white'>Deposit Funds</h3>
          <button onClick={onClose} className='text-gray-400 hover:text-white'>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        <div className='mb-6'>
          <p className='text-gray-300 mb-4'>
            To deposit funds, please send Bitcoin to the following address:
          </p>

          <div className='bg-gray-700 rounded-lg p-4 mb-4'>
            <div className='flex items-center justify-between'>
              <div className='truncate mr-2'>
                <p className='text-sm text-gray-400'>Bitcoin Address</p>
                <p className='text-white font-mono text-sm break-all'>
                  {bitcoinWalletAddress}
                </p>
              </div>
              <Button
                variant='outline'
                size='sm'
                onClick={handleCopyAddress}
                className='whitespace-nowrap'
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>

          <div className='flex justify-center mb-4'>
            <div className='bg-white p-4 rounded-lg'>
              <QRCodeSVG
                value={bitcoinWalletAddress}
                size={200}
                level='H'
                includeMargin={true}
                className='rounded'
              />
            </div>
          </div>

          <div className='bg-yellow-900/30 border border-yellow-700 rounded-lg p-4'>
            <p className='text-yellow-300 text-sm'>
              <strong>Important:</strong> Only send Bitcoin to this address.
              Sending other cryptocurrencies may result in permanent loss of
              funds.
            </p>
          </div>
        </div>

        <div className='flex justify-end'>
          <Button variant='primary' onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
