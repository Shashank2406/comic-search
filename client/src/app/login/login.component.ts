import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string;
  pass:string;
  constructor(public send:ConnectService,public sender:AuthService) { 
    this.user="";
    this.pass="";
  }

  ngOnInit() {
  }
  check(form1)
  {
    // console.log(form1.value.username);
    // console.log(form1.value.password);
    console.log(form1)
    this.send.verify(form1).subscribe(data=>{
    //console.log(data);
    this.sender.verifier(data);
  })
  }
}
