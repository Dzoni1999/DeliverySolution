import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username: string = "";
  
  @Input()
  customTitle: string;
  constructor() { }

  ngOnInit(): void {
    
  }

  dropdown(): void {
    let visibility = document.getElementById('account-menu-dropdown')!.hidden;
    document.getElementById('account-menu-dropdown')!.hidden = !visibility;
  }

}
