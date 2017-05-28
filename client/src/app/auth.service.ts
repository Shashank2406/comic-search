import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';
import {ActivatedRouteSnapshot} from '@angular/router';



@Injectable()
export class AuthService implements CanActivate {
  role;
  constructor(public router1:Router) { }
  verifier(info){
    console.log(info.status)
    if(info.status==false)
    {
      alert("WRONG CREDENTIALS")
    }
    else{
      this.role=info.respData.data;
      //console.log(info)
      //alert(this.role)
      localStorage.setItem("role",this.role)
      if(this.role=="Admin")
      { 
        this.router1.navigate(['/admin'])
      }
      else{
        if(this.role=="superadmin"){
        this.router1.navigate(['/super'])
      }
      else{
        
        this.router1.navigate(['/search'])
      }
    }
  }
  }
  
  canActivate(route: ActivatedRouteSnapshot) {
    // console.log();
    var x= route.data;
    console.log(x)
    if(x[0].role==localStorage.getItem("role"))
    {
      return true;
    }
    else
    {
      return false;
    } 
    
  }
}
