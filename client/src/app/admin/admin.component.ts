import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public postapi:ConnectService,public route1:Router) { }
  series;
  form_series=1;
  flag=0
  ngOnInit() {
    this.getseries();
  }
  getseries(){
    this.postapi.getseries().subscribe(info=>{
    this.series=info.respData.data;
  })
}
getapi(){
  if(this.flag==0)
  {
    this.form_series=0;
    this.flag=1;
  }
  else{
    this.form_series=1;
    this.flag=0
  }
  
}
  postuser(data){
  this.postapi.postseries(data).subscribe(data=>{
    alert("Success");
    console.log(data);
    this.form_series=1;
    this.getseries();
  })
 }
 deleteuser(id){
   //console.log(user)
   this.postapi.deleteseries(id).subscribe(data=>{
     console.log(data)
     if(data=="success")
     {
       alert("User Deleted");
     }
     this.getseries();
   })
 }
 log(){
   localStorage.clear();
   this.route1.navigate([""]);
 }
}
