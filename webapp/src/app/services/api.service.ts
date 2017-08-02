import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {

  private url : string = 'http://localhost:3000/';

  constructor(private http:Http) {}

  get( path : string, opts? : RequestOptionsArgs ) : Observable<Response>{
    if ( opts )
      return this.http.get(this.url + path, opts);
    else
      return this.http.get(this.url + path);
  };

  post( path : string, body: any, opts? : RequestOptionsArgs ) : Observable<Response>{
    if ( opts )
      return this.http.post(this.url + path, body, opts);
    else
      return this.http.post(this.url + path, body);
  };

  put( path : string, body: any, opts? : RequestOptionsArgs ) : Observable<Response>{
    if ( opts )
      return this.http.put(this.url + path, body, opts);
    else
      return this.http.put(this.url + path, body);
  };

  delete( path : string, opts? : RequestOptionsArgs ) : Observable<Response>{
    if ( opts )
      return this.http.delete(this.url + path, opts);
    else
      return this.http.delete(this.url + path);
  };
}
