import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { GithubService } from "../service/github.service";
import { Page } from "../service/Page";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  url = `${environment.apiBasePath}/dashboard`;

  cards$: Observable<{}[]> = this.http
    .get<Page<{}>>(this.url)
    .pipe(map((page) => page.content));

  constructor(private http: HttpClient, public github: GithubService) {}
}
