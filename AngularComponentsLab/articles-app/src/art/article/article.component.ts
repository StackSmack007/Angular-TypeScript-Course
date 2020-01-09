import { Component, OnInit, Input } from "@angular/core";
import { IArticle } from "src/contracts/interfaces";

@Component({
  selector: "art-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticle;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean;
  showHideBtn: boolean;
  imageIsShown: boolean = false;
  imageBtnTitle: string = "Show Image";
  private descStep = 250;
  constructor() {}

  ngOnInit() {
    this.articleDescLen = 0;
    this.descToShow = "none";
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
  }

  readMore() {
    if (this.articleDescLen === this.articleDesc.length) return;
    this.articleDescLen = Math.min(
      this.articleDescLen + this.descStep,
      this.articleDesc.length
    );
    this.showReadMoreBtn = this.articleDescLen < this.articleDesc.length;
    this.showHideBtn = !this.showReadMoreBtn;
    this.descToShow = this.articleDesc.substr(0, this.articleDescLen);
  }

  toggleImage() {
    this.imageIsShown = !this.imageIsShown;
    this.imageBtnTitle = this.imageIsShown ? "Show Image" : "Hide Image";
  }

}
