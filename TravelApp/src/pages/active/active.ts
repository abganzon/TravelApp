import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ActivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-active',
  templateUrl: 'active.html',
})
export class ActivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivePage');
  }

  confirmClose() {
    let alert = this.alertCtrl.create({
      title: 'Confirm closure',
      message: 'Do you want to close this tour?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Close',
          handler: () => {
            console.log('Close clicked');
          }
        }
      ]
    });
    alert.present();
  }

  confirmCancel() {
    let alert = this.alertCtrl.create({
      title: 'Confirm cancel',
      message: 'Do you want to cancel this tour?',
      buttons: [
        {
          text: 'Exit',
          role: 'cancel',
          handler: () => {
            console.log('Exit clicked');
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Close** clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
