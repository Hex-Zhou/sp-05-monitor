import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-block-damaged-site-list",
	templateUrl: "./block-damaged-site-list.component.html",
	styleUrls: ["./block-damaged-site-list.component.scss"],
})
export class BlockDamagedSiteListComponent implements OnInit {
	websiteList: iWebSite[] = fakeWebsites;
	constructor() {}

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
