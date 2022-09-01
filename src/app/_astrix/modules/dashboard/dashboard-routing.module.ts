import { PageA1Component } from "./pages/page-a1/page-a1.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BackPack } from "../../shared/common/backpack.class";
const route = BackPack.enums.route;

const routes: Routes = [{ path: "", component: PageA1Component }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
