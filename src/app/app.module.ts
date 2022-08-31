import { HttpClientModule } from "@angular/common/http";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InlineSVGModule } from "ng-inline-svg-2";
import { ClipboardModule } from "ngx-clipboard";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthService } from "./modules/auth/services/auth.service";
// #fake-start#
import { AuthModule } from "./_astrix/modules/auth/auth.module";
import { FakeAPIService } from "./_fake/fake-api.service";
// #fake-end#

function appInitializer(authService: AuthService) {
	return () => {
		return new Promise((resolve) => {
			//@ts-ignore
			authService.getUserByToken().subscribe().add(resolve);
		});
	};
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		TranslateModule.forRoot(),
		HttpClientModule,
		ClipboardModule,
		// #fake-start#
		environment.isMockEnabled
			? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
					passThruUnknownUrl: true,
					dataEncapsulation: false,
			  })
			: [],
		// #fake-end#
		AppRoutingModule,
		InlineSVGModule.forRoot(),
		NgbModule,
	],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: appInitializer,
			multi: true,
			deps: [AuthService],
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
