import { AstrixLayoutModule } from "./modules/layout/layout.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackPack } from "./shared/common/backpack.class";

import { AstrixRoutingModule } from "./astrix-routing.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { SiteMgmtModule } from "./modules/site-mgmt/site-mgmt.module";

@NgModule({
	declarations: [],
	imports: [
		AstrixLayoutModule,
		SiteMgmtModule,
		DashboardModule,
		CommonModule,
		AstrixRoutingModule,
		BackPack.commonModules,
	],
})
export class AstrixModule {}
