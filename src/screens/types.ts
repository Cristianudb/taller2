export interface Track {
    trackId: string;
    title: string;
    url: string;
    artwork: string;
  }
  
  export interface Album {
    albumId: string;
    title: string;
    artist: string;
    artwork: string;
    tracks: Track[];
  }
  
  export interface Genre {
    genre: string;
    albums: Album[];
  }
  