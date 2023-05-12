import {RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {Title} from "@angular/platform-browser";

@Injectable({ providedIn: "root"})
export class TemplatePageTitleStrategy extends TitleStrategy {

  private readonly _title = inject(Title);


  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    if (title !== undefined) {
      this._title.setTitle(`Blog | ${title}`)
    }
  }

}
