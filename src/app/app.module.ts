import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { environment } from "./../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { DocumentModule } from "./document/document.module";
import { MenuModule } from "./menu/menu.module";
import { SearchModule } from "./search/search.module";
import { AppInMemoryDbService } from "./service/app-in-memory-db.service";
import { ThemePickerModule } from "./theme-picker/theme-picker.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(AppInMemoryDbService, {
          passThruUnknownUrl: true,
        }),
    /* Material */
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    /* Custom */
    SearchModule,
    MenuModule,
    ThemePickerModule,
    DashboardModule,
    DocumentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
