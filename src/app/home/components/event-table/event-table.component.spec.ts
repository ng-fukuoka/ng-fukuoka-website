import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTableComponent } from './event-table.component';

describe('EventTableComponent', () => {
  let component: EventTableComponent;
  let fixture: ComponentFixture<EventTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventTableComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
