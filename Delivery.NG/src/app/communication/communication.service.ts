import { Login, User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private headers = new HttpHeaders().append('Content-Type', 'application/json')
  .append('Access-Control-Allow-Headers', 'Content-Type')
  .append('Access-Control-Allow-Methods', 'GET')
  .append('Access-Control-Allow-Origin', '*');;


  apiPath = environment.apiHttpUrl;
  constructor(private http: HttpClient, private communicationService: CommunicationService) {
    
   }

  //  Login User Section
   CheckIfUserExists(loginInfo: any){
    return this.http.post<any>(this.apiPath + "User/CheckIfUserExists", loginInfo);
   }

  // Register User Section
  RegisterUser(userInfo: any){
    return this.http.post<any>(this.apiPath + "User/RegisterUser", userInfo);
  }

}
