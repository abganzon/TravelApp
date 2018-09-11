import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParticipantsHomePage } from './participants-home';

@NgModule({
  declarations: [
    ParticipantsHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ParticipantsHomePage),
  ],
})
export class ParticipantsHomePageModule {}
