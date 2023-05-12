import {SwUpdate, VersionReadyEvent} from "@angular/service-worker";
import {filter} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class PromptUpdateService {

  constructor(
    private  readonly _swUpdate: SwUpdate
  ) {

    _swUpdate.versionUpdates.pipe(
      filter((evt) : evt is VersionReadyEvent => evt.type === 'VERSION_READY')
    ).subscribe(_evt => {
      console.log('new version has been updated')
      // if (promptUser(evt)) {
      document.location.reload();
      // }
    })
  }
}
