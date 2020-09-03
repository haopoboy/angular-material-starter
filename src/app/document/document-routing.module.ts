import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DocumentComponent } from "./document.component";
import { DocumentsComponent } from "./documents/documents.component";

const routes: Routes = [
  {
    path: "documents",
    children: [
      { path: "", component: DocumentsComponent },
      { path: ":id", component: DocumentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DocumentRoutingModule {}
