import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { AppRoutingModule } from "../app-routing.module";
import { ValidPathDirective } from "./directives/path.directive";
import { HoverBgrDirective } from "./directives/hover-bgr.directive";
import { ReactiveFormRegisterComponent } from "./directives/reactive-form-register/reactive-form-register.component";

@NgModule({
  declarations: [
    RegisterFormComponent,
    ValidPathDirective,
    HoverBgrDirective,
    ReactiveFormRegisterComponent
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule, ReactiveFormsModule]
})
export class MyFormsModule {}
