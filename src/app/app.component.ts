import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "starter";

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon(
      "github-logo",
      domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/github-circle-white-transparent.svg"
      )
    );

    ["openapi"].forEach((icon) => this.registerAssetsIcon(icon));

    this.registerGithubIcons();
  }

  registerGithubIcons(namespace = "github"): void {
    ["issue_opened", "issue_closed", "pull_request", "repo", "forked"].forEach(
      (icon) => {
        this.registerIcon(namespace, icon);
      }
    );
  }

  registerAssetsIcon(
    iconName: string,
    assetPath = `assets/img/${iconName}.svg`
  ): void {
    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(assetPath)
    );
  }

  registerIcon(
    namespace: string,
    iconName: string,
    assetPath = `assets/github/${iconName}.svg`
  ): void {
    this.matIconRegistry.addSvgIconInNamespace(
      namespace,
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(assetPath)
    );
  }
}
