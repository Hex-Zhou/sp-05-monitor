import { BackPack } from "./../../shared/common/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { PageA1Component } from "./pages/page-a1/page-a1.component";
import { BlockCurrentStatusComponent } from "./blocks/block-current-status/block-current-status.component";
import { BlockDamagedSiteListComponent } from "./blocks/block-damaged-site-list/block-damaged-site-list.component";

@NgModule({
	declarations: [PageA1Component, BlockCurrentStatusComponent, BlockDamagedSiteListComponent],
	imports: [CommonModule, DashboardRoutingModule, BackPack.commonModules],
	exports: [],
})
export class DashboardModule {}
