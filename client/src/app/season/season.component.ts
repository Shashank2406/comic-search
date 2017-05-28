import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  date: DateModel;
  options: DatePickerOptions;
  season;
  form_season=1;
  flag=0;
  id;
  form_edit=1;
  flag_1=0;
  constructor(public postapi:ConnectService) { 
    this.options = new DatePickerOptions();
  }
  
  ngOnInit() {
    this.getseason();
  }
  updateseason(form1){
    form1.startson=form1.startson.formatted;
    form1.endson=form1.endson.formatted;
    this.postapi.updateseason(form1,this.id).subscribe(data=>{
      if(data.status==false){
        console.log("Error")
      }
      this.getseason();
      this.form_edit=1;
      this.flag_1=0
    })
  }
  getseason(){
    this.postapi.getseason().subscribe(info=>{
    this.season=info.respData.data;
  })
}
  editseason(id){
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
  //console.log(this.flag+" "+this.form_season)
    if(this.flag==0)
    {
      this.form_season=0;
      this.flag=1;
    }
    else{
      this.form_season=1;
      this.flag=0
    }
  }
  postuser(data){
    data.startson=data.startson.formatted;
    data.endson=data.endson.formatted;
    this.postapi.postseason(data).subscribe(data=>{
      this.form_season=1;
      if(data.status==false)
      {
        alert("Series ID not Found")
      }
      else{
        console.log(data);
      this.getseason();
      }
    })
  }
  deleteuser(series_name){
    this.postapi.deleteseason(series_name).subscribe(data=>{
      console.log(data)
        this.getseason();
    })
 }

}
