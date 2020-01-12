import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ITask } from "src/intefaces/itask";


@Component({
  selector: "task-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  constructor() {
    // this.completionHandler=new EventEmitter();
     this.completionHandler.subscribe(()=>console.log("test122222"));
  }

  @Output() completionHandler: EventEmitter<string>=new EventEmitter();

  @Input() task: ITask;

executeCompletion(){

  this.completionHandler.emit();

}

  ngOnInit() {
    //debugger;
  }
}
