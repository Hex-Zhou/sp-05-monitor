import { myRoutesTree } from "./../data/route-tree.data";
import { BSAllColor } from "./../models/bs-all-color.type";
import { RoutePathEnum } from "./enum/route-path.enum";
import { PicPathEnum } from "./enum/pic-path.enum";
import { TranslateModule } from "@ngx-translate/core";
import { AstrixSharedModule } from "./../astrix-shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InlineSVGModule } from "ng-inline-svg-2";
import { NgApexchartsModule } from "ng-apexcharts";
import { getCSSVariableValue } from "src/app/_metronic/kt/_utils";
import { DataTablesModule } from "angular-datatables";
import { dataTableConfig } from "./config/dataTables.config";
import { DuoTuneList } from "../models/duotune.type";
import { getDuotune } from "./function/duotune.func";

export class BackPack {
	/**
	 * ```
	 * 用途: 整理所有枚舉類
	 * ```
	 */
	static enums = {
		route: RoutePathEnum,
		pic: PicPathEnum,
	};
	static constants = {
		routeTree: myRoutesTree,
	};
	static configs = { dataTable: dataTableConfig };
	/**
	 * ```
	 * 時機: 建立Module後
	 *
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
	 * 用途: 取代原本的讀取CSS顏色功能
	 * ```
	 */
	static getColor(color: BSAllColor) {
		return getCSSVariableValue(`--bs-${color}`);
	}
	static getDuoTune(type: DuoTuneList, num: number) {
		return getDuotune(type, num);
	}
	constructor() {}
}
