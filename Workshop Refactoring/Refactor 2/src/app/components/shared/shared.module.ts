import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavigationComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,AppRoutingModule
  ],
  exports: [CommonModule,AppRoutingModule,FormsModule,ReactiveFormsModule,HeaderComponent,FooterComponent,NavigationComponent]
})
export class SharedModule { }
