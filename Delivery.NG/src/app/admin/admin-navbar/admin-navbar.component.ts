import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dropdown(): void {
    let visibility = document.getElementById('account-menu-dropdown')!.hidden;
    document.getElementById('account-menu-dropdown')!.hidden = !visibility;
  }
  
}
