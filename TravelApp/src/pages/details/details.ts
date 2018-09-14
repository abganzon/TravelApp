import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RideService } from '../../providers/ride-service';
import * as ApiConf from '../../config/api';
import 'rxjs/add/operator/map';
import { HttpService } from '../../providers/http-service';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
    rate: any = 0;
    activeToursDetails: any = [];
    activeToursCountDetails: any = 0;
    getid: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public rideService: RideService, public http: HttpService) {
    let getid = navParams.get('id');
    console.log(getid);
    this.getid = navParams.get('id')
  }

  getActiveTourDetails(){
		return this.http.get(ApiConf.active_tour_details + '/'+this.getid);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  onModelChange(event){
    this.rate = event;
    console.log(event);
    }

    ionViewWillEnter() {
    console.log('ionViewWillEnter DetailsPage');
    
		this.getActiveTourDetails()
		.subscribe(
			data => {
				console.log('activeToursDetails: ' + data);
				this.activeToursDetails = data;
				this.activeToursCountDetails = Object.keys(data).length;
				console.log('data present: ' + Object.keys(data).length);
			}, err => {
				
			}
    );
  }

}
