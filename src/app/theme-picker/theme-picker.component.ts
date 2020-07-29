import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { StyleManagerService } from "./style-manager.service";
import { ThemeService } from "./theme.service";

@Component({
  selector: "app-theme-picker",
  templateUrl: "./theme-picker.component.html",
  styleUrls: ["./theme-picker.component.css"],
})
export class ThemePickerComponent implements OnInit {
  currentTheme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.reloadTheme();
  }

  lightDown(): void {
    this.setTheme("dark");
  }

  lightUp(): void {
    this.setTheme("light");
  }

  setTheme(name: string): void {
    localStorage.setItem("theme", name);
    this.reloadTheme();
  }

  reloadTheme(): void {
    const theme = localStorage.getItem("theme");
    this.currentTheme = theme ? theme : "dark";
    if ("dark" === this.currentTheme) {
      this.themeService.setTheme("purple-green");
    } else {
      this.themeService.setTheme("indigo-pink");
    }
  }
}

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [ThemePickerComponent],
  declarations: [ThemePickerComponent],
  providers: [StyleManagerService, ThemeService],
})
export class ThemePickerModule {}
