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

export enum Language {
  "bg-BG",
  "en-EN",
  "ru-RU"
}

export enum Ranking {
  "popular",
  "now_playing",
  "upcoming"
}