import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperatorControlPanelPage } from './operator-control-panel';

@NgModule({
  declarations: [
    OperatorControlPanelPage,
  ],
  imports: [
    IonicPageModule.forChild(OperatorControlPanelPage),
  ]
})
export class OperatorControlPanelPageModule {}
