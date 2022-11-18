import {Route} from "@angular/router";
import {BlogComponent} from "./blog/blog.component";


export const ROUTES: Route[] = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  }
]
