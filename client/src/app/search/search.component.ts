import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchcomic;
  constructor(public searcher: ConnectService) { }

  ngOnInit() {
  }
  searching(value)
  {
    this.searcher.searchcall(value).subscribe(res=>{
      console.log(res)
    })
  }

}
