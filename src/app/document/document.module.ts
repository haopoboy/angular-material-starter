import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DocumentRoutingModule } from "./document-routing.module";
import { DocumentComponent } from "./document.component";
import { DocumentsComponent } from "./documents/documents.component";

@NgModule({
  declarations: [DocumentComponent, DocumentsComponent],
  imports: [CommonModule, DocumentRoutingModule],
})
export class DocumentModule {}
