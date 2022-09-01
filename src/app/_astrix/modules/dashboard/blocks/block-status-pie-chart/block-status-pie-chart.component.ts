import { BackPack } from "./../../../../shared/common/backpack.class";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ChartComponent } from "ng-apexcharts";
import { getCSSVariableValue } from "src/app/_metronic/kt/_utils";

@Component({
	selector: "app-block-status-pie-chart",
	templateUrl: "./block-status-pie-chart.component.html",
	styleUrls: ["./block-status-pie-chart.component.scss"],
})
export class BlockStatusPieChartComponent implements OnInit {
	@ViewChild("chart") chart: ChartComponent;
	chartOptions: any = {};
	constructor() {
		this.chartOptions = getChartOptions(320);
	}

	ngOnInit(): void {}
}

function getChartOptions(height: number) {
	const labelColor = getCSSVariableValue("--bs-gray-500");
	const borderColor = getCSSVariableValue("--bs-gray-200");
	const successColor = BackPack.getColor("success");
	const warningColor = BackPack.getColor("warning");
	const dangerColor = BackPack.getColor("danger");
	return {
		series: [90, 10, 5],
		chart: {
			fontFamily: "inherit",
			type: "pie",
			height: height,
			toolbar: {
				show: false,
			},
		},
		labels: ["成功", "過期", "失敗"],
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "30%",
				borderRadius: 5,
			},
		},
		legend: {
			show: true,
			fontSize: "16px",
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ["transparent"],
		},

		fill: {
			opacity: 1,
		},
		states: {
			normal: {
				filter: {
					type: "none",
					value: 0,
				},
			},
			hover: {
				filter: {
					type: "none",
					value: 0,
				},
			},
			active: {
				allowMultipleDataPointsSelection: false,
				filter: {
					type: "none",
					value: 0,
				},
			},
		},
		tooltip: {
			style: {
				fontSize: "16px",
			},
			y: {
				formatter: function (val: number) {
					return "共計" + val + " 個";
				},
			},
		},
		colors: [successColor, warningColor, dangerColor],
	};
}
