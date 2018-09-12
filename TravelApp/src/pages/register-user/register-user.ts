import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
/**
 * Generated class for the RegisterUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html',
})
export class RegisterUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, private toastCtrl: ToastController, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterUserPage');
  }
  back()
  {
    this.appCtrl.getRootNav().push(LoginPage);
  }
  register(){
    this.navCtrl.push(HomePage);
    let toast = this.toastCtrl.create({
      message: 'Successfully Registered',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
