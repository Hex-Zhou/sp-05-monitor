import { BackPack } from "./../../../../shared/common/backpack.class";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
@Component({
	selector: "app-astrix-aside-menu1",
	templateUrl: "./astrix-aside-menu1.component.html",
	styleUrls: ["./astrix-aside-menu1.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AstrixAsideMenu1Component implements OnInit {
	routeList = BackPack.constants.routeTree;
	constructor() {}
	ngOnInit(): void {}
}
