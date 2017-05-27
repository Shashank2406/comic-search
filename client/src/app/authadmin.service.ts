import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';
import {ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthadminService implements CanActivate {

  constructor(public a:AuthService) { }
  canActivate(route: ActivatedRouteSnapshot) {
    var x= route.data;
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
