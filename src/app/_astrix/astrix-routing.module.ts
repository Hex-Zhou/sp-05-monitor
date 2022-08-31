import { BackPack } from "./shared/common/backpack.class";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const url = BackPack.enums.url;
const routes: Routes = [
	{
		path: "dashboard",
		loadChildren: () => import("./modules/dashboard/dashboard.module").then((m) => m.DashboardModule),
	},

	{
		path: "",
		redirectTo: url.dashboard,
		pathMatch: "full",
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AstrixRoutingModule {}
