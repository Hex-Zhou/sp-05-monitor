import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SharedCommonCardComponent } from "./shared-common-card.component";
describe("SharedCommonCardComponent", () => {
	let component: SharedCommonCardComponent;
	let fixture: ComponentFixture<SharedCommonCardComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SharedCommonCardComponent],
		}).compileComponents();
	});
	beforeEach(() => {
		fixture = TestBed.createComponent(SharedCommonCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
