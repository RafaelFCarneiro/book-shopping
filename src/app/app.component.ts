import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as firebaseConf from './config/firebase-conf.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp((<any>firebaseConf));
  }
}
