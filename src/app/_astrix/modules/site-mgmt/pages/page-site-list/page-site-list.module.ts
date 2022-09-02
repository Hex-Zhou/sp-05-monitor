import { BackPack } from "src/app/_astrix/shared/common/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DynamicTableComponent } from "./components/dynamic-table/dynamic-table.component";
import { ModalEditComponent } from "./components/modal-edit/modal-edit.component";
import { PageSiteListComponent } from "./page-site-list.component";

@NgModule({
	declarations: [ModalEditComponent, PageSiteListComponent, DynamicTableComponent],
	imports: [CommonModule, BackPack.commonModules],
	exports: [PageSiteListComponent],
})
export class PageSiteListModule {}
