import { Component, OnInit } from '@angular/core';
import { request, gql } from 'graphql-request';
import { ConstantsService } from 'src/app/constants.service';
import { HelpersService } from 'src/app//helpers.service';
import { TimeseriesService } from 'src/app//timeseries.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-total-supply',
  templateUrl: './total-supply.component.html',
  styleUrls: ['./total-supply.component.css']
})
export class TotalSupplyComponent implements OnInit {
  // constants
  FIRST_INDEX = 1623888000;
  PERIOD: number = this.constants.DAY_IN_SEC;
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

  ngOnInit(): void {
    this.drawChart();
  }

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
          },
        ],
        yAxes: [
          {
            stacked: true,
            gridLines: {
              display: true,
              color: '#242526',
            },
            ticks: {
              min: 0,
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
    let queryString = `query HistoricalSupplied {`;
    queryString += `markets {
      id
      symbol
      underlyingAddress
      underlyingSymbol
      totalSupply
      exchangeRate
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
          let entry = this.data.find((m) => m.label === market.underlyingAddress);
          let totalSupplied = parseFloat(market.totalSupply) * parseFloat(market.exchangeRate);
          if (isNaN(totalSupplied)) {
            totalSupplied = 0;
          }
          if (entry) {
            entry.dataSupply[parseInt(t.substring(1))] = totalSupplied;
          }

        }
      }
    }

    // populate the dataUSD array
    // @dev if days < 100 then coingecko api returns inaccurate timestamps
    let days = (this.timeseries.getLatestUTCDate() - this.FIRST_INDEX + this.constants.DAY_IN_SEC) / this.constants.DAY_IN_SEC;
    if (days < 100) {
      days = 100;
    }
    for (let market in this.data) {
      if (this.data[market].label) {
        // fetch historical token prices
        let apiResult: number[][] = [];
        apiResult = await this.helpers.getTokenPriceUSD(
          this.data[market].label,
          this.constants.CHAIN_ID.POLYGON,
          days
        );

        for (let t in this.timestamps) {
          // find the historical price in the api result
          let found = apiResult.find(
            (price) => price[0] === this.timestamps[t] * 1000
          );
          if (found) {
            this.data[market].dataUSD[t] = found[1];
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
          // let supplyUSD = market.dataSupply[t] * market.dataUSD[t];
          // if (isNaN(supplyUSD)) {
          //   market.data[t] = 0;
          // } else {
          //   market.data[t] = supplyUSD;
          // }
          market.data[t] = market.dataSupply[t] * market.dataUSD[t];

        }
      }
    }

    console.log(this.data);
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
    exchangeRate: string;
  }[];
}

interface DataObject {
  label: string;
  data: number[];
  dataSupply: number[];
  dataUSD: number[];
  backgroundColor: string;
  hoverBackgroundColor: string;
}
