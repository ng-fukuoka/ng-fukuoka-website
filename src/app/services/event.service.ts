import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EventSearchResult } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private readonly http: HttpClient) {}

  fetchAll(): Observable<EventSearchResult> {
    const httpParams = new HttpParams().set('series_id', '3886');

    return this.http.jsonp<EventSearchResult>(
      `https://connpass.com/api/v1/event?${httpParams.toString()}`,
      'callback'
    );
  }
}
