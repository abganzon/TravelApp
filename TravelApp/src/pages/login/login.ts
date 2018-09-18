import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OperatorControlPanelPage } from '../operator-control-panel/operator-control-panel';
import { ParticipantsControlPanelPage } from '../participants-control-panel/participants-control-panel';
import { ParticipantsHomePage } from '../participants-home/participants-home';
import { RegisterUserPage } from '../register-user/register-user';

  import { Http } from '@angular/http';
  import 'rxjs/add/operator/map';

  import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ResolvedStaticSymbol } from '@angular/compiler';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { SuccessfulbookingPage } from '../successfulbooking/successfulbooking';
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

  data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,
    public loadingCtrl: LoadingController, private alertCtrl: AlertController,  private toastCtrl: ToastController,
    public http: Http, public fb: Facebook) {

      
  }

  apiRoot: string = "http://rides.iothings.asia/public/api/check_user";

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Unable to login',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  
  postUser (){
    console.log("POST");
    let url = this.apiRoot;
    let username = this.data.username;
    let password = this.data.password;
    this.http.post(url ,{username:username, password:password}).subscribe(res =>{ 
      console.log(res.statusText);
      if (res.json() != 'not passed'&& res.json() != 'not found'){
        console.log(res.json().is_operator);
        if(res.json().is_operator == 0){
        this.navCtrl.setRoot(ParticipantsHomePage);
        let toast = this.toastCtrl.create({
          message: 'Logged In',
          duration: 2000,
          position: 'middle'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
  
      toast.present();
      }
      else{
        this.navCtrl.setRoot(OperatorControlPanelPage);
        let toast = this.toastCtrl.create({
          message: 'Logged In',
          duration: 2000,
          position: 'middle'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
  
      toast.present();
      }
      }else{
        this.alert("Kindly check username or password");
      }
      console.log(res.json())});
    
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
 facebooklogin()
 {
     // Login with permissions
     this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
     .then( (res: FacebookLoginResponse) => {
 
         // The connection was successful
         if(res.status == "connected") {
 
             // Get user ID and Token
             var fb_id = res.authResponse.userID;
             var fb_token = res.authResponse.accessToken;
 
             // Get user infos from the API
             this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {
 
                 // Get the connected user details
                 var gender    = user.gender;
                 var birthday  = user.birthday;
                 var name      = user.name;
                 var email     = user.email;
 
                 console.log("=== USER INFOS ===");
                 console.log("Gender : " + gender);
                 console.log("Birthday : " + birthday);
                 console.log("Name : " + name);
                 console.log("Email : " + email);
 
                 // => Open user session and redirect to the next page
 
             });
 
         } 
         // An error occurred while loging-in
         else {
 
             console.log("An error occurred...");
 
         }
 
     })
     .catch((e) => {
         console.log('Error logging into Facebook', e);
     });
 }

}
