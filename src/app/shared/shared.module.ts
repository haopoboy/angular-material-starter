import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { EmptyContentComponent } from "./empty-content/empty-content.component";

@NgModule({
  declarations: [EmptyContentComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule],
  exports: [EmptyContentComponent],
})
export class SharedModule {}
