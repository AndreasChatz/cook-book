import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature: string = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey:     "AIzaSyCUeXk_v5ocyzjnoOkwj7u3Tt0-8TxkVo8",
      authDomain: "cook-book-ed64b.firebaseapp.com",
    });
  }

}
