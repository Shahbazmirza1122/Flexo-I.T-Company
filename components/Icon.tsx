import React from 'react';
import { Code, Smartphone, Palette, Server, Shield, Headphones, Menu, X, ChevronRight, MessageSquare, Send, Bot, CheckCircle, Twitter, Linkedin, Github } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const icons: Record<string, React.ReactNode> = {
    Code: <Code size={size} className={className} />,
    Smartphone: <Smartphone size={size} className={className} />,
    Palette: <Palette size={size} className={className} />,
    Server: <Server size={size} className={className} />,
    Shield: <Shield size={size} className={className} />,
    Headphones: <Headphones size={size} className={className} />,
    Menu: <Menu size={size} className={className} />,
    X: <X size={size} className={className} />,
    ChevronRight: <ChevronRight size={size} className={className} />,
    MessageSquare: <MessageSquare size={size} className={className} />,
    Send: <Send size={size} className={className} />,
    Bot: <Bot size={size} className={className} />,
    CheckCircle: <CheckCircle size={size} className={className} />,
    Twitter: <Twitter size={size} className={className} />,
    Linkedin: <Linkedin size={size} className={className} />,
    Github: <Github size={size} className={className} />
  };

  return <>{icons[name] || <Code size={size} className={className} />}</>;
};

export default Icon;