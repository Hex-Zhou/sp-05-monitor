import { iSite } from "./../../../../../shared/models/site.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";
import { PageSiteListFakeApiService } from "./page-site-list-fake-api.service";
@Injectable({
  providedIn: "root",
})
export class PageSiteListStatusService {
  private SiteListSubject = new BehaviorSubject<iSite[] | null>(null);
  constructor(private api: PageSiteListFakeApiService) {}
  getSiteList$() {
    return this.SiteListSubject.asObservable().pipe(filter(e => e !== null));
  }
  nextSiteList$(siteList: iSite[]) {
    this.SiteListSubject.next(siteList);
  }
  nextSiteList$ByAPI() {
    this.api.getAll().subscribe(r => {
      this.nextSiteList$(r);
    });
  }
}
