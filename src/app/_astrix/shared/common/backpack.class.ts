import { TranslateModule } from "@ngx-translate/core";
import { AstrixSharedModule } from "./../astrix-shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InlineSVGModule } from "ng-inline-svg-2";

enum urlEnum {
	dashboard = "/dev/dashboard",
	login = "/dev/auth/login",
}
enum picEnum {
	logo = "assets/_astrix/img/xj-logo.png",
}
export class BackPack {
	static enums = {
		url: urlEnum,
		pic: picEnum,
	};
	static commonModules = [
		InlineSVGModule,
		FormsModule,
		ReactiveFormsModule,
		AstrixSharedModule,
		TranslateModule,
	];
	constructor() {}
}
