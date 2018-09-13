import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import 'rxjs/add/operator/map'
import { RideService } from '../../providers/ride-service';
import { HttpService } from '../../providers/http-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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

    console.log('ionViewWillEnter HomePage');
    
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

  loginpage()
  {
    this.navCtrl.push(LoginPage);
  }

  details()
  {
    this.navCtrl.push(DetailsPage);
  }

  onModelChange(event){
    this.rate = event;
    console.log(event);
    }
   
}
