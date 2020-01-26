import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAllComponent } from './list-all/list-all.component';
import { AddCauseComponent } from './add-cause/add-cause.component';
import { EditCauseComponent } from './edit-cause/edit-cause.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CauseMiniComponent } from './cause-mini/cause-mini.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [ListAllComponent, AddCauseComponent, EditCauseComponent, CauseMiniComponent, DetailsComponent],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],

})
export class CausesModule { }
