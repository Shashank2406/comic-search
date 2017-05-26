import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';
import {ActivatedRouteSnapshot} from '@angular/router';


@Injectable()
export class AuthService implements CanActivate {
  role;
  constructor(public router1:Router) { }
  verifier(data){
    console.log(data)
    if(data=="doesn't exit")
    {
      alert("WRONG CREDENTIALS")
    }
    else{
      this.role=data[0].role;
      console.log(this.role);
      this.router1.navigate(['/super'])
    }
  }
  
  canActivate(route: ActivatedRouteSnapshot) {
    // console.log();
    var x= route.data;
    // if(x.hasOwnProperty('role')){
      // console.log(x[0].role);
    // };
  //return true;
    console.log(x)
    console.log(x[0].role[0])
    console.log(this.role)
    if(x[0].role[0]==this.role||x[0].role[1]==this.role)
    {
      return true;
    }
    else
    {
      return false;
    } 
    
  }
}
