import { Component, OnInit, Input } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  @Input() inputData: any;
  @Input() limit: number;

  pieChartData: number[];
  pieChartLabels: string[];
  colors: any[] = [
    {
      backgroundColor: ['#16547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111'
    }
  ];

  //pieChartType = 'pie';
  pieChartType = 'doughnut';

  ngOnInit() {
    this.parseChartData(this.inputData, this.limit);
  }

  parseChartData(res: any, limit?: number) {
    //console.log(res);
    //get data from the last
    //const allData = res.slice(-limit);
    //get data from the front
    const allData = res.slice(0, limit);
    this.pieChartData = allData.map(x => _.values(x)[1]);
    this.pieChartLabels = allData.map(x => _.values(x)[0]);
  }

}
