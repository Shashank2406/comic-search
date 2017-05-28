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
  id;
  form_edit=1;
  flag_1=0;
  ngOnInit() {
    this.getseries();
  }
  updateseries(form1){
    console.log(this.id)
    this.postapi.updateseries(form1,this.id).subscribe(data=>{
      if(data.status==false){
        console.log("Error")
      }
      this.getseries();
      this.form_edit=1;
      this.flag_1=0
    })
  }
  getseries(){
    this.postapi.getseries().subscribe(info=>{
    this.series=info.respData.data;
  })
}
editseries(id){
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
