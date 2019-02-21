import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TtsCallComponent } from './tts-call/tts-call.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule,MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,MatCheckboxModule } from '@angular/material'
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
// import {}
// import * as mqtt from 'node_modules/paho/paho.js';
@NgModule({
  declarations: [
    AppComponent,
    TtsCallComponent,
    HomeComponent, 
  ],
  imports: [
    FormsModule,
    MatMenuModule,
    CommonModule,
    MatButtonModule,MatFormFieldModule, MatInputModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
