import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAZgrqHshVxyReVVckbKTPH_uRLlfz4sSo",
  authDomain: "kudos-9ad00.firebaseapp.com",
  databaseURL: "https://kudos-9ad00.firebaseio.com",
  projectId: "kudos-9ad00",
  storageBucket: "kudos-9ad00.appspot.com",
  messagingSenderId: "1077519552034"

};
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot ([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


