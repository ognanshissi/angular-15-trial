import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ROUTES, RouterModule } from "@angular/router";
import { CoreModule } from "@core/core.module";
import { ButtonComponent } from "@ui/button";
import { NavbarComponent } from "@ui/navbar";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { appRoutes } from "./routes";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      SharedModule,
      RouterModule,
      ButtonComponent,
      NavbarComponent,
      HttpClientModule,
      CoreModule],
    providers: [ {
      provide: 'BACKEND_API', useValue: 'https://jsonplaceholder.typicode.com/'
    }],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}