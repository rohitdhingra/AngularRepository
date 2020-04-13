import { Component } from '@angular/core';

export interface PeriodicElement{
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position:1,name:'Hydrogen',weight:1.079,symbol:'H'},
{position:2,name:'Helium',weight:2.079,symbol:'He'},
{position:3,name:'Lithium',weight:3.079,symbol:'Li'},
{position:4,name:'Berylium',weight:4.079,symbol:'Be'},
{position:5,name:'Boron',weight:5.079,symbol:'Bo'},
{position:6,name:'Carbon',weight:6.079,symbol:'C'},
{position:7,name:'Nitrogen',weight:6.279,symbol:'N'},
{position:8,name:'Oxygen',weight:1.019,symbol:'O'},
{position:9,name:'Flourene',weight:1.579,symbol:'F'},
{position:10,name:'Neon',weight:1.039,symbol:'Ne'}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid19-tracker';
  displayedColumns: string[] =['position','name','weight','symbol'];
  dataSource = ELEMENT_DATA;
}
