import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "@core/services";
import {map, switchMap, tap} from "rxjs";
import { TitleComponent } from "@ui/title";
import { RouterModule } from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";
import {AppShellRenderDirectives} from "../shared/directives/app-shell-render.directives";
import {AppShellNoRenderDirectives} from "../shared/directives/app-shell-norender.directives";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule, AppShellRenderDirectives, AppShellNoRenderDirectives],
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent {

  private _activatedRoute = inject(ActivatedRoute);
  private _blogService = inject(BlogService);

  private _title = inject(Title);
  private _meta = inject(Meta);

  post = toSignal(this._activatedRoute.params.pipe(
    map(params => params['id']),
    switchMap(id => this._blogService.getPostDetails(id).pipe(
      tap(post => {
        console.log(post);
        this._title.setTitle(post.title);
        this._meta.updateTag({name: 'description', content: post.body})
      })
    ))
  ));

}
