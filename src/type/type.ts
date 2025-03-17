export interface MovieVideo {
    id: string;
    key: string;
    name: string;
    site: "YouTube" | "Vimeo"; // Type de plateforme
    type: "Trailer" | "Teaser" | "Clip" | "Featurette" | "Behind the Scenes";
  }
  
  export interface MovieVideoResponse {
    id: number; // ID du film
    results: MovieVideo[]; // Liste des vidéos associées
  }

  export interface MediaItem {
    id: number;
    title?: string; // Pour les films
    name?: string; // Pour les séries TV
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    vote_average: number;
    release_date?: string; // Pour les films
    first_air_date?: string; // Pour les séries
    media_type: "movie" | "tv";
  }
  
  export interface MediaResponse {
    results: MediaItem[];
  }
  
  