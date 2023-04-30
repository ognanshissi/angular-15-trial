import { AppComponent } from "./app.component";
import { CoreModule } from "@core/core.module";
import { ButtonComponent } from "@ui/button";
import { NavbarComponent } from "@ui/navbar";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { appRoutes } from "./routes";
import { NgModule, isDevMode } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabledBlocking'
}),
      BrowserModule.withServerTransition({ appId: 'serverApp' }),
      SharedModule,
      ButtonComponent,
      NavbarComponent,
      HttpClientModule,
      CoreModule,
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })],
    providers: [ {
      provide: 'BACKEND_API', useValue: 'https://jsonplaceholder.typicode.com/'
    }],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}