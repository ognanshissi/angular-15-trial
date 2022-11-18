import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-black">
      <div class="container mx-auto flex justify-between">
        <div class="">Logo</div>
        <div class="flex justify-between">
          <span>Blog</span>
          <span>About</span>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

}
