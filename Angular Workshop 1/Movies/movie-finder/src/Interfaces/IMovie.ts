export class IMovie {
  id: number;
  "title": string;
  "original_title": string;
  "poster_path": string;
  "vote_average": number;
  "vote_count": number;
  "overview": number;
  "original_language": string;
}

export enum Languages {
  "bg-BG",
  "en-EN",
  "ru-RU"
}

export enum Genres {
  "Action" = 28,
  "Adventure" = 12,
  "Animation" = 16,
  "Comedy" = 35,
  "Crime" = 80,
  "Documentary" = 99,
  "Drama" = 18,
  "Family" = 10751,
  "Fantasy" = 14,
  "History" = 36,
  "Horror" = 27,
  "Music" = 10402,
  "Mystery" = 9648,
  "Romance" = 10749,
  "Science Fiction" = 878,
  "TV Movie" = 10770,
  "Thriller" = 53,
  "War" = 10752,
  "Western" = 37
}

export enum Ranking {
  "popular",
  "now_playing",
  "upcoming",
  "latest"
}
