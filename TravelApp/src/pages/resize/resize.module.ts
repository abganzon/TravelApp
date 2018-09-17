import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResizePage } from './resize';

@NgModule({
  declarations: [
    ResizePage,
  ],
  imports: [
    IonicPageModule.forChild(ResizePage),
  ],
})
export class ResizePageModule {}
