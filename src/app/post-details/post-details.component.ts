import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "@core/services";
import {map, Observable, switchMap} from "rxjs";
import {PostResponse} from "@core/models";
import { TitleComponent } from "@ui/title";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent implements OnInit {

  post$!: Observable<PostResponse>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _blogService: BlogService
  ) {
  }

  ngOnInit() {
    this.post$ = this._activatedRoute.params.pipe(
      map(params => params['id']),
      switchMap(id => this._blogService.getPostDetails(id))
    )
  }
}
