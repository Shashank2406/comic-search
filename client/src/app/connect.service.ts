import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';
import { Observer } from "rxjs";
import {Configuration} from "./config"

@Injectable()
export class ConnectService {

  constructor(public httpcall : Http,public apiurl:Configuration) { }
  putcomment(form){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(form);
    //console.log(this.apiurl.UrlObj.seasonupdate)
    return this.httpcall.put(this.apiurl.UrlObj.commentpost, form, headers).map((res: Response) => res.json());
  }
  updatecomic(form,id){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(form);
    //console.log(this.apiurl.UrlObj.seasonupdate)
    return this.httpcall.put(this.apiurl.UrlObj.comicupdate+id, form, headers).map((res: Response) => res.json());
  }
  updateseason(form,id){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(form);
    //console.log(this.apiurl.UrlObj.seasonupdate)
    return this.httpcall.put(this.apiurl.UrlObj.seasonupdate+id, form, headers).map((res: Response) => res.json());
  }
  updateseries(form,id){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(form);
    return this.httpcall.put(this.apiurl.UrlObj.seriesupdate+id, form, headers).map((res: Response) => res.json());
  }
  updateusers(form,id){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(form);
    return this.httpcall.put(this.apiurl.UrlObj.userupdate+id, form, headers).map((res: Response) => res.json());
  }
  deleteseries(id): Observable<any> {
    return this.httpcall.get(this.apiurl.UrlObj.deleteseries+id).map(
      data => data.json()
    );
  }
  deleteseason(id): Observable<any> {
    return this.httpcall.get(this.apiurl.UrlObj.deletedseason+id).map(
      data => data.json()
    );
  }
  deleteapi(reg): Observable<any> {
    return this.httpcall.get(this.apiurl.UrlObj.deleteapi + reg).map(
      data => data.json()
    );
  }
  deletecomic(comic_name): Observable<any> {
 
    return this.httpcall.get(this.apiurl.UrlObj.deletecomic + comic_name).map(
      data => data.json()
    );
  }
  getseries() : Observable<any>
  {
    return this.httpcall.get(this.apiurl.UrlObj.getseries).map(
        data => data.json()
        );
  }
  getseason() : Observable<any>
  {
    return this.httpcall.get(this.apiurl.UrlObj.getseason).map(
        data => data.json()
        );
  }
  getcomic() : Observable<any>
  {
    return this.httpcall.get(this.apiurl.UrlObj.getcomic).map(
        data => data.json()
        );
  }
  getusers(): Observable<any>
  {
    return this.httpcall.get(this.apiurl.UrlObj.getuser).map(
      data=>data.json()
    );
  }
  getcomment(): Observable<any>
  {
    return this.httpcall.get(this.apiurl.UrlObj.getcomment).map(
      data=>data.json()
    );
  }
  verify(form){
  let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    //console.log(form);
    return this.httpcall.post(this.apiurl.UrlObj.verifyuser, form, headers).map((res: Response) => res.json());
  }
  postcomic(form){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(form);
    return this.httpcall.post(this.apiurl.UrlObj.postcomic, form, headers).map((res: Response) => res.json());
  }
  postuser(form){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(form);
    return this.httpcall.post(this.apiurl.UrlObj.postuser, form, headers).map((res: Response) => res.json());
  }
  postseries(data){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(data);
    return this.httpcall.post(this.apiurl.UrlObj.postseries, data, headers).map((res: Response) => res.json());
  }
  postseason(data){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    console.log(data);
    return this.httpcall.post(this.apiurl.UrlObj.postseason, data, headers).map((res: Response) => res.json());
  }
  searchcall(reg): Observable<any> {
    console.log(reg);
    return this.httpcall.get(this.apiurl.UrlObj.searchcomic + reg).map(
      data => data.json()
    );
  }

}
