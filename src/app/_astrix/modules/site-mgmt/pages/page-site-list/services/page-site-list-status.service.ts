import { PageSiteListFakeApiService } from "./page-site-list-fake-api.service";
import { filter } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { PageSiteList } from "../data/page-site-list.data";

@Injectable({
	providedIn: "root",
})
export class PageSiteListStatusService {
	private SiteList$ = new BehaviorSubject<iWebSite[] | null>(null);
	constructor(private api: PageSiteListFakeApiService) {}
	getSiteList$() {
		return this.SiteList$.asObservable().pipe(filter((e) => e !== null));
	}
	nextSiteList$(siteList: iWebSite[]) {
		this.SiteList$.next(siteList);
	}
	refreshSiteList$FormAPI() {
		this.api.getAll().subscribe((r) => this.nextSiteList$(r));
	}
}
interface iWebSite extends PageSiteList.iWebSite {}
