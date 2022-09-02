import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BackPack } from "./../../shared/common/backpack.class";
import { PageSiteListComponent } from "./pages/page-site-list/page-site-list.component";
const route = BackPack.enums.route;
const routes: Routes = [
	{ path: "list", component: PageSiteListComponent },
	{ path: "", pathMatch: "full", redirectTo: route.siteList },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SiteMgmtRoutingModule {}
