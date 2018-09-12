import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Ionic2RatingModule } from 'ionic2-rating';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { AddtourparticipantsPage } from '../pages/addtourparticipants/addtourparticipants';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { LoginPage } from '../pages/login/login';
import { OperatorControlPanelPage } from '../pages/operator-control-panel/operator-control-panel';
import { ParticipantsControlPanelPage } from '../pages/participants-control-panel/participants-control-panel';
import { ParticipantsHomePage } from '../pages/participants-home/participants-home';
import { AvailablebiddingdetailsPage } from '../pages/availablebiddingdetails/availablebiddingdetails';
import { ParticipantsHomePageModule } from '../pages/participants-home/participants-home.module';
import { BidnowPage } from '../pages/bidnow/bidnow';
import { RegisterUserPage } from '../pages/register-user/register-user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    AddtourparticipantsPage,
    LoginPage,
    OperatorControlPanelPage,
    ParticipantsControlPanelPage,
    ParticipantsHomePage,
    AvailablebiddingdetailsPage,
    BidnowPage,
    RegisterUserPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    AddtourparticipantsPage,
    LoginPage,
    OperatorControlPanelPage,
    ParticipantsControlPanelPage,
    ParticipantsHomePage,
    AvailablebiddingdetailsPage,
    BidnowPage,
    RegisterUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    FileTransferObject,
    File,
    Camera
  ]
})
export class AppModule {}
