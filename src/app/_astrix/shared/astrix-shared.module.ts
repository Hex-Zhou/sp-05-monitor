import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedCommonCardComponent } from "./components/shared-common-card/shared-common-card.component";

@NgModule({
	declarations: [SharedCommonCardComponent],
	imports: [CommonModule],
	exports: [SharedCommonCardComponent],
})
export class AstrixSharedModule {}
