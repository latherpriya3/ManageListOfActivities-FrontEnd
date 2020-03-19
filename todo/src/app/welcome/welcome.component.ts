import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name='';
  message = 'Welcome to TODO app';
  welcomeMessageFromService: String;
  constructor(private route: ActivatedRoute,
    private service:WelcomeDataService) {
    
   }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfulResponse(response),
      error=> this.handleErrorResponse(error)
    );
    
    // error=> this.handleErrorResponse(error);
    
  }

  handleSuccesfulResponse(response){
    this.welcomeMessageFromService = response.message
    console.log(response);
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message
  }

  getOneMoreWelcomeMessage(){
    console.log("Hello Priya");
  }

}
