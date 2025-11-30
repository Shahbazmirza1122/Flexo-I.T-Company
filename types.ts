export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Code' | 'Smartphone' | 'Palette' | 'Server' | 'Shield' | 'Headphones';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  TESTIMONIALS = 'testimonials',
  CONTACT = 'contact'
}