import {Route} from "@angular/router";
import {BlogComponent} from "./blog/blog.component";
import {inject} from "@angular/core";
import {AuthService} from "@core/services";
import {ProtectedComponent} from "./protected/protected.component";
import {PostDetailsComponent} from "./post-details/post-details.component";

export const ROUTES: Route[] = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailsComponent
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component')
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [() => inject(AuthService).isLoggedIn()]
  }
]
