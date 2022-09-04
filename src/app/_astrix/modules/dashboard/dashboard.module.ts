import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackPack } from "./../../shared/common/backpack.class";
import { BlockCurrentStatusComponent } from "./blocks/block-current-status/block-current-status.component";
import { BlockDamagedSiteListComponent } from "./blocks/block-damaged-site-list/block-damaged-site-list.component";
import { BlockStatusPieChartComponent } from "./blocks/block-status-pie-chart/block-status-pie-chart.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { PageA1Component } from "./pages/page-a1/page-a1.component";
import { DynamicDamagedSiteListTableComponent } from "./blocks/block-damaged-site-list/dynamic-damaged-site-list-table/dynamic-damaged-site-list-table.component";
import { BlockActiveTimelineComponent } from "./blocks/block-active-timeline/block-active-timeline.component";
@NgModule({
	declarations: [
		PageA1Component,
		BlockCurrentStatusComponent,
		BlockDamagedSiteListComponent,
		BlockStatusPieChartComponent,
		DynamicDamagedSiteListTableComponent,
		BlockActiveTimelineComponent,
	],
	imports: [CommonModule, DashboardRoutingModule, BackPack.commonModules],
	exports: [],
})
export class DashboardModule {}
