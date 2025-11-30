import React from 'react';
import { SERVICES } from '../constants';
import Icon from './Icon';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-zinc-900/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-violet-500"></span>
            <span className="text-violet-400 font-bold uppercase tracking-wider text-sm">What We Do</span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-violet-500"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Services</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions designed to scale with your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.2)]"
            >
              {/* Moving Border Dot SVG */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="24" 
                  ry="24"
                  fill="none"
                  stroke="#8b5cf6" 
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="0 100" 
                  pathLength="100"
                  className="animate-path-dot"
                />
              </svg>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:from-violet-900/50 group-hover:to-fuchsia-900/50 group-hover:border-violet-500/30 animate-spin-slow transition-colors relative z-10">
                <Icon name={service.iconName} className="text-violet-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;