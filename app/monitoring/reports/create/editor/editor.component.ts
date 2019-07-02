import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITdDataTableColumn } from '@covalent/core/data-table';

@Component({
  selector: 'covalent-create-report-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class ReportEditorComponent implements OnInit {
  tableColumns: ITdDataTableColumn[] = [
    { name: 'first_name',  label: 'First name', width: 150 },
    { name: 'last_name', label: 'Last name', width: { min: 150, max: 250 }},
    { name: 'gender', label: 'Gender'},
    { name: 'email', label: 'Email', width: 250},
  ];
  // Chart data
  chart1: any;
  tableData: any[];
  data: any[] = [["2018-01-01",85],["2018-01-02",158],["2018-01-03",74],["2018-01-04",165],["2018-01-05",113],["2018-01-06",190],["2018-01-07",122],["2018-01-10",95],["2018-01-11",159],["2018-01-12",52],["2018-01-13",117],["2018-01-14",113],["2018-01-15",180],["2018-01-16",403],["2018-01-17",209],["2018-01-18",113],["2018-01-19",149],["2018-01-21",68],["2018-01-22",162],["2018-01-23",276],["2018-01-24",195],["2018-01-26",77],["2018-01-27",114],["2018-01-28",67],["2018-01-29",165],["2018-01-30",93],["2018-01-31",188],["2018-02-01",178],["2018-02-02",85],["2018-02-05",119],["2018-02-06",158],["2018-02-07",124],["2018-02-08",84],["2018-02-10",53],["2018-02-11",142],["2018-02-12",150],["2018-02-13",242],["2018-02-14",329],["2018-02-15",429],["2018-02-16",348],["2018-02-17",118],["2018-02-18",98],["2018-02-19",92],["2018-02-20",270],["2018-02-21",311],["2018-02-22",311],["2018-02-23",255],["2018-02-24",313],["2018-02-25",404],["2018-02-28",113],["2018-03-01",68],["2018-03-02",189],["2018-03-03",268],["2018-03-04",67],["2018-03-07",70],["2018-03-08",179],["2018-03-09",127],["2018-03-10",110],["2018-03-11",195],["2018-03-13",69],["2018-03-14",64],["2018-03-15",133],["2018-03-16",145],["2018-03-17",142],["2018-03-18",85],["2018-03-19",73],["2018-03-21",62],["2018-03-22",86],["2018-03-23",186],["2018-03-24",271],["2018-03-25",255],["2018-03-26",331],["2018-03-27",285],["2018-03-28",169],["2018-03-29",63],["2018-03-30",77],["2018-03-31",183],["2018-04-01",147],["2018-04-02",133],["2018-04-03",66],["2018-04-04",91],["2018-04-05",68],["2018-04-06",98],["2018-04-07",135],["2018-04-08",223],["2018-04-09",156],["2018-04-10",246],["2018-04-11",83],["2018-04-12",133],["2018-04-13",212],["2018-04-14",270],["2018-04-15",109],["2018-04-16",90],["2018-04-17",124],["2018-04-18",182],["2018-04-19",84],["2018-04-20",84],["2018-04-21",73],["2018-04-22",85],["2018-04-23",156],["2018-04-24",156],["2018-04-25",163],["2018-04-26",69],["2018-04-27",74],["2018-04-28",83],["2018-04-29",122],["2018-04-30",139],["2018-05-01",156],["2018-05-03",93],["2018-05-04",57],["2018-05-05",54],["2018-05-06",105],["2018-05-07",82],["2018-05-08",104],["2018-05-09",84],["2018-05-10",69],["2018-05-12",74],["2018-05-13",86],["2018-05-14",59],["2018-05-15",122],["2018-05-16",92],["2018-05-17",124],["2018-05-18",171],["2018-05-19",146],["2018-05-20",113],["2018-05-21",170],["2018-05-22",183],["2018-05-23",140],["2018-05-24",104],["2018-05-25",91],["2018-05-26",77],["2018-05-27",107],["2018-05-28",121],["2018-05-29",120],["2018-05-30",192],["2018-05-31",177],["2018-06-01",130],["2018-06-02",90],["2018-06-03",117],["2018-06-04",124],["2018-06-05",157],["2018-06-06",103],["2018-06-07",51],["2018-06-08",70],["2018-06-09",87],["2018-06-10",95],["2018-06-11",74],["2018-06-12",90],["2018-06-13",116],["2018-06-14",165],["2018-06-15",178],["2018-06-16",178],["2018-06-17",104],["2018-06-18",116],["2018-06-19",116],["2018-06-20",84],["2018-06-21",96],["2018-06-22",91],["2018-06-23",115],["2018-06-24",161],["2018-06-25",138],["2018-06-26",163],["2018-06-27",68],["2018-06-28",77],["2018-06-29",161],["2018-06-30",185],["2018-07-01",172],["2018-07-02",80],["2018-07-03",248],["2018-07-04",237],["2018-07-05",165],["2018-07-06",256],["2018-07-07",216],["2018-07-08",134],["2018-07-09",63],["2018-07-10",114],["2018-07-11",77],["2018-07-12",80],["2018-07-13",64],["2018-07-14",156],["2018-07-15",140],["2018-07-16",133],["2018-07-17",186],["2018-07-18",182],["2018-07-19",106],["2018-07-20",119],["2018-07-21",68],["2018-07-22",54],["2018-07-23",82],["2018-07-24",90],["2018-07-25",134],["2018-07-26",188],["2018-07-27",194],["2018-07-28",159],["2018-07-29",159],["2018-07-30",169],["2018-07-31",244],["2018-08-01",199],["2018-08-02",163],["2018-08-03",149],["2018-08-05",80],["2018-08-06",67],["2018-08-07",162],["2018-08-08",140],["2018-08-09",143],["2018-08-10",125],["2018-08-11",76],["2018-08-12",119],["2018-08-13",70],["2018-08-14",104],["2018-08-15",109],["2018-08-16",159],["2018-08-17",124],["2018-08-18",135],["2018-08-19",150],["2018-08-20",164],["2018-08-21",169],["2018-08-22",83],["2018-08-23",155],["2018-08-24",75],["2018-08-25",59],["2018-08-26",78],["2018-08-27",136],["2018-08-28",103],["2018-08-29",104],["2018-08-30",176],["2018-08-31",89],["2018-09-01",127],["2018-09-03",54],["2018-09-04",100],["2018-09-05",140],["2018-09-06",186],["2018-09-07",200],["2018-09-08",61],["2018-09-09",109],["2018-09-10",111],["2018-09-11",114],["2018-09-12",97],["2018-09-13",94],["2018-09-14",66],["2018-09-15",54],["2018-09-16",87],["2018-09-17",80],["2018-09-18",84],["2018-09-19",117],["2018-09-20",168],["2018-09-21",129],["2018-09-22",127],["2018-09-23",64],["2018-09-24",60],["2018-09-25",144],["2018-09-26",170],["2018-09-27",58],["2018-09-28",87],["2018-09-29",70],["2018-09-30",53],["2018-10-01",92],["2018-10-02",78],["2018-10-03",123],["2018-10-04",95],["2018-10-05",54],["2018-10-06",68],["2018-10-07",200],["2018-10-08",314],["2018-10-09",379],["2018-10-10",346],["2018-10-11",233],["2018-10-14",80],["2018-10-15",73],["2018-10-16",76],["2018-10-17",132],["2018-10-18",211],["2018-10-19",289],["2018-10-20",250],["2018-10-21",82],["2018-10-22",99],["2018-10-23",163],["2018-10-24",267],["2018-10-25",353],["2018-10-26",78],["2018-10-27",72],["2018-10-28",88],["2018-10-29",140],["2018-10-30",206],["2018-10-31",204],["2018-11-01",65],["2018-11-03",59],["2018-11-04",150],["2018-11-05",79],["2018-11-07",63],["2018-11-08",93],["2018-11-09",80],["2018-11-10",95],["2018-11-11",59],["2018-11-13",65],["2018-11-14",77],["2018-11-15",143],["2018-11-16",98],["2018-11-17",64],["2018-11-18",93],["2018-11-19",282],["2018-11-23",155],["2018-11-24",94],["2018-11-25",196],["2018-11-26",293],["2018-11-27",83],["2018-11-28",114],["2018-11-29",276],["2018-12-01",54],["2018-12-02",65],["2018-12-03",51],["2018-12-05",62],["2018-12-06",89],["2018-12-07",65],["2018-12-08",82],["2018-12-09",276],["2018-12-10",153],["2018-12-11",52],["2018-12-13",69],["2018-12-14",113],["2018-12-15",82],["2018-12-17",99],["2018-12-19",53],["2018-12-22",103],["2018-12-23",100],["2018-12-25",73],["2018-12-26",155],["2018-12-27",243],["2018-12-28",155],["2018-12-29",125],["2018-12-30",65],["2019-01-01",65],["2019-01-02",79],["2019-01-03",200],["2019-01-04",226],["2019-01-05",122],["2019-01-06",60],["2019-01-07",85],["2019-01-08",190],["2019-01-09",105],["2019-01-10",208],["2019-01-11",59],["2019-01-12",160],["2019-01-13",211],["2019-01-14",265],["2019-01-15",386],["2019-01-16",118],["2019-01-17",89],["2019-01-18",94],["2019-01-19",77],["2019-01-20",113],["2019-01-22",143],["2019-01-23",257],["2019-01-24",117],["2019-01-25",185],["2019-01-26",119],["2019-01-28",65],["2019-01-29",87],["2019-01-31",60],["2019-02-01",108],["2019-02-02",188],["2019-02-03",143],["2019-02-05",62],["2019-02-06",100],["2019-02-09",152],["2019-02-10",166],["2019-02-11",55],["2019-02-12",59],["2019-02-13",175],["2019-02-14",293],["2019-02-15",326],["2019-02-16",153],["2019-02-18",73],["2019-02-19",267],["2019-02-20",183],["2019-02-21",394],["2019-02-22",158],["2019-02-23",86],["2019-02-24",207]];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    // chart1
    this.chart1 = {
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
        containLabel: true
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
            data: this.data.map(function (item) {
                return item[0];
            })
      }
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
          name:'CPU Usage',
          type:'line',
          stack: '总量',
          areaStyle: {},
          itemStyle: {color: '#F4774D'},
          data: this.data.map(function (item) {
                return item[1];
            }),
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
}
