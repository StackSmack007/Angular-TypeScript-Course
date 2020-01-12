import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Language, Ranking } from "src/Interfaces/IMovie";

const appId = "c6f5434f8b182eaecb516b74d14b3378";
const url = (language: Language, rankType: Ranking, page = 1) =>
  `https://api.themoviedb.org/3/movie/${Ranking[rankType]}?api_key=${appId}&language=${Language[language]}&page=${page}`;

@Injectable({ providedIn: "root" })
export class MovieService {
  constructor(private http: HttpClient) {}

  public GetMovies(
    language: Language,
    rankType: Ranking,
    page = 1
  ): Observable<any> {
    return this.http.get<any>(url(language, rankType, page));
  }
}
