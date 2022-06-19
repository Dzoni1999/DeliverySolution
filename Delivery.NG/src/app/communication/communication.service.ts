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


  apiPath = environment.apiUrl;
  constructor(private http: HttpClient) {
    
   }

  GetUserById(userId: number){
    console.log(this.apiPath + 'api/User/GetUserById');
    let param = new HttpParams().set("userId", userId.toString());
    return this.http.get<string>(this.apiPath + 'User/GetUserById?userId=5');
  }

}
