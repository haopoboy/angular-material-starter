import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Page } from "../service/Page";

@Injectable({
  providedIn: "root",
})
export class DocumentService {
  url = `${environment.apiBasePath}/documents`;
  get$: Observable<Page<Doc>> = this.http.get<Page<Doc>>(this.url);

  constructor(private http: HttpClient) {}

  getById(id: string): Observable<Doc> {
    return this.http.get(`${this.url}/${id}`);
  }
}

export interface Doc {
  id?: string;
  name?: string;
  url?: string;
  content?: string;
}
