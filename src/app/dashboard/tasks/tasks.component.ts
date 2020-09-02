import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../service/task.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  tasks = [];

  constructor(private service: TaskService) {}

  ngOnInit(): void {
    this.load();
    this.service.posted$.subscribe(() => this.load());
  }

  async load(): Promise<void> {
    this.tasks = await this.service.tasks$.toPromise();
  }
}
