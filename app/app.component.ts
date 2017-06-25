import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';
import { app } from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kudos';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  showHide: boolean;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/users', {
      query: {
        orderByChild: 'user'
      }
    });
    this.showHide = true;
    this.user = this.afAuth.authState;
  }
  login() {
    this.afAuth.auth.signInAnonymously();
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  Send(desc: string) {
    this.items.push({user: desc});
    this.msgVal = '';
  }
}
