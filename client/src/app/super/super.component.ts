import { Component, OnInit } from '@angular/core';
import { data } from './role.js';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {

  constructor(public route1:Router,public roleget:AuthService,public postapi:ConnectService) { 
    // this.datrole=this.roleget.sendrole()
    // if(this.datrole==data[0].role)
    // {
    //   this.action=data[0].data.action;
    //   this.actions=data[0].data.actions;
    //   this.type=data[0].data.type;
    //   this.types=data[0].data.types;
    // }
    // else
    // {
    //   this.action=data[1].data.action;
    //   this.actions=data[1].data.actions;
    //   this.type=data[1].data.type;
    //   this.types=data[1].data.types;
    // }
  }
  users=[{}];
  // action;
  // actions;
  type="Admin";
  types=["Admin","User"];
  datrole;
  form_add=1;
  form_send_add={
    username:"",
    password:"",
    role:""
  }
  ngOnInit() {
   this.getuser()
}
form_delete=1;
length;
getuser()
{
  this.postapi.getusers().subscribe(info=>{
    this.users=info.respData.data;
    console.log(this.users)
  })
}
getapi()
 {
    this.form_add=0;  
    
}
 postuser(form1){
  this.form_send_add=form1;
  this.form_send_add.role=this.type;
  console.log(this.form_send_add)
  this.postapi.postuser(form1).subscribe(data=>{
    alert("Success");
    console.log(data);
    this.form_add=1; 
    this.getuser();
  })
 }
 deleteuser(user){
   console.log(user)
   this.postapi.deleteapi(user).subscribe(data=>{
     console.log(data)
     if(data=="success")
     {
       alert("User Deleted");
     }
     this.getuser();
   })
 }
 log(){
   localStorage.clear();
   this.route1.navigate([""]);
 }
}