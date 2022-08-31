import { BackPack } from "./shared/common/backpack.class";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { AstrixRoutingModule } from "./astrix-routing.module";

@NgModule({
	declarations: [],
	imports: [DashboardModule, CommonModule, AstrixRoutingModule, BackPack.commonModules],
})
export class AstrixModule {}
