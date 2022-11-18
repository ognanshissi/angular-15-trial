import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  template: `
    <h1 class="text-6xl text-teal-700 font-bold border-b-8 border-b-teal-700 inline-block pb-4">
      <ng-content></ng-content>
    </h1>
  `
})
export class TitleComponent {

}
