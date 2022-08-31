import { BackPack } from "./../../shared/common/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./pages/login/login.component";

@NgModule({
	declarations: [LoginComponent],
	imports: [BackPack.commonModules, CommonModule, AuthRoutingModule],
})
export class AuthModule {}
