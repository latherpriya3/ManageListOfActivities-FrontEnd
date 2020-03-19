import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'priya'
  password = "lather"
  errorMessage = "Invalid credential"
  invalidLogin = false;
  constructor(private router: Router,
    private hardcodedAuthenticaton:HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardcodedAuthenticaton.authenticate(this.username, this.password)){
      console.log("inside login");
      this.router.navigate(['welcome',this.username]);
       this.invalidLogin = false;
       
    }
    else{
       this.invalidLogin = true;
    }

    }
    
  }


