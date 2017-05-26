import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';

@Injectable()
export class ConnectService {

  constructor(public httpcall : Http) { }
  getcomic() : Observable<any>
  {
    return this.httpcall.get("http://localhost:2001/api/comic").map(
        data => data.json()
        );
  }
  searchcall(reg): Observable<any> {
    console.log(reg);
    return this.httpcall.get("http://localhost:2001/api/comic/" + reg).map(
      data => data.json()
    );
  }
  getusers(): Observable<any>
  {
    return this.httpcall.get("http://localhost:2001/api/user").map(
      data=>data.json()
    );
  }
  verify(form){
  let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(form);
    return this.httpcall.post("http://localhost:2001/api/user/verify", form, headers).map((res: Response) => res.json());
  }
}
