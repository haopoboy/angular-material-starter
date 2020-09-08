import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApiComponent } from "./api.component";
import { ApisComponent } from "./apis/apis.component";

const routes: Routes = [
  {
    path: "apis",
    children: [
      { path: "", component: ApisComponent },
      { path: ":id", component: ApiComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiRoutingModule {}
