import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "src/Services/MovieService";
import { IMovie } from "src/Interfaces/IMovie";
import { Subscription } from "rxjs";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  @Input()
  searchedMovies: IMovie[];

  private subscriptions: Subscription[] = [];
  public popularMovies: IMovie[];
  public upcomingMovies: IMovie[];

  public nowPlayingMovies: IMovie[];

  public kidsMovies: IMovie[];
  public dramaMovies: IMovie[];

  public chosenId = null;

  constructor(private moviesService: MovieService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.moviesService.getPopularMovies().subscribe(data => {
        this.popularMovies = data;
      })
    );

    this.subscriptions.push(
      this.moviesService.getUpcomingMovies().subscribe(data => {
        this.upcomingMovies = data;
      })
    );

    this.subscriptions.push(
      this.moviesService.getNowPlayingMovies().subscribe(data => {
        this.nowPlayingMovies = data;
      })
    );

    this.subscriptions.push(
      this.moviesService.getKidsMovies().subscribe(x => {
        this.kidsMovies = x;
      })
    );

    this.subscriptions.push(
      this.moviesService.getDramaMovies().subscribe(x => {
        this.dramaMovies = x;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  informUser(id: number) {
    this.chosenId = id;
  }
}
