import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryPage),
    Ionic2RatingModule
  ],
})
export class HistoryPageModule {}
