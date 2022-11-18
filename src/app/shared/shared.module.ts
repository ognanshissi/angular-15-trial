import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {TitleComponent} from "@ui/title";
import {HttpClientModule} from "@angular/common/http";

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
