import {Component, OnInit} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {BlogService} from "@core/services";
import {Observable} from "rxjs";
import {PostResponse} from "@core/models";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './blog.component.html',
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

  posts$!: Observable<PostResponse[]>;

  constructor(
    private _blogService: BlogService
  ) {
  }

  ngOnInit() {
    this.posts$ = this._blogService.getLatestPost();
  }
}
