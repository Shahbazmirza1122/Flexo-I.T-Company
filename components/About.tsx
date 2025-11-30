import React from 'react';
import Icon from './Icon';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-zinc-900/20 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-fuchsia-600 rounded-3xl blur-2xl opacity-20 transform -rotate-6"></div>
             <img 
                src="https://res.cloudinary.com/dxojom3da/image/upload/v1764448626/flexo_team_xu0zfg.jpg" 
                alt="Our Team" 
                className="relative rounded-3xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover"
             />
             <div className="absolute -bottom-6 -right-6 bg-zinc-800 p-6 rounded-2xl border border-zinc-700 shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                   <div className="p-2 bg-emerald-500/20 rounded-full">
                      <Icon name="CheckCircle" className="text-emerald-500" size={24} />
                   </div>
                   <span className="font-bold text-white">Certified Experts</span>
                </div>
                <p className="text-sm text-zinc-400">Award-winning developers and designers ready to tackle your challenges.</p>
             </div>
          </div>

          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-0.5 w-8 bg-violet-400"></span>
              <span className="text-violet-400 font-bold tracking-wider uppercase text-sm">Our Story</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              About Us
            </h2>
            
            <p className="text-xl text-zinc-300 mb-6 leading-relaxed font-light">
              We build the <span className="text-violet-400 font-semibold">Extraordinary</span>.
            </p>

            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
              At Flexo, we don't just write code; we engineer success. Our philosophy is rooted in the belief that technology should be intuitive, powerful, and beautiful.
            </p>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Founded in 2014, we've helped hundreds of businesses transition into the digital age with bespoke solutions that drive growth and engagement.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                "Agile Methodology",
                "Cloud Native",
                "User-Centric Design",
                "Scalable Architecture"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
                  <span className="font-medium text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;