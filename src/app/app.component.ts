import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {ButtonComponent} from "@ui/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, RouterModule, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularNew';
}
