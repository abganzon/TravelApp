import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParticipantsControlPanelPage } from './participants-control-panel';

@NgModule({
  declarations: [
    ParticipantsControlPanelPage,
  ],
  imports: [
    IonicPageModule.forChild(ParticipantsControlPanelPage),
  ],
})
export class ParticipantsControlPanelPageModule {}
