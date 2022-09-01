import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { BackPack } from "src/app/_astrix/shared/common/backpack.class";
@Component({
	templateUrl: "./dynamic-site-list-table.component.html",
	styleUrls: ["./dynamic-site-list-table.component.scss"],
})
export class DynamicSiteListTableComponent implements OnInit, AfterViewInit {
	dtOptions = BackPack.configs.dataTable.a;
	websiteList: iWebSite[] = fakeWebsites;
	//
	constructor(private cdr: ChangeDetectorRef) {}
	ngAfterViewInit(): void {}
	ngOnInit(): void {}
	//
	getDuoTune = BackPack.getDuoTune;
}
interface iWebSite {
	title: string;
	link: string;
}
const fakeWebsites: iWebSite[] = [
	{
		title: "億口香 Yi Kou Siang",
		link: "https://yks-yummy.com/",
	},
	{
		title: "365BMC品牌行銷策略數位手扎",
		link: "https://365bmc.com.tw/",
	},
	{
		title: "蘭花生育監控及產銷戰情整合服務",
		link: "https://dev.twgo.asia/orchid/",
	},
	{
		title: "夏洛特商城",
		link: "https://yht-bio.com/",
	},
	{
		title: "岡山教會",
		link: "https://kspc.org.tw/",
	},
];
