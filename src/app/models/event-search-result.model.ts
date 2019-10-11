import { EventData } from './event-data.model';

export interface EventSearchResult {
  results_start: number;
  results_available: number;
  results_returned: number;
  events: EventData[];
}
