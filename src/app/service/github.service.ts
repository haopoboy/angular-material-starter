import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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
  baseUrl = "https://api.github.com";

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
  constructor(private http: HttpClient) {}

  repositoriesByName(repo: string): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  forRepos(path: string): Repos {
    return new Repos(`${this.baseUrl}/repos/${path}`, this.http);
  }
}

export class Repos {
  repo$ = this.http.get(this.baseUrl).pipe(
    map((repo: any) => {
      return {
        fullName: repo.full_name,
        htmlUrl: repo.html_url,
        openIssues: repo.open_issues,
        forks: repo.forks,
      };
    })
  );
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
  constructor(private baseUrl: string, private http: HttpClient) {}
}
