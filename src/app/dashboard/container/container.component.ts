import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { UtilService } from "src/app/service/util.service";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"],
})
export class ContainerComponent implements OnInit, AfterViewInit {
  components = new Map();

  @ViewChild("container", { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private util: UtilService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createControlComponent();
  }

  createControlComponent(): void {
    if (!this.container) {
      return;
    }
    this.container.clear();

    const componentFactory = this.util.createComponentFactory(this.components);

    const component = this.container.createComponent(componentFactory).instance;
    this.cdr.detectChanges();
  }
}
