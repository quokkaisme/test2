
import React from 'react';

const WhosNextCard: React.FC = () => {
  const scrollToAudition = () => {
    const element = document.getElementById('audition-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      onClick={scrollToAudition}
      className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-neutral-950 flex items-center justify-center border border-white/5 transition-all duration-500 hover:border-white/20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:opacity-100 opacity-50 transition-opacity" />
      
      <div className="relative z-10 text-center transition-transform duration-500 group-hover:scale-110">
        <p className="text-[12px] tracking-[0.5em] text-white/30 mb-2 uppercase font-light">who's</p>
        <h3 className="text-5xl md:text-6xl font-serif tracking-tighter mb-6 italic gradient-text">NEXT</h3>
        <div className="inline-flex items-center justify-center w-12 h-12 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-500">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute inset-0 p-4 pointer-events-none">
        <div className="w-full h-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.4em] text-white/20 uppercase whitespace-nowrap group-hover:text-white/40 transition-colors">
        Join the Legend
      </div>
    </div>
  );
};

export default WhosNextCard;
