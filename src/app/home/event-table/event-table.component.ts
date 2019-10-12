import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { EventData } from '../../models';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventTableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'title', 'place'];

  @Input()
  public events: EventData[];

  constructor() {}

  ngOnInit() {}
}
