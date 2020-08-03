import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Page } from "../service/Page";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  url = `${environment.apiBasePath}/menuItems`;
  items$: Observable<MenuItem[]> = this.http
    .get<Page<MenuItem>>(this.url)
    .pipe(map((page) => page.content));

  constructor(private http: HttpClient) {}
}

export interface MenuItem {
  id: number;
  icon: string;
  label: string;
  routerLink: string;
}
