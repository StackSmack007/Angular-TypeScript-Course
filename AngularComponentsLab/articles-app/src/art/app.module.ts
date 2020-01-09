import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArtComponent } from './art.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    ArtComponent,
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ArtComponent]
})
export class AppModule { }
