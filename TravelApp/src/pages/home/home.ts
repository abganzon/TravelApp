import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 rate: any=0;
  constructor(public navCtrl: NavController) {

  }

  loginpage()
  {
    this.navCtrl.push(LoginPage);
  }
  
  details()
  {
    this.navCtrl.push(DetailsPage);
  }
  onModelChange(event){
    this.rate = event;
    console.log(event);
    }
}
