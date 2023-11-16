import { TestBed } from '@angular/core/testing';

import { QuoteProviderService } from './quote-provider.service';

describe('QuoteProviderService', () => {
  let service: QuoteProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
