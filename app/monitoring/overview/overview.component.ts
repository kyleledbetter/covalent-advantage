import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'covalent-monitoring-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class MonitoringOverviewComponent implements OnInit {
// Chart data
  chart5: any;
  data: any = [["2015-01-01",65],["2015-01-02",79],["2015-01-03",200],["2015-01-04",226],["2015-01-05",122],["2015-01-06",60],["2015-01-07",85],["2015-01-08",190],["2015-01-09",105],["2015-01-10",208],["2015-01-11",59],["2015-01-12",160],["2015-01-13",211],["2015-01-14",265],["2015-01-15",386],["2015-01-16",118],["2015-01-17",89],["2015-01-18",94],["2015-01-19",77],["2015-01-20",113],["2015-01-22",143],["2015-01-23",257],["2015-01-24",117],["2015-01-25",185],["2015-01-26",119],["2015-01-28",65],["2015-01-29",87],["2015-01-31",60],["2015-02-01",108],["2015-02-02",188],["2015-02-03",143],["2015-02-05",62],["2015-02-06",100],["2015-02-09",152],["2015-02-10",166],["2015-02-11",55],["2015-02-12",59],["2015-02-13",175],["2015-02-14",293],["2015-02-15",326],["2015-02-16",153],["2015-02-18",73],["2015-02-19",267],["2015-02-20",183],["2015-02-21",394],["2015-02-22",158],["2015-02-23",86],["2015-02-24",207]];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    // chart5
    this.chart5 = {
          title: {
              text: ''
          },
          grid: {
            borderColor: 'transparent',
            show: false,
            left: '6%',
            right: '6%',
            bottom: '15%',
            top: '10%',
          },
          tooltip: {
              trigger: 'axis'
          },
          xAxis: {
              data: this.data.map(function (item) {
                  return item[0];
              }),
              axisLine: {
                lineStyle: {
                  color: '#aaa',
                },
              },
          },
          yAxis: {
              splitLine: {
                  show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#aaa',
                },
              },
          },
          toolbox: {
              left: 'center',
              feature: {
                  dataZoom: {
                      yAxisIndex: 'none'
                  },
                  restore: {},
                  saveAsImage: {}
              }
          },
          dataZoom: [{
              startValue: '2014-06-01'
          }, {
              type: 'inside'
          }],
          visualMap: {
              top: 10,
              right: 10,
              pieces: [{
                  gt: 0,
                  lte: 50,
                  color: '#096'
              }, {
                  gt: 50,
                  lte: 100,
                  color: '#7e0023'
              }, {
                  gt: 100,
                  lte: 150,
                  color: '#ff9933'
              }, {
                  gt: 150,
                  lte: 200,
                  color: '#555'
              }, {
                  gt: 200,
                  lte: 300,
                  color: '#ff9933'
              }, {
                  gt: 300,
                  color: '#7e0023'
              }],
              outOfRange: {
                  color: '#999'
              }
          },
          series: {
              name: 'Beijing AQI',
              type: 'line',
              data: this.data.map(function (item) {
                  return item[1];
              }),
              markLine: {
                  silent: true,
                  data: [{
                      yAxis: 50
                  }, {
                      yAxis: 100
                  }, {
                      yAxis: 150
                  }, {
                      yAxis: 200
                  }, {
                      yAxis: 300
                  }]
              }
          }
      };
  }
}