import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit {
  searchTerm = "";
  input$ = new Subject<string>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.input$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((input) => this.routing(input));

    this.route.queryParams
      .pipe(filter((params) => params.q))
      .subscribe((params) => (this.searchTerm = params.q));
  }

  routing(term: string): void {
    const fitleredTerm = term ? term.trim() : "";
    this.router.navigate(["search"], { queryParams: { q: fitleredTerm } });
  }

  search(event): void {
    this.input$.next(event);
  }
}
