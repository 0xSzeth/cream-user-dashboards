import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { request, gql } from 'graphql-request';
import { ConstantsService } from 'src/app/constants.service';
import { HelpersService } from 'src/app//helpers.service';
import { TimeseriesService } from 'src/app//timeseries.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-fantom-total-borrowed',
  templateUrl: './fantom-total-borrowed.component.html',
  styleUrls: ['./fantom-total-borrowed.component.css']
})
export class FantomTotalBorrowedComponent implements OnInit {
  // constants
  FIRST_INDEX = 1613865600;
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

  @Input() assetPricesUSD: PriceObject[] = [];
  firstChange: boolean = true;
  period: string = "weekly";

  // data variables
  timeseriesdata: number[][] = [];
  timestamps: number[] = [];
  readable: string[] = [];
  blocks: number[] = [];
  data: DataObject[] = [];

  // chart variables
  barChartOptions: any = {};
  barChartLabels: any = [];
  barChartType: any = 'bar';
  barChartLegend: boolean = true;
  barChartData: any = [];

  constructor(
    public constants: ConstantsService,
    public helpers: HelpersService,
    public timeseries: TimeseriesService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.firstChange ? this.firstChange = false : this.drawChart();
  }

  ngOnInit(): void { }

  async drawChart() {
    await this.loadData();

    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
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
            stacked: true,
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
    };
    this.barChartLabels = this.readable;
    this.barChartType = 'bar';
    this.barChartLegend = false;
    this.barChartData = this.data;
  }

  async loadData() {
    // wait to fetch timeseries data
    this.timeseriesdata = await this.timeseries.getCustomTimeSeries(
      this.FIRST_INDEX,
      this.PERIOD,
      this.constants.CHAIN_ID.FANTOM
    );

    // populate timestamps, blocks, and readable arrays
    this.timestamps = this.timeseriesdata[0];
    this.blocks = this.timeseriesdata[1];

    // transform timestamps to readable format
    let readable: string[] = [];
    for (let i in this.timestamps) {
      readable.push(
        new Date(this.timestamps[i] * 1000).toLocaleString('en-US', {
          timeZone: 'UTC',
          month: 'short',
          day: 'numeric',
        })
      );
    }
    this.readable = readable;

    // then generate the query
    let queryString = `query HistoricalBorrowed {`;
    queryString += `markets {
      id
      symbol
      underlyingAddress
      underlyingSymbol
      totalBorrows
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
        totalBorrows
      }`;
    }
    queryString += `}`;
    const query = gql`
      ${queryString}
    `;

    // then run the query
    request(this.constants.GRAPHQL_FANTOM, query).then(
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
        label: markets[market].underlyingSymbol,
        address: markets[market].underlyingAddress,
        data: [],
        dataBorrows: [],
        dataUSD: [],
        backgroundColor:
          'rgba(' + this.COLORS[parseInt(market) % this.COLORS.length] + ', 0.5)',
        hoverBackgroundColor:
          'rgba(' + this.COLORS[parseInt(market) % this.COLORS.length] + ', 1)',
      };
      this.data.push(dataobj);
    }

    // populate TVL array (token quantity)
    for (let t in result) {
      if (t !== 'markets') {
        for (let m in result[t]) {
          let market = result[t][m];
          let entry = this.data.find((m) => m.address === market.underlyingAddress);
          let totalBorrowed = parseFloat(market.totalBorrows);
          if (isNaN(totalBorrowed)) {
            totalBorrowed = 0;
          }
          if (entry) {
            entry.dataBorrows[parseInt(t.substring(1))] = totalBorrowed;
          }
        }
      }
    }

    // populate the dataUSD array
    for (let market in this.data) {
      if (this.data[market].label) {
        let prices = this.assetPricesUSD.find((asset) => asset.address === this.data[market].address);
        for (let t in this.timestamps) {
          let price = prices?.prices?.find((price) => price[0] === this.timestamps[t] * 1000);
          if (price) {
            this.data[market].dataUSD[t] = price[1];
          } else {
            this.data[market].dataUSD[t] = 0;
          }
        }
      }
    }

    // populate the data array to be charted
    for (let m in this.data) {
      if (this.data[m].label) {
        let market = this.data[m];
        for (let t in this.timestamps) {
          market.data[t] = market.dataBorrows[t] * market.dataUSD[t];
        }
      }
    }
  }

  changePeriod() {
    if (this.period === 'daily') {
      this.PERIOD = this.constants.DAY_IN_SEC;
      this.FIRST_INDEX = 1614384000;
    } else if (this.period === 'weekly') {
      this.PERIOD = this.constants.WEEK_IN_SEC;
      this.FIRST_INDEX = 1613865600;
    } else if (this.period === 'monthly') {
      this.PERIOD = this.constants.MONTH_IN_SEC;
      this.FIRST_INDEX = 1612137600;
    }
    this.timeseriesdata = [];
    this.timestamps = [];
    this.readable = [];
    this.blocks = [];
    this.data = [];
    this.drawChart();
  }

}

interface QueryResult {
  [key: string]: any;
  markets: {
    id: string;
    symbol: string;
    underlyingAddress: string;
    underlyingSymbol: string;
    totalBorrows: string;
  }[];
}

interface DataObject {
  label: string;
  address: string;
  data: number[];
  dataBorrows: number[];
  dataUSD: number[];
  backgroundColor: string;
  hoverBackgroundColor: string;
}

interface PriceObject {
  address: string;
  prices: number[][];
}