import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthGuard {
  
  public user: any;

  public token: string;

  public jwtHelper: JwtHelper = new JwtHelper;

  constructor(private storage: Storage) {}

  public setUser(token)
  { 
    this.token = token;
    this.user = this.jwtHelper.decodeToken(token);
    this.storage.set('token', token);
  }

  public authenticated() {
    if (!this.token) return false;
    return !this.jwtHelper.isTokenExpired(this.token);
  }
  
  public canActivate() {
    return this.authenticated();
  }

  public check() {
    let guard = this;
    return this.storage.get('token')
               .then(token => {
                 if (token) guard.setUser(token);
            });
  }

  public username()
  {
    if (!this.user)
     {
       return '';
     }

     if (this.user.name) return this.user.name;

     let callback = function(val) {
      return val ? val : null;
      }

    return [this.user.first_name, this.user.middle_name, this.user.last_name]
        .filter(callback).join(' ');
  }

  public logout() 
  {
    this.token = null;
    return this.storage.remove('token');
  }
}