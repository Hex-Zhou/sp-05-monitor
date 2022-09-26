import { BackPack } from "./../../shared/common/backpack.class";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlaygroundRoutingModule } from "./playground-routing.module";
import { PagePlayground1Component } from "./pages/page-playground1/page-playground1.component";

@NgModule({
  declarations: [PagePlayground1Component],
  imports: [CommonModule, PlaygroundRoutingModule, BackPack.commonModules],
})
export class PlaygroundModule {}
