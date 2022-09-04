import { BackPack } from "./../../../../../shared/common/backpack.class";
import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
@Component({
	templateUrl: "./dynamic-damaged-site-list-table.component.html",
	styleUrls: ["./dynamic-damaged-site-list-table.component.scss"],
})
export class DynamicDamagedSiteListTableComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild(DataTableDirective, { static: false })
	dtElement: DataTableDirective;
	dtOptions = BackPack.configs.dataTable.a;
	websiteList: iWebSite[] = fakeWebsites;
	constructor(private cdr: ChangeDetectorRef) {}
	ngAfterViewInit(): void {}
	ngOnDestroy(): void {}
	ngOnInit(): void {}
}
interface iWebSite {
	title: string;
	status: "expired" | "good" | "bad";
	time: string;
	link: string;
}
const fakeWebsites: iWebSite[] = [
	{
		title: "億口香 Yi Kou Siang",
		time: "2022/08/30 10:50",
		status: "good",
		link: "https://yks-yummy.com/",
	},
	{
		title: "365BMC品牌行銷策略數位手扎",
		time: "2022/08/30 10:50",
		status: "bad",
		link: "https://365bmc.com.tw/",
	},
	{
		title: "蘭花生育監控及產銷戰情整合服務",
		time: "2022/08/30 10:50",
		status: "good",
		link: "https://dev.twgo.asia/orchid/",
	},
	{
		title: "夏洛特商城",
		time: "2022/08/30 10:50",
		status: "expired",
		link: "https://yht-bio.com/",
	},
	{
		title: "岡山教會",
		time: "2022/08/30 10:50",
		status: "good",
		link: "https://kspc.org.tw/",
	},
];
