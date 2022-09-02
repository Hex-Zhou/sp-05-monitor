import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { PageSiteList } from "../data/page-site-list.data";

@Injectable({
	providedIn: "root",
})
export class PageSiteListFakeApiService {
	private localKey = "siteList";
	private list: iType[] = PageSiteList.fakeWebsites;
	constructor() {
		if (this._getLocal()) {
			this.list = this._getLocal();
		}
	}
	getAll() {
		return of(this.list);
	}
	getByID(id: number) {
		return of(this.list.find((e) => e.id === id));
	}
	edit(item: iType) {
		const idx = this.list.findIndex((e) => e.id === item.id);
		if (idx > -1) {
			this.list[idx] = item;
			this._setLocal(this.list);
			return of(true);
		} else {
			return of(false);
		}
	}
	post(item: iType) {
		// id = last item's id +1
		item.id = (this.list[this.list.length - 1].id || 0) + 1;
		this.list.push(item);
		this._setLocal(this.list);
		return of(true);
	}
	delete(id: number) {
		const idx = this.list.findIndex((e) => e.id === id);
		if (idx > -1) {
			this.list.splice(idx, 1);
			this._setLocal(this.list);
			return of(true);
		} else {
			return of(false);
		}
	}

	private _getLocal() {
		let result;
		try {
			result = JSON.parse(localStorage.getItem(this.localKey)!);
		} catch {
			result = false;
		}
		return result;
	}
	private _setLocal(item: any) {
		localStorage.setItem(this.localKey, JSON.stringify(item));
	}
}
interface iType extends PageSiteList.iWebSite {}
