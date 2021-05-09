import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventSearchResult } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private readonly http: HttpClient) {}

  fetchAll(): Observable<EventSearchResult> {
    const params = new HttpParams().set('series_id', '3886');

    return this.http
      .get<{ data: EventSearchResult }>(
        'https://ng-fukuoka.angular.jp/.netlify/functions/connpass-events',
        { params }
      )
      .pipe(map((res) => res.data));
  }
}
