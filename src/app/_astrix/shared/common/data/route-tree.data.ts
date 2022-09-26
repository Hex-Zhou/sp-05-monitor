import { iRouteTree } from "../../models/route-tree.model";
import { RoutePathEnum } from "../enum/route-path.enum";
import { getDuotune } from "../function/duotune.func";
const route = RoutePathEnum;
export const myRoutesTree: iRouteTree[] = [
  { title: "首頁", link: route.dashboard, root: true, icon: getDuotune("abstract", 20) },
  {
    icon: getDuotune("coding", 10),
    root: true,
    title: "網站管理",
    children: [{ title: "網站列表", link: route.siteList }],
  },
  {
    icon: getDuotune("abstract", 10),
    root: true,
    title: "實驗室",
    children: [{ title: "頁面一", link: route.playGround }],
  },
];
