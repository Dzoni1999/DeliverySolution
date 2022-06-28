import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../communications/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginSection: FormGroup;
  currentUser: User;
  loginFailed: any;

  constructor(private communicationService : UserService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    

    this.loginSection = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
  }

  checkIfUserExists(){
      this.communicationService.CheckIfUserExists(this.loginSection.value).subscribe(
        data => {
          console.log("Login data:");
          console.log(data);
          if (data.status == false){
            this.toastrService.error(data.message);
          }
          else{
            this.currentUser = data;
            this.toastrService.success("Successfully logged in");
            localStorage.setItem('currentUser', data);
            this.router.navigate(['user/profile']);
          }
        },
        err => {
          console.log(JSON.stringify(err));
          alert("Error while checking User Information!");
        }
      )
  }

}
