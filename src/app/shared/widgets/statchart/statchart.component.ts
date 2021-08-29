import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-statchart',
  templateUrl: './statchart.component.html',
  styleUrls: ['./statchart.component.scss']
})
export class StatchartComponent implements OnInit {

  @Input() mainTitle: string;
  @Input() value: number;
  @Input() subValue: string;
  @Input() chartColors: string;

  @ViewChild('chart', { static: true }) chartRef: any;

  chartData: {};
  colors: {};
  series: {};
  markers: {};
  fill: {};
  tooltip: {};
  stroke: {};

  constructor() { }

  ngOnInit() {
    this.chartData = {
      type: 'area',
      height: 45,
      width: 90,
      sparkline: {
        enabled: true
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      },
    };

    this.colors = [this.chartColors];

    this.series = [{
      data: [25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]
    }];

    this.markers = {
      size: 0
    };

    this.tooltip = {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => {
            return '';
          }
        }
      },
      marker: {
        show: false
      }
    };

    this.fill = {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [45, 100]
      },
    };

    this.stroke = {
      width: 2,
      curve: 'smooth'
    };
  }

}
