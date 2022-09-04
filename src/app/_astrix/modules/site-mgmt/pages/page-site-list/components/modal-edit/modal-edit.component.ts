import { BackPack } from "./../../../../../../shared/common/backpack.class";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { PageSiteListFakeApiService } from "./../../services/page-site-list-fake-api.service";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { PageSiteListStatusService } from "../../services/page-site-list-status.service";
import Swal from "sweetalert2";
import { iSite } from "src/app/_astrix/shared/models/site.model";
@Component({
	providers: [FormBuilder],
	templateUrl: "./modal-edit.component.html",
	styleUrls: ["./modal-edit.component.scss"],
})
export class ModalEditComponent implements OnInit {
	form: FormGroup;
	site?: iSite;
	isSubmitted = false;
	formStyle = {
		row: "row mb-6 fs-3",
		label: "col-lg-2 col-form-label required fw-bold fs-3",
		inputDiv: "col-lg-10 fv-row",
		input: "form-control form-control-lg form-control-solid",
	};
	//
	constructor(
		private fb: FormBuilder,
		private status: PageSiteListStatusService,
		private fake: PageSiteListFakeApiService,
		public modal: NgbModal
	) {}
	ngOnInit(): void {
		this._buildForm();
		this._patchValue();
	}
	//
	clickPrimaryBtn() {
		this.isSubmitted = true;
		let val = { ...this.form.getRawValue() };
		if (this.form.valid) {
			this._submit(val);
		}
	}
	private _submit(val: any) {
		let ob: Observable<boolean>;
		let slogan = "";
		if (this.site) {
			ob = this.fake.edit({ ...this.site, ...val });
			slogan = "修改成功！";
		} else {
			ob = this.fake.post(val);
			slogan = "新增成功！";
		}
		ob.subscribe((bool) => {
			if (bool) Swal.fire({ icon: "success", title: slogan });
			this.modal.dismissAll();
			this.status.nextSiteList$ByAPI();
		});
	}
	private _patchValue() {
		if (this.site) {
			this.form.patchValue(this.site);
		}
	}
	private _buildForm() {
		this.form = this.fb.group({
			title: ["", Validators.required],
			link: ["", Validators.required],
		});
	}
}
