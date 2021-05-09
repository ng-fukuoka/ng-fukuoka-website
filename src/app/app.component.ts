import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SwUpdatesService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly onDestroy = new Subject<void>();

  constructor(
    private snackbar: MatSnackBar,
    private swUpdatesService: SwUpdatesService
  ) {}

  ngOnInit(): void {
    this.swUpdatesService.activated$
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        const snack = this.snackbar.open('Update Available', 'Reload');
        snack.onAction().subscribe(() => {
          document.location.reload();
        });
      });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }
}
