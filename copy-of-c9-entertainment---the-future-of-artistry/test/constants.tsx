
import { Artist, NewsItem } from './types';

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'YOUNHA',
    type: 'Solo',
    genre: 'Pop / Rock',
    imageUrl: 'https://picsum.photos/seed/younha/800/1200',
    description: 'A legendary vocalist with unparalleled range and emotional depth.'
  },
  {
    id: '5',
    name: 'LEE SEOK HOON',
    type: 'Solo',
    genre: 'Ballad',
    imageUrl: 'https://picsum.photos/seed/leeseokhoon/800/1200',
    description: 'The standard of emotional ballad, possessing a warm and sweet voice.'
  },
  {
    id: '2',
    name: 'CIX',
    type: 'Group',
    genre: 'K-Pop',
    imageUrl: 'https://picsum.photos/seed/cix/800/1200',
    description: 'Dynamic performance group pushing the boundaries of global pop.'
  },
  {
    id: '3',
    name: 'EPEX',
    type: 'Group',
    genre: 'K-Pop',
    imageUrl: 'https://picsum.photos/seed/epex/800/1200',
    description: 'The voice of the new generation, tackling youth and society.'
  },
  {
    id: '4',
    name: 'NAZE',
    type: 'Group',
    genre: 'K-Pop',
    imageUrl: 'https://picsum.photos/seed/naze_artist/800/1200',
    description: 'Sophisticated charm and addictive melodies, defining a new edge in pop.'
  }
];

export const NEWS: NewsItem[] = [
  { id: '1', date: '2024.11.20', title: 'YOUNHA 20th Anniversary Album Release', category: 'RELEASE' },
  { id: '2', date: '2024.11.15', title: 'CIX World Tour: 0 or 1 in Paris', category: 'TOUR' },
  { id: '3', date: '2024.11.10', title: 'Global Audition 2025: Now Open', category: 'AUDITION' },
];

export const SPLINE_URL = "https://my.spline.design/nexbotrobotcharacterconcept-0HtYlC3iNAXfYl0wJf9gXEvR/";
