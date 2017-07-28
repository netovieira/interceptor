import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  isLogged(){
    return true;
  }

}
