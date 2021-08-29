import { Component, OnInit } from '@angular/core';

import { ChartType } from './charts.model';

import {
  linewithDataChart, gradientLineChart, stackedAreaChart, basicColumChart, columnlabelChart, mixedChart, basicBarChart,
  nagativeValueBarChart, lineColumAreaChart, multipleYAxisChart, simpleBubbleChart, dBubbleChart, scatterXYChart, scatterChart,
  simplePieChart, gradientDonutChart, patternedDonutChart, basicRadialBarChart, multipleRadialBars, strokedCircularGuage
} from './data';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

/**
 * Charts-component -  handling the apex-charts with sidebar and content
 */
export class ChartsComponent implements OnInit {

  // breadcrumb items
  breadCrumbItems: Array<{}>;

  linewithDataChart: ChartType;
  gradientLineChart: ChartType;
  stackedAreaChart: ChartType;
  basicColumChart: ChartType;
  columnlabelChart: ChartType;
  mixedChart: ChartType;
  basicBarChart: ChartType;
  nagativeValueBarChart: ChartType;
  lineColumAreaChart: ChartType;
  multipleYAxisChart: ChartType;
  simpleBubbleChart: ChartType;
  dBubbleChart: ChartType;
  scatterXYChart: ChartType;
  scatterChart: ChartType;
  simplePieChart: ChartType;
  gradientDonutChart: ChartType;
  patternedDonutChart: ChartType;
  basicRadialBarChart: ChartType;
  multipleRadialBars: ChartType;
  strokedCircularGuage: ChartType;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Components', path: '/' }, { label: 'Charts', active: true }];

    /**
     * Fethches the chart data
     */
    this._fetchData();
  }

  /**
   * Fetches the chart data
   */
  private _fetchData() {
    this.linewithDataChart = linewithDataChart;
    this.gradientLineChart = gradientLineChart;
    this.stackedAreaChart = stackedAreaChart;
    this.basicColumChart = basicColumChart;
    this.columnlabelChart = columnlabelChart;
    this.mixedChart = mixedChart;
    this.basicBarChart = basicBarChart;
    this.nagativeValueBarChart = nagativeValueBarChart;
    this.lineColumAreaChart = lineColumAreaChart;
    this.multipleYAxisChart = multipleYAxisChart;
    this.simpleBubbleChart = simpleBubbleChart;
    this.dBubbleChart = dBubbleChart;
    this.scatterXYChart = scatterXYChart;
    this.scatterChart = scatterChart;
    this.simplePieChart = simplePieChart;
    this.gradientDonutChart = gradientDonutChart;
    this.patternedDonutChart = patternedDonutChart,
    this.basicRadialBarChart = basicRadialBarChart;
    this.multipleRadialBars = multipleRadialBars;
    this.strokedCircularGuage = strokedCircularGuage;
  }
}
