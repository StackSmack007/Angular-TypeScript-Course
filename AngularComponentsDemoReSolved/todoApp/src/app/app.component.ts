import { Component } from "@angular/core";
import { ITask } from "src/intefaces/itask";

@Component({
  selector: "task-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todoApp";
  public tasks: ITask[];
  constructor() {
    this.tasks = [];
  }
  addTask(v: string) {
    if (v === "") return;
    this.tasks.push({ name: v, isCompleted: false });
  }

  completeTask(i: number) {
    this.tasks[i].isCompleted = true;
  }
}
