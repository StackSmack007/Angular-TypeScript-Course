import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { MovieService } from "src/Services/MovieService";
import { IMovie } from "src/Interfaces/IMovie";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.css"]
})
export class MainContentComponent implements OnInit {
  constructor(private router: Router) {}

  makeSearch(str: string) {
    if (str.length < 3) {
      return;
    }
    this.router.navigate(["/search/" + str]);
  }

  ngOnInit() {}
}
