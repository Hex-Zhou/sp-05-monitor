import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackPack } from "./../../shared/common/backpack.class";

import { AuthRoutingModule } from "./auth-routing.module";
import { PageLogin1Component } from "./pages/login/page-login1/page-login1.component";
import { PageLogin2Component } from "./pages/login/page-login2/page-login2.component";
import { LoginForm1Component } from './components/login-form1/login-form1.component';
import { LoginForm2Component } from './components/login-form2/login-form2.component';
import { LoginForm3Component } from './components/login-form3/login-form3.component';

@NgModule({
	declarations: [PageLogin1Component, PageLogin2Component, LoginForm1Component, LoginForm2Component, LoginForm3Component],
	imports: [BackPack.commonModules, CommonModule, AuthRoutingModule],
})
export class AuthModule {}
