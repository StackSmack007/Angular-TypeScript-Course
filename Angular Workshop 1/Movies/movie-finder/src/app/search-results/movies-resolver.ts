import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IMovie } from "src/Interfaces/IMovie";
import { MovieService } from "src/Services/MovieService";

@Injectable({
  providedIn: "root"
})
export class MoviesResolver implements Resolve<IMovie[]> {
  constructor(private moviesService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMovie[]> {
    {
      return this.moviesService.searchMoviesByName(route.params.phrase, true);
    }
  }
}
