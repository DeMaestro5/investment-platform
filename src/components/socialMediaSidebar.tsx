import { Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

// Define SocialLink type
export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

// Social media links data
const socialLinks: SocialLink[] = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com',
    icon: <Facebook className='h-5 w-5' />,
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com',
    icon: <Twitter className='h-5 w-5' />,
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com',
    icon: <Instagram className='h-5 w-5' />,
  },
  {
    platform: 'Telegram',
    url: 'https://t.me',
    icon: <MessageCircle className='h-5 w-5' />,
  },
];

export default function SocialSidebar() {
  return (
    <div className='fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block'>
      <div className='flex flex-col items-center space-y-6'>
        {/* Vertical Text */}
        <span className='text-sm tracking-widest transform -rotate-90 mb-8 origin-center whitespace-nowrap text-gray-200'>
          Follow Us
        </span>

        {/* Social Icons */}
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Follow us on ${link.platform}`}
            className='text-white hover:text-yellow-400 transition-colors duration-200'
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
