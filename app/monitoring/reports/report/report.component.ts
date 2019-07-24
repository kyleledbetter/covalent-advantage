import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { ChartThemeSelectorService } from '../../../utilities/theme';
import { getThemes } from '@covalent/echarts/base';

@Component({
  selector: 'covalent-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  tableColumns: ITdDataTableColumn[] = [
    { name: 'first_name',  label: 'First name', width: 150 },
    { name: 'last_name', label: 'Last name', width: { min: 150, max: 250 }},
    { name: 'gender', label: 'Gender'},
    { name: 'email', label: 'Email', width: 250},
  ];
  // Chart data
  chart1: any;
  tableData: any[];
  // Theme
  themes: string[] = getThemes();
  selectedTheme: string = this.themes[0];

  constructor(
    private _router: Router,
    private _chartThemeSelectorService: ChartThemeSelectorService,
    public themeSelector: ChartThemeSelectorService,
  ) {
    this._chartThemeSelectorService.select(this.selectedTheme)
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
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        },
        show: false
      },
      legend: {
        data: ['蒸发量', '降水量', '平均温度'],
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
          },
          splitLine: {
            show: false
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
          name: 'Systems on GCA',
          type: 'bar',
          data: [
            {
              value: 15.3,
              itemStyle: { color: '#3F97C4' },
            },
            {
              value: 16.5,
              itemStyle: { color: '#3F97C4' },
            },
            {
              value: 25,
              itemStyle: { color: '#3F97C4' },
            },
            {
              value: 35.6,
              itemStyle: { color: '#3F97C4' },
            },
            {
              value: 37.8,
              itemStyle: { color: '#F4774D' },
            },
            {
              value: 48,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 56,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 64,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 72,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 80,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 96,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            },
            {
              value: 100,
              itemStyle: { color: 'rgba(0,0,0,0.1)' },
            }
          ],
        },
        {
          name: 'Target',
          type: 'line',
          itemStyle: { color: '#F6C863' },
          yAxisIndex: 1,
          data: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 100]
        }
      ]
    };
    //table
    this.tableData = 
      [{
        "balance": 7454.6,
        "email": "sclutterham0@123-reg.co.uk",
        "first_name": "Sully",
        "gender": "Male",
        "ip_address": "158.0.165.138",
        "last_name": "Clutterham",
        "date": "2013-01-16T00:41:39.906Z"
      },
      {
        "balance": 3561.4,
        "email": "mevason1@usatoday.com",
        "first_name": "Mateo",
        "gender": "Male",
        "ip_address": "68.147.207.137",
        "last_name": "Evason",
        "date": "2015-07-06T15:42:57.823Z"
      },
      {
        "balance": 4456.3,
        "email": "lgardener2@wordpress.org",
        "first_name": "Lira",
        "gender": "Female",
        "ip_address": "96.85.6.31",
        "last_name": "Gardener",
        "date": "2015-06-01T12:55:11.330Z"
      },
      {
        "balance": 5938,
        "email": "edunckley3@instagram.com",
        "first_name": "Edvard",
        "gender": "Male",
        "ip_address": "233.189.117.211",
        "last_name": "Dunckley",
        "date": "2019-03-13T17:12:21.447Z"
      },
      {
        "balance": 4241.6,
        "email": "gsouza4@squidoo.com",
        "first_name": "Gwynne",
        "gender": "Female",
        "ip_address": "164.226.80.40",
        "last_name": "Souza",
        "date": "2014-01-05T04:28:53.358Z"
      },
      {
        "balance": 6558,
        "email": "sfurmedge5@furl.net",
        "first_name": "Sena",
        "gender": "Female",
        "ip_address": "192.214.177.38",
        "last_name": "Furmedge"
      },
      {
        "balance": 3159.2,
        "email": "cdykes6@china.com.cn",
        "first_name": "Christian",
        "gender": "Male",
        "ip_address": "147.35.25.192",
        "last_name": "Dykes"
      },
      {
        "balance": 1471,
        "email": "sklagge7@dell.com",
        "first_name": "Sada",
        "gender": "Female",
        "ip_address": "143.193.248.153",
        "last_name": "Klagge"
      },
      {
        "balance": 9969.7,
        "email": "glewerenz8@europa.eu",
        "first_name": "Genia",
        "gender": "Female",
        "ip_address": "104.0.250.224",
        "last_name": "Lewerenz"
      },
      {
        "balance": 7253.5,
        "email": "ddemarchi9@taobao.com",
        "first_name": "Daloris",
        "gender": "Female",
        "ip_address": "124.166.67.100",
        "last_name": "De Marchi"
      }
    ];
  }

  selectChartTheme(theme: string): void {
    this._chartThemeSelectorService.select(theme);
  }
}
