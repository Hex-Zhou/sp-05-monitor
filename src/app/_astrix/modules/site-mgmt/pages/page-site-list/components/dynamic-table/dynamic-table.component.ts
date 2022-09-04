import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BackPack } from "src/app/_astrix/shared/common/backpack.class";
import { iSite } from "src/app/_astrix/shared/models/site.model";
import { PageSiteListStatusService } from "../../services/page-site-list-status.service";
import { ModalEditComponent } from "../modal-edit/modal-edit.component";
import { PageSiteListFakeApiService } from "./../../services/page-site-list-fake-api.service";
@Component({
	templateUrl: "./dynamic-table.component.html",
	styleUrls: ["./dynamic-table.component.scss"],
})
export class DynamicTableComponent implements OnInit, AfterViewInit {
	dtOptions = BackPack.configs.dataTable.a;
	//
	@Input() list: iSite[] = [];
	//
	constructor(
		private modal: NgbModal,
		private fake: PageSiteListFakeApiService,
		private status: PageSiteListStatusService
	) {}
	ngAfterViewInit(): void {}
	ngOnInit(): void {}
	//
	clickDelete(id: number) {
		BackPack.swalDef.delete().then((r) => {
			if (!r.isConfirmed) return;
			this.fake.delete(id).subscribe((bool) => {
				if (bool) this.status.nextSiteList$ByAPI();
			});
		});
	}
	clickEdit(item: iSite) {
		console.log(item);
		const options = BackPack.configs.ngbModal.form;
		const ref = this.modal.open(ModalEditComponent, options);
		ref.componentInstance.site = item;
	}
	//
	getDuoTune = BackPack.getDuoTune;
}
