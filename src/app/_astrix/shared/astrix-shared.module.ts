import { BackPack } from "./common/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedCommonCardComponent } from "./components/shared-common-card/shared-common-card.component";
import { CtrlInvalidDirective } from "./directives/ctrl-invalid.directive";

@NgModule({
	declarations: [SharedCommonCardComponent, CtrlInvalidDirective],
	imports: [CommonModule],
	exports: [SharedCommonCardComponent, CtrlInvalidDirective],
})
export class AstrixSharedModule {}
