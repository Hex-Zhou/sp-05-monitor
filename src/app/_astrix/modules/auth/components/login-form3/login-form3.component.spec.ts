import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginForm3Component } from "./login-form3.component";
describe("LoginForm3Component", () => {
	let component: LoginForm3Component;
	let fixture: ComponentFixture<LoginForm3Component>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoginForm3Component],
		}).compileComponents();
	});
	beforeEach(() => {
		fixture = TestBed.createComponent(LoginForm3Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
