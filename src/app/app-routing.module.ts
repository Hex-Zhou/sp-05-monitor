import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./modules/auth/services/auth.guard";
export const routes: Routes = [
  {
    path: "error",
    loadChildren: () => import("./modules/errors/errors.module").then(m => m.ErrorsModule),
  },
  {
    path: "",
    canActivate: [AuthGuard],
    loadChildren: () => import("./_metronic/layout/layout.module").then(m => m.LayoutModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import("./_astrix/modules/dashboard/dashboard.module").then(m => m.DashboardModule),
  },
  // {
  // 	path: "auth",
  // 	loadChildren: () => import("./modules/auth/auth.module").then((m) => m.AuthModule),
  // },
  {
    path: "auth",
    loadChildren: () => import("./_astrix/modules/auth/auth.module").then(m => m.AuthModule),
  },
  { path: "**", redirectTo: "error/404" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
