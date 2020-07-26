import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventData } from '../models';
import { EventService } from '../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  events$: Observable<EventData[]> | null = null;

  constructor(private readonly eventService: EventService) {}

  ngOnInit(): void {
    this.events$ = this.eventService
      .fetchAll()
      .pipe(map((result) => result.events));
  }
}
