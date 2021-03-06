import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username, password){
    //console.log('before ' + this.isUserLoggedIn());
    if(username==="priya" && password==="lather"){
      sessionStorage.setItem('authenticaterUser',username)
      //console.log('after ' + this.isUserLoggedIn());
      return true;   
    }
    return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null);
    console.log("inside logged in method");
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
