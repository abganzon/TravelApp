import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AddtourparticipantsPage } from '../addtourparticipants/addtourparticipants';
import { ParticipantsHomePage } from '../participants-home/participants-home';
import { App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ParticipantsControlPanelPage } from '../participants-control-panel/participants-control-panel';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,  public appCtrl: App, private toastCtrl: ToastController, private alertCtrl: AlertController, public menuCtrl: MenuController) {
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
