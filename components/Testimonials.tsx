import React, { useState } from 'react';
import Icon from './Icon';

interface TestimonialProfile {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const profiles: TestimonialProfile[] = [
  {
    id: 'p1',
    name: 'Joyden Wiggins',
    role: 'Web Developer',
    quote: "Flexo helped me identify areas for improvement and develop a strategic plan that led to significant growth.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800',
  },
  {
    id: 'p2',
    name: 'Cecily Villarreal',
    role: 'UI Designer',
    quote: "The UI is simply beautiful and the performance is rock solid. Highly recommend their services.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=800&h=800',
  },
  {
    id: 'p3',
    name: 'Sarah Chen',
    role: 'Product Manager',
    quote: "We needed a complete rebrand. Flexo delivered beyond our expectations.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&h=800',
  },
  {
    id: 'p4',
    name: 'Marcus Johnson',
    role: 'Tech Lead',
    quote: "Their technical expertise is unmatched. They solved complex problems effortlessly.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&h=800',
  },
  {
    id: 'p5',
    name: 'Emily Davis',
    role: 'Marketing Director',
    quote: "Our conversion rates doubled after the redesign. Simply amazing work.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=800&h=800',
  },
  {
    id: 'p6',
    name: 'David Wilson',
    role: 'Founder',
    quote: "The team was professional, responsive, and delivered on time.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=800&h=800',
  }
];

// Modal Component for displaying the full testimonial
const TestimonialModal: React.FC<{ profile: TestimonialProfile; onClose: () => void }> = ({ profile, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        onMouseLeave={onClose}
        className="relative w-full max-w-4xl bg-zinc-900 border border-violet-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all animate-[fadeIn_0.3s_ease-out]"
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors border border-white/10"
          aria-label="Close"
        >
          <Icon name="X" size={24} />
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative">
          <img 
            src={profile.image} 
            alt={profile.name} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-900"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-zinc-900">
           <Icon name="MessageSquare" className="text-violet-500 mb-6" size={40} />
           
           <blockquote className="text-xl md:text-2xl text-zinc-200 mb-8 font-light leading-relaxed italic">
             "{profile.quote}"
           </blockquote>
           
           <div className="mt-auto border-t border-white/10 pt-6">
               <p className="text-2xl font-bold text-white">{profile.name}</p>
               <p className="text-violet-400 font-bold uppercase tracking-wider text-sm mt-1">{profile.role}</p>
           </div>
        </div>
      </div>
    </div>
  );
};

// Interactive Avatar Card (Trigger)
const AvatarCard: React.FC<{ profile: TestimonialProfile; onMouseEnter: () => void }> = ({ profile, onMouseEnter }) => (
  <div 
    onMouseEnter={onMouseEnter}
    className="relative group shrink-0 w-[60vw] md:w-[22vw] cursor-pointer"
  >
    {/* Avatar Image */}
    <div className="w-full aspect-square rounded-3xl overflow-hidden border-2 border-zinc-800 group-hover:border-violet-500 transition-all duration-300 transform group-hover:scale-[1.02] shadow-2xl relative z-10">
      <img 
        src={profile.image} 
        alt={profile.name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      
      {/* Overlay Icon on Hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
         <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300">
             <Icon name="MessageSquare" size={24} />
         </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<TestimonialProfile | null>(null);
  
  // Duplicate profiles to create seamless loop
  const allProfiles = [...profiles, ...profiles, ...profiles];

  return (
    <section id="testimonials" className="py-24 bg-zinc-950 relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Center Content */}
        <div className="container mx-auto px-4 text-center max-w-6xl mb-6 z-20 relative">
            <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-sm font-medium mb-6 shadow-lg">
              Testimonials
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight md:whitespace-nowrap">
              Trusted by leaders from <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">various industries</span>
            </h2>
            
            <p className="text-zinc-400 text-lg md:text-xl mb-4 leading-relaxed max-w-lg mx-auto">
              Learn why professionals trust our solutions to complete their customer journeys.
            </p>
        </div>

        {/* Sliding Images Container */}
        <div className="w-full relative py-4">
           {/* Gradient Masks for edges */}
           <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none"></div>

           {/* Animated Track */}
           <div className="flex gap-4 md:gap-[3vw] animate-scroll w-max items-center hover:[animation-play-state:paused]">
              {allProfiles.map((profile, i) => (
                <AvatarCard 
                  key={`${profile.id}-${i}`} 
                  profile={profile} 
                  onMouseEnter={() => setSelectedProfile(profile)}
                />
              ))}
           </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProfile && (
        <TestimonialModal 
          profile={selectedProfile} 
          onClose={() => setSelectedProfile(null)} 
        />
      )}
    </section>
  );
};

export default Testimonials;