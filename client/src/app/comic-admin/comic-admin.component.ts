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
  id;
  flag_1=0;
  form_edit=1;
  //form_table=0;
  ngOnInit() {
    this.getcomic();
  }
   getcomic(){
    this.postapi.getcomic().subscribe(res=>{
      // console.log(res);
      this.comic=res.respData.data;
    })
    
}
updatecomic(form1){
  this.senddata=form1;
  this.senddata.image=this.base64;
  this.postapi.updatecomic(this.senddata,this.id).subscribe(data=>{
      if(data.status==false){
        console.log("Error")
      }
      this.getcomic();
      this.form_edit=1;
      this.flag_1=0
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
editcomic(id){
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
postcomic(data){
  this.senddata=data;
  this.senddata.image=this.base64;
  console.log(this.senddata)
  this.postapi.postcomic(data).subscribe(data=>{
    this.form_comic=1;
    if(data.status==false)
    {
      alert("Season ID not Found")
    }
    else{
      console.log(data);
    this.getcomic();
    }
  })
 }
 deletecomic(comic_name){
   this.postapi.deletecomic(comic_name).subscribe(data=>{
     console.log(data)
       this.getcomic();
   })
 }
}
