import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, IndexComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [FooterComponent,HeaderComponent],
  providers:[]
})
export class MyCommonModule { }
