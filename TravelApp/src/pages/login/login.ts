import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { OperatorControlPanelPage } from '../operator-control-panel/operator-control-panel';
import { ParticipantsHomePage } from '../participants-home/participants-home';
import { RegisterUserPage } from '../register-user/register-user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  home(){
    this.navCtrl.push(ParticipantsHomePage);
  }
  operator(){
    this.navCtrl.push(OperatorControlPanelPage);
  }

 register()
 {
  this.navCtrl.push(RegisterUserPage);
 }

}
