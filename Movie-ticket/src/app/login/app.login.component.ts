import { Component, OnInit } from "@angular/core";
import { User } from "./login.user.model";
import { UserService } from "../services/app.user.service";
import { ComponentFactoryResolver } from "@angular/core/src/render3";
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl:'app.login.html',
   // styleUrls:['app.login.css']
})

export class LoginComponent {
    loginHeaderText = "Login";
    loginMessage: string = null;
    loginSucess: boolean = false;
    user: User = {
        id: 0,
        name: null,
        emailID: null,
        password: null,
    };

        constructor(private userService : UserService,
            private routingService : ActivatedRoute,
            private routerService : Router) {
    
     
    }

    loginUser() {
        this.userService.validateUser(this.user).subscribe((returnedUser: User[]) =>{
            if(returnedUser != null && returnedUser.length != 0) {
                this.loginMessage = "Logged in succesfully!"
                this.user = returnedUser[0];
                this.loginSucess = true;
            } else {
                this.loginMessage = "Login Failed";
                this.loginSucess = false;
            }
        })
        let returneUser = this.userService.validateUser(this.user);
// console.log(returneUser)
    }

  
    navigateToRegisterPage() {
       this.routerService.navigate(["/signup"]) ;
    }
}
   
