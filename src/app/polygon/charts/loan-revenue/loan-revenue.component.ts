import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { request, gql } from 'graphql-request';
import { ConstantsService } from 'src/app/constants.service';
import { HelpersService } from 'src/app//helpers.service';
import { TimeseriesService } from 'src/app//timeseries.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-loan-revenue',
  templateUrl: './loan-revenue.component.html',
  styleUrls: ['./loan-revenue.component.css']
})
export class LoanRevenueComponent implements OnInit {
  // constants
  FIRST_INDEX = 1623542400;
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
  assetRevenue: DataObject[] = [];
  //data: number[] = [];

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
    this.barChartData = this.assetRevenue;
    // this.barChartData = [
    //   {
    //     data: this.data,
    //     backgroundColor: 'rgba(44, 123, 229, 0.3)',
    //     borderColor: 'rgba(44, 123, 229, 1)',
    //     hoverBackgroundColor: 'rgba(44, 123, 229, 1)',
    //   },
    // ];
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
          timeZone: 'UTC',
          month: 'short',
          day: 'numeric',
        })
      );
    }
    this.readable = readable;

    // then generate the query
    let queryString = `query HistoricalLoanRevenue {`;
    queryString += `markets {
      id
      symbol
      underlyingAddress
      underlyingSymbol
      totalInterestAccumulated
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
        totalInterestAccumulated
        reserveFactor
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
        dataUSD: [],
        dataRevenue: [],
        dataPeriodic: [],
        dataCumulative: [],
        backgroundColor:
          'rgba(' + this.COLORS[parseInt(market) % this.COLORS.length] + ', 0.5)',
        hoverBackgroundColor:
          'rgba(' + this.COLORS[parseInt(market) % this.COLORS.length] + ', 1)',
      };
      this.assetRevenue.push(dataobj);
    }

    // populate dataRevenue array (token quantity)
    for (let t in result) {
      if (t !== 'markets') {
        for (let m in result[t]) {
          let market = result[t][m];
          let entry = this.assetRevenue.find((m) => m.label === market.underlyingAddress);
          let totalRevenue = parseFloat(market.totalInterestAccumulated) * parseFloat(market.reserveFactor) / 1e18;
          if (isNaN(totalRevenue)) {
            totalRevenue = 0;
          }
          if (entry) {
            entry.dataRevenue[parseInt(t.substring(1))] = totalRevenue;
          }

        }
      }
    }

    // populate the dataUSD array
    for (let market in this.assetRevenue) {
      if (this.assetRevenue[market].label) {
        let prices = this.assetPricesUSD.find((asset) => asset.address === this.assetRevenue[market].label);
        for (let t in this.timestamps) {
          let price = prices?.prices?.find((price) => price[0] === this.timestamps[t] * 1000);
          if (price) {
            this.assetRevenue[market].dataUSD[t] = price[1];
          } else {
            this.assetRevenue[market].dataUSD[t] = 0;
          }
        }
      }
    }

    // populate the dataCumulative array
    for (let m in this.assetRevenue) {
      if (this.assetRevenue[m].label) {
        let market = this.assetRevenue[m];
        for (let t in this.timestamps) {
          market.dataCumulative[t] = market.dataRevenue[t] * market.dataUSD[t];
          //market.data[t] = market.dataRevenue[t] * market.dataUSD[t];
        }
      }
    }

    // populate the dataPeriodic array
    // set data to be displayed as periodic (@dev make customizable later)
    for (let m in this.assetRevenue) {
      if (this.assetRevenue[m].label) {
        let market = this.assetRevenue[m];
        for (let t in this.timestamps) {
          let delta = parseInt(t) - 1;
          if (parseInt(t) == 0) {
            market.dataCumulative[t] = market.dataRevenue[t] * market.dataUSD[t];
            market.data[t] = market.dataRevenue[t] * market.dataUSD[t];
          } else {
            market.dataPeriodic[t] = (market.dataRevenue[t] - market.dataRevenue[delta]) * market.dataUSD[t];
            market.data[t] = (market.dataRevenue[t] - market.dataRevenue[delta]) * market.dataUSD[t];
          }
        }
      }
    }
  }

  changePeriod() {
    if (this.period === 'daily') {
      this.PERIOD = this.constants.DAY_IN_SEC;
      this.FIRST_INDEX = 1623888000;
    } else if (this.period === 'weekly') {
      this.PERIOD = this.constants.WEEK_IN_SEC;
      this.FIRST_INDEX = 1623542400;
    } else if (this.period === 'monthly') {
      this.PERIOD = this.constants.MONTH_IN_SEC;
      this.FIRST_INDEX = 1622505600;
    }
    this.timeseriesdata = [];
    this.timestamps = [];
    this.readable = [];
    this.blocks = [];
    this.assetRevenue = [];
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
    totalInterestAccumulated: string;
    reserveFactor: string;
  }[];
}

interface DataObject {
  label: string;
  data: number[];
  dataUSD: number[];
  dataRevenue: number[];
  dataPeriodic: number[];
  dataCumulative: number[];
  backgroundColor: string;
  hoverBackgroundColor: string;
}

interface PriceObject {
  address: string;
  prices: number[][];
}
