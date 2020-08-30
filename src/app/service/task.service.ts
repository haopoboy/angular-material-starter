import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { distinctUntilChanged, map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Page } from "./Page";

export interface Task {
  id?: string;
  content: string;
}

@Injectable({
  providedIn: "root",
})
export class TaskService {
  url = `${environment.apiBasePath}/tasks`;
  tasks$: Observable<{}[]> = this.http
    .get<Page<{}>>(this.url)
    .pipe(map((page) => page.content));

  post$ = new Subject<Task>();
  posted$ = new Subject<Task>();

  constructor(private http: HttpClient) {
    this.post$
      .pipe(distinctUntilChanged((a, b) => a.content === b.content))
      .subscribe((task) => this.post(task));
  }

  private post(task: Task): void {
    this.http
      .post(this.url, task)
      .pipe(tap((t: Task) => this.posted$.next(t)))
      .subscribe();
  }
}
