import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { OperatorControlPanelPage } from '../operator-control-panel/operator-control-panel';
import { ToastController } from 'ionic-angular';
import { App } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public appCtrl: App, private toastCtrl: ToastController) {
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
            this.navCtrl.push(LoginPage);
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
            this.navCtrl.push(LoginPage);
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
            this.appCtrl.getRootNav().push(LoginPage);
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

}
