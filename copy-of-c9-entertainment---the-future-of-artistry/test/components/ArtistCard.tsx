
import React from 'react';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-neutral-900">
      <img 
        src={artist.imageUrl} 
        alt={artist.name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
        <p className="text-[10px] tracking-[0.3em] text-white/60 mb-2">{artist.type}</p>
        <h3 className="text-3xl font-serif tracking-tight mb-2 italic">{artist.name}</h3>
        <p className="text-[11px] text-white/40 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
          {artist.description}
        </p>
      </div>
      
      {/* Corner Accent */}
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default ArtistCard;
