import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { PostService } from '../../../core/services/post.service';
import { IPost } from '../../shared/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  allPosts: IPost[];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.url.subscribe((segmentArr: UrlSegment[]) => {
      if (segmentArr.length === 0) {
        this.postService.getAll()
          .subscribe((data) => {
            this.allPosts = data;
          });
      } else {
        this.postService.getUserPosts()
          .subscribe((data) => {
            this.allPosts = data;
          });
      }
    })
  }

  onDeletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.postService.getAll()
          .subscribe((data) => {
            this.allPosts = data;
          });
      })
  }

  isAuthor(post: IPost) {
    return post['_acl']['creator'] === localStorage.getItem('userId');
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      })
  }
}
