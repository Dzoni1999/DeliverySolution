import { User } from './../model/user';
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


  // User CRUD Section

  GetAllUsers(){
    console.log("Console log in service called!");
    return this.http.get<User[]>(this.apiPath + "User/GetAllUsers");
  }

  GetCurrentUser(id: number){
    console.log("Current id:");
    console.log(id);
    return this.http.get<User>(this.apiPath + "User/GetCurrentUser?id=" + id);
  }

  ActivateAccount(id: number){
    return this.http.get<any>(this.apiPath + "User/ActivateAccount?id=" + id);
  }
  
}
