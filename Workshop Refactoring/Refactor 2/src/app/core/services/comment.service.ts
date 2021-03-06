import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_KEY } from '../../kinvey.tokens';
import { IComment } from 'src/app/components/shared/models/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly CREATE_COMMENT = `${this.BASE_URL}/comments`;

  constructor(
    private http: HttpClient
  ) { }

  getAllForPost(postId: string) {
    return this.http.get<IComment[]>(`${this.CREATE_COMMENT}?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`)
  }

  postComment(body: IComment) {
    return this.http.post<IComment>(this.CREATE_COMMENT, body);
  }

  deleteComment(id: string) {
    return this.http.delete(`${this.CREATE_COMMENT}/${id}`);
  }
}