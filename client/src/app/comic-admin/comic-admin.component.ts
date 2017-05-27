import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-comic-admin',
  templateUrl: './comic-admin.component.html',
  styleUrls: ['./comic-admin.component.css']
})
export class ComicAdminComponent implements OnInit {
  
  constructor(public postapi:ConnectService) { }
  form_comic=1;
  comic
  flag=0;
  public uploader:FileUploader = new FileUploader({url:'http://localhost:2001/upload'});
  ngOnInit() {
    this.getcomic();
  }
   getcomic(){
    this.postapi.getcomic().subscribe(res=>{
      // console.log(res);
      this.comic=res.respData.data;
    })
    
}
getapi(){
   if(this.flag==0)
  {
    this.form_comic=0;
    this.flag=1;
  }
  else{
    this.form_comic=1;
    this.flag=0
  }
}
// postuser(data){
//   data.startson=data.startson.formatted;
//   data.endson=data.endson.formatted;
//   this.postapi.postseason(data).subscribe(data=>{
//     this.form_series=1;
//     if(data.status==false)
//     {
//       alert("Series ID not Found")
//     }
//     else{
//       console.log(data);
//     this.getseason();
//     }
//   })
//  }
 deleteuser(comic_name){
   this.postapi.deletecomic(comic_name).subscribe(data=>{
     console.log(data)
       this.getcomic();
   })
 }
}
