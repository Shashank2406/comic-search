import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private getdata:ConnectService,private router1:Router) { }
  valid=1;
  ngOnInit() {
    if(localStorage.getItem("role")=="User"){
      this.valid=0;
    }
    else{
      this.valid=1;
    }
  }
  log(){
    console.log("here")
    localStorage.clear();
    this.ngOnInit();
    this.router1.navigate([''])
  }
  data()
  {
    this.getdata.getcomic().subscribe(res=>{
      console.log(res);
      this.router1.navigate(['/comic'])
    })
    
  }
}
