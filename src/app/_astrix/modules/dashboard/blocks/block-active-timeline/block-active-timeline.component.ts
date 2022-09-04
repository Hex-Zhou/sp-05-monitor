import { Component, OnInit } from "@angular/core";
@Component({
	selector: "app-block-active-timeline",
	templateUrl: "./block-active-timeline.component.html",
	styleUrls: ["./block-active-timeline.component.scss"],
})
export class BlockActiveTimelineComponent implements OnInit {
	timelineList: iTimelineItem[] = fakeTimelineList;
	constructor() {}
	ngOnInit(): void {}
}
interface iTimelineItem {
	desc: string;
	time: string;
	status: "success" | "danger" | "warning" | "primary" | "info";
}
const fakeTimelineList: iTimelineItem[] = [
	{ desc: "夏洛特商城 連線異常", time: "07:08", status: "warning" },
	{ desc: "365BMC品牌行銷策略數位手扎 連線異常", time: "08:20", status: "danger" },
	{ desc: "夏洛特商城 連線異常", time: "09:11", status: "success" },
	{ desc: "岡山教會 SSL已過期", time: "11:11", status: "info" },
	{ desc: "百耘建設管理系統 成功連線", time: "12:25", status: "success" },
	{ desc: "金火車庫 成功連線", time: "13:08", status: "success" },
];
