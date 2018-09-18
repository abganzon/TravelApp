import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import 'rxjs/add/operator/map'
import { RideService } from '../../providers/ride-service';
import { HttpService } from '../../providers/http-service';
import { LoginPage } from '../login/login';
import { App, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 
})
export class HomePage {
  rate: any =0 ;
  items: any;
  activeTours: any = [];
  activeToursCount: any = 0;
    
  constructor(
  public navCtrl: NavController,  
  private viewCtrl: ViewController, 	
  public rideService: RideService,
  public http: HttpService,
  public menu: MenuController) 
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

  details(id) { 
    this.navCtrl.push(DetailsPage,{
      id: id
    });
  }

  onModelChange(event){
    this.rate = event;
    console.log(event);
    }
   
}
