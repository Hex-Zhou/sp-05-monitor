import { BackPack } from "./../_astrix/shared/common/backpack.class";
import { Routes } from "@angular/router";

const Routing: Routes = [
	{
		path: "dev",
		loadChildren: () => import("../_astrix/astrix.module").then((m) => m.AstrixModule),
	},
	{
		path: "dashboard",
		loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
	},
	{
		path: "builder",
		loadChildren: () => import("./builder/builder.module").then((m) => m.BuilderModule),
	},
	{
		path: "crafted/pages/profile",
		loadChildren: () => import("../modules/profile/profile.module").then((m) => m.ProfileModule),
	},
	{
		path: "crafted/account",
		loadChildren: () => import("../modules/account/account.module").then((m) => m.AccountModule),
	},
	{
		path: "crafted/pages/wizards",
		loadChildren: () => import("../modules/wizards/wizards.module").then((m) => m.WizardsModule),
	},
	{
		path: "crafted/widgets",
		loadChildren: () =>
			import("../modules/widgets-examples/widgets-examples.module").then((m) => m.WidgetsExamplesModule),
	},
	{
		path: "apps/chat",
		loadChildren: () => import("../modules/apps/chat/chat.module").then((m) => m.ChatModule),
	},
	{
		path: "",
		redirectTo: BackPack.enums.route.dashboard,
		pathMatch: "full",
	},
	{
		path: "**",
		redirectTo: "error/404",
	},
];

export { Routing };
