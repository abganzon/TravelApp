import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClosedPage } from './closed';

@NgModule({
  declarations: [
    ClosedPage,
  ],
  imports: [
    IonicPageModule.forChild(ClosedPage),
  ],
})
export class ClosedPageModule {}
