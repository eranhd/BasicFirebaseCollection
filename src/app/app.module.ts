import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB-SgQ8Eq5IdXJtbd3g0sbeZtwepfAXtTM",
    authDomain: "myapp-6faea.firebaseapp.com",
    databaseURL: "https://myapp-6faea.firebaseio.com",
    projectId: "myapp-6faea",
    storageBucket: "myapp-6faea.appspot.com",
    messagingSenderId: "992351132628"
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


