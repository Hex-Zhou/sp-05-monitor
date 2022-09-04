import { BackPack } from "./../../../../../shared/common/backpack.class";
import { Component, OnInit } from "@angular/core";
@Component({
	selector: "app-page-login2",
	templateUrl: "./page-login2.component.html",
	styleUrls: ["./page-login2.component.scss"],
})
export class PageLogin2Component implements OnInit {
	PIC = BackPack.enums.pic;
	constructor() {}
	ngOnInit(): void {}
}
