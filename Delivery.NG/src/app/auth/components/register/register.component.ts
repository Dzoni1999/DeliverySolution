import { FormGroup, FormControl } from '@angular/forms';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/communication/communication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userInfo: User = new User;
  
  constructor(private communicationService : CommunicationService) { }

    registerSection = new FormGroup({
      registerEmail : new FormControl(''),
      registerPassword : new FormControl(''),
      registerUsername : new FormControl(''),
      registerName : new FormControl(''),
      registerLastName : new FormControl(''),
      registerAddress : new FormControl(''),
      registerRole : new FormControl(''),
      registerDate : new FormControl(''),
    });

  ngOnInit() {}

  RegisterUser(registerSection: FormGroup):any{
    this.userInfo = this.MapData(registerSection);
    this.communicationService.RegisterUser(this.userInfo).subscribe(
      data=> {
        console.log("working!");
        console.log(data);
      },
      err => {
        console.log(JSON.stringify(err));
        alert("Error while registering User!");
      }
    );
  }

  MapData(registerSection: FormGroup) : User{
    this.userInfo.Email = registerSection.controls.registerEmail.value;
    this.userInfo.Password = registerSection.controls.registerPassword.value;
    this.userInfo.UserName = registerSection.controls.registerUsername.value;
    this.userInfo.Name = registerSection.controls.registerName.value;
    this.userInfo.LastName = registerSection.controls.registerLastName.value;
    this.userInfo.Address = registerSection.controls.registerAddress.value;
    this.userInfo.Role = registerSection.controls.registerRole.value;

    return this.userInfo;
  }
}
