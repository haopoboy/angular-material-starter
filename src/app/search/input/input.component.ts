import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators";
import { SearchService } from "./../search.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent implements OnInit {
  searchTerm = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchService.input$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((input) => !!input)
      )
      .subscribe((input) => this.routing(input));

    this.searchService.clear$.subscribe(() => {
      this.searchTerm = "";
      // Reset input for distinctUntilChanged()
      this.searchService.input$.next();
    });

    this.route.queryParams
      .pipe(filter((params) => !!params.q))
      .subscribe((params) => (this.searchTerm = params.q));
  }

  routing(term: string): void {
    this.router.navigate(["search"], { queryParams: { q: term } });
  }

  search(event): void {
    this.searchService.input$.next(event);
  }
}
