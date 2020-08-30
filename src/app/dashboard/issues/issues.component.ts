import { Component, OnInit } from "@angular/core";
import { Issue } from "src/app/service/github.service";
import { TaskService } from "src/app/service/task.service";
import { UtilService } from "src/app/service/util.service";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.css"],
})
export class IssuesComponent implements OnInit {
  issues$ = this.service.github.issues$;
  pulls$ = this.service.github.pulls$;
  constructor(
    private service: DashboardService,
    public util: UtilService,
    private task: TaskService
  ) {}

  ngOnInit(): void {}

  async addAsTask(issue: Issue): Promise<any> {
    this.task.post$.next({ content: issue.title });
  }
}
