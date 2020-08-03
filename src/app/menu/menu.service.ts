import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  items$: Observable<MenuItem[]> = this.http
    .get<MenuItem[]>("api/menuItems")
    .pipe();

  constructor(private http: HttpClient) {}

  findAll(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>("/api/menuItems");
  }
}

export interface MenuItem {
  id: number;
  icon: string;
  label: string;
  routerLink: string;
}
