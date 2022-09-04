import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackPack } from "./../../shared/common/backpack.class";
import { LayoutRoutingModule } from "./layout-routing.module";
import { AstrixAsideMenu1Component } from "./components/astrix-aside-menu1/astrix-aside-menu1.component";
@NgModule({
	declarations: [AstrixAsideMenu1Component],
	imports: [CommonModule, LayoutRoutingModule, BackPack.commonModules],
	exports: [AstrixAsideMenu1Component],
})
export class AstrixLayoutModule {}
