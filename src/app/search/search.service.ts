import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Page } from "./../service/Page";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  url = `${environment.apiBasePath}/links`;
  input$ = new Subject<string>();
  clear$ = new Subject<void>();
  links$: Observable<Link[]> = this.http
    .get<Page<Link>>(this.url)
    .pipe(map((page) => page.content));

  constructor(private http: HttpClient) {}

  query(q: string): Observable<Page<Link>> {
    return this.http.get<Page<Link>>(`${this.url}?keyword=${q}`);
  }
}

export interface Link {
  icon?: string;
  label: string;
  routerLink?: string;
  keyword?: string;
  type?: string;
  data?: any;
}
