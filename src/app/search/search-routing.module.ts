import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InputComponent } from "./input/input.component";
import { SearchComponent } from "./search.component";

const routes: Routes = [
  { path: "", component: InputComponent, outlet: "searchInput" },
  { path: "search", component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
