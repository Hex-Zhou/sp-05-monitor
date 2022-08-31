import { BackPack } from "./../../shared/common/backpack.class";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
const url = BackPack.enums.url;
const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{
		path: "",
		redirectTo: url.login,
		pathMatch: "full",
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
