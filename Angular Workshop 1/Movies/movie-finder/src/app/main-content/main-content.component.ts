import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { MovieService } from "src/Services/MovieService";
import { IMovie } from "src/Interfaces/IMovie";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.css"]
})
export class MainContentComponent implements OnInit {
  constructor(private ms: MovieService) {}

  public foundMovies: IMovie[] = null;

  searchMovie(name: string) {
    this.ms.searchMoviesByName(name,true).subscribe(x => {
      this.foundMovies = x;
    });
  }
  ngOnInit() {}
}
