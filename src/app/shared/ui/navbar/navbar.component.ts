import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SharedModule} from "../../shared.module";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  styles: [
    `
      .activated-route {
        @apply underline cursor-pointer;
      }
    `
  ],
  template: `
    <div class="bg-black">
      <div class="container mx-auto flex justify-between py-4 text-white">
        <div class="">Angular Demo App</div>
        <div class="flex justify-between space-x-2">
          <span class="hover:cursor-pointer hover:underline" [routerLink]="['/']" [routerLinkActive]="'activated-route'" [routerLinkActiveOptions]="{exact: true}">Blog</span>
          <span  class="hover:cursor-pointer hover:underline" [routerLink]="['/about']" [routerLinkActive]="'activated-route'">About</span>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

}
