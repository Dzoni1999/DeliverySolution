import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/communications/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:  FormGroup;
  
  constructor(private router: Router, private userService: UserService, private ToastrService: ToastrService) { }

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
    this.userService.RegisterUser(this.registerForm.value).subscribe(
      data=> {
        console.log(data);
        if (data.status == false){
          this.ToastrService.error("Registration failed!");
          location.href = '/register';
        }
        else{
          this.ToastrService.success("Registration successfull");
          this.router.navigate(['login']);
        }
      },
      err => {
        console.log(JSON.stringify(err));
        this.ToastrService.error("Error! Communication with server failed!");
      }
    );
  }
}
