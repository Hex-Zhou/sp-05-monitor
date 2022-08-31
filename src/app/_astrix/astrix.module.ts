import { BackPack } from "./shared/common/backpack.class";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { AstrixRoutingModule } from "./astrix-routing.module";
import { AuthModule } from "./modules/auth/auth.module";

@NgModule({
	declarations: [],
	imports: [AuthModule, DashboardModule, CommonModule, AstrixRoutingModule, BackPack.commonModules],
})
export class AstrixModule {}
