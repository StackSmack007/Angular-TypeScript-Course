import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './modules/common/index/index.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { GuestsOnlyGuard } from './guards/guests-only.guard';
import { AddCauseComponent } from './modules/causes/add-cause/add-cause.component';
import { UsersOnlyGuard } from './guards/users-only.gueard';
import { ListAllComponent } from './modules/causes/list-all/list-all.component';
import { LoadCausesResolver as loadCausesResolver } from './modules/causes/resolvers/causes-all.reslolver';
import { DetailsComponent } from './modules/causes/details/details.component';
import { CauseAuthorOnly } from './guards/isAuthor';
import { EditCauseComponent } from './modules/causes/edit-cause/edit-cause.component';


const routes: Routes = [

  { path: "", pathMatch: "full", redirectTo: "index" },
  { path: "index", pathMatch: "full", component: IndexComponent },
  {
    path: "register", component: RegisterComponent,
    canActivate: [GuestsOnlyGuard]
  },
  {
    path: "login", component: LoginComponent,
    canActivate: [GuestsOnlyGuard]
  },
  {
    path: "cause/create", component: AddCauseComponent,
    canActivate: [UsersOnlyGuard]
  },
  {
    path: "cause/all", component: ListAllComponent,
    // canActivate: [UsersOnlyGuard],
    resolve: { causes: loadCausesResolver }
  },
  {
    path: "cause/details/:id", component: DetailsComponent,
    canActivate: [UsersOnlyGuard],
  },
  {
    path: "cause/edit/:id", component: EditCauseComponent,
    canActivate: [UsersOnlyGuard, CauseAuthorOnly],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
