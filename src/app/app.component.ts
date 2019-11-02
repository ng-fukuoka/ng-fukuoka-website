import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SwUpdatesService } from './services';

const icons = [
  { name: 'twitter', path: '../assets/images/logo-twitter-white.svg' },
  { name: 'github', path: '../assets/images/logo-github-white.svg' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly onDestroy = new Subject();

  constructor(
    private domSanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry,
    private snackbar: MatSnackBar,
    private swUpdatesService: SwUpdatesService
  ) {
    for (const icon of icons) {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    }
  }

  ngOnInit() {
    this.swUpdatesService.activated$
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        const snack = this.snackbar.open('Update Available', 'Reload');
        snack.onAction().subscribe(() => {
          document.location.reload();
        });
      });
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }
}
