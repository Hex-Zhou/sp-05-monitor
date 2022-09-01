import { BackPack } from "./../../shared/common/backpack.class";
import { SiteListComponent } from "./pages/site-list/site-list.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "src/app/modules/errors/error404/error404.component";
const route = BackPack.enums.route;
const routes: Routes = [
	{ path: "list", component: SiteListComponent },
	{ path: "", pathMatch: "full", redirectTo: route.siteList },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SiteMgmtRoutingModule {}
