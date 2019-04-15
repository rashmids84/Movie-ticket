import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/app.user.service';
import { Router} from '@angular/router';
import { User} from '../login/login.user.model';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './app.signup.html'
})
export class SignupComponent implements OnInit {
  private userAddError: boolean;
  constructor(private loginService: UserService,
              private router: Router) {
  }
  myUsers: User[] = [];
  newUser: User = new User( 'null', 'null', 'null');

  user: User = {
    id: 0,
    name: 'null',
    emailID: 'null',
    password: 'null',
  };
  
  userForm: FormGroup;
  addUser(userForm) {
    console.log(userForm);
    this.newUser.name = userForm.Name;
    this.newUser.emailID = userForm.emailId;
    this.newUser.password = userForm.password;
    this.loginService.addNewUser(this.newUser).subscribe(
      (addedUser: User) => {
        this.myUsers.push(addedUser);
        this.userAddError = false;
        console.log(this.newUser);
      },
      error => {
        console.log('Error');
        this.userAddError = true;
      }
    );
  }
 
  ngOnInit(): void {
    // this.userForm = new FormGroup({
    //   id: new FormControl(),
    //   userName: new FormControl(),
    //   emailId: new FormControl(),
    //   password: new FormControl()
    // });
  }
}
