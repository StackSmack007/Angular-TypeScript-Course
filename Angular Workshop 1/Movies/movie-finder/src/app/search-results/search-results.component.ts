import { Component } from "@angular/core";
import { IMovie } from "src/Interfaces/IMovie";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.css"]
})

export class SearchResultsComponent  {
  public foundMovies: IMovie[] = null;
  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngDoCheck(){
    this.foundMovies = this.activatedRoute.snapshot.data[0];
  }
}
