import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParticipantsHomePage } from '../participants-home/participants-home';
import { DetailsPage } from '../details/details';
import { App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ParticipantsControlPanelPage } from '../participants-control-panel/participants-control-panel';

/**
 * Generated class for the PactivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pactive',
  templateUrl: 'pactive.html',
})
export class PactivePage {
 rate: any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, private toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PactivePage');
  }
  
  onModelChange(event){
    this.rate = event;
    console.log(event);
    }
  back()
  {
    this.appCtrl.getRootNav().push(ParticipantsHomePage);
  }
  details()
  {
    this.navCtrl.push(DetailsPage);
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
            this.navCtrl.push(LoginPage);
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

