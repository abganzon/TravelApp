import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParticipantsControlPanelPage } from '../participants-control-panel/participants-control-panel';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the ParticipantsHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participants-home',
  templateUrl: 'participants-home.html',
})
export class ParticipantsHomePage {
  rate: any =0 ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantsHomePage');
  }
  onModelChange(event){
    this.rate = event;
    console.log(event);
    }
  participantspcontrolpanel()
  {
    this.navCtrl.push(ParticipantsControlPanelPage);
  }
  details()
  {
    this.navCtrl.push(DetailsPage);
  }
}
