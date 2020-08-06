import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DocumentsComponent } from "./documents/documents.component";

const routes: Routes = [
  {
    path: "documents",
    children: [{ path: "", component: DocumentsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DocumentRoutingModule {}
