import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  selectedUser: any;
  inputDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
    this.selectedUser = {
      name: "Nikola",
      lastname: "Bogdanovic",
      username: "Dzoni",
      password: "12345678",
      address: "Sedmog Jula 6",
      email: "eeheey@gmail.com",
      role: 2,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp'
    }
  }

  changeImage(){}

  activateInput(){
    this.inputDisabled = false;
  }
}
