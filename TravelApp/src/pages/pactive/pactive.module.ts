import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PactivePage } from './pactive';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    PactivePage,
  ],
  imports: [
    IonicPageModule.forChild(PactivePage),
    Ionic2RatingModule
  ],
})
export class PactivePageModule {}
