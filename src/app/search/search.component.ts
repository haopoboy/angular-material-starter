import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { filter } from "rxjs/operators";
import { SearchService } from "./search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit, OnDestroy {
  q = "";
  links = [];
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params) => params.q))
      .subscribe((params) => this.query(params.q));
  }

  query(q: string): void {
    this.links = [];
    this.q = q;
    this.searchService.query(q).subscribe((page) => {
      this.links = page.content;
    });
  }

  ngOnDestroy(): void {
    this.searchService.clear$.next();
  }
}
