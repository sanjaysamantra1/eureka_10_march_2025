import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart-demo',
  imports: [
    NgxChartsModule
  ],
  templateUrl: './chart-demo.component.html',
  styleUrl: './chart-demo.component.css'
})
export class ChartDemoComponent {
  barChartData = [
    {
      name: 'Product A',
      value: 105000,
    },
    {
      name: 'Product B',
      value: 55000,
    },
    {
      name: 'Product C',
      value: 15000,
    },
  ];

  view: [number, number] = [700, 400];
  showLegend=true;
}
