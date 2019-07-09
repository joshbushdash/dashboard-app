import { Component, OnInit } from '@angular/core';
import { Order } from '../../Shared/order'

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1,
     customer:
      {id: 1, name: 'Main St Bakery', email: 'dada@example.com', state: "CO"},
     total: 200, 
     placed: new Date(2017, 12 , 1),
     fulfilled: new Date(2018, 3, 1)},
    {id: 2,
     customer:
      {id: 1, name: 'Main St Bakery', email: 'dada@example.com', state: "CO"},
     total: 200, 
     placed: new Date(2017, 12 , 1),
     fulfilled: new Date(2018, 3, 1)},
    {id: 3,
     customer:
      {id: 1, name: 'Main St Bakery', email: 'dada@example.com', state: "CO"},
     total: 200, 
     placed: new Date(2017, 12 , 1),
     fulfilled: new Date(2018, 3, 1)},
    {id: 4,
     customer:
      {id: 1, name: 'Main St Bakery', email: 'dada@example.com', state: "CO"},
     total: 200, 
     placed: new Date(2017, 12 , 1),
     fulfilled: new Date(2018, 3, 1)},
    {id: 5,
     customer:
      {id: 1, name: 'Main St Bakery', email: 'dada@example.com', state: "CO"},
     total: 200, 
     placed: new Date(2017, 12 , 1),
     fulfilled: new Date(2018, 3, 1)},
  ];

  ngOnInit() {
  }

}
