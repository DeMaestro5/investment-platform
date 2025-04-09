import React from 'react';

interface ToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ToolModal: React.FC<ToolModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4'>
      <div className='bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto'>
        <div className='flex justify-between items-center p-4 border-b border-gray-700'>
          <h2 className='text-2xl font-semibold'>{title}</h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-white transition-colors'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
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
        <div className='p-6'>{children}</div>
      </div>
    </div>
  );
};

export default ToolModal;
