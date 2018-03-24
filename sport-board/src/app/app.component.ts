import { Component,OnInit } from '@angular/core';
import { UserApiService } from './services/api.user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[UserApiService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private userService:UserApiService){

  }

  getUserData(){
    this.userService.getUsers();
    console.log("data recieved");
  }
  
}
