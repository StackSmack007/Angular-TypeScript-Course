import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Languages, Ranking, IMovie, Genres } from "src/Interfaces/IMovie";
import { map } from "rxjs/operators";
import { IMovieDetails } from "src/Interfaces/IMovieDetails";

const appId = "c6f5434f8b182eaecb516b74d14b3378";
const baseUrl = "https://api.themoviedb.org/3";
const urlByRanking = (rankType: Ranking, language: Languages, page) =>
  `${baseUrl}/movie/${Ranking[rankType]}?api_key=${appId}&language=${Languages[language]}&page=${page}`;

const urlByGenre = (genre: Genres, language: Languages, page) =>
  `${baseUrl}/discover/movie?with_genres=${genre}&sort_by=popularity.desc&api_key=${appId}&language=${Languages[language]}&page=${page}`;

const movieInfoUrl = (movie_id: number, language: Languages) =>
  `${baseUrl}/movie/${movie_id}?api_key=${appId}&language=${Languages[language]}`;

const movieSearchUrl = (searchName: string, language: Languages) =>
  `${baseUrl}/search/movie?api_key=${appId}&language=${Languages[language]}&query=${searchName}`;

@Injectable({ providedIn: "root" })
export class MovieService {
  public language: Languages = Languages["en-EN"];
  public maxMovieCount = 6;
  constructor(private http: HttpClient) {}

  private GetMovies(
    rankType: Ranking,
    language: Languages,
    page = 1,
    all = false
  ): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(urlByRanking(rankType, language, page)).pipe(
      map(data => {
        if (all) {
          return data["results"];
        }
        return data["results"].slice(0, this.maxMovieCount);
      })
    );
  }

  private getGenreMovies(
    genre: Genres,
    language: Languages,
    page = 1
  ): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(urlByGenre(genre, language, page)).pipe(
      map(x => x["results"]),
      map(x => x.slice(0, this.maxMovieCount))
    );
  }

  public getPopularMovies = this.GetMovies.bind(
    this,
    Ranking.popular,
    this.language
  );
  public getUpcomingMovies = this.GetMovies.bind(
    this,
    Ranking.upcoming,
    this.language
  );
  public getNowPlayingMovies = this.GetMovies.bind(
    this,
    Ranking.now_playing,
    this.language
  );
  public getKidsMovies = this.getGenreMovies.bind(
    this,
    Genres.Animation,
    this.language
  );
  public getDramaMovies = this.getGenreMovies.bind(
    this,
    Genres.Drama,
    this.language
  );

  getMovieInfo(id: number): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(movieInfoUrl(id, this.language)).pipe(
      map(x => {
        const genresNames = x.genres.map(g => g["name"]);
        x.genres = genresNames;
        return x;
      })
    );
  }

  searchMoviesByName(name: string, all = false): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(movieSearchUrl(name, this.language)).pipe(
      map(data => {
        if (all) {
          return data["results"];
        }
        return data["results"].slice(0, this.maxMovieCount);
      })
    );
  }
}
