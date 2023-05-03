import {Directive, Inject, inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef} from "@angular/core";
import {isPlatformServer} from "@angular/common";

@Directive({
  selector: '[appShellRender]',
  standalone: true
})
export class AppShellRenderDirectives implements OnInit {

  private _templateRef = inject(TemplateRef<any>);
  private _viewContainer = inject(ViewContainerRef);

  constructor(
    @Inject(PLATFORM_ID) private _platformId: any
  ) {
  }

  ngOnInit() {
    if (isPlatformServer(this._platformId)) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }
}
