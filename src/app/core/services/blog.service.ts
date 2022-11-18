import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostResponse} from "@core/models";

@Injectable({
  providedIn: "root"
})
export class BlogService {

  constructor(
    private _http: HttpClient,
    @Inject('BACKEND_API') private _apiUrl: string
  ) {
  }

  getLatestPost(): Observable<PostResponse[]> {
    return this._http.get<PostResponse[]>(`${this._apiUrl}posts?_limit=8`)
  }
}
