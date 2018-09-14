import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ParticipantsControlPanelPage } from '../participants-control-panel/participants-control-panel';
import { DetailsPage } from '../details/details';
import 'rxjs/add/operator/map'
import { RideService } from '../../providers/ride-service';
import { HttpService } from '../../providers/http-service';
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
  items: any;

  activeTours: any = [];
  activeToursCount: any = 0;
    
  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,  
  private viewCtrl: ViewController, 	
  public rideService: RideService,
  public http: HttpService,) 
  {

  }

  ionViewDidLoad() {
  
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);

    console.log('ionViewWillEnter ParticipantsHomePage');
    
		this.rideService.getActiveTours()
		.subscribe(
			data => {
				console.log('activeTours: ' + data);
				this.activeTours = data;
				this.activeToursCount = Object.keys(data).length;
				console.log('data present: ' + Object.keys(data).length);
			}, err => {
				
			}
		);
  }

  onModelChange(event){
    this.rate = event;
    console.log(event);
    }
  participantspcontrolpanel()
  {
    this.navCtrl.push(ParticipantsControlPanelPage);
  }
  details(id) { 
    this.navCtrl.push(DetailsPage,{
      id: id
    });
  }
}
