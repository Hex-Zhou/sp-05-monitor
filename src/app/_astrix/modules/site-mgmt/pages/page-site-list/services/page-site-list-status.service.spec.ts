import { TestBed } from "@angular/core/testing";
import { PageSiteListStatusService } from "./page-site-list-status.service";
describe("PageSiteListStatusService", () => {
	let service: PageSiteListStatusService;
	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PageSiteListStatusService);
	});
	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
