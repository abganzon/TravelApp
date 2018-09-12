import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AvailablebiddingdetailsPage } from '../availablebiddingdetails/availablebiddingdetails';
import { BidnowPage } from '../bidnow/bidnow';
/**
 * Generated class for the AvailablebiddingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-availablebidding',
  templateUrl: 'availablebidding.html',
})
export class AvailablebiddingPage {
rate: any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public appCtrl: App, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailablebiddingPage');
  }

  onModelChange(event){
    this.rate = event;
    console.log(event);
    }

  
    logout()
    {
      let alert = this.alertCtrl.create({
        title: 'Confirmation',
        message: 'Are you sure you want to logout?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Logout',
            handler: () => {
              this.appCtrl.getRootNav().push(HomePage);
              console.log('Close clicked');
              
              let toast = this.toastCtrl.create({
                message: 'Successfully Logout',
                duration: 2000,
                position: 'middle'
              });
          
              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });
          
              toast.present();
  
            }
          }
        ]
      });
      alert.present();
    }
  
    more()
    {
      this.appCtrl.getRootNav().push(AvailablebiddingdetailsPage);
    }
    bidnow()
    {
      this.appCtrl.getRootNav().push(BidnowPage);
    }

}
