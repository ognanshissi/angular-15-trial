import { Component } from '@angular/core';

@Component({
  selector: 'h1[mat-title]',
  standalone: true,
  template: `
    <span class="text-6xl text-teal-700 font-bold border-b-8 border-b-teal-700 inline-block pb-4">
      <ng-content></ng-content>
    </span>
  `
})
export class TitleComponent {}
