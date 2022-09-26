import { AstrixLayoutModule } from "./modules/layout/layout.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackPack } from "./shared/common/backpack.class";
import { AstrixRoutingModule } from "./astrix-routing.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { SiteMgmtModule } from "./modules/site-mgmt/site-mgmt.module";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";
import { PlaygroundModule } from "./modules/playground/playground.module";
@NgModule({
  declarations: [],
  imports: [
    AstrixLayoutModule,
    SiteMgmtModule,
    PlaygroundModule,
    DashboardModule,
    CommonModule,
    AstrixRoutingModule,
    BackPack.commonModules,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class AstrixModule {}
