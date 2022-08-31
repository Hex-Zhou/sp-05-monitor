import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-block-current-status",
	templateUrl: "./block-current-status.component.html",
	styleUrls: ["./block-current-status.component.scss"],
})
export class BlockCurrentStatusComponent implements OnInit {
	StatusItems: iStatusItems = fake_StatusItems;
	constructor() {}

	ngOnInit(): void {}
}
interface iItem {
	title: string;
	class: string;
	total: number;
	percent: number;
}
interface iStatusItems {
	success: iItem;
	warning: iItem;
	danger: iItem;
}
const fake_StatusItems: iStatusItems = {
	danger: { title: "發生異常", class: "danger", total: 0, percent: 0 },
	warning: { title: "正在測試", class: "warning", total: 10, percent: 10 },
	success: { title: "正常運作", class: "success", total: 90, percent: 90 },
};
