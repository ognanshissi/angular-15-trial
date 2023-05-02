import {Component, Input, ViewEncapsulation} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from "@ui/button";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule, RouterModule, ButtonComponent],
  templateUrl: './about.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./about.component.scss'],
  host: {
    '[attr.disabled]': 'disabled || null'
  }
})
export class AboutComponent {

  @Input() disabled!: boolean;

}

export default  AboutComponent;
