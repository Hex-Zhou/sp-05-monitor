import { BackPack } from "./shared/common/backpack.class";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const url = BackPack.enums.route;
const routes: Routes = [
  {
    path: "",
    redirectTo: url.dashboard,
    pathMatch: "full",
  },
  {
    path: "site",
    loadChildren: () => import("./modules/site-mgmt/site-mgmt.module").then(m => m.SiteMgmtModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule),
  },
  {
    path: "playground",
    loadChildren: () => import("./modules/playground/playground.module").then(m => m.PlaygroundModule),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstrixRoutingModule {}
