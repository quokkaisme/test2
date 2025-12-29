
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';

const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Welcome to C9 Entertainment. I am your digital concierge. How may I assist your exploration of our artists today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await geminiService.getArtistConciergeResponse(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 overflow-hidden group"
      >
        <div className="absolute inset-0 bg-neutral-200 scale-0 group-hover:scale-100 transition-transform origin-center duration-300" />
        <span className="relative z-10 font-black text-xs">AI</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-28 left-8 z-50 w-80 md:w-96 glass rounded-2xl flex flex-col shadow-2xl overflow-hidden border border-white/10">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold">C9 Concierge</h4>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white">✕</button>
          </div>
          
          <div ref={scrollRef} className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${m.role === 'user' ? 'bg-white text-black' : 'bg-white/10 text-white/80'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 text-white/40 p-3 rounded-2xl text-[10px] animate-pulse">
                  Concierge is thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Younha, CIX, EPEX, NAZE..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-xs outline-none focus:border-white/30 transition-colors"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-2 h-8 w-8 flex items-center justify-center text-white/40 hover:text-white"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiConcierge;
