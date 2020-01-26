import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IComment } from '../../shared/models/comment';
import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @ViewChild('f', { static: false }) createCommentForm: NgForm;
  @Input()
  postId: string;

  @Output()
  createCommentEmitter: EventEmitter<any> = new EventEmitter()
  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  postComment({ content }) {
    const comment: IComment = { content, postId: this.postId, author: localStorage.getItem('username') };

    this.commentService
      .postComment(comment)
      .subscribe(() => {
        this.createCommentForm.reset();
        this.createCommentEmitter.emit();
      })
  }
}
