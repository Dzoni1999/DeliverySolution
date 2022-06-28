import { NotificationService } from './../../../services/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/communication/communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:  FormGroup;

  constructor(private communicationService : CommunicationService, private notification: NotificationService, private notifyService: NotificationService, private router: Router) { 
    
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name : new FormControl('',[
        Validators.required, 
        // Validators.minLength(4)
      ]),
      lastName: new FormControl('',[
        Validators.required, 
        // Validators.minLength(4)
      ]),
      username : new FormControl('',[
        Validators.required, 
        // Validators.minLength(6)
      ]),
      password: new FormControl('',[
        Validators.required, 
        // Validators.minLength(8)
      ]),
      email : new FormControl('',[
        Validators.required, 
        // Validators.email
      ]),
      date: new FormControl('',[
        Validators.required, 
      ]),
      role: new FormControl('1',[
        Validators.required, 
      ]),
      address: new FormControl('',[
        Validators.required, 
      ]),
    });
  }

  registerUser(){
    console.log(this.registerForm.value)
    this.communicationService.RegisterUser(this.registerForm.value).subscribe(
      data=> {
        console.log(data);
        if (data.status == false){
          location.href = '/register';
        }
        else{
          this.router.navigate(['login']);
        }
        
      },
      err => {
        console.log(JSON.stringify(err));
        alert("Error while registering User!");
      }
    );
  }

}
