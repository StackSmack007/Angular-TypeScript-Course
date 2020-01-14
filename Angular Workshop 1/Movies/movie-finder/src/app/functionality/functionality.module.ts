import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search/search.component";
import { DetailsComponent } from "./details/details.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "../app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FuncContainerComponent } from "./func-container/func-container.component";

@NgModule({
  declarations: [
    SearchComponent,
    DetailsComponent,
    AboutComponent,
    HomeComponent,
    FuncContainerComponent
  ],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
  exports: [FuncContainerComponent]
})
export class FunctionalityModule {}
