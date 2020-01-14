import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FuncContainerComponent } from "./functionality/func-container/func-container.component";
import { MainContentComponent } from './main-content/main-content.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: MainContentComponent },
  { path: "details/:id", component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
