import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Page } from "./Page";

export class BaseApiService<T> {
  get$: Observable<Page<T>> = this.http.get<Page<T>>(this.url);

  constructor(protected http: HttpClient, protected url) {}

  getById(id: string): Observable<T> {
    return this.http.get(`${this.url}/${id}`) as Observable<T>;
  }
}
