import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";
import {PostResponse} from "@core/models";
import {BACKEND_API} from "../../app.module";

@Injectable({
  providedIn: "root"
})
export class BlogService {

  constructor(
    private _http: HttpClient,
    @Inject(BACKEND_API) private _apiUrl: string,
  ) {
  }

  getLatestPost(): Observable<PostResponse[]> {
    return this._http.get<PostResponse[]>(`${this._apiUrl}posts?_limit=8`).pipe(
      shareReplay()
    )
  }

  getPostDetails(id: string): Observable<PostResponse> {
    return this._http.get<PostResponse>(`${this._apiUrl}posts/${id}`).pipe(
      shareReplay()
    )
  }
}
