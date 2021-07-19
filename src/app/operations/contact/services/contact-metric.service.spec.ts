import { TestBed } from '@angular/core/testing';

import { ContactMetricService } from './contact-metric.service';

describe('ContactMetricService', () => {
  let service: ContactMetricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactMetricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
