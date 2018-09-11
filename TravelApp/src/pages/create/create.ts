import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddtourparticipantsPage } from '../addtourparticipants/addtourparticipants';
import { ParticipantsHomePage } from '../participants-home/participants-home';
import { App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public appCtrl: App, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  addtourparticipants(){
    this.navCtrl.push(AddtourparticipantsPage);
  }
  back()
  {
    this.appCtrl.getRootNav().push(ParticipantsHomePage);
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
