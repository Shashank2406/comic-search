import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';


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
  base64;
  senddata={
    name: "", 
    description: "", 
    id: "",
    image :""
  }
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
changeListener(event){
  console.log(event.target)
  this.encodeImageFileAsURL(event.target)
}
encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend=(data=>{
    this.base64=reader.result;
    //console.log('RESULT', reader.result)
  })
  reader.readAsDataURL(file);
  //console.log(this.base64);
}
postuser(data){

  this.senddata=data;
  this.senddata.image=this.base64;
  console.log(this.senddata)
  this.postapi.postcomic(data).subscribe(data=>{
    //this.form_series=1;
    if(data.status==false)
    {
      alert("Comic ID not Found")
    }
    else{
      console.log(data);
    this.getcomic();
    }
  })
 }
 deleteuser(comic_name){
   this.postapi.deletecomic(comic_name).subscribe(data=>{
     console.log(data)
       this.getcomic();
   })
 }
}
