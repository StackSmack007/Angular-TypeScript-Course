import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IPost } from 'src/app/components/shared/models/post';
import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class PostResolver implements Resolve<IPost>{
    constructor(private postService: PostService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> {
        const postId: string = route.params["id"];
        return this.postService.getById(postId);
    }
}