import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterFormComponent } from "./forms/register-form/register-form.component";
import { ReactiveFormRegisterComponent } from './forms/directives/reactive-form-register/reactive-form-register.component';

const routes: Routes = [
  {
    path: "register",
    component: RegisterFormComponent
  },
  {
    path: "registerr",
    component: ReactiveFormRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
