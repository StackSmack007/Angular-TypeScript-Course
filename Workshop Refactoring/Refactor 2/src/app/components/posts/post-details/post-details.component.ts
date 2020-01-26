import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../../core/services/post.service';
import { CommentService } from '../../../core/services/comment.service';
import { IPost } from '../../shared/models/post';
import { IComment } from '../../shared/models/comment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;
  comment$: Observable<IComment[]> = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.post = this.route.snapshot.data.post;
    this.loadComments();
  }

  loadComments() {
    this.comment$ = this.commentService.getAllForPost(this.post._id)
  }

  isPostAuthor() {
    return this.post['_acl']['creator'] === localStorage.getItem('userId');
  }

  canTouchComment(post: IPost) {
    return this.isPostAuthor() || post['_acl']['creator'] === localStorage.getItem('userId');
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      })
  }
}