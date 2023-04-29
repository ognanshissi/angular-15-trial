import {CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {TitleComponent} from "@ui/title";

const MODULES = [
  CommonModule,
  RouterModule,
  TitleComponent
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
