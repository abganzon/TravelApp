import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BidnowPage } from '../bidnow/bidnow';

/**
 * Generated class for the AvailablebiddingdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-availablebiddingdetails',
  templateUrl: 'availablebiddingdetails.html',
})
export class AvailablebiddingdetailsPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailablebiddingdetailsPage');
  }
  bidnow()
  {
    this.navCtrl.push(BidnowPage);
  }

}
