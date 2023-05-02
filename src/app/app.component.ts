import {Component, inject, OnInit} from '@angular/core';
import {SwPush} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularNew';

  private _swPush = inject(SwPush);


  ngOnInit() {

  }

  private subscribeToPush() {
    this._swPush.requestSubscription({
      serverPublicKey: 'PUBLIC_VAPID_KEY_OF_SERVER',
    })
      .then()
      .catch(_err => console.log('Hello connexion failed!'))
  }

}
