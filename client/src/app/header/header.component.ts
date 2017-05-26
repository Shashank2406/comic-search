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

  ngOnInit() {
  }
  data()
  {
    this.getdata.getcomic().subscribe(res=>{
      console.log(res);
      this.router1.navigate(['/comic'])
    })
    
  }
}
