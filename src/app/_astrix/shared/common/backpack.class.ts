import { ngbModalOptions } from "./config/ngbModal.config";
import { myRoutesTree } from "./data/route-tree.data";
import { tyBSColor } from "../types/bs-all-color.type";
import { RoutePathEnum } from "./enum/route-path.enum";
import { PicPathEnum } from "./enum/pic-path.enum";
import { TranslateModule } from "@ngx-translate/core";
import { AstrixSharedModule } from "./../astrix-shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InlineSVGModule } from "ng-inline-svg-2";
import { NgApexchartsModule } from "ng-apexcharts";
import { getCSSVariableValue } from "src/app/_metronic/kt/_utils";
import { DataTablesModule } from "angular-datatables";
import { dataTableConfigs } from "./config/dataTables.config";
import { tyDuoTune } from "../types/duotune.type";
import { getDuotune } from "./function/duotune.func";
import { swalDelete } from "./function/swal.func";
export class BackPack {
	/**
	 * ```
	 * 用途: 匯集所有枚舉類
	 * ```
	 */
	static enums = {
		route: RoutePathEnum,
		pic: PicPathEnum,
	};
	/**
	 * ```
	 * 用途: 匯集所有固定常數
	 * ```
	 */
	static constants = {
		routeTree: myRoutesTree,
	};
	/**
	 * ```
	 * 用途: 匯集所有設定檔
	 * ```
	 */
	static configs = { dataTable: dataTableConfigs, ngbModal: ngbModalOptions };
	/**
	 * ```
	 * 時機: 建立Module後
	 * 用途: import 每個Module都要用的Mod
	 * ```
	 */
	static commonModules = [
		DataTablesModule,
		InlineSVGModule,
		FormsModule,
		ReactiveFormsModule,
		AstrixSharedModule,
		TranslateModule,
		NgApexchartsModule,
	];
	/**
	 * ```
	 * 用途: 默認的swal格式清單
	 * ```
	 */
	static swalDef = {
		delete: swalDelete,
	};
	/**
	 * ```
	 * 用途: 取代原本的讀取CSS顏色功能
	 * ```
	 */
	static getColor(color: tyBSColor) {
		return getCSSVariableValue(`--bs-${color}`);
	}
	/**
	 * ```
	 * 用途: 用更容易的方式取得內建svg的路徑
	 * ```
	 */
	static getDuoTune(type: tyDuoTune, num: number) {
		return getDuotune(type, num);
	}
	constructor() {}
}
