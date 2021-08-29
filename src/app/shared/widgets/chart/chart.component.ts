import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {

  @Input() chartColors: string;
  @Input() mainTitle: string;
  @Input() subValue: string;

  chartData: {};
  stroke: {};
  fill: {};
  series: {};
  xaxis: {};
  yaxis: {};
  colors: {};
  labels: {};
  title: {};
  subtitle: {};
  tooltip: {};
  labelsSales: any;

  @ViewChild('chart', { static: true }) chartRef: any;

  constructor() { }

  ngOnInit() {
    this._fetchData();
    this.chartData = {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    };

    this.stroke = {
      width: 3,
      curve: 'smooth'
    };

    this.fill = {
      opacity: 0.2,
    };

    this.series = [{
      name: 'Data',
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39]
    }];

    this.xaxis = {
      type: 'datetime',
    };

    this.yaxis = {
      min: 0
    };
    this.labels = this.labelsSales;

    this.colors = [this.chartColors];

    this.title = {
      text: this.subValue,
      offsetX: 5,
      offsetY: 10,
      margin: 0,
      style: {
        fontSize: '24px'
      }
    };

    this.subtitle = {
      text: this.mainTitle,
      offsetX: 5,
      offsetY: 45,
      margin: 0,
      style: {
        fontSize: '16px'
      }
    };
    this.tooltip = {
      theme: 'dark',
      x: { show: false }
    };
  }

  _fetchData() {
    this.labelsSales = [];
    for (let i = 1; i <= 10; i++) {
      this.labelsSales.push('2018-09-' + i);
    }
  }
}
