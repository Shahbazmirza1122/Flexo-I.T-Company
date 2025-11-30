import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon';

// Helper component for animated numbers
const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Ease out quart
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, hasStarted]);

  return <span ref={countRef}>{count}+</span>;
};

// Helper component for typewriter text
const TypewriterLabel = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let timeout: ReturnType<typeof setTimeout>;
    const startTyping = () => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 150); // Speed of typing
    };

    timeout = setTimeout(startTyping, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, hasStarted]);

  return <span ref={textRef}>{displayedText}</span>;
};

const Hero: React.FC = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-500/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            
            <h1 className="font-bold tracking-tight mb-8 leading-tight text-[5.5vw] sm:text-[4.5vw] md:text-[3.5vw] lg:text-[3vw] min-h-[1.2em]">
              <div className="typewriter">
                Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-500 to-orange-500">Experiences</span>
              </div>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Flexo delivers premium software solutions, blending aesthetic excellence with powerful engineering to elevate your business.
            </p>

            <div className="flex flex-row gap-3 justify-center md:justify-start items-center">
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="group relative px-[4vw] py-[2vw] text-[3.2vw] md:px-[2vw] md:py-[1vw] md:text-[1.1vw] bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] text-center flex items-center justify-center whitespace-nowrap cursor-pointer"
              >
                Book A Free Consultation
                <Icon name="ChevronRight" className="inline ml-1 transition-transform group-hover:translate-x-1" size={14} />
              </button>
              <a
                href="#contact"
                className="px-[4vw] py-[2vw] text-[3.2vw] md:px-[2vw] md:py-[1vw] md:text-[1.1vw] rounded-full border border-zinc-700 hover:border-violet-500 hover:text-violet-400 transition-colors font-medium bg-zinc-900/50 backdrop-blur-sm text-center whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column: Picture Box */}
          <div className="relative mt-10 md:mt-0 animate-float flex justify-center items-center">
             <div className="relative w-full max-w-[350px] flex items-center justify-center">
                  {/* Updated Image without box/border */}
                  <img 
                    src="https://res.cloudinary.com/dxojom3da/image/upload/v1764424541/Untitled_design_2_xbrtgr.png" 
                    alt="AI Robot Future Tech" 
                    className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(139,92,246,0.2)]"
                  />
                  
                  {/* Floating Elements for 'Tech' feel */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-md p-4 rounded-xl border border-violet-500/30 shadow-2xl hidden sm:block min-w-[200px]">
                     <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/50">
                           <Icon name="Code" size={20} />
                        </div>
                        <div>
                           <p className="text-white text-sm font-bold">Modern Stack</p>
                           <p className="text-violet-200 text-xs">React, Node, AI</p>
                        </div>
                     </div>
                  </div>
             </div>
          </div>

        </div>

        {/* Stats Strip Container with Moving Border */}
        <div className="mt-20 max-w-6xl mx-auto relative rounded-xl overflow-hidden p-[2px]">
          {/* Moving Gradient Border */}
          <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#d946ef_50%,#0000_100%)] opacity-80" />
          
          <div className="relative bg-zinc-900/90 backdrop-blur-md rounded-xl p-6 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Projects Delivered', value: 30 },
                { label: 'Happy Clients', value: 50 },
                { label: 'Years Experience', value: 5 },
                { label: 'Team Members', value: 10 },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center">
                  <span className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                    <AnimatedCounter end={stat.value} duration={4000} />
                  </span>
                  <span className="text-xs md:text-sm text-violet-400 font-bold uppercase tracking-wider h-4">
                    <TypewriterLabel text={stat.label} delay={500 + (i * 300)} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Modal Popup */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
             <div className="relative w-full max-w-5xl h-[85vh] bg-zinc-900 rounded-2xl overflow-hidden border border-violet-500/30 shadow-2xl flex flex-col">
                 <div className="flex justify-between items-center p-4 border-b border-white/10 bg-zinc-900">
                    <h3 className="text-white font-bold text-lg">Schedule Consultation</h3>
                    <button
                        onClick={() => setIsCalendlyOpen(false)}
                        className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Close"
                    >
                        <Icon name="X" size={20} />
                    </button>
                 </div>
                 <div className="flex-1 w-full h-full bg-zinc-900">
                     <iframe
                        src="https://calendly.com/flexo-it-info"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Schedule a consultation"
                        className="w-full h-full"
                     ></iframe>
                 </div>
             </div>
        </div>
      )}
    </section>
  );
};

export default Hero;