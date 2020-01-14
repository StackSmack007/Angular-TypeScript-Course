import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MoviesResolver } from "./search-results/movies-resolver";
import { RouteNotFoundComponent } from "./route-not-found/route-not-found.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { MoviesComponent } from "./movies/movies.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: MoviesComponent },
  { path: "details/:id", component: MovieDetailsComponent },
  {
    path: "search/:phrase",
    component: SearchResultsComponent,
    resolve: [MoviesResolver]
    // runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  { path: "**", component: RouteNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
