import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-firebase-app';
  people = this.db.list('devfest2019/speakers/').valueChanges();
  constructor(public db: AngularFireDatabase) {

  }
}
