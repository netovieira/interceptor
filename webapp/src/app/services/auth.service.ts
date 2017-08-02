import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Response} from "@angular/http";


@Injectable()
export class AuthService {

  private auth : any;

  constructor(private api:ApiService) {
    this.getAuth();
  }


  getAuth() {
    this.api.get('isLogged')
      .subscribe((res:Response) => { this.auth = res.json() } )
  }

  isLogged(): Observable<boolean> | boolean{
    return this.auth.access;
  }

}
