import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "src/Services/MovieService";
import { Subscription } from "rxjs";
import { IMovieDetails } from "src/Interfaces/IMovieDetails";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  private subsribtions: Subscription[];
  private movieId: number;
  public movieInfo: IMovieDetails;
  constructor(
    private url: ActivatedRoute,
    private moviesService: MovieService
  ) {
    this.movieId = url.snapshot.params["id"];
    this.subsribtions = [];
  }

  ngOnInit() {
    this.subsribtions.push(
      this.moviesService.getMovieInfo(this.movieId).subscribe(x => {
        this.movieInfo = x;
      })
    );
  }
  ngOnDestroy() {
    this.subsribtions.forEach(x => x.unsubscribe());
  }
}
