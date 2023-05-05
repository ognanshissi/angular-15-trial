import {Directive, Inject, inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef} from "@angular/core";
import {isPlatformServer} from "@angular/common";

@Directive({
  selector: '[appShellNoRender]',
  standalone: true
})
export class AppShellNoRenderDirectives implements OnInit{

  private _templateRef = inject(TemplateRef<any>);
  private _viewContainer = inject(ViewContainerRef);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) {
  }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this._viewContainer.clear();
    } else {
      this._viewContainer.createEmbeddedView(this._templateRef);
    }
  }
}
