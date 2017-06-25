import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { app } from 'firebase';

@Component({
  selector: 'my-users',
  templateUrl: 'users.component.html',
  providers: []
})

export class UsersComponent {
  title = 'Kudos';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  showHide: boolean;

  constructor( public af: AngularFireDatabase ) {
    this.items = af.list('/users', {
      query: {
        orderByChild: 'user'
      }
    });
    this.showHide = true;
  }


  Send(desc: string) {
    this.items.push({user: desc});
    this.msgVal = '';
  }
}

