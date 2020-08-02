import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  input$ = new Subject<string>();
  clear$ = new Subject<void>();
  constructor() {}
}
