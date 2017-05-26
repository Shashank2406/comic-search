import { Component,OnInit } from '@angular/core';
import { ConnectService } from './connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  users;
  constructor(public get: ConnectService){
    
  }
  ngOnInit() {
    this.get.getusers().subscribe(data=>{
      this.users=data;
      console.log(this.users)
    })
    
  }
  title = 'app works!';
}
