import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MonacoEditorModule } from "ngx-monaco-editor";
import { ApiRoutingModule } from "./api-routing.module";
import { ApiComponent } from "./api.component";
import { ApisComponent } from "./apis/apis.component";

@NgModule({
  declarations: [ApiComponent, ApisComponent],
  imports: [
    CommonModule,
    ApiRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MonacoEditorModule,
  ],
})
export class ApiModule {}
