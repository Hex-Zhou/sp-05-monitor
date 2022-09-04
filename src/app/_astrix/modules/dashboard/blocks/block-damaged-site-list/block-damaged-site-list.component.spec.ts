import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BlockDamagedSiteListComponent } from "./block-damaged-site-list.component";
describe("BlockDamagedSiteListComponent", () => {
	let component: BlockDamagedSiteListComponent;
	let fixture: ComponentFixture<BlockDamagedSiteListComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BlockDamagedSiteListComponent],
		}).compileComponents();
	});
	beforeEach(() => {
		fixture = TestBed.createComponent(BlockDamagedSiteListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
