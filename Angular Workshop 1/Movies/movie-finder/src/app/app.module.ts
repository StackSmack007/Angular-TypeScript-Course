import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MoviesComponent } from "./movies/movies.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { MovCardComponent } from "./mov-card/mov-card.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { FunctionalityModule } from "./functionality/functionality.module";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    FooterComponent,
    MainContentComponent,
    MovCardComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FunctionalityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
