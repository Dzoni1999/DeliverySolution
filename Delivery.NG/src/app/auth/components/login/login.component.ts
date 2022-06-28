import { AuthService } from './../../../services/auth.service';
import { CommunicationService } from './../../../communication/communication.service';
import { User, Login } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../../../services/notification.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginSection: FormGroup;
  currentUser: User;
  loginFailed: any;

  constructor(private communicationService : CommunicationService, private notification: NotificationService, private router: Router, private authService: AuthService) { }

  ngOnInit() {


    this.loginSection = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
  }

  checkIfUserExists(){
      this.communicationService.CheckIfUserExists(this.loginSection.value).subscribe(
        data => {
          if (data.status == false){
            this.loginFailed = data.message;
          }
          else{
            this.currentUser = data;
            localStorage.setItem('currentUser', data);
            this.router.navigate(['home']);
          }
        },
        err => {
          console.log(JSON.stringify(err));
          alert("Error while checking User Information!");
        }
      )
  }
}
