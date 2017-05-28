import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';


@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  constructor(public getdata:ConnectService) { }
  data1;
  image;
  valid=1;
  role;
  ngOnInit() {
    this.data()
    if(localStorage.getItem("role")=="User")
    {
      this.valid=1;
    }
    else{
      this.valid=0;
    }

  }

  data()
  {
    this.getdata.getcomic().subscribe(res=>{
      console.log(res);
      //res.staus=false;
      if(res.staus==false)
      {
        this.data1="No data Available";
        
      }else{
        this.data1=res.respData.data;
      }
      
      //this.image=this.data1[0].image;
      //console.log(this.image)
    })
  }
  comment(value,id){
    console.log(value)
    console.log(id)
  }
}
