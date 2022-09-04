import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewContainerRef,
} from "@angular/core";
import { DynamicDamagedSiteListTableComponent } from "./dynamic-damaged-site-list-table/dynamic-damaged-site-list-table.component";
@Component({
	selector: "app-block-damaged-site-list",
	templateUrl: "./block-damaged-site-list.component.html",
	styleUrls: ["./block-damaged-site-list.component.scss"],
})
export class BlockDamagedSiteListComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild("dynamic", { read: ViewContainerRef })
	private viewRef: ViewContainerRef;
	//
	constructor(private cdr: ChangeDetectorRef) {}
	ngOnDestroy(): void {}
	ngAfterViewInit(): void {
		this._setTableView();
	}
	ngOnInit(): void {}
	//
	private _setTableView() {
		this.viewRef.clear();
		this.viewRef.createComponent(DynamicDamagedSiteListTableComponent);
		this.cdr.detectChanges();
	}
}
