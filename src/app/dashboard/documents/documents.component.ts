import { Component, OnInit } from "@angular/core";
import { Doc, DocumentService } from "src/app/document/document.service";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.css"],
})
export class DocumentsComponent implements OnInit {
  data: Doc[] = [];
  constructor(private service: DocumentService) {}

  ngOnInit(): void {
    this.service.get$.subscribe((page) => (this.data = page.content));
  }
}
