import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailablebiddingPage } from './availablebidding';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    AvailablebiddingPage
  ],
  imports: [
    IonicPageModule.forChild(AvailablebiddingPage),
    Ionic2RatingModule
  ],
})
export class AvailablebiddingPageModule {}
