import React from 'react';
import { Badge } from './badge';

interface ReadMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  date?: string;
  source?: string;
  url?: string;
  category?: string;
  readTime?: string;
}

const ReadMoreModal: React.FC<ReadMoreModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  date,
  source,
  url,
  category,
  readTime,
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='p-6'>
          <div className='flex justify-between items-start mb-4'>
            <div className='flex gap-2'>
              {source && (
                <Badge className='bg-yellow-100 text-yellow-500'>
                  {source}
                </Badge>
              )}
              {category && (
                <Badge className='bg-blue-100 text-blue-500'>{category}</Badge>
              )}
            </div>
            <button
              onClick={onClose}
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
          <h2 className='text-2xl font-bold text-yellow-500 mb-2'>{title}</h2>
          <div className='flex justify-between items-center mb-6'>
            {date && (
              <p className='text-sm text-gray-500'>
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            )}
            {readTime && <p className='text-sm text-gray-500'>{readTime}</p>}
          </div>
          <div className='prose max-w-none'>
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className='text-gray-700 leading-relaxed mb-4'>
                {paragraph}
              </p>
            ))}
          </div>
          {url && (
            <div className='mt-8 flex justify-end'>
              <a
                href={url}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadMoreModal;
