import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { OperatorControlPanelPage } from '../operator-control-panel/operator-control-panel';
import { ParticipantsControlPanelPage } from '../participants-control-panel/participants-control-panel';

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
  data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, 
    private toastCtrl: ToastController, public menuCtrl: MenuController, public alertCtrl: AlertController,
    public http: Http) {
  }
  apiRoot: string = "http://rides.iothings.asia/public/api/addPartOperator";

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Unable to login',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterUserPage');
  }
  back()
  {
    this.appCtrl.getRootNav().push(LoginPage);
  }

  postOperator(){
    console.log("POST");
    let url = this.apiRoot;
    let fullname = this.data.fullname;
    let username = this.data.usernamex;
    let password = this.data.passwordx;
    let email = this.data.emailx;
    let pnumber = this.data.pnumber;
    
    this.http.post(url , {is_operator:"1", name:fullname, username:username, password:password, phone:pnumber, email:email}).subscribe(res =>{ 
      console.log(res.statusText);
      let o = JSON.parse(res.text());
      
      console.log('return '+ res.status);
      if (o=='success: true' && res.status == 200 ){
        this.navCtrl.setRoot(OperatorControlPanelPage);
        let toast = this.toastCtrl.create({
          message: 'Successfully Registered',
          duration: 2000,
          position: 'middle'
          });
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
      
          toast.present();
      }else  {
        this.alert("Kindly check fields");
      }
    });
  }

  postParticipant(){
    console.log("POST");
    let url = this.apiRoot;
    let fullname = this.data.fullname;
    let username = this.data.usernamex;
    let password = this.data.passwordx;
    let email = this.data.emailx;
    let pnumber = this.data.pnumber;
    
    this.http.post(url , {is_operator:"0", name:fullname, username:username, password:password, phone:pnumber, email:email}).subscribe(res =>{ 
      console.log(res.statusText);
      let o = JSON.parse(res.text());
      
      console.log('return '+ res.status);
      if (o=='success: true' && res.status == 200 ){
        this.navCtrl.setRoot(ParticipantsControlPanelPage);
        let toast = this.toastCtrl.create({
          message: 'Successfully Registered',
          duration: 2000,
          position: 'middle'
          });
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
      
          toast.present();
      }else  {
        this.alert("Kindly check fields");
      }
    });
  }

}
