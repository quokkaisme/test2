
export interface Artist {
  id: string;
  name: string;
  type: 'Solo' | 'Group';
  genre: string;
  imageUrl: string;
  description: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: string;
}
