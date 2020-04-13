import { Component, OnInit } from '@angular/core';
import { Covid19ServiceService } from '../covid19-service.service';
import { CountryReports } from 'src/CountryReports';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  ELEMENT_DATA : CountryReports[] 
  displayedColumns: string[] =['country','cases','todayCases','deaths','todayDeaths','recovered','active','critical','casesPerOneMillion','deathsPerOneMillion','tests','testsPerOneMillion'];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);


  constructor(private service: Covid19ServiceService) { }

  ngOnInit(): void {
    this.getAllReports();
  }
  public getAllReports()
  {
    let resp = this.service.covid19Reports();
    resp.subscribe(report  => this.dataSource.data=report as CountryReports[]);
  }

}
