import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.css"],
})
export class IssuesComponent implements OnInit {
  issues$ = this.service.github.issues$;
  pulls$ = this.service.github.pulls$;
  constructor(private service: DashboardService) {}

  ngOnInit(): void {}
}
