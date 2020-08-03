import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class MenuService {
  items$: Observable<MenuItem[]> = this.http
    .get<MenuItem[]>("api/menuItems")
    .pipe();

  constructor(private http: HttpClient) {
    this.findAll().subscribe((items) => console.log(items));
  }

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
