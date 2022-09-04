import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription, first } from "rxjs";
import { AuthService, UserModel } from "src/app/modules/auth";
import { BackPack } from "src/app/_astrix/shared/common/backpack.class";
@Component({
	selector: "app-login-form1",
	templateUrl: "./login-form1.component.html",
	styleUrls: ["./login-form1.component.scss"],
})
export class LoginForm1Component implements OnInit, OnDestroy {
	PIC = BackPack.enums.pic;
	defaultAuth: any = {
		email: "admin@demo.com",
		password: "demo",
	};
	loginForm: FormGroup;
	hasError: boolean;
	returnUrl: string;
	isLoading$: Observable<boolean>;
	private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.isLoading$ = this.authService.isLoading$;
		if (this.authService.currentUserValue) {
			this.router.navigate(["/"]);
		}
	}
	ngOnInit(): void {
		this.initForm();
		this.returnUrl = this.route.snapshot.queryParams["returnUrl".toString()] || "/";
	}
	get f() {
		return this.loginForm.controls;
	}
	initForm() {
		this.loginForm = this.fb.group({
			email: [
				this.defaultAuth.email,
				Validators.compose([
					Validators.required,
					Validators.email,
					Validators.minLength(3),
					Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
				]),
			],
			password: [
				this.defaultAuth.password,
				Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
			],
		});
	}
	submit() {
		this.hasError = false;
		const loginSubscr = this.authService
			.login(this.f.email.value, this.f.password.value)
			.pipe(first())
			.subscribe((user: UserModel | undefined) => {
				if (user) {
					this.router.navigate([this.returnUrl]);
				} else {
					this.hasError = true;
				}
			});
		this.unsubscribe.push(loginSubscr);
	}
	ngOnDestroy() {
		this.unsubscribe.forEach((sb) => sb.unsubscribe());
	}
}
