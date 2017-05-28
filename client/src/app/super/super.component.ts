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
    
  }
  users;
  type="Admin";
  types=["Admin","User"];
  datrole;
  form_add=1;
  form_edit=1;
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
  flag=0;
  flag_1=0;
  id;
  updateuser(form1){
    this.postapi.updateusers(form1,this.id).subscribe(data=>{
      if(data.status==false){
        console.log("Error")
      }
      this.getuser();
      this.form_edit=1;
      this.flag_1=0
    })
  }
  edituser(id){
    this.id=id;
    if(this.flag_1==0)
    {
      this.form_edit=0;
      this.flag_1=1;
    }
    else{
      this.form_edit=1;
      this.flag_1=0
    }
  }
  getuser()
  {
    this.postapi.getusers().subscribe(info=>{
    this.users=info.respData.data;
    console.log(this.users)
    })
  }
  getapi()
  {
    if(this.flag==0)
    {
      this.form_add=0;
      this.flag=1;
    }
    else{
      this.form_add=1;
      this.flag=0
    }
    
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