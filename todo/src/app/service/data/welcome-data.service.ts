

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
constructor(public message:String){

}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient:HttpClient
  ) { }

  executeHelloWorldBeanService(){
   let username = 'priya'
   let password = 'priya'
 
  const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    })
  
    console.log("before calling URL with headers");
     return this.httpClient.get<HelloWorldBean>(
       'http://localhost:8888/helloWorldBean',{headers});

    console.log("after calling URL with headers");
    
  }


}
