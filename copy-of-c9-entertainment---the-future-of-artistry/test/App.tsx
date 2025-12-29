
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ArtistCard from './components/ArtistCard';
import WhosNextCard from './components/WhosNextCard';
import AiConcierge from './components/AiConcierge';
import { ARTISTS, NEWS } from './constants';

const App: React.FC = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      <Hero />

      {/* Artists Section */}
      <section id="artists" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-serif italic mb-6">Artists</h2>
              <p className="text-white/40 text-sm leading-relaxed tracking-wide">
                Our roster consists of multi-talented individuals and groups who are redefining the boundaries of the global music scene through authentic expression and innovative sound.
              </p>
            </div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-white/30">
              Scroll to Explore / 01-06
            </div>
          </div>

          {/* 6개의 카드를 위해 grid-cols 조정 (3열이 더 고급스러움) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {ARTISTS.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
            <WhosNextCard />
          </div>
        </div>
      </section>

      {/* Feature Section (Aesthetics Focused) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900/50 -skew-y-3 transform origin-left scale-110" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border border-white/20 -translate-x-4 -translate-y-4" />
              <img 
                src="https://picsum.photos/seed/c9studio/800/800" 
                alt="C9 Studio" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 -right-12 glass p-8 max-w-xs">
                <p className="text-[10px] tracking-widest text-white/40 mb-2 uppercase">Innovation Lab</p>
                <p className="text-sm font-light italic leading-relaxed">
                  "Where technology meets talent to create immersive experiences that transcend digital platforms."
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-10">
            <h3 className="text-4xl md:text-6xl font-serif leading-tight">Beyond <br/> <span className="italic font-light">Performance</span></h3>
            <div className="space-y-6 text-sm text-white/50 font-light leading-relaxed max-w-md">
              <p>
                We believe in the power of stories. Our approach to talent management integrates cutting-edge digital production with traditional artistic development.
              </p>
              <p>
                From virtual stage design to AI-enhanced composition, C9 Entertainment is building the ecosystem for the next generation of global stars.
              </p>
            </div>
            <button className="text-[10px] tracking-[0.3em] uppercase underline underline-offset-8 decoration-white/30 hover:decoration-white transition-all">
              Discover Our Process
            </button>
          </div>
        </div>
      </section>

      {/* Audition Section (New) */}
      <section id="audition-section" className="py-40 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[12px] tracking-[0.8em] uppercase mb-8 font-medium">Audition</h2>
            <h3 className="text-5xl md:text-8xl font-serif italic mb-12">Who's NEXT?</h3>
            <p className="text-lg md:text-xl font-light mb-16 leading-relaxed max-w-2xl mx-auto opacity-70">
              We are constantly seeking the next generation of global artists. If you have passion and talent, the door to C9 is always open.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-12 py-5 bg-black text-white text-[11px] tracking-[0.3em] uppercase rounded-full hover:scale-105 transition-transform active:scale-95 shadow-xl">
                Apply for Audition
              </button>
              <button className="px-12 py-5 border border-black/10 text-[11px] tracking-[0.3em] uppercase rounded-full hover:bg-black/5 transition-colors">
                Audition Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Journal / News Section */}
      <section id="news" className="py-32 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif italic mb-16 text-center">The Journal</h2>
          <div className="max-w-4xl mx-auto space-y-px bg-white/10">
            {NEWS.map((item) => (
              <div key={item.id} className="group bg-black p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/5 transition-colors cursor-pointer border-y border-white/5">
                <div className="flex items-center space-x-12">
                  <span className="text-[10px] tracking-widest text-white/30 w-24">{item.date}</span>
                  <span className="text-[10px] tracking-widest text-white/40 border border-white/10 px-3 py-1 rounded-full">{item.category}</span>
                  <h4 className="text-lg font-light tracking-wide group-hover:translate-x-2 transition-transform">{item.title}</h4>
                </div>
                <div className="mt-4 md:mt-0 text-white/20 group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                  <span className="text-black font-black text-xs">C9</span>
                </div>
                <span className="tracking-[0.3em] font-light text-sm uppercase">Entertainment</span>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed max-w-xs">
                South Korea's leading talent management agency dedicated to innovation and artistic excellence.
              </p>
            </div>
            
            <div>
              <h5 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-white/60">Explore</h5>
              <ul className="space-y-4 text-[11px] font-light text-white/40">
                <li><a href="#artists" className="hover:text-white transition-colors">Artists</a></li>
                <li><a href="#audition-section" className="hover:text-white transition-colors">Recruitment</a></li>
                <li><a href="#audition-section" className="hover:text-white transition-colors">Audition Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-white/60">Inquiry</h5>
              <ul className="space-y-4 text-[11px] font-light text-white/40">
                <li>Management: biz@c9ent.co.kr</li>
                <li>Audition: audition@c9ent.co.kr</li>
                <li>PR: press@c9ent.co.kr</li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-white/60">Social</h5>
              <div className="flex space-x-6 text-white/40">
                <a href="#" className="hover:text-white transition-colors">IG</a>
                <a href="#" className="hover:text-white transition-colors">TW</a>
                <a href="#" className="hover:text-white transition-colors">YT</a>
                <a href="#" className="hover:text-white transition-colors">FB</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:row justify-between items-center border-t border-white/5 pt-8 gap-4">
            <p className="text-[10px] text-white/20 uppercase tracking-widest">
              © 2024 C9 Entertainment. All rights reserved.
            </p>
            <div className="flex space-x-8 text-[10px] text-white/20 uppercase tracking-widest">
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Gemini AI Assistant */}
      <AiConcierge />
    </main>
  );
};

export default App;
