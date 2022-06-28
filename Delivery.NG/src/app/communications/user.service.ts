import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiPath = environment.apiHttpUrl;

  constructor(private http: HttpClient) { }


  //  Login User Section
  CheckIfUserExists(loginInfo: any){
    return this.http.post<any>(this.apiPath + "User/CheckIfUserExists", loginInfo);
   }


   
  // Register User Section
  RegisterUser(userInfo: any){
    return this.http.post<any>(this.apiPath + "User/RegisterUser", userInfo);
  }
  
}
