import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { mergeMap } from "rxjs/operators";
import { Doc, DocumentService } from "./document.service";

@Component({
  selector: "app-document",
  templateUrl: "./document.component.html",
  styleUrls: ["./document.component.css"],
})
export class DocumentComponent implements OnInit {
  data: Doc = {};

  constructor(
    private service: DocumentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(mergeMap((params) => this.service.getById(params.id)))
      .subscribe((doc) => (this.data = doc));
  }
}
