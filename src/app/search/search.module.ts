import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import {
  ContainerComponent,
  MenuItemComponent,
} from "./container/container.component";
import { InputComponent } from "./input/input.component";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";

@NgModule({
  declarations: [
    InputComponent,
    SearchComponent,
    ContainerComponent,
    MenuItemComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    FlexLayoutModule,
    /* Material */
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
  ],
})
export class SearchModule {}
