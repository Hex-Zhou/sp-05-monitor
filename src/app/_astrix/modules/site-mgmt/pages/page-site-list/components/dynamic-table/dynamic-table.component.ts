import { PageSiteListFakeApiService } from "./../../services/page-site-list-fake-api.service";
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BackPack } from "src/app/_astrix/shared/common/backpack.class";
import { PageSiteList } from "../../data/page-site-list.data";
import { PageSiteListStatusService } from "../../services/page-site-list-status.service";
@Component({
	templateUrl: "./dynamic-table.component.html",
	styleUrls: ["./dynamic-table.component.scss"],
})
export class DynamicTableComponent implements OnInit, AfterViewInit {
	dtOptions = BackPack.configs.dataTable.a;
	//
	@Input() list: iWebSite[] = [];
	//
	constructor(private fake: PageSiteListFakeApiService, private status: PageSiteListStatusService) {}
	ngAfterViewInit(): void {}
	ngOnInit(): void {}
	//
	clickDelete(id: number) {
		BackPack.swalDef.delete().then((r) => {
			if (!r.isConfirmed) return;
			this.fake.delete(id).subscribe((bool) => {
				if (bool) this.status.refreshSiteList$FormAPI();
			});
		});
	}
	clickEdit(item: iWebSite) {}
	//

	getDuoTune = BackPack.getDuoTune;
}
interface iWebSite extends PageSiteList.iWebSite {}
