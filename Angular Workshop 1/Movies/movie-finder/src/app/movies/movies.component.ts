
import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/Services/MovieService";
import { IMovie, Language, Ranking } from "src/Interfaces/IMovie";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  private popularMovies: IMovie[];
  private upcomingMovies: IMovie[];
  private nowPlayingMovies: IMovie[];
  public chosenId = null;
  private readonly lang = "en-EN";
  constructor(private moviesService: MovieService) {}

  ngOnInit() {
    this.moviesService
      .GetMovies(Language[this.lang], Ranking.popular)
      .subscribe(data => {
        this.popularMovies = data["results"].slice(0, 6);
      });

    this.moviesService
      .GetMovies(Language[this.lang], Ranking.upcoming)
      .subscribe(data => {
        this.upcomingMovies = data["results"].slice(0, 6);
      });

    this.moviesService
      .GetMovies(Language[this.lang], Ranking.now_playing)
      .subscribe(data => {
        this.nowPlayingMovies = data["results"].slice(0, 6);
        // console.log(this.nowPlayingMovies);
      });
  }

  informUser(id: number) {
    this.chosenId = id;
  }
}
