import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data="Hello";
  display=1;
  constructor(public searcher: ConnectService) { }
  htmldata="";
  ngOnInit() {
  }
  searching(value)
  {
    this.searcher.searchcall(value).subscribe(info=>{
      this.data=info.respData.data
      console.log(this.data)
      if(info.status==false)
      {
        this.htmldata="No search Result";
        this.display=1;
      }
      else
      {
        this.htmldata="";
        this.display=0;
      }
    })
  }

}
