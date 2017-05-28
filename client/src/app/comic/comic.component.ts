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
 form_send={
    image_id:"",
    comment:"",
    name:""
  }
  comments;
  cid;
  ngOnInit() {
    this.data()
    if(localStorage.getItem("role")=="User")
    {
      this.valid=1;
    }
    else{
      this.valid=0;
    }
    this.getcomment();

  }

  data()
  {
    this.getdata.getcomic().subscribe(res=>{
      //console.log(res);
      //res.staus=false;
      if(res.staus==false)
      {
        this.data1="No data Available";
        
      }else{
        this.data1=res.respData.data;
      }
      console.log(this.data1)
      //this.image=this.data1[0].image;
      //console.log(this.image)
    })
  }
  comment(value,id){
    // console.log(value)
    // console.log(id)
    // console.log(localStorage.getItem("username"))
    this.form_send.image_id=id;
    this.form_send.name=localStorage.getItem("username");
    this.form_send.comment=value;
    //console.log(this.form_send)
    this.getdata.putcomment(this.form_send).subscribe(res=>{
      console.log(res);
      this.getcomment();
    })
    
  }
  getcomment(){
    this.getdata.getcomment().subscribe(res=>{
      //console.log(res)
      this.comments=res.respData.data;
      console.log(this.comments)
    })
  }
}
