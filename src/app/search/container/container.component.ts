import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { UtilService } from "src/app/service/util.service";
import { Link } from "./../search.service";

@Component({
  selector: "app-menu-item",
  styleUrls: ["./container.component.css"],
  template: `<mat-list-item>
    <mat-icon mat-list-icon>{{ data.icon }}</mat-icon>
    <h1 mat-line fxLayoutAlign="start center">
      <a mat-button [routerLink]="data.routerLink">{{ data.label }}</a>
    </h1>
  </mat-list-item>`,
})
export class MenuItemComponent implements OnInit, ItemComponent {
  data: Link = {
    label: "None",
  };
  constructor() {}

  ngOnInit(): void {}
}

@Component({
  selector: "app-default-item",
  styleUrls: ["./container.component.css"],
  template: `
    <mat-list-item>
      <mat-icon mat-list-icon>{{ data.icon }}</mat-icon>
      <h1 mat-line fxLayoutAlign="start center">
        <a
          mat-button
          *ngIf="data.routerLink; else other"
          [routerLink]="data.routerLink"
          >{{ data.label }}</a
        >
        <ng-template #other>
          <a mat-button> {{ data.label }}</a>
        </ng-template>
      </h1>
    </mat-list-item>
  `,
})
export class DefaultItemComponent implements OnInit, ItemComponent {
  data: Link = {
    label: "None",
  };
  constructor() {}

  ngOnInit(): void {}
}

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"],
})
export class ContainerComponent implements OnInit, AfterViewInit {
  @Input()
  data: any = {};

  components = new Map();

  @ViewChild("container", { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private cdr: ChangeDetectorRef, private util: UtilService) {
    this.components.set("menu", MenuItemComponent);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createControlComponent();
  }

  createControlComponent(): void {
    if (!this.container) {
      return;
    }
    this.container.clear();
    const componentFactory = this.util.createComponentFactory(
      this.components,
      this.data.type,
      DefaultItemComponent
    );

    const component: ItemComponent = this.container.createComponent(
      componentFactory
    ).instance as ItemComponent;

    component.data = this.data;
    this.cdr.detectChanges();
  }
}

export interface ItemComponent {
  data: Link;
}
