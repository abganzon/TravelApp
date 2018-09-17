import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';


@Injectable()
export class GlobalProvider {
  loggedinuser:     any = '';
  loggedinuserid:   any = '';
  isOperator:       any = false;
  isAuthenticated:  any = false;
  


  constructor(
    private storage: Storage
  ) { }


  getUserData() {
    this.storage.get('userdata').then(userdata => {
			if(userdata != null) {

				this.loggedinuserid   = userdata.id;
				this.loggedinuser     = userdata.username;
        this.isOperator       = userdata.is_operator;
        this.isAuthenticated  = userdata.isAuthenticated
        
        console.log('global userdata.username: ' + userdata.username);
				console.log('global loggedinuserid : ' + this.loggedinuserid);
				console.log('global loggedinuser: ' + this.loggedinuser);
        console.log('global isAuthenticated: ') + this.isAuthenticated;
			}
		});
  }
  
  login() {
    this.storage.set('isAuthenticated', 1);
    this.isAuthenticated = 1;
  }

  async logout() {
    this.storage.set('isAuthenticated', 0);
    this.loggedinuser = '';
    this.loggedinuserid = 0;

    this.storage.remove('userdata');
    this.isAuthenticated = 0;

    console.log('logout-loggedinuser: ' + this.loggedinuser);
  }

  setUserData(data: string) {
    console.log('data from login: ' + data);
    this.storage.set('userdata', data);
    this.storage.set('isAuthenticated', 1);
  }

  getLoggedInUser() {
    console.log('global-getLoggedInUser:');
    return this.loggedinuser;
  }

  getLoggedInUserId() {
    return this.loggedinuserid;
  }

  getIsOperator() {
    return this.isOperator;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  setLoggedInUser(loggedinuser: string) {
    this.storage.set('loggedinuser', loggedinuser);
    this.loggedinuser = loggedinuser;
  }

  setLoggedInUserId(loggedinuserid: string) {
    this.storage.set('loggedinuserid', loggedinuserid);
    this.loggedinuserid = loggedinuserid;
  }

  setIsOperator(isOperator: number) {
    this.storage.set('isOperator', isOperator);
    this.isOperator = isOperator;
  }

  setIsAuthenticated(isAuthenticated: number) {
    this.isAuthenticated = isAuthenticated;
    this.storage.set('isAuthenticated', isAuthenticated);
  }
}
