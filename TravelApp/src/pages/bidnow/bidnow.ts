import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the BidnowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bidnow',
  templateUrl: 'bidnow.html',
})
export class BidnowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BidnowPage');
  }
  
  ionViewWillEnter() {
    this.navCtrl.swipeBackEnabled = false;
 }
 
 ionViewWillLeave() {
     this.navCtrl.swipeBackEnabled = true;
 }

}
