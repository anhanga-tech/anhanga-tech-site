export interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  variant?: 'dark' | 'light' | 'green' | 'lime';
}

export interface NavItem {
  label: string;
  href: string;
}