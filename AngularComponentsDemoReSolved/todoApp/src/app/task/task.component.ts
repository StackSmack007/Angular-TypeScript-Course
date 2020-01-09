import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ITask } from "src/intefaces/itask";


@Component({
  selector: "task-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  constructor() {}

  @Output() completionHandler: EventEmitter<void> = new EventEmitter();

  @Input() task: ITask;

executeCompletion(){
  this.completionHandler.emit();
}

  ngOnInit() {
    //debugger;
  }
}
