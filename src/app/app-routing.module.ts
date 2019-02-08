import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TtsCallComponent } from './tts-call/tts-call.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LogComponent} from './log/log.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const routes: Routes = [
  {path: 'log', component: LogComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  { path: 'text-to-speech-call', component: TtsCallComponent },
  { path: '', redirectTo: '/home',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
