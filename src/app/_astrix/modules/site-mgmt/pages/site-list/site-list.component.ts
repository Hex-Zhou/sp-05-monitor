import { DynamicSiteListTableComponent } from "./components/dynamic-site-list-table/dynamic-site-list-table.component";
import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
	selector: "app-site-list",
	templateUrl: "./site-list.component.html",
	styleUrls: ["./site-list.component.scss"],
})
export class SiteListComponent implements OnInit, AfterViewInit {
	@ViewChild("dynamic", { read: ViewContainerRef })
	private viewRef: ViewContainerRef;
	constructor() {}
	ngAfterViewInit(): void {
		this._setTableView();
	}
	ngOnInit(): void {}

	private _setTableView() {
		this.viewRef.clear();
		const componentRef = this.viewRef.createComponent(DynamicSiteListTableComponent);
	}
}
