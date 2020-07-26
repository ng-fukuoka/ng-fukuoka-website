import { TestBed } from '@angular/core/testing';
import { ServiceWorkerModule } from '@angular/service-worker';

import { SwUpdatesService } from './sw-updates.service';

describe('SwUpdatesService', () => {
  let service: SwUpdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceWorkerModule.register('', { enabled: false })],
    });
    service = TestBed.inject(SwUpdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
