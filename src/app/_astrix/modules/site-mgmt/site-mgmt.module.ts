import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackPack } from "src/app/_astrix/shared/common/backpack.class";
import { PageSiteListModule } from "./pages/page-site-list/page-site-list.module";

import { SiteMgmtRoutingModule } from "./site-mgmt-routing.module";

@NgModule({
	declarations: [],
	imports: [PageSiteListModule, CommonModule, BackPack.commonModules, SiteMgmtRoutingModule],
})
export class SiteMgmtModule {}
