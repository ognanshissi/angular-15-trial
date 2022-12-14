import { Component } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}

export default AboutComponent;
