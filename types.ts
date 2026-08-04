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
  /** Whether this route has real content yet (vs. rendering PlaceholderPage). Defaults to false. */
  implemented?: boolean;
}