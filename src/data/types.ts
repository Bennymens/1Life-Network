export interface Video {
  id: string;
  youtubeId: string;
  artist: string;
  category: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface VideosData {
  sessions: Video[];
  interviews: Video[];
}
