import { PagePlayground1Component } from "./pages/page-playground1/page-playground1.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BackPack } from "../../shared/common/backpack.class";

const route = BackPack.enums.route;
const routes: Routes = [
  { path: "", component: PagePlayground1Component },
  { path: "", pathMatch: "full", redirectTo: route.playGround },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}
