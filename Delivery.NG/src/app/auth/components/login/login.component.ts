import { CommunicationService } from './../../../communication/communication.service';
import { User, Login } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginInfo: Login = new Login;
  currentUser : User = new User;
  
  constructor(private communicationService : CommunicationService) { }

  loginSection = new FormGroup({
    loginEmail : new FormControl(''),
    loginPassword : new FormControl('')
  });

  ngOnInit() {
  }

  testApi(){
    this.communicationService.GetUserById(12).subscribe(
      data => {
        console.log("api working");
      },
      err => {
        console.log(JSON.stringify(err));
        alert("Error while getting users");
      }
    )
  }

  checkIfUserExists(loginSection: FormGroup):any{
      this.loginInfo = this.MapData(loginSection);
      this.communicationService.CheckIfUserExists(this.loginInfo).subscribe(
        data => {
          console.log("Working!");
          console.log(data);
        },
        err => {
          console.log(JSON.stringify(err));
          alert("Error while checking User Information!");
        }
      )
  }
  MapData(loginSection: FormGroup) : Login{
    this.loginInfo.Email = loginSection.controls.loginEmail.value;
    this.loginInfo.Password = loginSection.controls.loginPassword.value;

    return this.loginInfo;
  }
}
