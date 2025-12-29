
import React, { useState, useEffect, useRef } from 'react';
import { SPLINE_URL } from '../constants';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 화면 중앙을 (0,0)으로 기준 잡고 -0.5 ~ 0.5 범위로 변환
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 마우스 움직임에 따른 배경 컨테이너의 미세한 움직임 (시점 변환 효과)
  const moveX = mousePos.x * -30; // 반대 방향으로 움직여 깊이감 생성
  const moveY = mousePos.y * -30;

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Spline 3D Section */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate3d(${moveX}px, ${moveY}px, 0) scale(1.1)`,
          willChange: 'transform'
        }}
      >
        {/* Iframe 자체는 이벤트를 받아야 하므로 pointer-events-auto 유지 */}
        <iframe 
          src={SPLINE_URL} 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          className="w-full h-full pointer-events-auto"
          title="Nexbot 3D Concept"
        />
        
        {/* 중요: 오버레이에 pointer-events-none을 추가하여 마우스가 아래 Iframe까지 닿게 함 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40 pointer-events-none" />
      </div>

      {/* Hero Content - 텍스트는 마우스 이벤트를 방해하지 않도록 함 */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pointer-events-none">
        <p className="text-[10px] tracking-[0.6em] text-white/50 uppercase mb-4 animate-pulse">
          Next Generation Digital Artistry
        </p>
        <h1 className="text-5xl md:text-8xl font-serif font-light mb-8 leading-tight italic">
          Focus on <span className="block font-normal not-italic tracking-tighter text-4xl md:text-7xl mt-2">THE ESSENCE OF MUSIC</span>
        </h1>
        
        {/* 버튼 영역은 다시 클릭이 가능하도록 pointer-events-auto 설정 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 pointer-events-auto">
          <button 
            onClick={() => document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-white text-black font-medium tracking-widest text-[10px] uppercase rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10">Explore Our Artists</span>
            <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block pointer-events-none">
        <div className="text-[10px] tracking-[0.4em] text-white/30 rotate-90 origin-left">
          C9 ENTERTAINMENT © 2024
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 animate-bounce pointer-events-none">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
