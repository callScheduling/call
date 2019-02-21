import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { PATTERN_VALIDATOR, PatternValidator } from '@angular/forms/src/directives/validators';
=======
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
>>>>>>> master
// import { Observable } from '';
// import {connect,Client} from 'node_modules/paho/paho'
declare var Paho: any; 
@Component({
  selector: 'app-tts-call',
  templateUrl: './tts-call.component.html',
  styleUrls: ['./tts-call.component.css']
})
export class TtsCallComponent implements OnInit {
  client;
  schedule:boolean;
  today:Date;
  //@Input() ngxMaterialTimepickerTheme: NgxMaterialTimepickerTheme;
  constructor(){
    this.today=new Date();
  }
  ngOnInit(){
    this.client= new Paho.MQTT.Client("m16.cloudmqtt.com", 38353, "laptop");
    this.client.connect({onSuccess: this.onConnected.bind(this),
      keepAliveInterval: 10,
      userName: "fhkodrux",
      useSSL: true,
      password : "8hvoOCrP4S06"      
      })
  }
  onConnected(){
    console.log("connected");
    //this.client.send("pi-mob","hi");
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onClickSubmit(data) {
    var x = data.mob +'|'+ data.text+'|'+data.date+'|'+data.time;
    console.log(x);
    this.client.send("pi-mob",x);
    alert("Call will be placed to : " + x);
 }
}
