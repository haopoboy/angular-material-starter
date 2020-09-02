import { LayoutModule } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { SharedModule } from "../shared/shared.module";
import { ContainerComponent } from "./container/container.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { IssuesComponent } from "./issues/issues.component";
import { TasksComponent } from "./tasks/tasks.component";

@NgModule({
  declarations: [DashboardComponent, ContainerComponent, IssuesComponent, TasksComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    LayoutModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
})
export class DashboardModule {}
