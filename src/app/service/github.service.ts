import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

export class Issue {
  url = "";
  htmlUrl = "";
  title = "";
  pullRequest?: Issue;
}

@Injectable({
  providedIn: "root",
})
export class GithubService {
  baseUrl = "https://api.github.com/repos/haopoboy/angular-material-starter";

  issues$ = this.http.get(`${this.baseUrl}/issues`).pipe(
    map((arr: any[]) => {
      return arr.map((row) => {
        return Object.assign(new Issue(), {
          title: row.title,
          url: row.url,
          htmlUrl: row.html_url,
          pullRequest: row.pull_request,
        });
      });
    })
  );

  pulls$ = this.http.get(`${this.baseUrl}/pulls`).pipe(
    map((arr: any[]) => {
      return arr.map((row) => {
        const issue = new Issue();
        issue.title = row.title;
        issue.url = row.url;
        issue.htmlUrl = row.html_url;
        return issue;
      });
    })
  );

  constructor(private http: HttpClient) {}
}
