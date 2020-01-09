import { Component, OnInit } from "@angular/core";
import { IArticle } from "src/contracts/interfaces";
import { ArticleData } from "src/data/data";

@Component({
  selector: "art-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {
  private articles: IArticle[];
  constructor() {}

  ngOnInit() {
    this.articles = new ArticleData().getData();
  }
}
