import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { request, gql } from 'graphql-request';
import { ConstantsService } from 'src/app/constants.service';
import { HelpersService } from 'src/app//helpers.service';
import { TimeseriesService } from 'src/app//timeseries.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-iron-bank-loan-origination',
  templateUrl: './iron-bank-loan-origination.component.html',
  styleUrls: ['./iron-bank-loan-origination.component.css']
})
export class IronBankLoanOriginationComponent implements OnInit {
  // constants
  FIRST_INDEX = 1607212800;
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
  assetOrigination: DataObject[] = [];
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
    this.barChartData = this.assetOrigination;
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
      this.constants.CHAIN_ID.MAINNET
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
    let queryString = `query HistoricalLoanOrigination {`;
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
      }`;
    }
    queryString += `}`;
    const query = gql`
      ${queryString}
    `;

    // then run the query
    request(this.constants.GRAPHQL_IRONBANK, query).then(
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
        dataPeriodic: [],
        dataCumulative: [],
        dataOrigination: [],
        backgroundColor:
          'rgba(' + this.COLORS[parseInt(market) % this.COLORS.length] + ', 0.5)',
        hoverBackgroundColor:
          'rgba(' + this.COLORS[parseInt(market) % this.COLORS.length] + ', 1)',
      };
      this.assetOrigination.push(dataobj);
    }

    // populate dataOrigination array (token quantity)
    for (let t in result) {
      if (t !== 'markets') {
        for (let m in result[t]) {
          let market = result[t][m];
          let entry = this.assetOrigination.find((m) => m.address === market.underlyingAddress);
          let totalInterestAccumulated = parseFloat(market.totalInterestAccumulated);
          if (isNaN(totalInterestAccumulated)) {
            totalInterestAccumulated = 0;
          }
          if (entry) {
            entry.dataOrigination[parseInt(t.substring(1))] = totalInterestAccumulated;
          }
        }
      }
    }


    // populate the dataCumulative array
    for (let m in this.assetOrigination) {
      if (this.assetOrigination[m].label) {
        let market = this.assetOrigination[m];
        let price = this.assetPricesUSD.find((m) => m.address === market.address).price;
        for (let t in this.timestamps) {
          market.dataCumulative[t] = market.dataOrigination[t] * price;
        }
      }
    }

    // populate the dataPeriodic array
    for (let m in this.assetOrigination) {
      if (this.assetOrigination[m].label) {
        let market = this.assetOrigination[m];
        let price = this.assetPricesUSD.find((m) => m.address === market.address).price;
        for (let t in this.timestamps) {
          let delta = parseInt(t) - 1;
          if (parseInt(t) == 0) {
            market.dataPeriodic[t] = market.dataOrigination[t] * price;
            market.data[t] = market.dataOrigination[t] * price;
          } else {
            market.dataPeriodic[t] = (market.dataOrigination[t] - market.dataOrigination[delta]) * price;
            market.data[t] = (market.dataOrigination[t] - market.dataOrigination[delta]) * price;
          }
        }
      }
    }
  }

  changePeriod() {
    if (this.period === 'daily') {
      this.PERIOD = this.constants.DAY_IN_SEC;
      this.FIRST_INDEX = 1607126400;
    } else if (this.period === 'weekly') {
      this.PERIOD = this.constants.WEEK_IN_SEC;
      this.FIRST_INDEX = 1607212800;
    } else if (this.period === 'monthly') {
      this.PERIOD = this.constants.MONTH_IN_SEC;
      this.FIRST_INDEX = 1606780800;
    }
    this.timeseriesdata = [];
    this.timestamps = [];
    this.readable = [];
    this.blocks = [];
    this.assetOrigination = [];
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
  }[];
}

interface DataObject {
  label: string;
  address: string;
  data: number[];
  dataPeriodic: number[];
  dataCumulative: number[];
  dataOrigination: number[];
  backgroundColor: string;
  hoverBackgroundColor: string;
}

interface PriceObject {
  symbol: string;
  address: string;
  price: number;
}
