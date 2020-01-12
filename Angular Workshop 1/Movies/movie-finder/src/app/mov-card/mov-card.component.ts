import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IMovie } from "src/Interfaces/IMovie";
const baseImgPath = "https://image.tmdb.org/t/p/w";
const getImagePath = (src, width = 200) => baseImgPath + width + src;

@Component({
  selector: "app-mov-card",
  templateUrl: "./mov-card.component.html",
  styleUrls: ["./mov-card.component.css"]
})
export class MovCardComponent implements OnInit {
  @Input()
  public movie: IMovie;
  imgPath: string = null;
  constructor() {}
  ngOnInit() {
    this.imgPath = getImagePath(this.movie.poster_path);
  }

  @Output("childEvent")
  public emitter: EventEmitter<number> = new EventEmitter();

  alertParent() {
    this.emitter.emit(this.movie.id);
  }
}
