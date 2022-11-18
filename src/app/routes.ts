import {Route} from "@angular/router";


export const ROUTES: Route[] = [
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  }
]
