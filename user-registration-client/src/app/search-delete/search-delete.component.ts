import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
private users:User[];
  // users:[{
  //   "id":0,
  //   "name":"",
  //   "emailId":"",
  //   "experience":0,
  //   "domain":""
  // }];
  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
    let resp = this.service.getUsers();
    resp.subscribe((data)=> this.users=data.map(user => new User(user.id,user.name,user.emailId,user.experience,user.domain)));
  }

}
