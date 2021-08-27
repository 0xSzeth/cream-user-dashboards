import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { HelpersService } from 'src/app//helpers.service';
import { TimeseriesService } from 'src/app/timeseries.service';
import { Chart } from 'chart.js';
import { request, gql } from 'graphql-request';

@Component({
  selector: 'app-cream-token-holders',
  templateUrl: './cream-token-holders.component.html',
  styleUrls: ['./cream-token-holders.component.css']
})
export class CreamTokenHoldersComponent implements OnInit {
  // constants
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
  labels: string[] = [];
  datas: number[] = [];
  backgroundColors: string[] = [];
  hoverBackgroundColors: string[] = [];

  // chart variables
  public pieChartOptions: any = {};
  public pieChartType: any = 'pie';
  public pieChartLegend: boolean = false;
  public pieChartLabels: string[] = [];
  public pieChartData: any[] = [];

  constructor(
    public helpers: HelpersService,
    public constants: ConstantsService,
    public timeseries: TimeseriesService,
  ) { }

  ngOnInit(): void {
    this.drawChart();
  }

  drawChart() {
    this.loadData();

    this.pieChartOptions = {
      responsive: true,
      animation: false,
      normalized: true,

    };
    this.pieChartLabels = this.labels;
    this.pieChartType = 'pie';
    this.pieChartLegend = false;
    this.pieChartData = [
      {
        data: this.datas,
        backgroundColor: this.backgroundColors,
        hoverBackgroundColor: this.hoverBackgroundColors,
        borderWidth: 0,
      },
    ];
  }

  // @notice filter balance > 100 to improve performance of the chart
  async loadData() {
    let skip: boolean = true;
    let lastID: string = "";

    while (skip) {
      let queryString = `query CreamSupplyDistribution {`;
      queryString += `creamholders (
        first: 1000,
        where: {
          creamBalance_gt: "100",
          id_gt: "${lastID}"
        },
      ) {
        id
        address
        creamBalance
      }`;
      queryString += `}`;
      const query = gql`
        ${queryString}
      `;

      let result = await request(
        this.constants.GRAPHQL_CREAM_TOKEN,
        query
      ).then((data: QueryResult) => {
        return data;
      });

      this.handleData(result);

      if (result.creamholders.length < 1000) {
        skip = false;
      } else {
        lastID = result.creamholders[999].id;
      }
    }
  }

  handleData(data: QueryResult) {
    const creamHolders = data.creamholders;

    for (let holder in creamHolders) {
      const user = creamHolders[holder];
      this.labels.push(user.address);
      this.datas.push(parseFloat(user.creamBalance));
      this.backgroundColors.push('rgba(' + this.COLORS[parseInt(holder) % this.COLORS.length] + ', 0.5)');
      this.hoverBackgroundColors.push('rgba(' + this.COLORS[parseInt(holder) % this.COLORS.length] + ', 1)');
    }
    this.datas.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  }

}

interface QueryResult {
  creamholders: {
    id: string;
    address: string;
    creamBalance: string;
  }[];
}
