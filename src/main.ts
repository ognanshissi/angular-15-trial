import {bootstrapApplication} from "@angular/platform-browser";

import {provideRouter} from "@angular/router";
import {AppComponent} from "./app/app.component";
import {ROUTES} from "./app/routes";
import {provideHttpClient} from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: 'BACKEND_API', useValue: 'https://jsonplaceholder.typicode.com/'
    },
    provideRouter(ROUTES),
    // HttpClient provider
    provideHttpClient()
  ]
})
