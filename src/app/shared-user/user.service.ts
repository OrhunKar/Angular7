import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData : User;
  
  //local connnection to the API 
  //readonly rootURL = "http://localhost:62094/api"
  
  //Azure API connection
  readonly rootURL = "http://vedufirststepazure.azurewebsites.net/api"
  
  //This variable holds the values "Teacher, admin and student" and changes in userAuthentication method
  loginCheck = "";

  //This variable holds the input of login and changes with respect to loginCheck variable
  loginName = "";
  
  constructor(private http: HttpClient) { }
  
  //This method calls an API and loginCheck variable changes according to response of that api 
  async userAuthentication(userName: string){
    console.log(userName)
    this.loginName = userName;
    await this.http.get(this.rootURL + "/ADMINs/Users/" + userName).toPromise().then( res => {
                                                                                this.loginCheck = res as string;
                                                                                })

    //this.http.get(this.rootURL + "/ADMINs/Users/" + userName).subscribe(res => this.loginCheck = res as boolean);
  }
}
