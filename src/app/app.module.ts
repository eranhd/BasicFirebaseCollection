import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatInputModule, MatCardModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from "./auth.service";
import { GuardGuard } from "./guard.guard";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from './main/main.component';

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

const route: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: MainComponent, canActivate: [GuardGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
     MainComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(route)
  ],
  providers: [
    AuthService,
    GuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


