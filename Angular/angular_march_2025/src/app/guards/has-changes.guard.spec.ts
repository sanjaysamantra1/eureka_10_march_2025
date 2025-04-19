import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { hasChangesGuard } from './has-changes.guard';

describe('hasChangesGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hasChangesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
