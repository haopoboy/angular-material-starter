import { Injectable } from "@angular/core";
import { StyleManagerService } from "./style-manager.service";

@Injectable()
export class ThemeService {
  constructor(private styleManager: StyleManagerService) {}

  setTheme(themeToSet): void {
    this.styleManager.setStyle(
      "theme",
      `assets/prebuilt-themes/${themeToSet}.css`
    );
  }
}
