import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { EventData } from '../../../models';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventTableComponent {
  @Input()
  events: EventData[] = [];

  displayedColumns = ['date', 'title', 'place'];
}
