import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from '../../shared/models/comment';
import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: IComment;
  @Input()
  allowedCommentEdit: boolean = false;

  @Output()
  deleteEmiter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  deleteComment() {
    this.commentService.deleteComment(this.comment["_id"])
      .subscribe(() => {
        this.deleteEmiter.emit();
      })
  }
}