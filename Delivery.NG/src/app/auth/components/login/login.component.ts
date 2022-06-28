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

  constructor(private communicationService : CommunicationService, private notification: NotificationService, private router: Router) { }

  ngOnInit() {
    this.loginSection = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    });
  }

  checkIfUserExists(){
      this.communicationService.CheckIfUserExists(this.loginSection.value).subscribe(
        data => {
          if (data.status == false){
            this.notification.showError("Error!","Login failed");
          }
          else{
            this.notification.showSuccess("Success!","You successfully logged in");
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
