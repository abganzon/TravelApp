import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParticipantsControlPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participants-control-panel',
  templateUrl: 'participants-control-panel.html',
})
export class ParticipantsControlPanelPage {
  
  activeRoot = 'PactivePage'
  createRoot = 'CreatePage'
  historyRoot = 'HistoryPage'

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
