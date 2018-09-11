import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParticipantsHomePage } from '../participants-home/participants-home';
import { DetailsPage } from '../details/details';
import { App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
 rate:any = 0 ;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public appCtrl: App, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
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
    this.appCtrl.getRootNav().push(LoginPage); 
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
