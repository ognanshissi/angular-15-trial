import {BlogComponent} from "./blog/blog.component";
import {AuthService} from "@core/services";
import {ProtectedComponent} from "./protected/protected.component";
import {PostDetailsComponent} from "./post-details/post-details.component";
import { Route } from "@angular/router";
import { inject } from "@angular/core";

export const appRoutes: Route[] = [
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
