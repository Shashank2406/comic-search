import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';

@Injectable()
export class ConnectService {

  constructor(public httpcall : Http) { }
  deleteseries(id): Observable<any> {
    return this.httpcall.get("http://localhost:2001/api/series/delete/"+id).map(
      data => data.json()
    );
  }
  deleteseason(id): Observable<any> {
    return this.httpcall.get("http://localhost:2001/api/season/delete/"+id).map(
      data => data.json()
    );
  }
  deleteapi(reg): Observable<any> {
    return this.httpcall.get("http://localhost:2001/api/user/delete/" + reg).map(
      data => data.json()
    );
  }
  deletecomic(comic_name): Observable<any> {
 
    return this.httpcall.get("http://localhost:2001/api/comic/delete/" + comic_name).map(
      data => data.json()
    );
  }
  getseries() : Observable<any>
  {
    return this.httpcall.get("http://localhost:2001/api/series").map(
        data => data.json()
        );
  }
  getseason() : Observable<any>
  {
    return this.httpcall.get("http://localhost:2001/api/season").map(
        data => data.json()
        );
  }
  getcomic() : Observable<any>
  {
    return this.httpcall.get("http://localhost:2001/api/comic").map(
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
    //console.log(form);
    return this.httpcall.post("http://localhost:2001/api/user/verify", form, headers).map((res: Response) => res.json());
  }
  postuser(form){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(form);
    return this.httpcall.post("http://localhost:2001/api/user/", form, headers).map((res: Response) => res.json());
  }
  postseries(data){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(data);
    return this.httpcall.post("http://localhost:2001/api/series/", data, headers).map((res: Response) => res.json());
  }
  postseason(data){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(data);
    return this.httpcall.post("http://localhost:2001/api/season/", data, headers).map((res: Response) => res.json());
  }
  searchcall(reg): Observable<any> {
    console.log(reg);
    return this.httpcall.get("http://localhost:2001/api/comic/" + reg).map(
      data => data.json()
    );
  }
}
