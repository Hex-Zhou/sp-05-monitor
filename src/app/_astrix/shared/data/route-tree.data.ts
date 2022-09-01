import { RoutePathEnum } from "../common/enum/route-path.enum";
import { getDuotune } from "../common/function/duotune.func";
import { iRouteTree } from "../models/route-tree.model";
const route = RoutePathEnum;
export const myRoutesTree: iRouteTree[] = [
	{ title: "首頁", link: route.dashboard, root: true, icon: getDuotune("abstract", 20) },
	{
		icon: getDuotune("coding", 10),
		root: true,
		title: "網站管理",
		children: [{ title: "網站列表", link: route.siteList }],
	},
];
