import { PageSiteListFakeApiService } from "./../../services/page-site-list-fake-api.service";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { PageSiteList } from "../../data/page-site-list.data";
import { PageSiteListStatusService } from "../../services/page-site-list-status.service";

@Component({
	templateUrl: "./modal-edit.component.html",
	styleUrls: ["./modal-edit.component.scss"],
})
export class ModalEditComponent implements OnInit {
	form: FormGroup;
	site?: iWebSite;
	formStyle = {
		row: "row mb-6",
		label: "col-lg-4 col-form-label required fw-bold fs-6",
		input: "form-control form-control-lg form-control-solid",
	};
	constructor(
		private fb: FormBuilder,
		private status: PageSiteListStatusService,
		private fake: PageSiteListFakeApiService
	) {}
	ngOnInit(): void {
		this._buildForm;
	}
	private _buildForm() {
		this.form = this.fb.group({
			title: ["", Validators.required],
			link: ["", Validators.required],
		});
	}
}
interface iWebSite extends PageSiteList.iWebSite {}
