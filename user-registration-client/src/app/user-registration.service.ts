import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user)
  {
    return this.http.post("http://localhost:8080/register",user,{responseType: 'text' as 'json'})
  }

  public getUsers()
  {
    return this.http.get("http://localhost:8080/getAllUsers");
  }

  public getUserByEmailId(emailId)
  {
     return this.http.get("http://localhost:8080/findUser/"+emailId);
  }

  public deleteUser(id)
  {
    return this.http.delete("localhost:8080/cancel/"+id);
  }

}
