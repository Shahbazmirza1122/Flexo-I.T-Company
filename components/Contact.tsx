import React, { useState } from 'react';
import Icon from './Icon';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@flexo-it.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Message from ${formData.name} - Flexo Website`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="w-full mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-zinc-400 text-lg">Ready to build something amazing? Let's talk.</p>
          </div>

          {/* Unified Glass Card */}
          <div className="glass rounded-3xl border border-white/5 shadow-2xl overflow-hidden w-full grid md:grid-cols-2">
             
             {/* Left Column: Image + Contact Info */}
             <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-8 md:p-12 flex flex-col justify-between gap-8 border-r border-white/5">
                
                {/* Image with Floating Animation */}
                <div className="w-full flex items-center justify-center animate-float py-4">
                  <img 
                    src="https://res.cloudinary.com/dxojom3da/image/upload/v1764445345/Flexo_ftfojw.png" 
                    alt="Flexo Office" 
                    className="w-full h-96 object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                  />
                </div>

                {/* Contact Info Stack */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                        <Icon name="Send" size={20} />
                      </div>
                      <div className="flex-1 flex items-center gap-2">
                        <h3 className="text-sm font-medium text-zinc-400">Email Us:</h3>
                        <a href="mailto:info@flexo-it.com" className="text-lg font-semibold text-white hover:text-violet-400 transition-colors">info@flexo-it.com</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                        <Icon name="Smartphone" size={20} />
                      </div>
                      <div className="flex-1 flex items-center gap-2">
                         <h3 className="text-sm font-medium text-zinc-400">Call Us:</h3>
                         <a href="tel:+601128144355" className="text-lg font-semibold text-white hover:text-violet-400 transition-colors">+601128144355</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                        <Icon name="CheckCircle" size={20} />
                      </div>
                      <div className="flex-1">
                         <h3 className="text-sm font-medium text-zinc-400 block">Visit Us</h3>
                         <p className="text-base text-white">2.7 Pertama Complex Jalan Tuanku Abdul Rahman 50100 Kuala Lumpur</p>
                      </div>
                    </div>
                </div>
             </div>

             {/* Right Column: Form */}
            <form onSubmit={handleSubmit} className="p-8 md:p-12 flex flex-col h-full bg-zinc-900/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="space-y-6 flex-1 flex flex-col">
                {/* Name & Email Stacked */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-medium text-zinc-400 ml-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-950/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors focus:ring-1 focus:ring-violet-500/50"
                    placeholder="Your Name"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-medium text-zinc-400 ml-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-950/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors focus:ring-1 focus:ring-violet-500/50"
                    placeholder="your@email.com"
                  />
                </div>
                
                {/* Expanded Message Area */}
                <div className="space-y-1 flex-1 flex flex-col min-h-[150px]">
                   <label htmlFor="message" className="text-xs font-medium text-zinc-400 ml-1">Message</label>
                   <textarea
                    id="message"
                    required
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full flex-1 bg-zinc-950/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors focus:ring-1 focus:ring-violet-500/50 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold py-4 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] disabled:opacity-50 flex items-center justify-center gap-2 transform hover:scale-[1.01] mt-auto"
                >
                  {status === 'idle' && <>Send Message <Icon name="Send" size={18} /></>}
                  {status === 'sending' && 'Sending...'}
                  {status === 'success' && 'Message Sent!'}
                  {status === 'error' && 'Error. Try Again.'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;