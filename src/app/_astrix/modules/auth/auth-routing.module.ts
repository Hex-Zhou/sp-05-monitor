import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BackPack } from "./../../shared/common/backpack.class";
import { PageLogin1Component } from "./pages/login/page-login1/page-login1.component";
import { PageLogin2Component } from "./pages/login/page-login2/page-login2.component";
const url = BackPack.enums.route;
const routes: Routes = [
	{ path: "login", component: PageLogin1Component },
	{ path: "login2", component: PageLogin2Component },
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
export class AuthRoutingModule {}
