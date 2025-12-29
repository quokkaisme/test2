
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-xs">C9</span>
          </div>
          <span className="tracking-[0.3em] font-light text-sm hidden sm:block">ENTERTAINMENT</span>
        </div>
        
        <nav className="hidden md:flex space-x-12 text-[10px] tracking-[0.2em] font-medium uppercase">
          <button onClick={() => scrollTo('artists')} className="hover:text-gray-400 transition-colors uppercase">Artists</button>
          <button onClick={() => scrollTo('news')} className="hover:text-gray-400 transition-colors uppercase">Journal</button>
          <button onClick={() => scrollTo('audition-section')} className="hover:text-gray-400 transition-colors uppercase">Audition</button>
          <button onClick={() => scrollTo('about')} className="hover:text-gray-400 transition-colors uppercase">About</button>
        </nav>

        <button className="text-[10px] tracking-[0.2em] border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">
          CONNECT
        </button>
      </div>
    </header>
  );
};

export default Header;
