import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {

  constructor() { }
  action: string = "Add";
  actions: string[] = ["Update","Delete","Add"]
  type: string = "User";
  types: string[] = ["User","Admin"]
  ngOnInit() {
  }
 check(action,type)
 {
   console.log(action)
   console.log(type)
 }
}