import { BackPack } from "./common/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedCommonCardComponent } from "./components/shared-common-card/shared-common-card.component";
import { BsColorDirective } from "./directives/bs-color.directive";

@NgModule({
	declarations: [SharedCommonCardComponent, BsColorDirective],
	imports: [CommonModule],
	exports: [SharedCommonCardComponent, BsColorDirective],
})
export class AstrixSharedModule {}
