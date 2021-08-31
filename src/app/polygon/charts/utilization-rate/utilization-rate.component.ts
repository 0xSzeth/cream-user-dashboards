import { Component, OnInit } from '@angular/core';
import { request, gql } from 'graphql-request';
import { ConstantsService } from 'src/app/constants.service';
import { HelpersService } from 'src/app//helpers.service';
import { TimeseriesService } from 'src/app//timeseries.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-utilization-rate',
  templateUrl: './utilization-rate.component.html',
  styleUrls: ['./utilization-rate.component.css']
})
export class UtilizationRateComponent implements OnInit {
  // constants
  FIRST_INDEX = 1623888000;
  PERIOD: number = this.constants.WEEK_IN_SEC;
  COLORS: string[] = [
    '44, 123, 229',
    '255, 103, 155',
    '107, 94, 174',
    '114, 124, 245',
    '230, 55, 87',
    '253, 126, 20',
    '246, 195, 67',
    '0, 217, 126',
    '2, 168, 181',
    '57, 175, 209',
  ];

  // data variables
  timeseriesdata: number[][] = [];
  timestamps: number[] = [];
  readable: string[] = [];
  blocks: number[] = [];
  data: DataObject[] = [];

  // chart variables
  lineChartOptions: any = {};
  lineChartLabels: any = [];
  lineChartType: any = 'line';
  lineChartLegend: boolean = true;
  lineChartData: any = [];

  constructor(
    public constants: ConstantsService,
    public helpers: HelpersService,
    public timeseries: TimeseriesService,
  ) { }

  ngOnInit(): void {
    this.drawChart();
  }

  async drawChart() {
    await this.loadData();

    this.lineChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: 'white',
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: 'grey',
            },
            ticks: {
              min: 0,
              fontColor: 'white',
            },
          },
        ],
      },
      hover: {
        mode: 'dataset',
      },
      elements: {
        point: {
          radius: 0,
          hoverRadius: 2,
          hitRadius: 4,
        },
        line: {
          tension: 0,
          borderWidth: 2,
          hoverBorderWidth: 2,
        },
      },
    };
    this.lineChartLabels = this.readable;
    this.lineChartType = 'line';
    this.lineChartLegend = false;
    this.lineChartData = this.data;
  }

  async loadData() {
    // wait to fetch timeseries data
    this.timeseriesdata = await this.timeseries.getCustomTimeSeries(
      this.FIRST_INDEX,
      this.PERIOD,
      this.constants.CHAIN_ID.POLYGON
    );

    // populate timestamps, blocks, and readable arrays
    this.timestamps = this.timeseriesdata[0];
    this.blocks = this.timeseriesdata[1];

    // transform timestamps to readable format
    let readable: string[] = [];
    for (let i in this.timestamps) {
      readable.push(
        new Date(this.timestamps[i] * 1000).toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
        })
      );
    }
    this.readable = readable;

    // then generate the query
    let queryString = `query HistoricalUtilizationRate {`;
    queryString += `markets {
      id
      symbol
      underlyingAddress
      underlyingSymbol
    }`;
    for (let i = 0; i < this.blocks.length; i++) {
      queryString += `t${i}: markets(
        block: {
          number: ${this.blocks[i]}
        }
      ) {
        id
        symbol
        underlyingAddress
        underlyingSymbol
        totalSupply
        totalBorrows
        exchangeRate
      }`;
    }
    queryString += `}`;
    const query = gql`
      ${queryString}
    `;

    // then run the query
    request(this.constants.GRAPHQL_POLYGON, query).then(
      (data: QueryResult) => this.handleData(data)
    );

  }

  async handleData(data: QueryResult) {
    let result: QueryResult = data;
    let markets = data.markets;

    // build empty data structure
    for (let market in markets) {
      let dataobj: DataObject;
      dataobj = {
        label: markets[market].underlyingAddress,
        data: [],
        dataSupply: [],
        dataBorrow: [],
        borderColor:
          'rgba(' + this.COLORS[parseInt(market) % this.COLORS.length] + ', 0.5)',
        hoverBorderColor:
          'rgba(' + this.COLORS[parseInt(market) % this.COLORS.length] + ', 1)',
        pointHoverBorderColor:
          'rgba(' + this.COLORS[parseInt(market) % this.COLORS.length] + ', 1)',
        pointHoverBackgroundColor:
          'rgba(' + this.COLORS[parseInt(market) % this.COLORS.length] + ', 1)',
        fill: false,
      };
      this.data.push(dataobj);
    }

    // populate totalSupply & totalBOrrow arrays (token quantity)
    for (let t in result) {
      if (t !== 'markets') {
        for (let m in result[t]) {
          let market = result[t][m];
          let entry = this.data.find((m) => m.label === market.underlyingAddress);
          let totalSupply = parseFloat(market.totalSupply) * parseFloat(market.exchangeRate);
          if (isNaN(totalSupply)) { totalSupply = 0; }
          let totalBorrow = parseFloat(market.totalBorrows);
          if (isNaN(totalBorrow)) { totalBorrow = 0; }
          if (entry) {
            entry.dataSupply[parseInt(t.substring(1))] = totalSupply;
            entry.dataBorrow[parseInt(t.substring(1))] = totalBorrow;
          }

        }
      }
    }

    // populate the data array to be charted
    for (let m in this.data) {
      if (this.data[m].label) {
        let market = this.data[m];
        for (let t in this.timestamps) {
          market.data[t] = market.dataBorrow[t] / market.dataSupply[t] * 100;
        }
      }
    }
  }
}

interface QueryResult {
  [key: string]: any;
  markets: {
    id: string;
    symbol: string;
    underlyingAddress: string;
    underlyingSymbol: string;
    totalSupply: string;
    totalBorrows: string;
    exchangeRate: string;
  }[];
}

interface DataObject {
  label: string;
  data: number[];
  dataSupply: number[];
  dataBorrow: number[];
  borderColor: string;
  hoverBorderColor: string;
  pointHoverBorderColor: string;
  pointHoverBackgroundColor: string;
  fill: boolean;
}
