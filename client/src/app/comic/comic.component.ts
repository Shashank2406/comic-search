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
  ngOnInit() {
    this.data()
  }
  data()
  {
    this.getdata.getcomic().subscribe(res=>{
      //console.log(res);
      this.data1=res.respData.data;
      //this.image=this.data1[0].image;
      //console.log(this.image)
    })
  }
}
