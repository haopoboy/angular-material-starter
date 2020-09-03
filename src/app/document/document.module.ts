import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { DocumentRoutingModule } from "./document-routing.module";
import { DocumentComponent } from "./document.component";
import { DocumentsComponent } from "./documents/documents.component";

@NgModule({
  declarations: [DocumentComponent, DocumentsComponent],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class DocumentModule {}
