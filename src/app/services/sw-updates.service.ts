import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate, UpdateActivatedEvent } from '@angular/service-worker';
import { concat, interval, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwUpdatesService {
  activated$: Observable<UpdateActivatedEvent>;

  constructor(appRef: ApplicationRef, private swu: SwUpdate) {
    if (swu.isEnabled) {
      const isStable$ = appRef.isStable.pipe(first(v => v));
      concat(isStable$, interval(6 * 60 * 60 * 1000)).subscribe(() => {
        this.swu.checkForUpdate();
      });
    }
    this.swu.available.subscribe(() => this.swu.activateUpdate());
    this.activated$ = this.swu.activated;
  }
}
