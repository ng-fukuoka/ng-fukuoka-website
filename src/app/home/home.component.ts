import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventData } from '../models';
import { EventService } from '../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['date', 'title', 'place'];
  events$: Observable<EventData[]>;

  constructor(private readonly eventService: EventService) {}

  ngOnInit() {
    this.events$ = this.eventService
      .fetchAll()
      .pipe(map(result => result.events));
  }
}
