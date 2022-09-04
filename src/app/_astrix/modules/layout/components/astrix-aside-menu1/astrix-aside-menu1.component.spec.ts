import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AstrixAsideMenu1Component } from "./astrix-aside-menu1.component";
describe("AstrixAsideMenu1Component", () => {
	let component: AstrixAsideMenu1Component;
	let fixture: ComponentFixture<AstrixAsideMenu1Component>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AstrixAsideMenu1Component],
		}).compileComponents();
	});
	beforeEach(() => {
		fixture = TestBed.createComponent(AstrixAsideMenu1Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
