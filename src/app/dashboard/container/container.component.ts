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
import { IssuesComponent } from "../issues/issues.component";

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

  constructor(private util: UtilService, private cdr: ChangeDetectorRef) {
    this.components.set("issues", IssuesComponent);
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
      this.data.component
    );
    const component = this.container.createComponent(componentFactory).instance;
    this.cdr.detectChanges();
  }
}
