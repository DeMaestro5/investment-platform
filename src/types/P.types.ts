import { StaticImageData } from 'next/image';

// types.ts
export interface ProgressStep {
  id: number;
  label: string;
  active: boolean;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export interface HeroSlide {
  id: number;
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface TraderViewChartProps {
  height?: string;
  symbol?: string;
  interval?: string;
  className?: string;
}

export interface TestimonialProps {
  id: number;
  name: string;
  role?: string;
  company?: string;
  image?: string | StaticImageData;
  content: string;
  rating?: number;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export interface VideoPlayerProps {
  videoId: string;
  title?: string;
  thumbnail?: string;
  className?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  subItems?: {
    label: string;
    href: string;
  }[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube';
  href: string;
}
