import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

export interface PeriodicElement {
  invoice: string;
  customer: string;
  purchasedon: string;
  amount: number;
  status: string;
  trackingid: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {invoice: '#DDGFH132589', customer: 'Mathew Hayden', purchasedon: 'feb 20th 19', amount: 50, status:'done', trackingid: '#GDH6589' },
  {invoice: '#DDGFH132589', customer: 'Mathew Hayden', purchasedon: 'feb 20th 19', amount: 50, status:'done', trackingid: '#GDH6589' },
  {invoice: '#DDGFH132589', customer: 'Mathew Hayden', purchasedon: 'feb 20th 19', amount: 50, status:'done', trackingid: '#GDH6589' },
  {invoice: '#DDGFH132589', customer: 'Mathew Hayden', purchasedon: 'feb 20th 19', amount: 50, status:'done', trackingid: '#GDH6589' },
  {invoice: '#DDGFH132589', customer: 'Mathew Hayden', purchasedon: 'feb 20th 19', amount: 50, status:'done', trackingid: '#GDH6589' }

];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['invoice', 'customer', 'purchasedon', 'amount', 'status', 'trackingid'];
  dataSource = ELEMENT_DATA;

  LineChart = [];

  constructor() { }

  ngOnInit() {
    this.LineChart = new Chart(lineChart, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','august', 'september', 'october'],
        datasets: [{
          label: 'Gross Revenue',
          // backgroundColor: 'rgb(255, 99, 132)', filled background color

          borderColor: '#af17ff',
          data: [0, 10, 5, 2, 20, 30, 45,20,35,60]
        }]
      },

      // Configuration options go here
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: true,

            },
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    });

  }

}
