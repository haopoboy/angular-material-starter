import { Component, OnInit } from "@angular/core";
import { Api, ApiService } from "../api.service";

@Component({
  selector: "app-apis",
  templateUrl: "./apis.component.html",
  styleUrls: ["./apis.component.css"],
})
export class ApisComponent implements OnInit {
  data: Api[] = [];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.get$.subscribe((page) => (this.data = page.content));
  }
}
