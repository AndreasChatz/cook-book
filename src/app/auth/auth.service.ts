import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  //  kanei login ton user kai epistrefei meta to token asixrona
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  // zitaei to token alla epidi ginete asigxrona mporei to token
  // na min exei epistrepsei otan ektelestoun oi http.put kai http.get
  // sto data-storage.service.ts. Se auti tin periptosi epistrefo to token
  // pou exei apothikefsei kata tin eisodo tou xristi otan kalo tin
  // signinUser methodo. Den einai apolita sostos tropos giati mporei na
  // kaleso tis http.put i http.get me token pou na exei liksei
  // giati tha einai auto pou eixa meta tin klisi tis methodou signinUser
  getToken(): string {
    // epistrefei to token asigxrona ( einai Promise )
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
      return this.token;
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }
}
