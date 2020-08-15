import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-empty-content",
  templateUrl: "./empty-content.component.html",
  styleUrls: ["./empty-content.component.css"],
})
export class EmptyContentComponent implements OnInit {
  @Input()
  svgIcon: string;
  @Input()
  icon: string;
  @Input()
  header: string;
  constructor() {}

  ngOnInit(): void {}
}
