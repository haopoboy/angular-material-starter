import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { Link } from "./../search.service";

@Component({
  selector: "app-menu-item",
  styleUrls: ["./container.component.css"],
  template: `<mat-list-item>
    <mat-icon mat-list-icon>{{ data.data?.icon }}</mat-icon>
    <h1 mat-line fxLayoutAlign="start center">
      <a mat-button  [routerLink]="data.routerLink">{{ data.label }}</a>
    </h1>
  </mat-list-item>`,
})
export class MenuItemComponent implements OnInit, ItemComponent {
  data: Link = {
    label: "None",
  };
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
}

@Component({
  selector: "app-default-item",
  styleUrls: ["./container.component.css"],
  template: `{{ data.label }}`,
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

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {
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

    let componentFactory;
    if (this.components.has(this.data.type)) {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.components.get(this.data.type)
      );
    } else {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        DefaultItemComponent
      );
    }

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
