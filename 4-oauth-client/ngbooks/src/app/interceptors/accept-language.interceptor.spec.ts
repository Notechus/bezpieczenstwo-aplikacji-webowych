import { TestBed } from '@angular/core/testing';

import { AcceptLanguageInterceptor } from './accept-language.interceptor';

describe('AcceptLanguageInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AcceptLanguageInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AcceptLanguageInterceptor = TestBed.inject(AcceptLanguageInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
