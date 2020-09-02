import { Component, OnInit } from "@angular/core";
import { Issue } from "src/app/service/github.service";
import { TaskService } from "src/app/service/task.service";
import { UtilService } from "src/app/service/util.service";
import { Repos } from "../../service/github.service";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.css"],
})
export class IssuesComponent implements OnInit {
  data: {
    repo: "";
  };
  repos: Repos;

  constructor(
    private service: DashboardService,
    public util: UtilService,
    private task: TaskService
  ) {}

  ngOnInit(): void {
    this.repos = this.service.github.forRepos(this.data.repo);
  }

  async addAsTask(issue: Issue): Promise<any> {
    this.task.post$.next({ content: issue.title });
  }
}
