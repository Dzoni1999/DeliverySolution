import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/communications/user.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  allUsers: User[] = [];
  currentUser: User = new User();

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    
    this.GetAllUsers();
  }



  GetAllUsers(){
    this.userService.GetAllUsers().subscribe(
      data =>{
        this.allUsers = data;
        this.currentUser = this.allUsers[0];
        console.log(this.allUsers);
      },
      error =>{
        console.log("error while getting users!");
      }
    )
  }

  editCurrentUser(id: number){
    console.log(id);
    this.userService.GetCurrentUser(id).subscribe(
      data => {
        this.currentUser = data;
        console.log(this.currentUser)

      },
      error =>{
        console.log("Error while trying to get user");
      }
    );
  }

  ActivateAccount(id: number){
    this.userService.ActivateAccount(id).subscribe(
      data => {
        this.toastr.success("Successfully changed status!");
        this.GetAllUsers();
      },
      error =>{
        console.log("Account not activated");
        this.toastr.success("Successfully changed status!");
        location.href = '/admin/list';
      });
  }
}
