import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ThemePickerComponent } from "./theme-picker.component";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [ThemePickerComponent],
  declarations: [ThemePickerComponent],
})
export class ThemePickerModule {}
