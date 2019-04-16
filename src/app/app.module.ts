import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBrWJx91j512T3q6AaTGNxu_3fq47bYhfg",
      authDomain: "devfestmn.firebaseapp.com",
      databaseURL: "https://devfestmn.firebaseio.com",
      projectId: "firebase-devfestmn",
      storageBucket: "firebase-devfestmn.appspot.com",
      messagingSenderId: "27347020178"
    }),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
