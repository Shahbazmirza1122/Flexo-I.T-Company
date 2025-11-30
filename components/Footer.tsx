import React from 'react';
import Icon from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 py-10 border-t border-zinc-900 text-center md:text-left">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <img 
               src="https://res.cloudinary.com/dxojom3da/image/upload/v1764497291/Flexo_Logo_gabfni.png" 
               alt="Flexo Logo" 
               className="w-8 h-8 object-contain brightness-0 invert"
             />
          </div>
          
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Flexo Tech. All rights reserved.
          </p>

          <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-600 transition-all duration-300 border border-zinc-800 hover:border-violet-500" aria-label="Twitter">
                <Icon name="Twitter" size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-600 transition-all duration-300 border border-zinc-800 hover:border-violet-500" aria-label="LinkedIn">
                <Icon name="Linkedin" size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-600 transition-all duration-300 border border-zinc-800 hover:border-violet-500" aria-label="GitHub">
                <Icon name="Github" size={18} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;