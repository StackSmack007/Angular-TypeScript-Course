import { NgModule } from '@angular/core';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentComponent, AddCommentComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [CommentComponent,AddCommentComponent]
})
export class CommentModule { }
