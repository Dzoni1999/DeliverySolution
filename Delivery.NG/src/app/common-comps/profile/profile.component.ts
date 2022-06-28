import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  selectedUser: any;

  constructor() { }

  ngOnInit(): void {
    this.selectedUser = {
      name: "Nikola",
      lastname: "Nikola",
      username: "Nikola",
      password: "Nikola",
      address: "Nikola",
      role: 2
    }
  }

}
