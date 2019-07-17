import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../../Services/sales-data.service'
import * as moment from 'moment';

//const SAMPLE_BARCHART_DATA: any[] = [
//  { data: [65, 59, 80, 81, 56, 54, 30], label:'Q3 Sales'},
//  { data: [25, 39, 60, 91, 36 ,54, 50], label:'Q4 Sales'},
//];

//const SAMPLE_BARCHART_LSBELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', ];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private _salesDataService: SalesDataService) { }

  orders: any;
  orderLabels: string[];
  orderData: number[];

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barCharLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLinae: false,
    responsive: true
  };

  ngOnInit() {
    this._salesDataService.getOrders(3, 100)
      .subscribe(res => {
        //console.log(res['page']['total']);
        const localChartDate = this.getChartData(res);
        this.barChartLabels = localChartDate.map(x => x[0]).reverse();
        this.barChartData = [{ 'data': localChartDate.map(x => x[1]), 'label': 'Sales' }];
      });
  }

  getChartData(res: Object) {
    this.orders = res['page']['data'];
    const data = this.orders.map(o => o.total);
    const labels = this.orders.map(o => moment(new Date(o.placed)).format('YY-MM-DD'));

    //const myData = [3, 4, 5].reduce((sum, value) => { return sum + value }, 0);

    const formattedOrders = this.orders.reduce((r, e) => {
      r.push([moment(e.placed).format('YY-MM-DD'), e.total]);
      return r;
    }, []);
    //console.log('formattedOrders: ',formattedOrders);

    const keyAndObject = [];

    const charData = formattedOrders.reduce((r, e) => {
      const key = e[0];
      if (!keyAndObject[key]) {
        keyAndObject[key] = e;
        r.push(keyAndObject[key]);
      } else {
        keyAndObject[key][1] += e[1];
      }
      return r;
    }, []);
    //console.log('charData: ',charData);
    return charData;
  }
}
