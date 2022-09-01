import { BackPack } from "src/app/_astrix/shared/common/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SiteMgmtRoutingModule } from "./site-mgmt-routing.module";
import { SiteListComponent } from "./pages/site-list/site-list.component";
import { DynamicSiteListTableComponent } from "./pages/site-list/components/dynamic-site-list-table/dynamic-site-list-table.component";

@NgModule({
	declarations: [SiteListComponent, DynamicSiteListTableComponent],
	imports: [CommonModule, BackPack.commonModules, SiteMgmtRoutingModule],
})
export class SiteMgmtModule {}
