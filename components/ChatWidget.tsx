import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icon';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Eva, Flexo's AI assistant. How can I help you today?", timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: userText, timestamp: new Date() }]);
    setIsLoading(true);

    // Get AI response
    const responseText = await sendMessageToGemini(userText);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: new Date() }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 glass rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-violet-500/30 transition-all duration-300 animate-fade-in-up h-[500px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-white rounded-full">
                <Icon name="Bot" className="text-violet-600" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Eva AI</h3>
                <p className="text-xs text-violet-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors">
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-900/90">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                    msg.role === 'user'
                      ? 'bg-violet-600 text-white rounded-tr-none'
                      : 'bg-zinc-700 text-zinc-100 rounded-tl-none border border-zinc-600'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-700 rounded-2xl rounded-tl-none p-3 border border-zinc-600">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-zinc-800 border-t border-zinc-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 bg-zinc-900 border border-zinc-600 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors flex items-center justify-center"
              >
                <Icon name="Send" size={18} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`${
          isOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'
        } absolute bottom-0 right-0 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.5)] bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-400 hover:to-fuchsia-500 text-white p-4 rounded-full flex items-center justify-center z-50`}
        aria-label="Toggle chat"
      >
        <Icon name="MessageSquare" size={28} />
      </button>

      {/* Close Button when open (to create smooth swap effect) */}
       <button
        onClick={toggleChat}
        className={`${
          !isOpen ? '-rotate-90 opacity-0 scale-0 hidden' : 'rotate-0 opacity-100 scale-100 block'
        } transition-all duration-300 shadow-xl bg-zinc-700 hover:bg-zinc-600 text-white p-4 rounded-full z-50`}
      >
        <Icon name="X" size={28} />
      </button>
    </div>
  );
};

export default ChatWidget;