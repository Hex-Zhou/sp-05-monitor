import { BackPack } from "./../../../../../shared/common/backpack.class";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription, first } from "rxjs";
import { AuthService, UserModel } from "src/app/modules/auth";
@Component({
	selector: "app-page-login1",
	templateUrl: "./page-login1.component.html",
	styleUrls: ["./page-login1.component.scss"],
})
export class PageLogin1Component implements OnInit {
	PIC = BackPack.enums.pic;
	// KeenThemes mock, change it to:
	// private fields
	constructor() {}
	ngOnInit(): void {}
}
