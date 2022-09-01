import { DynamicSiteListTableComponent } from "./components/dynamic-site-list-table/dynamic-site-list-table.component";
import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewContainerRef,
} from "@angular/core";

@Component({
	selector: "app-site-list",
	templateUrl: "./site-list.component.html",
	styleUrls: ["./site-list.component.scss"],
})
export class SiteListComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild("dynamic", { read: ViewContainerRef })
	private viewRef: ViewContainerRef;
	constructor(private cdr: ChangeDetectorRef) {}
	ngOnDestroy(): void {
		this.viewRef.clear();
	}
	ngAfterViewInit(): void {
		this._setTableView();
	}
	ngOnInit(): void {}

	private _setTableView() {
		this.viewRef.clear();
		this.viewRef.createComponent(DynamicSiteListTableComponent);
		this.cdr.detectChanges();
	}
}
