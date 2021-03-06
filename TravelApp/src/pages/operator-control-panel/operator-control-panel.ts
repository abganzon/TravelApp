import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

/**
 * Generated class for the OperatorControlPanelPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operator-control-panel',
  templateUrl: 'operator-control-panel.html'
})
export class OperatorControlPanelPage {

  activeRoot = 'ActivePage'
  closedRoot = 'ClosedPage'
  addRoot = 'AddPage'
  availablebiddingRoot = 'AvailablebiddingPage'
  
  constructor(public navCtrl: NavController) {}



}
