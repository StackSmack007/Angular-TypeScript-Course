import { NgModule } from '@angular/core';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { CommentModule } from '../comments/comments.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostsRoutingModule } from './posts.router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PostCreateComponent, PostDetailsComponent, PostEditComponent, PostEditComponent, PostListComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    CommentModule,
    PostsRoutingModule
  ],
})
export class PostModule { }
