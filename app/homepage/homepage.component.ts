import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'covalent-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  // Chart data
  chart1: any;
  chart2: any;
  chart3: any;
  chart4: any;
  chart5: any;
  data: any = [["2015-01-01",65],["2015-01-02",79],["2015-01-03",200],["2015-01-04",226],["2015-01-05",122],["2015-01-06",60],["2015-01-07",85],["2015-01-08",190],["2015-01-09",105],["2015-01-10",208],["2015-01-11",59],["2015-01-12",160],["2015-01-13",211],["2015-01-14",265],["2015-01-15",386],["2015-01-16",118],["2015-01-17",89],["2015-01-18",94],["2015-01-19",77],["2015-01-20",113],["2015-01-22",143],["2015-01-23",257],["2015-01-24",117],["2015-01-25",185],["2015-01-26",119],["2015-01-28",65],["2015-01-29",87],["2015-01-31",60],["2015-02-01",108],["2015-02-02",188],["2015-02-03",143],["2015-02-05",62],["2015-02-06",100],["2015-02-09",152],["2015-02-10",166],["2015-02-11",55],["2015-02-12",59],["2015-02-13",175],["2015-02-14",293],["2015-02-15",326],["2015-02-16",153],["2015-02-18",73],["2015-02-19",267],["2015-02-20",183],["2015-02-21",394],["2015-02-22",158],["2015-02-23",86],["2015-02-24",207]];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    // chart1
    this.chart1 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
      borderColor: 'transparent',
      show: false,
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '15%',
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        },
        show: false
    },
    legend: {
        data:['蒸发量','降水量','平均温度'],
        show: false,
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#aaa',
              },
            },
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#aaa',
              },
            },
            name: 'Actual',
            min: 0,
            max: 100,
            interval: 50,
            axisLabel: {
                formatter: '{value}%'
            },
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#aaa',
              },
            },
            name: 'Target',
            min: 0,
            max: 100,
            interval: 5,
            axisLabel: {
                formatter: '{value}%'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0.03)'
                }
            }
        }
    ],
    series: [
        {
            name:'Systems on GCA',
            type:'bar',
            data: [
                {
                    value: 15.3,
                    itemStyle: {color: '#3F97C4'},
                },
                {
                    value: 16.5,
                    itemStyle: {color: '#3F97C4'},
                },
                {
                    value: 25,
                    itemStyle: {color: '#3F97C4'},
                },
                {
                    value: 35.6,
                    itemStyle: {color: '#3F97C4'},
                },
                {
                    value: 37.8,
                    itemStyle: {color: '#F4774D'},
                },
                {
                    value: 48,
                    itemStyle: {color: 'rgba(0,0,0,0.1)'},
                },
                {
                    value: 56,
                    itemStyle: {color: 'rgba(0,0,0,0.1)'},
                },
                {
                    value: 64,
                    itemStyle: {color: 'rgba(0,0,0,0.1)'},
                },
                {
                    value: 72,
                    itemStyle: {color: 'rgba(0,0,0,0.1)'},
                },
                {
                    value: 80,
                    itemStyle: {color: 'rgba(0,0,0,0.1)'},
                },
                {
                    value: 96,
                    itemStyle: {color: 'rgba(0,0,0,0.1)'},
                },
                {
                    value: 100,
                    itemStyle: {color: 'rgba(0,0,0,0.1)'},
                }
            ],
        },
        {
            name:'Target',
            type:'line',
            itemStyle: {color: '#F6C863'},
            yAxisIndex: 1,
            data: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 100]
        }
    ]
    };
    //chart2
    this.chart2 = {
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      legend: {
          data: ['Promoters', 'Detractors']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '6%',
          containLabel: true,
          show: false,
      },
      yAxis:  {
          type: 'value',
          axisLine: {
              lineStyle: {
                color: '#aaa',
              },
            },
      },
      xAxis: {
          type: 'category',
          axisLine: {
              lineStyle: {
                color: '#aaa',
              },
            },
          data: ['Jan','Feb','Mar','Apr','May','Jun','Jul']
      },
      series: [
          {
              name: 'Detractors',
              type: 'bar',
              stack: '总量',
              itemStyle: {color: '#F4774D'},
              label: {
                  normal: {
                      show: true,
                      position: 'insideRight'
                  }
              },
              data: [-23, -16, -17, -22, -15, -17, -18]
          },
          {
              name: 'Promoters',
              type: 'bar',
              itemStyle: {color: '#3F97C4'},
              stack: '总量',
              label: {
                  normal: {
                      show: true,
                      position: 'insideRight'
                  }
              },
              data: [68, 58, 61, 57, 62, 59, 58]
          },

      ]
  };
    //chart3
    this.chart3 = {
        title: {
            text: '堆叠区域图'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:['Apps','Dashboards','Notebooks','Reports','Scripts']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '6%',
            containLabel: true,
            borderColor: 'transparent',
        },
        xAxis : [
            {
                type : 'category',
                axisLine: {
                  lineStyle: {
                    color: '#aaa',
                  },
                },
                boundaryGap : false,
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],        }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine: {
                  lineStyle: {
                    color: '#aaa',
                  },
                },
            }
        ],
        series : [
            {
                name:'Reports',
                type:'line',
                stack: '总量',
                areaStyle: {},
                itemStyle: {color: '#313945'},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'Dashboards',
                type:'line',
                stack: '总量',
                areaStyle: {},
                itemStyle: {color: '#3F97C4'},
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'Notebooks',
                type:'line',
                stack: '总量',
                areaStyle: {},
                itemStyle: {color: '#6BBFC0'},
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'Scripts',
                type:'line',
                stack: '总量',
                itemStyle: {color: '#F6C863'},
                areaStyle: {normal: {}},
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'Apps',
                type:'line',
                stack: '总量',
                itemStyle: {color: '#F4774D'},
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    //chart4
    this.chart4 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['Apps', 'Dashboards', 'Notebooks', 'Reports', 'Scripts']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '6%',
            containLabel: true,
            borderColor: 'transparent',
        },
        yAxis:  {
            type: 'value',
            axisLine: {
                  lineStyle: {
                    color: '#aaa',
                  },
                },
        },
        xAxis: {
            type: 'category',
            data: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
            axisLine: {
                  lineStyle: {
                    color: '#aaa',
                  },
                },
        },
        series: [
            {
                name: 'Scripts',
                type: 'bar',
                stack: '总量',
                itemStyle: {color: '#F6C863'},
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [23, 16, 17, 22, 15, 17, 18]
            },
            {
                name: 'Reports',
                type: 'bar',
                stack: '总量',
                itemStyle: {color: '#313945'},
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [23, 16, 17, 22, 15, 17, 18]
            },
            {
                name: 'Notebooks',
                type: 'bar',
                stack: '总量',
                itemStyle: {color: '#6BBFC0'},
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [23, 16, 17, 22, 15, 17, 18]
            },
            {
                name: 'Dashboards',
                type: 'bar',
                stack: '总量',
                itemStyle: {color: '#3F97C4'},
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [23, 16, 17, 22, 15, 17, 18]
            },
            {
                name: 'Apps',
                type: 'bar',
                itemStyle: {color: '#F4774D'},
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [68, 58, 61, 57, 62, 59, 58]
            },

        ]
    };
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