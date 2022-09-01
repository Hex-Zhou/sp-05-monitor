import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
	ViewContainerRef,
	ViewEncapsulation,
} from "@angular/core";
import { DynamicDamagedSiteListTableComponent } from "./dynamic-damaged-site-list-table/dynamic-damaged-site-list-table.component";

@Component({
	selector: "app-block-damaged-site-list",
	templateUrl: "./block-damaged-site-list.component.html",
	styleUrls: ["./block-damaged-site-list.component.scss"],
})
export class BlockDamagedSiteListComponent implements OnInit, AfterViewInit {
	@ViewChild("dynamic", { read: ViewContainerRef })
	private viewRef: ViewContainerRef;
	constructor() {}
	ngAfterViewInit(): void {
		this._setTableView();
	}
	ngOnInit(): void {}

	private _setTableView() {
		this.viewRef.clear();
		const componentRef = this.viewRef.createComponent(DynamicDamagedSiteListTableComponent);
	}
}
