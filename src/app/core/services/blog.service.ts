import {inject, Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of, shareReplay, tap} from "rxjs";
import {PostResponse} from "@core/models";
import {makeStateKey, TransferState} from "@angular/platform-browser";
import {isPlatformServer} from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class BlogService {

  private _transferState = inject(TransferState);

  constructor(
    private _http: HttpClient,
    @Inject('BACKEND_API') private _apiUrl: string,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
  }

  getLatestPost(): Observable<PostResponse[]> {
    const POSTS_KEY = makeStateKey<PostResponse[]>('postsKey');

    if (this._transferState.hasKey(POSTS_KEY)) {
      const posts = this._transferState.get(POSTS_KEY, []);
      this._transferState.remove(POSTS_KEY);
      return of(posts);
    } else {
      return this._http.get<PostResponse[]>(`${this._apiUrl}posts?_limit=8`).pipe(
        shareReplay(),
        tap(posts => {
          if (isPlatformServer(this.platformId)) {
            this._transferState.set(POSTS_KEY, posts)
          }
        })
      )
    }

  }

  getPostDetails(id: string): Observable<PostResponse> {
    return this._http.get<PostResponse>(`${this._apiUrl}posts/${id}`).pipe(
      shareReplay()
    )
  }
}
