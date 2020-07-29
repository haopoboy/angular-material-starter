import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  q = "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(filter((params) => params.q))
      .subscribe((params) => (this.q = params.q));
  }
}
