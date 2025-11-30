import { ServiceItem, Testimonial, SectionId } from './types';

export const NAV_LINKS = [
  { label: 'About', href: `#${SectionId.ABOUT}` },
  { label: 'Services', href: `#${SectionId.SERVICES}` },
  { label: 'Testimonials', href: `#${SectionId.TESTIMONIALS}` },
  { label: 'Contact', href: `#${SectionId.CONTACT}` },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Cutting-edge responsive websites built with React, Next.js, and modern frameworks optimized for performance.',
    iconName: 'Code',
  },
  {
    id: 'app-dev',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.',
    iconName: 'Smartphone',
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Intuitive and visually stunning interfaces designed to captivate your audience and improve conversion.',
    iconName: 'Palette',
  },
  {
    id: 'software',
    title: 'Custom Software',
    description: 'Tailored software solutions to automate business processes and solve complex operational challenges.',
    iconName: 'Server',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Robust security audits and implementation to protect your digital assets from emerging threats.',
    iconName: 'Shield',
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Dedicated technical support and maintenance teams ensuring your systems run smoothly around the clock.',
    iconName: 'Headphones',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'CTO, TechFlow',
    content: "Flexo-it transformed our digital presence. Their attention to detail and technical expertise are unmatched in the industry.",
    avatar: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Founder, StartUp Inc',
    content: "The mobile app they built for us helped us secure our Series A funding. The UI is simply beautiful and the performance is rock solid.",
    avatar: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: 't3',
    name: 'Emily Davis',
    role: 'Director of Marketing, CreativeHub',
    content: "We needed a complete rebrand and a new high-performance website. Flexo-it delivered beyond our expectations.",
    avatar: 'https://picsum.photos/100/100?random=3',
  },
];