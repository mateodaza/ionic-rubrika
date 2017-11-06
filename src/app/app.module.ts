import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AsignaturasPage } from '../pages/asignaturas/asignaturas';
import { RubricasPage } from '../pages/rubricas/rubricas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyAvnRmBULmBEAqugStOXasVwhflIhcvn2M",
  authDomain: "ionic-rubrika.firebaseapp.com",
  databaseURL: "https://ionic-rubrika.firebaseio.com",
  projectId: "ionic-rubrika",
  storageBucket: "ionic-rubrika.appspot.com",
  messagingSenderId: "540242212889"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AsignaturasPage,
    RubricasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'ionic-rubrika'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AsignaturasPage,
    RubricasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
