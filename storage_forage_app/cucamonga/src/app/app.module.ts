import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { BrowsetabPage } from '../pages/browsetab/browsetab';
import { BrowsePage } from '../pages/browse/browse';
import { PostSpacePage } from '../pages/post-space/post-space';
import { MySpacesPage } from '../pages/my-spaces/my-spaces';
import { MessagesPage } from '../pages/messages/messages';
import { AccountPage } from '../pages/account/account';
import { ListingPage } from '../pages/listing/listing';
import { NgCalendarModule  } from 'ionic2-calendar';

import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { HTTP } from '@ionic-native/http';
import { AccountProvider } from '../providers/account/account';
import { PostingProvider } from '../providers/posting/posting';

// import { EventModalPage } from '../pages/event-modal/event-modal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    BrowsetabPage,
    BrowsePage,
    PostSpacePage,
    MySpacesPage,
    MessagesPage,
    AccountPage, 
    ListingPage
    
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    BrowsetabPage,
    BrowsePage,
    PostSpacePage,
    MySpacesPage,
    MessagesPage,
    AccountPage,
    ListingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    File,
    Transfer,
    Camera,
    FilePath,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountProvider,
    AccountProvider,
    PostingProvider
  ]
})
export class AppModule {}
