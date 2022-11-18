import { Component } from '@angular/core';
import {SharedModule} from "../shared/shared.module";

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent {

}
