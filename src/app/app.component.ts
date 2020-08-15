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

    this.registerGithubIcons();
  }

  registerGithubIcons(namespace = "github"): void {
    this.matIconRegistry.addSvgIconInNamespace(
      namespace,
      "issue_opened",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/github/issue_opened.svg"
      )
    );
    this.matIconRegistry.addSvgIconInNamespace(
      namespace,
      "issue_closed",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/github/issue_closed.svg"
      )
    );
    this.matIconRegistry.addSvgIconInNamespace(
      namespace,
      "pull_request",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "assets/github/pull_request.svg"
      )
    );
  }
}
