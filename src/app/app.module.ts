import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TtsCallComponent } from './tts-call/tts-call.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule,MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material'
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './log/log.component';
// import {}
// import * as mqtt from 'node_modules/paho/paho.js';
@NgModule({
  declarations: [
    AppComponent,
    TtsCallComponent,
    HomeComponent,
    LoginComponent,
    LogComponent, 
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,MatFormFieldModule, MatInputModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
