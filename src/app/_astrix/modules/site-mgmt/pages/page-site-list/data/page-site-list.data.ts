export namespace PageSiteList {
	export interface iWebSite {
		id?: number;
		title: string;
		link: string;
	}
	export const fakeWebsites: iWebSite[] = [
		{
			id: 1,
			title: "億口香 Yi Kou Siang",
			link: "https://yks-yummy.com/",
		},
		{ id: 2, title: "365BMC品牌行銷策略數位手扎", link: "https://365bmc.com.tw/" },
		{ id: 3, title: "蘭花生育監控及產銷戰情整合服務", link: "https://dev.twgo.asia/orchid/" },
		{ id: 4, title: "夏洛特商城", link: "https://yht-bio.com/" },
		{ id: 5, title: "岡山教會", link: "https://kspc.org.tw/" },
	];
}
