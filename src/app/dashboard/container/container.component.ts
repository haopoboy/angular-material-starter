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
import { ApisComponent } from "../apis/apis.component";
import { DocumentsComponent } from "../documents/documents.component";
import { IssuesComponent } from "../issues/issues.component";
import { TasksComponent } from "../tasks/tasks.component";

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
    this.components.set("apis", ApisComponent);
    this.components.set("issues", IssuesComponent);
    this.components.set("tasks", TasksComponent);
    this.components.set("documents", DocumentsComponent);
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
    const component = this.container.createComponent(componentFactory)
      .instance as any;
    component.data = this.data.data;
    this.cdr.detectChanges();
  }
}
