import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { BackPack } from "../../common/backpack.class";
/**
 * ng-content 可填入 footer , body , toolbar
 */
@Component({
	selector: "app-shared-common-card",
	templateUrl: "./shared-common-card.component.html",
	styleUrls: ["./shared-common-card.component.scss"],
})
export class SharedCommonCardComponent implements OnInit {
	@Input() mainTitle: string = "標題";
	@Input() subtitle: string = "子標題";

	/**
	 * ```
	 * 用途: 輸入 打算顯示的元件名
	 * ```
	 */
	@Input() displayList: Partial<keyof iDisplay>[] = [];
	/**
	 * ```
	 * 用途: 所有用來判別顯示的boolean
	 * ```
	 */
	isDisplay: iDisplay = { ...initIsDisplay };
	//
	constructor(private cdr: ChangeDetectorRef) {}
	ngOnInit(): void {
		this._setIsDisplayTrue();
	}
	/**
	 * ```
	 * 時機: Firth @Input
	 *
	 * 用途: 將 展示boolean 依照 displayList 改為 true
	 * ```
	 */
	private _setIsDisplayTrue() {
		this.displayList.forEach((e) => {
			this.isDisplay[e] = true;
		});
		this.cdr.detectChanges();
	}
}
//
interface iDisplay {
	header: boolean;
	subtitle: boolean;
	toolbar: boolean;
	footer: boolean;
}

const initIsDisplay: iDisplay & Omit<any, keyof iDisplay> = {
	header: false,
	subtitle: false,
	toolbar: false,
	footer: false,
};
